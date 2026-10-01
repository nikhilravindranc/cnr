import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutExperience from "@/components/about/AboutExperience";
import AboutPeopleTech from "@/components/about/AboutPeopleTech";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import AboutClosing from "@/components/about/AboutClosing";

export const metadata: Metadata = {
  title: "About — CNR",
  description:
    "A career built around solving digital problems — from writing and communication to product management and digital product consulting.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutTimeline />
        <AboutExperience />
        <AboutPeopleTech />
        <AboutPrinciples />
        <AboutClosing />
      </main>
      <Footer />
    </>
  );
}
