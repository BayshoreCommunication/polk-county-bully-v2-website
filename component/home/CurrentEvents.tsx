import { PawPrint } from "lucide-react";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

const CurrentEvents = () => {
  // Brand colors from the design
  const goldColor = "#FFD700";
  const sectionBgColor = "#1F7A8C"; // Matching the teal background from the image

  return (
    <section
      className="relative py-20"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 backdrop-blur-sm z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <ScrollMotion>
          <div className="max-w-3xl mx-auto text-center">
            {/* --- Heading --- */}
            <h2
              className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide mb-6"
              style={{
                color: goldColor,
                // The distinctive blue text shadow from the design
                textShadow: "3px 3px 0px #0057B7",
              }}
            >
              Current Events
            </h2>

            {/* --- Paragraph Text --- */}
            <p className="text-white text-lg md:text-xl leading-relaxed mb-10 drop-shadow-md">
              Fostering saves lives. One open home means one more dog pulled
              from danger. We take care of the supplies; you give them love,
              patience, and hope.
            </p>

            {/* --- CTA Button --- */}
            <div className="flex justify-center">
              <Button
                href="/events"
                label={
                  <>
                    <PawPrint className="w-6 h-6 mr-2 fill-current" />
                    See Our Current Event
                  </>
                }
                // Custom classes to match the specific pink color and 3D shadow effect
                className="bg-[#F424B2]! hover:bg-[#d91a9b]! shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-xl px-12 py-3 rounded-full"
              />
            </div>
          </div>
        </ScrollMotion>
      </div>

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48 backdrop-blur-sm z-5" />
    </section>
  );
};

export default CurrentEvents;
