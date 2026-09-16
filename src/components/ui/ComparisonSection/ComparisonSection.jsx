import React from 'react';
import LiquidComparisonTable from '../../components/ui/LiquidComparisonTable/LiquidComparisonTable';
import './ComparisonSection.css';

const ComparisonSection = () => {
  return (
    <section className="comparison-section">
      <div className="comparison-section-container">
        
        {/* Top Content Area */}
        <div className="comparison-top-content">
          <div className="comparison-text-box">
            <p className="comparison-description">
              Surveys and passive scores don't stop supply chain breaches. Fluxvell unifies 
              real-time third-party risk tracking with autonomous offensive validation, giving 
              your team conclusive proof of what is exploitable before attackers find it.
            </p>
          </div>
          <div className="comparison-cta-box">
            <button className="primary-red-btn">
              Request a live trial <span className="arrow">→</span>
            </button>
          </div>
        </div>

        {/* The Comparison Table */}
        <LiquidComparisonTable />
        
      </div>
    </section>
  );
};

export default ComparisonSection;
