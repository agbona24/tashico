'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/lib/animations';

interface Course {
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: string[];
}

interface Program {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  courses: Course[];
  accent: string;
}

const programs: Program[] = [
  {
    id: 'basic',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Basic Computer Literacy',
    subtitle: 'Foundation for Digital Success',
    description: 'Start your technology journey with comprehensive courses covering computer fundamentals, operating systems, and essential software applications.',
    courses: [
      {
        title: 'Introduction to Computers',
        duration: '4 Weeks',
        level: 'Beginner',
        description: 'Learn computer hardware basics, operating system navigation, and essential computing concepts.',
        topics: ['Computer Hardware', 'Windows/Mac OS', 'File Management', 'Basic Troubleshooting'],
      },
      {
        title: 'Microsoft Office Suite',
        duration: '6 Weeks',
        level: 'Beginner',
        description: 'Master essential office productivity tools including Word, Excel, PowerPoint, and more.',
        topics: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Outlook'],
      },
      {
        title: 'Internet & Digital Communication',
        duration: '3 Weeks',
        level: 'Beginner',
        description: 'Navigate the internet safely and effectively, including email, search, and online communication.',
        topics: ['Web Browsing', 'Email Management', 'Internet Safety', 'Cloud Storage'],
      },
    ],
    accent: 'from-[#1F5F6A] to-[#0F4A55]',
  },
  {
    id: 'advanced',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Advanced IT Courses',
    subtitle: 'Professional-Level Training',
    description: 'Take your skills to the next level with industry-focused courses in programming, web development, database management, and cybersecurity.',
    courses: [
      {
        title: 'Programming Fundamentals',
        duration: '12 Weeks',
        level: 'Intermediate',
        description: 'Learn programming concepts and practices using popular languages like Python and JavaScript.',
        topics: ['Python Programming', 'JavaScript Basics', 'Data Structures', 'Problem Solving'],
      },
      {
        title: 'Web Development',
        duration: '16 Weeks',
        level: 'Intermediate',
        description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks.',
        topics: ['HTML5 & CSS3', 'JavaScript & React', 'Responsive Design', 'Web APIs'],
      },
      {
        title: 'Database Management',
        duration: '8 Weeks',
        level: 'Intermediate',
        description: 'Design and manage databases using SQL and popular database management systems.',
        topics: ['SQL Fundamentals', 'MySQL/PostgreSQL', 'Database Design', 'Data Security'],
      },
      {
        title: 'Cybersecurity Essentials',
        duration: '10 Weeks',
        level: 'Intermediate',
        description: 'Understand cybersecurity principles, threats, and defense strategies to protect digital assets.',
        topics: ['Network Security', 'Threat Detection', 'Ethical Hacking', 'Security Best Practices'],
      },
    ],
    accent: 'from-[#F28C28] to-[#e07b1a]',
  },
  {
    id: 'certifications',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Professional Certifications',
    subtitle: 'Globally Recognized Credentials',
    description: 'Prepare for industry-leading certifications that validate your expertise and boost your career prospects globally.',
    courses: [
      {
        title: 'CompTIA A+ Certification',
        duration: '12 Weeks',
        level: 'Intermediate',
        description: 'Prepare for the industry-standard IT technician certification covering hardware and software support.',
        topics: ['Hardware Support', 'Software Troubleshooting', 'Networking Basics', 'Security Fundamentals'],
      },
      {
        title: 'Cisco CCNA Certification',
        duration: '16 Weeks',
        level: 'Advanced',
        description: 'Master networking fundamentals and prepare for the Cisco Certified Network Associate exam.',
        topics: ['Network Fundamentals', 'Routing & Switching', 'IP Services', 'Security Fundamentals'],
      },
      {
        title: 'Microsoft Certifications',
        duration: '10-14 Weeks',
        level: 'Varies',
        description: 'Earn Microsoft credentials in Azure, Microsoft 365, or other Microsoft technologies.',
        topics: ['Azure Fundamentals', 'Microsoft 365', 'Windows Server', 'Cloud Technologies'],
      },
      {
        title: 'CompTIA Security+',
        duration: '10 Weeks',
        level: 'Advanced',
        description: 'Prepare for the globally recognized cybersecurity certification for IT professionals.',
        topics: ['Threats & Vulnerabilities', 'Identity Management', 'Risk Management', 'Cryptography'],
      },
    ],
    accent: 'from-[#1F5F6A] to-[#0F4A55]',
  },
];

export default function ProgramsPageContent() {
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
                Programs & Courses
              </span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F4A55] mb-6 leading-tight">
                Comprehensive{' '}
                <span className="text-[#F28C28]">
                  IT Education
                </span>{' '}
                Programs
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-[#4A4A4A] leading-relaxed max-w-3xl mx-auto">
                From foundational computer literacy to professional certifications, 
                our programs are designed to equip you with the skills demanded by 
                today&apos;s technology industry.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Programs Navigation */}
      <section className="py-8 bg-white border-b border-[#F5F7F8] sticky top-[72px] z-40">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-[#F5F7F8] text-[#4A4A4A] hover:bg-[#1F5F6A] hover:text-white transition-colors duration-300"
              >
                {program.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Sections */}
      {programs.map((program, programIndex) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-20 lg:py-28 ${programIndex % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]'}`}
        >
          <div className="container-custom">
            {/* Program Header */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <AnimatedSection>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${program.accent} text-white mb-6`}>
                  {program.icon}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <span className="inline-block px-3 py-1 bg-[#F28C28]/10 text-[#F28C28] text-sm font-medium rounded-full mb-4">
                  {program.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
                  {program.title}
                </h2>
                <p className="text-[#4A4A4A] text-lg">{program.description}</p>
              </AnimatedSection>
            </div>

            {/* Courses Grid */}
            <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {program.courses.map((course) => (
                <StaggerItem key={course.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full border border-transparent hover:border-[#1F5F6A]/10"
                  >
                    {/* Course Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#0F4A55] mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 bg-[#F28C28]/10 text-[#F28C28] text-xs font-medium rounded-full">
                            {course.duration}
                          </span>
                          <span className="px-2.5 py-1 bg-[#F28C28]/10 text-[#F28C28] text-xs font-medium rounded-full">
                            {course.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#4A4A4A] mb-6">{course.description}</p>

                    {/* Topics */}
                    <div className="border-t border-[#F5F7F8] pt-6">
                      <h4 className="text-sm font-semibold text-[#0F4A55] mb-3">What You&apos;ll Learn:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {course.topics.map((topic) => (
                          <div key={topic} className="flex items-center gap-2 text-sm text-[#4A4A4A]">
                            <svg className="w-4 h-4 text-[#F28C28] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Enrollment CTA */}
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
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Contact us today to learn more about our programs, schedules, 
                and enrollment process. Our team is here to help you choose 
                the right path for your career goals.
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
                <a
                  href="tel:+2348024629942"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
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
    </>
  );
}
