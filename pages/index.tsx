import {
  About,
  Contact,
  Hero,
  Quote,
  Services,
  Teams,
  WhyUs,
} from '@/modules/home';
import {
  GetCoachesForHome,
  GetServicesForHome,
  GetSolutionsForHome,
} from '@/services/HomePageService';
import { getHomeData } from '@/services/sanityService';
import { IHomePage } from '@/types';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import React from "react";

// Component Props
type Props = {
  data: IHomePage;
};

// Component
const Home: React.FC<Props> = ({ data }) => {
  const { hero, about, services, whyUs, quote, coaches, contact } = data;

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

        {/* Quote */}
        <Quote {...quote} />

        {/* Teams */}
        <Teams {...coaches} />

        {/* Contact */}
        <Contact {...contact} />
      </main>
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await getHomeData();
  const services = await GetServicesForHome();
  const solutions = await GetSolutionsForHome();
  const coaches = await GetCoachesForHome();

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
        coaches: {
          ...res.coaches,
          coaches: JSON.parse(JSON.stringify(coaches.data)),
        },
      },
    },
    revalidate: 20,
  };
};
