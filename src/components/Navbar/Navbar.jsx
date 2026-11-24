import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Features:
 * - Sticky navigation with blurred backdrop and shadow on scroll
 * - Taskora logo with purple gradient badge and Sparkles icon
 * - Smooth scrolling to section IDs (Home, Features, How It Works, Pricing, Contact)
 * - Prominent "Get Started" CTA button
 * - Fully responsive mobile drawer with hamburger toggle
 */
function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to enhance navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu if window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Smooth scroll handler
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Features', target: 'features' },
    { label: 'How It Works', target: 'how-it-works' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          className="navbar-brand"
          onClick={(e) => handleScrollTo(e, 'hero')}
          aria-label="Taskora Home"
        >
          <div className="logo-badge">
            <Sparkles className="logo-icon" size={18} />
          </div>
          <span className="logo-text">
            Taskora<span className="logo-accent">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.target} className="nav-item">
                <a
                  href={`#${link.target}`}
                  className="nav-link"
                  onClick={(e) => handleScrollTo(e, link.target)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Action */}
        <div className="navbar-actions desktop-actions">
          <a
            href="#pricing"
            className="btn-get-started"
            onClick={(e) => handleScrollTo(e, 'pricing')}
          >
            <span>Get Started</span>
            <ArrowRight size={15} className="btn-icon" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="container mobile-nav-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.target} className="mobile-nav-item">
                <a
                  href={`#${link.target}`}
                  className="mobile-nav-link"
                  onClick={(e) => handleScrollTo(e, link.target)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta-wrap">
            <a
              href="#pricing"
              className="btn-get-started mobile-btn"
              onClick={(e) => handleScrollTo(e, 'pricing')}
            >
              <span>Get Started</span>
              <ArrowRight size={16} className="btn-icon" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
