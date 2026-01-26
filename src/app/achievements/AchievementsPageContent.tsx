'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 3000,
    suffix: '+',
    label: 'Graduates Trained',
    description: 'Successfully completed our comprehensive programs',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Serving the community since August 2010',
  },
  {
    value: 400,
    suffix: '+',
    label: 'IT Professionals',
    description: 'Alumni now working in tech roles globally',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Partner Organizations',
    description: 'Tech companies and educational institutions',
  },
];

const achievements = [
  {
    year: '2024',
    title: '3,000 Graduate Milestone',
    description: 'Celebrated training our 3,000th graduate, marking a significant milestone in our mission to democratize IT education.',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Expanded Digital Literacy Outreach',
    description: 'Extended our community digital literacy programs to reach more underserved areas in Ogun State.',
    icon: '🌍',
  },
  {
    year: '2022',
    title: 'Partnership with Mkan Ogun State',
    description: 'Established strategic partnership for digital literacy initiatives across Mkan Ijebu North/East District and Mkan Ogun State.',
    icon: '🤝',
  },
  {
    year: '2020',
    title: '10 Year Anniversary',
    description: 'Celebrated a decade of transforming lives through technology education in Ijebu Igbo and beyond.',
    icon: '🎉',
  },
  {
    year: '2019',
    title: 'Facility Modernization',
    description: 'Major upgrade to our computer laboratory with state-of-the-art systems and high-speed internet connectivity.',
    icon: '💻',
  },
  {
    year: '2016',
    title: 'Certification Center Status',
    description: 'Became an authorized center for CompTIA, Cisco, and Microsoft certification preparation.',
    icon: '📜',
  },
];

const partnerships = [
  { name: 'CompTIA', type: 'Certification Partner' },
  { name: 'Cisco', type: 'Certification Partner' },
  { name: 'Microsoft', type: 'Certification Partner' },
  { name: 'Mkan Ijebu North/East', type: 'Community Partner' },
  { name: 'Mkan Ogun State', type: 'Community Partner' },
  { name: 'Local Tech Companies', type: 'Industry Partner' },
];

function AnimatedCounter({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number; 
  suffix: string; 
  inView: boolean 
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => setDisplayValue(Math.round(obj.val)),
      });
    }
  }, [inView, value]);

  return <span>{displayValue.toLocaleString()}{suffix}</span>;
}

export default function AchievementsPageContent() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

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
                  Achievements & Impact
                </span>
                <span className="px-3 py-1 bg-[#F28C28] text-white text-xs font-bold rounded-full shadow-sm shadow-[#F28C28]/30">
                  15+ Years
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                A Decade of{' '}
                <span className="text-[#F28C28]">
                  Transforming Lives
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Since 2010, TASHICO has been on a mission to empower individuals through 
                technology education. Our achievements reflect our commitment to excellence 
                and community impact.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-20 lg:py-28 bg-gradient-to-r from-[#0F4A55] via-[#1F5F6A] to-[#0F4A55] relative overflow-hidden"
      >
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
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in{' '}
              <span className="text-[#F28C28]">Numbers</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center border border-white/10"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-white/60 text-sm">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Key Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              Our Journey of{' '}
              <span className="text-[#F28C28]">
                Excellence
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F5F6A] via-[#F28C28] to-[#1F5F6A] hidden md:block" />

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <AnimatedSection key={achievement.title} delay={index * 0.1}>
                    <div className="flex gap-6 md:gap-12 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-full flex items-center justify-center text-2xl shadow-lg">
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1 bg-[#F5F7F8] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                        <span className="inline-block px-3 py-1 bg-[#F28C28]/10 text-[#F28C28] text-xs font-medium rounded-full mb-3">
                          {achievement.year}
                        </span>
                        <h3 className="text-xl font-bold text-[#0F4A55] mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-[#4A4A4A]">{achievement.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Strategic Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              Our{' '}
              <span className="text-[#F28C28]">
                Partners
              </span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              We collaborate with leading technology companies and community organizations 
              to deliver world-class education
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partnerships.map((partner) => (
              <StaggerItem key={partner.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1F5F6A]/10 to-[#F28C28]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#F28C28]">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F4A55] mb-1">
                    {partner.name}
                  </h3>
                  <span className="text-sm text-[#F28C28]">{partner.type}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
                Community Outreach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-6">
                Bridging the{' '}
                <span className="text-[#F28C28]">Digital Divide</span>
              </h2>
              <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                Our commitment extends beyond the classroom. Through strategic partnerships 
                with Mkan Ijebu North/East District and Mkan Ogun State, we conduct 
                digital literacy outreach programs to empower underserved communities.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free digital literacy workshops for community members',
                  'Youth technology training programs',
                  'Partnership with local schools for IT education',
                  'Career guidance for young professionals',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#1F5F6A]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
              >
                Partner With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="aspect-square bg-gradient-to-br from-[#1F5F6A]/10 to-[#F28C28]/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-full flex items-center justify-center text-white">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F4A55] mb-2">Community Impact</h3>
                  <p className="text-[#4A4A4A]">Making a difference in Ogun State</p>
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
                Be Part of Our Success Story
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join the thousands of graduates who have transformed their careers 
                and lives through TASHICO&apos;s comprehensive IT education programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#F28C28] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Enroll Today
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
