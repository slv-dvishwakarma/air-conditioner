"use client";
// PaymentForm.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PaymentSuccess } from "../PaymentSuccess";
import { createPortal } from "react-dom";
import { useApp } from "../AppProvider";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentForm: React.FC = () => {
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

  const paymentAmount = 10000; // Amount in paisa (1 INR = 100 paisa)

  const openRazorpay = () => {
    if (window?.Razorpay) {
      const options = {
        key: "rzp_test_UeQD9MCnjj4aAn", // Enter your Razorpay API Key
        // key: "rzp_test_9BfdzsMuAxlSUd", // Enter your Razorpay API Key
        amount: paymentAmount,
        currency: "INR",
        name: "Bareilly Deals",
        description: "Payment for O General AC Booking",
        image: "/logo.png",
        theme: {
          color: "var(--primary-color)",
        },
        handler: function (response: any) {
          // Modify this type if you know the response structure
          if (response?.razorpay_payment_id) {
            managePaymentId(response?.razorpay_payment_id);
            // router.push(`/success/?id=${response.razorpay_payment_id}`);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      console.error("Razorpay script not loaded.");
      // Handle error or provide fallback
    }
  };

  return (
    <>
      <button
        onClick={openRazorpay}
        className=" absolute left-0 top-0 w-full h-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold  uppercase  px-[40px] py-[15px] rounded-xl flex m-auto"
      ></button>
      {/* {createPortal(<PaymentSuccess />, document.body)} */}
    </>
  );
  return (
    <button
      onClick={openRazorpay}
      className="bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold  uppercase  px-[40px] py-[15px] rounded-xl flex m-auto"
    >
      Book Now
    </button>
  );
};
