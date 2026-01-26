'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

const resources = [
  {
    id: 'library',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'IT Library',
    description: 'Access our comprehensive collection of IT books, journals, and research materials covering the latest in technology.',
    features: [
      'Updated books on programming, networking, and cybersecurity',
      'Industry journals and technical publications',
      'Research materials and case studies',
      'Reference guides for certification exams',
      'Digital resources and e-books',
      'Quiet study areas for focused learning',
    ],
    image: '/resources/library.jpg',
  },
  {
    id: 'lab',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Computer Laboratory',
    description: 'Practice and develop your skills in our state-of-the-art computer lab equipped with modern systems and software.',
    features: [
      'Modern computer systems with latest specifications',
      'High-speed internet connectivity',
      'Licensed professional software suites',
      'Network simulation equipment',
      'Comfortable ergonomic workstations',
      'Technical support available',
    ],
    image: '/resources/lab.jpg',
  },
  {
    id: 'workshops',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Workshops & Seminars',
    description: 'Learn from industry experts through our regular workshops and seminars on emerging technologies and career development.',
    features: [
      'Regular sessions with tech industry professionals',
      'Hands-on technical workshops',
      'Career development seminars',
      'Networking opportunities with experts',
      'Certificate of participation',
      'Q&A sessions with speakers',
    ],
    image: '/resources/workshop.jpg',
  },
];

const upcomingEvents = [
  {
    title: 'Introduction to Cloud Computing',
    date: 'February 15, 2026',
    speaker: 'Industry Expert',
    type: 'Workshop',
  },
  {
    title: 'Career Paths in Cybersecurity',
    date: 'February 22, 2026',
    speaker: 'Security Professional',
    type: 'Seminar',
  },
  {
    title: 'Web Development Best Practices',
    date: 'March 5, 2026',
    speaker: 'Senior Developer',
    type: 'Workshop',
  },
];

export default function ResourcesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F4A55 0%, #1F5F6A 25%, #0F4A55 50%, #1a3a40 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#F28C28]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1F5F6A]/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] backdrop-blur-md rounded-full border border-[#1F5F6A]/30 mb-8 shadow-lg shadow-[#1F5F6A]/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C28] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F28C28]"></span>
                </span>
                <span className="text-sm font-medium text-white">
                  Resource Center
                </span>
                <span className="px-3 py-1 bg-[#F28C28] text-white text-xs font-bold rounded-full shadow-sm shadow-[#F28C28]/30">
                  Open Access
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Hub for{' '}
                <span className="text-[#F28C28]">
                  Learning & Growth
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Access our comprehensive IT library, modern computer laboratory, 
                and professional workshops designed to support your learning journey.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {resources.map((resource, index) => (
              <AnimatedSection key={resource.id} delay={0.1}>
                <div 
                  id={resource.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] text-white mb-6">
                      {resource.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
                      {resource.title}
                    </h2>
                    <p className="text-lg text-[#4A4A4A] mb-8 leading-relaxed">
                      {resource.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {resource.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#F28C28]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#4A4A4A] text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="aspect-[4/3] bg-gradient-to-br from-[#1F5F6A]/10 to-[#F28C28]/10 rounded-2xl overflow-hidden flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-[#F28C28]/10 rounded-full flex items-center justify-center text-[#F28C28]">
                          {resource.icon}
                        </div>
                        <p className="text-[#4A4A4A] font-medium">{resource.title}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Upcoming Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              Workshops &{' '}
              <span className="text-[#F28C28]">
                Seminars
              </span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Join our upcoming events and learn from industry experts
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 bg-[#F28C28]/10 text-[#F28C28] text-xs font-medium rounded-full mb-4">
                    {event.type}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F4A55] mb-3">
                    {event.title}
                  </h3>
                  <div className="space-y-2 text-sm text-[#4A4A4A]">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {event.speaker}
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Register for Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Access CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#0F4A55] to-[#1F5F6A]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Access Our Resources?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Our Resource Center is available to enrolled students and community 
                members. Contact us to learn about access options and membership.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F28C28] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get Access
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Programs
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
