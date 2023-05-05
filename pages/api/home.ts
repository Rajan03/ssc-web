import {
  GET_HOME_ABOUT,
  GET_HOME_HERO,
  GET_HOME_PRICING,
  GET_HOME_QUOTE,
  GET_HOME_SERVICES,
  GET_HOME_WHY_US,
} from '@/lib/sanityQueries';
import { sanityGet } from '@/sanity';
import {
  SanityAboutHome,
  SanityHeroHome,
  SanityPricingHome,
  SanityQuoteHome,
  SanityServicesHome,
  SanityWhyUsHome,
} from '@/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      await GET(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

/**
 * GET method
 * @param req
 * @param res
 * @description Get HOME page data from sanity studion via sanityGet helper function
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const hero: SanityHeroHome = await sanityGet(GET_HOME_HERO);
    const about: SanityAboutHome = await sanityGet(GET_HOME_ABOUT);
    const services: SanityServicesHome = await sanityGet(GET_HOME_SERVICES);
    const whyUs: SanityWhyUsHome = await sanityGet(GET_HOME_WHY_US);
    const pricing: SanityPricingHome = await sanityGet(GET_HOME_PRICING);
    const quote: SanityQuoteHome = await sanityGet(GET_HOME_QUOTE);

    res.status(200).json({
      hero,
      about,
      services,
      whyUs,
      pricing,
      quote,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
