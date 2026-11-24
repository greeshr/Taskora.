import React from 'react';
import {
  Sparkles,
  CalendarDays,
  Users,
  BarChart3,
  Workflow,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';
import './Features.css';

/**
 * Features Component
 * 
 * Features:
 * - Eyebrow badge: "POWERFUL FEATURES"
 * - Main heading: "Everything you need to master your workflow"
 * - Supporting description
 * - 6 feature cards rendered dynamically from a structured data model
 * - Interactive hover effects with icon gradient transitions and elevation
 * - Responsive 3-col (desktop) -> 2-col (tablet) -> 1-col (mobile) grid
 */
function Features() {
  const featuresList = [
    {
      id: 'ai-prioritization',
      icon: Sparkles,
      title: 'AI Task Prioritization',
      description: 'Automatically identify urgent and important tasks and recommend what to work on next.',
      tag: 'AI Powered',
    },
    {
      id: 'smart-scheduling',
      icon: CalendarDays,
      title: 'Smart Scheduling',
      description: 'Organize your day with intelligent scheduling and deadline management.',
      tag: 'Intelligent',
    },
    {
      id: 'real-time-collaboration',
      icon: Users,
      title: 'Real-Time Collaboration',
      description: 'Work together with teammates, assign tasks and track progress.',
      tag: 'Team Sync',
    },
    {
      id: 'productivity-analytics',
      icon: BarChart3,
      title: 'Productivity Analytics',
      description: 'Visualize your performance through progress reports and productivity insights.',
      tag: 'Deep Insights',
    },
    {
      id: 'automated-workflows',
      icon: Workflow,
      title: 'Automated Workflows',
      description: 'Reduce repetitive work with intelligent task automation.',
      tag: 'Time Saver',
    },
    {
      id: 'secure-cloud-workspace',
      icon: ShieldCheck,
      title: 'Secure Cloud Workspace',
      description: 'Keep projects and important information organized in one accessible workspace.',
      tag: 'Bank-Grade',
    },
  ];

  return (
    <section className="features-section" id="features">
      {/* Decorative Background Element */}
      <div className="features-bg-glow" aria-hidden="true" />

      <div className="container features-container">
        {/* Section Header */}
        <div className="features-header">
          <div className="features-eyebrow">
            <span className="eyebrow-dot" />
            <span>POWERFUL FEATURES</span>
          </div>

          <h2 className="features-title">
            Everything you need to master your workflow
          </h2>

          <p className="features-subtitle">
            Designed to remove clutter, automate repetitive work, and keep your tasks on track.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="features-grid">
          {featuresList.map((feature) => {
            const IconComponent = feature.icon;

            return (
              <div key={feature.id} className="feature-card">
                {/* Card Top: Icon & Feature Tag */}
                <div className="card-top">
                  <div className="feature-icon-box">
                    <IconComponent className="feature-icon" size={24} />
                  </div>
                  <span className="feature-tag">{feature.tag}</span>
                </div>

                {/* Card Content */}
                <div className="card-body">
                  <h3 className="feature-card-title">{feature.title}</h3>
                  <p className="feature-card-desc">{feature.description}</p>
                </div>

                {/* Card Micro-Interaction Footer */}
                <div className="card-footer">
                  <span className="card-action-text">Learn more</span>
                  <ArrowUpRight size={16} className="card-action-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
