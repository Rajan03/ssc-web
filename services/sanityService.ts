import {
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
import {SanityBannerTeam, SanityContactHome, SanityFAQTeam, SanityTeamsHome} from '@/types/sanity';

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

export async function getTeamPage(): Promise<ITeamPage> {
    const banner: SanityBannerTeam = await sanityGet(GET_TEAM_PAGE_BANNER);
    const faq: SanityFAQTeam = await sanityGet(GET_TEAM_PAGE_FAQS);
    return {
        banner,
        faq,
        team: [],
    };
}
