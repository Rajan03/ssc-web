import { IService } from '../Service';
import { ISolution } from '../Solution';

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
  pricing: SanityPricingHome;
  quote: SanityQuoteHome;
  contact: SanityContactHome;
}
//#endregion
