export default function Story() {
  return (
    <section
      id='story'
      className='w-full flex md:flex-row flex-col py-20 text-white px-10 border-b border-white'
    >
      <div className='flex-col md:sticky self-start text-center top-0 flex w-full items-center'>
        <h1 className='font-bold text-4xl mb-5 md:text-6xl w-full pr-5'>
          Story
        </h1>
        <p className='text-lg mt-10 w-10/12 md:block hidden'>
          After five years on Earth, Glory Apes return to the city of Los Apes,
          Metaverse to find numerous fellow ape-members dead and enemy apes
          having dominance of the city. Glory Apes must take over the city and
          get their gang back on top before the city destroys itself.
        </p>
      </div>
    </section>
  );
}
