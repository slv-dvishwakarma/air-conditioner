"use client"
import React from 'react'
import { GridBox } from '../GridBox'
import { ParentContainer } from '../ParentContainer'
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import Image from 'next/image';

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

interface TitleItem {
    label: string;
    style: string;
}

interface EnquiryItem {
    section_img: string;
    enquiry_img: string;
    sub_title: string;
    title: TitleItem[];
    form: FieldItem;
}

interface EnquiryProps {
    enquiry: EnquiryItem;
}

export const Enquiry: React.FC<EnquiryProps> = ({ enquiry }) => {
    return (
        <div className='Enquiry bg-cover bg-no-repeat h-full py-[70px] ' style={{ backgroundImage: `url(${enquiry.section_img})` }}>
            <ParentContainer>
                <GridBox columns={2} gap={10} className='items-center'>
                    <GridBox.GridItem columnMerge={1}>
                        <Image src={enquiry.enquiry_img} alt={enquiry.sub_title} width={1920} height={1280} className='rounded-xl'/>
                    </GridBox.GridItem>
                    <GridBox.GridItem columnMerge={1} className='shadow-[rgba(149,157,165,0.2)_0px_8px_24px] px-8 py-8 rounded-lg'>
                        <div className='space-y-5'>
                            <span className='sub-title inline-block text-[#FF5500] text-base font-bold tracking-[1.6px] relative uppercase before:bg-[#FF5500] before:content-[""] before:h-0.5 before:absolute before:w-[35px] before:ml-2.5 before:-mt-px before:left-full before:top-2/4'>{enquiry.sub_title}</span>
                            <h2 className='text-5xl font-bold text-[#0F2C49]'>
                                {enquiry.title.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.style === "normal" ? (
                                            <span>{item.label}</span>
                                        ) : (
                                            <span className='text-[#FF5500]'> {item.label}</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </h2>
                        </div>
                        <Form form={enquiry.form} />
                    </GridBox.GridItem>
                </GridBox>
            </ParentContainer>
        </div>
    )
}
