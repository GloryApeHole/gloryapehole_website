const config = [
  {
    percent: '10%',
    title: 'The inception',
    features: [
      '2 ETH distributed back to you apes in giveaways',
      'Airdrop 10 Glory Apes to the most active members',
      'Re-investing funds from pre-sale into marketing for hype so you apes would make more money',
    ],
  },
  {
    percent: '20%',
    title: 'Glory of the apes',
    features: [
      '4 ETH back to the most active members in community',
      'Airdrop 10 Glory Apes to random apes',
      'Re-investing funds from pre-sale into marketing',
    ],
  },
  {
    percent: '50%',
    title: 'Weapon of the hole',
    features: [
      'Topping up community wallet with 5 ETH',
      'ETH gets distributed across apes',
    ],
  },
  {
    percent: '80%',
    title: 'Annihilation',
    features: [
      'We start investing in other NFTs projects and spread the profits across HODLerd',
    ],
  },
  {
    percent: '100%',
    title: 'Glory ape hole',
    features: [
      'Exclusive events for hodlerd',
      'Buying a lambo that will be available for a ride to everyone with minimum 10 apes.',
      'Each hodler gets a NFT from future projects/colections',
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id='roadmap'
      className='w-full flex md:flex-row flex-col py-20 text-white px-10 border-b border-white'
    >
      <div className='flex-col md:sticky self-start top-0 flex w-full md:w-6/12'>
        <h1 className='font-bold text-4xl mb-5 md:text-6xl w-full md:w-6/12 pr-5'>
          Roadmap
        </h1>
        <p className='text-lg font-semibold w-10/12 md:block hidden'>
          Our plan on conquering the Metaverse
        </p>
        <p className='text-lg mt-10 w-10/12 md:block hidden'>
          {
            " We've consulted key people from Metaverse, we've gathered best minds from all over the universe on creating this roadmap."
          }
        </p>
      </div>
      <div className='w-full md:w-6/12 flex flex-col'>
        {config.map((item, idx) => {
          return (
            <div key={idx} className='py-3'>
              <div className='relative flex items-center justify-start'>
                <span className='text-sm mr-2'>{`0${idx + 1}`}</span>
                <h1 className='z-10 font-bold hover:text-yellowMustMake text-lg md:text-2xl highlight-me-2'>
                  {item.title + ' ' + '-' + ' ' + item.percent}
                </h1>
                <div className='h-4 w-44 absolute top-1/2 z-0 bg-gray-100 opacity-30' />
              </div>
              <div>
                <div className='flex md:flex-col flex-col'>
                  {item.features.map((i, k) => {
                    return (
                      <div
                        key={k}
                        className='m-2 mt-4 flex align-center justify-start'
                      >
                        <img src='/logo.svg' className='h-6 mt-1' />
                        <h1 className='ml-5 font-bold text-sm md:text-lg'>
                          {'  ' + i}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
