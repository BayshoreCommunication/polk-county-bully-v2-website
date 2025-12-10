import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";

const LearnAboutBreeds = () => {
  // Brand colors matching your design system
  const goldColor = "#FFD700";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image Implementation (Same as AdoptionProcess) --- */}
      {/* --- 1. Background Image Implementation --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg" // Replace with your actual background image path
          alt="Background Texture"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.6]"
        />
        {/* Multi-colored gradient blur overlay */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* --- Left Column: Text Content --- */}
          <ScrollMotion className="text-left">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight mb-6"
              style={{
                color: goldColor,
                // Dark shadow for contrast against teal
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              }}
            >
              Learn About Our Pits And Other Breeds
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 font-medium">
              Pit Bulls make wonderful companions and can be a great addition to
              families in the right living situation. They do require
              responsible, dedicated, and informed ownership, and many times,
              rescue Pit Bulls require an extra dose of love.
            </p>
          </ScrollMotion>

          {/* --- Right Column: Image Collage --- */}
          <ScrollMotion
            delay={0.2}
            className="relative w-full max-w-md mx-auto lg:mx-0 h-[400px] md:h-[500px]"
          >
            {/* 1. Main Vertical Image (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[55%] h-[90%] border-[5px] border-white shadow-2xl z-10 relative">
              <Image
                src="/assets/home/foster-right-image.svg" // Large vertical dog image
                alt="Blue Pit Bull standing"
                fill
                className="object-cover"
              />
            </div>

            {/* 2. Secondary Image (Top Right) */}
            <div className="absolute right-0 top-0 w-[42%] aspect-square border-[5px] border-white shadow-xl z-0">
              <Image
                src="/assets/home/foster-left-image.svg" // Top right dog image
                alt="Tan Pit Bull being petted"
                fill
                className="object-cover"
              />
            </div>

            {/* 3. Tertiary Image (Bottom Right) */}
            <div className="absolute right-0 bottom-0 w-[42%] aspect-square border-[5px] border-white shadow-xl z-0">
              <Image
                src="/assets/dog/dog4.jpg" // Bottom right dog image
                alt="Brown Pit Bull with bandana"
                fill
                className="object-cover"
              />
            </div>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
};

export default LearnAboutBreeds;
