import {
    GET_ABOUT_PAGE_ABOUT,
    GET_ABOUT_PAGE_BANNER, GET_ABOUT_PAGE_SOLUTION, GET_ABOUT_PAGE_TIMELINE, GET_ABOUT_PAGE_WHO_ARE_WE,
    GET_HOME_ABOUT,
    GET_HOME_CONTACT,
    GET_HOME_HERO,
    GET_HOME_QUOTE,
    GET_HOME_SERVICES,
    GET_HOME_TEAMS,
    GET_HOME_WHY_US, GET_TEAM_PAGE_BANNER, GET_TEAM_PAGE_FAQS,
} from '@/lib/sanityQueries';
import {sanityGet} from '@/sanity';
import {
    IHomePage,
    SanityAboutHome,
    SanityHeroHome,
    SanityQuoteHome,
    SanityServicesHome,
    SanityWhyUsHome,
    ITeamPage,
} from '@/types';
import {
    IAboutPage,
    SanityAboutAbout, SanityAboutSolution, SanityAboutTimeline, SanityAboutWhoWeAre,
    SanityBannerTeam,
    SanityContactHome,
    SanityFAQTeam,
    SanityTeamsHome
} from '@/types/sanity';

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

    return {
        banner,
        about,
        solution,
        whoWeAre,
        timeline,
    };
}
