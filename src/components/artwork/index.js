export default function Artwork() {
  return (
    <section
      id='artwork'
      className='w-full flex md:flex-row flex-col py-20 text-white px-10 border-b border-white'
    >
      <div className='flex-col md:sticky self-start top-0 flex w-full md:w-6/12'>
        <h1 className='font-bold text-4xl mb-5 md:text-6xl w-full md:w-6/12 pr-5'>
          The artwork
        </h1>
        <p className='text-lg font-semibold w-10/12 md:block hidden'>
          Glory Ape Hole is a unique NFT collection of 6969 Glory Apes generated
          from over 170+ hand drawn traits. The team and artists have worked on
          this project for over 4 months now.
        </p>
        <p className='text-lg mt-10 w-10/12 md:block hidden'>
          Our special artists drew every single trait by hand focusing on
          creating{' '}
          <strong>
            <u>REALISTIC</u>
          </strong>{' '}
          art. Each imperfection is unique and special thus represting artist's
          vision.
        </p>
      </div>
      <div className='w-full md:w-6/12 flex'>
        <img src='/apes.gif' className='rounded-md w-3/4' />
      </div>
    </section>
  );
}
