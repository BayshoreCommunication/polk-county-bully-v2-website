"use client"; // Required for framer-motion

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  Variants,
} from "framer-motion"; // Animation library
import { Bone, PawPrint } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../shared/Button";

// Animation Variants for the Typing Effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Smoother, faster typing
      delayChildren: 0.3,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 }, // Smoother entrance
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    } as const,
  },
};

const HeroSection = () => {
  const titleText = "Every Dog Deserves To Be In A Loving Home";

  // Counter Animation Component
  const Counter = ({
    target,
    suffix = "",
  }: {
    target: number;
    suffix?: string;
  }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
      const controls = animate(count, target, {
        duration: 2.5,
        delay: 1.5,
        ease: "easeOut",
      });

      return controls.stop;
    }, [count, target]);

    return (
      <motion.span
        className="block text-4xl sm:text-5xl md:text-6xl font-black bg-linear-to-r from-[#FACC15] via-yellow-400 to-orange-500 bg-clip-text text-transparent"
        style={{
          WebkitTextStroke: "1px rgba(0, 0, 0, 0.3)",
          paintOrder: "stroke fill",
        }}
      >
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900 pt-20 lg:pt-28">
      {/* --- Background Image --- */}
      <div className="absolute inset-0 z-0 top-0">
        <Image
          src="/assets/home/hero-bg.svg"
          alt="Hero Background Art"
          fill
          priority
          className="object-cover object-center fixed inset-0 blur-[1px] brightness-[0.6]"
          quality={100}
          sizes="100vw"
        />
        {/* Multi-colored gradient blur overlay */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 relative z-10">
        {/* --- Enhanced Typing Animated Headline --- */}
        <motion.h1
          className=" max-w-6xl text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black leading-[1.15] mb-8 md:mb-12 text-[#FFD700] tracking-tight font-sans flex flex-wrap"
          style={{
            textShadow: `
              3px 3px 0 #000,
              -1px -1px 0 #000,
              1px -1px 0 #000,
              -1px 1px 0 #000,
              1px 1px 0 #000,
              0 0 20px rgba(255, 215, 0, 0.5),
              0 0 40px rgba(255, 215, 0, 0.3)
            `,
            WebkitTextStroke: "2px black",
            paintOrder: "stroke fill",
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {titleText.split(" ").map((word, index) => (
            <span
              key={index}
              className="inline-block mr-3 sm:mr-4 md:mr-6 mb-2 md:mb-0"
            >
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* --- Improved Content Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }} // Fades in after title finishes typing
          className="bg-black/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl md:rounded-[2.5rem] max-w-3xl border border-white/20 shadow-2xl relative overflow-hidden group mb-8 md:mb-12"
        >
          {/* Subtle sheen effect on hover */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <h2
            className="text-[#FACC15] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight"
            style={{
              textShadow: `
                2px 2px 0 #000,
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px 1px 0 #000,
                0 0 15px rgba(250, 204, 21, 0.4)
              `,
            }}
          >
            Adopting A Pet Changes Their Life
          </h2>
          <p
            className="text-gray-100 mb-8 md:mb-10 leading-relaxed text-base sm:text-lg font-light"
            style={{
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            At the Bully Project Rescue in Polk county, we believe that we can
            end breed discrimination and cruelty by working together through
            education and community support. Whether you&apos;re ready to adopt,
            foster, donate or volunteer.
          </p>

          {/* Stats Section with Gradients */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-x-12 md:gap-x-16 gap-y-6 md:gap-y-8">
            {/* Stat 1 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm">
                <PawPrint className="text-[#FFD700] w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <Counter target={8000} suffix="+" />
                <span
                  className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase mt-1 block"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Pets Adopted
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2.5 md:p-3 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm">
                <Bone className="text-[#FACC15] w-5 h-5 md:w-6 md:h-6 fill-[#FACC15]" />
              </div>
              <div>
                <Counter target={5000} suffix="+" />
                <span
                  className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase mt-1 block"
                  style={{
                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Partner Shelters
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- Global Button (Slide In from Left) --- */}
        <motion.div
          // Start 50px to the left (x: -50) and invisible
          initial={{ opacity: 0, x: -50 }}
          // Animate to original position (x: 0) and visible
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
            type: "spring",
            bounce: 0.3,
          }}
          className="flex justify-center sm:justify-start"
        >
          <Button
            label="Donate"
            href="/donate"
            className="w-full sm:w-auto min-w-[350px] sm:min-w-[350px] text-base sm:text-2xl shadow-[0_0_20px_rgba(244,71,195,0.4)] hover:shadow-[0_0_30px_rgba(244,71,195,0.6)] transition-all duration-300"
          />
        </motion.div>
      </div>

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-transparent via-black/20 to-black/60 backdrop-blur-md z-5" />
    </section>
  );
};

export default HeroSection;
