import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';
import { ContactForm } from '../components/ContactForm';
import { Search, Book, MessageCircle, Video, FileText, ChevronRight } from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Book,
    articles: [
      'Setting up your first project',
      'Inviting team members',
      'Configuring AI settings',
      'Creating your first test case'
    ]
  },
  {
    id: 'project-management',
    title: 'Project Management',
    icon: FileText,
    articles: [
      'Managing project settings',
      'Role-based permissions',
      'Project templates',
      'Bulk operations'
    ]
  },
  {
    id: 'ai-features',
    title: 'AI Features',
    icon: MessageCircle,
    articles: [
      'AI test case generation',
      'Configuring AI providers',
      'Understanding AI suggestions',
      'Troubleshooting AI issues'
    ]
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Video,
    articles: [
      'Connecting to GitHub',
      'Jira integration setup',
      'Slack notifications',
      'API documentation'
    ]
  }
];

export const HelpPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.articles.some(article => 
      article.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

    return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to your questions and learn how to get the most out of AegisStack.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="card p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.articles.map((article, index) => (
                        <li key={index}>
                          <button className="text-left text-gray-600 hover:text-blue-600 transition-colors group flex items-center justify-between w-full">
                            <span className="text-sm">{article}</span>
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Still need help?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="btn-primary"
              >
                Contact Support
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Contact Modal */}
      <Modal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        title="Contact Support"
      >
        <div className="p-6">
          <ContactForm />
        </div>
      </Modal>
    </div>
  );
};