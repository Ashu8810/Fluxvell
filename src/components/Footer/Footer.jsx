import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="vrm-footer">
      <div className="vrm-footer-grid">
        <div className="vrm-footer-brand">
          <div className="vrm-footer-logo"><img src="/Fluxvell_logo_black.png" alt="Fluxvell Logo" style={{ width: '240px', height: 'auto', display: 'block' }} /></div>
          <p style={{ fontSize: '0.875rem', color: '#506175', maxWidth: '300px' }}>
            The Trusted Partner for Smart Vendor Risk Assessment and comprehensive cybersecurity management.
          </p>
          <div className="vrm-footer-badges">
            <div className="vrm-footer-badge">
              <ShieldCheck size={14} color="#1e40af" />
              SOC 2 Certified
            </div>
            <div className="vrm-footer-badge">
              <CheckCircle size={14} color="#1e40af" />
              ISO 27001 Certified
            </div>
            <div className="vrm-footer-badge">
              <Lock size={14} color="#1e40af" />
              GDPR Compliant
            </div>
          </div>
        </div>

        <div className="vrm-footer-col">
          <h4 className="vrm-footer-heading">Products</h4>
          <Link to="/products/third-party-risk-management" className="vrm-footer-link">Third-Party Risk Management</Link>
          <Link to="/products/third-party-risk-management/brand-reputation" className="vrm-footer-link">Brand Reputation Management</Link>
          <Link to="/products/third-party-risk-management/operational-risk" className="vrm-footer-link">Operational Risk Management</Link>
          <Link to="/products/third-party-risk-management/dark-web" className="vrm-footer-link">Dark Web Surveillance</Link>
          <Link to="/products/third-party-risk-management/cyber-insurance" className="vrm-footer-link">Cyber Insurance</Link>
        </div>

        <div className="vrm-footer-col">
          <h4 className="vrm-footer-heading">Solutions</h4>
          <Link to="/solutions/vendor-risk-management" className="vrm-footer-link">Vendor Risk Management</Link>
          <Link to="#" className="vrm-footer-link">Attack Surface Management</Link>
          <Link to="#" className="vrm-footer-link">Threat Intelligence</Link>
          <Link to="#" className="vrm-footer-link">Vulnerability Management</Link>
          <Link to="#" className="vrm-footer-link">Executive Monitoring</Link>
        </div>

        <div className="vrm-footer-col">
          <h4 className="vrm-footer-heading">Company</h4>
          <Link to="#" className="vrm-footer-link">About Us</Link>
          <Link to="#" className="vrm-footer-link">Careers</Link>
          <Link to="/contact" className="vrm-footer-link">Contact</Link>
          <Link to="#" className="vrm-footer-link">Blog</Link>
        </div>
      </div>
      
      <div className="vrm-footer-bottom">
        <span>&copy; {new Date().getFullYear()} Fluxvell. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
