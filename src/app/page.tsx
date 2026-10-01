import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import ContextFirst from "@/components/ContextFirst";
import HowItWorks from "@/components/HowItWorks";
import Work from "@/components/Work";
import Insights from "@/components/Insights";
import PracticalApproach from "@/components/PracticalApproach";
import CtaDark from "@/components/CtaDark";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CapabilitiesStrip />
        <ContextFirst />
        <HowItWorks />
        <Work />
        <Insights />
        <PracticalApproach />
        <CtaDark />
      </main>
      <Footer />
    </>
  );
}
