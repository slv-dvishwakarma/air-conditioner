import React from "react";
import { ParentContainer } from "../ParentContainer";
import Link from "next/link";
import { SVGIcon } from "../Icons";

interface IconItem {
  icon: string;
  url: string;
}

interface LocationItem {
  location_label: string;
  map_link: string;
}

interface FooterItem {
  social_platform: IconItem[];
  location: LocationItem;
}

interface FooterProps {
  location_icon: string;
  content: FooterItem;
}

export const FooterTemplate: React.FC<FooterProps> = ({ location_icon, content }) => {
  return (
    <ParentContainer className="bg-black xl:py-[3.7px] lg:py-1 md:py-1 py-5">
      <div className="xl:flex lg:flex md:flex hidden md:flex-row md:py-[13px] flex-col-reverse gap-3 justify-between md:pr-[80px] md:items-center">
        <Link href={content.location.map_link} target="blank" className="group hover:text-[var(--primary-color)] md:w-6/12 flex items-center gap-3 text-white xl:justify-start lg:justify-start md:justify-start justify-center text-[15px]">
          <SVGIcon
            className="text-white group-hover:text-[var(--primary-color)] text-xl w-[30px] h-[30px] flex items-center justify-center border rounded-[50%] border-solid border-white group-hover:border-[var(--primary-color)]"
            name={location_icon}
          />
          <span>{content.location.location_label}</span>
        </Link>
        <ul className="flex gap-5 md:gap-[40px] xl:justify-start lg:justify-start md:justify-start justify-center">
          {content.social_platform.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank">
                <SVGIcon
                  className="text-white hover:text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white hover:border-[var(--primary-color)]"
                  name={item.icon}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="xl:hidden lg:hidden md:hidden flex">
        <ul className="flex gap-5 md:gap-[40px] m-auto">
          {content.social_platform.map((item, index) => (
            <li key={index}>
              <Link href={item.url} target="_blank">
                <SVGIcon
                  className="text-white hover:text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white hover:border-[var(--primary-color)]"
                  name={item.icon}
                />
              </Link>
            </li>
          ))}
          <li><Link href={content.location.map_link} target="blank">
            <SVGIcon
              className="text-white hover:text-[var(--primary-color)] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-white hover:border-[var(--primary-color)]"
              name={location_icon}
            />
          </Link></li>
        </ul>
      </div>
    </ParentContainer>
  );
};
