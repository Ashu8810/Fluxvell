import React from 'react';
import { AnimatedNetwork } from '../../components/ui/AnimatedNetwork';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './RiskProblem.css';

export function RiskProblem() {
  return (
    <section className="risk-problem-section">
      <div className="risk-problem-glass"></div>
      
      <div className="risk-problem-container">
        <ScrollReveal className="risk-problem-content" delay={0.1}>
          <h2 className="risk-headline">Your risk doesn’t stop at the perimeter.</h2>
          <p className="risk-supporting-text">
            Your business depends on vendors, partners, cloud services, applications, and internet-facing assets that change every day. A point-in-time assessment can show what was true yesterday—but not what changed today, what is exploitable now, or which risk deserves action first.
          </p>
          <p className="risk-transition-text">
            Fluxvell connects third-party risk management with automated penetration testing, so your teams can move from uncertainty to evidence-backed action.
          </p>
        </ScrollReveal>
        
        <ScrollReveal className="risk-map-wrapper" delay={0.3} style={{ background: 'transparent', border: 'none', padding: 0 }}>
          <AnimatedNetwork />
        </ScrollReveal>
      </div>

      <div className="risk-capsules-grid">
        <ScrollReveal className="risk-capsule" delay={0.1}>
          <div className="risk-capsule-number">01</div>
          <h3 className="risk-capsule-title">Expanding Ecosystem</h3>
          <p className="risk-capsule-text">
            Every vendor, service provider, integration, and contractor can introduce access, dependency, or exposure.
          </p>
        </ScrollReveal>
        <ScrollReveal className="risk-capsule" delay={0.2}>
          <div className="risk-capsule-number">02</div>
          <h3 className="risk-capsule-title">Stale Snapshots</h3>
          <p className="risk-capsule-text">
            A questionnaire or point-in-time test can become outdated as vendors, assets, and access paths change.
          </p>
        </ScrollReveal>
        <ScrollReveal className="risk-capsule" delay={0.3}>
          <div className="risk-capsule-number">03</div>
          <h3 className="risk-capsule-title">Unproven Exposure</h3>
          <p className="risk-capsule-text">
            A finding matters most when teams can understand exploitability, impact, ownership, and remediation.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
