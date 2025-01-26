export interface Slide {
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  image: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  oldPrice: number;
  badge?: string;
}

export interface Tools {
  title: string;
  subTitle: string;
}

export interface WhyChoose {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface FooterDetails {
  companyDetails: string[];
  serviceDetails: string[];
  contactDetails: string[];
}

export interface Profile {
  name: string;
  avatar: string;
}

export interface BrandingLogo {
  alt: string;
  src: string;
}
