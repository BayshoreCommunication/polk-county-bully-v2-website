import AdoptionProcess from "@/component/adoption/AdoptionProcess";
import PageHero from "@/component/shared/PageHero";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export const metadata = {
  title: "Adopt a Bully Breed Dog | Polk County Bully Project",
  description:
    "Ready to adopt? Explore our adoption process and find your new best friend. Give a loving forever home to a rescued pit bull or bully breed dog in Polk County today.",
  alternates: {
    canonical: "/adoption",
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
