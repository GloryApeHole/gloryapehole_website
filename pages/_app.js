import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-N2STVGF',
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    hotjar.initialize(2742673, 6);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
