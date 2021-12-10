import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2742673, 6);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
