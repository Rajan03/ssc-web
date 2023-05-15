import { groq } from 'next-sanity';

export const GET_HOME_HERO = groq`
*[_type=="heroHome" && active == true][0] {
  name, 
  subtitle,
  "image": image.asset->url,
  "description": description[][0].children[][0].text
}
`;

export const GET_HOME_ABOUT = groq`
*[_type=="aboutHome" && active == true][0] {
  'title': name, 
  subtitle,
  "description": description[][0].children[][0].text,
  count,
  "images": images[].asset->url
}
`;

export const GET_HOME_SERVICES = groq`
*[_type=="servicesHome" && active == true][0] {
  "title":name,
  subtitle,
}
`;

export const GET_HOME_WHY_US = groq`
*[_type=="whyUsHome" && active == true][0] {
  name, 
  subtitle,
  "image": image.asset->url
}
`;

export const GET_HOME_PRICING = groq`
*[_type=="pricingHome" && active == true][0] {
  name, 
  subtitle
}
`;

export const GET_HOME_QUOTE = groq`
*[_type=="quoteHome" && active == true][0] {
  name, 
  subtitle,
  "description": description[][0].children[][0].text,
  "image": image.asset->url
}
`;
