import React from 'react';
import { Check } from 'lucide-react';
import type { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
  onSelect: () => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, onSelect }) => {
  const cardClasses = [
    'p-8',
    'flex',
    'flex-col',
    'h-full',
    'relative',
    'bg-white',
    'rounded-2xl',
    'shadow-lg',
    plan.popular ? 'border-2 border-yellow-400' : 'border border-gray-200'
  ];

  return (
    <div className={cardClasses.join(' ')}>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{plan.name}</h3>
      <div className="mb-6">
        {plan.price === 'Free' ? (
          <span className="text-5xl font-bold text-gray-900">Free</span>
        ) : (
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
            <span className="text-gray-500 ml-2">/mo</span>
          </div>
        )}
      </div>

      <hr className="mb-6 border-gray-200" />

      <p className="mb-4 text-sm text-gray-600">{plan.description}</p>

      <ul className="space-y-3 mb-8 text-gray-700 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <button 
          onClick={onSelect} 
          className={`w-full ${plan.popular ? 'btn-yellow' : 'btn-secondary'}`}>
          {plan.cta}
        </button>
      </div>
    </div>
  );
};