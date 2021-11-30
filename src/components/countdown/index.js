import calculateTimeLeft from 'utils/intervalCalc';
import { useState, useEffect } from 'react';

const launchDate = new Date(2021, 11, 10);

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(launchDate));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(launchDate));
    }, 1000);
  });

  return (
    <div className='text-2xl md:text-6xl text-center flex w-full items-center justify-center'>
      <div className='md:w-24 w-20 mx-1 p-2 bg-white text-yellow-500 rounded-lg'>
        <div className='font-mono leading-none'>{timeLeft.days}</div>
        <div className='font-mono uppercase text-sm leading-none'>Days</div>
      </div>
      <div className='md:w-24 w-20 mx-1 p-2 bg-white text-yellow-500 rounded-lg'>
        <div className='font-mono leading-none'>{timeLeft.hours}</div>
        <div className='font-mono uppercase text-sm leading-none'>Hours</div>
      </div>
      <div className='md:w-24 w-20 mx-1 p-2 bg-white text-yellow-500 rounded-lg'>
        <div className='font-mono leading-none'>{timeLeft.minutes}</div>
        <div className='font-mono uppercase text-sm leading-none'>Minutes</div>
      </div>
      <div className='md:block hidden text-2xl mx-1 font-bold'>and</div>
      <div className='md:w-24 w-20 mx-1 p-2 bg-white text-yellow-500 rounded-lg'>
        <div className='font-mono leading-none'>{timeLeft.seconds}</div>
        <div className='font-mono uppercase text-sm leading-none'>Seconds</div>
      </div>
    </div>
  );
}
