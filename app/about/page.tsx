import AboutVideo from "@/component/about/AboutVideo";
import PolkcountryBullys from "@/component/about/PolkcountryBullys";
import Testimonials from "@/component/home/Testimonials";
import PageHero from "@/component/shared/PageHero";

export const metadata = {
  title: "About Us - Our Mission & Story | Polk County Bully Project",
  description:
    "Learn about the Polk County Bully Project, a non-profit dedicated to rescuing, rehabilitating, and finding forever homes for bully breeds in Polk County, FL. Meet our founders and see our impact.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

const page = () => {
  return (
    <div>
      <PageHero
        bgImage={"/assets/home/hero-bg.svg"}
        title="About"
        currentPage="about"
      />
      <PolkcountryBullys />
      <AboutVideo />
      <Testimonials />
    </div>
  );
};

export default page;
