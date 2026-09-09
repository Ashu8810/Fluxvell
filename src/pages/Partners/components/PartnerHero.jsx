import React from 'react';
import { ArrowUpRight, Workflow } from 'lucide-react';

export function PartnerHero() {
  const scrollToForm = (e) => {
    e.preventDefault();
    document.getElementById('partner-sign-up')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="partner-hero">
      <div className="hero-content">
        <h1 className="hero-title">Become a Partner</h1>
        <p className="hero-description">
          Join the Fluxvell partner network and help organizations stay secure with cutting-edge cyber risk management solutions.
        </p>
        <a href="#partner-sign-up" onClick={scrollToForm} className="hero-cta">
          Apply to Become a Partner <ArrowUpRight size={20} style={{ marginLeft: '8px' }} />
        </a>
      </div>
      <div className="hero-visual-container">
        <div className="hero-visual">
          <Workflow size={120} color="#4f46e5" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
