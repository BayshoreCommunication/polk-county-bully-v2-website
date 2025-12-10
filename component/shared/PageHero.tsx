import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollMotion from "../motion/ScrollMotion";

interface PageHeroProps {
  bgImage: string;
  title: string;
  currentPage: string;
}

const PageHero: React.FC<PageHeroProps> = ({ bgImage, title, currentPage }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] flex flex-col justify-center items-center text-center overflow-hidden pt-20 lg:pt-28 pb-2 md:pb-4">
      {/* --- Background Image Layer --- */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt={`${title} background`}
          fill
          priority // Loads this image immediately as it's "above the fold"
          className="object-cover object-center blur-[4px] scale-105" // scale-105 prevents white edges from the blur
        />
        {/* Dark overlay to ensure text is readable over any image */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* --- Content Layer --- */}
      <ScrollMotion className="relative z-10 px-4 pt-4 md:pt-8">
        {/* Title */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#FFD700] mb-3 font-serif tracking-wide"
          style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <p
          className="text-lg md:text-xl text-[#FFD700] font-medium"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
        >
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{currentPage}</span>
        </p>
      </ScrollMotion>
    </div>
  );
};

export default PageHero;
