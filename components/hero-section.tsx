"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/slmi.png" 
                alt="SLMI Pest Control Services" 
                width={40} 
                height={40} 
                className="h-10 w-auto"
                priority
              />
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              {["About", "Services", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-[#c83232] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-gray-900">
              <Phone className="w-4 h-4 text-[#c83232]" />
              <span className="text-base font-semibold">9580574211</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-6">
        {/* Black Rounded Container */}
        <div className="bg-[#0a0a0a] rounded-[4rem] lg:rounded-[4rem] overflow-hidden shadow-2xl min-h-[85vh] lg:h-[85vh] lg:min-h-[800px]">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col h-full">
            {/* Image Section */}
            <div className="relative p-6 pt-8 flex-shrink-0">
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
                <Image
                  src="/professional-pest-control-technician-in-white-prot.jpg"
                  alt="Professional pest control technician in protective gear treating a property"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="text-white px-8 pb-8 flex flex-col flex-1">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-[family-name:var(--font-poppins)] text-3xl font-bold leading-tight tracking-tight mb-4">
                Reliable Pest Control for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-base text-gray-400 mb-8 leading-relaxed">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-6">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-8 h-[48px] text-base font-semibold group w-full"
                >
                  Book now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Phone Number - Elegant Style */}
              <div className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
                <span className="text-lg font-medium">9580574211</span>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-0 h-full">
            {/* Left Content */}
            <div className="text-white px-10 py-12 lg:px-16 lg:py-16 flex flex-col justify-center">
              {/* Rating Badge */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c83232] text-[#c83232]" />
                  ))}
                </div>
                <span className="text-sm text-gray-400 font-medium">500+ ratings</span>
              </div>

              {/* Main Headline - Using Poppins */}
              <h1 className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
                Reliable Pest Control
                <br />
                for a Safer Tomorrow
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
                Available 24/7, dedicated to providing effective, eco-friendly pest solutions that protect your family, home, and business from unwanted pests.
              </p>

              {/* CTA Button */}
              <div className="mb-16">
                <Button 
                  size="lg"
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-9 h-[52px] text-base font-semibold group"
                >
                  Book now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div>
                  <h3 className="text-base text-white font-semibold mb-2">Experienced Professionals</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Certified experts delivering reliable results.</p>
                </div>
                <div>
                  <h3 className="text-base text-white font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Always ready for emergency pest control.</p>
                </div>
              </div>
            </div>

            {/* Right Image - With Padding and Rounded Corners */}
            <div className="relative p-6 flex items-center">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/professional-pest-control-technician-in-white-prot.jpg"
                  alt="Professional pest control technician in protective gear treating a property"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Hidden on Mobile */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-4 max-w-5xl mx-auto">
          {[
            { value: "3,000+", label: "Sites Treated" },
            { value: "8+", label: "Years Experience" },
            { value: "99.9%", label: "Success Rate" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-poppins)] text-5xl font-bold text-[#c83232] mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Marquee */}
      <div className="border-t border-gray-200 py-6 overflow-hidden bg-gray-50 mt-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mx-10">
              {["Termite Control", "Rodent Control", "Cockroach Control", "Bed Bug Control", "Mosquito Control"].map((service) => (
                <span 
                  key={service} 
                  className="text-xl font-bold text-gray-400 hover:text-[#c83232] transition-colors duration-300 cursor-pointer"
                >
                  {service} •
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
