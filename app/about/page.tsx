import AboutVideo from "@/component/about/AboutVideo";
import PolkcountryBullys from "@/component/about/PolkcountryBullys";
import Testimonials from "@/component/home/Testimonials";
import PageHero from "@/component/shared/PageHero";

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
