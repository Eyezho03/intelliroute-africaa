import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Starter Plan',
    price: 'KES 2,500/month',
    description: 'Best for small shops or startups managing limited deliveries',
    features: [
      'Up to 100 deliveries/month',
      'Basic AI route optimization',
      'Real-time delivery tracking (1 driver)',
      'Inventory sync for up to 100 SKUs',
      'Basic performance analytics',
      '2 user accounts (Admin + 1 Driver)',
      'Mobile & web access',
      'M-PESA integration',
      'WhatsApp/SMS notifications (100/month)',
      'KES 30 per extra delivery beyond 100',
    ],
  },
  {
    name: 'Growth Plan',
    price: 'KES 4,000/month',
    description: 'Best for mid-sized agri-distributors, retailers, or e-commerce shops',
    features: [
      'Up to 300 deliveries/month',
      'Full AI route optimization',
      'Real-time multi-driver tracking (up to 3 drivers)',
      'Inventory sync with low-stock alerts',
      'Advanced delivery & driver performance analytics',
      '5 user accounts',
      'Offline mobile access + auto-sync',
      'PWA + Android App',
      '300 WhatsApp/SMS notifications/month',
      'KES 35 per extra delivery beyond 300',
    ],
  },
  {
    name: 'Pro Plan',
    price: 'KES 6,500/month',
    description: 'Best for fast-scaling businesses with high-volume deliveries',
    features: [
      'Up to 750 deliveries/month',
      'Advanced AI route logic + delivery clustering',
      'Unlimited drivers with GPS tracking',
      'Warehouse-level inventory + predictive restocking insights',
      'Full analytics dashboard (driver, inventory, delivery KPIs)',
      '10 user accounts',
      'Full mobile/offline functionality',
      '500 WhatsApp/SMS notifications/month',
      'Priority support + onboarding session',
      'KES 40 per extra delivery beyond 750',
    ],
  },
];

const addons = [
  'Additional Inventory Units: KES 300/month per extra 100 SKUs',
  'In-person setup & training: KES 7,000 one-time',
  'Custom integrations (e.g., POS, CRM): Priced on request',
];

const Pricing = () => (
  <div className="ira-pricing">
    <h2>Pricing Plans</h2>
    <div className="ira-pricing-row">
      {plans.map((plan) => (
        <div className="ira-pricing-card" key={plan.name}>
          <h3>{plan.name}</h3>
          <div className="ira-pricing-price">{plan.price}</div>
          <div className="ira-pricing-desc">{plan.description}</div>
          <ul className="ira-pricing-features">
            {plan.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <div className="ira-pricing-addons">
      <h3>Optional Add-Ons</h3>
      <ul>
        {addons.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  </div>
);

export default Pricing; 