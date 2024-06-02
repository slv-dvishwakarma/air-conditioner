"use client";
import React from "react";
import { useApp } from "../AppProvider";
import { RxCross2 } from "react-icons/rx";
export const PaymentSuccess = () => {
  const { managePaymentId, paymentId }: any = useApp();
  if (paymentId === undefined) {
    return null;
  }
  return (
    <div className="fixed flex items-center justify-center left-0 top-0 z-[8] bg-black bg-opacity-45 w-full h-full">
      <div className="bg-white rounded-lg relative">
        <button
          className="border absolute top-3 right-3 z-[99] p-1 text-[var(--primary-color)] border-red-200 hover:border-[var(--primary-color)] active:border-red-100 rounded-full"
          onClick={() => managePaymentId?.(undefined)}
        >
          <RxCross2 />
        </button>
        <div className="container-1">
          <div className="paper-container">
            <div className="paper">
              <div className="main-contents">
                <div className="success-icon">&#10004;</div>
                <div className="success-title">Payment Complete</div>
                <div className="success-description">
                  Thank you for completing the payment! You will shortly receive
                  an email of your payment.
                </div>
                <div className="order-details">
                  <div className="order-number-label">Transaction ID</div>
                  <div className="order-number">{paymentId}</div>
                  <div className="complement">Thank You!</div>
                </div>
              </div>
              <div className="jagged-edge"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
