import createImageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
};

// Setup Sanity client
export const sanityClient = createClient(config);

// Creating url builder for images
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);

// Helper function for using GET method
export const sanityGet = async (query: any, params = {}) => {
  try {
    const res = await sanityClient.fetch(query, params);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const sanityPost = async (query: string, params = {}) => {
//   try {
//     const res = await sanityClient.create(query, params);
//     return res;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
