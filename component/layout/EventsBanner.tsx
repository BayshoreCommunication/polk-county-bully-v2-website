"use client";

import Link from "next/link";
import { bannerEvents, type BannerEvent } from "@/data/events";

const activeEvents = bannerEvents.filter((e) => e.isActive);

type EventStripItem = { key: string; event: BannerEvent };
type DefaultStripItem = { key: string; idx: number };

const TickerItem = ({
  title,
  date,
  ticketUrl,
}: {
  title: string;
  date: string;
  ticketUrl: string;
}) => (
  <span className="inline-flex items-center gap-3 px-8 select-none">
    <span className="text-[#FFD700] font-bold text-base">🐾</span>
    <span className="font-semibold text-white text-sm tracking-wide">{title}</span>
    <span className="text-white/50 text-xs">·</span>
    <span className="text-white/75 text-sm">{date}</span>
    <Link
      href={ticketUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-1 inline-flex items-center gap-1 rounded-full bg-[#F424B2] px-3 py-0.5 text-xs font-bold text-white hover:bg-[#d91a9b] transition-colors shrink-0"
      onClick={(e) => e.stopPropagation()}
    >
      Get Tickets →
    </Link>
    <span className="ml-6 text-white/20 text-lg font-thin">|</span>
  </span>
);

const DefaultItem = ({ idx }: { idx: number }) => (
  <span className="inline-flex items-center gap-3 px-8 select-none">
    <span className="text-[#FFD700] font-bold text-base">🐾</span>
    <span className="font-semibold text-white text-sm tracking-wide">
      {idx % 2 === 0
        ? "Join us for our events"
        : "Adopt · Foster · Volunteer · Donate"}
    </span>
    <span className="ml-6 text-white/20 text-lg font-thin">|</span>
  </span>
);

// 3 copies per strip × 2 strips fills any screen (~2100px/strip at 60px/s ≈ 35s)
const REPEAT = 3;

const buildEventStrip = (): EventStripItem[] =>
  Array.from({ length: REPEAT }, (_, copyIdx) =>
    activeEvents.map((event, itemIdx) => ({
      key: `${copyIdx}-${event.id}-${itemIdx}`,
      event,
    }))
  ).flat();

const buildDefaultStrip = (): DefaultStripItem[] =>
  Array.from({ length: REPEAT }, (_, copyIdx) =>
    Array.from({ length: 4 }, (__, itemIdx) => ({
      key: `${copyIdx}-default-${itemIdx}`,
      idx: itemIdx,
    }))
  ).flat();

const EventsBanner = () => {
  const hasEvents = activeEvents.length > 0;

  const eventStrip = hasEvents ? buildEventStrip() : null;
  const defaultStrip = hasEvents ? null : buildDefaultStrip();

  const renderStrip = (prefix: string) =>
    hasEvents
      ? eventStrip!.map(({ key, event }) => (
          <TickerItem
            key={`${prefix}-${key}`}
            title={event.title}
            date={event.date}
            ticketUrl={event.ticketUrl}
          />
        ))
      : defaultStrip!.map(({ key, idx }) => (
          <DefaultItem key={`${prefix}-${key}`} idx={idx} />
        ));

  return (
    <div
      className="w-full h-10 overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(90deg, #031b24 0%, #0a2d3a 50%, #031b24 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Two identical strips — animate -50% for a gapless infinite loop */}
      <div className="events-ticker" style={{ willChange: "transform" }}>
        <span className="inline-flex items-center whitespace-nowrap">{renderStrip("A")}</span>
        <span className="inline-flex items-center whitespace-nowrap">{renderStrip("B")}</span>
      </div>
    </div>
  );
};

export default EventsBanner;
