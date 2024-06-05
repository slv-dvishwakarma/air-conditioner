"use client"
import React, { useEffect, useState } from "react";
// import { WhatsApp } from "../WhatsApp";
import { EmailIcon } from "../EmailIcon";
import dynamic from "next/dynamic";
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";

const WhatsAppCOmponent = dynamic(() => import("../WhatsApp/WhatsApp"), {
  ssr: false, // Optional: set to false if you want client-side only
});

export const FloatingIcon = () => {

  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'ENG') {
      setJsonDataFile(jsonData);
    } else if (newLanguage === "हिन्दी") {
      setJsonDataFile(hi);
    }
  }, []);

  return (
    <>
      <div className="fixed z-[1] flex right-0 top-0 bottom-0 h-max m-auto bg-white flex-col px-5 rounded-lg">
        <EmailIcon contact_button={jsonDataFile.header.content.main_header.contact_button}/>
      </div>
      <WhatsAppCOmponent number={jsonDataFile.header.content.main_header.phone.title} />
    </>
  );
};
