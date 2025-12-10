"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Adoption", href: "/adoption" },
  { name: "Learn", href: "/learn" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="relative flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0 lg:mt-20">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logo/polk-county-bully-logo.svg"
                alt="Polk County Bully Logo"
                width={500}
                height={500}
                className="h-12 lg:h-28 w-auto rounded-xl"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredPath(item.href)}
                    onMouseLeave={() => setHoveredPath(null)}
                    className={`relative px-2 py-1 text-lg font-medium transition-colors font-georgia ${
                      isActive
                        ? "text-[#FFD700] font-bold"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD700]"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    {item.href === hoveredPath && !isActive && (
                      <motion.div
                        layoutId="navbar-hover-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50"
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{ opacity: 1, width: "100%" }}
                        exit={{ opacity: 0, width: "0%" }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD700]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Full-screen backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-20 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-white/10 bg-black/80 backdrop-blur-xl border-b  absolute top-full left-0 right-0 z-50"
            >
              <div className="space-y-1 px-4 pb-3 pt-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md px-3 py-2 text-base font-medium font-georgia transition-colors ${
                          isActive
                            ? "bg-[#FFD700]/20 text-[#FFD700] font-bold"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
