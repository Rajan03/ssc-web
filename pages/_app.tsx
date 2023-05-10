import { Navbar } from '@/components';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

// Font import
const font = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={'h-screen w-full ' + font.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
