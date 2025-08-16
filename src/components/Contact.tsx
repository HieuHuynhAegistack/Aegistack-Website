import React from 'react';
import { Mail, Globe, HelpCircle, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about AegisStack? Our team is here to help you get started 
            and make the most of our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
              Website
            </h3>
            <p className="text-gray-600 mb-4">
              Visit our main website for more information
            </p>
            <a 
              href="https://aegistack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              aegistack.com →
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
              Customer Support
            </h3>
            <p className="text-gray-600 mb-4">
              Get help from our support team
            </p>
            <a 
              href="mailto:support@aegistack.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              support@aegistack.com →
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
              Help Center
            </h3>
            <p className="text-gray-600 mb-4">
              Browse our documentation and guides
            </p>
            <a 
              href="/help"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              View Help Center →
            </a>
          </div>

          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
              Privacy Policy
            </h3>
            <p className="text-gray-600 mb-4">
              Learn how we protect your data
            </p>
            <a 
              href="/privacy"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Read Policy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};