import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

/**
 * TASHICO Homepage
 * Premium corporate website for a computer training institute
 * Established 2010 | Ijebu Igbo, Ogun State, Nigeria
 */
export default function Home() {
  return (
    <>
      {/* Hero Section - Animated headline with trust indicators */}
      <HeroSection />
      
      {/* Stats Section - Animated counters showing impact */}
      <StatsSection />
      
      {/* Services Section - Core offerings with hover animations */}
      <ServicesSection />
      
      {/* Why Choose Us - Trust-building reasons grid */}
      <WhyChooseSection />
      
      {/* Testimonials - Success stories carousel */}
      <TestimonialsSection />
      
      {/* CTA Section - Strong call-to-action */}
      <CTASection />
    </>
  );
}
