import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { ContactForm } from '../components/ContactForm';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy and data security are our top priorities. Learn how we protect 
              and handle your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Privacy Highlights */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Data Protection
                </h3>
                <p className="text-gray-600 text-sm">
                  Enterprise-grade security with SOC 2 compliance
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Encryption
                </h3>
                <p className="text-gray-600 text-sm">
                  AES-256 encryption for data at rest and in transit
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Transparency
                </h3>
                <p className="text-gray-600 text-sm">
                  Clear data usage policies with no hidden practices
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">
                  Data Control
                </h3>
                <p className="text-gray-600 text-sm">
                  You own your data with full export and deletion rights
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="card p-8 space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    use our services, or contact us for support. This includes:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Account information (name, email, company details)</li>
                    <li>Project data and test cases you create</li>
                    <li>Usage analytics to improve our service</li>
                    <li>Communication preferences and support interactions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Deliver and enhance AegisStack features</li>
                    <li>Process AI-powered test case generation</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send important service updates and security notifications</li>
                    <li>Analyze usage patterns to improve user experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>SOC 2 Type II compliance and GDPR adherence</li>
                    <li>Multi-factor authentication and role-based access controls</li>
                    <li>Secure API key management with client-side encryption</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    Your Rights
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have full control over your data and can exercise the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Access and download your data at any time</li>
                    <li>Correct or update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Opt out of non-essential communications</li>
                    <li>Request data portability to another service</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">
                    Questions about our privacy practices?
                  </h3>
                  <p className="text-blue-800 mb-4">
                    Contact our privacy team at privacy@aegistack.com or reach out through our support channels.
                  </p>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="btn-primary"
                  >
                    Contact Privacy Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Contact Modal */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Privacy Team"
      >
        <div className="p-6">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};