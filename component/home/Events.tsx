import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollMotion from "../motion/ScrollMotion";

type EventCard = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  cardClassName: string;
  buttonClassName: string;
  url: string;
};

const events: EventCard[] = [
  {
    id: 1,
    eyebrow: "The Masquerade Edition",
    title: "Pitties & Pearls - The Masquerade Edition",
    description:
      "A fundraiser for plok country bully project with a night of fun, food, and philanthropy to support our rescue efforts.",
    date: "Jun 13, 2026 6:00pm - 10:00pm ET",
    location: "Lake Alfred, FL 33850 USA",
    image: "/assets/dog/evnt.webp",
    cardClassName:
      "bg-[#DDF3E7] border-[#BEE3CE] shadow-[0_18px_50px_rgba(48,117,78,0.14)]",
    buttonClassName:
      "bg-[#17674D] hover:bg-[#12533D] text-white shadow-[0_8px_18px_rgba(23,103,77,0.22)]",
    url: "https://app.giveffect.com/campaigns/45166-pitties-pearls-the-masquerade-edition",
  },
  {
    id: 2,
    eyebrow: "Golf Tournament",
    title: "3rd Annual Putts Fore Mutts Online Auction",
    description:
      "Bid in our 3rd Annual Putts Fore Mutts Online Auction and help rescue dogs find a second chance.",
    date: "Apr 24, 2026",
    location: "Virtual Meetup",
    image: "/assets/dog/Screenshot_2026-04-22_171940.webp",
    cardClassName:
      "bg-[#DDF3E7] border-[#BEE3CE] shadow-[0_18px_50px_rgba(48,117,78,0.14)]",
    buttonClassName:
      "bg-[#17674D] hover:bg-[#12533D] text-white shadow-[0_8px_18px_rgba(23,103,77,0.22)]",
    url: "https://givebutter.com/c/2nd-annual-putts-fore-mutts-online-auction-copy-rtarb6/auction",
  },
  {
    id: 3,
    eyebrow: "Adoption Day",
    title: "Meet Our Bullies",
    description:
      "Spend the afternoon meeting rescue dogs, hearing their stories, and finding the right match for your family.",
    date: "Saturday, 11 AM",
    location: "Lakeland Adoption Pop-Up",
    image: "/assets/dog/WhatsApp Image 2026-04-19 at 4.35.22 PM.jpeg",
    cardClassName:
      "bg-[#EEE8FF] border-[#DCCEFF] shadow-[0_18px_50px_rgba(119,91,200,0.16)]",
    buttonClassName:
      "bg-[#3A2E8A] hover:bg-[#2E246E] text-white shadow-[0_8px_18px_rgba(58,46,138,0.28)]",
    url: "/contact",
  },
  // {
  //   id: 3,
  //   eyebrow: "Foster Meet-Up",
  //   title: "Caregiver Coffee Chat",
  //   description:
  //     "A casual orientation for future fosters to ask questions, meet the team, and learn what support we provide.",
  //   date: "Wednesday, 6 PM",
  //   location: "Rescue Office Lounge",
  //   image: "/assets/home/foster-left-image.svg",
  //   cardClassName:
  //     "bg-[#F5F7FB] border-[#E2E8F3] shadow-[0_18px_50px_rgba(94,112,143,0.12)]",
  //   buttonClassName:
  //     "bg-[#111111] hover:bg-[#000000] text-white shadow-[0_8px_18px_rgba(17,17,17,0.2)]",
  //   url: "/contact",
  // },
  {
    id: 4,
    eyebrow: "Community Night",
    title: "Rescue Roundtable",
    description:
      "Join an open discussion on adoption, bully-breed advocacy, and how the community can help more dogs leave shelter life.",
    date: "Thursday, 7 PM",
    location: "Downtown Partner Cafe",
    image: "/assets/dog/dog7.jpg",
    cardClassName:
      "bg-[#F6EBD8] border-[#EACD9E] shadow-[0_18px_50px_rgba(127,86,32,0.14)]",
    buttonClassName:
      "bg-[#7A4A16] hover:bg-[#603910] text-white shadow-[0_8px_18px_rgba(122,74,22,0.22)]",
    url: "/contact",
  },
  // {
  //   id: 4,
  //   eyebrow: "Volunteer Social",
  //   title: "Walk, Wag & Hang",
  //   description:
  //     "A relaxed volunteer hangout with dog walks, photo moments, and easy ways to help even if you are new to the rescue.",
  //   date: "Sunday, 10 AM",
  //   location: "Polk County Trail Meetup",
  //   image: "/assets/dog/dog6.jpg",
  //   cardClassName:
  //     "bg-[#DDF3E7] border-[#BEE3CE] shadow-[0_18px_50px_rgba(48,117,78,0.14)]",
  //   buttonClassName:
  //     "bg-[#17674D] hover:bg-[#12533D] text-white shadow-[0_8px_18px_rgba(23,103,77,0.22)]",
  //   url: "/contact",
  // },
];

const Events = () => {
  const goldColor = "#FFD700";

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/home/adoption-bg.svg"
          alt="Textured event background"
          fill
          className="object-cover object-center blur-[1px] brightness-[0.65]"
          quality={90}
        />
        <div className="absolute inset-0 bg-linear-to-bl from-cyan-950/50 via-teal-900/55 to-amber-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.12),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,36,178,0.10),transparent_28%)]" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#031b24]/60 via-[#031b24]/20 to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#031b24]/55 via-[#031b24]/15 to-transparent z-0" />
      <div className="flex items-center mb-8 text-center mx-auto w-full max-w-7xl justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#FFD700]">
          See Our Events
        </h1>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 ">
          {events.map((event, index) => (
            <ScrollMotion
              key={event.id}
              delay={index * 0.08}
              className="h-full"
            >
              <article
                className={`bg-white/30 backdrop-blur-xl group flex h-full flex-col rounded-[2rem] border border-white/20 p-4 transition-transform duration-300 hover:-translate-y-2 hover:bg-white/20 ${event.cardClassName}`}
              >
                <div className="relative mb-4 aspect-[16/11] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <p className="mb-1 text-sm text-[#FFD700]">{event.eyebrow}</p>
                <h3 className="mb-3 text-[1.9rem] text-white leading-none text-[#111111] font-serif">
                  {event.title}
                </h3>
                <p className="mb-5 flex-1 text-[15px] leading-6 text-white/75">
                  {event.description}
                </p>

                <div className="mb-5 space-y-2 text-sm text-black/70">
                  <div className="flex items-center gap-2 text-white/75">
                    <CalendarDays className="h-4 w-4 " />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/75">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href={event.url}
                  className={`inline-flex w-fit items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition-colors duration-300 ${event.buttonClassName}`}
                >
                  View details
                </Link>
              </article>
            </ScrollMotion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
