import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ParentContainer } from '../ParentContainer'
import { SVGIcon } from '../Icons';
import FastMarquee from 'react-fast-marquee';
import { Timer } from '../Timer';

interface FieldItem {
  icon: string;
  title: string;
}

interface HeaderItem {
  logo: string;
  alt: string;
  label: string;
  phone: FieldItem;
  email: FieldItem;
}

interface HeaderProps {
  data: HeaderItem;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {

  const endTime = new Date('2024-05-15T23:59:59');

  return (
    <>
      <div className='top-bar bg-[#0F2C49]'>
        <FastMarquee>
          <span className='text-[#FF5500] font-bold text-lg leading-10'>Dhamaka Offer! Get amazing discounts on air conditioners. This sale is only for 2 days.</span> <Timer endTime={endTime} format="hh:mm:ss" />
        </FastMarquee>
      </div>
      <ParentContainer className='py-2.5'>
        <div className='flex justify-between items-center'>
          <Link href="/" ><Image src={data.logo} alt={data.alt} width={170} height={47} /></Link>
          <div className='contact-details'>
            <div className='flex gap-[15px]'>
              <div className='flex items-center gap-[10px] font-semibold'>
                <span>{data.label}</span>
                <Link href={`tel:${data.phone.title}`} className='flex items-center gap-[10px] text-[#FF5500]'><SVGIcon className="text-[#FF5500] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[#FF5500]" name={data.phone.icon} />{data.phone.title}</Link>
              </div>
              <div className='flex items-center gap-[10px] font-semibold'>
                <Link href={`mailto:${data.email.title}`} className='flex items-center gap-[10px] text-[#FF5500]'><SVGIcon className="text-[#FF5500] text-xl w-[35px] h-[35px] flex items-center justify-center border rounded-[50%] border-solid border-[#FF5500]" name={data.email.icon} />{data.email.title}</Link>
              </div>
            </div>
          </div>
        </div>
      </ParentContainer>
    </>
  )
}
