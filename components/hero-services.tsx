"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Custom SVG Icons to match the exact design
const TermiteIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L8 6H16L12 2Z" fill="#c83232" />
    <circle cx="12" cy="10" r="2" fill="#c83232" />
    <path d="M10 14H14V18H10V14Z" fill="#c83232" />
  </svg>
)

const CockroachIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M12 4C8 4 5 7 5 11C5 15 8 18 12 18C16 18 19 15 19 11C19 7 16 4 12 4Z" fill="#c83232" stroke="#c83232" strokeWidth="1"/>
    <circle cx="10" cy="9" r="1" fill="white"/>
    <circle cx="14" cy="9" r="1" fill="white"/>
  </svg>
)

const MosquitoIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M12 6C10 6 8 8 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 8 14 6 12 6Z" fill="#c83232"/>
    <path d="M12 14L10 18H14L12 14Z" fill="#c83232"/>
    <path d="M8 10L4 8M16 10L20 8M8 10L4 12M16 10L20 12" stroke="#c83232" strokeWidth="2"/>
  </svg>
)

const RodentIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M8 12C8 8 10 6 12 6C14 6 16 8 16 12V16C16 18 14 20 12 20C10 20 8 18 8 16V12Z" fill="#c83232"/>
    <circle cx="10" cy="10" r="1" fill="white"/>
    <circle cx="14" cy="10" r="1" fill="white"/>
    <path d="M12 6C12 4 10 2 8 2M12 6C12 4 14 2 16 2" stroke="#c83232" strokeWidth="2"/>
  </svg>
)

const services = [
  {
    id: 1,
    title: "Termite Control",
    description: "Comprehensive termite elimination and prevention. Protect your property from costly damage.",
    image: "/images/termites.jpg",
    icon: TermiteIcon
  },
  {
    id: 2,
    title: "Cockroach Control", 
    description: "Effective cockroach treatment for homes and commercial spaces. Guaranteed results.",
    image: "/images/Cockroach.jpg.webp",
    icon: CockroachIcon
  },
  {
    id: 3,
    title: "Mosquito Control",
    description: "Eliminate disease-carrying mosquitoes. Safe treatments for families and pets.",
    image: "/images/mosquito.jpg.webp",
    icon: MosquitoIcon
  },
  {
    id: 4,
    title: "Rodent Control",
    description: "Professional rodent elimination and prevention. Secure your premises.",
    image: "/images/rodent.jpg",
    icon: RodentIcon
  }
]

export function HeroServices() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('hero-services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="hero-services"
      className="relative py-16 lg:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-poppins)] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Comprehensive Pest
              <br />
              <span className="text-[#c83232]">Protection Solutions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our expert team offers customized pest control services, designed to meet the unique challenges of your home or business.
            </p>
          </div>
        </div>

        {/* Service Cards Grid - Using website red color scheme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-[#c83232] hover:shadow-lg transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional pest control service`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Service Icon - Centered with light background */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                    <service.icon />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-semibold text-lg text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="text-center">
                  <Link 
                    href="/services"
                    className="inline-flex items-center text-[#c83232] hover:text-[#a02828] font-medium text-sm transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Link */}
        <div className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Link href="/services">
            <Button 
              className="bg-[#c83232] hover:bg-[#a02828] text-white font-semibold px-8 py-3 rounded-xl group"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}