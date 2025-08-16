import React, { useState } from 'react';
import { Bot, Settings, Zap, CheckCircle } from 'lucide-react';
import { AIKeyModal } from './AIKeyModal';

export const HowItWorks: React.FC = () => {
  const [showAIModal, setShowAIModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const startGeneration = () => {
    setIsGenerating(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

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

          <div className="card p-8">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-6">
              Live Demo: Test Generation
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Input Requirements</h4>
                <p className="text-sm text-gray-600">
                  "User login functionality with email validation and password reset"
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Generation Progress</span>
                  <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>

                {progress === 100 && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Generated 12 test cases successfully!</span>
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={startGeneration}
                disabled={isGenerating}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all ${
                  isGenerating 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'btn-primary'
                }`}
              >
                {isGenerating ? 'Generating...' : 'Start AI Generation'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showAIModal && (
        <AIKeyModal onClose={() => setShowAIModal(false)} />
      )}
    </section>
  );
};