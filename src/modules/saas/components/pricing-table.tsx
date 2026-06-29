'use client';

import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for beginners',
    features: [
      'Up to 1,000 requests/month',
      'Basic analytics',
      'Community support',
      'Standard performance',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    description: 'For growing businesses',
    featured: true,
    features: [
      'Up to 100,000 requests/month',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large scale operations',
    features: [
      'Unlimited requests',
      'Real-time analytics',
      '24/7 dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'White-label options',
    ],
  },
];

export function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-12">
      {pricingPlans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg p-8 transition ${
            plan.featured ? 'bg-blue-600 ring-2 ring-blue-400' : 'bg-slate-700'
          }`}
        >
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="text-slate-300 mb-6">{plan.description}</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">${plan.price}</span>
            <span className="text-slate-300">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-2 rounded-lg font-semibold transition ${
              plan.featured ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          >
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}
