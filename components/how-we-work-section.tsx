"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function HowWeWorkSection() {
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

    const element = document.getElementById('how-we-work-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "01",
      title: "Free Inspection",
      description: "Our experts assess your space and identify pest problems with a detailed inspection report.",
      image: "/images/insp.png",
    },
    {
      number: "02",
      title: "Custom Treatment Plan",
      description: "We create a tailored solution using eco-friendly methods safe for your family and pets.",
      image: "/images/custom.png",
    },
    {
      number: "03",
      title: "Professional Treatment",
      description: "Our certified technicians execute the treatment with precision and care.",
      image: "/images/professional.png",
    },
    {
      number: "04",
      title: "Follow-Up Support",
      description: "Regular check-ins and follow-up treatments ensure long-term protection and peace of mind.",
      image: "/images/follow-up-support.png",
    },
  ]

  return (
    <section 
      id="how-we-work-section"
      className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our proven 4-step process ensures effective pest elimination and lasting results
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image container */}
                <div className="relative w-full h-48 lg:h-56 bg-gray-50 overflow-hidden">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    quality={75}
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="text-4xl lg:text-5xl font-bold text-[#c83232]/20 mb-4 font-[family-name:var(--font-poppins)]">
                    {step.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-poppins)] font-bold text-lg lg:text-xl text-gray-900 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed flex-1">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}