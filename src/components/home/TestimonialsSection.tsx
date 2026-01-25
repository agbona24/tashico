'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/lib/animations';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  program: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adewale Ogundimu',
    role: 'Software Developer',
    company: 'Tech Solutions Ltd',
    image: '/testimonials/student1.jpg',
    quote: 'TASHICO gave me the foundation I needed to launch my career in tech. The practical approach to learning and the mentorship I received were invaluable. Today, I work as a developer at a leading tech company.',
    program: 'Advanced Programming',
  },
  {
    id: 2,
    name: 'Funke Adeyemi',
    role: 'Network Administrator',
    company: 'Federal Ministry of Education',
    image: '/testimonials/student2.jpg',
    quote: 'The Cisco certification preparation at TASHICO was thorough and professional. The instructors didn\'t just teach us to pass exams — they prepared us for real-world networking challenges.',
    program: 'Cisco Certification',
  },
  {
    id: 3,
    name: 'Olumide Bakare',
    role: 'IT Manager',
    company: 'First Bank Nigeria',
    image: '/testimonials/student3.jpg',
    quote: 'I started with basic computer literacy and went on to complete multiple certifications at TASHICO. The supportive environment and quality instruction helped me rise to IT management level.',
    program: 'Microsoft Certification',
  },
  {
    id: 4,
    name: 'Chidinma Okafor',
    role: 'Web Developer',
    company: 'Freelance',
    image: '/testimonials/student4.jpg',
    quote: 'The web development course at TASHICO was comprehensive and up-to-date. I now run my own freelance business, building websites for clients across Nigeria and beyond.',
    program: 'Web Development',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-4">
            What Our{' '}
            <span className="text-[#F28C28]">
              Alumni Say
            </span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-lg">
            Hear from graduates who have transformed their careers through our programs
          </p>
        </AnimatedSection>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-[#F5F7F8] to-white rounded-3xl p-8 lg:p-12 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-[#F28C28]/10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Program Badge */}
                <span className="inline-block px-3 py-1 bg-[#F28C28]/10 text-[#F28C28] text-sm font-medium rounded-full mb-6">
                  {testimonials[activeIndex].program}
                </span>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-[#4A4A4A] leading-relaxed mb-8 font-medium">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F4A55] text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-[#4A4A4A] text-sm">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#1F5F6A]/5 to-transparent rounded-tr-full" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-[#F5F7F8] hover:bg-[#F28C28] text-[#F28C28] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-[#F28C28]'
                      : 'bg-[#F28C28]/20 hover:bg-[#F28C28]/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-[#F5F7F8] hover:bg-[#F28C28] text-[#F28C28] hover:text-white rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Trust Logos */}
        <AnimatedSection className="mt-20">
          <p className="text-center text-[#4A4A4A]/60 text-sm mb-8 uppercase tracking-wider">
            Our alumni work at leading organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-50">
            {['Tech Company', 'Bank', 'Government', 'Education', 'Startup'].map((company) => (
              <div
                key={company}
                className="px-6 py-3 bg-[#F5F7F8] rounded-lg text-[#4A4A4A] font-medium"
              >
                {company}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
