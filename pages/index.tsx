import { Hero } from '@/modules/home';
import { getHomeData } from '@/services/sanityService';
import { IHomePage } from '@/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// Component Props
type Props = {
  data: IHomePage;
};

// Component
const Home: React.FC<Props> = ({ data }) => {
  const { hero } = data; 

  return (
    <>
      <Head>
        <title>SSC | Home</title>
      </Head>

      <main className={`relative h-full p-for-nav`}>
        {/* Hero */}
        <Hero {...hero} />

        {/* About */}
        <div className="h-full w-full"></div>
      </main>
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
