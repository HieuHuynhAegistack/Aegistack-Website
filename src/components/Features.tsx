import React, { useState } from 'react';
import { FeatureCard } from './FeatureCard';
import { FeatureModal } from './FeatureModal';
import type { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'project-management',
    title: 'Project & Member Management',
    description: 'Organize teams and projects with intuitive workspace management, role-based permissions, and seamless collaboration tools.',
    icon: 'users',
    details: [
      'Create and manage multiple projects with custom banners',
      'Invite team members with role-based access control',
      'Real-time collaboration and activity tracking',
      'Advanced member management with bulk operations'
    ]
  },
  {
    id: 'task-tracking',
    title: 'Planning & Task Tracking',
    description: 'Track progress with advanced task management, epic linking, and intelligent automation for streamlined workflows.',
    icon: 'check-square',
    details: [
      'Create tasks with custom fields and priorities',
      'Link tasks to epics for better organization',
      'Bulk operations for efficient task management',
      'Advanced filtering and search capabilities'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI-Powered Automation',
    description: 'Leverage artificial intelligence to automatically generate comprehensive test cases and optimize your QA processes.',
    icon: 'zap',
    details: [
      'Automatic test case generation from requirements',
      'Intelligent test coverage analysis',
      'AI-suggested improvements and optimizations',
      'Smart duplicate detection and merging'
    ]
  },
  {
    id: 'test-management',
    title: 'Test Case Management',
    description: 'Comprehensive test case creation, execution tracking, and standardized formatting for consistent quality assurance.',
    icon: 'test-tube',
    details: [
      'Create manual and automated test cases',
      'Standardized formatting with validation',
      'Test execution tracking and reporting',
      'Integration with popular testing frameworks'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Reporting',
    description: 'Gain insights with detailed analytics, progress tracking, and customizable reports for data-driven decisions.',
    icon: 'bar-chart',
    details: [
      'Real-time project analytics and metrics',
      'Customizable dashboards and reports',
      'Test coverage and quality metrics',
      'Export capabilities for stakeholder reporting'
    ]
  },
  {
    id: 'test-case-automation',
    title: 'Test Case Automation',
    description: 'Automate your testing process with intelligent test script generation, seamless execution, and faster validation cycles. Save time, reduce manual effort, and ensure higher product quality.',
    icon: 'clipboard-check',
    details: [
      'Automatically generate test scripts from requirements or user flows',
      'Execute automated tests across multiple environments and platforms',
      'Real-time reporting with detailed logs and insights',
      'Integrate seamlessly with CI/CD pipelines for continuous testing'
    ]
  }
];

export const Features: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section id="features" className="py-24 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-white mb-4">
            Everything you need to ship quality software
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From project planning to test execution, AegisStack provides a complete toolkit 
            for modern development teams who prioritize quality and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </div>
      </div>

      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </section>
  );
};