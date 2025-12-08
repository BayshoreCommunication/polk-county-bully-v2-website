import CurrentEvents from "@/component/home/CurrentEvents";
import HeroSection from "@/component/home/HeroSection";
import Merchandise from "@/component/home/Merchandise";
import SponsorADog from "@/component/home/SponsorADog";
import Testimonials from "@/component/home/Testimonials";
import WhyAdoptionMatters from "@/component/home/WhyAdoptionMatters";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhyAdoptionMatters />
      <SponsorADog />
      <Merchandise />
      <CurrentEvents />
      <Testimonials />
      <SpreadTheWord />
    </div>
  );
}
