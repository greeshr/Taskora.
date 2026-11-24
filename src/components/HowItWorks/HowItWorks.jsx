import React from 'react';
import {
  Layers,
  Bot,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FolderPlus
} from 'lucide-react';
import './HowItWorks.css';

/**
 * HowItWorks Component
 * 
 * Features:
 * - Eyebrow badge: "SIMPLE WORKFLOW"
 * - Main heading: "Get more done in three simple steps"
 * - Supporting description
 * - Three horizontally arranged step cards on desktop, stacking on mobile
 * - Numbered step indicators: 01, 02, 03 with matching Lucide icons
 * - Visual connecting progression between steps on desktop
 * - Micro-UI snippets reinforcing the value of each step
 */
function HowItWorks() {
  const stepsData = [
    {
      stepNumber: '01',
      icon: Layers,
      title: 'Create Your Workspace',
      description: 'Set up your personal or team workspace and bring all your projects and tasks together.',
      highlight: 'Centralized Dashboard',
      snippet: '📁 Workspace initialized with smart folder hierarchy'
    },
    {
      stepNumber: '02',
      icon: Bot,
      title: 'Let AI Organize Your Day',
      description: 'Taskora intelligently prioritizes tasks, suggests schedules and helps you focus on what matters most.',
      highlight: 'Smart Auto-Prioritization',
      snippet: '⚡ AI identified 4 urgent priorities for today'
    },
    {
      stepNumber: '03',
      icon: Target,
      title: 'Track Progress and Achieve More',
      description: 'Monitor your progress, collaborate with your team and complete your goals with confidence.',
      highlight: 'Goal Completion',
      snippet: '🎯 Weekly milestones delivered ahead of schedule'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      {/* Decorative Background Lighting */}
      <div className="how-it-works-glow" aria-hidden="true" />

      <div className="container how-it-works-container">
        {/* Section Header */}
        <div className="how-it-works-header">
          <div className="how-it-works-eyebrow">
            <span className="eyebrow-dot" />
            <span>SIMPLE WORKFLOW</span>
          </div>

          <h2 className="how-it-works-title">
            Get more done in three simple steps
          </h2>

          <p className="how-it-works-subtitle">
            From planning to execution, Taskora makes productivity effortless.
          </p>
        </div>

        {/* Steps Grid with Visual Progression */}
        <div className="steps-wrapper">
          {/* Connecting progression line for desktop */}
          <div className="desktop-progress-line" aria-hidden="true" />

          <div className="steps-grid">
            {stepsData.map((step, index) => {
              const StepIcon = step.icon;

              return (
                <div key={step.stepNumber} className="step-card">
                  {/* Step Top Bar: Number Indicator & Icon Badge */}
                  <div className="step-top-row">
                    <div className="step-number-wrap">
                      <span className="step-number-text">{step.stepNumber}</span>
                      <span className="step-number-label">STEP</span>
                    </div>

                    <div className="step-icon-badge">
                      <StepIcon size={26} className="step-icon" />
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="step-body">
                    <span className="step-highlight-tag">{step.highlight}</span>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-desc">{step.description}</p>
                  </div>

                  {/* Micro Visual Snippet */}
                  <div className="step-snippet-box">
                    <p className="step-snippet-text">{step.snippet}</p>
                  </div>

                  {/* Step Arrow Indicator (visible between steps on desktop) */}
                  {index < stepsData.length - 1 && (
                    <div className="step-desktop-arrow" aria-hidden="true">
                      <ArrowRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
