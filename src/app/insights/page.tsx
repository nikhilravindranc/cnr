import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InsightsHero from "@/components/insights/InsightsHero";
import InsightsGrid from "@/components/insights/InsightsGrid";
import InsightsCta from "@/components/insights/InsightsCta";

export const metadata: Metadata = {
  title: "Insights — CNR",
  description:
    "Ideas shaped by real work. Notes on product decisions, customer experience, technology and the lessons that don't fit inside a case study.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <InsightsHero />
        <InsightsGrid />
        <InsightsCta />
      </main>
      <Footer />
    </>
  );
}
