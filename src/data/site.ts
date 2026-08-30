/**
 * Central site configuration for AAC.
 * Only publicly verifiable AAC information is stored here.
 * Anything unverified is marked as a placeholder in the content data files.
 */
export const site = {
  shortName: "AAC",
  name: "Ashlesha Astronomy Club",
  institute: "Visvesvaraya National Institute of Technology, Nagpur",
  instituteShort: "VNIT Nagpur",
  tagline: "Look beyond what you see.",
  description:
    "Astronomy, astrophysics, cosmology, observational astronomy, astrophotography, research and space technology at VNIT Nagpur.",
  memberNickname: "Astrons",
  email: "astronomyclub01vnit@gmail.com",
  location: "VNIT Nagpur, South Ambazari Road, Nagpur, Maharashtra 440010, India",
  mapQuery: "Visvesvaraya National Institute of Technology Nagpur",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/aac_vnit/" },
    { label: "Linktree", href: "https://linktr.ee/aac_vnit" },
    { label: "X", href: "https://linktr.ee/aac_vnit" },
    { label: "Facebook", href: "https://linktr.ee/aac_vnit" },
  ],
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Projects", to: "/projects" },
  { label: "Blogs", to: "/blogs" },
  { label: "Gallery", to: "/gallery" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;
