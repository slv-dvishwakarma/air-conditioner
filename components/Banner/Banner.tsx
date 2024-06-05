"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GridBox } from "../GridBox";
import { ParentContainer } from "../ParentContainer";
import { SVGIcon } from "../Icons";
import { LoginWithOTP } from "../LoginWithOTP";
import { PaymentForm } from "../Razorpay/PaymentForm";

interface BannerItem {
  sub_title: string;
  title: string;
  button_label: string;
  banner_bg: string;
  banner_front: string;
}

interface BannerStyleItem {
  image_1: string;
  image_2: string;
}

interface BannerProps {
  banner: BannerItem;
  banner_style: BannerStyleItem;
}

export const Banner: React.FC<BannerProps> = ({ banner, banner_style }) => {
  const [open, setOpen] = useState(false);

  const handlePopup = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <section className="xl:h-[850px] lg:h-[750px] md:h-[600px] h-[850px] relative pt-[180px] pb-0 px-0">
        <div
          className='bg-cover bg-no-repeat h-full absolute top-0 before:bg-[rgba(11,59,94,0.85)] before:content-[""] before:absolute before:z-[1] before:inset-0'
          style={{ backgroundImage: `url(${banner.banner_bg})` }}
        >
          <div className="floating-object">
            <Image
              src={banner_style.image_1}
              alt="image-1 bounce-y"
              width={186}
              height={214}
              className="absolute w-[120px] z-[1] left-[30px] top-[30px] animate-[bouncey_10s_infinite_linear]"
            />
            <Image
              src={banner_style.image_1}
              alt="image-1 bounce-y"
              width={186}
              height={214}
              className="absolute w-[120px] z-[1] right-[30px] top-auto xl:bottom-[250px] lg:bottom-[250px] md:bottom-[250px] bottom-[100px] animate-[bouncex_10s_infinite_linear]"
            />
            <Image
              src={banner_style.image_2}
              alt="image-1 bounce-y"
              width={186}
              height={214}
              className="h-full absolute z-[1] left-[10%] inset-y-0 "
            />
            <Image
              src={banner_style.image_2}
              alt="image-1 bounce-y"
              width={186}
              height={214}
              className="h-full absolute w-[35%] z-[1] left-[20%] inset-y-0"
            />
          </div>
          <div
            className="bottom-shape bg-no-repeat bg-center bg-cover h-[172px] absolute w-full z-[1] left-0 bottom-0"
            style={{ backgroundImage: "url(./bottom-shape.png)" }}
          ></div>
          <ParentContainer>
            <GridBox columns={2} className="items-center py-[117px]">
              <GridBox.GridItem
                columnMerge={1}
                className="content-box relative z-[3]"
              >
                <div className="title-box relative mb-0 pl-0 pr-[45px] pt-[50px] pb-10">
                  <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase mb-0 pl-[30px] border-l-4 border-l-[#FF5500] border-solid">
                    {banner.sub_title}
                  </span>
                  <h1 className="text-white xl:text-7xl lg:text-5xl md:text-[47px] text-4xl font-bold xl:leading-[90px] lg:leading-[78px] md:leading-[65px] leading-[50px] relative mb-0 pl-[30px] border-l-4 border-l-[#FF5500] border-solid">
                    {banner.title}
                  </h1>
                  <div className="relative xl:top-[50px] lg:top-[50px] md:top-[50px] top-[30px]">
                    {/* <PaymentForm /> */}
                    <button
                      onClick={handlePopup}
                      className="bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold leading-[30px] overflow-hidden relative uppercase transition-all duration-500 ease-[ease] z-[1] px-[3.7rem] py-[1rem] rounded-none"
                    >
                      {banner.button_label}
                    </button>
                  </div>
                </div>
              </GridBox.GridItem>
              <GridBox.GridItem
                columnMerge={1}
                className="h-[175px] max-w-[531px] relative w-full z-[1] flex items-center"
              >
                <Image
                  src={banner.banner_front}
                  alt={banner.title}
                  width={872}
                  height={287}
                />
              </GridBox.GridItem>
            </GridBox>
          </ParentContainer>
        </div>
      </section>
      {open ? (
        <div
          className={`login ${
            open ? "fixed inset-0 overflow-y-auto z-[999] bg-[#00000096]" : ""
          }`}
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white p-[30px] rounded-lg xl:w-[50%] lg:w-[80%] md:w-[80%] w-[90%]">
              <LoginWithOTP />
              <button type="button" onClick={handleClose}>
                <SVGIcon
                  className="text-xl bg-[white] w-[30px] h-[30px] flex justify-center items-center absolute rounded-[50%] xl:right-[-35px] lg:right-[-35px] md:right-[-35px] right-[-10px] xl:top-[-30px] lg:top-[-30px] md:top-[-30px] top-[-15px]"
                  name="RxCross2"
                />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
