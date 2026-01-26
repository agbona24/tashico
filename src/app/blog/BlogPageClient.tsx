'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { AnimatedSection, staggerContainer, fadeInUp } from '@/lib/animations';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: 'tech-tips' | 'news' | 'achievements' | 'announcements' | 'tutorials';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'New Batch Starting February 2026 - Enroll Now!',
    excerpt: 'Join our comprehensive IT training programs starting February 2026. Early bird discounts available for the first 50 students.',
    content: 'We are excited to announce our new batch of programs starting February 2026...',
    category: 'announcements',
    author: 'Jimoh Ayinde M.',
    authorRole: 'CEO/Founder',
    date: 'January 15, 2025',
    readTime: '3 min read',
    image: '/blog/new-batch.jpg',
    featured: true,
    tags: ['Enrollment', 'New Batch', 'Discounts'],
  },
  {
    id: 2,
    title: '10 Essential Skills Every IT Professional Needs in 2025',
    excerpt: 'The tech landscape is evolving rapidly. Here are the top 10 skills that will make you stand out in the job market.',
    content: 'Cloud computing, AI/ML, cybersecurity, DevOps...',
    category: 'tech-tips',
    author: 'Tech Team',
    authorRole: 'Instructors',
    date: 'January 10, 2025',
    readTime: '8 min read',
    image: '/blog/skills-2025.jpg',
    featured: true,
    tags: ['Skills', 'Career', '2025 Trends'],
  },
  {
    id: 3,
    title: 'Alumni Spotlight: Oluwaseun Lands Senior Role at Andela',
    excerpt: 'Celebrating our alumnus Oluwaseun Adebayo who just got promoted to Senior Software Engineer at Andela Nigeria.',
    content: 'We are proud to announce...',
    category: 'achievements',
    author: 'Admin Team',
    authorRole: 'Communications',
    date: 'January 5, 2025',
    readTime: '4 min read',
    image: '/blog/alumni-spotlight.jpg',
    featured: false,
    tags: ['Alumni', 'Success Story', 'Andela'],
  },
  {
    id: 4,
    title: 'Introduction to Python: A Beginner\'s Guide',
    excerpt: 'Python is one of the most beginner-friendly programming languages. Learn the basics in this comprehensive tutorial.',
    content: 'Python has become the go-to language for beginners...',
    category: 'tutorials',
    author: 'Mr. Kayode',
    authorRole: 'Lead Instructor',
    date: 'December 28, 2024',
    readTime: '12 min read',
    image: '/blog/python-tutorial.jpg',
    featured: false,
    tags: ['Python', 'Programming', 'Tutorial'],
  },
  {
    id: 5,
    title: 'TASHICO Partners with Microsoft for Azure Certifications',
    excerpt: 'We are now an official Microsoft Learning Partner, offering Azure certification programs with exclusive benefits.',
    content: 'We are thrilled to announce our partnership with Microsoft...',
    category: 'news',
    author: 'Jimoh Ayinde M.',
    authorRole: 'CEO/Founder',
    date: 'December 20, 2024',
    readTime: '5 min read',
    image: '/blog/microsoft-partnership.jpg',
    featured: true,
    tags: ['Microsoft', 'Partnership', 'Azure'],
  },
  {
    id: 6,
    title: 'How to Prepare for Your CCNA Exam: Tips from Our Experts',
    excerpt: 'Passing the CCNA exam requires strategy. Our certified instructors share their top preparation tips.',
    content: 'The Cisco CCNA certification is highly valued...',
    category: 'tech-tips',
    author: 'Mr. Adeniyi',
    authorRole: 'Cisco Instructor',
    date: 'December 15, 2024',
    readTime: '10 min read',
    image: '/blog/ccna-tips.jpg',
    featured: false,
    tags: ['CCNA', 'Cisco', 'Exam Prep'],
  },
  {
    id: 7,
    title: 'Cybersecurity Awareness: Protecting Your Digital Life',
    excerpt: 'In an increasingly connected world, cybersecurity is everyone\'s responsibility. Learn how to stay safe online.',
    content: 'Cyber threats are growing more sophisticated...',
    category: 'tech-tips',
    author: 'Security Team',
    authorRole: 'Instructors',
    date: 'December 10, 2024',
    readTime: '7 min read',
    image: '/blog/cybersecurity.jpg',
    featured: false,
    tags: ['Security', 'Tips', 'Online Safety'],
  },
  {
    id: 8,
    title: 'Web Development Bootcamp Graduates 25 New Developers',
    excerpt: 'Our intensive 6-month Web Development Bootcamp just graduated another successful cohort of 25 developers.',
    content: 'Congratulations to our latest batch of web developers...',
    category: 'achievements',
    author: 'Admin Team',
    authorRole: 'Communications',
    date: 'December 5, 2024',
    readTime: '4 min read',
    image: '/blog/graduation.jpg',
    featured: false,
    tags: ['Graduation', 'Web Development', 'Bootcamp'],
  },
];

const categories = [
  { id: 'all', label: 'All Posts', color: 'bg-gray-500' },
  { id: 'announcements', label: 'Announcements', color: 'bg-[#F28C28]' },
  { id: 'tech-tips', label: 'Tech Tips', color: 'bg-blue-500' },
  { id: 'tutorials', label: 'Tutorials', color: 'bg-purple-500' },
  { id: 'news', label: 'News', color: 'bg-green-500' },
  { id: 'achievements', label: 'Achievements', color: 'bg-[#1F5F6A]' },
];

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const categoryColor = categories.find(c => c.id === post.category)?.color || 'bg-gray-500';
  
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <div className={`absolute inset-0 ${categoryColor} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4A55] to-[#1F5F6A] flex items-center justify-center">
          <span className="text-4xl sm:text-5xl opacity-30">
            {post.category === 'announcements' && '📢'}
            {post.category === 'tech-tips' && '💡'}
            {post.category === 'tutorials' && '📖'}
            {post.category === 'news' && '📰'}
            {post.category === 'achievements' && '🏆'}
          </span>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 ${categoryColor} text-white text-xs font-medium rounded-full capitalize`}>
            {post.category.replace('-', ' ')}
          </span>
        </div>
        
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-[#4A4A4A] mb-3">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0F4A55] mb-2 group-hover:text-[#F28C28] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[#4A4A4A] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#F5F7F8] text-[#4A4A4A] text-xs rounded-full">
              #{tag.replace(' ', '')}
            </span>
          ))}
        </div>

        {/* Author & Read More */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1F5F6A] flex items-center justify-center text-white text-xs font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-xs font-medium text-[#0F4A55]">{post.author}</p>
              <p className="text-xs text-[#4A4A4A]">{post.authorRole}</p>
            </div>
          </div>
          
          <motion.span
            whileHover={{ x: 4 }}
            className="text-[#F28C28] text-sm font-medium flex items-center gap-1 cursor-pointer"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-[#0F4A55] to-[#1F5F6A] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-[#F28C28] text-xs sm:text-sm font-medium mb-4">
              📰 Blog & News
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Stay <span className="text-[#F28C28]">Updated</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 px-4 sm:px-0">
              Tech tips, industry news, student achievements, and announcements from TASHICO
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 sm:py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-sm sm:text-base"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </AnimatedSection>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 sm:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          {/* Category Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-[#F5F7F8] text-[#4A4A4A] hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Posts Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="w-16 h-16 bg-[#F5F7F8] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#4A4A4A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F4A55] mb-2">No posts found</h3>
                  <p className="text-[#4A4A4A]">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Newsletter Subscription */}
          <AnimatedSection delay={0.3} className="mt-16 sm:mt-20">
            <div className="bg-gradient-to-br from-[#0F4A55] to-[#1F5F6A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white">
              <div className="max-w-2xl mx-auto">
                <span className="text-3xl sm:text-4xl mb-4 block">📧</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-white/80 mb-6 text-sm sm:text-base">
                  Get the latest tech tips, course updates, and exclusive offers delivered to your inbox
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 sm:px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#F28C28] text-sm sm:text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 sm:px-8 py-3 bg-[#F28C28] hover:bg-[#E07B1A] text-white font-medium rounded-full transition-colors text-sm sm:text-base"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-[#F5F7F8]">
        <div className="container-custom">
          <AnimatedSection className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F4A55] mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-[#4A4A4A] mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Join thousands of successful graduates who transformed their careers with TASHICO
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[#1F5F6A] hover:bg-[#0F4A55] text-white rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-white hover:bg-gray-50 text-[#0F4A55] border border-[#1F5F6A]/20 rounded-full font-medium transition-colors text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
