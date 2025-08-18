import React, { useState } from 'react';
import { PricingCard } from './PricingCard';
import { PricingModal } from './PricingModal';
import type { PricingPlan } from '../types';

const plansData: Record<string, Omit<PricingPlan, 'price' | 'period' | 'cta'> & { price: { monthly: string; yearly: string }, cta: { monthly: string; yearly: string; } }> = {
  hobby: {
    id: 'hobby',
    name: 'Hobby',
    price: { monthly: 'Free', yearly: 'Free' },
    description: 'Includes',
    features: [
      'Pro two-week trial',
      'Limited Agent requests',
      'Limited Tab completions',
    ],
    cta: { monthly: 'Start Free Trial', yearly: 'Start Free Trial' },
    buttonVariant: 'secondary',
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    price: { monthly: '$19', yearly: '$15.2' }, // Assuming 20% discount for yearly
    description: 'Everything in Hobby, plus',
    features: [
      'Extended limits on Agent',
      'Unlimited Tab completions',
      'Access to Background Agents',
      'Access to Bugbot',
      'Access to maximum context windows',
    ],
    cta: { monthly: 'Contact Sales', yearly: 'Contact Sales' },
    popular: true,
  },
};

export const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

    type PlanDataType = typeof plansData[keyof typeof plansData];

  const getPlanForCycle = (plan: PlanDataType): PricingPlan => ({
    ...plan,
    price: plan.price[billingCycle],
    cta: plan.cta[billingCycle],
    period: billingCycle === 'monthly' ? 'mo' : 'mo',
  });

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

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 space-x-1 bg-gray-800 rounded-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${billingCycle === 'monthly' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
              MONTHLY
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors flex items-center ${billingCycle === 'yearly' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
              YEARLY
              <span className="ml-2 text-xs text-green-400">(SAVE 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid max-w-4xl gap-8 mx-auto md:grid-cols-2 items-stretch">
          {Object.values(plansData).map((plan) => (
            <PricingCard
              key={plan.id}
              plan={getPlanForCycle(plan)}
              onSelect={() => setSelectedPlan(getPlanForCycle(plan))}
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