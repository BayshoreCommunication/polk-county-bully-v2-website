"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";

// --- Internal Helper: Simple CountUp Component ---
interface SimpleCountUpProps {
  end: number;
  duration?: number;
  separator?: string;
}

const SimpleCountUp = ({
  end,
  duration = 2,
  separator = ",",
}: SimpleCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);

      setCount(Math.floor(end * percentage));

      if (progress < duration * 1000) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  // Basic formatter for comma separation
  return (
    <span>{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)}</span>
  );
};

// --- Main Component ---
const AboutVideo = () => {
  const [inView, setInView] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoId = "BsknQQCMqyA";
  const sectionRef = useRef(null);

  // Brand colors matching your design system
  const goldColor = "#FFD700";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* --- Background Image Implementation (Same as PolkcountryBullys) --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg"
          alt="Background Texture"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.6]"
          quality={90}
        />
        {/* Multi-colored gradient blur overlay */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/80 via-teal-800/90 to-amber-800/50 backdrop-blur-md opacity-60" />
        {/* Additional radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* --- 1. Text Content --- */}
        <ScrollMotion className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 font-medium">
            Our local shelter was deemed per 2022 statistics as the #1 Kill
            shelter in the state of Florida. We are working closely with Animal
            Control to change these statistics, ultimately PBCP is working
            towards a NoKill shelter in Polk County. Currently, dogs deemed Pit
            Bull are rescue only.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100/90 font-medium">
            Through education and practical care, we&apos;re changing the stigma
            that surrounds pit bulls and providing care. Spay and neuter is a
            huge part of stemming the flow of dogs that come in from the county
            to the shelter.
          </p>
        </ScrollMotion>

        {/* --- 2. Counter Section (Glassmorphism Style) --- */}
        <ScrollMotion delay={0.2}>
          <div
            id="counter-section"
            ref={sectionRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-white/10 backdrop-blur-md border border-white/20 py-10 px-8 max-w-5xl w-full mx-auto rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Decorative shine effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

            {/* Counter 1 */}
            <div className="flex flex-col items-center justify-center">
              <h3
                className="text-4xl md:text-6xl font-extrabold font-serif mb-2"
                style={{
                  color: goldColor,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                {inView ? <SimpleCountUp end={26} duration={3} /> : "0"}
                K+
              </h3>
              <p className="text-gray-200 text-lg font-medium tracking-wide">
                Dogs Adopted
              </p>
            </div>

            {/* Divider (Hidden on mobile) */}
            <div className="hidden sm:block w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-auto self-center"></div>

            {/* Counter 2 */}
            <div className="flex flex-col items-center justify-center">
              <h3
                className="text-4xl md:text-6xl font-extrabold font-serif mb-2"
                style={{
                  color: goldColor,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                {inView ? <SimpleCountUp end={15} duration={3} /> : "0"}
                K+
              </h3>
              <p className="text-gray-200 text-lg font-medium tracking-wide">
                Shelters & Rescues
              </p>
            </div>

            {/* Divider (Hidden on mobile) */}
            <div className="hidden sm:block w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-auto self-center"></div>

            {/* Counter 3 */}
            <div className="flex flex-col items-center justify-center">
              <h3
                className="text-4xl md:text-6xl font-extrabold font-serif mb-2"
                style={{
                  color: goldColor,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                }}
              >
                {inView ? <SimpleCountUp end={18} duration={3} /> : "0"}+
              </h3>
              <p className="text-gray-200 text-lg font-medium tracking-wide">
                Years of Impact
              </p>
            </div>
          </div>
        </ScrollMotion>

        {/* --- 3. Video Section --- */}
        <ScrollMotion
          delay={0.3}
          className="flex justify-center items-center mt-16"
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group bg-black">
            {!isVideoPlaying ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="YouTube Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center outline-none group"
                  aria-label="Play video"
                >
                  {/* Play Button with Pulse Effect */}
                  <div className="relative">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-30"></span>
                    <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 md:w-10 md:h-10 text-teal-900 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
};

export default AboutVideo;
