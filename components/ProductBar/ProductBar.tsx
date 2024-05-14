"use client"
import React from 'react'
import { ParentContainer } from '../ParentContainer'
import { GridBox } from '../GridBox'
import { Product } from './Product';

interface TitleItem {
    label: string;
    style: string;
}

// interface ProductItem {
//     product_img: string;
//     product_title: string;
//     currency: string;
//     sale_price: string;
//     market_price: string;
//     stock: number;
//     rating: number;
// }

interface ProductBarItem {
    sub_title: string;
    title: TitleItem[];
    label: TitleItem[];
    // products: ProductItem[];
}

interface ProductBarProps {
    data: ProductBarItem;

}

export const ProductBar: React.FC<ProductBarProps> = ({ data }) => {
    return (
        <div className='ProductBar py-[70px]'>
            <ParentContainer>
                <GridBox columns={1} gap={5}>
                    <GridBox.GridItem columnMerge={1}>
                        <div className='space-y-5'>
                            <span className='sub-title inline-block text-[#FF5500] text-base font-bold tracking-[1.6px] relative uppercase before:bg-[#FF5500] before:content-[""] before:h-0.5 before:absolute before:w-[35px] before:ml-2.5 before:-mt-px before:left-full before:top-2/4'>{data.sub_title}</span>
                            <h2 className='xl:leading-[65px] lg:leading-[65px] md:leading-[65px] leading-[40px] xl:text-[50px] lg:text-[50px] md:text-[50px] text-[30px] text-balance font-bold text-[#0F2C49]'>
                                {data.title.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.style === "normal" ? (
                                            <span>{item.label}</span>
                                        ) : (
                                            <span className='text-[#FF5500]'> {item.label}</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </h2>
                            <p className='font-bold text-[#0F2C49] text-balance'>
                                {data.label.map((para, index) => (
                                    <React.Fragment key={index}>
                                        {para.style === "normal" ? (
                                            <span>{para.label} </span>
                                        ) : (
                                            <span className='text-[#FF5500]'> {para.label}</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>
                        
                    </GridBox.GridItem>
                </GridBox>
            </ParentContainer>
        </div>
    )
}
