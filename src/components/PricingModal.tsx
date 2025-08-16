import React, { useState } from 'react';
import { X, CreditCard, Building } from 'lucide-react';
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
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-bold text-gray-900">
              Get Started with {plan.name}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-center space-x-3">
              {plan.id === 'enterprise' ? (
                <Building className="w-5 h-5 text-blue-600" />
              ) : (
                <CreditCard className="w-5 h-5 text-blue-600" />
              )}
              <div>
                <p className="font-medium text-blue-900">{plan.name} Plan</p>
                <p className="text-sm text-blue-700">{plan.price}/{plan.period}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Size
              </label>
              <select
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select team size</option>
                <option value="1-5">1-5 members</option>
                <option value="6-20">6-20 members</option>
                <option value="21-50">21-50 members</option>
                <option value="50+">50+ members</option>
              </select>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary"
              >
                {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Trial'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};