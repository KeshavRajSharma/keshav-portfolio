import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "intelligent-traffic-moderator",
    slug: "intelligent-traffic-moderator",

    title: "Intelligent Traffic Moderator",

    category: "AI / Machine Learning",

    shortDescription:
      "AI-powered traffic monitoring and optimization system combining computer vision, adaptive signal control, real-time data, and web technologies.",

    description:
      "A traffic-management system designed to detect vehicles, monitor intersections, analyze traffic conditions, and support adaptive traffic-signal optimization through AI and real-time software components.",

    technologies: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "SUMO",
    ],

    featured: true,

    githubUrl:
      "https://github.com/KeshavRajSharma/Intelligent-Traffic-Moderator",

    sourceVisibility: "Public",

    imageAlt:
      "Intelligent Traffic Moderator dashboard for AI-powered traffic monitoring and signal optimization",

    accent: "blue-violet",

    seo: {
      title: "Intelligent Traffic Moderator | AI Traffic Optimization Project",

      description:
        "Intelligent Traffic Moderator by Keshav Raj Sharma is an AI-powered traffic monitoring and optimization project using computer vision, real-time systems, FastAPI, React, and adaptive traffic control.",
    },
  },

  {
    id: "nepal-rastriya-news",
    slug: "nepal-rastriya-news",

    title: "Nepal Rastriya News",

    category: "Full-Stack Development",

    shortDescription:
      "Production news platform for publishing and delivering digital news content through a real-world web application.",

    technologies: ["TODO: Confirm exact technology stack"],

    featured: true,

    liveUrl: "https://nepalrastriyanews.com",

    sourceVisibility: "Private",

    status: "Active",

    imageAlt: "Nepal Rastriya News production news website",

    accent: "red-orange",

    seo: {
      title: "Nepal Rastriya News | Full-Stack News Platform",

      description:
        "Nepal Rastriya News is a production news platform developed as a real-world full-stack web project by Keshav Raj Sharma.",
    },
  },

  {
    id: "live-location-tracker",
    slug: "live-location-tracker",

    title: "Live Location Tracker",

    category: "IoT / Embedded Systems",

    shortDescription:
      "Real-time GPS tracking system using ESP32, GPS hardware, FastAPI, WebSockets, and a React Native mobile application.",

    description:
      "An end-to-end location-tracking system where an ESP32 reads GPS data, sends it to a FastAPI backend, stores location history, and streams live updates to a React Native mobile application.",

    technologies: [
      "ESP32",
      "C++",
      "NEO-6M GPS",
      "FastAPI",
      "SQLite",
      "React Native",
      "Expo",
      "TypeScript",
      "WebSockets",
    ],

    featured: true,

    githubUrl: "https://github.com/KeshavRajSharma/location-tracker",

    sourceVisibility: "Public",

    projectType: "Academic",

    imageAlt:
      "ESP32 live GPS location tracker with React Native mobile application",

    accent: "cyan-emerald",

    seo: {
      title: "Live Location Tracker | ESP32 GPS & React Native Project",

      description:
        "Live Location Tracker by Keshav Raj Sharma is an ESP32 GPS tracking system using FastAPI, WebSockets, SQLite, and React Native for real-time location updates.",
    },
  },

  {
    id: "house-price-prediction",
    slug: "house-price-prediction",

    title: "House Price Prediction",

    category: "Data Science",

    shortDescription:
      "End-to-end machine learning project covering data analysis, preprocessing, feature engineering, regression modeling, evaluation, and prediction.",

    description:
      "A structured machine-learning workflow using the Kaggle House Prices dataset, including data understanding, cleaning, exploratory analysis, feature engineering, model comparison, and final prediction generation.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],

    featured: true,

    sourceVisibility: "Private",

    projectType: "Solo",

    status: "Completed",

    imageAlt:
      "House Price Prediction machine learning model analysis and evaluation",

    accent: "violet-blue",

    seo: {
      title: "House Price Prediction | Machine Learning Project",

      description:
        "House Price Prediction by Keshav Raj Sharma is an end-to-end data science and machine learning regression project covering feature engineering, model comparison, evaluation, and prediction.",
    },
  },

  {
    id: "opengl-car-racing",
    slug: "opengl-car-racing",

    title: "OpenGL Car Racing",

    category: "Computer Graphics",

    shortDescription:
      "Interactive 2D car-racing game demonstrating computer graphics algorithms, transformations, clipping, animation, and collision handling.",

    description:
      "A Python and PyOpenGL racing game built to demonstrate practical implementations of line and circle algorithms, transformations, clipping techniques, viewport mapping, animation, and collision detection.",

    technologies: ["Python", "PyOpenGL", "OpenGL", "GLUT", "Computer Graphics"],

    featured: true,

    githubUrl: "https://github.com/KeshavRajSharma/car_racing-Opengl",

    sourceVisibility: "Public",

    projectType: "Academic",

    imageAlt:
      "OpenGL car racing game demonstrating computer graphics algorithms",

    accent: "orange-pink",

    seo: {
      title: "OpenGL Car Racing | Computer Graphics Project",

      description:
        "OpenGL Car Racing by Keshav Raj Sharma is a Python and PyOpenGL project demonstrating computer graphics algorithms, transformations, clipping, animation, and collision detection.",
    },
  },

  {
    id: "titanic-survival-prediction",
    slug: "titanic-survival-prediction",

    title: "Titanic Survival Prediction",

    category: "Data Science",

    shortDescription:
      "Data science classification project exploring passenger data, preprocessing, feature engineering, and survival prediction.",

    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter"],

    featured: false,

    sourceVisibility: "Private",

    projectType: "Solo",

    status: "In Progress",

    accent: "blue-cyan",

    seo: {
      title: "Titanic Survival Prediction | Data Science Project",

      description:
        "Titanic Survival Prediction is a data science classification project by Keshav Raj Sharma covering data cleaning, analysis, feature engineering, and predictive modeling.",
    },
  },

  {
    id: "rural-road-planner",
    slug: "rural-road-planner",

    title: "Rural Road Planner",

    category: "AI / Geospatial",

    shortDescription:
      "AI and geospatial project exploring road-network analysis and planning using graph-based machine learning and mapping technologies.",

    technologies: [
      "Python",
      "PyTorch Geometric",
      "FastAPI",
      "React",
      "Leaflet",
      "OpenStreetMap",
    ],

    featured: false,

    githubUrl: "https://github.com/KeshavRajSharma/road_network_analyzer",

    sourceVisibility: "Public",

    projectType: "Collaborative",

    accent: "green-blue",

    seo: {
      title: "Rural Road Planner | AI & Geospatial Project",

      description:
        "Rural Road Planner is a collaborative AI and geospatial road-network analysis project involving graph machine learning, OpenStreetMap data, FastAPI, React, and Leaflet.",
    },
  },

  {
    id: "ku-healthcare",
    slug: "ku-healthcare",

    title: "KU HealthCare",

    category: "Full-Stack Development",

    shortDescription:
      "Collaborative healthcare web application built with modern frontend, backend, database, and API technologies.",

    technologies: ["React", "Node.js", "Prisma", "PostgreSQL"],

    featured: false,

    githubUrl: "https://github.com/KeshavRajSharma/KU-HealthCare",

    sourceVisibility: "Public",

    projectType: "Collaborative",

    accent: "blue-cyan",

    seo: {
      title: "KU HealthCare | Full-Stack Web Project",

      description:
        "KU HealthCare is a collaborative full-stack healthcare web project involving React, Node.js, Prisma, and PostgreSQL.",
    },
  },

  {
    id: "ecothonn",
    slug: "ecothonn",

    title: "EcoThonn",

    category: "Hackathon",

    shortDescription:
      "Environment-focused hackathon project developed around practical technology ideas for environmental challenges.",

    technologies: ["TODO: Confirm exact technology stack"],

    featured: false,

    githubUrl: "https://github.com/KeshavRajSharma/EcoThonn",

    sourceVisibility: "Public",

    projectType: "Hackathon",

    accent: "green-blue",

    seo: {
      title: "EcoThonn | Environmental Hackathon Project",

      description:
        "EcoThonn is an environmental technology hackathon project involving practical ideas for addressing environmental challenges.",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const otherProjects = projects.filter((project) => !project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
