"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Star, Menu, X, CheckCircle, Users, Target, Award, Bug, Zap, Home, Bed, MousePointer, Hexagon } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export function AboutUsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    if (href === "/") {
      window.location.href = "/"
    } else if (href.startsWith("/#")) {
      window.location.href = href
    }
  }

  const stats = [
    { value: "5,000+", label: "Curated Products" },
    { value: "800+", label: "Curated Products" },
    { value: "40+", label: "Product Categories" }
  ]

  const services = [
    { name: "Cockroach Control", icon: <Bug className="w-6 h-6" /> },
    { name: "Mosquito Control", icon: <Zap className="w-6 h-6" /> }, 
    { name: "Termite Control", icon: <Home className="w-6 h-6" /> },
    { name: "Bed Bugs Control", icon: <Bed className="w-6 h-6" /> },
    { name: "Rodent Control", icon: <MousePointer className="w-6 h-6" /> },
    { name: "Ant Control", icon: <Hexagon className="w-6 h-6" /> }
  ]

  const whyChooseUs = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Nationwide Coverage",
      description: "With our expanded presence across India, we now offer our comprehensive pest control services to customers in urban and rural areas alike."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Expertise", 
      description: "Our team consists of skilled technicians and pest control experts who undergo rigorous training and stay updated on the latest techniques and technologies in the industry."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Cutting-Edge Solutions",
      description: "We utilize advanced pest control methods and products to ensure effective pest eradication while minimizing environmental impact."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Customer-Centric Approach",
      description: "Customer satisfaction is our top priority. We take the time to understand each customer's unique needs and concerns, providing personalized solutions and ongoing support."
    }
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="text-[#c83232] text-sm font-semibold tracking-wide uppercase mb-6 block">
                About Us
              </span>
              <h1 className="font-[family-name:var(--font-poppins)] text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Nationwide Pest Control
                <br />
                <span className="text-[#c83232]">Solution</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
                We Are At All Over India
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                SLMI Pest Control has proudly expanded its services to cater to the pest control needs of customers across India. With a commitment to excellence and a focus on customer satisfaction, we have established ourselves as a trusted name in the pest control industry nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-[#c83232] text-[#c83232] hover:bg-[#c83232] hover:text-white rounded-full px-8 h-14 text-base font-semibold group cursor-pointer"
                  onClick={() => window.open('tel:9580574211', '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
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
                  alt="SLMI Pest Control - Professional pest management services across India"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Numbers Speak For Themselves!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-[family-name:var(--font-poppins)] text-5xl lg:text-6xl font-bold text-[#c83232] mb-2">
                  {stat.value}
                </p>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our mission is to provide high-quality pest control services that exceed customer expectations while ensuring the safety and well-being of our clients, their families, and their properties. We strive to deliver effective solutions tailored to the unique needs of each customer, backed by our years of experience and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SLMI Pest Control?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c83232]/10 rounded-xl flex items-center justify-center text-[#c83232]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#c83232]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              SLMI Pest Control offers a <span className="text-[#c83232] font-semibold">wide range</span> of pest management solutions to address various pest infestations, including:
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#c83232]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#c83232]/10 rounded-xl flex items-center justify-center text-[#c83232] group-hover:bg-[#c83232] group-hover:text-white transition-all duration-300 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#c83232] transition-colors duration-300">{service.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 font-medium">and <span className="text-[#c83232] font-semibold">more</span>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Reach Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              <span className="text-[#c83232]">Nationwide</span> Reach
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12">
              With our expanded network of branches and service centers, we are equipped to serve customers in cities, towns, and remote locations across India. Whether you're in a bustling metropolis or a tranquil countryside, <span className="text-[#c83232] font-semibold">SLMI Pest Control</span> is your trusted partner for pest management solutions.
            </p>
            
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let Us <span className="text-[#c83232]">Protect</span> Your Home and Business
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At SLMI Pest Control, we understand the importance of protecting your home, business, and loved ones from pests. With our nationwide presence and unwavering commitment to quality, reliability, and customer satisfaction, we are proud to be your <span className="text-[#c83232] font-semibold">premier pest control solution provider</span> across India.
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Join Our <span className="text-[#c83232]">Nationwide Network</span>
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join the thousands of satisfied customers who trust SLMI Pest Control for all their pest management needs. With our nationwide reach and unmatched expertise, we are your <span className="text-[#c83232] font-semibold">reliable partner</span> in pest control, wherever you may be in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-[family-name:var(--font-poppins)] text-3xl lg:text-4xl font-bold mb-6">
              Contact Us
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed mb-10">
              Experience the difference with SLMI Pest Control. Contact us today to schedule a consultation or service appointment and take the first step towards a pest-free environment, wherever you are in India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-[#c83232] hover:bg-[#a82828] text-white rounded-full px-10 h-14 text-base font-semibold group cursor-pointer"
                onClick={() => window.location.href = "/contact"}
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
           
            
            
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}