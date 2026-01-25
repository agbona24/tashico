'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Network Setup & Configuration',
    description: 'Professional network infrastructure design and implementation for businesses of all sizes.',
    features: [
      'LAN/WAN design and setup',
      'Router and switch configuration',
      'Network security implementation',
      'WiFi solutions',
      'VPN setup',
      'Network monitoring',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs and workflows.',
    features: [
      'Custom application development',
      'Business process automation',
      'Database design and management',
      'API development and integration',
      'Mobile app development',
      'Legacy system modernization',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Website Development',
    description: 'Professional, responsive websites that represent your brand and drive results.',
    features: [
      'Corporate website design',
      'E-commerce solutions',
      'Content management systems',
      'SEO optimization',
      'Website maintenance',
      'Hosting solutions',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'IT Support & Maintenance',
    description: 'Reliable ongoing technical support and system maintenance for your business.',
    features: [
      'Help desk support',
      'Hardware troubleshooting',
      'Software installation and updates',
      'System backup solutions',
      'Preventive maintenance',
      'Emergency support',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Cybersecurity Services',
    description: 'Protect your business from digital threats with comprehensive security solutions.',
    features: [
      'Security audits and assessments',
      'Firewall configuration',
      'Anti-malware solutions',
      'Employee security training',
      'Incident response planning',
      'Compliance consulting',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Counseling',
    description: 'Expert guidance for students and professionals navigating IT career paths.',
    features: [
      'Career path assessment',
      'Skills gap analysis',
      'Resume and portfolio review',
      'Interview preparation',
      'Certification guidance',
      'Industry connections',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We start by understanding your needs, challenges, and goals through a detailed consultation.',
  },
  {
    step: '02',
    title: 'Assessment',
    description: 'Our experts conduct a thorough assessment of your current systems and requirements.',
  },
  {
    step: '03',
    title: 'Proposal',
    description: 'We present a customized solution with clear timelines, deliverables, and pricing.',
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Our team executes the project with regular updates and minimal disruption to your operations.',
  },
  {
    step: '05',
    title: 'Support',
    description: 'We provide ongoing support and maintenance to ensure long-term success.',
  },
];

export default function ConsultingPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-[#F5F7F8] via-white to-[#F5F7F8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#1F5F6A]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F28C28]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-6">
                Consulting Services
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F4A55] mb-6 leading-tight">
                Customized{' '}
                <span className="text-[#F28C28]">
                  IT Solutions
                </span>{' '}
                for Business
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl mx-auto">
                Partner with our experienced team for tailored IT solutions that 
                drive efficiency, security, and growth for your organization.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get a Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+2348024629942"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F4A55] font-semibold rounded-full border-2 border-[#0F4A55]/20 hover:border-[#F28C28] hover:text-[#F28C28] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              Comprehensive{' '}
              <span className="text-[#F28C28]">
                IT Services
              </span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              From network infrastructure to software development, we provide 
              end-to-end IT solutions for your business
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-[#F5F7F8] rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F4A55] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#4A4A4A] mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                        <svg className="w-4 h-4 text-[#F28C28] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              How We{' '}
              <span className="text-[#F28C28]">
                Work
              </span>
            </h2>
            <p className="text-[#4A4A4A] max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery and client satisfaction
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1F5F6A] to-[#F28C28] hidden md:block" />

              <div className="space-y-8">
                {process.map((item, index) => (
                  <AnimatedSection key={item.step} delay={index * 0.1}>
                    <div className="flex gap-6 md:gap-12 items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-[#0F4A55] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[#4A4A4A]">{item.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-[#0F4A55] to-[#1F5F6A] relative overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6">
                Why Choose TASHICO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Trusted{' '}
                <span className="text-[#F28C28]">IT Partner</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                With over 15 years of experience in IT education and consulting, 
                TASHICO brings deep expertise and local understanding to every project.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { value: '15+', label: 'Years Experience' },
                  { value: '100+', label: 'Business Clients' },
                  { value: '24/7', label: 'Support Available' },
                  { value: '100%', label: 'Client Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-4">
                    <div className="text-3xl font-bold text-[#F28C28]">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get a Free Consultation
                </h3>
                <p className="text-white/80 mb-6">
                  Tell us about your IT needs and we&apos;ll provide a customized solution proposal.
                </p>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 bg-[#F28C28] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Request Consultation
                  </Link>
                  <a
                    href="tel:+2348024629942"
                    className="block w-full text-center px-6 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    Call: +234 802 462 9942
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
