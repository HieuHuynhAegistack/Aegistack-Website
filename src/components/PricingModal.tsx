import React, { useState } from 'react';
import { X, Building, User } from 'lucide-react'; // Assuming User icon for Basic plan
import type { PricingPlan } from '../types';

interface PricingModalProps {
  plan: PricingPlan;
  onClose: () => void;
}

export const PricingModal: React.FC<PricingModalProps> = ({ plan, onClose }) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Plan selection:', { plan: plan.id, email, company, teamSize });
    // Handle plan selection logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 ease-in-out scale-100">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Get Started with {plan.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              {plan.id === 'pro' ? (
                <Building className="w-5 h-5 text-blue-600" />
              ) : (
                <User className="w-5 h-5 text-blue-600" />
              )}
              <div>
                <p className="font-semibold text-blue-900">{plan.name} Plan</p>
                <p className="text-sm text-blue-700">{plan.price === 'Free' ? 'Free' : `$${plan.price}/month`}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow shadow-sm"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow shadow-sm"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Team Size
              </label>
              <input
                type="text"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-shadow shadow-sm"
                placeholder="e.g., 1-5, 20-50"
              />
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn-secondary py-2.5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-yellow py-2.5"
              >
                {plan.id === 'pro' ? 'Contact Sales' : 'Start Trial'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};