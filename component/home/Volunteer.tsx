import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

const Volunteer = () => {
  // Brand colors
  const goldColor = "#FFD700";

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-black via-black/60 to-transparent backdrop-blur-md z-5" />

      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/volunteer-bg.svg" // Replace with your graffiti background
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
        {/* --- Top Section: Heading & Text --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 max-w-6xl mx-auto">
          {/* Left: Heading */}
          <ScrollMotion className="lg:w-1/3">
            <h2
              className="text-5xl md:text-7xl font-extrabold font-serif tracking-wide"
              style={{
                color: goldColor,
                // Greenish stroke/shadow effect to match the "Volunteer" text in image
                textShadow: "2px 2px 0px #006400, -1px -1px 0 #006400",
              }}
            >
              Volunteer
            </h2>
          </ScrollMotion>

          {/* Right: Description */}
          <ScrollMotion delay={0.2} className="lg:w-1/2">
            <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-md border-l-4 border-[#F424B2] pl-6">
              Every helping hand creates a ripple of change. Whether it&apos;s
              transport, events, or sharing a post — your time can be the reason
              a dog finds their forever home.
            </p>
          </ScrollMotion>
        </div>

        {/* --- Middle Section: Images with Pink Borders --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          {/* Image 1 (Left) */}
          <ScrollMotion delay={0.3} className="relative aspect-video w-full">
            <div className="border-[8px] border-[#F424B2] shadow-2xl h-full w-full relative overflow-hidden group">
              <Image
                src="/assets/home/volunteer-left-image.svg" // Replace with actual image
                alt="Volunteers with dogs near van"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Optional Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </ScrollMotion>

          {/* Image 2 (Right) */}
          <ScrollMotion delay={0.4} className="relative aspect-video w-full">
            <div className="border-[8px] border-[#F424B2] shadow-2xl h-full w-full relative overflow-hidden group">
              <Image
                src="/assets/home/volunteer-right-image.svg" // Replace with actual image
                alt="Volunteers holding dogs"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </ScrollMotion>
        </div>

        {/* --- Bottom Section: CTA Button --- */}
        <ScrollMotion delay={0.5}>
          <div className="flex justify-center">
            <Button
              href="/volunteer"
              label={
                <>
                  <PawPrint className="w-6 h-6 mr-2 fill-current" />
                  Join Our Volunteer Family
                </>
              }
              // Pink background with 3D shadow style
              className="!bg-[#F424B2] hover:!bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-xl px-12 py-4 rounded-full min-w-[300px]"
            />
          </div>
        </ScrollMotion>
      </div>
      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-transparent via-black/60 to-black backdrop-blur-md z-5" />
    </section>
  );
};

export default Volunteer;
