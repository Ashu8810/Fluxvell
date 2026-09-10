import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ServerCrash, RefreshCcw, ArrowRight } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';
import { Footer } from '../../../components/Footer/Footer';

export default function OperationalRisk() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        {/* Operational Risk Management Hero (DARK) */}
        <section id="operational-risk-hero" style={{ 
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
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
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
              Master Operational Risk<br/>With Fluxvell
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
              maxWidth: '800px',
              margin: '0 auto' 
            }}>
              Ensure business continuity by treating external dependencies with the same rigor as internal operations. Failures at a third-party level directly translate into your operational downtime.
            </p>
          </div>
        </section>

        {/* Operational Risk Management (WHITE) - Liquid Glass Theme */}
        <section id="operational-risk" style={{ 
          background: 'linear-gradient(135deg, #f4f7f9 0%, #eff6ff 50%, #f0fdfa 100%)', 
          padding: '6rem 0 8rem', 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          borderBottom: '1px solid #e2e8f0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glass Orbs for background */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(20, 184, 166, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0, position: 'relative', zIndex: 1 }}>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(59, 130, 246, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-hero vrm-accent-blue-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#3b82f6', marginBottom: '1rem' }}>Phase 1: Dependency Mapping</div>
                  <h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Nth-Party Visibility</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>We trace your supply chain far beyond your direct vendors. By visualizing fourth-party and Nth-party dependencies, we uncover hidden concentration risks—such as when multiple key vendors rely on the same fragile downstream service.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)'}}>
                  <ServerCrash size={24} color="#3b82f6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Phase 2: Resilience Testing</div>
                <div className="vrm-bento-title-main">Continuity Validation</div>
                <div className="vrm-bento-desc">
                  Don't assume your vendors are resilient. Our platform automates Business Continuity (BC) and Disaster Recovery (DR) testing scenarios tailored specifically for your most critical third-party integrations.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)'}}>
                  <RefreshCcw size={24} color="#3b82f6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Phase 3: Disruption Response</div>
                <div className="vrm-bento-title-main">Real-Time Failover</div>
                <div className="vrm-bento-desc">
                  When the inevitable happens, manual responses are too slow. Trigger automated real-time failover protocols and deploy contingency infrastructure the absolute second a third-party service degradation is confirmed.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer vrm-accent-blue-premium">
                <ul className="vrm-bento-feature-list">
                  <li><CheckCircle size={20} color="#3b82f6"/> Visual Graph Trees</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Cloud Concentration Alert</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Supplier Geolocation</li>
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
