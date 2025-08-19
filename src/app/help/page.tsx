import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HelpClient } from '@/components/HelpClient';

export const metadata: Metadata = {
  title: 'Help Center | AegisStack Support',
  description: 'Find answers and guides for AegisStack. Search our knowledge base for help with getting started, project management, AI features, and integrations.',
};

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <HelpClient />
      <Footer />
    </div>
  );
}
