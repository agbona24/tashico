'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '@/lib/animations';
import Link from 'next/link';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'enrollment' | 'programs' | 'fees' | 'career' | 'general';
}

const faqs: FAQItem[] = [
  {
    id: 1,
    category: 'enrollment',
    question: 'How do I enroll in a program at TASHICO?',
    answer: 'Enrollment is easy! Visit our office at No.7 Ogunsanwo Plaza, along Sagamu Road, Ijebu Igbo, or contact us via WhatsApp at +234 807 956 4511. You can also fill out the inquiry form on our Contact page. Our admissions team will guide you through the process, help you choose the right program, and complete your registration.',
  },
  {
    id: 2,
    category: 'enrollment',
    question: 'What are the requirements for admission?',
    answer: 'We welcome students of all backgrounds! Basic requirements include: ability to read and write, willingness to learn, and commitment to attending classes. Some advanced programs (like Cisco or Microsoft certifications) may require basic computer literacy. We offer placement assessments to help you start at the right level.',
  },
  {
    id: 3,
    category: 'programs',
    question: 'What programs do you offer?',
    answer: 'We offer a comprehensive range of IT programs including: Basic Computer Literacy, Microsoft Office Suite, Web Development (HTML, CSS, JavaScript, React), Programming (Python, Java, C++), Graphic Design, Cisco Networking (CCNA, CCNP), CompTIA Certifications (A+, Network+, Security+), Microsoft Certifications (Azure, 365), Database Management, and IT Project Management.',
  },
  {
    id: 4,
    category: 'programs',
    question: 'How long do the programs last?',
    answer: 'Program duration varies: Basic Computer Literacy (1-2 months), Professional Certifications (3-6 months), Web Development (4-6 months), Full-Stack Development (6-12 months). We offer flexible scheduling with weekday, weekend, and evening classes to accommodate working professionals and students.',
  },
  {
    id: 5,
    category: 'programs',
    question: 'Do you offer online classes?',
    answer: 'Yes! We offer hybrid learning options. Some programs are available fully online, while others combine online theory with hands-on practical sessions at our facility. Our online platform features live classes, recorded sessions, and 24/7 access to learning materials.',
  },
  {
    id: 6,
    category: 'fees',
    question: 'How much do the programs cost?',
    answer: 'Program fees vary based on duration and specialization. Basic programs start from ₦25,000, while professional certifications range from ₦75,000 to ₦250,000. We offer flexible payment plans, installment options, and early-bird discounts. Contact us for a detailed fee structure for your program of interest.',
  },
  {
    id: 7,
    category: 'fees',
    question: 'Are there scholarships or financial aid available?',
    answer: 'Yes! We believe in accessible education. We offer partial scholarships for outstanding students, need-based financial assistance, discounts for groups (5+ students), and special rates for fresh graduates and NYSC members. Ask about our "Pay-After-Placement" option for select programs.',
  },
  {
    id: 8,
    category: 'career',
    question: 'Do you help with job placement after graduation?',
    answer: 'Absolutely! Our career services include resume building workshops, interview preparation, portfolio development, job referrals to our partner companies, and networking events. We have an 85% placement rate, with alumni at companies like Andela, MTN, First Bank, Interswitch, and tech startups.',
  },
  {
    id: 9,
    category: 'career',
    question: 'Will I receive a certificate upon completion?',
    answer: 'Yes, all graduates receive a TASHICO certificate of completion. For certification programs (CompTIA, Cisco, Microsoft), we prepare you for official exams and assist with registration. Upon passing, you receive internationally recognized certifications that are valued by employers worldwide.',
  },
  {
    id: 10,
    category: 'general',
    question: 'What are your operating hours?',
    answer: 'Our facility is open Monday to Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM. We are closed on Sundays and public holidays. Evening classes run from 5:00 PM - 8:00 PM. Our WhatsApp support is available 24/7.',
  },
  {
    id: 11,
    category: 'general',
    question: 'What equipment do I need to bring?',
    answer: 'We provide all necessary equipment in our fully-equipped computer labs. However, having a personal laptop is recommended for practice outside class hours. We can advise on laptop specifications based on your program. USB drives are helpful for saving your work.',
  },
  {
    id: 12,
    category: 'general',
    question: 'Can I visit the facility before enrolling?',
    answer: 'Of course! We encourage prospective students to tour our facility. You can observe classes, meet instructors, and experience our learning environment firsthand. Schedule a visit by calling +234 802 462 9942 or simply walk in during business hours.',
  },
];

const categories = [
  { id: 'all', label: 'All Questions', icon: '📋' },
  { id: 'enrollment', label: 'Enrollment', icon: '📝' },
  { id: 'programs', label: 'Programs', icon: '📚' },
  { id: 'fees', label: 'Fees & Payment', icon: '💰' },
  { id: 'career', label: 'Career', icon: '💼' },
  { id: 'general', label: 'General', icon: 'ℹ️' },
];

function FAQAccordionItem({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-[#1F5F6A]/10 rounded-xl sm:rounded-2xl overflow-hidden"
    >
      <button
        onClick={onClick}
        className={`w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-colors ${
          isOpen ? 'bg-[#1F5F6A] text-white' : 'bg-white hover:bg-[#F5F7F8] text-[#0F4A55]'
        }`}
      >
        <span className="font-medium text-sm sm:text-base pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-4 sm:px-6 py-4 sm:py-5 bg-[#F5F7F8]">
              <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-3 sm:mb-4">
            Frequently Asked{' '}
            <span className="text-[#F28C28]">Questions</span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Find answers to common questions about our programs, enrollment, fees, and career support
          </p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenFAQ(null);
              }}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 sm:gap-2 ${
                activeCategory === category.id
                  ? 'bg-[#1F5F6A] text-white shadow-lg'
                  : 'bg-[#F5F7F8] text-[#4A4A4A] hover:bg-[#1F5F6A]/10'
              }`}
            >
              <span className="hidden sm:inline">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </AnimatedSection>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              {filteredFAQs.map((faq) => (
                <FAQAccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFAQ === faq.id}
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-10 sm:mt-16">
          <div className="bg-gradient-to-br from-[#F5F7F8] to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#1F5F6A]/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#1F5F6A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F4A55] mb-2 sm:mb-3">
              Still have questions?
            </h3>
            <p className="text-[#4A4A4A] mb-4 sm:mb-6 text-sm sm:text-base">
              Can&apos;t find what you&apos;re looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1F5F6A] hover:bg-[#0F4A55] text-white rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
              <a
                href="https://wa.me/2348079564511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
