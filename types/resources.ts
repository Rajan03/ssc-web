import {SanityBannerResources} from "@/types/sanity";

export interface IResource {
    _id: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    category: string;
    price: number;
    slug: string;
    active: boolean;
    included: string[];
    reviews: IResourceReview[];
}

export interface IResourceCategory {
    _id: string;
    title: string;
    description?: string;
    slug: string;
    active: boolean;
}

export interface IResourceReview {
    _id: string;
    name: string;
    review: string;
    rating: number;
    resource: string;
}

export interface IResourcesPage {
    banner: SanityBannerResources;
    resources: IResource[];
    categories: IResourceCategory[];
}
