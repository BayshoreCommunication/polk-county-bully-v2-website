"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";

// Define the common avatar path here so it's easy to change later
const COMMON_AVATAR = "/assets/home/avatar.png";

const testimonials = [
  {
    id: 1,
    name: "Charlie Smith",
    image: COMMON_AVATAR, // Using common avatar
    text: "Adopting through Bully Project Rescue was seamless and heartwarming. Our new pup feels like part of the family already!",
  },
  {
    id: 2,
    name: "Dany Monson",
    image: COMMON_AVATAR, // Using common avatar
    text: "The team was so supportive and caring. They matched us with the perfect dog, and the entire process felt personal and safe.",
  },
  {
    id: 3,
    name: "Sacha Dubois",
    image: COMMON_AVATAR, // Using common avatar
    text: "Fostering with Bully Project Rescue was a life-changing experience. I got to help dogs in need while preparing them for their forever homes.",
  },
];

const Testimonials = () => {
  const goldColor = "#FFD700";

  // --- Sub-Component for Image Handling ---
  const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 bg-gray-100">
        {!hasError && src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            onError={() => setHasError(true)} // Trigger fallback on load error
          />
        ) : (
          // Fallback UI: First Letter of Name
          <div className="w-full h-full flex items-center justify-center bg-[#FFD700] text-black">
            <span className="text-4xl font-extrabold uppercase font-serif">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/testimonial-bg.svg"
          alt="Colorful graffiti art background"
          fill
          className="object-cover object-center"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* --- Header Section --- */}
        <ScrollMotion className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide mb-4"
            style={{
              color: goldColor,
              textShadow: "3px 3px 0px #0057B7",
            }}
          >
            Our Client Testimonial
          </h2>
          <p className="text-white text-lg md:text-xl font-medium tracking-wide drop-shadow-md">
            Hear from families who've found their perfect furry companions.
          </p>
        </ScrollMotion>

        {/* --- Testimonial Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <ScrollMotion key={item.id} delay={index * 0.2} className="h-full">
              <div className="bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-10 text-center shadow-2xl h-full flex flex-col items-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                {/* Watermark Pattern (Optional) */}
                <div className="absolute inset-0 opacity-5 bg-[url('/assets/pattern.png')] bg-repeat z-0 pointer-events-none" />
                
                {/* Avatar */}{" "}
                <TestimonialAvatar src={item.image} name={item.name} />

                {/* Name */}
                <h3 className="text-2xl font-extrabold text-black mb-4 z-10">
                  {item.name}
                </h3>
                {/* Testimonial Text */}
                <p className="text-gray-800 leading-relaxed font-medium z-10">
                  {item.text}
                </p>
              </div>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
