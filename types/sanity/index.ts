//#region > HOME PAGE TYPES
export interface SanityHeroHome {
  name: string;
  subtitle: string;
  description: string;
  images: string[];
}

export interface SanityAboutHome {
  name: string;
  subtitle: string;
  description: string;
  count: number;
}

export interface SanityServicesHome {
  name: string;
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
