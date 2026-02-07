import type { Metadata } from "next";

import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About Novian | Novskidev.cloud",
  description:
    "Meet Novian Nadari – software engineer, educator, and AI enthusiast based in Yogyakarta, helping teams build impactful products and learning experiences.",
  openGraph: {
    title: "About Novian | Novskidev.cloud",
    description:
      "Discover the story behind Novskidev: software engineering, teaching, and AI initiatives that empower learners and businesses alike.",
    url: "https://novskidev.cloud/about",
    type: "profile",
    siteName: "Novskidev.cloud",
  },
  alternates: {
    canonical: "https://novskidev.cloud/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
