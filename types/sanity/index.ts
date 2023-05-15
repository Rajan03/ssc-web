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
}

export interface SanityWhyUsHome {
  name: string;
  subtitle: string;
  image: string;
}

export interface SanityPricingHome {
  name: string;
  subtitle: string;
}

export interface SanityQuoteHome {
  name: string;
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
}
//#endregion
