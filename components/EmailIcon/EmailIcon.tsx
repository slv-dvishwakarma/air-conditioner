"use client";
import React from "react";
import { useApp } from "../AppProvider";
export const EmailIcon = () => {
  const { toggleContact, contact }: any = useApp();
  return (
    <div className="rotate-90 fixed min-w-max inline-block -ml-[65px] rounded-[0px_0px_10px_10px] uppercase px-5 py-3 bg-red-500 text-white">
      <button onClick={() => toggleContact()}>अभी संपर्क करें</button>
    </div>
  );
};
