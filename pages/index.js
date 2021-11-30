import Head from 'next/head';
import styles from '../styles/Home.module.css';
import withLayout from 'components/withLayout';
import Hero from 'components/hero';
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
      <main className={styles.container}>
        <Hero />
      </main>
    </>
  );
}

export default withLayout(Home);
