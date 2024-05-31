"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { PaymentForm } from "../Razorpay/PaymentForm";
import jsonData from "../../app/jsonData.json"
import hi from "../../app/hi.json"

export const BannerSlider = () => {
  const height = "h-[calc(100dvh-183.5px)] md:h-[calc(100dvh-144.9px)]";
  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'en') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === null) {
        setJsonDataFile(hi);
      }
      else {
        setJsonDataFile(hi);
      }
    }, []);

  return (
    <div className="mb-[-7px] inline-block w-full overflow-hidden relative">
        <Slide height={height}>
            <Image
            src={jsonDataFile.banner.content.banner}
            className="w-full h-full object-cover"
            width={1349}
            height={1349}
            alt=""
          />
        </Slide>
    </div>
  );
};

const Slide = ({
  children,
  height,
}: {
  children: ReactNode;
  height: string;
}) => {
  return (
    <div className={`relative overflow-hidden ${height}`}>
      {children}
      <PaymentForm />
    </div>
  );
};
