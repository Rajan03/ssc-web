import { About, Hero, Services } from '@/modules/home';
import { GetServicesForHome } from '@/services/HomePageService';
import { getHomeData } from '@/services/sanityService';
import { IHomePage, Service } from '@/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';

// Component Props
type Props = {
  data: IHomePage;
};

// Component
const Home: React.FC<Props> = ({ data }) => {
  const { hero, about, services } = data;

  return (
    <>
      <Head>
        <title>SSC | Home</title>
      </Head>

      <main className={`relative h-[inherit] p-for-nav`}>
        {/* Hero */}
        <Hero {...hero} />

        {/* About */}
        <About {...about} />

        {/* Services */}
        <Services {...services} />
      </main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res: IHomePage = await getHomeData();
  const services: {
    message: string;
    code: number;
    data: Service[];
  } = await GetServicesForHome();

  return {
    props: {
      data: {
        ...res,
        services: {
          ...res.services,
          services: services.data,
        },
      },
    },
    revalidate: 20,
  };
};
