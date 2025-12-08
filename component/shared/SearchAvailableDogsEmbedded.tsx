"use client";

export default function SearchAvailableDogsEmbedded() {
  return (
    <section className="relative w-full lg:pt-[60px] pb-4 md:pb-8 overflow-hidden min-h-[90vh]">
      {/* Optional overlay for text visibility */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}
      <div className="relative container mx-auto px-6 md:px-12 lg:px-16">
        {" "}
        {/* Reduced mobile padding */}
        <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
          {" "}
          {/* Smaller on mobile */}
          <iframe
            loading="lazy"
            src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            className="
              w-full
              rounded-xl md:rounded-2xl
              border-none
              bg-white
            "
            style={{
              height: "90vh", // Smaller on mobile
              minHeight: 400, // Smaller min-height on mobile
            }}
          />
        </div>
      </div>
    </section>
  );
}
