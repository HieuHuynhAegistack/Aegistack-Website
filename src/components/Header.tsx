import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src="/aegistack-light.webp" 
                alt="AegisStack" 
                className="w-auto h-8 hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Navigation and CTA */}
          <div className="items-center hidden space-x-6 md:flex">
            <nav className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Features
              </button>
              <Link href="/pricing" className="text-gray-600 transition-colors hover:text-gray-900">
                Pricing
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Contact
              </button>
            </nav>
            
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="py-4 border-t border-gray-100 md:hidden">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-gray-900"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-gray-600 hover:text-gray-900"
              >
                Features
              </button>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </Link>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 hover:text-gray-900"
              >
                Contact
              </button>
              <div className="flex flex-col pt-4 space-y-3 border-t border-gray-100">
                <button className="text-center btn-primary">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};