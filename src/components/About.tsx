import React from 'react';
import { Shield, Target, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 font-heading">
            About AegisStack
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We're revolutionizing project management and quality assurance with AI-powered solutions 
            that help development teams deliver better software, faster.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div>
            <h3 className="mb-6 text-3xl font-bold text-gray-900 font-heading">
              Our Mission
            </h3>
            <p className="mb-6 text-lg text-gray-600">
              At AegisStack, we believe that quality assurance shouldn't be a bottleneck in your development process. 
              Our AI-powered platform transforms the way teams approach testing, project management, and quality control.
            </p>
            <p className="text-lg text-gray-600">
              We combine cutting-edge artificial intelligence with intuitive design to create tools that not only 
              automate repetitive tasks but also provide intelligent insights that help teams make better decisions faster.
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-2xl">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">Secure & Reliable</h4>
                <p className="text-sm text-gray-600">Enterprise-grade security with 99.9% uptime guarantee</p>
              </div>
              
              <div className="p-6 bg-green-50 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-2xl">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">Precision Testing</h4>
                <p className="text-sm text-gray-600">AI-generated test cases with 98% accuracy rate</p>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-2xl">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">Team Collaboration</h4>
                <p className="text-sm text-gray-600">Seamless integration with your existing workflow</p>
              </div>
              
              <div className="p-6 bg-orange-50 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-orange-100 rounded-2xl">
                  <Zap className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">Lightning Fast</h4>
                <p className="text-sm text-gray-600">Reduce testing time by up to 80% with automation</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
