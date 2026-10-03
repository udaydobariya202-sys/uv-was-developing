export type TechTag = string;

export type ProjectStatus =
  | "Independent product"
  | "Concept / In development"
  | "Prototype"
  | "Exploration";

export interface Project {
  id: string;
  number: string;
  category: string;
  subtitle?: string;
  title: string;
  description: string;
  stack: TechTag[];
  status: ProjectStatus;
  role?: string;
  accentHue: string; // CSS hue value for visual identity
  featured?: boolean;
  caseStudyUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface StackGroup {
  label: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: "moviq",
    number: "01",
    category: "Mobility / Ride-Hailing",
    subtitle: "Cab Booking User App",
    title: "MOVIQ Cabs",
    description:
      "A production-style cab booking platform built with Flutter and BLoC, connected to a backend with payments, notifications, and maps.",
    stack: ["Flutter", "BLoC", "Stripe", "Firebase", "Maps"],
    status: "Independent product",
    role: "Flutter Developer and Full-Stack Product Builder",
    accentHue: "270",
    featured: true,
    caseStudyUrl: "/projects/moviq",
  },
  {
    id: "terracast",
    number: "02",
    category: "Weather / Earth Visualization",
    title: "TerraCast",
    description:
      "A weather and Earth-visualization experience focused on atmosphere, location, and motion.",
    stack: ["Flutter", "Maps", "Weather APIs", "Geospatial UI"],
    status: "Prototype",
    accentHue: "210",
  },
  {
    id: "udaya-ai",
    number: "03",
    category: "AI Assistant",
    title: "Udaya AI",
    description:
      "An assistant concept exploring voice, intelligent interaction, and a more human digital experience.",
    stack: ["Flutter", "AI APIs", "Voice UI", "Backend Services"],
    status: "Exploration",
    accentHue: "290",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify the user, the core problem, and the essential flow before writing a single line of code.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Design the interface and technical direction — aligning visuals, data, and behavior into a coherent system.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the product in focused iterations, keeping each cycle shippable and testable.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test across real conditions, smooth rough edges, and prepare the product for real users.\n",
  },
];

export const stackGroups: StackGroup[] = [
  {
    label: "Frontend",
    items: ["Flutter", "Dart", "Next.js", "React", "TypeScript"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "REST APIs"],
  },
  {
    label: "Data & Auth",
    items: ["Cloud Databases", "PostgreSQL", "Firebase"],
  },
  {
    label: "Product Features",
    items: ["Maps & Routing", "Payments", "Push Notifications", "Real-time Updates"],
  },
  {
    label: "AI",
    items: ["AI APIs", "Voice Interfaces", "Assistant Workflows"],
  },
  {
    label: "Deployment",
    items: ["GitHub", "Cloud Hosting", "CI/CD Pipelines"],
  },
];
