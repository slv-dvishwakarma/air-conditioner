import React from 'react';

interface RatingProps {
    rating: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} className="text-[#FF5500] text-[25px]">&#9733;</span>);
        } else if (i - rating <= 0.5) {
            stars.push(<span key={i} className="text-[#FF5500] text-[25px] before:content-['\2605'] before:absolute before:overflow-hidden before:w-6/12 before:text-transparent before:z-[1]">&#9734;</span>);
        } else {
            stars.push(<span key={i} className="text-gray text-[25px]">&#9733;</span>);
        }
    }
    return (
        <div className="flex items-center gap-[5px] flex-wrap">
            <span className='relative'>{stars}</span>
        </div>
    );
};
