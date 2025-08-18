'use client';

import React, { useState } from 'react';
import { Bot, Settings, Zap } from 'lucide-react';
import { AIKeyModal } from './AIKeyModal';

export const HowItWorks: React.FC = () => {
  const [showAIModal, setShowAIModal] = useState(false);

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Test Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how AegisStack automatically generates comprehensive test cases 
            from your project requirements using advanced AI technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                  Configure AI Settings
                </h3>
                <p className="text-gray-600">
                  Set up your AI preferences and API keys securely. Your credentials are encrypted 
                  and stored safely in your environment.
                </p>
                <button 
                  onClick={() => setShowAIModal(true)}
                  className="mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  Configure AI Settings →
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Bot className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                  AI Analysis
                </h3>
                <p className="text-gray-600">
                  Our AI analyzes your project requirements, user stories, and existing code 
                  to understand the testing scope and complexity.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
                  Automatic Generation
                </h3>
                <p className="text-gray-600">
                  Generate comprehensive test cases with detailed steps, expected outcomes, 
                  and edge case coverage in seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-2">
            <video
              src="/how-it-work.mov"
              className="rounded-xl"
              controls
              playsInline
            />
          </div>
        </div>
      </div>

      {showAIModal && (
        <AIKeyModal onClose={() => setShowAIModal(false)} />
      )}
    </section>
  );
};