import {
  BrandingLogo,
  FooterDetails,
  Profile,
  Slide,
  Tools,
  WhyChoose,
} from "@/types/types";
import { images } from "@/assets/images";
import { Product } from "@/types/types";

// slider data
export const slides: Slide[] = [
  {
    title: "TOPDON PHOENIX ELITE",
    description:
      "TOPDON Phoenix Elite, dealer-level diagnostics at a fraction of the cost. If you don't need the online programming capabilities, you may want to consider the PHOENIX LITE 2 which offers excellent value for money.",
    link: {
      text: "LEARN MORE",
      url: "#",
    },
    image: images.HeroImage,
  },
];

// tools and scanner
export const toolsScanner: Tools = {
  title: "Tools and Scanners",
  subTitle: "",
};

// features products
export const products: Product[] = [
  {
    id: 1,
    name: "VDubDiag for VW Audi Skoda Seat",
    image: images.Product1,
    rating: 5,
    price: 79.99,
    oldPrice: 89.99,
    badge: "SALE",
  },
  {
    id: 2,
    name: "ANCEL VD700 FOR AUDI, SEAT, SKODA, VOLKSWAGEN",
    image: images.Product1,
    rating: 5,
    price: 89.99,
    oldPrice: 129.99,
    badge: "NEW",
  },
  {
    id: 3,
    name: "OBDeleven Pro Pack (NextGen) Bluetooth Scanner",
    image: images.Product1,
    rating: 5,
    price: 114.99,
    oldPrice: 119.99,
    badge: "SOLD OUT",
  },
  {
    id: 4,
    name: "ICarsoft CR MAX - 2024 Full System All Makes",
    image: images.Product1,
    rating: 5,
    price: 349.99,
    oldPrice: 429.99,
  },
];

// why choose us
export const whyChooseUs: WhyChoose[] = [
  {
    id: 1,
    icon: images.HeadphoneImage,
    title: "Excellent customer service",
    description:
      "We genuinely believe the key to success is serving our customers. Being there for you before and after the sale. See our feedback to get a feel for how much we GENUINELY care about our customers.",
  },
  {
    id: 2,
    icon: images.HeadphoneImage,
    title: "Tools you can trust",
    description:
      "We know the diagnostics industry can be a minefield, terms such as EOBD2, OBDII, CANBUS, UDS and with so many scanners to choose from it can be difficult to decide what to buy. We'll talk you through the options and we'll never up sell. We'll advise what's appropriate for you.",
  },
  {
    id: 3,
    icon: images.HeadphoneImage,
    title: "FREE next day delivery",
    description:
      "We know when you order a scanner for your car, you may need it fast! All of our scanners are dispatched via Royal Mail first class the next working day, providing you order before our cut off time of 12pm.",
  },
];

// footer details
export const footerDetails: FooterDetails = {
  companyDetails: [
    "Delivery",
    "Legal Notice",
    "Secure payment",
    "Contact us",
    "About us",
    "Stores",
  ],
  serviceDetails: [
    "Car Diagnostic Tools",
    "Hand-held Scanners",
    "Universal Car Diagnostic",
    "Audi Diagnostic",
    "ABS Brake Bleeding",
    "Adaptive Front Lighting System",
  ],
  contactDetails: [
    "126 Horton Grange Road, Bradford, West Yorkshire, BD7 2DW",
    "+1 86.36.166",
    "12345",
    "contact@abc.co.uk",
  ],
};

// profiles
export const profiles: Profile[] = [
  {
    name: "Profile 1",
    avatar: images.AuthorImg,
  },
  {
    name: "Profile 2",
    avatar: images.AuthorImg,
  },
  {
    name: "Profile 3",
    avatar: images.AuthorImg,
  },
];

// branding logos
export const brandingLogos: BrandingLogo[] = [
  {
    alt: "",
    src: images.Branding1,
  },
  {
    alt: "",
    src: images.Branding2,
  },
  {
    alt: "",
    src: images.Branding3,
  },
  {
    alt: "",
    src: images.Branding1,
  },
  {
    alt: "",
    src: images.Branding2,
  },
  {
    alt: "",
    src: images.Branding3,
  },
];
