import { Hero } from "@/components/sections/Home/Hero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import NavbarwithLogo from "@/components/layout/NavbarwithLogo";
import Offerbar from "@/components/layout/Offerbar";
import Topbar from "@/components/layout/Topbar";
import BrandingLogos from "@/components/sections/Home/BrandingLogos";
import { FeaturedProducts } from "@/components/sections/Home/FeatureProducts";
import Testimonials from "@/components/sections/Home/Testimonials";
import ToolsScanner from "@/components/sections/Home/ToolsScanner";
import WhyChooseUs from "@/components/sections/Home/WhyChoose";

// data
import {
  brandingLogos,
  footerDetails,
  products,
  profiles,
  slides,
  toolsScanner,
  whyChooseUs,
} from "@/data/allDatas";

export default function Home() {
  return (
    <div>
      <Topbar />
      <NavbarwithLogo />
      <Navbar />
      <Offerbar />
      <Hero slides={slides} />
      <ToolsScanner tools={toolsScanner} />
      <WhyChooseUs data={whyChooseUs} />
      <FeaturedProducts products={products} />
      <Testimonials profiles={profiles} />
      <BrandingLogos brandingLogos={brandingLogos} />
      <Footer footerData={footerDetails} />
    </div>
  );
}
