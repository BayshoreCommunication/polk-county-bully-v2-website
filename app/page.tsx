import CurrentEvents from "@/component/home/CurrentEvents";
import Foster from "@/component/home/Foster";
import HeroSection from "@/component/home/HeroSection";
import Merchandise from "@/component/home/Merchandise";
import SearchAvailableDogsEmbedded from "@/component/home/SearchAvailableDogsEmbedded";
import SponsorADog from "@/component/home/SponsorADog";
import Testimonials from "@/component/home/Testimonials";
import Volunteer from "@/component/home/Volunteer";
import WhyAdoptionMatters from "@/component/home/WhyAdoptionMatters";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export const metadata = {
  title:
    "Polk County Bully Project | Non-Profit Pit Bull Rescue & Adoption in Florida",
  description:
    "Dedicated to saving misunderstood bully breeds in Polk County, FL. We are a 501c3 non-profit working to reduce euthanasia rates through rescue, rehabilitation, and finding forever homes. Adopt, foster, or donate today!",
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

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhyAdoptionMatters />
      <SearchAvailableDogsEmbedded />
      <SponsorADog />
      <Merchandise />
      <Foster />
      <Volunteer />
      <CurrentEvents />
      <Testimonials />
      <SpreadTheWord />
    </div>
  );
}
