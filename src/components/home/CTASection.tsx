'use client';

import { color, motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection } from '@/lib/animations';

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0F4A55] via-[#1F5F6A] to-[#0F4A55] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#F28C28]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm font-medium mb-6">
              <svg className="w-4 h-4 text-[#F28C28]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Start Your Journey Today
            </span>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-[#F28C28]">Future</span> with Technology?
            </h2>
          </AnimatedSection>

          {/* Subheadline */}
          <AnimatedSection delay={0.2}>
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join over 3,000 graduates who have launched successful careers in IT. 
              Our expert instructors and hands-on curriculum will prepare you for the 
              technology industry.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#F28C28] hover:bg-[#e07b1a] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#F28C28]/30 hover:-translate-y-1"
              >
                <span>Enroll Now</span>
                <motion.svg 
                  className="w-5 h-5"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
              
              <Link
                href="/programs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Browse Programs</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+234 802 462 9942</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>tashcomp4@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Ijebu Igbo, Ogun State</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
