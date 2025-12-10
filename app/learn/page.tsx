import AboutPitBulls from "@/component/learn/AboutPitBulls";
import LearnAboutBreeds from "@/component/learn/LearnAboutBreeds";
import PageHero from "@/component/shared/PageHero";

export const metadata = {
  title: "Learn | Polk County Bully Project",
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
        title="Learn"
        currentPage="Learn"
      />
      <LearnAboutBreeds />
      <AboutPitBulls />
    </div>
  );
};

export default page;
