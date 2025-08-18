import { About } from '../src/components/About';
import { Contact } from '../src/components/Contact';
import { Features } from '../src/components/Features';
import { Footer } from '../src/components/Footer';
import { Header } from '../src/components/Header';
import { Hero } from '../src/components/Hero';
import { HowItWorks } from '../src/components/HowItWorks';
import { Pricing } from '../src/components/Pricing';

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
