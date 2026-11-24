import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Mail,
  Clock,
  ArrowUp,
  Info
} from 'lucide-react';
import './Footer.css';

/**
 * Footer Component
 * 
 * Features:
 * - Brand column: Taskora logo, mission statement, and verified public social media links
 * - Product navigation links (Features, How It Works, Pricing) with smooth scrolling
 * - Company navigation links (About Us, Contact, Get Started)
 * - Contact information (email mailto, response time guarantee)
 * - Bottom bar with copyright notice, back-to-top button, and coming-soon modal for legal pages
 */
function Footer() {
  const [legalModalText, setLegalModalText] = useState(null);

  // Smooth scroll helper for internal navigation
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll smoothly to top of page
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle legal links without creating broken URLs
  const handleLegalClick = (e, docTitle) => {
    e.preventDefault();
    setLegalModalText(
      `${docTitle} will be published prior to our official production release. In this student assignment demonstration, no user data is collected, stored, or processed.`
    );
  };

  // Close legal notice on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && legalModalText) {
        setLegalModalText(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [legalModalText]);

  return (
    <footer className="footer-section" id="footer">
      <div className="container footer-container">
        {/* =============================================================
            Top Multi-Column Footer Grid
            ============================================================= */}
        <div className="footer-grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col footer-col-brand">
            <a
              href="#hero"
              className="footer-brand"
              onClick={(e) => handleScrollTo(e, 'hero')}
              aria-label="Taskora Home"
            >
              <div className="footer-logo-badge">
                <Sparkles size={18} />
              </div>
              <span className="footer-logo-text">
                Taskora<span className="footer-logo-dot">.</span>
              </span>
            </a>

            <p className="footer-description">
              A smarter way to organize your work, prioritize what matters, and achieve more every day.
            </p>

            {/* Social Media Links (pointing to public platform homepages) */}
            <div className="footer-social-links" aria-label="Social media links">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="X (formerly Twitter)"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Product Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Product</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#features"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'features')}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'how-it-works')}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'pricing')}
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#hero"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'hero')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'contact')}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="footer-link"
                  onClick={(e) => handleScrollTo(e, 'pricing')}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li className="contact-info-item">
                <Mail size={16} className="contact-info-icon" />
                <a href="mailto:hello@taskora.example" className="footer-link-mail">
                  hello@taskora.example
                </a>
              </li>
              <li className="contact-info-item">
                <Clock size={16} className="contact-info-icon" />
                <span className="contact-info-text">Within 24–48 hours</span>
              </li>
            </ul>
            <div className="footer-status-pill">
              <span className="status-dot-active" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>

        {/* =============================================================
            Bottom Footer Bar
            ============================================================= */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 Taskora. All rights reserved.
          </p>

          <div className="legal-links">
            <button
              type="button"
              className="legal-link-btn"
              onClick={(e) => handleLegalClick(e, 'Privacy Policy')}
            >
              Privacy Policy
            </button>
            <span className="legal-separator">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={(e) => handleLegalClick(e, 'Terms of Service')}
            >
              Terms of Service
            </button>
          </div>

          <button
            type="button"
            className="btn-back-to-top"
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Coming Soon Notice Modal for Legal Links */}
        {legalModalText && (
          <div 
            className="legal-notice-modal" 
            role="dialog" 
            aria-modal="true"
            onClick={() => setLegalModalText(null)}
          >
            <div 
              className="legal-notice-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="notice-header">
                <Info size={18} className="notice-icon" />
                <span className="notice-title">Notice</span>
              </div>
              <p className="notice-body">{legalModalText}</p>
              <button
                type="button"
                className="btn-close-notice"
                onClick={() => setLegalModalText(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
