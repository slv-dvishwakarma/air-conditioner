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

interface SuccessItem {
  heading: string;
  message: string;
}

interface FormItem {
  name: string;
  placeholder: string;
}

interface FieldItem {
  fname: FormItem;
  email: FormItem;
  phone: FormItem;
  textarea: FormItem;
  button: string;
  title: string;
}

interface ContentItem {
  cnt_form: FieldItem;
  status_success: SuccessItem;
  status_error: string;
}

interface FormProps {
  form: ContentItem;
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
    //  const url = "http://localhost:3000/api/send-email";
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
          <h2 className="text-center text-2xl font-[600] mt-3">{form.status_success.heading}</h2>

          <div className=" mt-2 text-center inline-block p-2 text-sm break-words w-[90%] md:w-[436px] ">
            {form.status_success.message}
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
            <h2 className="text-3xl font-[700] ">{form.cnt_form.title}</h2>
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
                name={form.cnt_form.fname.name}
                placeholder={form.cnt_form.fname.placeholder}
                control={control}
                errors={errors}
              />
              <Email
                name={form.cnt_form.email.name}
                placeholder={form.cnt_form.email.placeholder}
                control={control}
                errors={errors}
              />
            </div>
            <Phone
              name={form.cnt_form.phone.name}
              placeholder={form.cnt_form.phone.placeholder}
              control={control}
              errors={errors}
            />
            <TextArea
              name={form.cnt_form.textarea.name}
              placeholder={form.cnt_form.textarea.placeholder}
              control={control}
              errors={errors}
            />
            <button
              type="submit"
              className="bg-[var(--primary-color)] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold   uppercase transition-all duration-500 ease-[ease] z-[1] px-3 h-[40px] leading-[40px] items-center rounded-lg  mt-5 w-[174px] inline-flex justify-center"
            >
              {isSubmitting ? (
                <ImSpinner8 className="animate-spin" />
              ) : (
                form.cnt_form.button
              )}
            </button>
            <div>
              {message === "failed" ? (
                <div className="text-red-500 border border-red-500 border-dashed rounded-md mt-2 inline-block p-2 text-sm break-words w-[90%] md:w-[436px] ">
                  {form.status_error}
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
