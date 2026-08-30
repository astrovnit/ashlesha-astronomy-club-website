import { img } from "./images";
import type { Project } from "./types";

/**
 * PLACEHOLDER CONTENT — illustrative project structures, not real AAC work.
 */
export const projects: Project[] = [
  {
    slug: "variable-star-light-curves",
    title: "Variable Star Light Curves",
    category: "Computational",
    year: 2026,
    excerpt:
      "Reducing public survey photometry into period-folded light curves for a sample of variable stars.",
    objective:
      "Placeholder objective. Build a reproducible pipeline that turns open survey photometry into classified variable-star light curves.",
    methodology: [
      "Placeholder: query an open photometric archive for a target list.",
      "Placeholder: clean outliers and detrend the time series.",
      "Placeholder: run period-finding and fold the light curve.",
      "Placeholder: compare classifications against catalogue labels.",
    ],
    results: "Placeholder results. Replace with actual findings, plots and accuracy figures.",
    tools: ["Python", "Astropy", "NumPy", "Matplotlib", "Lightkurve"],
    members: ["Team member (placeholder)", "Team member (placeholder)"],
    mentor: "Mentor to be confirmed",
    githubUrl: "https://github.com/",
    image: img.simulation,
    placeholder: true,
  },
  {
    slug: "n-body-galaxy-simulation",
    title: "N-Body Galaxy Simulation",
    category: "Astrophysics",
    year: 2026,
    excerpt:
      "A gravitational N-body integrator used to study disk stability and tidal interactions between galaxies.",
    objective:
      "Placeholder objective. Implement and validate an N-body integrator, then explore how disk structure responds to a passing companion.",
    methodology: [
      "Placeholder: implement a leapfrog integrator with softened gravity.",
      "Placeholder: add a Barnes-Hut tree for scaling.",
      "Placeholder: validate energy conservation across step sizes.",
      "Placeholder: run interaction scenarios and render the evolution.",
    ],
    results: "Placeholder results.",
    tools: ["Python", "NumPy", "Numba", "Matplotlib"],
    members: ["Team member (placeholder)"],
    githubUrl: "https://github.com/",
    image: img.nebula,
    placeholder: true,
  },
  {
    slug: "deep-sky-imaging-rig",
    title: "Deep-Sky Imaging Rig",
    category: "Astrophotography",
    year: 2025,
    excerpt:
      "An affordable tracking and stacking setup for capturing nebulae and galaxies under city skies.",
    objective:
      "Placeholder objective. Assemble a low-cost imaging setup capable of usable deep-sky exposures despite light pollution.",
    methodology: [
      "Placeholder: build a star tracker and test polar alignment repeatability.",
      "Placeholder: characterise noise and optimum sub-exposure length.",
      "Placeholder: establish a calibration and stacking workflow.",
    ],
    results: "Placeholder results.",
    tools: ["DSLR", "Star tracker", "Siril", "GIMP"],
    members: ["Team member (placeholder)"],
    image: img.moon,
    placeholder: true,
  },
  {
    slug: "model-rocket-telemetry",
    title: "Model Rocket Telemetry",
    category: "Rocketry",
    year: 2025,
    excerpt:
      "A lightweight avionics package logging altitude, acceleration and attitude through a model rocket flight.",
    objective:
      "Placeholder objective. Design a flight computer that logs and transmits telemetry, and triggers recovery deployment.",
    methodology: [
      "Placeholder: select sensors and design the PCB.",
      "Placeholder: write the flight state machine and apogee detection.",
      "Placeholder: bench-test with recorded flight profiles.",
      "Placeholder: validate on a low-altitude test flight.",
    ],
    results: "Placeholder results.",
    tools: ["C++", "Microcontroller", "IMU", "Barometer", "LoRa"],
    image: img.rocketry,
    placeholder: true,
  },
  {
    slug: "cmb-power-spectrum-study",
    title: "CMB Power Spectrum Study",
    category: "Cosmology",
    year: 2025,
    excerpt:
      "Reading a public CMB dataset and reproducing the acoustic peak structure from scratch.",
    objective: "Placeholder objective.",
    methodology: [
      "Placeholder: load and mask public temperature maps.",
      "Placeholder: compute the angular power spectrum.",
      "Placeholder: compare against a standard cosmological model.",
    ],
    results: "Placeholder results.",
    tools: ["Python", "Healpy", "CAMB"],
    image: img.startrails,
    placeholder: true,
  },
  {
    slug: "campus-sky-quality-survey",
    title: "Campus Sky Quality Survey",
    category: "Observational",
    year: 2024,
    excerpt:
      "Mapping night-sky brightness across campus to identify the best observation spots through the year.",
    objective: "Placeholder objective.",
    methodology: [
      "Placeholder: define measurement points and a sampling schedule.",
      "Placeholder: record sky brightness readings and weather context.",
      "Placeholder: produce a seasonal map of observing conditions.",
    ],
    results: "Placeholder results.",
    tools: ["Sky quality meter", "Python", "GeoPandas"],
    image: img.heroMilkyway,
    placeholder: true,
  },
];

export const projectCategories = [
  "Computational",
  "Astrophysics",
  "Cosmology",
  "Observational",
  "Astrophotography",
  "Rocketry",
  "Space Technology",
] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
