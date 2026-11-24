import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CheckCircle2,
  Clock,
  Calendar,
  TrendingUp,
  Search,
  Bell,
  Plus,
  CheckSquare,
  Bot,
  Users,
  Check,
  ChevronRight,
  Flame
} from 'lucide-react';
import './Hero.css';

/**
 * Hero Component
 * 
 * Features:
 * - "AI-Powered Productivity" pill badge with icon
 * - Main title with lavender gradient styling
 * - Compelling product overview copy
 * - Two functional CTAs: "Start for Free" (#pricing) and "Explore Features" (#features)
 * - Realistic, interactive-looking SaaS Productivity Dashboard preview
 */
function Hero() {
  // State for toggling tasks in the dashboard preview for realistic feel
  const [completedTasks, setCompletedTasks] = useState({
    task1: false,
    task2: true,
    task3: false,
  });

  const toggleTask = (taskId) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Weekly productivity chart data
  const weeklyData = [
    { day: 'Mon', height: '65%', count: 8 },
    { day: 'Tue', height: '85%', count: 12 },
    { day: 'Wed', height: '100%', count: 16, active: true },
    { day: 'Thu', height: '75%', count: 10 },
    { day: 'Fri', height: '90%', count: 14 },
    { day: 'Sat', height: '40%', count: 5 },
    { day: 'Sun', height: '55%', count: 7 },
  ];

  return (
    <section className="hero-section" id="hero">
      {/* Decorative Background Glows */}
      <div className="hero-glow hero-glow-top" aria-hidden="true" />
      <div className="hero-glow hero-glow-bottom" aria-hidden="true" />

      <div className="container hero-container">
        {/* Top Text Content */}
        <div className="hero-header-content">
          {/* AI Badge */}
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>AI-Powered Productivity</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-title">
            Organize, Prioritize, and Achieve with{' '}
            <span className="hero-title-highlight">Taskora</span>
          </h1>

          {/* Supporting Description */}
          <p className="hero-description">
            Taskora empowers students, freelancers, and ambitious teams to organize complex workflows, 
            automate task prioritization with smart AI, and hit every deadline without the burnout.
          </p>

          {/* Functional Call-To-Action Buttons */}
          <div className="hero-cta-group">
            <a
              href="#pricing"
              className="btn-hero-primary"
              onClick={(e) => handleScrollTo(e, 'pricing')}
            >
              <span>Start for Free</span>
              <ArrowRight size={18} className="btn-icon" />
            </a>

            <a
              href="#features"
              className="btn-hero-secondary"
              onClick={(e) => handleScrollTo(e, 'features')}
            >
              <Compass size={18} className="btn-icon-secondary" />
              <span>Explore Features</span>
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-icon" />
              <span>No credit card required</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-icon" />
              <span>Free 14-day team trial</span>
            </div>
            <div className="trust-item">
              <CheckCircle2 size={15} className="trust-icon" />
              <span>Setup in under 2 minutes</span>
            </div>
          </div>
        </div>

        {/* =================================================================
            Realistic SaaS Dashboard Preview
            ================================================================= */}
        <div className="dashboard-preview-wrapper">
          <div className="dashboard-window">
            {/* Window Top Navigation Bar */}
            <div className="window-header">
              <div className="window-dots">
                <span className="dot dot-close" />
                <span className="dot dot-minimize" />
                <span className="dot dot-maximize" />
              </div>

              <div className="window-search-bar">
                <Search size={14} className="search-icon" />
                <span className="search-placeholder">Search tasks, sprints, or ask AI...</span>
                <span className="search-shortcut">⌘K</span>
              </div>

              <div className="window-user-controls">
                <div className="notification-bell">
                  <Bell size={16} />
                  <span className="bell-badge" />
                </div>
                <div className="user-avatar">
                  <span>AT</span>
                  <span className="avatar-status-online" />
                </div>
              </div>
            </div>

            {/* Dashboard Workspace Body */}
            <div className="dashboard-body">
              {/* Mini App Sidebar */}
              <aside className="dashboard-sidebar">
                <div className="sidebar-group">
                  <span className="sidebar-heading">Workspace</span>
                  <div className="sidebar-item active">
                    <CheckSquare size={16} />
                    <span>My Tasks</span>
                    <span className="item-badge">6</span>
                  </div>
                  <div className="sidebar-item">
                    <Bot size={16} />
                    <span>AI Assistant</span>
                    <span className="item-sparkle-pill">New</span>
                  </div>
                  <div className="sidebar-item">
                    <Calendar size={16} />
                    <span>Calendar</span>
                  </div>
                  <div className="sidebar-item">
                    <Users size={16} />
                    <span>Team Board</span>
                  </div>
                </div>

                <div className="sidebar-ai-widget">
                  <div className="ai-widget-header">
                    <Sparkles size={14} />
                    <span>AI Capacity</span>
                  </div>
                  <div className="ai-progress-track">
                    <div className="ai-progress-fill" style={{ width: '82%' }} />
                  </div>
                  <span className="ai-widget-caption">82% weekly bandwidth optimized</span>
                </div>
              </aside>

              {/* Main Dashboard Panel */}
              <main className="dashboard-main-panel">
                {/* Dashboard View Header */}
                <div className="panel-header">
                  <div>
                    <h2 className="panel-title">Today's Focus</h2>
                    <p className="panel-subtitle">Thursday, Nov 26 • 4 tasks high priority</p>
                  </div>
                  <button type="button" className="btn-add-task">
                    <Plus size={15} />
                    <span>New Task</span>
                  </button>
                </div>

                {/* Key Metrics Summary Cards */}
                <div className="metrics-row">
                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-label">Completed Today</span>
                      <span className="metric-trend positive">
                        <TrendingUp size={12} /> +18%
                      </span>
                    </div>
                    <div className="metric-value">12 / 16</div>
                    <div className="mini-progress-bar">
                      <div className="mini-progress-fill" style={{ width: '75%' }} />
                    </div>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-label">AI Priority Score</span>
                      <span className="metric-trend highlight">Optimal</span>
                    </div>
                    <div className="metric-value">94%</div>
                    <span className="metric-note">4 bottlenecks cleared</span>
                  </div>

                  <div className="metric-card">
                    <div className="metric-header">
                      <span className="metric-label">Hours Saved</span>
                      <span className="metric-trend positive">
                        <Flame size={12} /> High
                      </span>
                    </div>
                    <div className="metric-value">3.5 hrs</div>
                    <span className="metric-note">Via smart auto-scheduling</span>
                  </div>
                </div>

                {/* Content Split: Tasks List & Right Analytics Column */}
                <div className="dashboard-columns">
                  {/* Left Column: Interactive Task Cards */}
                  <div className="tasks-column">
                    <div className="column-title-bar">
                      <span className="column-title">Priority Tasks</span>
                      <span className="column-counter">3 active</span>
                    </div>

                    <div className="task-cards-list">
                      {/* Task Card 1 */}
                      <div 
                        className={`task-card ${completedTasks.task1 ? 'is-complete' : ''}`}
                        onClick={() => toggleTask('task1')}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTask('task1'); } }}
                        role="checkbox"
                        aria-checked={completedTasks.task1}
                        tabIndex={0}
                      >
                        <div className="task-checkbox-wrap">
                          <button 
                            type="button" 
                            className={`task-check ${completedTasks.task1 ? 'checked' : ''}`}
                            aria-label="Toggle Taskora Navbar & Hero task"
                            tabIndex={-1}
                            onClick={(e) => { e.stopPropagation(); toggleTask('task1'); }}
                          >
                            {completedTasks.task1 && <Check size={12} />}
                          </button>
                        </div>
                        <div className="task-card-content">
                          <div className="task-meta-top">
                            <span className="task-tag tag-design">🎨 Frontend UI</span>
                            <span className="task-priority-high">High Priority</span>
                          </div>
                          <h3 className="task-card-title">
                            Implement Taskora Navbar & Hero interactive design
                          </h3>
                          <div className="task-card-bottom">
                            <span className="task-due-date">
                              <Clock size={12} /> Due Today, 4:00 PM
                            </span>
                            <div className="task-progress-wrap">
                              <div className="task-progress-bar">
                                <div className="task-progress-fill" style={{ width: '85%' }} />
                              </div>
                              <span className="task-progress-text">85%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Task Card 2 */}
                      <div 
                        className={`task-card ${completedTasks.task2 ? 'is-complete' : ''}`}
                        onClick={() => toggleTask('task2')}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTask('task2'); } }}
                        role="checkbox"
                        aria-checked={completedTasks.task2}
                        tabIndex={0}
                      >
                        <div className="task-checkbox-wrap">
                          <button 
                            type="button" 
                            className={`task-check ${completedTasks.task2 ? 'checked' : ''}`}
                            aria-label="Toggle sprint deliverables task"
                            tabIndex={-1}
                            onClick={(e) => { e.stopPropagation(); toggleTask('task2'); }}
                          >
                            {completedTasks.task2 && <Check size={12} />}
                          </button>
                        </div>
                        <div className="task-card-content">
                          <div className="task-meta-top">
                            <span className="task-tag tag-ai">⚡ AI Automated</span>
                            <span className="task-status-completed">Completed</span>
                          </div>
                          <h3 className="task-card-title">
                            Synthesize sprint deliverables and generate daily summary
                          </h3>
                          <div className="task-card-bottom">
                            <span className="task-due-date">
                              <CheckCircle2 size={12} /> Auto-completed by AI
                            </span>
                            <div className="task-progress-wrap">
                              <div className="task-progress-bar">
                                <div className="task-progress-fill complete" style={{ width: '100%' }} />
                              </div>
                              <span className="task-progress-text">100%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Task Card 3 */}
                      <div 
                        className={`task-card ${completedTasks.task3 ? 'is-complete' : ''}`}
                        onClick={() => toggleTask('task3')}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleTask('task3'); } }}
                        role="checkbox"
                        aria-checked={completedTasks.task3}
                        tabIndex={0}
                      >
                        <div className="task-checkbox-wrap">
                          <button 
                            type="button" 
                            className={`task-check ${completedTasks.task3 ? 'checked' : ''}`}
                            aria-label="Toggle team sprint velocity task"
                            tabIndex={-1}
                            onClick={(e) => { e.stopPropagation(); toggleTask('task3'); }}
                          >
                            {completedTasks.task3 && <Check size={12} />}
                          </button>
                        </div>
                        <div className="task-card-content">
                          <div className="task-meta-top">
                            <span className="task-tag tag-product">📊 Analytics</span>
                            <span className="task-priority-medium">Medium</span>
                          </div>
                          <h3 className="task-card-title">
                            Review team sprint velocity and milestones roadmap
                          </h3>
                          <div className="task-card-bottom">
                            <span className="task-due-date">
                              <Clock size={12} /> Tomorrow, 11:30 AM
                            </span>
                            <div className="task-progress-wrap">
                              <div className="task-progress-bar">
                                <div className="task-progress-fill" style={{ width: '45%' }} />
                              </div>
                              <span className="task-progress-text">45%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Mini Productivity Chart & Upcoming Deadlines */}
                  <div className="analytics-column">
                    {/* Productivity Chart Card */}
                    <div className="analytics-card">
                      <div className="card-header-row">
                        <span className="card-subheading">Productivity Velocity</span>
                        <span className="chart-badge">+24% vs last week</span>
                      </div>
                      <div className="bar-chart-container">
                        {weeklyData.map((item) => (
                          <div key={item.day} className="chart-bar-group">
                            <div className="chart-bar-track">
                              <div
                                className={`chart-bar-fill ${item.active ? 'active-bar' : ''}`}
                                style={{ height: item.height }}
                              >
                                <span className="bar-tooltip">{item.count} tasks</span>
                              </div>
                            </div>
                            <span className={`chart-label ${item.active ? 'active-label' : ''}`}>
                              {item.day}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Upcoming Deadlines Widget */}
                    <div className="deadlines-card">
                      <div className="card-header-row">
                        <span className="card-subheading">Upcoming Deadlines</span>
                        <Calendar size={14} className="calendar-icon" />
                      </div>
                      <div className="deadlines-list">
                        <div className="deadline-item">
                          <div className="deadline-indicator urgent" />
                          <div className="deadline-info">
                            <span className="deadline-name">Final Project Presentation</span>
                            <span className="deadline-time">Tomorrow, 3:00 PM</span>
                          </div>
                          <span className="deadline-tag">24h left</span>
                        </div>
                        <div className="deadline-item">
                          <div className="deadline-indicator normal" />
                          <div className="deadline-info">
                            <span className="deadline-name">Client Review Meeting</span>
                            <span className="deadline-time">Friday, 10:00 AM</span>
                          </div>
                          <span className="deadline-tag">2 days</span>
                        </div>
                      </div>
                    </div>

                    {/* Smart AI Assistant Insight */}
                    <div className="ai-insight-box">
                      <div className="insight-badge">
                        <Sparkles size={13} />
                        <span>Smart Recommendation</span>
                      </div>
                      <p className="insight-text">
                        Schedule deep focus work between 10 AM – 1 PM tomorrow for maximum output.
                      </p>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
