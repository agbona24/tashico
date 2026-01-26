'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from curriculum design to student support.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Community',
    description: 'We are committed to bridging the digital divide and empowering our local community through accessible education.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Innovation',
    description: 'We continuously update our programs to reflect the latest industry trends and technological advancements.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical standards in all our interactions.',
  },
];

const milestones = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'TASHICO TECH and Resources Management was established in August 2010 in Ijebu Igbo, Ogun State.',
  },
  {
    year: '2013',
    title: 'First 500 Graduates',
    description: 'Celebrated our first 500 graduates successfully completing various IT programs.',
  },
  {
    year: '2016',
    title: 'Certification Partnership',
    description: 'Became an authorized center for CompTIA, Cisco, and Microsoft certifications.',
  },
  {
    year: '2019',
    title: 'Facility Expansion',
    description: 'Expanded our facilities with a modern computer lab and resource center.',
  },
  {
    year: '2022',
    title: 'Community Outreach',
    description: 'Launched digital literacy initiatives in partnership with Mkan Ijebu North/East District.',
  },
  {
    year: '2024',
    title: '3,000+ Graduates',
    description: 'Reached the milestone of over 3,000 graduates with 400+ working in IT globally.',
  },
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F4A55 0%, #1F5F6A 25%, #0F4A55 50%, #1a3a40 100%)' }}>
        {/* Background Elements */}
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
                  About TASHICO
                </span>
                <span className="px-3 py-1 bg-[#F28C28] text-white text-xs font-bold rounded-full shadow-sm shadow-[#F28C28]/30">
                  Since 2010
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A Legacy of{' '}
                <span className="text-[#F28C28]">
                  Excellence
                </span>{' '}
                Since 2010
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                TASHICO TECH and Resources Management has been a cornerstone of 
                technological education and professional development in Ijebu North, 
                Ogun State for over a decade.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">TASHICO TECH</p>
                      <p className="text-sm opacity-70">Est. 2010</p>
                    </div>
                  </div>
                </div>
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F28C28]">15+</div>
                    <div className="text-sm text-[#4A4A4A]">Years of<br />Excellence</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-6">
                  Building the Foundation for Digital Excellence
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  Founded in August 2010, TASHICO TECH and Resources Management 
                  emerged from a vision to democratize technology education in Ijebu North, 
                  Ogun State. What started as a modest training center has grown into a 
                  comprehensive institution serving thousands of students.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  Today, we stand proud as a beacon of technological education, having 
                  trained over 3,000 graduates, with more than 400 of our alumni now 
                  working in IT roles across Nigeria and globally. Our commitment to 
                  quality education, practical training, and individual mentorship has 
                  made us the preferred choice for aspiring IT professionals.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex items-center gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    View Programs
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#F28C28] font-semibold hover:underline"
                  >
                    Contact Us
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CEO/Founder Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* CEO Image */}
            <AnimatedSection>
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-[#1F5F6A]/20">
                  <img
                    src="/ceo.jpeg"
                    alt="Jimoh Ayinde M - CEO of TASHICO TECH"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F28C28]/20 rounded-full blur-2xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#1F5F6A]/10 rounded-full blur-2xl" />
                {/* Quote Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F28C28] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0F4A55]">Founder & CEO</div>
                      <div className="text-xs text-[#4A4A4A]">Since 2010</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* CEO Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
                  Meet Our Founder
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-2">
                  Jimoh Ayinde M.
                </h2>
                <p className="text-lg text-[#F28C28] font-medium mb-6">
                  Founder & Chief Executive Officer
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  With a passion for technology education and community development, 
                  Jimoh Ayinde M. founded TASHICO TECH and Resources Management in 2010 
                  with a clear mission: to bridge the digital divide in Ijebu North and 
                  empower individuals with practical IT skills.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                  Under his visionary leadership, TASHICO has grown from a small training 
                  center to a comprehensive technology institution, training over 3,000 
                  graduates and producing 400+ IT professionals who now work across Nigeria 
                  and globally. His commitment to quality education and hands-on training 
                  continues to transform lives and careers.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-white rounded-2xl p-6 border-l-4 border-[#F28C28]">
                  <p className="text-[#4A4A4A] italic mb-4">
                    &ldquo;Technology is the great equalizer. Our mission is to ensure that 
                    everyone, regardless of background, has access to quality IT education 
                    that can transform their future.&rdquo;
                  </p>
                  <p className="text-[#0F4A55] font-semibold">— Jimoh Ayinde M.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#0F4A55] via-[#1F5F6A] to-[#0F4A55] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-white/90 text-sm font-medium mb-6">
                Our Mission
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Empowering Individuals,{' '}
                <span className="text-[#F28C28]">Bridging the Digital Divide</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-white/80 leading-relaxed">
                To empower individuals with the knowledge and practical skills required 
                to excel in the ever-evolving field of information technology, while 
                bridging the digital divide through accessible, affordable, and 
                comprehensive computer education.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-4">
              What Drives{' '}
              <span className="text-[#F28C28]">
                Our Success
              </span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-xl flex items-center justify-center text-white mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F4A55] mb-3">{value.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{value.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-4">
              Milestones That{' '}
              <span className="text-[#F28C28]">
                Define Us
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F5F6A] via-[#F28C28] to-[#1F5F6A] hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <AnimatedSection key={milestone.year} delay={index * 0.1}>
                    <div className="flex gap-6 md:gap-12 items-start">
                      {/* Year Badge */}
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {milestone.year}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 bg-[#F5F7F8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-[#0F4A55] mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-[#4A4A4A]">{milestone.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
                Visit Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-6">
                Located in the Heart of{' '}
                <span className="text-[#F28C28]">Ijebu Igbo</span>
              </h2>
              <p className="text-[#4A4A4A] mb-8 leading-relaxed">
                Our institute is conveniently located in Ijebu Igbo, Ogun State, 
                making us accessible to students across the Ijebu North region 
                and beyond. We welcome prospective students, parents, and partners 
                to visit our facilities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F5F6A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F4A55]">Address</h4>
                    <p className="text-[#4A4A4A]">
                      6, Ajegunle Street, Oke Sopen,<br />
                      Ijebu Igbo, Ogun State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F5F6A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0F4A55]">Operating Hours</h4>
                    <p className="text-[#4A4A4A]">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.2}>
              <div className="aspect-square bg-gradient-to-br from-[#1F5F6A]/10 to-[#F28C28]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-[#1F5F6A]/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-[#4A4A4A] font-medium">Interactive Map</p>
                  <p className="text-sm text-[#4A4A4A]/60">Ijebu Igbo, Ogun State</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#0F4A55] to-[#1F5F6A]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of successful graduates who have transformed their 
                careers through TASHICO&apos;s comprehensive IT education programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F28C28] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Enroll Now
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Programs
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
