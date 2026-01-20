"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

export function ContactUsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    setIsMounted(true)
  }, [])

  // Dynamic import for Google Form to avoid hydration issues
  const GoogleForm = dynamic(() => import('./google-form').then(mod => ({ default: mod.GoogleForm })), {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg" style={{ minHeight: '800px' }}>
        <p className="text-gray-600">Loading contact form...</p>
      </div>
    )
  })

  const handlePhoneCall = () => {
    if (isMounted) {
      window.open('tel:+919580574211', '_self')
    }
  }

  const handleEmailClick = () => {
    if (isMounted) {
      window.open('mailto:info@slmipestcontrol.com', '_self')
    }
  }

  const handleScrollToForm = () => {
    if (isMounted) {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "(+91)-95805-74211",
      description: "Available 24/7 for emergency pest control",
      action: handlePhoneCall
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us", 
      details: "info@slmipestcontrol.com",
      description: "Get detailed quotes and information",
      action: handleEmailClick
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "Lucknow, Uttar Pradesh",
      description: "Serving across India",
      action: () => {}
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "24/7 Available",
      description: "Emergency services anytime",
      action: () => {}
    }
  ]

  const whyContactUs = [
    "Free property inspection and consultation",
    "Customized pest control solutions",
    "Eco-friendly and safe treatments",
    "Licensed and certified technicians",
    "Guaranteed results with follow-up support",
    "Competitive pricing with transparent quotes"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Add padding top to account for fixed navbar */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-6 block">
                Contact Us
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Free
                <br />
                <span className="text-[#c83232]">Pest Inspection</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Ready to protect your property from pests? Contact SLMI Pest Control today for professional, eco-friendly pest management solutions. Our certified experts are available 24/7 to help you maintain a pest-free environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                  onClick={handlePhoneCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-[#c83232] text-[#c83232] hover:bg-[#c83232] hover:text-white rounded-full px-8 h-14 text-base font-semibold group cursor-pointer"
                  onClick={handleScrollToForm}
                >
                  Fill Form Below
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className={`mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="relative w-full h-[400px] lg:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src="/images/pest-control-main.jpg"
                  alt="SLMI Pest Control - Professional consultation and inspection services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Form Section - Moved to Top */}
      <section id="contact-form" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Request Your <span className="text-[#c83232]">Free Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our pest control experts will contact you within 24 hours to schedule your free property inspection.
              </p>
            </div>
            
            {/* Google Form Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-6 lg:p-8">
                <GoogleForm />
              </div>
            </div>
            
            {/* Form Footer */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 mb-4">
                Having trouble with the form? Contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline"
                  className="border-2 border-[#c83232] text-[#c83232] hover:bg-[#c83232] hover:text-white rounded-full px-6 h-12 text-sm font-semibold cursor-pointer"
                  onClick={handlePhoneCall}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (+91)-95805-74211
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-[#c83232] text-[#c83232] hover:bg-[#c83232] hover:text-white rounded-full px-6 h-12 text-sm font-semibold cursor-pointer"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to <span className="text-[#c83232]">Reach Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our pest control experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                onClick={info.action}
              >
                <div className="w-12 h-12 bg-[#c83232]/10 rounded-xl flex items-center justify-center text-[#c83232] group-hover:bg-[#c83232] group-hover:text-white transition-all duration-300 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-[#c83232] font-semibold mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-[#c83232]">SLMI Pest Control?</span>
              </h2>
              <p className="text-lg text-gray-600">
                When you contact us, you're choosing India's trusted pest control experts
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whyContactUs.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#c83232] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}