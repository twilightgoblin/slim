"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const workSteps = [
  {
    id: "01",
    title: "Free Inspection",
    description: "Our experts assess your space and identify pest problems with a detailed inspection report.",
    image: "/images/insp.png"
  },
  {
    id: "02", 
    title: "Custom Treatment Plan",
    description: "We create a tailored solution using eco-friendly methods safe for your family and pets.",
    image: "/images/custom.png"
  },
  {
    id: "03",
    title: "Professional Treatment", 
    description: "Our certified technicians execute the treatment with precision and care.",
    image: "/images/professional.png"
  },
  {
    id: "04",
    title: "Follow-Up Support",
    description: "Regular check-ins and follow-up treatments ensure long-term protection and peace of mind.",
    image: "/images/follow-up-support.png"
  }
]

export function HowWeWorkSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="how-we-work-section" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Our proven 4-step process ensures effective pest elimination and lasting results
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, index) => {
            return (
              <div 
                key={step.id} 
                className={`bg-card rounded-2xl shadow-lg overflow-visible max-w-sm mx-auto transition-all duration-500 border border-border relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Section - Full width, rounded top corners */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-8 relative">
                  {/* Large Step Number with horizontal line */}
                  <div className="mb-6 relative">
                    <span className="text-5xl font-bold text-primary/25 font-display leading-none">
                      {step.id}
                    </span>
                    {/* Gradient line extending outside card, aligned with number */}
                    <div className="absolute top-1/2 -right-8 w-12 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full transform -translate-y-1/2" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-4 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}