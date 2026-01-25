import type { Metadata } from 'next';
import ProgramsPageContent from './ProgramsPageContent';

export const metadata: Metadata = {
  title: 'Programs & Courses',
  description: 'Explore TASHICO\'s comprehensive computer training programs including Basic Computer Literacy, Advanced IT Courses, and Professional Certifications from CompTIA, Cisco, and Microsoft.',
};

export default function ProgramsPage() {
  return <ProgramsPageContent />;
}
