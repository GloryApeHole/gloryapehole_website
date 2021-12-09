import Minting from './Minting';
export default function MintWrapper() {
  return (
    <section
      id='artwork'
      className='w-full flex md:flex-row flex-col py-20 text-white px-10 border-b border-white'
    >
      <div className='w-full md:w-6/12 flex justify-center'>
        <img
          style={{ height: 'fit-content' }}
          src='/apes.gif'
          className='rounded-md w-full md:w-3/4'
        />
      </div>
      <div className='flex-col md:sticky self-start top-0 flex w-full md:w-6/12'>
        <h1 className='pt-5 font-bold text-center md:text-left text-4xl mb-5 md:text-6xl w-full pr-5'>
          CLAIM YOUR APE
        </h1>
        <p className='py-5 text-lg font-semibold w-10/12 md:block hidden'>
          Enter how many apes you would like to mint here
        </p>
        <Minting />
      </div>
    </section>
  );
}
