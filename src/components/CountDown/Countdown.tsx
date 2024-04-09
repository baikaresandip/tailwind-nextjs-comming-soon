"use client"
import React, { useEffect, useState } from 'react';
import data from '../../../data/data';

interface Props {
  endDate: Date;
}

const CountDown: React.FC<Props> = ({ endDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);
  const {title} = data

  return (
    <section className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold m-2 text-sky-600 dark:text-sky-200 mb-4">{title}</h1>
        <div className="text-center font-heading m-5 text-5xl sm:text-4xl lg:text-7xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black ">
            <span className='bg-clip-text flex-row text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                <span>{countdown.days} Days </span> 
                <span>{countdown.hours} Hrs </span>
                <span>{countdown.minutes} Min </span> 
                <span>{countdown.seconds} Sec</span>
            </span>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
