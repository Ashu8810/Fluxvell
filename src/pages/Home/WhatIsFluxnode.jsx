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
      </div>
    </section>
  );
};
