"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Plus, Minus } from "lucide-react"

const faqData = [
  {
    question: "Which is the best pest control service in Lucknow?",
    answer: "SLMI Pest Control is a licensed provider offering termite, rodent, cockroach, mosquito and bed bug treatments with BIS-certified products, SOP-driven service, and 24/7 support. We provide written scope, invoice and warranty options for full transparency."
  },
  {
    question: "Are your chemicals safe for kids and pets?",
    answer: "Yes. We use eco-friendly, BIS-approved formulations and share pre/post-treatment safety instructions. Sensitive areas (nurseries, kitchens, pet zones) are handled with extra precautions and targeted application methods to minimize exposure."
  },
  {
    question: "How much does termite treatment cost in Lucknow?",
    answer: "Typical guide rates: Pre-construction ₹5/sqft, Post-construction ₹6/sqft, and Porous Pipe ₹8/sqft. Final pricing depends on layout, access, and infestation. Book a free on-site survey for an exact written quote."
  },
  {
    question: "What is Porous Pipe termite treatment and why is it better?",
    answer: "Porous Pipe creates a recharge-friendly barrier below floors/foundations. Future re-treatment is easy (no repetitive drilling), protection is uniform, and downtime is minimal—ideal for homes, offices and showrooms needing long-term structural safety."
  },
  {
    question: "Do you provide written warranty? What does it cover?",
    answer: "Yes. Warranty terms vary by treatment type and site condition. We provide a written certificate covering service quality and specified re-visits within the warranty window. All terms are listed transparently in the approved scope."
  },
  {
    question: "How quickly can you respond to emergencies?",
    answer: "We operate a 24/7 response desk. In Lucknow city limits, same-day visits are typical. For nearby areas and Noida operations, timelines are shared when you call 9580574211."
  },
  {
    question: "What is your process from inspection to follow-up?",
    answer: "1) Free inspection & species ID • 2) Written plan (chemicals, safety, outcomes) • 3) Expert application by certified techs • 4) Documentation, prevention tips & scheduled follow-ups."
  },
  {
    question: "Do you handle apartments, villas, offices and restaurants?",
    answer: "Yes. We cover residential (flats, villas), commercial (offices, showrooms), and hospitality/food premises with HACCP-aware programs, area-wise scheduling and discreet service windows."
  },
  {
    question: "How long does a typical treatment take, and when is it effective?",
    answer: "Small homes: 1–3 hours; larger sites vary by scope. Gel and residuals act quickly; full control may take a few days as baits/gels circulate through colonies. We brief exact timelines during the survey."
  },
  {
    question: "Will there be odor, stains or disruption?",
    answer: "We prefer low-odor, stain-free gels and targeted residuals. For fogging, we coordinate timing and ventilation. Furniture/stock movement is advised only where absolutely necessary."
  },
  {
    question: "Do you offer AMCs and re-visit schedules?",
    answer: "Yes. AMC plans are available for homes, societies and businesses. They include periodic inspections, preventive treatments and priority support—ideal for kitchens, warehouses and high-traffic spaces."
  },
  {
    question: "Which areas do you serve?",
    answer: "Lucknow city (Gomti Nagar, Indira Nagar, Aliganj, Hazratganj, Ashiyana, Alambagh, Sarojini Nagar, Jankipuram, Rajajipuram, Vikas Nagar, and more) plus Noida. Call 9580574211 for coverage outside core zones."
  }
]

export function FaqPageContent() {
  const [isVisible, setIsVisible] = useState(false)
  const [openItems, setOpenItems] = useState<number[]>([])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="font-[family-name:var(--font-poppins)] text-5xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight tracking-tight">
              Questions
            </h1>
            <div className="w-24 h-px bg-[#c83232] mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Everything you need to know about our pest control services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-px">
              {faqData.map((faq, index) => {
                const isOpen = openItems.includes(index)
                
                return (
                  <div
                    key={index}
                    className={`border-b border-slate-100 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full py-12 text-left flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex-1 pr-8">
                        <h3 className="font-[family-name:var(--font-poppins)] text-xl lg:text-2xl font-light text-slate-900 leading-relaxed group-hover:text-[#c83232] transition-colors duration-500">
                          {faq.question}
                        </h3>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 flex items-center justify-center transition-all duration-500 ${
                          isOpen ? 'rotate-45' : ''
                        }`}>
                          {isOpen ? (
                            <Minus className="w-6 h-6 text-[#c83232]" />
                          ) : (
                            <Plus className="w-6 h-6 text-slate-400 group-hover:text-[#c83232] transition-colors duration-500" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-700 ease-out ${
                      isOpen ? 'max-h-96 opacity-100 pb-12' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="pr-20">
                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-light text-slate-900 mb-12 leading-tight">
              Need more information?
            </h2>
            
            <div className="space-y-6">
              <a 
                href="tel:9580574211"
                className="block group"
              >
                <div className="flex items-center justify-center gap-4 py-6 border-b border-slate-200 group-hover:border-[#c83232] transition-colors duration-500">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-[#c83232] transition-colors duration-500" />
                  <span className="text-xl font-light text-slate-900 group-hover:text-[#c83232] transition-colors duration-500">
                    9580574211
                  </span>
                </div>
              </a>
              
              <a 
                href="mailto:sales@slmi.in"
                className="block group"
              >
                <div className="flex items-center justify-center gap-4 py-6 border-b border-slate-200 group-hover:border-[#c83232] transition-colors duration-500">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-[#c83232] transition-colors duration-500" />
                  <span className="text-xl font-light text-slate-900 group-hover:text-[#c83232] transition-colors duration-500">
                    sales@slmi.in
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}