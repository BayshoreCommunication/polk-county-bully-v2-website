"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Testimonial = {
  id: number;
  name: string;
  image: string;
  stars: number;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Charlie Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "Adopting through Bully Project Rescue was seamless and heartwarming. Our new pup feels like part of the family already!",
  },
  {
    id: 2,
    name: "Dany Monson",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    stars: 5,
    text: "The team was so supportive and caring. They matched us with the perfect dog, and the entire process felt personal and safe.",
  },
  {
    id: 3,
    name: "Sacha Dubois",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "Fostering with Bully Project Rescue was a life-changing experience. These dogs have so much love to give — and so does this team.",
  },
  {
    id: 4,
    name: "Todd VanMeter",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    stars: 5,
    text: "Please come and donate your time walking the dogs or taking them out for a doggy day out. These dogs deserve so much more time outside. Towels, bedding, and food donations are always appreciated.",
  },
  {
    id: 5,
    name: "Trish Carter",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "I never knew anything about the Bully Project until I saw their Facebook posts. I found my little Miro and adopted him two weeks ago. The ladies working there were awesome and seemed to really care about the babies. Please help them — donate and keep these rescues going!",
  },
  {
    id: 6,
    name: "Fred Ramone",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    stars: 5,
    text: "They are the best, and work so dang hard for these fur babies! They save beautiful animals that were failed by their humans. How can you not love faces like these.",
  },
  {
    id: 7,
    name: "Juan Yglesias",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    stars: 3,
    text: "Showed up at 6:08 PM — the sign says open until 7 PM. They wouldn't let us in to look at the animals and mentioned a 3-day application process. I understand the process, but it would have been great to at least see the dogs first. Hope to try again soon.",
  },
];

const StarRating = ({ stars }: { stars: number }) => (
  <div className="flex items-center justify-center gap-0.5 mb-4">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < stars ? "text-[#FFD700]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden border-4 border-[#FFD700] shadow-lg bg-gray-100">
      {!hasError ? (
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#FFD700] text-black">
          <span className="text-3xl font-extrabold uppercase font-serif">
            {name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/testimonial-bg.svg"
          alt="bg"
          fill
          className="object-cover blur-[1px] brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-900/50 via-teal-800/50 to-amber-800/50 backdrop-blur-md opacity-60" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        {/* Header */}
        <ScrollMotion className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-extrabold font-serif tracking-wide mb-4"
            style={{
              color: "#FFD700",
              textShadow: "3px 3px 0px #0057B7",
            }}
          >
            What Our Community Says
          </h2>
          <p className="text-white text-lg md:text-xl font-medium tracking-wide">
            Hear from families who&apos;ve found their perfect companions.
          </p>
        </ScrollMotion>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id} className="h-auto pb-2">
              <ScrollMotion delay={index * 0.1} className="h-full">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-7 text-center shadow-xl h-full flex flex-col items-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 border border-white/20">
                  {/* Subtle top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#F424B2] to-[#FFD700]" />

                  <TestimonialAvatar src={item.image} name={item.name} />

                  <h3 className="text-lg font-extrabold text-gray-900 mb-1">
                    {item.name}
                  </h3>

                  <StarRating stars={item.stars} />

                  <p className="text-gray-600 leading-relaxed text-sm flex-1">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
              </ScrollMotion>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
