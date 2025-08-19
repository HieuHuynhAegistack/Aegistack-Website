'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Modal } from './Modal';
import { ContactForm } from './ContactForm';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
                    <div className="flex items-center space-x-3">
            <button onClick={handleLogoClick} className="focus:outline-none">
              <Image
                src="/aegistack-light.webp"
                alt="AegisStack"
                height={32}
                width={128}
                className="hover:opacity-80 transition-opacity"
              />
            </button>
          </div>

          {/* Navigation and CTA */}
          <div className="items-center hidden space-x-6 md:flex">
            <nav className="flex items-center space-x-6">
              <button onClick={() => handleNavClick('about')} className="text-gray-600 transition-colors hover:text-gray-900">About</button>
              <button onClick={() => handleNavClick('features')} className="text-gray-600 transition-colors hover:text-gray-900">Features</button>
              <button onClick={() => handleNavClick('pricing')} className="text-gray-600 transition-colors hover:text-gray-900">Pricing</button>
              <button onClick={() => handleNavClick('contact')} className="text-gray-600 transition-colors hover:text-gray-900">Contact</button>
            </nav>
            
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="btn-primary"
            >
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
              <button onClick={() => handleNavClick('about')} className="text-left text-gray-600 hover:text-gray-900">About</button>
              <button onClick={() => handleNavClick('features')} className="text-left text-gray-600 hover:text-gray-900">Features</button>
              <button onClick={() => handleNavClick('pricing')} className="text-left text-gray-600 hover:text-gray-900">Pricing</button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-gray-600 hover:text-gray-900">Contact</button>
              <div className="flex flex-col pt-4 space-y-3 border-t border-gray-100">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-center btn-primary"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Get Started with AegisStack"
      >
        <div className="p-6">
          <ContactForm />
        </div>
      </Modal>
    </header>
  );
};