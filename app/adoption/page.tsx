import AdoptionProcess from "@/component/adoption/AdoptionProcess";
import PageHero from "@/component/shared/PageHero";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

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
