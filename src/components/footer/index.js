import { configLeft } from './config';
import Link from 'next/link';
export default function Footer({}) {
  return (
    <>
      <footer className='px-5 flex bg-black text-white items-center justify-start relative  py-5 w-full h-auto'>
        <div className='flex flex-row items-center w-full'>
          <div className='w-full flex justify-center items-center'>
            {/* <h1 className='text-4xl my-5 font-extrabold tracking-wide'>
              {intl.formatMessage({ defaultMessage: "Let's talk." })}
            </h1> */}
            <div className='cursor-pointer flex relative'>
              <img
                className='h-16 md:h-48'
                src='/logo.svg'
                alt='Glory Ape Hole Logo'
              />
            </div>
          </div>
          {/* <div className='flex w-full justify-around'>
            {configLeft.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link href={item.url}>
                    <h1 className='cursor-pointer relative text-xl font-extralight highlight-me'>
                      {item.title}
                    </h1>
                  </Link>
                </div>
              );
            })}
          </div> */}
        </div>
      </footer>
    </>
  );
}
