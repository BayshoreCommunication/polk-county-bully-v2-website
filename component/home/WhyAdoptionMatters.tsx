import { Check } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";
import SearchAvailableDogsEmbedded from "../shared/SearchAvailableDogsEmbedded";

// Data for the benefits list to keep JSX clean
const benefits = [
  {
    title: "Save a Life",
    description: "Give a loving animal a second chance to live happily",
  },
  {
    title: "Health Checked & Vaccinated",
    description: "All pets go through thorough vetting before adoption",
  },
  {
    title: "Already Trained & Socialized",
    description:
      "Most adopted pets come with basic training and house behavior",
  },
  {
    title: "Affordable & Ethical Choice",
    description:
      "Adoption fees are lower than breeder prices and support local shelters",
  },
];

const WhyAdoptionMatters = () => {
  // The gold color used in the design
  const goldColor = "#FFD700";
  // Approximate dark blue background color from image
  const darkBlueBg = "#003C5F";

  return (
    <div className="">
      {" "}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* --- 1. Background Image Implementation --- */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/home/adoption-matters-bg-image.svg" // Replace with your actual background image path
            alt="Background Texture"
            fill
            className="object-cover object-center"
            quality={90}
          />
          {/* Solid color overlay to match the deep blue brand color, making background image subtle */}
          <div className="absolute inset-0 bg-[#003C5F]/5 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* --- Left Column: Complex Image Layering --- */}
            <ScrollMotion className="relative">
              {/* Container for the images. Adjust height as needed based on your actual images */}
              <div className="relative h-[500px] w-full max-w-lg mx-auto lg:mx-0">
                {/* Puppy Image (Bottom Layer - Absolute positioned) */}
                <div className="absolute bottom-0 right-0 w-[65%] h-[60%] z-0 rounded-3xl overflow-hidden border-[3px] border-white/10 shadow-xl">
                  <Image
                    src="/assets/home/black-dog.svg" // Replace path
                    alt="Rescue Puppy"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Adult Dog Image (Top Layer - Relative positioned) */}
                {/* Rounded corners calculation:
                    rounded-tl-[100px] and rounded-br-[100px] create the distinct organic shape.
                */}
                <div className="relative z-10 w-[75%] h-[80%] rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border-4 border-[#FFD700]/30 shadow-2xl">
                  <Image
                    src="/assets/home/white-dog.svg" // Replace path
                    alt="Adult rescue dog running"
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Floating Text Block on bottom left */}
                <div
                  className="absolute -bottom-10 -left-4 md:-left-8 bg-[#09253a] p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20 max-w-xs border-l-4"
                  style={{ borderColor: goldColor }}
                >
                  <h4
                    className="font-bold mb-2 text-lg"
                    style={{ color: goldColor }}
                  >
                    Trusted By Shelters And Families Across The Country
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Building hope and lasting bonds through rescue, care, and
                    compassion.
                  </p>
                </div>
              </div>
            </ScrollMotion>

            {/* --- Right Column: Text Content --- */}
            {/* We add a slight delay (0.2s) so this side animates in just after the images */}
            <ScrollMotion delay={0.2}>
              <div>
                <h2
                  className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight font-serif"
                  style={{ color: goldColor }}
                >
                  Why Adoption Matters More Than Ever
                </h2>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: goldColor }}
                >
                  Every Pet Deserves A Second Chance
                </h3>

                <p className="text-white/90 text-lg leading-relaxed mb-10">
                  Every pet deserves love, safety, and a fresh start. At Bully
                  Project Rescue, we provide medical care and compassion —
                  helping each rescued dog heal, trust again, and find their
                  forever family.
                </p>

                {/* Benefits List */}
                <div className="space-y-6">
                  {benefits.map((item, index) => (
                    <ScrollMotion
                      key={index}
                      // Stagger the list items slightly for a nice cascading effect
                      delay={0.3 + index * 0.1}
                      className="flex items-start gap-4"
                      viewportOptions={{ margin: "0px 0px -50px 0px" }} // Trigger slightly earlier
                    >
                      <div className="mt-1 bg-white/10 p-1 rounded-full shrink-0">
                        <Check
                          className="w-5 h-5"
                          style={{ color: goldColor }}
                        />
                      </div>
                      <div>
                        <h4
                          className="text-xl font-bold mb-1"
                          style={{ color: goldColor }}
                        >
                          {item.title}
                        </h4>
                        <p className="text-white/80 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </ScrollMotion>
                  ))}
                </div>
              </div>
            </ScrollMotion>
          </div>
        </div>
      </section>
      {/* --- 2. Embedded Search Section --- */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* --- 1. Background Image Implementation --- */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/home/adoption-matters-bg-image.svg" // Replace with your actual background image path
            alt="Background Texture"
            fill
            className="object-cover object-center"
            quality={90}
          />
          {/* Solid color overlay to match the deep blue brand color, making background image subtle */}
          <div className="absolute inset-0 bg-[#003C5F]/5 mix-blend-multiply" />
        </div>
        <ScrollMotion delay={0.2}>
          <div>
            <h2
              className="text-4xl lg:text-6xl font-extrabold mb-8 leading-tight font-serif text-center"
              style={{ color: goldColor }}
            >
              Search Available Dogs
            </h2>
          </div>
        </ScrollMotion>
        <div className="relative z-10">
          <SearchAvailableDogsEmbedded />
        </div>
      </section>
    </div>
  );
};

export default WhyAdoptionMatters;
