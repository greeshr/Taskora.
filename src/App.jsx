import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

/**
 * Taskora Landing Page Main Application Component
 * 
 * Reusable component hierarchy:
 * - Navbar: Header with brand identity and navigation controls
 * - Hero: Primary value proposition and hero actions
 * - Features: Core features and AI productivity highlights
 * - HowItWorks: Step-by-step workflow explanation
 * - Pricing: Subscription tiers and plan details
 * - Contact: Feedback and contact form
 * - Footer: Links, copyright, and brand footer
 */
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
