import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer-section"
import { FaqPageContent } from "@/components/faq-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ - SLMI Pest Control Lucknow | Common Questions Answered",
  description: "Get answers to frequently asked questions about SLMI Pest Control services in Lucknow. Learn about our BIS-certified treatments, pricing, safety measures, and warranty coverage.",
  keywords: "pest control FAQ, Lucknow pest control questions, termite treatment cost, BIS certified chemicals, pest control warranty",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <FaqPageContent />
      <FooterSection />
    </main>
  )
}