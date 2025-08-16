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
    <section id="pricing" className="py-24 text-white bg-blue-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white font-heading">
            Simple, transparent pricing
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-blue-100">
            Choose the plan that fits your team size and project complexity. 
            All plans include our core features with a 14-day free trial.
          </p>
        </div>

        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelect={() => setSelectedPlan(plan)}
            />
          ))}
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