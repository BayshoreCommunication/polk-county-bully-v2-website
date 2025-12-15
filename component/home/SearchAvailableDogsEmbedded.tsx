"use client";

import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion"; // Adjust path if needed

const SearchAvailableDogsEmbedded = () => {
  const goldColor = "#FFD700";

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden min-h-screen ">
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-[#003C5F]/80 via-[#003C5F]/40 to-transparent backdrop-blur-5xl z-5" />

      {/* --- 1. Background Image Implementation --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/search-available-dogs.svg"
          alt="Background Texture"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.6]"
          quality={90}
        />
        {/* Multi-colored gradient blur overlay - teal to warm amber transition */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* Left: Heading */}
        <ScrollMotion className="">
          <h2
            className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide text-center -mt-10 mb-6 md:mb-16"
            // Text stroke/shadow effect to match the image style
            style={{
              color: goldColor,
              textShadow:
                "2px 2px 0px #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333",
            }}
          >
            Search Available Dogs
          </h2>
        </ScrollMotion>
        {/* --- Embedded Search Iframe --- */}
        <ScrollMotion delay={0.1} className="w-full">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-white">
            <iframe
              loading="lazy"
              src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
              title="Search Available Dogs"
              className="w-full bg-white"
              style={{
                height: "85vh",
                minHeight: "600px",
                border: "none",
              }}
            />
          </div>
        </ScrollMotion>
      </div>

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-transparent via-[#009AD9]/30 to-[#009AD9]/80 backdrop-blur-md z-5" />
    </section>
  );
};

export default SearchAvailableDogsEmbedded;
