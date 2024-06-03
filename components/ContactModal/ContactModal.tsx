"use client";
import React, { useEffect, useState } from "react";
import { useApp } from "../AppProvider";
import { createPortal } from "react-dom";
import { Form } from "../Enquiry/Form";
import jsonData from "../../app/jsonData.json";
import hi from "../../app/hi.json";

export const ContactModal = () => {

  const [jsonDataFile, setJsonDataFile] = useState<typeof jsonData | typeof hi>(hi);
  useEffect(() => {
    const newLanguage = localStorage.getItem('language');
    if (newLanguage === 'EN') {
      setJsonDataFile(jsonData);
    } else if (newLanguage === "हि") {
      setJsonDataFile(hi);
    }
  }, []);

  const { toggleContact, contact }: any = useApp();

  if (!contact) {
    return null;
  }
  return createPortal(
    <div className="fixed z-[100] bg-opacity-55 backdrop-blur-[10] left-0 top-0 w-full h-full bg-black flex items-center justify-center">
      <div className="bg-white rounded-[20px] text-[#2c3345] min-w-[90%] md:min-w-[480px] px-8 py-8">
        <Form
          onClose={() => toggleContact()}
          form={jsonDataFile.contact.content}
        />
      </div>
    </div>,
    document.body
  );
};
