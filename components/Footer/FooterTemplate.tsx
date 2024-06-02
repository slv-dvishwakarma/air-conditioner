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
}

export const FooterTemplate: React.FC<FooterProps> = ({ social_platform }) => {
  return (
    <ParentContainer className="bg-black xl:py-4 lg:py-1 md:py-1 py-5">
      <div className="flex md:flex-row md:py-[13px] flex-col-reverse gap-3 justify-between md:pr-[80px] md:items-center">
        <div className="md:w-6/12 flex gap-5 text-white">
          &copy; Bareillydeals Solutions Limited 2024
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
      {/* <GridBox
        columns={2}
        gap={10}
        className="items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5"
      >
        <GridBox.GridItem></GridBox.GridItem>

        <GridBox.GridItem>
          <div className="md:w-6/12 flex gap-5 justify-end">
            <div className="xl:hidden lg:hidden md:hidden block">
              <LanguageSelector />
            </div>
          </div>
        </GridBox.GridItem> */}
      {/* <GridBox.GridItem columnMerge={1} className="xl:hidden lg:hidden md:hidden block">
          
        </GridBox.GridItem>  */}
      {/* </GridBox> */}
    </ParentContainer>
  );
};
