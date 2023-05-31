import {Navbar} from '@/components';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {Montserrat} from 'next/font/google';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

// Font import
const font = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
            const handleStart = () => {
                setIsLoading(true);
            }
            const handleComplete = () => {
                setIsLoading(false);
            }

            router.events.on('routeChangeStart', handleStart);
            router.events.on('routeChangeComplete', handleComplete);
            router.events.on('routeChangeError', handleComplete);

            return () => {
                router.events.off('routeChangeStart', handleStart);
                router.events.off('routeChangeComplete', handleComplete);
                router.events.off('routeChangeError', handleComplete);
            }
        }
        , [router]);

    // TODO: Error Boundary for the entire app Suspense
    return (
        <div className={'h-screen w-full ' + font.className}>
            <Navbar/>

            {/* Loading Spinner */}
            {isLoading && <div className="h-1 w-full bg-blue-500 fixed top-0 left-0 z-50 animate-width duration-700 ease-linear"></div>}

            {/* Error Bar */}
            {isError && <div className="h-1 w-full bg-red-500 fixed top-0 left-0 z-50"></div>}

            {/* Page Content */}
            <Component {...pageProps} />
        </div>
    );
}
