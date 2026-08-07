export type ProjectCategory =
  | "AI / Machine Learning"
  | "Full-Stack Development"
  | "IoT / Embedded Systems"
  | "Data Science"
  | "Computer Graphics"
  | "AI / Geospatial"
  | "Hackathon";

export type ProjectSourceVisibility = "Public" | "Private" | "Not Available";

export type ProjectType = "Solo" | "Collaborative" | "Academic" | "Hackathon";

export type ProjectStatus = "Completed" | "In Progress" | "Active";

export type ProjectAccent =
  | "blue-violet"
  | "red-orange"
  | "cyan-emerald"
  | "violet-blue"
  | "orange-pink"
  | "blue-cyan"
  | "green-blue";

export type Project = {
  id: string;
  slug: string;

  title: string;
  category: ProjectCategory;

  shortDescription: string;
  description?: string;

  technologies: string[];

  featured: boolean;

  githubUrl?: string;
  liveUrl?: string;

  sourceVisibility: ProjectSourceVisibility;
  projectType?: ProjectType;
  status?: ProjectStatus;

  image?: string;
  imageAlt?: string;
  screenshots?: string[];

  myRole?: string;

  accent: ProjectAccent;

  seo: {
    title: string;
    description: string;
  };
};
