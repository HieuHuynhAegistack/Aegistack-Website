'use client';

import React, { useState, useMemo } from 'react';
import { Search, FileText, Settings, MessageCircle, Monitor, ChevronDown } from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: FileText,
    description: 'Learn the basics and set up your first project with AegisStack.',
    items: [
      'How to create a new project',
      'Inviting your team members',
      'Understanding the dashboard',
      'Setting up your first AI test case',
    ],
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: Settings,
    description: 'Manage your projects, teams, and settings efficiently.',
    items: [
      'Configuring project settings',
      'Managing roles and permissions',
      'Using project templates',
      'How to perform bulk operations',
    ],
  },
  {
    id: 'ai-features',
    title: 'AI Features',
    icon: MessageCircle,
    description: 'Leverage the power of AI to accelerate your testing workflow.',
    items: [
      'Generating test cases with AI',
      'Configuring different AI providers',
      'Interpreting AI-powered suggestions',
      'Troubleshooting common AI issues',
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Monitor,
    description: 'Connect AegisStack with your favorite tools and services.',
    items: [
      'Setting up the GitHub integration',
      'Connecting your Jira instance',
      'Enabling Slack notifications',
      'Using the AegisStack API',
    ],
  },
];

export function HelpClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) {
      return helpCategories;
    }
    return helpCategories
      .map(category => ({
        ...category,
        items: category.items.filter(item =>
          item.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter(category => category.items.length > 0);
  }, [searchQuery]);

  React.useEffect(() => {
    if (searchQuery && filteredCategories.length > 0) {
      setOpenCategory(filteredCategories[0].id);
    } else if (!searchQuery) {
      setOpenCategory(null);
    }
  }, [searchQuery, filteredCategories]);

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <main className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Help Center
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to our support hub. Find articles, guides, and answers to your questions about AegisStack.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-16 md:mb-20">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for articles... (e.g., 'how to add a project')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-14 pr-4 py-4 text-base border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
          />
        </div>

        {/* Main Content Layout */}
        <div className="max-w-4xl mx-auto">
          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ Accordion */}
          <div>
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <div key={category.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full p-5 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75 transition-colors"
                    >
                      <span className="text-lg font-semibold text-gray-800">{category.title}</span>
                      <ChevronDown
                        className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openCategory === category.id && (
                      <div className="px-5 pb-6 pt-2">
                        <ul className="space-y-4">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 group transition-colors">
                                <span className="w-1.5 h-1.5 mt-1 bg-gray-300 rounded-full group-hover:bg-blue-500 transition-colors flex-shrink-0"></span>
                                <span>{item}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center py-12 px-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800">No results found</h3>
                  <p className="text-gray-600 mt-2">Try adjusting your search query to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Still Need Help Section */}
        <div className="mt-16 md:mt-24 text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">
            Can't find the answer you're looking for?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is always here to help. Reach out to us for any questions or issues.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-md">
            Contact Support
          </button>
        </div>
      </div>
    </main>
  );
}
