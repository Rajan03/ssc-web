import { About, Hero, Services, WhyUs } from '@/modules/home';
import {
  GetServicesForHome,
  GetSolutionsForHome,
} from '@/services/HomePageService';
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
  const { hero, about, services, whyUs } = data;

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

        {/* Why Us */}
        <WhyUs {...whyUs} />
      </main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res: IHomePage = await getHomeData();
  const services = await GetServicesForHome();
  const solutions = await GetSolutionsForHome();

  return {
    props: {
      data: {
        ...res,
        services: {
          ...res.services,
          services: JSON.parse(JSON.stringify(services.data)),
        },
        whyUs: {
          ...res.whyUs,
          solutions: JSON.parse(JSON.stringify(solutions.data)),
        },
      },
    },
    revalidate: 20,
  };
};
