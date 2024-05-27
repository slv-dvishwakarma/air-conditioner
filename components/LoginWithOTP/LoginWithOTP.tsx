import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PaymentForm } from "../Razorpay/PaymentForm";

export const LoginWithOTP = () => {
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    if (!isOTPVerified && !otpSent) {
      setOtpSent(true);
      alert("OTP sent successfully to " + data.phoneNumber);
    } else if (!isOTPVerified && otpSent) {
      if (data.otp === "123456") {
        setIsOTPVerified(true);
        alert("OTP Verified!");
      } else {
        alert("Invalid OTP. Please try again.");
      }
      reset();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0F2C49] text-center">
        Verify Your <span className="text-[#FF5500]">Phone Number</span>
      </h2>
      {!isOTPVerified ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
          <div className="space-y-2">
            <label className="text-[#777777] text-[12px] font-medium leading-[21px] tracking-[0px] text-left">
              Enter Mobile No. *
            </label>
            <input
              type="text"
              {...register("phoneNumber", {
                required: true,
                pattern: /^[0-9]{10}$/,
              })}
              placeholder="Enter your phone number"
              className={`form-control w-full focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] text-[14px] px-3 border rounded-md border-solid border-[#BEBEBE] ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (
              <p className="text-red-500">Phone number is required</p>
            )}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
              <p className="text-red-500">Invalid phone number</p>
            )}
            {!otpSent ? (
              <div className="pt-[15px]">
                <button
                  type="submit"
                  className="bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold   uppercase   px-[40px] py-[15px]  rounded-xl "
                >
                  Send OTP
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <label className="text-[#777777] text-[12px] font-medium leading-[21px] tracking-[0px] text-left">
                  Enter OTP
                </label>
                <input
                  type="text"
                  {...register("otp", { required: true })}
                  placeholder="Enter OTP"
                  className="form-control w-full focus:outline-none focus:shadow-none shadow-none h-[50px] placeholder:text-[#9D9D9D] text-[14px] px-3 border rounded-md border-solid border-[#BEBEBE]"
                />
                {errors.otp && <p className="text-red-500">OTP is required</p>}
                <div className="pt-[15px]">
                  <button
                    type="submit"
                    className="bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold  uppercase  px-[40px] py-[15px] rounded-xl "
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      ) : (
        <div className="mt-5">
          <h2 className="text-center text-[#0F2C49]">Phone Number Verified!</h2>

          <div className="space-y-5">
            <h3 className="text-[25px] font-semibold text-[#0F2C49] text-center">
              Please Book Your AC
            </h3>
            <PaymentForm />
          </div>
        </div>
      )}
    </div>
  );
};
