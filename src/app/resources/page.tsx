import type { Metadata } from 'next';
import ResourcesPageContent from './ResourcesPageContent';

export const metadata: Metadata = {
  title: 'Resource Center',
  description: 'Explore TASHICO\'s Resource Center featuring an IT library, modern computer laboratory, and professional workshops & seminars led by industry experts.',
};

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
