import Countdown from 'components/countdown';
export default function Hero() {
  return (
    <div className='min-h-screen text-yellow-100 hero-background font-bold h-full w-full flex justify-start items-center flex-col'>
      <h1 className='mt-32 text-3xl text-center mb-3 '>
        Time left until launch
      </h1>
      <Countdown />
    </div>
  );
}
