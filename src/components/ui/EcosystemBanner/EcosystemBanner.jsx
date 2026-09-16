import React from 'react';
import DottedAnimation from './DottedAnimation';
import './EcosystemBanner.css';

const EcosystemBanner = () => {
  return (
    <section className="ecosystem-banner">
      {/* Background elements */}
      <div className="banner-grid-overlay"></div>
      <div className="banner-glow left"></div>
      <div className="banner-glow right"></div>
      
      {/* Dotted Background Animation */}
      <DottedAnimation color="#ff3b3b" density={150} dotSize={2} />

      <div className="ecosystem-banner-content">
        <p className="ecosystem-subtitle">FLUXVELL ECOSYSTEM</p>
        <h2 className="ecosystem-title">One company. Two focused products.</h2>
        
        <div className="ecosystem-products-container">
          {/* Fluxnode Pill */}
          <div className="product-pill fluxnode">
            <div className="pill-content">
              <div className="product-brand">
                <img src="/fluxnode_white.png" alt="Fluxnode" className="product-logo-img" />
              </div>
            </div>
            <div className="pill-glow"></div>
          </div>

          {/* Fluxwatch Pill */}
          <div className="product-pill fluxwatch">
            <div className="pill-content">
              <div className="product-brand">
                <img src="/fluxwatch_white.png" alt="Fluxwatch" className="product-logo-img" />
              </div>
            </div>
            <div className="pill-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemBanner;
