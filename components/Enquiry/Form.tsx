"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Text } from "../Text";
import { Email } from "../Email";
import { Phone } from "../Phone";
import { TextArea } from "../TextArea";
import { ImSpinner8 } from "react-icons/im";
import { CiCircleCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

interface FormItem {
  name: string;
  placeholde: string;
}

interface FieldItem {
  fname: FormItem;
  email: FormItem;
  phone: FormItem;
  textarea: FormItem;
  button: string;
}

interface FormProps {
  form: FieldItem;
  onClose?: () => void;
}

export const Form: React.FC<FormProps> = ({ form, onClose }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [message, setMessage] = useState<any>(null);
  const onSubmit = async (data: any) => {
    const url = "https://bareillydeals.com/api/send-email";
    // const url = "http://localhost:3000/api/send-email";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      setMessage("success");
      setTimeout(() => {
        onClose?.();
      }, 3000);
    } else {
      setMessage("failed");
    }
  };
  return (
    <>
      {message === "success" ? (
        <div className="relative p-10">
          <div className="flex justify-center">
            <CiCircleCheck size={70} className="text-green-500" />
          </div>
          <h2 className="text-center text-2xl font-[600] mt-3">सफलतापूर्वक</h2>

          <div className=" mt-2 text-center inline-block p-2 text-sm break-words w-[90%] md:w-[436px] ">
            आपका ईमेल सफलतापूर्वक भेज दिया गया है। हम आपके संदेश को प्राप्त कर
            रहे हैं और जल्द ही आपसे संपर्क करेंगे। धन्यवाद!
          </div>
          <button
            className="border absolute -top-3 -right-3 p-1 text-red-500 border-red-200 hover:border-red-500 active:border-red-100 rounded-full"
            onClick={() => onClose?.()}
          >
            <RxCross2 />
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between mb-3 items-center">
            <h2 className="text-3xl font-[700] ">Get In Touch</h2>
            <button
              className="border  -top-3 -right-3 p-1 text-red-500 border-red-200 hover:border-red-500 active:border-red-100 rounded-full"
              onClick={() => onClose?.()}
            >
              <RxCross2 />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="md:grid md:grid-cols-2 gap-3">
              <Text
                name={form.fname.name}
                placeholder={form.fname.placeholde}
                control={control}
                errors={errors}
              />
              <Email
                name={form.email.name}
                placeholder={form.email.placeholde}
                control={control}
                errors={errors}
              />
            </div>
            <Phone
              name={form.phone.name}
              placeholder={form.phone.placeholde}
              control={control}
              errors={errors}
            />
            <TextArea
              name={form.textarea.name}
              placeholder={form.textarea.placeholde}
              control={control}
              errors={errors}
            />
            <button
              type="submit"
              className="bg-[var(--primary-color)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold   uppercase transition-all duration-500 ease-[ease] z-[1] px-[3.7rem] h-[40px] leading-[40px] items-center rounded-lg  mt-5 w-[174px] inline-flex justify-center"
            >
              {isSubmitting ? (
                <ImSpinner8 className="animate-spin" />
              ) : (
                form.button
              )}
            </button>
            <div>
              {message === "failed" ? (
                <div className="text-red-500 border border-red-500 border-dashed rounded-md mt-2 inline-block p-2 text-sm break-words w-[90%] md:w-[436px] ">
                  क्षमा करें, हमें आपके ईमेल को भेजने में कोई समस्या आई है। हम
                  इसे बग़ैर भेजे गए संदेश के साथ देख रहे हैं। कृपया पुन: प्रयास
                  करें।
                </div>
              ) : (
                ""
              )}
            </div>
          </form>
        </>
      )}
    </>
  );
};
