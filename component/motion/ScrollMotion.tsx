"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import React, { useRef } from "react";

// Define standard animation variants
// Hidden: invisible and slightly pushed down
// Visible: fully visible and in its final position
const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0] as const, // A nice cubic-bezier easing function
    },
  },
} as const;

interface ScrollMotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay to stagger animations across different elements
  viewportOptions?: UseInViewOptions; // Advanced control over when it triggers
}

const ScrollMotion: React.FC<ScrollMotionProps> = ({
  children,
  className = "",
  delay = 0,
  // Default: triggers once when the top of the element is 100px from the bottom of the screen
  viewportOptions = { once: true, margin: "0px 0px -100px 0px" },
}) => {
  const ref = useRef(null);
  // useInView hooks into the Intersection Observer API efficiently
  const isInView = useInView(ref, viewportOptions);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      // We control the animation state based on the inView hook
      animate={isInView ? "visible" : "hidden"}
      variants={defaultVariants}
      // Apply the optional delay to the transition
      transition={{ delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
