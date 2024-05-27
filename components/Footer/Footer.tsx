import React from "react";
import { ParentContainer } from "../ParentContainer";
import { GridBox } from "../GridBox";
import Link from "next/link";
import { SVGIcon } from "../Icons";

interface IconItem {
  icon: string;
  url: string;
}

interface FooterItem {
  social: IconItem[];
  address: string;
  map_link: string;
}

interface FooterProps {
  data: FooterItem;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <ParentContainer className="bg-[#0F2C49] py-5">
      <GridBox
        columns={2}
        gap={10}
        className="items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5"
      >
        <GridBox.GridItem columnMerge={1}>
          <Link
            href={data.map_link}
            target="_blank"
            className="flex items-center gap-2.5 text-white text-base group hover:text-[#FF5500]"
          >
            <SVGIcon
              className="text-white group-hover:text-[#FF5500] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white group-hover:border-[#FF5500]"
              name="map"
            />{" "}
            {data.address}
          </Link>
        </GridBox.GridItem>
        {/* <GridBox.GridItem columnMerge={1}>
          <div className="md:w-6/12 xl:ml-auto lg:ml-auto md:ml-auto ml-auto xl:mr-0 lg:mr-0 md:mr-0 mr-auto">
            <ul className="flex gap-5 md:gap-[40px]">
              {data.social.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <SVGIcon
                      className="text-white hover:text-[#FF5500] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white hover:border-[#FF5500]"
                      name={item.icon}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </GridBox.GridItem> */}
      </GridBox>
    </ParentContainer>
  );
};
