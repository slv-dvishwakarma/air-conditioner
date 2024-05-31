"use client";
import React from "react";
import Image from "next/image";
const WhatsApp = ({ number }: { number: string }) => {
  const isMobileDevice = () => {
    if (window) {
      return window?.matchMedia("(max-width: 768px)").matches;
    }
    return false;
  };

  const link = isMobileDevice()
    ? "https://wa.me/"
    : "https://web.whatsapp.com/send?phone=";

  // const link = "https://web.whatsapp.com/send?phone=";

  return (
    <div className="fixed z-[1] flex right-2  bottom-2 h-max  flex-col ">
      <a href={`${link}${number}`} target="_blank">
        <Image
          src="/whatsApp_icon.webp"
          width={80}
          height={80}
          alt="whats App"
        />
      </a>
    </div>
  );
};

export default WhatsApp;
