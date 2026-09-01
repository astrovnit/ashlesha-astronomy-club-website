import { img } from "./images";
import type { AacEvent } from "./types";

/**
 * PLACEHOLDER CONTENT.
 * Every entry below is illustrative structure, not a record of a real AAC event.
 * Replace with actual AAC events; the shape is all the UI depends on.
 */
export const events: AacEvent[] = [
  {
    slug: "overnight-stargazing-session",
    title: "Overnight Stargazing Session",
    category: "Stargazing",
    status: "upcoming",
    date: "2026-09-19",
    time: "21:00 – 05:00 IST",
    venue: "VNIT Campus (venue to be confirmed)",
    excerpt:
      "A full-night observation session: constellation navigation, telescope viewing and deep-sky objects.",
    description: [
      "Placeholder description. An overnight observation session where members set up telescopes, learn to navigate the sky by eye, and observe planets, star clusters and whatever deep-sky objects the season offers.",
      "Beginners are welcome — no prior experience is expected. Bring warm clothing and a red torch if you have one.",
    ],
    registrationUrl: "https://linktr.ee/aac_vnit",
    image: img.stargazing,
    placeholder: true,
  },
  {
    slug: "astrophotography-workshop",
    title: "Astrophotography Workshop",
    category: "Astrophotography",
    status: "upcoming",
    date: "2026-10-04",
    time: "18:30 – 21:00 IST",
    venue: "Lecture Hall Complex (to be confirmed)",
    excerpt:
      "From camera settings to stacking and post-processing — capture the night sky with equipment you already own.",
    description: [
      "Placeholder description. A hands-on workshop covering exposure basics, tracking, stacking software and processing pipelines for wide-field and lunar imaging.",
    ],
    registrationUrl: "https://linktr.ee/aac_vnit",
    image: img.moon,
    placeholder: true,
  },
  {
    slug: "cosmology-lecture-series",
    title: "Cosmology Lecture Series",
    category: "Talk",
    status: "ongoing",
    date: "2026-08-25",
    time: "19:00 IST, weekly",
    venue: "Online + Campus",
    excerpt:
      "A running series on the expanding universe, cosmic microwave background and large-scale structure.",
    description: [
      "Placeholder description. A weekly student-led series that builds up cosmology from first principles, with discussion sessions after each talk.",
    ],
    speakers: [{ name: "Speaker to be announced", affiliation: "Placeholder" }],
    image: img.nebula,
    placeholder: true,
  },
  {
    slug: "amateur-rocketry-build-sprint",
    title: "Amateur Rocketry Build Sprint",
    category: "Space Technology",
    status: "past",
    date: "2026-03-15",
    time: "09:00 – 18:00 IST",
    venue: "Campus workshop area",
    excerpt:
      "Teams designed, simulated and assembled small model rockets, closing with a telemetry review.",
    description: [
      "Placeholder description. A single-day sprint on airframe design, recovery systems and basic flight simulation, ending with a design review.",
    ],
    report:
      "Placeholder event report. Replace with the actual post-event write-up, outcomes and participation numbers.",
    image: img.rocketry,
    placeholder: true,
  },
  {
    slug: "astro-quiz-night",
    title: "Astro Quiz Night",
    category: "Competition",
    status: "past",
    date: "2026-02-08",
    time: "18:00 – 20:30 IST",
    venue: "Campus auditorium",
    excerpt:
      "A team quiz across astronomy history, observational trivia and current space missions.",
    description: ["Placeholder description of the quiz format, rounds and prizes."],
    image: img.startrails,
    placeholder: true,
  },
  {
    slug: "sky-watching-outreach",
    title: "Sky-Watching Outreach",
    category: "Outreach",
    status: "past",
    date: "2025-12-14",
    time: "19:00 – 22:00 IST",
    venue: "To be confirmed",
    excerpt:
      "Telescope viewing opened up for visitors, with volunteers explaining what is in the eyepiece.",
    description: ["Placeholder description of an outreach evening run by club volunteers."],
    image: img.simulation,
    placeholder: true,
  },
];

export const eventCategories = [
  "Stargazing",
  "Workshop",
  "Talk",
  "Competition",
  "Outreach",
  "Astrophotography",
  "Space Technology",
  "Other",
] as const;

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
