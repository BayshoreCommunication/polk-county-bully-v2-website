// components/ui/Button.tsx
import Link from "next/link";
import React from "react";

// Define the interface for the button props
interface ButtonProps {
  label: string; // The text inside the button
  href: string; // The link destination
  className?: string; // Optional custom classes (e.g., for width)
}

const Button: React.FC<ButtonProps> = ({ label, href, className = "" }) => {
  // Base styles tailored to match the pink "Donate" button in the design
  const baseStyles =
    "inline-flex items-center justify-center bg-[#F447C3] hover:bg-[#d63da9] text-white font-extrabold text-2xl py-4 px-12 rounded-full shadow-lg transition-all duration-300 hover:scale-105";

  // Combine base styles with any custom classes passed in (like w-full or w-64)
  const combinedClasses = `${baseStyles} ${className} text-center text-2xl`;

  return (
    <Link href={href} className={combinedClasses}>
      {label}
    </Link>
  );
};

export default Button;
