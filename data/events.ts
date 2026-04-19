/**
 * EVENTS MANAGEMENT — edit this file to add, remove, or update banner events.
 *
 * Set `isActive: true` to show an event in the top ticker banner.
 * Set `isActive: false` to hide it without deleting the entry.
 *
 * ticketUrl: link to Givebutter / Giveffect ticket page, or any event URL.
 * date: shown in the ticker (e.g. "Saturdays, 11 AM" or "June 14, 2026")
 */

export type BannerEvent = {
  id: number;
  title: string;
  date: string;
  ticketUrl: string;
  isActive: boolean;
};

export const bannerEvents: BannerEvent[] = [
  {
    id: 1,
    title: "Meet Our Bullies",
    date: "Saturdays, 11 AM",
    ticketUrl: "https://givebutter.com/polk-county-bully",
    isActive: true,
  },
  {
    id: 2,
    title: "Caregiver Coffee Chat",
    date: "Wednesdays, 6 PM",
    ticketUrl: "https://givebutter.com/polk-county-bully",
    isActive: true,
  },
  {
    id: 3,
    title: "Rescue Roundtable",
    date: "Thursdays, 7 PM",
    ticketUrl: "https://givebutter.com/polk-county-bully",
    isActive: true,
  },
  {
    id: 4,
    title: "Walk, Wag & Hang",
    date: "Sundays, 10 AM",
    ticketUrl: "https://givebutter.com/polk-county-bully",
    isActive: true,
  },
];
