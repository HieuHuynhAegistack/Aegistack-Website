'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';

interface Section {
  id: string;
  title: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, sections, children }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better accuracy
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Sticky Sidebar */}
            <aside className="md:w-1/4 mb-8 md:mb-0">
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
                <nav>
                  <ul className="space-y-2">
                    {sections.map(section => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left text-base transition-colors duration-200 ${activeSection === section.id
                              ? 'text-blue-600 font-semibold'
                              : 'text-gray-600 hover:text-blue-600'
                            }`}
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="prose prose-lg max-w-none text-gray-700 prose-h2:text-gray-900 prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 first-of-type:prose-h2:mt-0 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
