import {
  GET_HOME_ABOUT,
  GET_HOME_CONTACT,
  GET_HOME_HERO,
  GET_HOME_QUOTE,
  GET_HOME_SERVICES,
  GET_HOME_TEAMS,
  GET_HOME_WHY_US,
} from '@/lib/sanityQueries';
import { sanityGet } from '@/sanity';
import {
  IHomePage,
  SanityAboutHome,
  SanityHeroHome,
  SanityQuoteHome,
  SanityServicesHome,
  SanityWhyUsHome,
} from '@/types';
import { SanityContactHome, SanityTeamsHome } from '@/types/sanity';

export async function getHomeData(): Promise<IHomePage> {
  const hero: SanityHeroHome = await sanityGet(GET_HOME_HERO);
  const about: SanityAboutHome = await sanityGet(GET_HOME_ABOUT);
  const services: SanityServicesHome = await sanityGet(GET_HOME_SERVICES);
  const whyUs: SanityWhyUsHome = await sanityGet(GET_HOME_WHY_US);
  const quote: SanityQuoteHome = await sanityGet(GET_HOME_QUOTE);
  const contact: SanityContactHome = await sanityGet(GET_HOME_CONTACT);
  const coaches: SanityTeamsHome = await sanityGet(GET_HOME_TEAMS);

  return {
    hero,
    about,
    services,
    whyUs,
    quote,
    contact,
    coaches,
  };
}
