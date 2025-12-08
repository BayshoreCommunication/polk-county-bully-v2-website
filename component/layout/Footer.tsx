import { ChevronRight, Facebook, Globe, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define types
type LinkItem = {
  label: string;
  href: string;
};

const quickLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Adoption", href: "/adoption" },
  { label: "Learn", href: "/learn" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks: LinkItem[] = [
  { label: "Adoption Guide", href: "/guide" },
  { label: "Pet Care Tips", href: "/tips" },
  { label: "Shelter Partners", href: "/partners" },
  { label: "Volunteer Opportunities", href: "/volunteer" },
  { label: "Help Center", href: "/help" },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#3a0ca3] text-white pt-16 pb-6 overflow-hidden">
      {/* --- Optimized Background Image --- */}
      {/* Using Next/Image with 'fill' for responsive background handling */}
      <div className="absolute inset-0">
        <Image
          src="/assets/footer/footer-bg.svg"
          alt="Footer Background"
          fill
          className="object-cover object-center " // Adjust opacity as needed
          quality={90}
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-purple-800/90 -z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-x-24 xl:gap-x-32 mb-16">
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col items-start">
            <div className="bg-black p-2 rounded-lg mb-6 inline-block">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/assets/logo/polk-county-bully-logo.svg"
                  alt="Polk County Bully Logo"
                  width={200}
                  height={80}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed max-w-[320px]">
              Helping bully breed dogs find loving homes. Adopt, foster, or
              donate to save a life today. Helping bully breed dogs find loving
              homes.
            </p>
          </div>

          {/* Columns 2, 3, 4:
            Added 'lg:mt-5' to push these columns down by ~20px on desktop (Web)
            as requested, while keeping them stacked normally on Tablet (md) and Mobile.
          */}

          {/* Column 2: Quick Links */}
          <div className="lg:mt-[70px] lg:ml-20">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-white/70 group-hover:text-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:mt-[70px]">
            <h3 className="text-xl font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-white/70 group-hover:text-white" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:mt-[70px]">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Globe className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-8 h-8" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="border-t border-indigo-700/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
          <p>
            &copy; Copyrights{" "}
            <span className="text-yellow-400 font-medium">
              Polk County Bully Project
            </span>{" "}
            All rights reserved
          </p>

          <p>
            Design & Developed by{" "}
            <span className="text-yellow-400 font-medium">
              BayShore Communication
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
