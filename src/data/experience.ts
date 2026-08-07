export type ExperienceType = "Education" | "Hackathon" | "Collaborative Work";

export type ExperienceItem = {
  id: string;
  type: ExperienceType;
  title: string;
  organization?: string;
  period?: string;
  description: string;
  highlights?: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    id: "kathmandu-university",
    type: "Education",
    title: "Bachelor's in Computer Engineering",
    organization: "Kathmandu University",
    description:
      "Studying computer engineering while developing practical skills across software engineering, artificial intelligence, data science, computer graphics, databases, and embedded systems.",
    highlights: [
      "Computer Engineering",
      "Software Development",
      "AI & Data Science",
    ],
  },

  {
    id: "ecothonn-hackathon",
    type: "Hackathon",
    title: "EcoThonn",
    description:
      "Participated in an environment-focused hackathon project centered on applying technology to practical environmental challenges.",
    highlights: ["Hackathon", "Team Collaboration", "Environmental Technology"],
  },

  {
    id: "collaborative-projects",
    type: "Collaborative Work",
    title: "Collaborative Development",
    description:
      "Worked with collaborative software projects spanning AI and geospatial systems as well as full-stack healthcare development.",
    highlights: ["Rural Road Planner", "KU HealthCare", "Team Development"],
  },
];
