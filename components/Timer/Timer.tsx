"use client"
import React, { useState, useEffect } from 'react';
import { SVGIcon } from '../Icons';

interface TimerProps {
  endTime: Date;
  format?: string;
}

export const Timer: React.FC<TimerProps> = ({ endTime, format = 'default' }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      setTimeRemaining(distance);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (time: number): string => {
    if (format === 'default') {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (format === 'hh:mm:ss') {
      const hours = Math.floor(time / (1000 * 60 * 60));
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);

      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return 'Invalid format';
    }
  };

  return (
    <div className="text-center ">
      <div className="text-white ml-3 flex items-center gap-2"> <SVGIcon className="text-xl" name="clock" /> {formatTime(timeRemaining)}</div>
    </div>
  );
};

