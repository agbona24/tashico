import type { Metadata } from 'next';
import AchievementsPageContent from './AchievementsPageContent';

export const metadata: Metadata = {
  title: 'Achievements & Impact',
  description: 'Discover TASHICO\'s achievements: 3,000+ graduates trained, 400+ alumni in IT roles globally, strategic partnerships, and community digital literacy outreach programs.',
};

export default function AchievementsPage() {
  return <AchievementsPageContent />;
}
