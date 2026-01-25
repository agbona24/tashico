import type { Metadata } from 'next';
import AboutPageContent from './AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TASHICO TECH and Resources Management - A cornerstone of technological education in Ogun State since August 2010. Discover our mission, values, and commitment to empowering futures through technology education.',
};

export default function AboutPage() {
  return <AboutPageContent />;
}
