"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ParentContainer } from "../ParentContainer";
import { SVGIcon } from "../Icons";
import FastMarquee from "react-fast-marquee";
import { Timer } from "../Timer";
import { PaymentForm } from "../Razorpay/PaymentForm";
import { useApp } from "../AppProvider";
import { LanguageSelector } from "../LanguageSelector";
import { MultiLanguage } from "../LanguageSelector/MultiLanguage";
import { Language } from "../LanguageSelector/Language";

interface ContactItem {
  icon: string;
  title: string;
}

interface MainHeaderItem {
  logo: string;
  alt: string;
  phone: ContactItem;
  email: ContactItem;
  contact_button: string;
  rajorpay_button: string;
}

interface TopBarItem {
  offer_title: string;
}

interface HeaderProps {
  main_header: MainHeaderItem;
  top_bar: TopBarItem;
}

export const HeaderTemplate: React.FC<HeaderProps> = ({
  main_header,
  top_bar,
}) => {
  const [endTime, setEndTime] = useState<Date>(new Date());

  // Set the end time to be 24 hours from now
  useEffect(() => {
    const newEndTime = new Date();
    newEndTime.setHours(newEndTime.getHours() + 24);
    setEndTime(newEndTime);
  }, []);

  const { toggleContact }: any = useApp();
  return (
    <>
      <div className="top-bar bg-black">
        <FastMarquee className="flex gap-3">
          <span className="text-white font-bold text-[15px] leading-10">
            {top_bar.offer_title}{" "}
            <Link href={`tel:${main_header.phone.title}`}>
              {" "}
              {main_header.phone.title}
            </Link>
          </span>
          <Timer endTime={endTime} />
        </FastMarquee>
      </div>
      <ParentContainer className="xl:py-1 lg:py-1 md:py-1 py-3">
        <div className="xl:flex lg:flex md:flex block justify-between items-center">
          <div className="flex items-center justify-between grow">
            <Link href="/">
              <Image
                src={main_header.logo}
                alt={main_header.alt}
                width={620}
                height={124}
                className="xl:m-auto lg:m-auto md:m-auto xl:h-[54px] lg:h-[54px] md:h-[54px] h-[unset] xl:w-auto lg:w-auto md:w-auto w-[70%]"
              />
            </Link>
            <div className="flex xl:hidden lg:flex md:flex flex gap-4 justify-between">
              
              <Link
                href={`tel:${main_header.phone.title}`}
                className="flex items-center gap-[10px] text-[var(--primary-color)]"
              >
                <SVGIcon
                  className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                  name={main_header.phone.icon}
                />
              </Link>
              <Link
                href={`mailto:${main_header.email.title}`}
                className="flex items-center gap-[10px] text-[var(--primary-color)] m-auto"
              >
                <SVGIcon
                  className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                  name={main_header.email.icon}
                />
              </Link>
              {/* <LanguageSelector /> */}
              {/* <MultiLanguage /> */}
              <Language />
            </div>
          </div>
          <div className="contact-details xl:block hidden lg:hidden">
            <div className="xl:flex lg:flex md:flex block gap-[15px] xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
              <div className="flex items-center gap-[10px] font-semibold xl:mt-0 lg:mt-0 md:mt-0 mt-5">
                <Link
                  href={`tel:${main_header.phone.title}`}
                  className="flex items-center gap-[10px] text-[var(--primary-color)]"
                >
                  <SVGIcon
                    className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                    name={main_header.phone.icon}
                  />
                  {main_header.phone.title}
                </Link>
              </div>
              <div className="flex items-center gap-[10px] font-semibold">
                <Link
                  href={`mailto:${main_header.email.title}`}
                  className="flex items-center gap-[10px] text-[var(--primary-color)] m-auto"
                >
                  <SVGIcon
                    className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                    name={main_header.email.icon}
                  />
                  {main_header.email.title}
                </Link>
              </div>
              <div className="hidden md:flex items-center gap-3">
                {/* <button
                  className="bg-[var(--primary-color)] text-white rounded-md px-5 py-2  relative"
                  onClick={() => toggleContact()}
                >
                  {main_header.contact_button}
                </button> */}
                {/* <div className="bg-[var(--primary-color)] text-white rounded-md px-5 py-2  relative">
                  {main_header.rajorpay_button} <PaymentForm />
                </div> */}
                <div>
                  {/* <LanguageSelector /> */}
                  {/* <MultiLanguage /> */}
                  <Language />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParentContainer>
    </>
  );
};
