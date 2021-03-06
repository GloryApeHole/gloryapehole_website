import Link from 'next/link';

export default function Hero() {
  return (
    <div className='min-h-screen text-white hero-background font-bold h-full w-full flex justify-start items-center flex-col'>
      <h1 className='mt-32 hero-title text-6xl text-center mb-3'>
        PRE-SALE HAPPENING NOW
      </h1>
      <h1 className='mt-20 text-4xl text-center mb-3'>CLAIM YOURS</h1>
      <Link href='/#minting'>
        <button
          type={'button'}
          className={
            'w-1/2 lg:w-1/5 hover:bg-black hover:border-2 border-black hover:text-black dark:hover:bg-black dark:hover:border-2 dark:hover:border-white dark:hover:text-white text-xl md:text-2xl px-5 py-5 my-6 text-white bg-mustMakeBlack dark:bg-white dark:text-black'
          }
        >
          MINT
        </button>
      </Link>
      {/* <Countdown /> */}
    </div>
  );
}
