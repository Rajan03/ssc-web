import { getHomeData } from '@/services/sanityService';
import { IHomePage } from '@/types';
import { GetStaticProps } from 'next';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

// Font import
const font = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Component Props
type Props = {
  data: IHomePage;
};

// Component
const Home: React.FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head>
        <title>SSC | Home</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${font.className}`}
      ></main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res: IHomePage = await getHomeData();
  return {
    props: {
      data: { ...res },
    },
    revalidate: 20,
  };
};
