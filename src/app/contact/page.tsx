import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactTopics from "@/components/contact/ContactTopics";
import ContactClosing from "@/components/contact/ContactClosing";

export const metadata: Metadata = {
  title: "Contact — CNR",
  description:
    "Have a digital problem worth figuring out? Start the conversation on WhatsApp, email, LinkedIn or Instagram — no perfect brief required.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactTopics />
        <ContactClosing />
      </main>
      <Footer />
    </>
  );
}
