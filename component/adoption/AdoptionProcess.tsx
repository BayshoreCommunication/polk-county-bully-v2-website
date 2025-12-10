import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

const AdoptionProcess = () => {
  // Brand colors extracted from the design
  const goldColor = "#FFD700";
  // We don't need sectionBgColor in the style prop anymore,
  // as we are using it in the overlay now.

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- ADDED: Background Image Implementation --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg" // Replace with your actual background image path
          alt="Background Texture"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.6]"
          quality={90}
        />
        {/* Multi-colored gradient blur overlay */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* --- 1. Heading --- */}
        <ScrollMotion className="text-center mb-12 max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight"
            style={{
              color: goldColor,
              // Dark shadow for contrast against teal
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
            }}
          >
            Are You Ready To Give One Of Our Beautiful Bullies A Forever Home?
          </h2>
        </ScrollMotion>

        {/* --- 2. Main Content Card --- */}
        <div className="max-w-4xl mx-auto">
          {/* Central Image */}
          <ScrollMotion
            delay={0.2}
            className="relative w-full aspect-video md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white/10"
          >
            <Image
              src="/assets/adoption/adoption-process-dog.svg" // Replace with your image
              alt="Rescue dog on grass with van in background"
              fill
              className="object-cover"
            />
          </ScrollMotion>

          {/* Text Content */}
          <ScrollMotion
            delay={0.3}
            className="text-center text-white space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-100">
              Here’s how to start the process!
            </h3>

            <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 max-w-3xl mx-auto">
              If you haven't fallen in love with one of our pit bulls yet, you
              can see all of the dogs who are ready for a forever home here.
              Once you've chosen the dog you'd like to adopt, you can submit
              your application for adoption here!
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 max-w-3xl mx-auto">
              All of our adult dogs are spayed/neutered and up to date on
              vaccines. Your application for adoption will be processed, and you
              should hear back from us within a week. Once you are approved to
              adopt we will put you in contact with the foster to set up a meet
              and greet.
            </p>

            {/* --- 3. CTA Button --- */}
            <div className="pt-8 flex justify-center">
              <Button
                href="/adopt"
                label={
                  <>
                    <PawPrint className="w-6 h-6 mr-2 fill-current" />
                    Adopt Today
                  </>
                }
                // Pink background with 3D shadow style matching your design
                className="!bg-[#F424B2] hover:!bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-xl px-12 py-4 rounded-full min-w-[250px]"
              />
            </div>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
