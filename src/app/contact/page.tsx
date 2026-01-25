import type { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TASHICO TECH and Resources Management. Visit us at Ijebu Igbo, Ogun State, or contact us via email or phone for enrollment inquiries and IT consulting services.',
};

export default function ContactPage() {
  return <ContactPageContent />;
}
