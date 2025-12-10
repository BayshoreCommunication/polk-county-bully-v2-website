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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
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
      {/* --- Background Image Implementation --- */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg"
          alt="Background Texture"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.6]"
        />
        {/* Gradient overlays matching previous component */}
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/80 via-teal-800/90 to-amber-800/50 backdrop-blur-md opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-800/25 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* --- 1. Text Content --- */}
        <ScrollMotion className="max-w-5xl mx-auto text-center space-y-8 mb-16">
          <p className="text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
            Our local shelter was deemed per 2022 statistics as the #1 Kill
            shelter in the state of Florida. We are working closely with Animal
            Control to change these statistics, ultimately PCBP is working
            towards a NoKill shelter in Polk County. Currently, dogs deemed Pit
            Bull are rescue only.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-100 font-medium">
            Through education and practical care, we&apos;re changing the stigma
            that surrounds pit bulls and providing care. Spay and neuter is a
            huge part of stemming the flow of dogs that come in from the county
            to the shelter.
          </p>
        </ScrollMotion>

        {/* --- 2. Stats Section (Pink Background) --- */}
        <ScrollMotion delay={0.2}>
          <div
            id="counter-section"
            ref={sectionRef}
            // Updated: Solid Pink Gradient Background to match image
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center bg-gradient-to-r from-fuchsia-500 to-pink-500 py-12 px-8 max-w-4xl w-full mx-auto rounded-t-3xl sm:rounded-3xl shadow-xl relative z-0 transform translate-y-4"
          >
            {/* Counter 1 */}
            <div className="flex flex-col items-center justify-center text-white">
              <h3 className="text-4xl md:text-6xl font-serif font-medium mb-2 drop-shadow-sm">
                {inView ? <SimpleCountUp end={26} duration={3} /> : "0"}k
                <sup className="text-2xl md:text-4xl">+</sup>
              </h3>
              <p className="text-white/90 text-lg font-medium tracking-wide">
                Dog Adopted
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-16 bg-white/40 mx-auto self-center"></div>

            {/* Counter 2 */}
            <div className="flex flex-col items-center justify-center text-white">
              <h3 className="text-4xl md:text-6xl font-serif font-medium mb-2 drop-shadow-sm">
                {inView ? <SimpleCountUp end={15} duration={3} /> : "0"}k
                <sup className="text-2xl md:text-4xl">+</sup>
              </h3>
              <p className="text-white/90 text-lg font-medium tracking-wide">
                Shelters & Recues
              </p>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-[1px] h-16 bg-white/40 mx-auto self-center"></div>

            {/* Counter 3 */}
            <div className="flex flex-col items-center justify-center text-white">
              <h3 className="text-4xl md:text-6xl font-serif font-medium mb-2 drop-shadow-sm">
                {inView ? <SimpleCountUp end={18} duration={3} /> : "0"}
                <sup className="text-2xl md:text-4xl">+</sup>
              </h3>
              <p className="text-white/90 text-lg font-medium tracking-wide">
                Years of Impact
              </p>
            </div>
          </div>
        </ScrollMotion>

        {/* --- 3. Video Section --- */}
        <ScrollMotion
          delay={0.3}
          // Added negative margin to pull it slightly up towards the stats if desired,
          // or kept separate. Based on image, it sits prominently below.
          className="flex justify-center items-center -mt-8 sm:-mt-4 relative z-10"
        >
          {/* Updated Border: Thick white solid border */}
          <div className="relative w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-black group">
            {!isVideoPlaying ? (
              <>
                <Image
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="YouTube Video Thumbnail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center outline-none group"
                  aria-label="Play video"
                >
                  <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
                    <div className="relative bg-cyan-500/90 backdrop-blur-sm p-5 md:p-7 rounded-full shadow-lg border-2 border-white/50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="w-full h-full rounded-xl"
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
