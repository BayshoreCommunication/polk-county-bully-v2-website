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
  // {
  //   id: 1,
  //   title: "Pitties & Pearls - The Masquerade Edition",
  //   date: "Jun 13, 2026",
  //   ticketUrl:
  //     "https://app.giveffect.com/campaigns/45166-pitties-pearls-the-masquerade-edition",
  //   isActive: true,
  // },
  {
    id: 2,
    title: "3rd Annual Putts Fore Mutts Online Auction",
    date: "Apr 24, 2026",
    ticketUrl:
      "https://givebutter.com/c/2nd-annual-putts-fore-mutts-online-auction-copy-rtarb6/auction",
    isActive: true,
  },
  {
    id: 3,
    title: "Bowling for Bullies",
    date: "May 17, 2026",
    ticketUrl:
      "https://app.giveffect.com/campaigns/45003-bowling-for-bullies-may-2026",
    isActive: true,
  },
  // {
  //   id: 3,
  //   title: "Caregiver Coffee Chat",
  //   date: "Wednesdays, 6 PM",
  //   ticketUrl: "https://givebutter.com/polk-county-bully",
  //   isActive: true,
  // },
  {
    id: 4,
    title: "Rescue Roundtable",
    date: "Thursdays, 7 PM",
    ticketUrl: "https://givebutter.com/polk-county-bully",
    isActive: true,
  },
  {
    id: 5,
    title: "Bingo For The Bullies",
    date: "Jul 8, 2023",
    ticketUrl:
      "https://www.facebook.com/events/824219379270193/",
    isActive: true,
  },
  {
    id: 6,
    title: "Rock for Paws 2026 Benefiting the Polk County Bully Project",
    date: "Sep 26, 2026",
    ticketUrl:
      "https://www.facebook.com/events/1278974630796407/",
    isActive: true,
  },
  // {
  //   id: 4,
  //   title: "Walk, Wag & Hang",
  //   date: "Sundays, 10 AM",
  //   ticketUrl: "https://givebutter.com/polk-county-bully",
  //   isActive: true,
  // },
];
