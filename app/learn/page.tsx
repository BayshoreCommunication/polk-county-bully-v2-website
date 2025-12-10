import AboutPitBulls from "@/component/learn/AboutPitBulls";
import LearnAboutBreeds from "@/component/learn/LearnAboutBreeds";
import PageHero from "@/component/shared/PageHero";

export const metadata = {
  title: "Learn About Pit Bulls & Bully Breeds | Polk County Bully Project",
  description:
    "Educate yourself about the truth regarding Pit Bulls. Discover breed characteristics, debunk common myths, and understand why they make amazing family companions.",
  alternates: {
    canonical: "/learn",
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
