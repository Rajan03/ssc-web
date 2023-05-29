import { IService, ISolution } from '@/types';
import { ITeam } from '../Team';

//#region > HOME PAGE TYPES
export interface SanityHeroHome {
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface SanityAboutHome {
  title: string;
  subtitle: string;
  description: string;
  count: number;
  images: string[];
}

export interface SanityServicesHome {
  title: string;
  subtitle: string;
  services: IService[];
}

export interface SanityTeamsHome {
  title: string;
  subtitle: string;
  coaches: ITeam[];
}
export interface SanityWhyUsHome {
  title: string;
  subtitle: string;
  image: string;
  solutions: ISolution[];
}

export interface SanityPricingHome {
  title: string;
  subtitle: string;
}

export interface SanityQuoteHome {
  title: string;
  subtitle: string;
}

export interface SanityContactHome {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
export interface IHomePage {
  hero: SanityHeroHome;
  about: SanityAboutHome;
  services: SanityServicesHome;
  whyUs: SanityWhyUsHome;
  quote: SanityQuoteHome;
  contact: SanityContactHome;
  coaches: SanityTeamsHome;
}
//#endregion
