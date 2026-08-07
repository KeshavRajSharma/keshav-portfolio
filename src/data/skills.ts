export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Languages I use across software, data, and engineering work.",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    description:
      "Technologies for building responsive web and mobile interfaces.",
    skills: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Backend development, APIs, and real-time communication.",
    skills: ["FastAPI", "Node.js", "REST APIs", "WebSockets"],
  },
  {
    title: "AI & Data Science",
    description:
      "Tools for analysis, machine learning, and intelligent systems.",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "YOLO",
      "Matplotlib",
    ],
  },
  {
    title: "Databases",
    description: "Relational and document databases used across my projects.",
    skills: ["PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "Engineering & Tools",
    description:
      "Development and engineering tools used beyond application code.",
    skills: ["Git", "GitHub", "ESP32", "PlatformIO", "OpenGL"],
  },
];
