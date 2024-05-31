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
    <ParentContainer className="bg-[#0F2C49] xl:py-1 lg:py-1 md:py-1 py-5">
      <GridBox 
        columns={2}
        gap={10}
        className="items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5"
      >
        <GridBox.GridItem columnMerge={1}>
        <div className="md:w-6/12 flex gap-5">
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
            <div className="xl:hidden lg:hidden md:hidden block">
            <LanguageSelector />
            </div>
          </div>
        </GridBox.GridItem>
        {/* <GridBox.GridItem columnMerge={1} className="xl:hidden lg:hidden md:hidden block">
          
        </GridBox.GridItem>  */}
      </GridBox>
    </ParentContainer>
  );
};
