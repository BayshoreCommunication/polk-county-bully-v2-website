"use client";

import dog1 from "@/public/assets/dog/dog1.svg";
import dog2 from "@/public/assets/dog/dog2.svg";
import dog3 from "@/public/assets/dog/dog3.svg";
import dog4 from "@/public/assets/dog/dog4.svg";
import dog5 from "@/public/assets/dog/dog5.svg";
import { PawPrint, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";

// Helper component for the circular dog images
const DogCircle = ({
  src,
  alt,
  className = "",
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={`relative w-20 h-20 xs:w-24 xs:h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-[3px] md:border-[6px] border-white shadow-xl shrink-0 ${className} bg-gray-100`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse z-20" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100px, 250px"
        className={`object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

const SponsorADog = () => {
  const sectionBgColor = "#009AD9";
  const goldColor = "#FFD700";
  const [openModal, setOpenModal] = useState(false);

  // 🔥 Disable background scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [openModal]);

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-gradient-to-b from-[#003C5F]/70 via-[#003C5F]/35 to-transparent backdrop-blur-md z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* Wrapper to control max-width */}
        <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-16">
          {/* --- TOP ROW (3 DOGS) --- */}
          <div className="grid grid-cols-3 items-center justify-items-center gap-3 md:gap-4 relative z-10">
            {/* Top Left */}
            <ScrollMotion delay={0.1} className="md:translate-y-8">
              <DogCircle src={dog1} alt="Sponsor dog 1" />
            </ScrollMotion>

            {/* Top Center */}
            <ScrollMotion delay={0.2} className="md:-translate-y-4">
              <DogCircle src={dog2} alt="Sponsor dog 2" />
            </ScrollMotion>

            {/* Top Right */}
            <ScrollMotion delay={0.3} className="md:translate-y-8">
              <DogCircle src={dog3} alt="Sponsor dog 3" />
            </ScrollMotion>
          </div>

          {/* --- BOTTOM SECTION (DOG - TEXT - DOG) --- */}
          <div className="grid grid-cols-2 md:grid-cols-12 items-center gap-y-8 gap-x-4 md:gap-4 relative z-0">
            {/* Left Dog */}
            <div className="col-span-1 order-2 md:col-span-3 md:order-1 justify-self-center md:justify-self-start">
              <ScrollMotion delay={0.4}>
                <DogCircle src={dog4} alt="Sponsor dog 4" />
              </ScrollMotion>
            </div>

            {/* --- Central Text & Button --- */}
            <div className="col-span-2 order-1 md:col-span-6 md:order-2 text-center max-w-lg mx-auto z-20 px-2">
              <ScrollMotion delay={0.5}>
                <h2
                  className="text-3xl md:text-5xl font-extrabold mb-4 md:mb-6 font-serif tracking-wide drop-shadow-md"
                  style={{ color: goldColor }}
                >
                  Sponsor a Dog
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium drop-shadow-md">
                  While they wait for their forever home, you can be their
                  guardian angel. Your sponsorship covers food, vet visits, and
                  care for a dog who&apos;s still dreaming of a family.
                </p>

                {/* Main Trigger Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="flex items-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all text-white font-bold text-lg md:text-xl px-10 md:px-16 py-3 md:py-4 rounded-full"
                  >
                    <PawPrint className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                    Click Here
                  </button>
                </div>
              </ScrollMotion>
            </div>

            {/* Right Dog */}
            <div className="col-span-1 order-3 md:col-span-3 md:order-3 justify-self-center md:justify-self-end">
              <ScrollMotion delay={0.6}>
                <DogCircle src={dog5} alt="Sponsor dog 5" />
              </ScrollMotion>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          MODAL (DESIGN PATTERN MATCHED)
      ========================== */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full p-6 md:p-10 relative animate-fadeIn max-h-[90vh] overflow-y-auto border-4 border-[#FFD700]">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#F424B2] hover:bg-pink-50 rounded-full p-2 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Modal Title */}
            <div className="text-center mb-8">
              <h2
                className="text-3xl md:text-4xl font-extrabold font-serif mb-3 uppercase"
                style={{ color: sectionBgColor }}
              >
                Sponsor A Dog
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Your monthly gift provides food, shelter, and medical care to
                dogs in desperate need.
              </p>
            </div>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Sponsorship Amount
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all text-gray-600">
                  <option>$10 / Month (Feed a dog for a week)</option>
                  <option>$25 / Month (Vaccinations)</option>
                  <option>$50 / Month (Medical Care)</option>
                  <option>$100 / Month (Full Sponsorship)</option>
                  <option>Other Amount</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Message (Optional)
                </label>
                <textarea
                  placeholder="Any specific instructions or dedication..."
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all h-24 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="button" // Change to submit when connecting backend
                  className="flex items-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all text-white font-bold text-lg px-12 py-3 rounded-full"
                >
                  <PawPrint className="w-5 h-5 fill-current" />
                  Become a Sponsor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default SponsorADog;
