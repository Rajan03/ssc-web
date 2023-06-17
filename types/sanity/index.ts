import {IService, ISolution} from '@/types';
import {ITeam} from '../Team';
import {IQuestion} from "@/types";

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
    count?: number;
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

//#region > TEAM PAGE TYPES
export interface SanityBannerTeam {
    title: string;
    subtitle: string;
    image: string;
}

export interface SanityFAQTeam {
    title: string;
    subtitle: string;
    faq: IQuestion[];
}

//#endregion

//#region > ABOUT PAGE TYPES
export interface SanityBannerAbout {
    title: string;
    subtitle: string;
    image: string;
}

export interface SanityAboutAbout {
    title: string;
    subtitle: string;
    description: string;
    images: string[];
}

export interface SanityAboutSolution{
    title: string;
    image: string;
}

export interface SanityAboutWhoWeAre{
    title: string;
    description: string;
    subtitle: string;
    count: string;
    countText: string;
    image: string;
}

export interface SanityAboutTimeline {
    title: string;
    subtitle: string;
    timeline: ITimeLine[];
}

export interface ITimeLine {
    year: string;
    title: string;
    description: string;
    image: string;
    _key: string;
}

export interface IAboutPage {
    banner: SanityBannerAbout;
    about: SanityAboutAbout;
    solution: SanityAboutSolution;
    whoWeAre: SanityAboutWhoWeAre;
    timeline: SanityAboutTimeline;
}
//#endregion

//#region > RESOURCES PAGE TYPES
export interface SanityBannerResources {
    title: string;
    subtitle: string;
    image: string;
}
//#endregion

//#region > FEEDBACK PAGE TYPES.
export interface SanityBannerFeedback {
    title: string;
    subtitle: string;
    image: string;
}

export interface IFeedbackPage {
    banner: SanityBannerFeedback;
    services: IService[];
}
