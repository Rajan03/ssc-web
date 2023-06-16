import {groq} from 'next-sanity';

//#region HOME PAGE TYPES
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
  "title":name, 
  subtitle,
  "image": image.asset->url
}
`;

export const GET_HOME_QUOTE = groq`
*[_type=="quoteHome" && active == true][0] {
  "title":name, 
  subtitle
}
`;

export const GET_HOME_CONTACT = groq`
*[_type=="contactHome" && active == true][0] {
  "title":name, 
  subtitle,
  "description": description[][0].children[][0].text,
  "image": image.asset->url
}
`;

export const GET_HOME_TEAMS = groq`
*[_type=="teamsHome" && active == true][0] {
  "title":name,
  subtitle,
}
`;

//#endregion

//#region > TEAM PAGE TYPES
export const GET_TEAM_PAGE_BANNER = groq`
*[_type=="bannerTeam" && active == true][0] {
    title,
    subtitle,
    "image": image.asset->url,
}
`;

export const GET_TEAM_PAGE_FAQS = groq`
*[_type=="faqTeam" && active == true][0] {
    title,
    subtitle,
    'faq': questions[] -> {
        question,
        answer
    }
}
`;

//#endregion

//#region > ABOUT PAGE TYPES
export const GET_ABOUT_PAGE_BANNER = groq`
*[_type=="bannerAbout" && active == true][0] {
    title,
    subtitle,
    "image": image.asset->url,
}
`;

export const GET_ABOUT_PAGE_ABOUT = groq`
*[_type=="aboutAbout" && active == true][0] {
  'title': name, 
  subtitle,
  "description": description[][0].children[][0].text,
  count,
  "images": images[].asset->url
}
`;

export const GET_ABOUT_PAGE_SOLUTION = groq`
*[_type=="solutionAbout" && active == true][0] {
    title,
    "image": image.asset->url,
}
`;

export const GET_ABOUT_PAGE_WHO_ARE_WE = groq`
*[_type=="aboutWhoAreWe" && active == true][0] {
    title,
    subtitle,
    count,
    countText,
    "description": description[][0].children[][0].text,
    "image": image.asset->url,
}
`;

export const GET_ABOUT_PAGE_TIMELINE = groq`
*[_type=="timelineAbout" && active == true][0] {
    title,
    subtitle,
    "timeline": timeline[] { year, description, _key, title, "image": image.asset->url }
}
`;

//#endregion

//#region > RESOURCES PAGE TYPES
export const GET_RESOURCES_PAGE_BANNER = groq`
*[_type=="bannerResource" && active == true][0] {
    title,
    subtitle,
    "image": image.asset->url,
}
`;
export const GET_RESOURCES_FOR_PAGE = groq`
*[_type=="filesResource" && active == true][0] {
    title,
    "shortDescription": shortDescription[][0].children[][0].text,
    "description": description[][0].children[][0].text,
    "image": image.asset->url,
}
`;
//#endregion
