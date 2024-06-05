"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PaymentForm } from "../Razorpay/PaymentForm";
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";

export const BannerSlider = () => {
  // const height =
  //   "h-[calc(122dvh)] md:h-[calc(146dvh)]  lg:h-[calc(100dvh-152px)]";
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
      <div className="desktop h-[calc(122dvh)] md:h-[calc(146dvh)]  lg:h-[calc(100dvh-152px)]">
        
        <Image
          src={jsonDataFile.banner.content.banner_desktop}
          className="w-full xl:h-full lg:h-[unset] md:h-[unset] h-full"
          width={jsonDataFile.banner.props.banner_img_width_desktop}
          height={jsonDataFile.banner.props.banner_img_height_desktop}
          alt="#Bareilly Deals #Bareilly Electronics #Bareilly AC, #Bareilly AC Deals"
        />
        <PaymentForm price={jsonDataFile.razorpay.props.price} button_label={jsonDataFile.razorpay.content.button_label}/> 
      </div>
      <div className="mobile">
      
        <Image
          src={jsonDataFile.banner.content.banner_mobile}
          className="w-full h-full"
          width={jsonDataFile.banner.props.banner_img_width_mobile}
          height={jsonDataFile.banner.props.banner_img_height_mobile}
          alt="#Bareilly Deals #Bareilly Electronics #Bareilly AC, #Bareilly AC Deals"
          // onClick={() => toggleContact()}
        />
          <PaymentForm price={jsonDataFile.razorpay.props.price} button_label={jsonDataFile.razorpay.content.button_label}/> 
      </div>
    </div>
  );
};


