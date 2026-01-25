'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';

// Floating Particle Component
const FloatingParticle = ({ delay, duration, size, x, y }: { 
  delay: number; 
  duration: number; 
  size: number; 
  x: string; 
  y: string;
}) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, rgba(31, 95, 106, 0.3) 0%, transparent 70%)`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0.5],
      y: [0, -100, -200],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

// Tech Icon SVG Components
const CircuitIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
    <line x1="50" y1="20" x2="50" y2="42" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="58" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="2" />
    <line x1="58" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="20" r="4" fill="currentColor" />
    <circle cx="50" cy="80" r="4" fill="currentColor" />
    <circle cx="20" cy="50" r="4" fill="currentColor" />
    <circle cx="80" cy="50" r="4" fill="currentColor" />
    <line x1="26" y1="26" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" />
    <line x1="60" y1="60" x2="74" y2="74" stroke="currentColor" strokeWidth="1.5" />
    <line x1="74" y1="26" x2="60" y2="40" stroke="currentColor" strokeWidth="1.5" />
    <line x1="40" y1="60" x2="26" y2="74" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="26" cy="26" r="3" fill="currentColor" />
    <circle cx="74" cy="74" r="3" fill="currentColor" />
    <circle cx="74" cy="26" r="3" fill="currentColor" />
    <circle cx="26" cy="74" r="3" fill="currentColor" />
  </svg>
);

const CodeBlockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="10" width="80" height="20" rx="8" fill="currentColor" fillOpacity="0.1" />
    <circle cx="24" cy="20" r="4" fill="#ef4444" />
    <circle cx="38" cy="20" r="4" fill="#eab308" />
    <circle cx="52" cy="20" r="4" fill="#22c55e" />
    <path d="M30 50 L20 60 L30 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M70 50 L80 60 L70 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="45" y1="45" x2="55" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const NetworkIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="25" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="25" cy="75" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="75" cy="75" r="10" stroke="currentColor" strokeWidth="2" />
    <circle cx="50" cy="25" r="5" fill="currentColor" />
    <circle cx="25" cy="75" r="5" fill="currentColor" />
    <circle cx="75" cy="75" r="5" fill="currentColor" />
    <line x1="50" y1="35" x2="30" y2="65" stroke="currentColor" strokeWidth="2" />
    <line x1="50" y1="35" x2="70" y2="65" stroke="currentColor" strokeWidth="2" />
    <line x1="35" y1="75" x2="65" y2="75" stroke="currentColor" strokeWidth="2" />
    <motion.circle
      cx="50"
      cy="25"
      r="15"
      stroke="currentColor"
      strokeWidth="1"
      strokeOpacity="0.3"
      initial={{ scale: 1, opacity: 0.3 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const CloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path
      d="M25 65 C10 65 10 45 25 45 C25 30 45 25 55 35 C65 25 90 30 85 50 C100 50 100 70 85 70 L25 70 C10 70 10 65 25 65 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M35 55 L45 65 L65 45"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="25" rx="35" ry="12" stroke="currentColor" strokeWidth="2" />
    <path d="M15 25 L15 50 C15 57 30 63 50 63 C70 63 85 57 85 50 L85 25" stroke="currentColor" strokeWidth="2" />
    <path d="M15 50 L15 75 C15 82 30 88 50 88 C70 88 85 82 85 75 L85 50" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="35" ry="12" stroke="currentColor" strokeWidth="2" strokeOpacity="0.5" />
    <motion.ellipse
      cx="50"
      cy="25"
      rx="35"
      ry="12"
      fill="currentColor"
      fillOpacity="0.1"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const GraduationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <path d="M50 20 L10 40 L50 60 L90 40 L50 20 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    <path d="M25 48 L25 70 C25 75 37 82 50 82 C63 82 75 75 75 70 L75 48" stroke="currentColor" strokeWidth="2" />
    <line x1="85" y1="40" x2="85" y2="75" stroke="currentColor" strokeWidth="2" />
    <circle cx="85" cy="78" r="5" stroke="currentColor" strokeWidth="2" />
    <motion.path
      d="M50 20 L10 40 L50 60 L90 40 L50 20 Z"
      fill="currentColor"
      fillOpacity="0.2"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.3, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </svg>
);

/**
 * Hero Section - Premium animated hero with GSAP text reveal
 * Features: Staggered text animation, floating particles, tech vectors, gradient overlays
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Generate particles with memoization
  const particles = useMemo(() => 
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
      size: 4 + Math.random() * 8,
      x: `${Math.random() * 100}%`,
      y: `${70 + Math.random() * 30}%`,
    })), []
  );

  useEffect(() => {
    setIsLoaded(true);

    // Mouse tracking for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animation for premium text reveal effect
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('.word');
      const chars = headlineRef.current.querySelectorAll('.char');

      // Text reveal animation
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
          delay: 0.5,
        }
      );

      // Gradient text shimmer effect
      gsap.to('.gradient-text', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none',
      });
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F4A55 0%, #1F5F6A 25%, #0F4A55 50%, #1a3a40 100%)',
      }}
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(242, 140, 40, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at ${30 - mousePosition.x * 5}% ${70 - mousePosition.y * 5}%, rgba(31, 95, 106, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at ${70 + mousePosition.x * 8}% ${30 + mousePosition.y * 8}%, rgba(242, 140, 40, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0"
          style={{ y: y1, opacity }}
        >
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </pattern>
              <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" stopOpacity="0"/>
                <stop offset="50%" stopColor="white" stopOpacity="1"/>
                <stop offset="100%" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <mask id="gridMask">
                <rect width="100%" height="100%" fill="url(#gridFade)"/>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)"/>
          </svg>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>

        {/* Large Glowing Orbs */}
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px]"
          style={{ y: y2 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(242, 140, 40, 0.2) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px]"
          style={{ y: y1 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(31, 95, 106, 0.4) 0%, transparent 60%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit Icon - Top Right */}
        <motion.div
          className="absolute top-20 right-[15%] w-24 h-24 text-white/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ x: mousePosition.x * 20, y: mousePosition.y * 20 }}
        >
          <CircuitIcon className="w-full h-full" />
        </motion.div>

        {/* Code Block - Left Side */}
        <motion.div
          className="absolute top-1/3 left-[8%] w-20 h-20 text-white/10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ x: mousePosition.x * -15, y: mousePosition.y * 15 }}
        >
          <CodeBlockIcon className="w-full h-full" />
        </motion.div>

        {/* Network Icon - Bottom Right */}
        <motion.div
          className="absolute bottom-1/4 right-[10%] w-28 h-28 text-white/10"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ x: mousePosition.x * 25, y: mousePosition.y * -15 }}
        >
          <NetworkIcon className="w-full h-full" />
        </motion.div>

        {/* Cloud Icon - Top Left */}
        <motion.div
          className="absolute top-[20%] left-[18%] w-16 h-16 text-white/10"
          animate={{
            y: [0, 12, 0],
            x: [0, -8, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{ x: mousePosition.x * -10, y: mousePosition.y * 10 }}
        >
          <CloudIcon className="w-full h-full" />
        </motion.div>

        {/* Data Icon - Right Middle */}
        <motion.div
          className="absolute top-[45%] right-[5%] w-20 h-20 text-white/10"
          animate={{
            y: [0, -18, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ x: mousePosition.x * 18, y: mousePosition.y * -20 }}
        >
          <DataIcon className="w-full h-full" />
        </motion.div>

        {/* Graduation Icon - Bottom Left */}
        <motion.div
          className="absolute bottom-[20%] left-[5%] w-24 h-24 text-white/10"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          style={{ x: mousePosition.x * -20, y: mousePosition.y * 15 }}
        >
          <GraduationIcon className="w-full h-full" />
        </motion.div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-[30%] right-[25%] w-32 h-32"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full border border-white/5 rounded-full" />
          <div className="absolute inset-4 border border-white/5 rounded-full" />
          <div className="absolute inset-8 border border-white/10 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-[35%] left-[20%] w-40 h-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full border border-white/5" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
        </motion.div>

        {/* Glowing Lines */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-1/3"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(242, 140, 40, 0.3), transparent)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-px h-1/4"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent)',
          }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-10"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C28] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F28C28]"></span>
            </span>
            <span className="text-sm font-medium text-white/90">
              Established Since August 2010
            </span>
            <span className="px-3 py-1 bg-[#F28C28] text-white text-xs font-bold rounded-full shadow-lg shadow-[#F28C28]/30">
              15+ Years
            </span>
          </motion.div>

          {/* Main Headline with GSAP animation */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8"
            style={{ perspective: '1000px' }}
          >
            <span className="word inline-block text-white">Empowering</span>{' '}
            <span className="word inline-block text-white">Futures</span>
            <br className="hidden sm:block" />
            <span className="word inline-block text-white">Through</span>{' '}
            <span 
              className="word inline-block gradient-text bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #F28C28, #FFB366, #F28C28, #FFB366)',
                backgroundSize: '200% auto',
              }}
            >
              Technology
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            TASHICO TECH and Resources Management — A cornerstone of technological education 
            in Nigeria, providing world-class IT training to{' '}
            <span className="text-[#F28C28] font-semibold">3,000+ graduates</span> worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link
              href="/programs"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#F28C28] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#F28C28]/40 hover:-translate-y-1"
            >
              <span className="relative z-10">Explore Programs</span>
              <motion.svg 
                className="w-6 h-6 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-200%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.8 }}
              />
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#e67d1f] to-[#F28C28] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg rounded-full border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span>Get in Touch</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '3,000+', label: 'Graduates' },
              { number: '400+', label: 'IT Professionals' },
              { number: '15+', label: 'Years Experience' },
              { number: '20+', label: 'Programs' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="mt-16 pt-10 border-t border-white/10"
          >
            <p className="text-sm text-white/40 mb-6 uppercase tracking-widest">Certified & Authorized Partner</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {['CompTIA Certified', 'Cisco Partner', 'Microsoft Authorized'].map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                  className="flex items-center gap-3 px-5 py-2.5 bg-white/5 rounded-full border border-white/10"
                >
                  <svg className="w-5 h-5 text-[#F28C28]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-white/70 text-sm font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-white/40 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-2 h-2 bg-[#F28C28] rounded-full shadow-lg shadow-[#F28C28]/50"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#F5F7F8"
          />
        </svg>
      </div>
    </section>
  );
}
