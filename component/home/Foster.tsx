import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion"; // Adjust path if located in 'shared'
import Button from "../shared/Button"; // Adjust path if located in 'shared'

const Foster = () => {
  // Brand colors
  const goldColor = "#FFD700";
  const blueBoxColor = "#009AD9"; // The bright blue color for the stat box

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-black/50 via-transparent to-transparent z-5" />

      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/foster-bg.svg" // Replace with your graffiti background
          alt="Colorful graffiti art background"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* --- Left Column: Image Collage --- */}
          <ScrollMotion className="relative w-full max-w-md mx-auto lg:mx-0 h-[450px] md:h-[500px]">
            {/* 1. Main Vertical Image (Left) */}
            <div className="absolute left-0 top-12 w-[60%] h-[85%] border-[4px] border-white shadow-2xl z-10">
              <Image
                src="/assets/home/foster-right-image.svg" // Replace with large dog image
                alt="Foster dog"
                fill
                className="object-cover"
              />
            </div>

            {/* 2. Secondary Square Image (Top Right) */}
            <div className="absolute right-0 top-0 w-[45%] aspect-square border-[4px] border-white shadow-xl z-0">
              <Image
                src="/assets/home/foster-left-image.svg" // Replace with small dog image
                alt="Foster puppy"
                fill
                className="object-cover"
              />
            </div>

            {/* 3. Blue Stat Box (Bottom Right) */}
            <div
              className="absolute right-0 bottom-12 w-[45%] aspect-square flex flex-col justify-center items-center text-center p-2 border-[4px] border-white shadow-xl z-20"
              style={{ backgroundColor: blueBoxColor }}
            >
              <span className="text-3xl md:text-4xl font-extrabold text-white leading-none mb-1">
                5000+
              </span>
              <span className="text-white text-sm md:text-base font-medium">
                Saves Lives
              </span>
            </div>
          </ScrollMotion>

          {/* --- Right Column: Text Content --- */}
          <ScrollMotion delay={0.2} className="text-left">
            <h2
              className="text-5xl md:text-6xl font-extrabold font-serif tracking-wide mb-6"
              style={{
                color: goldColor,
                // Greenish text shadow matching the reference image
                textShadow: "2px 2px 0px #006400, -1px -1px 0 #006400",
              }}
            >
              Foster
            </h2>

            <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-10 drop-shadow-md">
              Fostering saves lives. One open home means one more dog pulled
              from danger. We take care of the supplies; you give them love,
              patience, and hope.
            </p>

            {/* CTA Button */}
            <div className="flex justify-start">
              <Button
                href="/foster"
                label={
                  <>
                    <PawPrint className="w-6 h-6 mr-2 fill-current" />
                    Become A Foster Hero
                  </>
                }
                // Pink background with 3D shadow style
                className="!bg-[#F424B2] hover:!bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-lg md:text-xl px-10 py-4 rounded-full min-w-[280px]"
              />
            </div>
          </ScrollMotion>
        </div>
      </div>

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-transparent via-black/60 to-black backdrop-blur-md z-5" />
    </section>
  );
};

export default Foster;
