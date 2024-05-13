"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import { Text } from '../Text';
import { Email } from '../Email';
import { Phone } from '../Phone';
import { TextArea } from '../TextArea';

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
}

export const Form: React.FC<FormProps> = ({ form }) => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Text name={form.fname.name} placeholder={form.fname.placeholde} control={control} errors={errors}/>
            <Email name={form.email.name} placeholder={form.email.placeholde} control={control} errors={errors}/>
            <Phone name={form.phone.name} placeholder={form.phone.placeholde} control={control} errors={errors}/>
            <TextArea name={form.textarea.name} placeholder={form.textarea.placeholde} control={control} errors={errors}/>
            <button type='submit' className='bg-[#FF5500] shadow-[0_10px_30px_rgba(0,0,0,0.1)] text-white text-sm font-bold leading-[30px]  uppercase transition-all duration-500 ease-[ease] z-[1] px-[3.7rem] py-[13px] rounded-lg w-full mt-5'>{form.button}</button>
        </form>
    )
}
