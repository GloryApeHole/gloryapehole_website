import Minting from './Minting';
export default function MintWrapper() {
  return (
    <section
      id='minting'
      className='w-full flex md:flex-row flex-col py-20 text-white px-10 border-b border-white'
    >
      <div className='w-full md:w-6/12 flex justify-center'>
        <img
          src='/apes.gif'
          className='rounded-md artwork-img w-full md:w-3/4'
        />
      </div>
      <div className='flex-col md:sticky self-start top-0 flex w-full md:w-6/12'>
        <h1 className='pt-5 font-bold text-center md:text-left text-4xl mb-5 md:text-6xl w-full pr-5'>
          CLAIM YOUR APE
        </h1>
        <p className='flex flex-col py-5 text-lg font-semibold w-10/12 md:block hidden'>
          <span className='block'>
            Enter how many apes you would like to mint here
          </span>
          <span className='block mt-5 text-sm'>
            Make sure to connect to Polygon (Matic) Network{' '}
            <a
              href='https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844'
              target='_blank'
              className='block underline mt-2'
            >
              Setting up Metamask for Polygon
            </a>
          </span>
        </p>
        <Minting />
      </div>
    </section>
  );
}
