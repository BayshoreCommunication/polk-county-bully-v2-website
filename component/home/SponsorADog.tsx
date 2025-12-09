import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion"; // Assuming you have this from previous steps
import Button from "../shared/Button";

// Helper component for the circular dog images
const DogCircle = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div
    className={`relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-[6px] border-white shadow-xl shrink-0 ${className}`}
  >
    <Image src={src} alt={alt} fill className="object-cover" />
  </div>
);

const SponsorADog = () => {
  const sectionBgColor = "#009AD9";
  const goldColor = "#FFD700";

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48 bg-linear-to-b from-[#003C5F]/70 via-[#003C5F]/35 to-transparent backdrop-blur-md z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* Wrapper to control max-width */}
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-16">
          {/* --- TOP ROW (3 DOGS) --- */}
          {/* We use a grid to perfectly space the 3 top dogs */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-8 md:gap-4 relative z-10">
            {/* Top Left */}
            <ScrollMotion delay={0.1} className="md:translate-y-8">
              {/* Added translate-y-8 to push side dogs down slightly, creating an ARCH */}
              <DogCircle src="/assets/dog/dog1.jpg" alt="Sponsor dog 1" />
            </ScrollMotion>

            {/* Top Center */}
            <ScrollMotion delay={0.2} className="md:-translate-y-4">
              {/* Negative translate pulls the middle dog UP, enhancing the arch effect */}
              <DogCircle src="/assets/dog/dog2.jpg" alt="Sponsor dog 2" />
            </ScrollMotion>

            {/* Top Right */}
            <ScrollMotion delay={0.3} className="md:translate-y-8">
              <DogCircle src="/assets/dog/dog3.jpg" alt="Sponsor dog 3" />
            </ScrollMotion>
          </div>

          {/* --- BOTTOM SECTION (DOG - TEXT - DOG) --- */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-4 relative z-0">
            {/* Left Dog (Bottom Row) */}
            <ScrollMotion delay={0.4} className="order-2 md:order-1">
              <DogCircle src="/assets/dog/dog4.jpg" alt="Sponsor dog 4" />
            </ScrollMotion>

            {/* --- Central Text & Button --- */}
            <div className="order-1 md:order-2 text-center max-w-lg mx-auto z-20">
              <ScrollMotion delay={0.5}>
                <h2
                  className="text-4xl md:text-5xl font-extrabold mb-6 font-serif tracking-wide drop-shadow-md"
                  style={{ color: goldColor }}
                >
                  Sponsor a Dog
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8 font-medium drop-shadow-md">
                  While they wait for their forever home, you can be their
                  guardian angel. Your sponsorship covers food, vet visits, and
                  care for a dog who's still dreaming of a family.
                </p>
                <div className="flex justify-center">
                  <Button
                    href="/sponsor"
                    label={
                      <>
                        <PawPrint className="w-6 h-6 mr-2 fill-current" />
                        Click Here
                      </>
                    }
                    className="bg-[#F424B2]! hover:bg-[#d91a9b]! shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-xl px-12 py-3"
                  />
                </div>
              </ScrollMotion>
            </div>

            {/* Right Dog (Bottom Row) */}
            <ScrollMotion delay={0.6} className="order-3 md:order-3">
              <DogCircle src="/assets/dog/dog5.jpg" alt="Sponsor dog 5" />
            </ScrollMotion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorADog;
