export interface IPricing {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  features: IPlanFeature[];
  isPopular: boolean;
  isRecommended: boolean;
  offers: IPlanOffer[];
}

export interface IPlanFeature {
  id: number;
  name: string;
  description: string;
  isAvailable: boolean;
}

export interface IPlanOffer {
  id: number;
  offerCode: string;
  offerName: string;
  offerCost: number;

  total: number;
  used: number;
  isAvailable: boolean;
}
