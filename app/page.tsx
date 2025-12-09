import CurrentEvents from "@/component/home/CurrentEvents";
import Foster from "@/component/home/Foster";
import HeroSection from "@/component/home/HeroSection";
import Merchandise from "@/component/home/Merchandise";
import SponsorADog from "@/component/home/SponsorADog";
import Testimonials from "@/component/home/Testimonials";
import Volunteer from "@/component/home/Volunteer";
import WhyAdoptionMatters from "@/component/home/WhyAdoptionMatters";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <WhyAdoptionMatters />
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
