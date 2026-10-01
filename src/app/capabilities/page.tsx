import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CapabilitiesHero from "@/components/capabilities/CapabilitiesHero";
import CapabilityList from "@/components/capabilities/CapabilityList";
import CapabilitiesConnect from "@/components/capabilities/CapabilitiesConnect";
import CapabilitiesCta from "@/components/capabilities/CapabilitiesCta";

export const metadata: Metadata = {
  title: "Capabilities — CNR",
  description:
    "The right support depends on the problem. Product strategy, SaaS, digital transformation, UX, technology evaluation, AI-assisted execution, growth and product leadership.",
};

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CapabilitiesHero />
        <CapabilityList />
        <CapabilitiesConnect />
        <CapabilitiesCta />
      </main>
      <Footer />
    </>
  );
}
