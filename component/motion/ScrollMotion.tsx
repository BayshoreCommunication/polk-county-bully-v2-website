"use client";

import { motion, UseInViewOptions, Variants } from "framer-motion";
import React from "react";

// Optimized animation variants
// Using a dynamic variant (function) for 'visible' to handle delay efficiently
const scrollVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Reduced travel distance for a faster feel
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Faster duration
      ease: "easeOut", // Snappier easing
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
  // Default: triggers once when the top of the element enters the viewport
  viewportOptions = { once: true, margin: "0px 0px -50px 0px" },
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
