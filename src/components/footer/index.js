import { configLeft } from './config';
import Link from 'next/link';
export default function Footer({}) {
  return (
    <>
      <footer className='px-5 flex bg-black text-white items-center justify-start relative  py-5 w-full h-auto'>
        <div className='flex flex-row items-center w-full'>
          <div className='w-full flex justify-center items-center'>
            <div className='cursor-pointer flex relative'>
              <img
                className='h-16 md:h-48'
                src='/logo.svg'
                alt='Glory Ape Hole Logo'
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
