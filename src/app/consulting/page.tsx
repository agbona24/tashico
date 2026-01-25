import type { Metadata } from 'next';
import ConsultingPageContent from './ConsultingPageContent';

export const metadata: Metadata = {
  title: 'IT Consulting Services',
  description: 'TASHICO offers customized IT consulting services including network setup, software development, website development, IT support, and career counseling for businesses and professionals.',
};

export default function ConsultingPage() {
  return <ConsultingPageContent />;
}
