import AboutPitBulls from "@/component/learn/AboutPitBulls";
import LearnAboutBreeds from "@/component/learn/LearnAboutBreeds";
import PageHero from "@/component/shared/PageHero";

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
