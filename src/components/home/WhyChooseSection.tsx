'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/lib/animations';

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Industry-Aligned Curriculum',
    description: 'Our courses are designed with input from industry leaders, ensuring you learn skills that employers actually need.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Experienced Instructors',
    description: 'Learn from professionals with years of industry experience who bring real-world insights to every class.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Practical Training',
    description: 'Hands-on projects and lab sessions ensure you gain practical experience, not just theoretical knowledge.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Personalized Mentorship',
    description: 'Each student receives individual attention and guidance tailored to their unique learning pace and goals.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Modern Facilities',
    description: 'State-of-the-art computer labs with high-speed internet, latest software, and comfortable learning spaces.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Recognized Certifications',
    description: 'Prepare for globally recognized certifications from CompTIA, Cisco, and Microsoft that boost your career.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F7F8]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#F28C28] to-[#e07b1a] rounded-full text-white text-sm font-medium mb-4 shadow-sm shadow-[#F28C28]/30">
              Why Choose TASHICO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-6 leading-tight">
              A Decade of{' '}
              <span className="text-[#F28C28]">
                Excellence
              </span>{' '}
              in IT Education
            </h2>
            <p className="text-[#4A4A4A] text-lg mb-8 leading-relaxed">
              Since 2010, TASHICO has been at the forefront of technology education 
              in Ogun State. We don&apos;t just teach computers — we build careers, 
              transform lives, and create the next generation of tech leaders.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-2xl shadow-lg shadow-[#1F5F6A]/5">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#F28C28]">15+</div>
                <div className="text-sm text-[#4A4A4A]">Years</div>
              </div>
              <div className="text-center border-x border-[#F5F7F8]">
                <div className="text-2xl lg:text-3xl font-bold text-[#F28C28]">3K+</div>
                <div className="text-sm text-[#4A4A4A]">Graduates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#F28C28]">400+</div>
                <div className="text-sm text-[#4A4A4A]">IT Pros</div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-[#1F5F6A]/10 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#0F4A55] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
