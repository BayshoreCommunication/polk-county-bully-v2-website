import { PawPrint } from "lucide-react";
import Image from "next/image";
import ScrollMotion from "../motion/ScrollMotion";
import Button from "../shared/Button";

// Define product data
const products = [
  {
    id: 1,
    src: "/assets/home/12mug_mockup 1.svg",
    alt: "Bully Project T-Shirt Black",
  },
  {
    id: 2,
    src: "/assets/home/bully_bottle 1.svg",
    alt: "Bully Project Coffee Mug",
  },
  {
    id: 3,
    src: "/assets/home/bully_case 1.svg",
    alt: "Bully Project Phone Case",
  },
  {
    id: 4,
    src: "/assets/home/bully_tshirt_1 1.svg",
    alt: "Bully Project Backpack",
  },
  {
    id: 5,
    src: "/assets/home/Mask group.svg",
    alt: "Bully Project Water Bottle",
  },
  {
    id: 6,
    src: "/assets/home/bully_cap 1.svg",
    alt: "Bully Project T-Shirt Grey",
  },
  {
    id: 7,
    src: "/assets/home/young-girl-with-gray-student-backpack 2.svg",
    alt: "Bully Project Cap",
  },
];

const Merchandise = () => {
  // Matching the Gold color from previous sections
  const goldColor = "#FFD700";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
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
              delay={index * 0.1} // Stagger effect
              className="relative group w-[45%] md:w-[22%] aspect-square rounded-4xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Optional: Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </ScrollMotion>
          ))}
        </div>

        {/* --- CTA Button --- */}
        <ScrollMotion delay={0.4}>
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
    </section>
  );
};

export default Merchandise;
