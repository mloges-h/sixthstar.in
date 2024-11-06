
import Head from 'next/head'
import './styles/style.css'
import './styles/slider.css'
import './styles/responsive.css'
import Footer from './footer'
import TawkMessenger from '../components/TawkMessenger';
import { Roboto, Noto_Sans_Hebrew, Urbanist, Montserrat } from 'next/font/google';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react'
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const notoSansHebrew = Noto_Sans_Hebrew({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['hebrew'],
});

const urbanist = Urbanist({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Initialize GTM when the app is mounted
    TagManager.initialize({ gtmId: 'GTM-MXP99G7D' });
  }, []);
    return (
      
      <div className={`${roboto.className} ${notoSansHebrew.className} ${urbanist.className} ${montserrat.className} app-main`}>
        <Head>
          <title>Sixthstar</title>
          <link rel="preconnect" href="https://console.cloudinary.com/"></link>
          <link rel="icon" href="https://res.cloudinary.com/dwyn5jgh3/image/upload/v1723874112/sixthstar-favicon_cvxvuj.ico"/>
        </Head>
        
        
        <Component {...pageProps} />
        <TawkMessenger/>
        <Footer/>
        
        </div>
    )
  }