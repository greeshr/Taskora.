import React, { useState } from 'react';
import {
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './Contact.css';

/**
 * Contact Component
 * 
 * Features:
 * - Eyebrow: "LET'S CONNECT"
 * - Main heading: "Ready to take control of your productivity?"
 * - Professional two-column layout on desktop, single column on mobile
 * - Left column: Contact info (email, response time, AI support) & decorative productivity widget
 * - Right column: Full interactive contact form with React controlled state
 * - Form validation: required fields, email regex, message minimum length, consent checkbox
 * - Clear inline error messages and field highlights
 * - Simulated submission with loading spinner and friendly success confirmation card
 */
function Contact() {
  const initialFormState = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    // Validate Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Validate Subject Dropdown
    if (!formData.subject) {
      newErrors.subject = 'Please select an inquiry subject.';
    }

    // Validate Message (minimum 10 characters)
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    // Validate Consent Checkbox
    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted regarding your inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission without claiming a real email was sent
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData(initialFormState);
    }, 1000);
  };

  // Reset form to send another message
  const handleReset = () => {
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section className="contact-section" id="contact">
      {/* Background Lighting Elements */}
      <div className="contact-bg-glow" aria-hidden="true" />

      <div className="container contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-eyebrow">
            <span className="eyebrow-dot" />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="contact-title">
            Ready to take control of your productivity?
          </h2>

          <p className="contact-subtitle">
            Have questions about Taskora or want to explore how it can transform your workflow? We'd love to hear from you.
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="contact-layout">
          {/* =============================================================
              LEFT COLUMN — Contact Information & Productivity Visual
              ============================================================= */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <span className="info-badge">Get in Touch</span>
              <h3 className="info-title">Let's talk about your next big idea.</h3>
              <p className="info-desc">
                Whether you're an individual freelancer, student organizer, or growing startup team, 
                our team is always eager to explore how Taskora can optimize your daily output.
              </p>

              {/* Direct Channels */}
              <div className="info-channels">
                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-text-group">
                    <span className="channel-label">Email us directly</span>
                    <a href="mailto:hello@taskora.example" className="channel-link">
                      hello@taskora.example
                    </a>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-box">
                    <Clock size={20} />
                  </div>
                  <div className="channel-text-group">
                    <span className="channel-label">Response time</span>
                    <span className="channel-value">Within 24–48 hours</span>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-box">
                    <MessageSquare size={20} />
                  </div>
                  <div className="channel-text-group">
                    <span className="channel-label">Taskora Community</span>
                    <span className="channel-value">Free access to weekly productivity tips</span>
                  </div>
                </div>
              </div>

              {/* Decorative Productivity-Themed Visual */}
              <div className="productivity-decorative-box">
                <div className="deco-header">
                  <Sparkles size={16} className="deco-sparkle" />
                  <span className="deco-tag">AI Productivity Tip</span>
                </div>
                <p className="deco-quote">
                  "Organizing tasks into 25-minute focus intervals with smart auto-prioritization reduces context switching by up to 40%."
                </p>
                <div className="deco-footer">
                  <span className="deco-author">— Taskora Workflow Engine</span>
                </div>
              </div>
            </div>
          </div>

          {/* =============================================================
              RIGHT COLUMN — Contact Form
              ============================================================= */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {isSubmitted ? (
                /* Success Message Confirmation Screen */
                <div className="form-success-box" role="alert">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={44} className="success-check-icon" />
                  </div>
                  <h3 className="success-heading">Message Received!</h3>
                  <p className="success-text">
                    Thank you for reaching out to Taskora. Your inquiry has been successfully validated and captured in this demo simulation. Our team will review your message and reply within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    className="btn-reset-form"
                    onClick={handleReset}
                  >
                    <span>Send another message</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                /* Active Contact Form */
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <h3 className="form-heading">Send us a message</h3>
                  <p className="form-subheading">Fill in the fields below and we'll be in touch shortly.</p>

                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.fullName && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@domain.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject Dropdown */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <div className="select-wrap">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`form-select ${errors.subject ? 'input-error' : ''}`}
                        disabled={isSubmitting}
                      >
                        <option value="">Select an inquiry topic...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Pricing Question">Pricing Question</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                    {errors.subject && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help your productivity journey? (minimum 10 characters)"
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <span className="error-message">
                        <AlertCircle size={14} />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="form-checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="checkbox-input"
                        disabled={isSubmitting}
                      />
                      <span className="checkbox-text">
                        I agree to be contacted regarding my inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <span className="error-message consent-error">
                        <AlertCircle size={14} />
                        {errors.consent}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spinner-icon" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} className="btn-send-icon" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
