export type CoreMember = {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
};

export const executiveLeadership: CoreMember[] = [
  { id: "pres", name: "Arnav Meshram", role: "President" },
  { id: "vp", name: "Moulik Parekh", role: "Vice-President" },
];

export const researchLeadership: CoreMember[] = [
  { id: "res-1", name: "Rishit Kulkarni", role: "Head of Research" },
  { id: "res-2", name: "Shravan Zoad", role: "Head of Research" },
];

export const committeeHeads: CoreMember[] = [
  { id: "tech", name: "Disha Garpal", role: "Technical Head" },
  { id: "treas", name: "Shreyash Nikam", role: "Treasurer" },
  { id: "content", name: "Mrunal Jadhav", role: "Head of Content Creation" },
  { id: "design", name: "Anushka Bansod", role: "Head of Design" },
  { id: "media", name: "Ganesh Kumar Balivada", role: "Head of Multimedia" },
  { id: "pr", name: "Yasholaxmi Nichante", role: "Head of Public Relations" },
];
