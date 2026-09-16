import React from 'react';
import { Shield, Target, Zap, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './WhatIsFluxnode.css';

export const WhatIsFluxnode = () => {
  return (
    <section className="whatis-fluxnode-section" id="what-is-fluxnode">
      <div className="whatis-fluxnode-inner">
        <ScrollReveal className="whatis-fluxnode-header">
          <div className="fluxnode-logo-wrapper">
             <img src="/fluxnode_white.png" alt="FluxNode" className="fluxnode-header-logo" />
          </div>
          <h2 className="whatis-fluxnode-title">
            What is <span className="fluxnode-red-accent">FluxNode?</span>
          </h2>
          <p className="whatis-fluxnode-subtitle">
            FluxNode is our core intelligent engine that powers continuous offensive validation. It acts as an autonomous virtual hacker inside or outside your perimeter to find the weakest links.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="whatis-fluxnode-features">
          <div className="fluxnode-feature-card">
            <div className="feature-icon-wrap"><Target size={24} className="feature-icon" /></div>
            <h3 className="feature-title">Autonomous Reconnaissance</h3>
            <p className="feature-desc">Unlike periodic scans that miss ephemeral assets, FluxNode continuously maps your entire external perimeter in real-time, discovering shadow IT and exposed assets the moment they appear.</p>
          </div>
          
          <div className="fluxnode-feature-card">
            <div className="feature-icon-wrap"><Zap size={24} className="feature-icon" /></div>
            <h3 className="feature-title">Safe Exploitation</h3>
            <p className="feature-desc">While legacy tools rely on theoretical CVSS scores, FluxNode executes safe, authorized exploits to provide empirical proof of exactly what can be breached without disrupting production.</p>
          </div>

          <div className="fluxnode-feature-card">
            <div className="feature-icon-wrap"><Shield size={24} className="feature-icon" /></div>
            <h3 className="feature-title">Prioritized Remediation</h3>
            <p className="feature-desc">Instead of drowning your team in thousands of unverified alerts, FluxNode filters out the noise to deliver a prioritized list of critical attack paths with actionable remediation guidance.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
