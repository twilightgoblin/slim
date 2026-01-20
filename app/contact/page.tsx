import { ContactUsPage } from "@/components/contact-us-page"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - SLMI Pest Control | Free Inspection & Quote",
  description: "Contact SLMI Pest Control for professional pest management services. Get your free inspection today. Available 24/7 across India. Call 9580574211.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactUsPage />
      <FooterSection />
    </>
  )
}