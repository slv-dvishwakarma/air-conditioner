// components/Timer.tsx

import React, { useEffect, useState } from 'react';

interface TimerProps {
  endTime: Date;
}

export const Timer: React.FC<TimerProps> = ({ endTime }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(calculateRemainingTime());
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  function calculateRemainingTime(): number {
    const currentTime = new Date();
    const difference = endTime.getTime() - currentTime.getTime();
    return difference > 0 ? difference : 0;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const remaining = calculateRemainingTime();
      setTimeRemaining(remaining);
      if (remaining <= 0) {
        clearInterval(timerInterval);
        setTimerFinished(true);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const hours = Math.floor(timeRemaining / 3600000);
  const minutes = Math.floor((timeRemaining % 3600000) / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);

  return (
    <div>
      {timerFinished ? (
        <p className="text-[var(--primary-color)] ml-[10px] font-semibold">Timer Finished</p>
      ) : (
        <p className="text-[var(--primary-color)] ml-[10px] font-semibold">
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      )}
    </div>
  );
};
