import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-900/90 backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Animated Spinner Ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-[#FFD700] shadow-lg shadow-[#FFD700]/20"></div>
        
        {/* Loading Text */}
        <p className="mt-4 text-lg font-bold text-[#FFD700] tracking-widest animate-pulse">
          LOADING...
        </p>
      </div>
    </div>
  );
};

export default Loading;