import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { PricingModal } from './PricingModal';
import type { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$29',
    period: 'month',
    description: 'Perfect for small teams getting started with QA automation',
    features: [
      'Up to 5 team members',
      '3 active projects',
      'AI test case generation (100/month)',
      'Basic analytics and reporting',
      'Email support',
      'Standard integrations'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$99',
    period: 'month',
    description: 'Advanced features for scaling teams and complex projects',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Unlimited AI test generation',
      'Advanced analytics & custom reports',
      'Priority support & dedicated CSM',
      'Custom integrations & API access',
      'SSO and advanced security',
      'On-premise deployment options'
    ],
    popular: true,
    cta: 'Contact Sales'
  }
];

export const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your team size and project complexity. 
            All plans include our core features with a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelect={() => setSelectedPlan(plan)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution for your enterprise?
          </p>
          <button className="btn-secondary">
            Contact Our Sales Team
          </button>
        </div>
      </div>

      {selectedPlan && (
        <PricingModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
};