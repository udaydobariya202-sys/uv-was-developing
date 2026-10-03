export type TechTag = string;

export interface Project {
  id: string;
  number: string;
  category: string;
  subtitle?: string;
  title: string;
  description: string;
  stack: TechTag[];
  role?: string;
  platform?: string;
  accentHue: string;
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
    category: "Mobile app, ride booking",
    subtitle: "Cab Booking User App",
    title: "MOVIQ Cabs",
    description:
      "A ride-booking app with a rider app, a driver app, an admin dashboard, and a connected backend, including payments, maps, and notifications.",
    stack: ["Flutter", "BLoC", "REST APIs", "Firebase", "Stripe", "Maps"],
    role: "Design and development",
    platform: "Android",
    accentHue: "270",
    featured: true,
    caseStudyUrl: "/projects/moviq",
  },
  {
    id: "terracast",
    number: "02",
    category: "Weather, earth visualization",
    title: "TerraCast",
    description:
      "An interactive weather and atmospheric visualization interface focused on location data and fluid motion.",
    stack: ["Flutter", "Maps", "Weather APIs", "Geospatial UI"],
    role: "Design and development",
    platform: "Android, web",
    accentHue: "210",
  },
  {
    id: "udaya-ai",
    number: "03",
    category: "Voice assistant interface",
    title: "Udaya AI",
    description:
      "A conversational assistant interface exploring voice interactions, intelligent state transitions, and responsive prompts.",
    stack: ["Flutter", "AI APIs", "Voice UI", "REST APIs"],
    role: "Design and development",
    platform: "Android",
    accentHue: "290",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Clarify user expectations, technical scope, and essential flows before writing code.",
  },
  {
    number: "02",
    title: "Shape",
    description:
      "Define state architecture, API contracts, and interface systems into a clear technical direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement features in focused iterations, keeping code decoupled and testable.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Verify under varied network conditions, polish interactions, and prepare clean releases.",
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
