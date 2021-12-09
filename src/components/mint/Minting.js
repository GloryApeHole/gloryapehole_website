import { useState } from 'react';

const PRICE = 55;

const LIMIT = 20;

export default function Minting() {
  const [total, setTotal] = useState(0);

  const increase = () => {
    if (total < LIMIT) {
      setTotal(total + 1);
    }
  };

  const decrease = () => {
    if (total > 0) {
      setTotal(total - 1);
    }
  };
  return (
    <div className=''>
      {/* details */}
      <div className='flex justify-between items-center rounded-lg border border-white px-5 py-5'>
        {/* <div className='w-full md:w-6/12 flex justify-between'> */}
        <img src='/apes.gif' className='rounded-md w-1/6' />
        <div className='text-white font-semibold flex flex-col justify-center items-baseline'>
          <span className='text-md'>Price Per Ape</span>
          <span className='text-xl'>{PRICE} (0,029 ETH) MATIC Each</span>
        </div>
        {/* </div> */}
      </div>
      {/* counter */}
      <div className='flex justify-between items-center border border-white rounded-lg mt-10 bg-balticSea px-5 py-2'>
        <div className='flex flex-row justify-center items-center font-bold'>
          <div className='text-4xl mr-5 cursor-pointer'>
            <svg
              width={16}
              height={2}
              onClick={decrease}
              viewBox='0 0 16 2'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H15C15.2652 2 15.5196 1.89464 15.7071 1.70711C15.8946 1.51957 16 1.26522 16 1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='text-2xl py-2'>{total}</div>
          <div className='text-4xl ml-5 cursor-pointer'>
            <svg
              width={16}
              height={16}
              viewBox='0 0 16 16'
              onClick={increase}
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
        <div>
          <span className='text-xl font-bold'>MAX: {LIMIT}</span>
        </div>
      </div>
      {/* total */}
      <div className='border-t mt-10 '>
        <div className='text-xl mt-5 font-bold flex justify-between items-center'>
          <h1>Total</h1>
          <h1>{total * PRICE} MATIC</h1>
        </div>
      </div>
      <button
        type={'button'}
        className={
          'w-full hover:bg-transparent hover:border-2 border-black hover:text-black dark:hover:bg-transparent dark:hover:border-2 dark:hover:border-white dark:hover:text-white text-xl md:text-2xl px-5 py-5 my-6 text-white bg-mustMakeBlack dark:bg-white dark:text-black'
        }
      >
        CLAIM
      </button>
    </div>
  );
}
