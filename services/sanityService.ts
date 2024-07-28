import {
    GET_ABOUT_PAGE_ABOUT,
    GET_ABOUT_PAGE_BANNER,
    GET_ABOUT_PAGE_SOLUTION,
    GET_ABOUT_PAGE_TIMELINE,
    GET_ABOUT_PAGE_WHO_ARE_WE, GET_CONTACT_PAGE_BANNER, GET_CONTACT_PAGE_CONTACT,
    GET_FEEDBACK_PAGE_BANNER, GET_FEEDBACK_SECTION_HEADER,
    GET_HOME_ABOUT,
    GET_HOME_CONTACT,
    GET_HOME_HERO,
    GET_HOME_QUOTE,
    GET_HOME_SERVICES,
    GET_HOME_TEAMS,
    GET_HOME_WHY_US,
    GET_RESOURCES_PAGE_BANNER, GET_SERVICES_PAGE_BANNER,
    GET_TEAM_PAGE_BANNER,
    GET_TEAM_PAGE_FAQS,
} from '@/lib/sanityQueries';
import {sanityGet} from '@/sanity';
import {
    IHomePage,
    SanityAboutHome,
    SanityHeroHome,
    SanityQuoteHome,
    SanityServicesHome,
    SanityWhyUsHome,
    ITeamPage, IResourcesPage,
} from '@/types';
import {
    IAboutPage, IContactPage, IFeedbackPage, IServicesPage,
    SanityAboutAbout,
    SanityAboutSolution,
    SanityAboutTimeline,
    SanityAboutWhoWeAre, SanityBannerContact,
    SanityBannerFeedback,
    SanityBannerResources, SanityBannerServices,
    SanityBannerTeam,
    SanityContactHome, SanityContactInfo,
    SanityFAQTeam, SanityFeedbackSectionHeader,
    SanityTeamsHome
} from '@/types/sanity';
import {GetServices} from "@/services/AppService";

// GET CMS DATA FOR HOMEPAGE
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

// GET CMS DATA FOR TEAM PAGE
export async function getTeamPage(): Promise<ITeamPage> {
    const banner: SanityBannerTeam = await sanityGet(GET_TEAM_PAGE_BANNER);
    const faq: SanityFAQTeam = await sanityGet(GET_TEAM_PAGE_FAQS);
    return {
        banner,
        faq,
        team: [],
    };
}

// GET CMS DATA FOR ABOUT PAGE
export async function getAboutPage(): Promise<IAboutPage> {
    const banner: SanityBannerTeam = await sanityGet(GET_ABOUT_PAGE_BANNER);
    const about: SanityAboutAbout = await sanityGet(GET_ABOUT_PAGE_ABOUT);
    const solution: SanityAboutSolution = await sanityGet(GET_ABOUT_PAGE_SOLUTION);
    const whoWeAre: SanityAboutWhoWeAre = await sanityGet(GET_ABOUT_PAGE_WHO_ARE_WE);
    const timeline: SanityAboutTimeline = await sanityGet(GET_ABOUT_PAGE_TIMELINE);
    const services = await GetServices();
    timeline.services = JSON.parse(JSON.stringify(services.data));

    return {
        banner,
        about,
        solution,
        whoWeAre,
        timeline,
    };
}

// GET CMS DATA FOR CONTACT PAGE
export async function getContactPage(): Promise<IContactPage> {
    const banner: SanityBannerContact = await sanityGet(GET_CONTACT_PAGE_BANNER);
    const contactInfo: SanityContactInfo = await sanityGet(GET_CONTACT_PAGE_CONTACT);

    return {
        banner,
        contactInfo,
    };
}

// GET CMS DATA FOR RESOURCES PAGE
export async function getResourcesPage(): Promise<IResourcesPage> {
    const banner: SanityBannerResources = await sanityGet(GET_RESOURCES_PAGE_BANNER);
    return {
        banner,
        resources: [],
        categories: [],
    };
}

// GET CMS DATA FOR FEEDBACK PAGE
export async function getFeedbackPage(): Promise<IFeedbackPage> {
    const banner: SanityBannerFeedback = await sanityGet(GET_FEEDBACK_PAGE_BANNER);
    const sectionHeader: SanityFeedbackSectionHeader = await sanityGet(GET_FEEDBACK_SECTION_HEADER);

    return {
        banner,
        services: [],
        sectionHeader,
    };
}

// GET CMS DATA FOR SERVICES PAGE
export async function getServicesPage(): Promise<IServicesPage> {
    const banner: SanityBannerServices = await sanityGet(GET_SERVICES_PAGE_BANNER)
    const services = await GetServices();

    return {
        banner,
        services: JSON.parse(JSON.stringify(services.data)),
    };
}
