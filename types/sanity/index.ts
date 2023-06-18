import {IService, ISolution} from '@/types';
import {ITeam} from '../Team';
import {IQuestion} from "@/types";
import {IconType} from "react-icons";

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

export interface SanityAboutSolution {
    title: string;
    image: string;
}

export interface SanityAboutWhoWeAre {
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

//#endregion

//#region > CONTACT PAGE TYPES
export interface SanityBannerContact {
    title: string;
    subtitle: string;
    image: string;
}

export interface SanityContactInfo {
    location: ContactCardProps;
    phone: ContactCardProps;
    email: ContactCardProps;
}

export interface ContactCardProps {
    title: string;
    subtitle: string;
    info: string[];
    Icon?: IconType;
}

export interface IContactPage {
    banner: SanityBannerContact;
    contactInfo: SanityContactInfo;
}

//#endregion

//#region > NAVBAR/FOOTER TYPES
export interface SanityNavbar {
    phone: string;
    email: string;
    logo: string;
    links: SanityNavbarLink[];
    tagline: string;
}

export interface SanityNavbarLink {
    title: string;
    url: string;
    icon?: string;
}

export interface SanityFooter {
    copyRight: string;
    description: string;
    links: SanityNavbarLink[];
    logo: string;
    socialLinks: SanityNavbarLink[];
    developer: SanityNavbarLink;
}

//#endregion
