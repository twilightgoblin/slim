import { AboutUsPage } from "@/components/about-us-page"
import { FooterSection } from "@/components/footer-section"
import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <AboutUsPage />
      </div>
      <FooterSection />
    </main>
  )
}