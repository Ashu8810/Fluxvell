import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import './Partners.css';

export default function Partners() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interestedIn: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    alert('Thank you! We will be in touch shortly.');
  };

  return (
    <div className="partners-page-new">


      {/* Hero Section */}
      <section className="partners-hero">
         <div className="hero-content">
            <h1>Secure the future of<br/><span className="red-accent">digital infrastructure</span>.</h1>
            <p>A partner ecosystem for teams shaping<br/>resilient digital infrastructure.</p>
            <button className="explore-btn">Explore partnership <ArrowRight size={16} /></button>
         </div>
         <div className="hero-image-container">
            {/* Floating Badges */}
            <div className="floating-badge badge-top-right">
               <ul>
                  <li><span className="dot red-dot"></span> Zero Trust</li>
                  <li><span className="dot red-dot"></span> Encrypted</li>
                  <li><span className="dot red-dot"></span> Monitored</li>
                  <li><span className="dot red-dot"></span> Resilient</li>
               </ul>
            </div>
            
            <div className="floating-badge badge-center-left">
               <ShieldCheck size={16} color="#ef4444" /> Verified Access
            </div>
            
            <div className="floating-badge badge-bottom-right">
               <Activity size={16} color="#ef4444" /> Threats Blocked: 0 active
            </div>
         </div>
      </section>

      {/* Stats Bar */}
      <section className="partners-stats-bar">
         <div className="stat-item">
            <div className="stat-num">01</div>
            <div className="stat-text">
               <h4>Strategic reach</h4>
               <p>Access to a broader partner<br/>network and new markets.</p>
            </div>
         </div>
         <div className="stat-divider"></div>
         <div className="stat-item">
            <div className="stat-num">02</div>
            <div className="stat-text">
               <h4>Technical depth</h4>
               <p>Build with proven expertise<br/>and modern infrastructure.</p>
            </div>
         </div>
         <div className="stat-divider"></div>
         <div className="stat-item">
            <div className="stat-num">03</div>
            <div className="stat-text">
               <h4>Shared momentum</h4>
               <p>Grow together with aligned<br/>goals and long-term value.</p>
            </div>
         </div>
      </section>

      {/* Form Section */}
      <section className="partners-form-section">
         <div className="form-container">
           <div className="form-right" style={{ flex: '1', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
              <form className="partner-contact-form" onSubmit={handleSubmit}>
                 
                 <div className="form-row">
                    <div className="form-group">
                       <label>FULL NAME <span className="req">*</span></label>
                       <input type="text" name="fullName" placeholder="Jane Smith" required value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                       <label>EMAIL ADDRESS <span className="req">*</span></label>
                       <input type="email" name="email" placeholder="jane@company.com" required value={formData.email} onChange={handleChange} />
                    </div>
                 </div>
                 
                 <div className="form-row">
                    <div className="form-group">
                       <label>PHONE NUMBER</label>
                       <input type="tel" name="phone" placeholder="+1 (555) 000-0000" minLength={10} value={formData.phone} onChange={handleChange} />
                       <span className="sublabel">Minimum 10 digits</span>
                    </div>
                    <div className="form-group">
                       <label>COMPANY NAME</label>
                       <input type="text" name="company" placeholder="Your Company LLC" value={formData.company} onChange={handleChange} />
                    </div>
                 </div>
                 
                 <div className="form-group full-width">
                    <label>INTERESTED IN <span className="req">*</span></label>
                    <select name="interestedIn" required value={formData.interestedIn} onChange={handleChange}>
                       <option value="" disabled>Select an option...</option>
                       <option value="technology">Technology Partner</option>
                       <option value="channel">Channel Partner</option>
                       <option value="integration">Integration</option>
                    </select>
                 </div>
                 
                 <div className="form-group full-width">
                    <label>MESSAGE <span className="req">*</span></label>
                    <textarea name="message" placeholder="Tell us about your security ecosystem needs..." minLength={10} required value={formData.message} onChange={handleChange}></textarea>
                    <span className="sublabel">Minimum 10 characters</span>
                 </div>
                 
                 <button type="submit" className="submit-btn-yellow">Send Message</button>
              </form>
           </div>
         </div>
      </section>
    </div>
  );
}
