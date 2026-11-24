import React from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import './Pricing.css';

/**
 * Pricing Component
 * 
 * Features:
 * - Eyebrow badge: "SIMPLE, TRANSPARENT PRICING"
 * - Main heading: "Plans that grow with your productivity"
 * - Supporting description: "Start for free and upgrade when you're ready to do more."
 * - Three pricing plans: Free (₹0), Pro (₹499 - Most Popular), Team (₹1,499)
 * - Check icons for every included feature
 * - Functional buttons scrolling smoothly to the Contact section
 * - Fully responsive horizontal desktop -> vertical mobile grid
 */
function Pricing() {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '₹0',
      period: '/month',
      target: 'For individuals getting started.',
      isPopular: false,
      buttonText: 'Get Started Free',
      features: [
        'Up to 5 active projects',
        'Basic task management',
        'Personal workspace',
        'Basic productivity insights',
        'Community support',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹499',
      period: '/month',
      target: 'For students and freelancers who want more.',
      isPopular: true,
      popularLabel: 'MOST POPULAR',
      buttonText: 'Choose Pro',
      features: [
        'Unlimited projects',
        'AI task prioritization',
        'Smart scheduling',
        'Advanced productivity analytics',
        'Priority support',
      ],
    },
    {
      id: 'team',
      name: 'Team',
      price: '₹1,499',
      period: '/month',
      target: 'For teams that want to collaborate efficiently.',
      isPopular: false,
      buttonText: 'Choose Team',
      features: [
        'Everything in Pro',
        'Team collaboration workspace',
        'Task assignment and tracking',
        'Shared project dashboards',
        'Advanced team analytics',
      ],
    },
  ];

  // Functional scroll to Contact section
  const handlePlanClick = (e, planName) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pricing-section" id="pricing">
      {/* Decorative Background Glow */}
      <div className="pricing-bg-glow" aria-hidden="true" />

      <div className="container pricing-container">
        {/* Section Header */}
        <div className="pricing-header">
          <div className="pricing-eyebrow">
            <span className="eyebrow-dot" />
            <span>SIMPLE, TRANSPARENT PRICING</span>
          </div>

          <h2 className="pricing-title">
            Plans that grow with your productivity
          </h2>

          <p className="pricing-subtitle">
            Start for free and upgrade when you're ready to do more.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.isPopular ? 'popular-card' : ''}`}
            >
              {/* Popular Pill Badge */}
              {plan.isPopular && (
                <div className="popular-badge">
                  <Sparkles size={13} className="badge-sparkle" />
                  <span>{plan.popularLabel}</span>
                </div>
              )}

              {/* Card Header */}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-target">{plan.target}</p>

                <div className="plan-price-wrap">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="plan-cta-wrap">
                <a
                  href="#contact"
                  className={`btn-pricing ${plan.isPopular ? 'btn-popular' : 'btn-outline'}`}
                  onClick={(e) => handlePlanClick(e, plan.name)}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight size={16} className="btn-arrow" />
                </a>
              </div>

              {/* Features List */}
              <div className="plan-features">
                <span className="features-headline">Included Features:</span>
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <div className="check-icon-box">
                        <Check size={14} className="check-icon" />
                      </div>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Trust Guarantee Footer */}
        <div className="pricing-guarantee-bar">
          <div className="guarantee-item">
            <ShieldCheck size={16} className="guarantee-icon" />
            <span>14-day money-back guarantee</span>
          </div>
          <div className="guarantee-item">
            <Check size={16} className="guarantee-icon" />
            <span>Cancel or switch plans anytime</span>
          </div>
          <div className="guarantee-item">
            <HelpCircle size={16} className="guarantee-icon" />
            <span>GST invoices available for teams</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
