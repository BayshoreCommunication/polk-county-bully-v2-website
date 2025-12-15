"use client";

import mugMockup from "@/public/assets/home/12mug_mockup 1.svg";
import maskGroup from "@/public/assets/home/Mask group.svg";
import bullyBottle from "@/public/assets/home/bully_bottle 1.svg";
import bullyCap from "@/public/assets/home/bully_cap 1.svg";
import bullyCase from "@/public/assets/home/bully_case 1.svg";
import bullyTshirt from "@/public/assets/home/bully_tshirt_1 1.svg";
import backpackGirl from "@/public/assets/home/young-girl-with-gray-student-backpack 2.svg";
import { PawPrint, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";

// Define product data
const products = [
  { id: 1, src: mugMockup, alt: "Bully Project T-Shirt Black" },
  { id: 2, src: bullyBottle, alt: "Bully Project Coffee Mug" },
  { id: 3, src: bullyCase, alt: "Bully Project Phone Case" },
  { id: 4, src: bullyTshirt, alt: "Bully Project Backpack" },
  { id: 5, src: maskGroup, alt: "Bully Project Water Bottle" },
  { id: 6, src: bullyCap, alt: "Bully Project T-Shirt Grey" },
  { id: 7, src: backpackGirl, alt: "Bully Project Cap" },
];

const MerchandiseItem = ({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 45vw, 25vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

const Merchandise = () => {
  const goldColor = "#FFD700";
  const [openModal, setOpenModal] = useState(false);

  // Disable background scrolling when modal is open
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
    <section className="relative py-20 bg-[#005B70] overflow-hidden">
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 backdrop-blur-md z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* --- Heading --- */}
        <ScrollMotion>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide"
              style={{
                color: goldColor,
                textShadow:
                  "2px 2px 0px #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333",
              }}
            >
              Buy Our Merchandise
            </h2>
          </div>
        </ScrollMotion>

        {/* --- Product Grid --- */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollMotion
              key={product.id}
              delay={index * 0.05}
              className="relative group w-[45%] md:w-[22%] aspect-square rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100"
            >
              <MerchandiseItem src={product.src} alt={product.alt} />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
            </ScrollMotion>
          ))}
        </div>

        {/* --- CTA Button (Triggers Modal) --- */}
        <ScrollMotion delay={0.2}>
          <div className="flex justify-center">
            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all text-white font-bold text-lg md:text-xl px-12 py-4 rounded-full"
            >
              <PawPrint className="w-5 h-5 fill-current" />
              Buy Our Merchandise
            </button>
          </div>
        </ScrollMotion>
      </div>

      {/* ---------------- MODAL ---------------- */}
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
                className="text-3xl md:text-4xl font-extrabold font-serif mb-3"
                style={{ color: "#005B70" }}
              >
                Get Your Gear
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Wear your heart on your sleeve. Every purchase helps rescue more
                dogs and spreads love everywhere you go.
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
                  Item Type
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all text-gray-600">
                  <option>Select Merchandise</option>
                  <option>T-Shirt</option>
                  <option>Mug</option>
                  <option>Tote Bag</option>
                  <option>Cap</option>
                  <option>Bottle</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Size
                </label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all text-gray-600">
                  <option>Size (If Applicable)</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Quantity
                </label>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all"
                />
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">
                  Shipping Address
                </label>
                <textarea
                  placeholder="Please enter your full shipping address..."
                  className="w-full bg-gray-50 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F424B2] focus:border-transparent transition-all h-24 resize-none"
                />
              </div>
            </form>

            {/* Submit Button */}
            <div className="flex justify-center mt-10">
              <button className="flex items-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all text-white font-bold text-lg px-12 py-3 rounded-full">
                <PawPrint className="w-5 h-5 fill-current" />
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 backdrop-blur-md z-5" />
    </section>
  );
};

export default Merchandise;
