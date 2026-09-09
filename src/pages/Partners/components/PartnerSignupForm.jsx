import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export function PartnerSignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    interestedIn: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.interestedIn) newErrors.interestedIn = 'Please select an option';
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Minimum 10 characters required';
    }

    // Phone number validation (optional but if provided, must be min 10 digits)
    if (formData.phoneNumber) {
      const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        newErrors.phoneNumber = 'Minimum 10 digits required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSuccess(true);
    } else {
      // Focus the first error field
      const firstError = Object.keys(errors)[0];
      const element = document.getElementById(firstError);
      if (element) {
        element.focus();
      }
    }
  };

  if (isSuccess) {
    return (
      <section className="signup-section" id="partner-sign-up">
        <div className="form-success">
          <div className="success-icon">
            <CheckCircle size={32} />
          </div>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out to the Fluxvell partner network. Our team will review your message and contact you shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="signup-section" id="partner-sign-up">
      <div className="signup-header">
        <h2>Become a Partner</h2>
        <p>Join the Fluxvell ecosystem to expand your capabilities.</p>
      </div>

      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">FULL NAME <span className="required-asterisk">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Jane Smith"
              className={`form-input ${errors.fullName ? 'is-invalid' : ''}`}
              value={formData.fullName}
              onChange={handleChange}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">EMAIL ADDRESS <span className="required-asterisk">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="jane@company.com"
              className={`form-input ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">PHONE NUMBER</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+1 (555) 000-0000"
              className={`form-input ${errors.phoneNumber ? 'is-invalid' : ''}`}
              value={formData.phoneNumber}
              onChange={handleChange}
              aria-invalid={!!errors.phoneNumber}
            />
            <span className="form-subtext">Minimum 10 digits</span>
            {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="companyName" className="form-label">COMPANY NAME</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Your Company LLC"
              className={`form-input ${errors.companyName ? 'is-invalid' : ''}`}
              value={formData.companyName}
              onChange={handleChange}
              aria-invalid={!!errors.companyName}
            />
            {errors.companyName && <span className="error-message">{errors.companyName}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="interestedIn" className="form-label">INTERESTED IN <span className="required-asterisk">*</span></label>
          <select
            id="interestedIn"
            name="interestedIn"
            className={`form-select ${errors.interestedIn ? 'is-invalid' : ''}`}
            value={formData.interestedIn}
            onChange={handleChange}
            aria-invalid={!!errors.interestedIn}
          >
            <option value="" disabled>Select an option...</option>
            <option value="Reseller Partnership">Reseller Partnership</option>
            <option value="Technology Integration">Technology Integration</option>
            <option value="Managed Security Service Provider (MSSP)">Managed Security Service Provider (MSSP)</option>
            <option value="Consulting Partnership">Consulting Partnership</option>
            <option value="Other">Other</option>
          </select>
          {errors.interestedIn && <span className="error-message">{errors.interestedIn}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">MESSAGE <span className="required-asterisk">*</span></label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your security ecosystem needs..."
            className={`form-textarea ${errors.message ? 'is-invalid' : ''}`}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <span className="form-subtext">Minimum 10 characters</span>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn custom-submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} style={{ marginLeft: '8px' }} />
        </button>

        <div className="form-footer-text">
          By submitting, you agree to our <a href="#" style={{color: '#4f46e5', textDecoration: 'none', fontWeight: '500'}}>Privacy Policy</a>
        </div>
      </form>
    </section>
  );
}
