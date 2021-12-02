import { useState } from 'react';
import Link from 'next/link';
import { configLeft } from './config';
import MobileMenu from './MobileMenu';

export default function Menu({ config = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky z-50 border-b border-white px-10 py-5 bg-black items-center flex justify-between text-white'>
      <Link href='/'>
        <div className='cursor-pointer flex lg:w-6/12 relative'>
          <img
            className='fixed top-0 h-16'
            src='/logo.svg'
            alt='Glory Ape Hole Logo'
          />
        </div>
      </Link>
      <div className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-9 w-9'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <ul className={`hidden lg:flex w-full justify-end px-14`}>
        {configLeft.map((item, idx) => {
          return (
            <li key={idx}>
              <div className='relative'>
                <Link href={item.url} passHref {...item}>
                  {item.type === 'anchor' ? (
                    <a
                      target='_blank'
                      className='uppercase py-4 px-4 font-bold text-lg'
                    >
                      {item.title}
                    </a>
                  ) : (
                    <a className='uppercase py-4 px-4 font-bold text-lg'>
                      {item.title}
                    </a>
                  )}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <MobileMenu
        config={configLeft}
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </nav>
  );
}
