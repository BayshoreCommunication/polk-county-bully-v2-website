import { Check } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";

// Data for the benefits list
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
  const goldColor = "#FFD700";

  return (
    <div className="">
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Top gradient blur */}
        <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-md z-5" />

        {/* --- Background Image --- */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/home/adoption-bg.svg"
            alt="Background Texture"
            fill
            className="object-cover object-center blur-[1px] brightness-[0.6]"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* --- Left Column: Images & Text --- */}
            <ScrollMotion className="relative">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[650px]">
                <Image
                  src="/assets/home/aboutdong.png"
                  alt="Adult rescue dog"
                  fill
                  // object-cover ensures it fills the container without distorting
                  className="object-cover object-center"
                />
              </div>
            </ScrollMotion>

            {/* --- Right Column: Content (Unchanged) --- */}
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
                      delay={0.3 + index * 0.1}
                      className="flex items-start gap-4"
                      viewportOptions={{ margin: "0px 0px -50px 0px" }}
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

        {/* Bottom gradient blur */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-b from-transparent via-[#003C5F]/30 to-[#003C5F]/80 backdrop-blur-md z-5" />
      </section>
    </div>
  );
};

export default WhyAdoptionMatters;
