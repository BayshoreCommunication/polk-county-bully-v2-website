import mugMockup from "@/public/assets/home/12mug_mockup 1.svg";
import maskGroup from "@/public/assets/home/Mask group.svg";
import bullyBottle from "@/public/assets/home/bully_bottle 1.svg";
import bullyCap from "@/public/assets/home/bully_cap 1.svg";
import bullyCase from "@/public/assets/home/bully_case 1.svg";
import bullyTshirt from "@/public/assets/home/bully_tshirt_1 1.svg";
import backpackGirl from "@/public/assets/home/young-girl-with-gray-student-backpack 2.svg";
import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

// Define product data
const products = [
  {
    id: 1,
    src: mugMockup,
    alt: "Bully Project T-Shirt Black",
  },
  {
    id: 2,
    src: bullyBottle,
    alt: "Bully Project Coffee Mug",
  },
  {
    id: 3,
    src: bullyCase,
    alt: "Bully Project Phone Case",
  },
  {
    id: 4,
    src: bullyTshirt,
    alt: "Bully Project Backpack",
  },
  {
    id: 5,
    src: maskGroup,
    alt: "Bully Project Water Bottle",
  },
  {
    id: 6,
    src: bullyCap,
    alt: "Bully Project T-Shirt Grey",
  },
  {
    id: 7,
    src: backpackGirl,
    alt: "Bully Project Cap",
  },
];

const Merchandise = () => {
  // Matching the Gold color from previous sections
  const goldColor = "#FFD700";

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Top gradient blur transition */}
      <div className="absolute top-0 left-0 right-0 h-40 md:h-48  backdrop-blur-md z-5" />

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* --- Heading --- */}
        <ScrollMotion>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide"
              // Text stroke/shadow effect to match the image style
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
        {/* We use Flexbox with wrap and center alignment to achieve the 
            "4 items top, 3 items bottom centered" look naturally. 
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {products.map((product, index) => (
            <ScrollMotion
              key={product.id}
              delay={index * 0.05} // Stagger effect
              className="relative group w-[45%] md:w-[22%] aspect-square rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Optional: Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </ScrollMotion>
          ))}
        </div>

        {/* --- CTA Button --- */}
        <ScrollMotion delay={0.2}>
          <div className="flex justify-center">
            <Button
              href="/shop"
              label={
                <>
                  <PawPrint className="w-5 h-5 mr-2 fill-current" />
                  Buy Our Merchandise
                </>
              }
              // Custom styles to match the pink button in the image
              className="bg-[#F424B2]! hover:bg-[#d91a9b]! shadow-[0_6px_0_#9e1773] hover:shadow-[0_4px_0_#9e1773] hover:translate-y-1 text-lg md:text-xl px-12 py-4 rounded-full"
            />
          </div>
        </ScrollMotion>
      </div>

      {/* Bottom gradient blur transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-48  backdrop-blur-md z-5" />
    </section>
  );
};

export default Merchandise;
