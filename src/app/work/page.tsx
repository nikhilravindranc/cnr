import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkHero from "@/components/work/WorkHero";
import WorkGrid from "@/components/work/WorkGrid";
import ApproachFlow from "@/components/work/ApproachFlow";
import StartHere from "@/components/work/StartHere";
import GoalSection from "@/components/work/GoalSection";
import WorkCta from "@/components/work/WorkCta";

export const metadata: Metadata = {
  title: "Work — CNR",
  description:
    "Problems solved. Products shaped. Digital experiences improved. Selected work across B2B SaaS, ecommerce, websites, custom applications and digital transformation.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <WorkHero />
        <WorkGrid />
        <ApproachFlow />
        <StartHere />
        <GoalSection />
        <WorkCta />
      </main>
      <Footer />
    </>
  );
}
