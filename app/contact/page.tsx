import ContactForm from "@/component/contact/ContactForm";
import GoogleMap from "@/component/contact/GoogleMap";
import PageHero from "@/component/shared/PageHero";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

const page = () => {
  return (
    <div>
      <PageHero
        bgImage={"/assets/home/hero-bg.svg"}
        title="Contact"
        currentPage="Contact"
      />
      <ContactForm />
      <GoogleMap />
      <SpreadTheWord />
    </div>
  );
};

export default page;
