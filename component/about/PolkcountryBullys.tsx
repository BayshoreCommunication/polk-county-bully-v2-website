import adoptionBg from "@/public/assets/home/adoption-bg.svg";
import medinaImg from "@/public/assets/about/medina.svg";
import shannonImg from "@/public/assets/about/shannon.svg";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";

const PolkcountryBullys = () => {
  // Brand colors matching your design system
  const goldColor = "#FFD700";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={adoptionBg}
          alt="Background Texture"
          fill
          sizes="100vw"
          className="object-cover object-center blur-[1px] brightness-[0.6]"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* --- Left Column: Founders Images --- */}
          <ScrollMotion
            delay={0.2}
            className="relative w-full max-w-2xl mx-auto lg:mx-0"
          >
            {/* Founders Grid Container */}
            <div className="flex gap-4 md:gap-6 items-stretch">
              {/* Image 1: Shannon (Left) - Rounded Top-Left */}
              <div className="flex-1 relative aspect-[3/4] rounded-tl-[4rem] rounded-tr-xl rounded-bl-xl rounded-br-xl overflow-hidden border-4 border-gray-300 shadow-xl bg-gray-200">
                <Image
                  src={shannonImg}
                  alt="Shannon Medina"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Image 2: Angie (Right) - Rounded Bottom-Right (Diagonal symmetry) */}
              <div className="flex-1 relative aspect-[3/4] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-[4rem] overflow-hidden border-4 border-gray-300 shadow-xl bg-gray-200">
                {/* Note: Ensure you have this image asset or change the path */}
                <Image
                  src={medinaImg}
                  alt="Angie Lorio"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-white bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <p className="text-sm md:text-base font-bold text-[#FFD700] mb-1">
                Bully Project Rescue Founders:
              </p>
              <p className="text-sm md:text-base leading-snug opacity-90">
                Shannon Medina (Left) and Angie Lorio (Right).
              </p>
            </div>
          </ScrollMotion>

          {/* --- Right Column: Text Content --- */}
          <ScrollMotion className="text-left">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight mb-6"
              style={{
                color: goldColor,
                textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
              }}
            >
              Polk Country Bully Project
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 font-medium">
              We are a non-profit 501c3 rescue organization with a small shelter
              that works to find forever homes for this misunderstood breed.
              Through local adoption and rescue partnerships we are giving these
              dogs their chance at a happily ever after. We’re dedicated to our
              goal of reducing euthanasia rates of these dogs in Polk County. We
              pulled half of the dogs pulled in the county by rescues in 2022.
            </p>
          </ScrollMotion>
        </div>
      </div>
    </section>
  );
};

export default PolkcountryBullys;
