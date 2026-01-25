'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
  accent: string;
}

const services: Service[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Computer Training',
    description: 'Comprehensive courses from basic literacy to advanced programming, designed for all skill levels.',
    features: ['Basic Computer Literacy', 'Advanced IT Courses', 'Hands-on Projects'],
    href: '/programs',
    accent: 'from-[#1F5F6A] to-[#0F4A55]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Professional Certifications',
    description: 'Prepare for globally recognized certifications that advance your career in IT.',
    features: ['CompTIA Prep', 'Cisco Certifications', 'Microsoft Credentials'],
    href: '/programs#certifications',
    accent: 'from-[#F28C28] to-[#e07b1a]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Resource Center',
    description: 'Access our well-equipped library, modern computer lab, and professional workshops.',
    features: ['IT Library', 'Computer Lab', 'Expert Seminars'],
    href: '/resources',
    accent: 'from-[#1F5F6A] to-[#0F4A55]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'IT Consulting',
    description: 'Custom IT solutions for businesses including network setup, software development, and support.',
    features: ['Network Setup', 'Web Development', 'IT Support'],
    href: '/consulting',
    accent: 'from-[#F28C28] to-[#e07b1a]',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-4">
            Comprehensive IT{' '}
            <span className="text-[#F28C28]">
              Education & Services
            </span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            From foundational skills to professional certifications, we provide 
            everything you need to succeed in the technology industry.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group h-full"
              >
                <Link href={service.href} className="block h-full">
                  <div className="relative h-full bg-[#F5F7F8] rounded-2xl p-8 overflow-hidden border border-transparent hover:border-[#1F5F6A]/20 transition-all duration-300">
                    {/* Gradient Overlay on Hover */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} 
                    />
                    
                    {/* Icon Container */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.accent} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0F4A55] mb-3 group-hover:text-[#F28C28] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                          <svg className="w-4 h-4 text-[#F28C28] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 text-[#F28C28] font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Learn More</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F28C28]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-16 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-xl hover:shadow-[#1F5F6A]/30 hover:-translate-y-1 transition-all duration-300"
          >
            View All Programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
