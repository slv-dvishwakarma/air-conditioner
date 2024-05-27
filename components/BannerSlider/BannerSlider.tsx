"use client";
import React, { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { PaymentForm } from "../Razorpay/PaymentForm";
export const BannerSlider = () => {
  const height = "h-[calc(100dvh-183.5px)] md:h-[calc(100dvh-188.6px)]";
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className={`mb-[-7px] inline-block w-full overflow-hidden relative`}>
      <Slider {...settings}>
        <Slide height={height}>
          <Image
            src="/banner-1.jpg"
            className="w-full h-full object-cover desktop"
            width={1349}
            height={1349}
            alt=""
          />
          <Image
            src="/mobile-banner-1.jpg"
            className="w-full h-full object-cover mobile"
            width={1349}
            height={1349}
            alt=""
          />
        </Slide>

        <Slide height={height}>
          <Image
            src="/banner-1.jpg"
            className="w-full h-full object-cover desktop"
            width={1349}
            height={1349}
            alt=""
          />
          <Image
            src="/mobile-banner-1.jpg"
            className="w-full h-full object-cover mobile"
            width={1349}
            height={1349}
            alt=""
          />
        </Slide>
      </Slider>
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
