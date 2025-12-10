import ContactForm from "@/component/contact/ContactForm";
import GoogleMap from "@/component/contact/GoogleMap";
import PageHero from "@/component/shared/PageHero";
import SpreadTheWord from "@/component/shared/SpreadTheWord";

export const metadata = {
  title: "Contact Us - Get in Touch | Polk County Bully Project",
  description:
    "Have questions about adoption, volunteering, or donating? Contact the Polk County Bully Project team. We are here to help you help our dogs.",
  alternates: {
    canonical: "/contact",
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
