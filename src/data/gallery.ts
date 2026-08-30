import { img } from "./images";
import type { GalleryItem } from "./types";

/**
 * PLACEHOLDER GALLERY.
 * These are illustrative visuals, not photographs taken by AAC members.
 * Replace image, title, photographer, date and description with real archive entries.
 */
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    title: "Galactic Core over an Observatory",
    category: "Astrophotography",
    photographer: "Photographer TBD",
    date: "2026-05-02",
    description: "Placeholder wide-field image of the Milky Way core.",
    image: img.heroMilkyway,
    placeholder: true,
  },
  {
    id: "g2",
    title: "Emission Nebula",
    category: "Astrophotography",
    photographer: "Photographer TBD",
    date: "2026-04-18",
    description: "Placeholder deep-sky frame showing dust structure against ionised gas.",
    image: img.nebula,
    placeholder: true,
  },
  {
    id: "g3",
    title: "Night Observation Session",
    category: "Stargazing",
    photographer: "Photographer TBD",
    date: "2026-03-21",
    description: "Placeholder image of an observation session in progress.",
    image: img.stargazing,
    placeholder: true,
  },
  {
    id: "g4",
    title: "Lunar Terminator Detail",
    category: "Astrophotography",
    photographer: "Photographer TBD",
    date: "2026-02-11",
    description: "Placeholder lunar close-up highlighting crater relief near the terminator.",
    image: img.moon,
    placeholder: true,
  },
  {
    id: "g5",
    title: "Rocketry Field Test",
    category: "Projects",
    photographer: "Photographer TBD",
    date: "2026-01-30",
    description: "Placeholder image from a model rocket test session.",
    image: img.rocketry,
    placeholder: true,
  },
  {
    id: "g6",
    title: "Star Trails over Campus",
    category: "Events",
    photographer: "Photographer TBD",
    date: "2025-12-05",
    description: "Placeholder long-exposure star trail composite.",
    image: img.startrails,
    placeholder: true,
  },
  {
    id: "g7",
    title: "Galaxy Simulation Render",
    category: "Projects",
    photographer: "Render (placeholder)",
    date: "2025-11-14",
    description: "Placeholder visualisation from a gravitational simulation project.",
    image: img.simulation,
    placeholder: true,
  },
  {
    id: "g8",
    title: "Club Night, Group Frame",
    category: "Team",
    photographer: "Photographer TBD",
    date: "2025-10-22",
    description: "Placeholder team image from a club night.",
    image: img.stargazing,
    placeholder: true,
  },
  {
    id: "g9",
    title: "Deep Field Study",
    category: "Astrophotography",
    photographer: "Photographer TBD",
    date: "2025-09-09",
    description: "Placeholder deep-field style frame.",
    image: img.nebula,
    placeholder: true,
  },
];

export const galleryCategories = [
  "Astrophotography",
  "Events",
  "Stargazing",
  "Projects",
  "Team",
] as const;
