"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
                        <div className="flex items-center mb-4">
              <button onClick={handleLogoClick} className="focus:outline-none">
              <img 
                src="/aegistack-light.webp" 
                alt="AegisStack"
                className="h-8 w-auto"
              />
            </button>
            </div>
            <p className="text-gray-400 mb-6">
              Streamline your project management with AI-powered QA automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavClick('features')} className="text-gray-400 hover:text-white transition-colors">Features</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('pricing')} className="text-gray-400 hover:text-white transition-colors">Pricing</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('how-it-works')} className="text-gray-400 hover:text-white transition-colors">How it Works</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('features')} className="text-gray-400 hover:text-white transition-colors">Integrations</button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AegisStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};