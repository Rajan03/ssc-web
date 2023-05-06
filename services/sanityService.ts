import {
  GET_HOME_ABOUT,
  GET_HOME_HERO,
  GET_HOME_PRICING,
  GET_HOME_QUOTE,
  GET_HOME_SERVICES,
  GET_HOME_WHY_US,
} from '@/lib/sanityQueries';
import { sanityGet } from '@/sanity';
import {
  SanityAboutHome,
  SanityHeroHome,
  SanityPricingHome,
  SanityQuoteHome,
  SanityServicesHome,
  SanityWhyUsHome,
} from '@/types';

export const getHomeData = async () => {
  const hero: SanityHeroHome = await sanityGet(GET_HOME_HERO);
  const about: SanityAboutHome = await sanityGet(GET_HOME_ABOUT);
  const services: SanityServicesHome = await sanityGet(GET_HOME_SERVICES);
  const whyUs: SanityWhyUsHome = await sanityGet(GET_HOME_WHY_US);
  const pricing: SanityPricingHome = await sanityGet(GET_HOME_PRICING);
  const quote: SanityQuoteHome = await sanityGet(GET_HOME_QUOTE);

  return {
    hero,
    about,
    services,
    whyUs,
    pricing,
    quote,
  };
};
