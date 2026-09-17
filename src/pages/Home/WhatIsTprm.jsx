import React from 'react';
import { Shield, Target, Zap, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './WhatIsFluxnode.css';

export const WhatIsTprm = () => {
  return (
    <section className="whatis-fluxnode-section" id="what-is-fluxnode">
      <div className="whatis-fluxnode-inner">
        <ScrollReveal className="whatis-fluxnode-header">
          <div className="fluxnode-logo-wrapper">
             <img src="/fluxwatch_white.png" alt="FluxWatch" className="fluxnode-header-logo" />
          </div>
          <h2 className="whatis-fluxnode-title">
            What is <span className="fluxnode-red-accent">FluxWatch?</span>
          </h2>
          <p className="whatis-fluxnode-subtitle">
            FluxWatch provides continuous visibility into your third-party ecosystem. It automatically assesses and prioritizes risks across your supply chain, keeping your business secure.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
