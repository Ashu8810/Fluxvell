import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, BarChart, Zap, ArrowRight } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';

export default function BrandReputation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        
        {/* Brand Reputation Management Hero (DARK) */}
        <section id="brand-reputation-hero" style={{ 
          background: '#0a0a0a', 
          position: 'relative',
          padding: '12rem 0 8rem', 
          width: '100vw', 
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
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
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
              Protect Brand Reputation<br/>With Fluxvell
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
              Outdated, static assessments create dangerous blind spots and costly delays. Supercharge your third-party evaluations, master continuous compliance, and collaborate effortlessly with intelligent, agentic AI-powered monitoring to protect your brand equity from supply chain contamination.
            </p>
          </div>
        </section>

        {/* Bento Grid Section - Liquid Glass Theme */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f4f7f9 0%, #eef2ff 50%, #f5f3ff 100%)', 
          padding: '6rem 0 8rem', 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glass Orbs for background */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0, position: 'relative', zIndex: 1 }}>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(139, 92, 246, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-hero vrm-accent-purple-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#8b5cf6', marginBottom: '1rem' }}>Phase 1: Proactive Monitoring</div>
                  <h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>ESG & Ethical Tracking</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>Don't wait for the news to break. We establish a continuous scanning perimeter around your entire supply chain to detect early warning signs of ESG violations, predatory labor practices, and ethical risks.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)'}}>
                  <BarChart size={24} color="#8b5cf6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#8b5cf6' }}>Phase 2: Sentiment Analysis</div>
                <div className="vrm-bento-title-main" style={{ color: '#0f172a' }}>AI-Driven Perception</div>
                <div className="vrm-bento-desc" style={{ color: '#475569' }}>
                  Advanced NLP algorithms analyze millions of data points to determine how the public perceives your relationship with a specific vendor. If public sentiment turns toxic, you are the first to know.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)'}}>
                  <Zap size={24} color="#8b5cf6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#8b5cf6' }}>Phase 3: Rapid Remediation</div>
                <div className="vrm-bento-title-main" style={{ color: '#0f172a' }}>Automated Decoupling</div>
                <div className="vrm-bento-desc" style={{ color: '#475569' }}>
                  When a crisis hits, speed is everything. Execute pre-planned decoupling strategies, instantly revoke access rights, and align internal PR teams with unified crisis communication templates.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer vrm-accent-purple-premium">
                <ul className="vrm-bento-feature-list" style={{ color: '#475569' }}>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Global News Scraping</li>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Regulatory Watchlists</li>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Social Sentiment Alerts</li>
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

      </div>
    </div>
  );
}
