'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/lib/animations';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visit Us',
    details: ['6, Ajegunle Street, Oke Sopen,', 'Ijebu Igbo, Ogun State, Nigeria'],
    action: { label: 'Get Directions', href: '#' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    details: ['+234 802 462 9942', '+234 807 956 4511'],
    action: { label: 'Call Now', href: 'tel:+2348024629942' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    details: ['tashcomp4@gmail.com', 'murphyspinners@yahoo.com'],
    action: { label: 'Send Email', href: 'mailto:tashcomp4@gmail.com' },
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Operating Hours',
    details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM'],
    action: null,
  },
];

const inquiryTypes = [
  'General Inquiry',
  'Course Enrollment',
  'Corporate Training',
  'IT Consulting',
  'Partnership Opportunity',
  'Career Counseling',
  'Other',
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
                  Contact Us
                </span>
                <span className="px-3 py-1 bg-[#F28C28] text-white text-xs font-bold rounded-full shadow-sm shadow-[#F28C28]/30">
                  Get in Touch
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Start Your{' '}
                <span className="text-[#F28C28]">
                  Journey
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                Have questions about our programs or services? We&apos;re here to help. 
                Reach out to us and our team will respond promptly.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#F5F7F8] rounded-2xl p-6 h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1F5F6A] to-[#0F4A55] rounded-xl flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F4A55] mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#4A4A4A] text-sm">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      className="inline-flex items-center gap-1 text-[#F28C28] text-sm font-semibold hover:gap-2 transition-all"
                    >
                      {info.action.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-[#F5F7F8] rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F4A55] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#4A4A4A] mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center gap-2 text-green-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                    <p className="text-green-600 text-sm mt-1">
                      We&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#0F4A55] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#1F5F6A] focus:border-transparent transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0F4A55] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#1F5F6A] focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#0F4A55] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#1F5F6A] focus:border-transparent transition-all outline-none"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-[#0F4A55] mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#1F5F6A] focus:border-transparent transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0F4A55] mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:ring-2 focus:ring-[#1F5F6A] focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#1F5F6A] to-[#0F4A55] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <AnimatedSection delay={0.2}>
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1F5F6A]/10 to-[#F28C28]/10 rounded-2xl overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-[#1F5F6A]/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <p className="text-[#4A4A4A] font-medium">Our Location</p>
                    <p className="text-sm text-[#4A4A4A]/60">Ijebu Igbo, Ogun State</p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Contact */}
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-r from-[#0F4A55] to-[#1F5F6A] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <p className="text-white/80 mb-6">
                    Prefer to speak with us directly? Give us a call or send us a WhatsApp message.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+2348024629942"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">+234 802 462 9942</div>
                        <div className="text-sm text-white/60">Primary Line</div>
                      </div>
                    </a>
                    <a
                      href="mailto:tashcomp4@gmail.com"
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold">tashcomp4@gmail.com</div>
                        <div className="text-sm text-white/60">Email Us</div>
                      </div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F4A55] mb-4">
              Frequently Asked{' '}
              <span className="text-[#F28C28]">
                Questions
              </span>
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What are the admission requirements?',
                answer: 'We welcome students of all backgrounds. Basic literacy is required for most courses. Advanced courses may have prerequisites which are outlined in the course description.',
              },
              {
                question: 'How long are the training programs?',
                answer: 'Program duration varies from 3 weeks for basic courses to 16 weeks for advanced certifications. Check individual program pages for specific durations.',
              },
              {
                question: 'Do you offer flexible payment options?',
                answer: 'Yes, we offer installment payment plans for most of our programs. Contact us to discuss payment options that work for you.',
              },
              {
                question: 'Are your certifications recognized?',
                answer: 'We prepare students for globally recognized certifications from CompTIA, Cisco, and Microsoft. These credentials are valued by employers worldwide.',
              },
            ].map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <details className="group bg-white rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-[#0F4A55] pr-4">{faq.question}</span>
                    <svg 
                      className="w-5 h-5 text-[#F28C28] transform group-open:rotate-180 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-[#4A4A4A]">
                    {faq.answer}
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
