import type { Metadata } from 'next';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';

export const metadata: Metadata = {
  title: 'AegisStack | Intelligent QA & Project Management for Modern Teams',
  description: 'Supercharge your development with AegisStack. Generate test cases with AI, manage projects seamlessly, and ensure top-tier quality assurance. Start your free trial today!',
};

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
