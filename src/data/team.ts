import type { TeamMember } from "./types";

/**
 * PLACEHOLDER TEAM DATA.
 * No real AAC member names are used. Replace each entry with actual details.
 */
const make = (
  id: string,
  role: string,
  group: TeamMember["group"],
  domain?: string,
): TeamMember => ({
  id,
  name: "Member Name (placeholder)",
  role,
  group,
  domain,
  batch: "Batch TBD",
  department: "Department TBD",
  bio: "Short placeholder bio. Replace with a one-line introduction covering interests within astronomy and the member's contribution to the club.",
  links: [],
  placeholder: true,
});

export const team: TeamMember[] = [
  make("core-1", "President", "core"),
  make("core-2", "Vice President", "core"),
  make("core-3", "General Secretary", "core"),
  make("core-4", "Treasurer", "core"),
  make("dom-1", "Research Lead", "domain", "Research"),
  make("dom-2", "Projects Lead", "domain", "Projects"),
  make("dom-3", "Observations Lead", "domain", "Observations"),
  make("dom-4", "Astrophotography Lead", "domain", "Astrophotography"),
  make("dom-5", "Design Lead", "domain", "Design"),
  make("dom-6", "Web Lead", "domain", "Web"),
  make("dom-7", "Publicity Lead", "domain", "Publicity"),
  make("dom-8", "Events Lead", "domain", "Events"),
];

export const domains = [
  "Research",
  "Projects",
  "Observations",
  "Astrophotography",
  "Design",
  "Web",
  "Publicity",
  "Events",
] as const;
