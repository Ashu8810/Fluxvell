import React, { useEffect } from 'react';
import { PartnerSignupForm } from './components/PartnerSignupForm';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Partners.css';

export default function Partners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partners-page">
      <main className="partner-split-layout">
        <div className="partner-split-image" style={{ backgroundImage: `url('/assets/partner_ecosystem_glass.jpg')` }}>
          <Link to="/" className="split-back-btn">
            <ArrowLeft size={24} />
          </Link>
          <img src="/Fluxvell_logo_white.png" alt="Fluxvell" className="desktop-split-logo" />
        </div>
        <div className="partner-split-content">
          <div className="mobile-split-header">
            <Link to="/" className="mobile-back-btn">
              <ArrowLeft size={20} />
            </Link>
            <img src="/Fluxvell_logo_black.png" alt="Fluxvell Logo" className="mobile-split-logo" />
          </div>
          <PartnerSignupForm />
        </div>
      </main>
    </div>
  );
}
