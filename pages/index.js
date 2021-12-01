import Head from 'next/head';
import styles from '../styles/Home.module.css';
import withLayout from 'components/withLayout';
import Hero from 'components/hero';
import Team from 'components/team';
function Home() {
  return (
    <>
      <Head>
        <title>Glory Ape Hole</title>
        <meta
          name='description'
          content="6969 Glory Ape Hole NFTs. 
Sale starts soon. Don't miss it! 
"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center min-h-screen py-2'>
        <section className='hero-section'>
          <Hero />
        </section>
        <Team />
      </main>
    </>
  );
}

export default withLayout(Home);
