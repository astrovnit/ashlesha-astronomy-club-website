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
  email: "astronomyclub@vnit.ac.in",
  location: "VNIT Nagpur, South Ambazari Road, Nagpur, Maharashtra 440010, India",
  mapQuery: "Visvesvaraya National Institute of Technology Nagpur",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/aac_vnit/" },
    { label: "Facebook", href: "https://www.facebook.com/AstroClubOfVnit" },
    {
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=astronomyclub@vnit.ac.in",
    },
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
