"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollMotion from "../motion/ScrollMotion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const COMMON_AVATAR = "/assets/home/avatar.png";

type TestimonialAvatarProps = {
  src?: string;
  name: string;
};

const testimonials = [
  {
    id: 1,
    name: "Charlie Smith",
    image: COMMON_AVATAR,
    text: "Adopting through Bully Project Rescue was seamless and heartwarming. Our new pup feels like part of the family already!",
  },
  {
    id: 2,
    name: "Dany Monson",
    image: COMMON_AVATAR,
    text: "The team was so supportive and caring. They matched us with the perfect dog, and the entire process felt personal and safe.",
  },
  {
    id: 3,
    name: "Sacha Dubois",
    image: COMMON_AVATAR,
    text: "Fostering with Bully Project Rescue was a life-changing experience.",
  },
  {
    id: 4,
    name: "Todd VanMeter",
    image: COMMON_AVATAR,
    text: "Please come and donate your time walking the dogs or taking them out for a doggy day out. These dogs sound way too much time cooped up. We walked nd played with about 10 dogs. Towels bedding food donations are always appreciated.",
  },
  {
    id: 5,
    name: "Juan Yglesias",
    image: COMMON_AVATAR,
    text: "Very disappointed. Showed up at 6:08 this evening. It says they are open until 7pm. They wouldn't even let us in to look at the animals. She said there was a 3 day application process. I'm ok with that but you won't even let me in so I can take a look at at some of the dogs you have? How many dogs missed out on adoption due to the service I just received? That's a shame.",
  },
  {
    id: 5,
    name: "Trish Carter",
    image: COMMON_AVATAR,
    text: "I never knew anything about the Bully Peoject until I saw their facebook posts...I found my little Miro and adopted him from the Bully Project two weeks ago. The ladies working there were awesome and seemed to really care about the 4 legged little babies. Please help them. Donate and help this team keep helping the babies!!!",
  },
  {
    id: 5,
    name: "Fred Ramone",
    image: COMMON_AVATAR,
    text: "They are the best, and work so dang hard for these fur babies!!! They save beautiful animals that were failed by their human. How can you not love faces like him.",
  },
];

const Testimonials = () => {
  const goldColor = "#FFD700";

  const TestimonialAvatar = ({ src, name }: TestimonialAvatarProps) => {
    const [hasError, setHasError] = useState(false);

    return (
      <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 bg-gray-100">
        {!hasError && src ? (
          <Image
            src={src}
            alt={name}
            fill
            className="object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#FFD700] text-black">
            <span className="text-4xl font-extrabold uppercase font-serif">
              {name.charAt(0)}
            </span>
          </div>
        )}
      </div>
    );
  };

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
              color: goldColor,
              textShadow: "3px 3px 0px #0057B7",
            }}
          >
            Our Client Testimonial
          </h2>
          <p className="text-white text-lg md:text-xl font-medium tracking-wide">
            Hear from families who&apos;ve found their perfect companions.
          </p>
        </ScrollMotion>

        {/* Swiper Slider (Same UI Cards) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <ScrollMotion delay={index * 0.2} className="h-full">
                <div className="bg-[#FFFFFF]/90 backdrop-blur-md rounded-[2.5rem] p-8 md:p-10 text-center shadow-2xl h-full flex flex-col items-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/10">
                  <TestimonialAvatar src={item.image} name={item.name} />

                  <h3 className="text-2xl font-extrabold text-black mb-4 z-10">
                    {item.name}
                  </h3>

                  <p className="text-gray-800 leading-relaxed font-medium z-10">
                    {item.text}
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
