'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, staggerContainer, fadeInUp } from '@/lib/animations';

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  previousRole: string;
  image: string;
  story: string;
  achievements: string[];
  program: string;
  graduationYear: string;
  linkedIn?: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: 'Oluwaseun Adebayo',
    role: 'Senior Software Engineer',
    company: 'Andela Nigeria',
    companyLogo: '/companies/andela.png',
    previousRole: 'Unemployed Graduate',
    image: '/success/story1.jpg',
    story: 'When I came to TASHICO, I had a degree in Accounting but no job prospects. The 6-month intensive web development program transformed my career completely. The hands-on projects, mentorship, and career guidance prepared me for the tech industry. Within 3 months of graduating, I landed my first developer role.',
    achievements: [
      'Promoted to Senior Engineer in 2 years',
      'Led development of 3 major projects',
      'Mentored 15+ junior developers',
      'Increased team productivity by 40%',
    ],
    program: 'Advanced Web Development',
    graduationYear: '2021',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Chidinma Okonkwo',
    role: 'Network Security Specialist',
    company: 'First Bank Nigeria',
    companyLogo: '/companies/firstbank.png',
    previousRole: 'Computer Center Staff',
    image: '/success/story2.jpg',
    story: 'I worked at a local computer center doing basic tasks. TASHICO&apos;s Cisco networking program opened my eyes to the vast world of IT infrastructure. The CCNA preparation was rigorous but rewarding. I passed on my first attempt and got hired by First Bank as a network administrator.',
    achievements: [
      'Cisco CCNA & CCNP Certified',
      'Manages network for 50+ branches',
      'Implemented zero-trust security',
      'Saved ₦15M in security costs',
    ],
    program: 'Cisco Networking & Security',
    graduationYear: '2020',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Emmanuel Okafor',
    role: 'Cloud Solutions Architect',
    company: 'Microsoft Nigeria',
    companyLogo: '/companies/microsoft.png',
    previousRole: 'Fresh Graduate',
    image: '/success/story3.jpg',
    story: 'Straight out of university, I knew I needed practical skills to compete. TASHICO&apos;s Microsoft Azure program gave me exactly that. The hands-on labs, real-world scenarios, and certification preparation were world-class. I&apos;m now helping enterprises migrate to the cloud.',
    achievements: [
      'Microsoft Certified Azure Architect',
      'Led 20+ enterprise migrations',
      'Speaker at tech conferences',
      'Published 2 technical books',
    ],
    program: 'Microsoft Azure Cloud',
    graduationYear: '2022',
    linkedIn: 'https://linkedin.com',
  },
  {
    id: 4,
    name: 'Folake Adeyemi',
    role: 'IT Director',
    company: 'Dangote Industries',
    companyLogo: '/companies/dangote.png',
    previousRole: 'Secretary',
    image: '/success/story4.jpg',
    story: 'From secretary to IT Director in 5 years - that&apos;s the power of TASHICO&apos;s education. I started with basic computer literacy and kept coming back for more certifications. Each program opened new doors. The instructors believed in me even when I doubted myself.',
    achievements: [
      'Manages IT for 3 subsidiaries',
      'Led digital transformation project',
      'Oversees team of 25+ IT staff',
      'Featured in BusinessDay Nigeria',
    ],
    program: 'Multiple Certifications',
    graduationYear: '2019',
    linkedIn: 'https://linkedin.com',
  },
];

// Company Logos Marquee
function CompanyLogos() {
  const companies = [
    'Andela', 'Microsoft', 'Google', 'MTN', 'First Bank', 
    'Dangote', 'Shell', 'Interswitch', 'Flutterwave', 'Paystack'
  ];

  return (
    <div className="mt-16 pt-12 border-t border-[#1F5F6A]/10">
      <p className="text-center text-sm text-[#4A4A4A] mb-6">
        Our alumni work at leading companies worldwide
      </p>
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-8 px-6 bg-white rounded-lg shadow-sm flex items-center justify-center"
            >
              <span className="text-[#4A4A4A] font-medium">{company}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function SuccessStoriesSection() {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-gradient-to-br from-[#0F4A55] to-[#1F5F6A] text-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[#F28C28] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Alumni Spotlight
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Real Success{' '}
            <span className="text-[#F28C28]">Stories</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            From beginners to industry leaders - see how TASHICO graduates have transformed their careers and are making an impact
          </p>
        </AnimatedSection>

        {/* Stories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-white/10 hover:border-[#F28C28]/50 transition-all cursor-pointer group"
              onClick={() => setSelectedStory(story)}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F28C28] to-[#FF9F45] flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#0F4A55]"
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#F28C28] transition-colors">
                      {story.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-white/60">Class of {story.graduationYear}</span>
                  </div>
                  
                  {/* Career Transformation */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3 sm:mb-4">
                    <span className="text-xs text-red-400 line-through">{story.previousRole}</span>
                    <svg className="w-4 h-4 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-xs text-green-400">{story.role}</span>
                  </div>

                  <p className="text-white/80 text-sm line-clamp-3 mb-4">
                    &ldquo;{story.story.substring(0, 150)}...&rdquo;
                  </p>

                  {/* Company & Program */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="px-2 sm:px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full">
                      {story.company}
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-[#F28C28]/20 text-[#F28C28] text-xs font-medium rounded-full">
                      {story.program}
                    </span>
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-1">
                  {story.achievements.slice(0, 2).map((achievement, i) => (
                    <span key={i} className="text-xs text-white/60">
                      • {achievement.split(' ').slice(0, 3).join(' ')}...
                    </span>
                  ))}
                </div>
                <span className="text-[#F28C28] text-sm font-medium group-hover:translate-x-2 transition-transform flex items-center gap-1">
                  Read Story
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Logos */}
        <CompanyLogos />

        {/* Modal for Full Story */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-br from-[#0F4A55] to-[#1F5F6A] p-6 sm:p-8 text-white">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#F28C28] to-[#FF9F45] flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                      {selectedStory.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{selectedStory.name}</h3>
                      <p className="text-[#F28C28]">{selectedStory.role}</p>
                      <p className="text-white/80 text-sm">{selectedStory.company}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 sm:p-8">
                  {/* Journey */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#0F4A55] mb-3">The Journey</h4>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-sm rounded-full">{selectedStory.previousRole}</span>
                      <svg className="w-5 h-5 text-[#1F5F6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">{selectedStory.role}</span>
                    </div>
                    <p className="text-[#4A4A4A] leading-relaxed">{selectedStory.story}</p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-[#0F4A55] mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedStory.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#4A4A4A]">
                          <svg className="w-5 h-5 text-[#F28C28] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Program & Year */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white text-sm font-medium rounded-full">
                      {selectedStory.program}
                    </span>
                    <span className="px-3 py-1 bg-[#F5F7F8] text-[#4A4A4A] text-sm font-medium rounded-full">
                      Class of {selectedStory.graduationYear}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
