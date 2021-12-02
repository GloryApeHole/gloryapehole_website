const members = [
  {
    title: '[ Padeus ] Project Manager/Marketing',
    content:
      'The ape with over 10 years of experience in online marketing with various successful ventures. Now fully dedicated to ramping up Glory Hole Apes  all the way to the moon along with help of our strong community.',
    jpeg: '/tm1.jpeg',
  },
  {
    title: '[  Eleutherius ] Graphics/Illustration Expert/Frontend Dev',
    content:
      'The most creative ape when it comes to illustration and graphics. Stunning art is created from a dose of good coke and thats what makes our Glory Ape Hole art stand out from the crowd.',
    jpeg: '/tm3.jpeg',
  },
  {
    title: '[ SnooRabbits ] Blockchain Dev/Crypto Maniac Ape',
    jpeg: '/tm2.jpeg',
    content:
      'A superb blockchain dev and a true crypto maniac since several years now with strong experience in crypto market. Buy high, sell low is his motto.',
  },
];

export default function TeamMembers() {
  return (
    <section className='pt-20 pb-20' id='team'>
      <div className='flex flex-wrap justify-center text-center mb-24'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold text-white'>Meet the team</h2>
        </div>
      </div>
      <div className='flex flex-wrap'>
        {members.map((member, idx) => {
          return (
            <div
              key={idx}
              className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-8'
            >
              <div className='px-6'>
                <div className='rounded-full py-2 px-2 border border-yellowMustMake border-2'>
                  <img
                    alt='...'
                    src={member.jpeg}
                    className='shadow-lg rounded-full mx-auto max-w-120-px'
                  />
                </div>
                <div className='pt-6 text-center'>
                  <h5 className='text-xl font-bold text-white'>
                    {member.title}
                  </h5>
                  <div className='absolute' />
                  <p className='mt-5 text-sm text-white font-semibold'>
                    {' '}
                    {member.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
