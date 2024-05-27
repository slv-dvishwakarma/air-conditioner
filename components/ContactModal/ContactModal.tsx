"use client";
import React from "react";
import { useApp } from "../AppProvider";
import { createPortal } from "react-dom";
import { Form } from "../Enquiry/Form";
import { RxCross2 } from "react-icons/rx";

export const ContactModal = () => {
  const { toggleContact, contact }: any = useApp();

  if (!contact) {
    return null;
  }
  return createPortal(
    <div className="fixed z-[100] bg-opacity-55 backdrop-blur-[10] left-0 top-0 w-full h-full bg-black flex items-center justify-center">
      <div className="bg-white rounded-[20px] text-[#2c3345] min-w-[90%] md:min-w-[480px] px-8 py-8">
        <Form
          onClose={() => toggleContact()}
          form={{
            fname: {
              name: "fname",
              placeholde: "Enter Your Full Name",
            },
            email: {
              name: "email",
              placeholde: "Enter Your Email",
            },
            phone: {
              name: "phone",
              placeholde: "Enter Your Phone Number",
            },
            textarea: {
              name: "textarea",
              placeholde: "Enter Your Message",
            },
            button: "Submit",
          }}
        />
      </div>
    </div>,
    document.body
  );
};
