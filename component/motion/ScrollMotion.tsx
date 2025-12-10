"use client";

import { motion, UseInViewOptions, Variants } from "framer-motion";
import React from "react";

// Ultra-fast and smooth animation variants
const scrollVariants: Variants = {
  hidden: { opacity: 0, y: 15 }, // Minimal travel distance for ultra-fast feel
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Super fast duration
      ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth acceleration
      delay: delay,
    },
  }),
};

interface ScrollMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  viewportOptions?: UseInViewOptions;
}

const ScrollMotion: React.FC<ScrollMotionProps> = ({
  children,
  className = "",
  delay = 0,
  // Default: triggers once with optimized viewport detection for faster loading
  viewportOptions = { once: true, margin: "0px 0px -100px 0px", amount: 0.1 },
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      variants={scrollVariants}
      custom={delay} // Pass delay as a custom prop to the variant
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
