"use client";
import React from "react";
import { useApp } from "../AppProvider";

interface EmailIconProps {
  contact_button: string;
}

export const EmailIcon: React.FC<EmailIconProps> = ({ contact_button }) => {
  const { toggleContact, contact }: any = useApp();
  return (
    <div className="rotate-90 fixed min-w-max inline-block -ml-[65px] rounded-[0px_0px_10px_10px] uppercase px-5 py-3 bg-[var(--primary-color)] text-white">
      <button onClick={() => toggleContact()}>{contact_button}</button>
    </div>
  );
};
