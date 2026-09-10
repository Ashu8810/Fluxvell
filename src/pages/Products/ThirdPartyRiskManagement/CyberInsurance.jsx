import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle, BadgeCheck, FileText, ArrowRight } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';
import { Footer } from '../../../components/Footer/Footer';

export default function CyberInsurance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        
        {/* Cyber Insurance Alignment Hero (DARK) */}
        <section id="cyber-insurance-hero" style={{ 
          background: '#0a0a0a', 
          position: 'relative',
          padding: '12rem 0 8rem', 
          width: '100vw', 
          minHeight: '100vh',
          marginLeft: 'calc(-50vw + 50%)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Radial Gradient Glow */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '60vw',
            height: '60vw',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
            pointerEvents: 'none',
            zIndex: 0
          }}></div>

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '900px', padding: '0 2rem' }}>
            <h1 style={{ 
              fontSize: '4.5rem', 
              fontWeight: 800, 
              color: '#ffffff', 
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: '0 0 2.5rem 0' 
            }}>
              Master Cyber Insurance<br/>With Fluxvell
            </h1>
            <div className="vrm-hero-actions" style={{ marginBottom: '3rem', marginTop: 0 }}>
              <Link to="/contact" className="vrm-btn-primary">
                Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>

            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '1.25rem', 
              lineHeight: 1.6, 
              margin: 0,
              fontWeight: 400
            }}>
              Align your TPRM strategy with strict underwriting requirements. Demonstrate robust hygiene to insurers and ensure your entire vendor network maintains adequate liability coverage.
            </p>
          </div>
        </section>

        {/* Cyber Insurance Alignment (WHITE) - Liquid Glass Theme */}
        <section id="cyber-insurance" style={{ 
          background: 'linear-gradient(135deg, #f4f7f9 0%, #eff6ff 50%, #f0fdfa 100%)', 
          padding: '6rem 0 8rem', 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glass Orbs for background */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0, position: 'relative', zIndex: 1 }}>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(16, 185, 129, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-hero">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#059669', marginBottom: '1rem' }}>Phase 1: Risk Quantification</div>
                  <h4 style={{ textAlign: 'center', color: 'var(--vrm-primary-text)', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Financial Exposure Modeling</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: 'var(--vrm-secondary-text)', fontSize: '1.15rem', lineHeight: 1.6}}>Move far beyond subjective compliance questionnaires. We use data-driven, actuarial models (such as FAIR) to express third-party cyber risk in exact financial terms (dollars and cents) that the board understands.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)'}}>
                  <BadgeCheck size={24} color="#059669" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#059669' }}>Phase 2: Contractual Verification</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Vendor Liability Audits</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  Automated ingestion and verification of insurance certificates to guarantee that all high-risk vendors maintain and renew adequate third-party cyber liability coverage before you sign a contract.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)'}}>
                  <FileText size={24} color="#059669" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#059669' }}>Phase 3: Policy Optimization</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Underwriting Proof Generation</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  When it's time to renew your own policy, stop relying on spreadsheets. Instantly export comprehensive, audit-ready trails of your TPRM hygiene to negotiate better premiums and secure the most favorable underwriting terms.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer">
                <ul className="vrm-bento-feature-list" style={{ color: 'var(--vrm-secondary-text)' }}>
                  <li><CheckCircle size={20} color="#059669"/> Value-at-Risk (VaR)</li>
                  <li><CheckCircle size={20} color="#059669"/> FAIR Methodology</li>
                  <li><CheckCircle size={20} color="#059669"/> Executive Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONVERSION CTA */}
        <section className="vrm-section">
          <div className="vrm-glass-panel vrm-conversion" style={{ padding: '4rem 2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '6px 12px', borderRadius: '20px', fontWeight: 600 }}>
                <CheckCircle size={14} /> Rated 4.9/5 by security & risk teams
              </span>
            </div>
            <h2 className="vrm-heading-2">Ready to Take Control of Your Vendor Risks?</h2>
            <p className="vrm-text-lead" style={{color: 'var(--vrm-primary-text)', marginBottom: '2rem'}}>
              Join 500+ organizations using Axentro to manage third-party risks.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="vrm-btn-primary">
                Request Demo
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap', color: 'var(--vrm-secondary-text)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} /> No credit card required</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} /> Live in under 2 weeks</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={14} /> SOC 2 Type II certified</span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
