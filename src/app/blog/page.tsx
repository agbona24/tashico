import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Stay updated with the latest tech tips, industry news, student achievements, and announcements from TASHICO TECH and Resources Management.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
