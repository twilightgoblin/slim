import { HeroSection } from "@/components/hero-section"
import { HeroServices } from "@/components/hero-services"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HeroServices />
      <AboutSection />
    </main>
  )
}
