import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { WorkSection } from "@/components/WorkSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Selected Work | UV WAS DEVELOPING — Uday Dobariya",
  description:
    "Featured systems, mobile applications, and products built by Uday Dobariya. Independent product development with Flutter and modern backends.",
  alternates: {
    canonical: "https://dcmlabs.online/projects",
  },
  openGraph: {
    title: "Selected Work | UV WAS DEVELOPING — Uday Dobariya",
    description:
      "Featured systems, mobile applications, and products built by Uday Dobariya. Independent product development with Flutter and modern backends.",
    url: "https://dcmlabs.online/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="pt-16">
        <WorkSection />
      </main>
      <Footer />
    </>
  );
}
