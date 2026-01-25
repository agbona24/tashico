'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

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
    description: 'Successfully completed our programs',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Serving the community since 2010',
  },
  {
    value: 400,
    suffix: '+',
    label: 'IT Professionals',
    description: 'Alumni working globally in tech',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Partner Organizations',
    description: 'Industry collaborations',
  },
];

/**
 * AnimatedCounter - GSAP-powered number counter
 * Triggers when element enters viewport
 */
function AnimatedCounter({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number; 
  suffix: string; 
  inView: boolean 
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView && counterRef.current) {
      const obj = { val: 0 };
      
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          setDisplayValue(Math.round(obj.val));
        },
      });
    }
  }, [inView, value]);

  return (
    <span ref={counterRef}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0F4A55 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Accent Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#F28C28]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1F5F6A]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#F28C28]/10 rounded-full text-[#F28C28] text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-4">
            Numbers That Speak{' '}
            <span className="text-[#F28C28]">Excellence</span>
          </h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Over a decade of transforming lives through quality IT education and professional development
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[#F5F7F8] rounded-2xl p-6 lg:p-8 border border-[#1F5F6A]/10 hover:bg-white hover:shadow-xl hover:shadow-[#1F5F6A]/10 transition-all duration-300 hover:-translate-y-1">
                {/* Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-[#F28C28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                
                {/* Counter */}
                <div className="text-4xl lg:text-5xl font-bold text-[#0F4A55] mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                
                {/* Label */}
                <h3 className="text-lg font-semibold text-[#0F4A55] mb-1">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-[#4A4A4A] text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#4A4A4A] text-sm max-w-xl mx-auto">
            Trusted by students, professionals, and organizations across 
            <span className="text-[#F28C28] font-medium"> Ogun State</span> and beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
}
