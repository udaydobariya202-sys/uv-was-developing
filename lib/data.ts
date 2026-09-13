export type TechTag = string;

export type ProjectStatus = "Concept / In development" | "Prototype" | "Exploration";

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  stack: TechTag[];
  status: ProjectStatus;
  accentHue: string; // CSS hue value for visual identity
  // Optional image fields — add these once real screenshots exist
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export interface AppScreenshot {
  id: string;
  projectId: string; // links back to Project.id
  title: string;
  subtitle: string;
  image: string; // path under /public, e.g. /images/apps/rideflow-home.png
  imageAlt: string;
  accentHue: string;
  featured: boolean; // featured = large card on desktop
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
    id: "rideflow",
    number: "01",
    category: "Mobility Platform",
    title: "RideFlow",
    description:
      "A ride-hailing product ecosystem with passenger, driver, and admin experiences.",
    stack: ["Flutter", "Node.js", "Supabase", "Maps", "Payments", "Notifications"],
    status: "Concept / In development",
    accentHue: "270",
    image: "/images/apps/rideflow-home.png",
    imageAlt: "RideFlow passenger app home screen",
    featured: true,
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
    image: "/images/apps/terracast.png",
    imageAlt: "TerraCast weather visualization screen",
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

// App screenshots for the dedicated showcase section
export const appScreenshots: AppScreenshot[] = [
  {
    id: "rideflow-home",
    projectId: "rideflow",
    title: "RideFlow",
    subtitle: "Mobility Platform",
    image: "/images/apps/rideflow-home.png",
    imageAlt: "RideFlow passenger app — home and booking screen",
    accentHue: "270",
    featured: true,
  },
  {
    id: "rideflow-driver",
    projectId: "rideflow",
    title: "RideFlow Driver",
    subtitle: "Driver Experience",
    image: "/images/apps/rideflow-driver.png",
    imageAlt: "RideFlow driver app — active ride and earnings screen",
    accentHue: "258",
    featured: false,
  },
  {
    id: "terracast",
    projectId: "terracast",
    title: "TerraCast",
    subtitle: "Weather Visualization",
    image: "/images/apps/terracast.png",
    imageAlt: "TerraCast — atmospheric weather and Earth visualization",
    accentHue: "210",
    featured: false,
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
    items: ["Supabase", "PostgreSQL", "Firebase"],
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
    items: ["GitHub", "Render", "Environment Config"],
  },
];
