import AdoptionProcess from "@/component/adoption/AdoptionProcess";
import PageHero from "@/component/shared/PageHero";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export const metadata = {
  title: "Adoption | Polk County Bully Project",
  description:
    "Read testimonials from happy adopters and supporters of Polk County Bully Project. Discover heartwarming stories of rescued bully breeds finding their forever homes through our dedicated non-profit efforts in Polk County, FL.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
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
        title="Adoption"
        currentPage="Adoption"
      />
      <AdoptionProcess />
      <SpreadTheWord />
    </div>
  );
};

export default page;
