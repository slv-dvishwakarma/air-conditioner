import React from "react";
import { WhatsApp } from "../WhatsApp";
import { EmailIcon } from "../EmailIcon";

export const FloatingIcon = ({ number }: { number: string }) => {
  return (
    <>
      <div className="fixed z-[1] flex right-0 top-0 bottom-0 h-max m-auto bg-white flex-col px-5 rounded-lg">
        <EmailIcon />
      </div>
      <WhatsApp number={number} />
    </>
  );
};
