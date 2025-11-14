// lib/constants.ts

export type EventItem = {
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  image: string;
};

export const events: EventItem[] = [
  {
    title: "Google I/O 2025",
    slug: "google-io-2025",
    location: "Mountain View, California",
    date: "2025-05-14",
    time: "09:00 AM",
    image: "/images/event1.png",
  },
  {
    title: "Microsoft Build 2025",
    slug: "microsoft-build-2025",
    location: "Seattle, Washington",
    date: "2025-05-21",
    time: "10:30 AM",
   image: "/images/event2.png",
  },
  {
    title: "ETHGlobal Web3 Hackathon",
    slug: "ethglobal-web3-hackathon",
    location: "Online",
    date: "2025-03-01",
    time: "12:00 PM",
    image: "/images/event3.png",
  },
  {
    title: "React Summit 2025",
    slug: "react-summit-2025",
    location: "Amsterdam, Netherlands",
    date: "2025-06-12",
    time: "08:45 AM",
    image: "/images/event4.png",
  },
  {
    title: "African Tech Expo 2025",
    slug: "african-tech-expo-2025",
    location: "Addis Ababa, Ethiopia",
    date: "2025-08-18",
    time: "09:30 AM",
    image: "/images/event5.png",
  },
];
