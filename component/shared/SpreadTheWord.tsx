import { Facebook, Instagram, PawPrint, Video, Youtube } from "lucide-react"; // Using Video as a placeholder for TikTok
import Image from "next/image";
import Link from "next/link";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

const SpreadTheWord = () => {
  // Golden-yellow color for the heading, consistent with other sections
  const goldColor = "#FFD700";

  // Social media links data
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Video, href: "https://tiktok.com", label: "TikTok" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image & Overlay --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/spreadtheword-bg.svg" // Replace with your actual image path
          alt="Colorful blurry background texture"
          fill
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay to ensure text is readable on top of the busy background */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main container with a scroll animation */}
        <ScrollMotion className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* --- Heading --- */}
          <h2
            className="text-4xl md:text-5xl font-extrabold font-serif tracking-wide mb-6"
            style={{
              color: goldColor,
              // Add a text shadow for better contrast and to match the site's style
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Spread the Word
          </h2>

          {/* --- Paragraph Text --- */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-10 drop-shadow-md">
            Share our mission, tell their stories, and help us reach the hearts
            of more people who care. One post can change a life.
          </p>

          {/* --- Social Media Icons --- */}
          <div className="flex space-x-5 mb-12">
            {socialLinks.map((social, index) => (
              // Wrap each icon in ScrollMotion for a nice staggered entrance effect
              <ScrollMotion
                key={index}
                delay={index * 0.1}
                className="inline-block"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="block bg-white text-black p-3 rounded-full hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              </ScrollMotion>
            ))}
          </div>

          {/* --- Contact Us Button --- */}
          {/* Using your global Button component with custom pink styling */}
          <ScrollMotion delay={0.4}>
            <Button
              href="/contact"
              label={
                <>
                  <PawPrint className="w-6 h-6 mr-2 fill-current" />
                  Contact Us
                </>
              }
              // Custom classes to match the specific pink color and 3D shadow effect
              className="!bg-[#F424B2] hover:!bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-xl px-12 py-3 rounded-full"
            />
          </ScrollMotion>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default SpreadTheWord;
