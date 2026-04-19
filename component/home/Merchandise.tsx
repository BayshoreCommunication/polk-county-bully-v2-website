"use client";

import { send } from "@emailjs/browser";
import mugMockup from "@/public/assets/home/12mug_mockup 1.svg";
import maskGroup from "@/public/assets/home/Mask group.svg";
import bullyBottle from "@/public/assets/home/bully_bottle 1.svg";
import bullyCap from "@/public/assets/home/bully_cap 1.svg";
import bullyCase from "@/public/assets/home/bully_case 1.svg";
import bullyTshirt from "@/public/assets/home/bully_tshirt_1 1.svg";
import backpackGirl from "@/public/assets/home/young-girl-with-gray-student-backpack 2.svg";
import { ExternalLink, Mail, PawPrint, ShoppingBag, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ScrollMotion from "../motion/ScrollMotion";

/**
 * STORE CONFIG — update this URL when the permanent store is ready.
 * Set TEMP_STORE_URL to "" to hide the temporary shop button.
 */
const TEMP_STORE_URL = "https://www.bonfire.com"; // ← replace with actual store link

const products = [
  { id: 1, src: mugMockup, alt: "Bully Project Mug" },
  { id: 2, src: bullyBottle, alt: "Bully Project Bottle" },
  { id: 3, src: bullyCase, alt: "Bully Project Phone Case" },
  { id: 4, src: bullyTshirt, alt: "Bully Project T-Shirt" },
  { id: 5, src: maskGroup, alt: "Bully Project Gear" },
  { id: 6, src: bullyCap, alt: "Bully Project Cap" },
  { id: 7, src: backpackGirl, alt: "Bully Project Backpack" },
];

/** Print-on-demand platforms for client reference */
const podPlatforms = [
  {
    name: "Bonfire",
    tagline: "Built for nonprofits & fundraising campaigns",
    badge: "Best for nonprofits",
    badgeColor: "#16a34a",
    href: "https://www.bonfire.com",
    note: "No upfront cost, great for t-shirts & hoodies, built-in fundraising tools.",
  },
  {
    name: "Printful",
    tagline: "Widest product range — mugs, backpacks, caps & more",
    badge: "Best variety",
    badgeColor: "#0891b2",
    href: "https://www.printful.com",
    note: "High quality, integrates with Shopify & Etsy. Best for mugs, backpacks, caps.",
  },
  {
    name: "Printify",
    tagline: "Most affordable print-on-demand network",
    badge: "Best value",
    badgeColor: "#7c3aed",
    href: "https://printify.com",
    note: "Many print providers to choose from — compare quality & price per item.",
  },
  {
    name: "Spring (Teespring)",
    tagline: "Zero upfront cost, easy storefront setup",
    badge: "Easiest start",
    badgeColor: "#d97706",
    href: "https://www.spri.ng",
    note: "Simple to launch, no inventory needed. Good for a quick test store.",
  },
];

const MerchandiseItem = ({ src, alt }: { src: StaticImageData; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />}
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
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyLoading, setNotifyLoading] = useState(false);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = originalStyle;
    return () => { document.body.style.overflow = originalStyle; };
  }, [openModal]);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!notifyEmail.trim() || !emailRegex.test(notifyEmail)) {
      await Swal.fire({ icon: "warning", text: "Please enter a valid email address.", confirmButtonColor: "#131b2a" });
      return;
    }
    setNotifyLoading(true);
    try {
      await send(
        "service_78ezzng",
        "template_4hmmh5l",
        {
          firstname: "Store Launch",
          lastname: "Notification",
          email: notifyEmail,
          phone: "-",
          message: `New store launch notification request from: ${notifyEmail}`,
        },
        "FAcMdTK-cDe5gXZaD",
      );
      setNotifyEmail("");
      await Swal.fire({
        icon: "success",
        text: "You're on the list! We'll email you the moment our store goes live.",
        confirmButtonColor: "#131b2a",
      });
    } catch {
      await Swal.fire({ icon: "error", text: "Something went wrong. Please try again.", confirmButtonColor: "#131b2a" });
    } finally {
      setNotifyLoading(false);
    }
  };

  return (
    <section className="relative py-20 bg-[#005B70] overflow-hidden">
      {/* Top — blends from SponsorADog teal */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#009AD9]/30 via-[#007a8a]/10 to-transparent z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">

        {/* Heading */}
        <ScrollMotion>
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-full px-4 py-1.5 mb-5">
              <ShoppingBag className="w-4 h-4 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm font-bold uppercase tracking-widest">Store Coming Soon</span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide"
              style={{
                color: goldColor,
                textShadow: "2px 2px 0px #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333",
              }}
            >
              Grab the gear. Save a life.
            </h2>
            <p className="text-white/70 text-lg mt-4 max-w-xl mx-auto leading-relaxed">
              Every purchase supports our mission to rescue and rehome bully breed dogs in Polk County.
            </p>
          </div>
        </ScrollMotion>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 mt-12">
          {products.map((product, index) => (
            <ScrollMotion
              key={product.id}
              delay={index * 0.05}
              className="relative group w-[45%] md:w-[22%] aspect-square rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-gray-100"
            >
              <MerchandiseItem src={product.src} alt={product.alt} />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
            </ScrollMotion>
          ))}
        </div>

        {/* CTA Buttons */}
        <ScrollMotion delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full"
            >
              <PawPrint className="w-5 h-5 fill-current" />
              Get Our Gear
            </button>
            {TEMP_STORE_URL && (
              <Link
                href={TEMP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/30 hover:border-white/60 text-white hover:text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Shop Temporarily
              </Link>
            )}
          </div>
        </ScrollMotion>
      </div>

      {/* ── MODAL ── */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] bg-black/75 backdrop-blur-sm flex justify-center items-start sm:items-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-6 md:p-10 relative my-auto border-4 border-[#FFD700]">

            {/* Close */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#F424B2] hover:bg-pink-50 rounded-full p-2 transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
                <ShoppingBag className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-bold uppercase tracking-widest">Store Coming Soon</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-3" style={{ color: "#005B70" }}>
                Our Store Is Launching Soon!
              </h2>
              <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed">
                We&apos;re setting up the best experience for you. Get notified the moment we go live — or shop our temporary store now.
              </p>
            </div>

            {/* Notify Me */}
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <input
                  type="email"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={notifyLoading}
                className="flex items-center justify-center gap-2 bg-[#F424B2] hover:bg-[#d91a9b] text-white font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-70 shrink-0"
              >
                {notifyLoading ? "Saving…" : "Notify Me"}
              </button>
            </form>

            {/* Temp Store Link */}
            {TEMP_STORE_URL && (
              <div className="mb-8 p-4 bg-[#005B70]/8 border border-[#005B70]/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div className="flex-1">
                  <p className="font-bold text-[#005B70] text-sm">Shop now in our temporary store</p>
                  <p className="text-gray-500 text-xs mt-0.5">Limited items available while we build the full experience.</p>
                </div>
                <Link
                  href={TEMP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#005B70] hover:bg-[#004555] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Store
                </Link>
              </div>
            )}

            {/* Print-on-Demand Options */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Print-on-demand platforms we&apos;re evaluating
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {podPlatforms.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all hover:border-gray-300 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="font-bold text-gray-800 text-sm group-hover:text-[#005B70] transition-colors">
                        {p.name}
                      </span>
                      <span
                        className="shrink-0 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white"
                        style={{ backgroundColor: p.badgeColor }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.note}</p>
                    <div className="mt-2 flex items-center gap-1 text-[#005B70] text-xs font-semibold">
                      <ExternalLink className="w-3 h-3" />
                      Visit {p.name}
                    </div>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 text-center">
                💡 For t-shirts, your local print shop may still be the best option for quality control.
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Bottom — eases into Foster dark-navy */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent via-[#004a5c]/25 to-[#031b24]/65 z-5" />
    </section>
  );
};

export default Merchandise;
