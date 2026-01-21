"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

// Enhanced Animal Icons with round backgrounds and visible animal features
const TermiteIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Termite body with segments */}
      <ellipse cx="12" cy="8" rx="2" ry="3" fill="white" />
      <ellipse cx="12" cy="12" rx="1.5" ry="2" fill="white" />
      <ellipse cx="12" cy="16" rx="1" ry="1.5" fill="white" />
      {/* Antennae */}
      <path d="M10 6C9 5 8 4 7 4M14 6C15 5 16 4 17 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Legs */}
      <path d="M10 10L8 12M14 10L16 12M10 14L8 16M14 14L16 16" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  </div>
)

const CockroachIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Cockroach oval body */}
      <ellipse cx="12" cy="12" rx="4" ry="6" fill="white" />
      {/* Head */}
      <ellipse cx="12" cy="7" rx="2.5" ry="2" fill="white" />
      {/* Eyes */}
      <circle cx="10.5" cy="6.5" r="0.8" fill="#c83232"/>
      <circle cx="13.5" cy="6.5" r="0.8" fill="#c83232"/>
      {/* Antennae */}
      <path d="M10 5C9 4 8 3 7 3M14 5C15 4 16 3 17 3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Wing lines */}
      <path d="M9 10V16M15 10V16M12 9V17" stroke="#c83232" strokeWidth="0.5"/>
    </svg>
  </div>
)

const MosquitoIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Mosquito body */}
      <ellipse cx="12" cy="12" rx="1" ry="4" fill="white" />
      {/* Head */}
      <circle cx="12" cy="8" r="1.5" fill="white" />
      {/* Long proboscis */}
      <path d="M12 6.5L12 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Wings */}
      <ellipse cx="10" cy="10" rx="2" ry="1" fill="white" opacity="0.8" transform="rotate(-20 10 10)"/>
      <ellipse cx="14" cy="10" rx="2" ry="1" fill="white" opacity="0.8" transform="rotate(20 14 10)"/>
      {/* Legs */}
      <path d="M10.5 14L8 16M13.5 14L16 16M10.5 11L8 13M13.5 11L16 13" stroke="white" strokeWidth="1" strokeLinecap="round"/>
      {/* Antennae */}
      <path d="M11 7L10 5M13 7L14 5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  </div>
)

const RodentIcon = () => (
  <div className="w-12 h-12 bg-gradient-to-br from-[#c83232] to-[#a02828] rounded-full flex items-center justify-center shadow-lg">
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
      {/* Mouse body */}
      <ellipse cx="12" cy="13" rx="3" ry="4" fill="white" />
      {/* Head */}
      <ellipse cx="12" cy="8" rx="2.5" ry="2" fill="white" />
      {/* Ears */}
      <circle cx="10" cy="6" r="1.2" fill="white" />
      <circle cx="14" cy="6" r="1.2" fill="white" />
      <circle cx="10" cy="6" r="0.6" fill="#c83232" />
      <circle cx="14" cy="6" r="0.6" fill="#c83232" />
      {/* Eyes */}
      <circle cx="10.5" cy="7.5" r="0.5" fill="#c83232"/>
      <circle cx="13.5" cy="7.5" r="0.5" fill="#c83232"/>
      {/* Nose */}
      <circle cx="12" cy="8.5" r="0.3" fill="#c83232"/>
      {/* Tail */}
      <path d="M12 17C13 18 15 19 17 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Whiskers */}
      <path d="M9 8L7 7.5M15 8L17 7.5M9 9L7 9M15 9L17 9" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
  </div>
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
    description: "Professional rodent elimination and prevention. Secure your premises with care.",
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
              className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-200 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Professional pest control service`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Service Icon - Left aligned with proper spacing */}
                <div className="flex justify-start mb-6">
                  <service.icon />
                </div>

                {/* Service Title */}
                <h3 className="font-semibold text-lg text-gray-900 mb-4 text-left">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-left">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="text-left">
                  <Link 
                    href="/services"
                    className="inline-flex items-center text-[#c83232] hover:text-[#a02828] font-medium text-sm transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
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
              className="bg-[#c83232] hover:bg-[#a02828] text-white font-semibold px-8 py-3 rounded-xl group cursor-pointer"
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