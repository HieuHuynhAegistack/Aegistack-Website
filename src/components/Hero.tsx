import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Modal } from './Modal';
import { ContactForm } from './ContactForm';

export const Hero: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bg-blue-200 rounded-full top-20 right-10 w-72 h-72 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute delay-1000 rounded-full bottom-20 left-10 w-72 h-72 bg-cyan-200 mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="text-center lg:text-left">
            
            
            <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 font-heading lg:text-6xl">
              Streamline your project management with AI-powered QA
            </h1>
            
            <p className="max-w-2xl mb-8 text-xl text-gray-600">
              Transform your development workflow with intelligent test case generation, 
              seamless project tracking, and automated quality assurance that scales with your team.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center justify-center space-x-2 text-lg btn-primary"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
            </div>

            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-500 lg:justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Product Screenshot */}
          <div className="relative">
            <div className="relative overflow-hidden bg-white border border-gray-200 shadow-2xl rounded-2xl">
              <div className="flex items-center px-4 py-3 space-x-2 bg-gray-100">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-500">AegisStack Dashboard</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Project Overview</h3>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                      <div className="w-8 h-8 bg-green-100 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-white shadow-sm rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-sm text-gray-500">Active Tasks</div>
                    </div>
                    <div className="p-4 bg-white shadow-sm rounded-xl">
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <div className="text-sm text-gray-500">Test Cases</div>
                    </div>
                    <div className="p-4 bg-white shadow-sm rounded-xl">
                      <div className="text-2xl font-bold text-cyan-600">98%</div>
                      <div className="text-sm text-gray-500">Coverage</div>
                    </div>
                  </div>
                  <div className="p-4 bg-white shadow-sm rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">AI Test Generation</span>
                      <span className="text-sm text-green-600">Complete</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div className="w-full h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute p-3 text-white bg-green-500 shadow-lg -top-4 -right-4 rounded-2xl">
              <div className="text-sm font-medium">✓ Tests Passed</div>
            </div>
            <div className="absolute p-3 text-white bg-blue-500 shadow-lg -bottom-4 -left-4 rounded-2xl">
                            <div className="text-sm font-medium">✨ AI Generated</div>
            </div>
          </div>
        </div>
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
    </section>
  );
};