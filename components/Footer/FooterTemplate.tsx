import React from "react";
import { ParentContainer } from "../ParentContainer";
import { GridBox } from "../GridBox";
import Link from "next/link";
import { SVGIcon } from "../Icons";
import { LanguageSelector } from "../LanguageSelector";

interface IconItem {
  icon: string;
  url: string;
}

interface FooterProps {
  social_platform: IconItem[];
  copyright_text: string;
}

export const FooterTemplate: React.FC<FooterProps> = ({ social_platform, copyright_text }) => {
  return (
    <ParentContainer className="bg-black xl:py-[3.7px] lg:py-1 md:py-1 py-5">
      <div className="flex md:flex-row md:py-[13px] flex-col-reverse gap-3 justify-between md:pr-[80px] md:items-center">
        <div className="md:w-6/12 flex gap-5 text-white">
          {copyright_text}
        </div>
        
        <ul className="flex gap-5 md:gap-[40px]">
          {social_platform.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank">
                <SVGIcon
                  className="text-white hover:text-[#FF5500] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white hover:border-[#FF5500]"
                  name={item.icon}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ParentContainer>
  );
};
