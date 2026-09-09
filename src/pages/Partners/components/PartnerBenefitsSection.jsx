import React from 'react';
import { BookOpen, Users, TrendingUp, Link as LinkIcon } from 'lucide-react';

export function PartnerBenefitsSection() {
  return (
    <>
      <section className="why-partner">
        <div className="why-partner-panel glass-panel">
          <div>
            <h2>Grow Together with Fluxvell</h2>
            <p>
              Joining the partner program can unlock new revenue streams while helping organizations build cyber resilience.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LinkIcon size={80} color="#0ea5e9" strokeWidth={1.5} style={{ opacity: 0.6 }} />
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefit-card glass-panel" style={{ '--card-accent': '#8b5cf6' }}>
          <div className="benefit-icon-wrapper">
            <BookOpen size={28} color="#8b5cf6" />
          </div>
          <h3 className="benefit-title">Exclusive Benefits</h3>
          <p className="benefit-description">
            Access to exclusive resources, training, and certification programs.
          </p>
        </div>

        <div className="benefit-card glass-panel" style={{ '--card-accent': '#0ea5e9' }}>
          <div className="benefit-icon-wrapper">
            <Users size={28} color="#0ea5e9" />
          </div>
          <h3 className="benefit-title">Collaborative Network</h3>
          <p className="benefit-description">
            Join a network of security experts and industry leaders.
          </p>
        </div>

        <div className="benefit-card glass-panel" style={{ '--card-accent': '#10b981' }}>
          <div className="benefit-icon-wrapper">
            <TrendingUp size={28} color="#10b981" />
          </div>
          <h3 className="benefit-title">Revenue Growth</h3>
          <p className="benefit-description">
            Grow your business with competitive partner incentives and margins.
          </p>
        </div>
      </section>
    </>
  );
}
