import { img } from "./images";
import type { BlogPost } from "./types";

/**
 * PLACEHOLDER CONTENT — sample articles written to demonstrate the reading
 * experience. Replace with real AAC writing.
 */
export const blogs: BlogPost[] = [
  {
    slug: "how-to-start-observing",
    title: "How to Start Observing the Night Sky",
    category: "Beginner's Guide",
    author: "AAC Editorial (placeholder)",
    date: "2026-08-12",
    readingTime: "6 min read",
    excerpt:
      "You do not need a telescope to begin. You need a dark-ish patch of sky, a little patience, and a way to keep track of what you saw.",
    body: [
      {
        paragraphs: [
          "Most people who end up doing astronomy seriously started the same way: standing outside, noticing that one of those points of light was not twinkling, and wondering why.",
          "This guide is a starting point for that curiosity. It assumes nothing except that you can find the sky.",
        ],
      },
      {
        heading: "Start with your eyes",
        paragraphs: [
          "Give your eyes twenty minutes away from screens and white light. Dark adaptation is the cheapest optical upgrade available, and it costs only patience.",
          "Learn three or four bright constellations first. They are the coordinate system you will use for everything else — every faint object you later hunt is described relative to something you can already find.",
        ],
      },
      {
        heading: "Then add optics",
        paragraphs: [
          "A pair of binoculars will show you lunar detail, the Galilean moons and several open clusters. It is a better first instrument than a poorly mounted telescope.",
          "When you do move to a telescope, the mount matters as much as the aperture. A shaky mount makes a good optical tube useless.",
        ],
      },
      {
        heading: "Keep a record",
        paragraphs: [
          "Write down the date, the time, the conditions and what you saw. Observation logs turn casual looking into data, and data is where astronomy actually begins.",
        ],
      },
    ],
    image: img.stargazing,
    placeholder: true,
  },
  {
    slug: "reading-a-light-curve",
    title: "Reading a Light Curve",
    category: "Research",
    author: "AAC Editorial (placeholder)",
    date: "2026-07-28",
    readingTime: "8 min read",
    excerpt:
      "A brightness-versus-time plot is one of the most information-dense objects in astronomy. Here is how to read one.",
    body: [
      {
        paragraphs: [
          "Placeholder article body. A light curve records how the brightness of an object changes over time, and its shape encodes physics: orbital geometry, pulsation modes, accretion, eclipses.",
        ],
      },
      {
        heading: "Periodicity",
        paragraphs: [
          "Placeholder section. Folding a light curve on a trial period turns scattered points into a clean shape when the period is right — which is exactly what period-finding algorithms exploit.",
        ],
      },
      {
        heading: "What the shape tells you",
        paragraphs: [
          "Placeholder section discussing eclipse depth, asymmetry and rise/fall times, and what each implies about the system.",
        ],
      },
    ],
    image: img.simulation,
    placeholder: true,
  },
  {
    slug: "why-the-universe-expands",
    title: "Why We Say the Universe Is Expanding",
    category: "Cosmology",
    author: "AAC Editorial (placeholder)",
    date: "2026-06-30",
    readingTime: "9 min read",
    excerpt:
      "Expansion is not galaxies flying through space. It is space itself changing scale — and the evidence for it is unusually direct.",
    body: [
      {
        paragraphs: [
          "Placeholder article body covering redshift, the distance ladder, and the observational chain that leads to an expanding metric.",
        ],
      },
      {
        heading: "Redshift is not Doppler",
        paragraphs: [
          "Placeholder section explaining the difference between kinematic Doppler shift and cosmological redshift.",
        ],
      },
    ],
    image: img.nebula,
    placeholder: true,
  },
  {
    slug: "processing-your-first-deep-sky-image",
    title: "Processing Your First Deep-Sky Image",
    category: "Astrophotography",
    author: "AAC Editorial (placeholder)",
    date: "2026-05-19",
    readingTime: "7 min read",
    excerpt:
      "Calibration frames, stacking and stretching — the three steps that separate a grey rectangle from a nebula.",
    body: [
      {
        paragraphs: [
          "Placeholder article body walking through darks, flats, bias frames, stacking and a first non-linear stretch.",
        ],
      },
    ],
    image: img.moon,
    placeholder: true,
  },
  {
    slug: "rocketry-basics-for-students",
    title: "Amateur Rocketry Basics for Students",
    category: "Space Technology",
    author: "AAC Editorial (placeholder)",
    date: "2026-04-11",
    readingTime: "10 min read",
    excerpt:
      "Stability margins, recovery systems and why the boring parts of the design are the ones that decide the flight.",
    body: [
      {
        paragraphs: [
          "Placeholder article body on centre of pressure vs centre of mass, recovery deployment and safety practice.",
        ],
      },
    ],
    image: img.rocketry,
    placeholder: true,
  },
  {
    slug: "club-update-semester-plan",
    title: "Club Update: Semester Plan",
    category: "Club Updates",
    author: "AAC Core Team (placeholder)",
    date: "2026-03-02",
    readingTime: "3 min read",
    excerpt: "What the club is planning this semester across observation, projects and outreach.",
    body: [
      {
        paragraphs: [
          "Placeholder update. Replace with the actual semester plan once it is finalised by the core team.",
        ],
      },
    ],
    image: img.startrails,
    placeholder: true,
  },
];

export const blogCategories = [
  "Astronomy",
  "Astrophysics",
  "Cosmology",
  "Space Science",
  "Observational Astronomy",
  "Astrophotography",
  "Space Technology",
  "Research",
  "Beginner's Guide",
  "Club Updates",
] as const;

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);
