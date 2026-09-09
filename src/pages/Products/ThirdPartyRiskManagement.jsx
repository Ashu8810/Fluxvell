import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  Activity, 
  FileText, 
  Users, 
  Settings, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Eye, Globe, FileCheck, Radar, Zap, PieChart, ShieldAlert, BarChart, ServerCrash, RefreshCcw, Lock, Briefcase, BadgeCheck, FileSearch
} from 'lucide-react';
import './ThirdPartyRiskManagement.css';
import { Footer } from '../../components/Footer/Footer';

export default function ThirdPartyRiskManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        
        {/* HERO SECTION */}
        <section className="vrm-section vrm-hero">
          <div className="vrm-hero-content">
            <h1 className="vrm-heading-1">
              Assess and monitor vendor and supply chain risks
            </h1>
            
            <div className="vrm-hero-actions" style={{ marginBottom: '1.5rem', marginTop: 0 }}>
              <Link to="/contact" className="vrm-btn-primary">
                Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            
            <p className="vrm-hero-desc" style={{ marginTop: '0.5rem' }}>
              Automated assessments, continuous monitoring, and actionable insights to protect your business.
            </p>
          </div>
          
          <div className="vrm-dashboard-mockup">
            <div className="vrm-dashboard-base">
              <div className="vrm-dash-header">
                <span className="vrm-dash-title">Vendor Risk Intelligence</span>
                <span className="vrm-hero-label" style={{marginBottom: 0}}>Live</span>
              </div>
              <div className="vrm-dash-grid">
                <div className="vrm-dash-card">
                  <span className="vrm-dash-label">Active Vendors</span>
                  <span className="vrm-dash-metric">512</span>
                </div>
                <div className="vrm-dash-card">
                  <span className="vrm-dash-label">Alerts (This week)</span>
                  <span className="vrm-dash-metric" style={{color: '#ef4444'}}>24</span>
                </div>
                <div className="vrm-dash-card" style={{gridColumn: '1 / -1'}}>
                  <span className="vrm-dash-label">Aggregate Risk Score</span>
                  <div style={{height: '8px', background: '#e5e7eb', borderRadius: '4px', marginTop: '8px', overflow: 'hidden'}}>
                    <div style={{height: '100%', width: '89%', background: 'var(--vrm-accent-primary)'}}></div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                    <span>77 / 100</span>
                    <span style={{color: 'var(--vrm-accent-primary)'}}>Moderate exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="vrm-section vrm-overview-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div className="vrm-content-wrapper vrm-overview">
            <div style={{ paddingRight: '2rem' }}>
              <h2 className="vrm-heading-2" style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '2.5rem', lineHeight: '1.2' }}>Complete Visibility Into Your Vendor Ecosystem</h2>
              <p className="vrm-text-lead" style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Automated risk assessments, continuous monitoring, and actionable insights support informed decisions.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="vrm-pill-badge">AUTOMATED ASSESSMENTS</span>
                <span className="vrm-pill-badge">RISK PRIORITIZATION</span>
                <span className="vrm-pill-badge">RISK ENGINE</span>
              </div>
            </div>
            <div className="vrm-white-card">
              <h3 className="vrm-heading-3" style={{ color: '#0f172a', fontSize: '1.25rem', marginBottom: '0.5rem' }}>AI-scored Category Breakdown</h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem'}}>Benchmarked against 500+ vendors in your industry.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {[
                  { label: 'Cybersecurity', score: 82, color: '#0ea5e9' },
                  { label: 'Financial stability', score: 74, color: '#f59e0b' },
                  { label: 'Regulatory compliance', score: 91, color: '#10b981' },
                  { label: 'Operational resilience', score: 68, color: '#8b5cf6' }
                ].map((cat, i) => (
                  <div key={i}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a'}}>
                      <span>{cat.label}</span>
                      <span style={{color: cat.color}}>{cat.score}</span>
                    </div>
                    <div style={{height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden'}}>
                      <div style={{height: '100%', width: `${cat.score}%`, background: cat.color, borderRadius: '3px'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS / WORKFLOW */}
        <section className="vrm-continuous-wrapper" style={{ background: '#0f172a', padding: '6rem 0' }}>
          <div className="vrm-content-wrapper vrm-continuous">
            <h2 className="vrm-heading-2" style={{ color: '#ffffff', textAlign: 'center' }}>From Onboarding to Ongoing Oversight</h2>
            
            <div className="vrm-continuous-immersive" style={{ marginTop: '6rem' }}>
              <div className="vrm-continuous-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                {[
                  { title: 'Step 01 — Onboard vendors', desc: 'Import a vendor list via CSV, API, or single sign-on in minutes.' },
                  { title: 'Step 02 — Automated assessment', desc: 'Send CAIQ/SIG questionnaires and auto-score submitted evidence with AI.' },
                  { title: 'Step 03 — Continuous monitoring', desc: 'Track attack surface, dark web exposure, and compliance drift in real time.' },
                  { title: 'Step 04 — Remediate & report', desc: 'Assign remediation tasks to vendors and export audit-ready reports on demand.' }
                ].map((item, i) => (
                  <div key={i} className="vrm-glass-card" style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff', marginBottom: '1rem' }}>{item.title}</h3>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT CAPABILITIES */}
        <section className="vrm-section">
          <h2 className="vrm-heading-2" style={{textAlign: 'center'}}>Product Capabilities</h2>
          <div className="vrm-feature-bento" style={{ marginTop: '3rem' }}>
            {[
              { title: 'Automated Risk Assessments', desc: 'AI-powered risk scoring and prioritization for all vendors with automated workflows.' },
              { title: 'Risk Flagging', desc: 'Automatically flag non-compliant or risky vendors in real time.' },
              { title: 'Continuous Monitoring', desc: '24/7 monitoring of vendor security posture and compliance status.' },
              { title: 'Custom Templates', desc: 'Industry-specific CAIQ/SIG templates for accurate evaluations.' }
            ].map((cap, i) => (
              <div key={i} className="vrm-bento-card">
                <div className="vrm-bento-number">0{i + 1}</div>
                <div className="vrm-bento-content">
                  <h3 className="vrm-bento-title">{cap.title}</h3>
                  <p className="vrm-bento-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* METRICS & INTEGRATIONS */}
        <section className="vrm-section">
          <div className="vrm-glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--vrm-primary-text)', lineHeight: 1 }}>75%</div>
                <div style={{ color: 'var(--vrm-secondary-text)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Faster Turnaround</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--vrm-primary-text)', lineHeight: 1 }}>24/7</div>
                <div style={{ color: 'var(--vrm-secondary-text)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Continuous Visibility</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--vrm-primary-text)', lineHeight: 1 }}>30+</div>
                <div style={{ color: 'var(--vrm-secondary-text)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Report Formats</div>
              </div>
            </div>
            
            <h3 className="vrm-heading-3">Fits Into the Stack You Already Run</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {['Slack', 'Microsoft Teams', 'Jira', 'ServiceNow', 'Okta', 'Salesforce', 'Google Workspace', 'Zapier'].map((int, i) => (
                <span key={i} style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--vrm-secondary-text)' }}>
                  {int}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="vrm-section">
          <h2 className="vrm-heading-2" style={{textAlign: 'center'}}>Why Choose Third-Party Risk Management?</h2>
          <div className="vrm-feature-bento" style={{ marginTop: '3rem' }}>
            {[
              { stat: '62%', title: 'Reduce Third-Party Risk', desc: 'Identify and mitigate risks before they impact the business.', color: '#0ea5e9' },
              { stat: '75%', title: 'Streamline Vendor Onboarding', desc: 'Automate assessments and accelerate vendor approvals.', color: '#10b981' },
              { stat: '100%', title: 'Ensure Regulatory Compliance', desc: 'Meet compliance requirements with automated evidence collection.', color: '#8b5cf6' },
              { stat: '3x', title: 'Data-Driven Decisions', desc: 'Make informed vendor decisions with real-time risk data.', color: '#f59e0b' }
            ].map((ben, i) => (
              <div key={i} className="vrm-bento-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: ben.color }}>{ben.stat}</div>
                <h3 className="vrm-bento-title" style={{ fontSize: '1.25rem', marginTop: 0 }}>{ben.title}</h3>
                <p className="vrm-bento-desc">{ben.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="vrm-section">
          <div className="vrm-glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--vrm-primary-text)', lineHeight: 1.6, marginBottom: '2rem' }}>
              "Axentro cut vendor onboarding time from six weeks to four days and provided one place to see supply-chain exposure instead of a folder of spreadsheets."
            </p>
            <div style={{ color: 'var(--vrm-secondary-text)', fontSize: '1rem' }}>
              <span style={{ fontWeight: 600, color: 'var(--vrm-primary-text)' }}>VP of Third-Party Risk</span> <br/>
              Global Financial Services Company
            </div>
          </div>
        </section>

        {/* EXPANDED RISK CATEGORIES - HEADER */}
        <section className="vrm-section" style={{ paddingBottom: '2rem' }}>
          <h2 className="vrm-heading-2" style={{textAlign: 'center'}}>Comprehensive Third-Party Risk Ecosystem</h2>
        </section>

        {/* 1. Brand Reputation Management (DARK) */}
        <section id="brand-reputation" style={{ background: '#0f172a', padding: '6rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1rem 0' }}>
                <Globe style={{ color: '#8b5cf6' }} size={48} />
                <span>Brand Reputation Management</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '800px', lineHeight: 1.6, margin: 0 }}>
                Protect your brand equity from supply chain contamination. A failure by a third party is increasingly perceived by consumers and regulators as a failure by your organization.
              </p>
            </div>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(139, 92, 246, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-hero vrm-accent-purple-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
<div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#c4b5fd', marginBottom: '1rem' }}>Phase 1: Proactive Monitoring</div>
<h4 style={{ textAlign: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>ESG & Ethical Tracking</h4>
<p style={{ textAlign: 'center', margin: '0 auto', color: '#e2e8f0', fontSize: '1.15rem', lineHeight: 1.6}}>Don't wait for the news to break. We establish a continuous scanning perimeter around your entire supply chain to detect early warning signs of ESG violations, predatory labor practices, and ethical risks.</p>
</div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-side-top vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(255,255,255,0.1)'}}>
                  <BarChart size={24} color="#a78bfa" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#a78bfa' }}>Phase 2: Sentiment Analysis</div>
                <div className="vrm-bento-title-main" style={{ color: '#ffffff' }}>AI-Driven Perception</div>
                <div className="vrm-bento-desc" style={{ color: '#94a3b8' }}>
                  Advanced NLP algorithms analyze millions of data points to determine how the public perceives your relationship with a specific vendor. If public sentiment turns toxic, you are the first to know.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-side-bottom vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.2)', borderColor: 'rgba(255,255,255,0.1)'}}>
                  <Zap size={24} color="#a78bfa" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#a78bfa' }}>Phase 3: Rapid Remediation</div>
                <div className="vrm-bento-title-main" style={{ color: '#ffffff' }}>Automated Decoupling</div>
                <div className="vrm-bento-desc" style={{ color: '#94a3b8' }}>
                  When a crisis hits, speed is everything. Execute pre-planned decoupling strategies, instantly revoke access rights, and align internal PR teams with unified crisis communication templates.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-footer vrm-accent-purple-premium">
                <ul className="vrm-bento-feature-list" style={{ color: '#e2e8f0' }}>
                  <li><CheckCircle size={20} color="#a78bfa"/> Global News Scraping</li>
                  <li><CheckCircle size={20} color="#a78bfa"/> Regulatory Watchlists</li>
                  <li><CheckCircle size={20} color="#a78bfa"/> Social Sentiment Alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Operational Risk Management (WHITE) */}
        <section id="operational-risk" style={{ background: '#f4f7f9', padding: '6rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1rem 0' }}>
                <Settings style={{ color: '#3b82f6' }} size={48} />
                <span>Operational Risk Management</span>
              </h3>
              <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '800px', lineHeight: 1.6, margin: 0 }}>
                Ensure business continuity by treating external dependencies with the same rigor as internal operations. Failures at a third-party level directly translate into your operational downtime.
              </p>
            </div>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(59, 130, 246, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-bento-hero vrm-accent-blue-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
<div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#3b82f6', marginBottom: '1rem' }}>Phase 1: Dependency Mapping</div>
<h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Nth-Party Visibility</h4>
<p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>We trace your supply chain far beyond your direct vendors. By visualizing fourth-party and Nth-party dependencies, we uncover hidden concentration risks—such as when multiple key vendors rely on the same fragile downstream service.</p>
</div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-bento-side-top vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper">
                  <ServerCrash size={24} />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Phase 2: Resilience Testing</div>
                <div className="vrm-bento-title-main">Continuity Validation</div>
                <div className="vrm-bento-desc">
                  Don't assume your vendors are resilient. Our platform automates Business Continuity (BC) and Disaster Recovery (DR) testing scenarios tailored specifically for your most critical third-party integrations.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-bento-side-bottom vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper">
                  <RefreshCcw size={24} />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Phase 3: Disruption Response</div>
                <div className="vrm-bento-title-main">Real-Time Failover</div>
                <div className="vrm-bento-desc">
                  When the inevitable happens, manual responses are too slow. Trigger automated real-time failover protocols and deploy contingency infrastructure the absolute second a third-party service degradation is confirmed.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-bento-footer vrm-accent-blue-premium">
                <ul className="vrm-bento-feature-list">
                  <li><CheckCircle size={20} color="#3b82f6"/> Visual Graph Trees</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Cloud Concentration Alert</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Supplier Geolocation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Dark Web Surveillance (DARK) */}
        <section id="dark-web" style={{ background: '#0f172a', padding: '6rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1rem 0' }}>
                <Eye style={{ color: '#0ea5e9' }} size={48} />
                <span>Dark Web Surveillance</span>
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '800px', lineHeight: 1.6, margin: 0 }}>
                Shift from periodic assessments to continuous intelligence. Detect if a vendor's security weakness has already been exploited before it becomes an attack vector against you.
              </p>
            </div>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(14, 165, 233, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-hero vrm-accent-cyan-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
<div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#7dd3fc', marginBottom: '1rem' }}>Phase 1: Continuous Scanning</div>
<h4 style={{ textAlign: 'center', color: '#fff', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>24/7 Deep Web Crawling</h4>
<p style={{ textAlign: 'center', margin: '0 auto', color: '#e2e8f0', fontSize: '1.15rem', lineHeight: 1.6}}>Threat actors don't operate on a schedule. Our intelligence engine continuously crawls Tor networks, criminal forums, paste sites, and ransomware leak blogs looking specifically for your vendors' compromised data.</p>
</div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-side-top vrm-accent-cyan-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(14, 165, 233, 0.2)', borderColor: 'rgba(255,255,255,0.1)'}}>
                  <ShieldAlert size={24} color="#38bdf8" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#38bdf8' }}>Phase 2: Threat Validation</div>
                <div className="vrm-bento-title-main" style={{ color: '#ffffff' }}>Signal vs. Noise</div>
                <div className="vrm-bento-desc" style={{ color: '#94a3b8' }}>
                  Not every leaked password is a crisis. We use a combination of machine learning heuristics and human intelligence analysts to filter out false positives and confirm if a vendor breach actively threatens your corporate network.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-side-bottom vrm-accent-cyan-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(14, 165, 233, 0.2)', borderColor: 'rgba(255,255,255,0.1)'}}>
                  <Lock size={24} color="#38bdf8" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#38bdf8' }}>Phase 3: Proactive Defense</div>
                <div className="vrm-bento-title-main" style={{ color: '#ffffff' }}>Interrupt the Kill Chain</div>
                <div className="vrm-bento-desc" style={{ color: '#94a3b8' }}>
                  Identify threats before the vendor even knows they've been breached. Our system integrates with your IAM tools to automatically force password resets and lock API keys when third-party credentials surface online.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-bento-item-dark vrm-bento-footer vrm-accent-cyan-premium">
                <ul className="vrm-bento-feature-list" style={{ color: '#e2e8f0' }}>
                  <li><CheckCircle size={20} color="#38bdf8"/> Ransomware Leak Sites</li>
                  <li><CheckCircle size={20} color="#38bdf8"/> Credential Dumps</li>
                  <li><CheckCircle size={20} color="#38bdf8"/> Dark Web Forums</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Cyber Insurance Alignment (WHITE) */}
        <section id="cyber-insurance" style={{ background: '#f4f7f9', padding: '6rem 0', width: '100vw', marginLeft: 'calc(-50vw + 50%)', borderTop: '1px solid #e2e8f0' }}>
          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 1rem 0' }}>
                <FileCheck style={{ color: '#10b981' }} size={48} />
                <span>Cyber Insurance Alignment</span>
              </h3>
              <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '800px', lineHeight: 1.6, margin: 0 }}>
                Align your TPRM strategy with strict underwriting requirements. Demonstrate robust hygiene to insurers and ensure your entire vendor network maintains adequate liability coverage.
              </p>
            </div>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(16, 185, 129, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-bento-hero vrm-accent-emerald-premium">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
<div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#10b981', marginBottom: '1rem' }}>Phase 1: Risk Quantification</div>
<h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Financial Exposure Modeling</h4>
<p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>Move far beyond subjective compliance questionnaires. We use data-driven, actuarial models (such as FAIR) to express third-party cyber risk in exact financial terms (dollars and cents) that the board understands.</p>
</div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-bento-side-top vrm-accent-emerald-premium">
                <div className="vrm-bento-icon-wrapper">
                  <BadgeCheck size={24} />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#10b981' }}>Phase 2: Contractual Verification</div>
                <div className="vrm-bento-title-main">Vendor Liability Audits</div>
                <div className="vrm-bento-desc">
                  Automated ingestion and verification of insurance certificates to guarantee that all high-risk vendors maintain and renew adequate third-party cyber liability coverage before you sign a contract.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-bento-side-bottom vrm-accent-emerald-premium">
                <div className="vrm-bento-icon-wrapper">
                  <FileText size={24} />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#10b981' }}>Phase 3: Policy Optimization</div>
                <div className="vrm-bento-title-main">Underwriting Proof Generation</div>
                <div className="vrm-bento-desc">
                  When it's time to renew your own policy, stop relying on spreadsheets. Instantly export comprehensive, audit-ready trails of your TPRM hygiene to negotiate better premiums and secure the most favorable underwriting terms.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-bento-footer vrm-accent-emerald-premium">
                <ul className="vrm-bento-feature-list">
                  <li><CheckCircle size={20} color="#10b981"/> Value-at-Risk (VaR)</li>
                  <li><CheckCircle size={20} color="#10b981"/> FAIR Methodology</li>
                  <li><CheckCircle size={20} color="#10b981"/> Executive Dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="vrm-section">
          <h2 className="vrm-heading-2" style={{textAlign: 'center'}}>Frequently Asked Questions</h2>
          <div style={{ maxWidth: '800px', margin: '3rem auto 0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="vrm-glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--vrm-primary-text)', marginBottom: '0.75rem' }}>What is third-party risk management?</h3>
              <p style={{ color: 'var(--vrm-secondary-text)', lineHeight: 1.6, fontSize: '0.95rem' }}>Identifying, assessing, and monitoring risks introduced by vendors, suppliers, and other external parties with access to data, systems, or operations. Automated scoring uses standardized CAIQ and SIG questionnaires, cross-references evidence with external threat intelligence and public data sources, and produces weighted scores across cybersecurity, financial, compliance, and operational categories.</p>
            </div>
            <div className="vrm-glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--vrm-primary-text)', marginBottom: '0.75rem' }}>What compliance frameworks are supported?</h3>
              <p style={{ color: 'var(--vrm-secondary-text)', lineHeight: 1.6, fontSize: '0.95rem' }}>Supported frameworks include SOC 2, ISO 27001, NIST CSF, GDPR, and HIPAA, with custom questionnaires available.</p>
            </div>
            <div className="vrm-glass-panel" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--vrm-primary-text)', marginBottom: '0.75rem' }}>How long does it take to implement?</h3>
              <p style={{ color: 'var(--vrm-secondary-text)', lineHeight: 1.6, fontSize: '0.95rem' }}>Most teams can import an existing vendor list and send a first assessment within a day, while vendors typically return questionnaires and evidence within three to five business days.</p>
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
