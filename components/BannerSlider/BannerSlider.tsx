"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import { PaymentForm } from "../Razorpay/PaymentForm";
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";
import classNames from 'classnames';
import { useApp } from "../AppProvider";

export const BannerSlider = () => {
  const height =
    "h-[calc(122dvh)] md:h-[unset]  lg:h-[unset]";
    const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
    useEffect(() => {
      const newLanguage = localStorage.getItem('language');
      if (newLanguage === 'ENG') {
        setJsonDataFile(jsonData);
      } else if (newLanguage === "हिन्दी") {
        setJsonDataFile(hi);
      }
    }, []);

    // const { toggleContact, contact }: any = useApp();

  return (
    <div className="mb-[-7px] inline-block w-full overflow-hidden relative">
      <Slide height={height} className="desktop">
        
        <Image
          src={jsonDataFile.banner.content.banner_desktop}
          className="w-full xl:h-full lg:h-[unset] md:h-[unset] h-full cursor-pointer"
          width={jsonDataFile.banner.props.banner_img_width_desktop}
          height={jsonDataFile.banner.props.banner_img_height_desktop}
          alt="#Bareilly Deals #Bareilly Electronics #Bareilly AC, #Bareilly AC Deals"
          // onClick={() => toggleContact()}
        />
        
      </Slide>
      <Slide className="mobile">
      
        <Image
          src={jsonDataFile.banner.content.banner_mobile}
          className="w-full h-full cursor-pointer"
          width={jsonDataFile.banner.props.banner_img_width_mobile}
          height={jsonDataFile.banner.props.banner_img_height_mobile}
          alt="#Bareilly Deals #Bareilly Electronics #Bareilly AC, #Bareilly AC Deals"
          // onClick={() => toggleContact()}
        />
     
      </Slide>
    </div>
  );
};

const Slide = ({
  className,
  children,
  height,
}: {
  children: ReactNode;
  height?: string;
  className?: string;
}) => {
  return (
    <div className={classNames("relative overflow-hidden", height, className)}>
    {children}
     <PaymentForm /> 
  </div>
  );
};
