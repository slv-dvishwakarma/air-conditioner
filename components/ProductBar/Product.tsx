"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '../Rating';

interface ProductItem {
    product_img: string;
    product_title: string;
    currency: string;
    sale_price: string;
    market_price: string;
    stock: number;
    rating: number;
}

interface ProductProps {
    products: ProductItem[];
}

export const Product: React.FC<ProductProps> = ({ products }) => {

    var settings = {
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <Slider className="custom-slick-slider" {...settings}>
        {products.map((product, index) => (
            <div key={index} className="p-5 ">
                <Image src={product.product_img} alt={product.product_title} width={416} height={138} className='m-auto h-[200px] object-contain object-center p-5 '/>
                <Link href="/"><h2 className='line-clamp-2 text-[#0F2C49] text-[17px] font-bold'>{product.product_title}</h2></Link>
                <Rating rating={product.rating} />
                <div className='flex gap-5'>
                    <span className='text-xl text-[#FF5500]'>{product.currency}{product.sale_price}</span>
                    <span className='line-through self-end text-[#848484]'>{product.currency}{product.market_price}</span>
                </div>
            </div>
        ))}
    </Slider>
  )
}
