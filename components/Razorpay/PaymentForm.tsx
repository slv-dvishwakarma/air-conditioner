"use client";
// PaymentForm.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PaymentSuccess } from "../PaymentSuccess";
import { createPortal } from "react-dom";
import { useApp } from "../AppProvider";

interface PaymentFormProps {
  price: number;
  button_label: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ price, button_label }) => {
  const router = useRouter();
  const { managePaymentId, paymentId }: any = useApp();

  useEffect(() => {
    // Ensure Razorpay script is loaded before initializing
    if (!window?.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Razorpay script loaded.");
      };
    }
  }, []);

  const paymentAmount = price; // Amount in paisa (1 INR = 100 paisa)

  const openRazorpay = () => {
    if (window?.Razorpay) {
      const options = {
        key: "rzp_test_UeQD9MCnjj4aAn",
        amount: paymentAmount,
        currency: "INR",
        name: "Bareilly Deals",
        description: "Payment for O General AC Booking",
        image: "/fav-icon.png",
        theme: {
          color: "#ED1C24",
        },
        handler: function (response: any) {
          if (response?.razorpay_payment_id) {
            managePaymentId(response?.razorpay_payment_id);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay script not loaded.");
    }
  };

  return (
    <>
      <button
        onClick={openRazorpay}
        className="rounded-[56px] absolute xl:left-[6%] lg:left-[6%] md:left-[6%] left-0 xl:right-[unset] lg:right-[unset] md:right-[unset] right-0 xl:w-[20%] lg:w-w-[20%] md:w-w-[20%] w-[59%] xl:bottom-[7%] lg:bottom-[7%] md:bottom-[7%] bottom-[3%] text-white justify-center xl:text-lg lg:text-lg md:text-lg text-sm font-bold text-center px-[0px] py-[15px] flex m-auto bg-[#ED1C24] text-white font-semibold no-underline transition-all duration-[0.3s]  before:bg-[initial] before:bg-[linear-gradient(#fff_0,rgba(255,255,255,0)_100%)] before:content-[''] before:h-3/6 before:opacity-50 before:absolute before:transition-all before:duration-[0.3s] before:w-[92%] before:rounded-[125px] before:left-[4%] before:top-0 after:bg-[initial] after:bg-[linear-gradient(#fff_0,rgba(255,255,255,0)_100%)] after:content-[''] after:h-3/6 after:opacity-50 after:absolute after:transition-all after:duration-[0.3s] after:w-[92%] after:rounded-[125px] after:left-[4%] after:top-0"
      >{button_label}</button>
      {/* {createPortal(<PaymentSuccess />, document.body)} */}
      {/* <button onClick={openRazorpay}
        className=" absolute bg-[#ED1C24] left-[6%] bottom-[7%] text-white text-lg font-bold  uppercase  px-[40px] py-[15px] rounded-xl flex m-auto before:content-[''] before:h-full before:absolute before:w-full before:rounded-[100%] before:scale-110">
        {button_label}
        <div className="before:bg-black before:content-[''] before:h-[50px] before:absolute before:w-[50px] before:rounded-[100%] after:bg-black after:content-[''] after:h-[50px] after:absolute after:w-[50px] after:rounded-[100%]">
          <span className="h-[30px] left-[-15px] top-[-15px] w-[30px] text-[transparent] bg-[#FF914C]">.</span>
          <span className="h-[25px] w-[25px] -left-5 top-10 bg-[#FF914C]"></span>
        </div>
      </button> */}
    </>
  );
};
