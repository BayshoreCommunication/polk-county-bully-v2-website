"use client";

import { motion } from "framer-motion";
import { PawPrint } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    // Redirect after 3 seconds
    const redirectTimeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#005B70]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#FFD700]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Icon/Text */}
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-9xl font-black text-[#FFD700] tracking-tighter drop-shadow-2xl">
              4
            </h1>
            <div className="bg-white/10 p-4 rounded-full mx-2 backdrop-blur-sm border border-white/10 animate-bounce">
              <PawPrint className="w-16 h-16 text-[#FFD700]" />
            </div>
            <h1 className="text-9xl font-black text-[#FFD700] tracking-tighter drop-shadow-2xl">
              4
            </h1>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
            Page Not Found
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Oops! The page you are looking for seems to have gone for a walk.
            Don&apos;t worry, we&apos;re guiding you back home.
          </p>

          {/* Countdown & Redirect Message */}
          <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10 inline-block backdrop-blur-sm">
            <p className="text-[#FFD700] font-medium text-lg">
              Redirecting in{" "}
              <span className="font-bold text-2xl mx-1 text-white">
                {countdown}
              </span>{" "}
              seconds...
            </p>
          </div>

          {/* Manual Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#003845] bg-[#FFD700] rounded-full hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20"
            >
              <PawPrint className="w-5 h-5 mr-2" />
              Go Home Now
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
