"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { PaymentForm } from "../Razorpay/PaymentForm";
import jsonData from "../../app/jsonData.json"
import hi from "../../app/hi.json"

export const BannerSlider = () => {

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
    <div>
        <Slide >
            <Image
            src={jsonDataFile.banner.content.banner}
            className="w-full h-full object-cover"
            width={5997}
            height={2350}
            alt=""
          />
        </Slide>
    </div>
  );
};

const Slide = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <div>
      {children}
      <PaymentForm />
    </div>
  );
};
