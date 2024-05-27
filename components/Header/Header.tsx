"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ParentContainer } from "../ParentContainer";
import { SVGIcon } from "../Icons";
import FastMarquee from "react-fast-marquee";
import { Timer } from "../Timer";
import { PaymentForm } from "../Razorpay/PaymentForm";
import { useApp } from "../AppProvider";

interface FieldItem {
  icon: string;
  title: string;
}

interface HeaderItem {
  logo: string;
  alt: string;
  label: string;
  phone: FieldItem;
  email: FieldItem;
}

interface HeaderProps {
  data: HeaderItem;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const endTime = new Date("2024-07-15T23:59:59");
  const { toggleContact }: any = useApp();
  return (
    <>
      <div className="top-bar bg-[#0F2C49]">
        <FastMarquee className="flex gap-3">
          <span className="text-slate-400 font-bold text-[15px] leading-10">
            शानदार ऑफर! ₹70000 का AC अब ₹30000 में! जल्दी करें, कहीं मौका छूट न
            जाए - अभी संपर्क करें! आप हमारी दुकान पर पधार सकते हैं: no. 17
            Imperial Plaza, Near Roadways, Bareilly
          </span>
          <Timer endTime={endTime} format="hh:mm:ss" />
        </FastMarquee>
      </div>
      <ParentContainer className="py-2.5">
        <div className="xl:flex lg:flex md:flex block justify-between items-center">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={data.logo}
                alt={data.alt}
                width={306}
                height={47}
                className="m-auto md:h-[54px] h-[36px] w-auto"
              />
            </Link>
            <div className="flex md:hidden gap-5 justify-between">
              <Link
                href={`tel:${data.phone.title}`}
                className="flex items-center gap-[10px] text-[var(--primary-color)]"
              >
                <SVGIcon
                  className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                  name={data.phone.icon}
                />
              </Link>
              <Link
                href={`mailto:${data.email.title}`}
                className="flex items-center gap-[10px] text-[var(--primary-color)] m-auto"
              >
                <SVGIcon
                  className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                  name={data.email.icon}
                />
              </Link>
            </div>
          </div>
          <div className="contact-details hidden md:flex">
            <div className="xl:flex lg:flex md:flex block gap-[15px] xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5">
              <div className="flex items-center gap-[10px] font-semibold xl:mt-0 lg:mt-0 md:mt-0 mt-5">
                <Link
                  href={`tel:${data.phone.title}`}
                  className="flex items-center gap-[10px] text-[var(--primary-color)]"
                >
                  <SVGIcon
                    className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                    name={data.phone.icon}
                  />
                  {data.phone.title}
                </Link>
              </div>
              <div className="flex items-center gap-[10px] font-semibold">
                <Link
                  href={`mailto:${data.email.title}`}
                  className="flex items-center gap-[10px] text-[var(--primary-color)] m-auto"
                >
                  <SVGIcon
                    className="text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[var(--primary-color)]"
                    name={data.email.icon}
                  />
                  {data.email.title}
                </Link>
              </div>
              <div className="hidden md:flex">
                <button
                  className="border border-[var(--primary-color)] text-[var(--primary-color)] rounded-md px-5 py-2 mr-2"
                  onClick={() => toggleContact()}
                >
                  अभी संपर्क करें
                </button>
                <div className="bg-[var(--primary-color)] text-white rounded-md px-5 py-2  relative">
                  अभी बुक करें <PaymentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParentContainer>
    </>
  );
};
