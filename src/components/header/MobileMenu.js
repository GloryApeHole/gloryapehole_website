import Link from 'next/link';

export default function MobileMenu({ config = [], isOpen = false, onClick }) {
  return (
    <ul
      className={`${
        isOpen ? 'max-h-auto py-5 ' : 'max-h-0 py-0'
      } divide-y divide-white transition-max-height overflow-hidden flex flex-col absolute top-full items-center  bg-black left-0 lg:hidden w-full justify-center`}
    >
      {config.map((item, idx) => {
        return (
          <li
            key={idx}
            className='py-2 flex justify-center w-full'
            onClick={onClick}
          >
            <div className='relative'>
              <Link href={item.url} passHref {...item}>
                <a className='uppercase py-4 px-4 font-bold text-lg'>
                  {item.title}
                </a>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
