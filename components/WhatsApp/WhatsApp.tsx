"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const WhatsApp = ({ number }: { number: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      }
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile); // Update on resize

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const link = isMobile
    ? "https://wa.me/"
    : "https://web.whatsapp.com/send?phone=";

  return (
    <div className="fixed z-[1] flex right-2 bottom-2 h-max flex-col">
      <a href={`${link}${number}`} target="_blank" rel="noopener noreferrer">
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
