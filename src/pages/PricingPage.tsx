import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PricingCard } from '../components/PricingCard';
import { PricingModal } from '../components/PricingModal';
import { Check, X } from 'lucide-react';
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

const comparisonFeatures = [
  { name: 'Team Members', basic: '5', enterprise: 'Unlimited' },
  { name: 'Active Projects', basic: '3', enterprise: 'Unlimited' },
  { name: 'AI Test Generation', basic: '100/month', enterprise: 'Unlimited' },
  { name: 'Analytics & Reporting', basic: 'Basic', enterprise: 'Advanced + Custom' },
  { name: 'Support', basic: 'Email', enterprise: 'Priority + CSM' },
  { name: 'Integrations', basic: 'Standard', enterprise: 'Custom + API' },
  { name: 'SSO', basic: false, enterprise: true },
  { name: 'On-premise Deployment', basic: false, enterprise: true },
];

export const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-5xl font-bold text-gray-900 mb-6">
              Choose the right plan for your team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start with a 14-day free trial. No credit card required. 
              Upgrade or downgrade at any time.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No setup fees</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {plans.map((plan) => (
                <PricingCard
                  key={plan.id}
                  plan={plan}
                  onSelect={() => setSelectedPlan(plan)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Compare Plans
              </h2>
              <p className="text-lg text-gray-600">
                See what's included in each plan to make the best choice for your team.
              </p>
            </div>

            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Basic</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof feature.basic === 'boolean' ? (
                            feature.basic ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.basic}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-gray-700">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedPlan && (
        <PricingModal
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  );
};