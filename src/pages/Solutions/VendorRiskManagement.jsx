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

} from 'lucide-react';
import './VendorRiskManagement.css';
import { Footer } from '../../components/Footer/Footer';

export default function VendorRiskManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        
        {/* HERO SECTION */}
        <section className="vrm-section vrm-hero">
          <div className="vrm-hero-content">
            <h1 className="vrm-heading-1">
              Streamline Vendor Risk With Fluxvell
            </h1>
            
            <div className="vrm-hero-actions" style={{ marginBottom: '1.5rem', marginTop: 0 }}>
              <Link to="/contact" className="vrm-btn-primary">
                Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            
            <p className="vrm-hero-desc" style={{ marginTop: '0.5rem' }}>
              Outdated, static assessments create dangerous blind spots and costly delays. Supercharge your third-party evaluations, master continuous compliance, and collaborate effortlessly with intelligent, agentic AI-powered questionnaires.
            </p>
          </div>
          
          <div className="vrm-dashboard-mockup">
            <div className="vrm-dashboard-base">
              <div className="vrm-dash-header">
                <span className="vrm-dash-title">Vendor Risk Management Dashboard</span>
                <span className="vrm-hero-label" style={{marginBottom: 0}}>Live</span>
              </div>
              <div className="vrm-dash-grid">
                <div className="vrm-dash-card">
                  <span className="vrm-dash-label">Active Vendors</span>
                  <span className="vrm-dash-metric">1,248</span>
                </div>
                <div className="vrm-dash-card">
                  <span className="vrm-dash-label">Critical Risks</span>
                  <span className="vrm-dash-metric" style={{color: '#ef4444'}}>12</span>
                </div>
                <div className="vrm-dash-card" style={{gridColumn: '1 / -1'}}>
                  <span className="vrm-dash-label">Compliance Status</span>
                  <div style={{height: '8px', background: '#e5e7eb', borderRadius: '4px', marginTop: '8px', overflow: 'hidden'}}>
                    <div style={{height: '100%', width: '89%', background: 'var(--vrm-accent-primary)'}}></div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                    <span>89% Validated</span>
                    <span style={{color: 'var(--vrm-accent-primary)'}}>Faster Threat Validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="vrm-section">
          <div className="vrm-overview">
            <div>
              <h2 className="vrm-heading-2">The Trusted Partner for Smart Vendor Risk Assessment</h2>
              <p className="vrm-text-lead">
                Axentro Vendor AI actively correlates global threat signals to deliver high-fidelity, real-time visibility into your entire third-party ecosystem. It's time to abandon manual spreadsheets and embrace intelligent, proactive defense.
              </p>
            </div>
            <div className="vrm-glass-panel" style={{padding: '2rem'}}>
              <h3 className="vrm-heading-3">Actionable Intelligence</h3>
              <p style={{color: 'var(--vrm-secondary-text)'}}>Transform vendor risk assessments into actionable intelligence with continuous monitoring and automated workflows.</p>
            </div>
          </div>

          <div className="vrm-feature-bento">
            {[
              {
                title: 'Validate Risk in Minutes',
                desc: 'Agentic AI streamlines third- and fourth-party vendor assessments, reducing manual effort and costs and simplifying compliance management.',
              },
              {
                title: 'Faster Threat Validation',
                desc: 'Axentro Vendor AI accelerates validation by up to 89% through industry-specific solutions and pre-uploaded certifications, eliminating manual processes.',
              },
              {
                title: 'Automated Risk Flagging',
                desc: 'Non-compliant or risky responses are automatically flagged in real time so emerging supply-chain issues are highlighted immediately.',
              },
              {
                title: 'Autonomous Compliance',
                desc: 'Real-time supply-chain visibility, continuous monitoring, and live updates on compliance status simplify compliance.',
              },
              {
                title: 'Customized Templates',
                desc: 'Customizable industry-specific CAIQ/SIG templates automate vendor validations for accurate, consistent evaluations.',
              }
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

        {/* CONTINUOUS COMPLIANCE */}
        <section className="vrm-continuous-wrapper">
          <div className="vrm-section vrm-continuous">
            <h2 className="vrm-heading-2">Continuous Compliance and Risk Visibility</h2>
            <p className="vrm-text-lead" style={{maxWidth: '800px', margin: '0 auto'}}>
              Axentro Vendor AI supports automated assessments and tailored evaluation templates for a comprehensive, proactive approach to vendor risk management.
            </p>
            
            <div className="vrm-continuous-immersive">
              <div className="vrm-continuous-grid">
                {[
                  { title: 'AI-powered Assessments', icon: <Activity /> },
                  { title: 'Adaptive Questionnaires', icon: <FileText /> },
                  { title: 'Seamless Collaboration', icon: <Users /> },
                  { title: 'Customizable Templates', icon: <Settings /> }
                ].map((item, i) => (
                  <div key={i} className="vrm-glass-panel" style={{padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textAlign: 'left'}}>
                    <div style={{color: '#f97316'}}>{item.icon}</div>
                    <h4 style={{fontWeight: 600, fontSize: '1.125rem', margin: 0}}>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THREE-STEP WORKFLOW */}
        <section className="vrm-section">
          <h2 className="vrm-heading-2" style={{textAlign: 'center'}}>Transform Vendor Risk Assessments</h2>
          <div className="vrm-workflow-container">
            {[
              {
                num: '01',
                title: 'Industry-Specific Risk Assessments',
                desc: 'CAIQ/SIG templates are used to customize questionnaires.'
              },
              {
                num: '02',
                title: 'Adaptive Vendor Risk Visibility',
                desc: 'Questionnaires are automatically distributed when inconsistencies are flagged in real time.'
              },
              {
                num: '03',
                title: 'Seamless Vendor Collaboration',
                desc: 'Everything is consolidated in one platform for tracking and management.'
              }
            ].map((step, i) => (
              <div key={i} className="vrm-workflow-step">
                <div className="vrm-step-number">{step.num}</div>
                <h3 className="vrm-heading-3" style={{marginTop: '2rem'}}>{step.title}</h3>
                <p style={{color: 'var(--vrm-secondary-text)'}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>




        {/* CONVERSION CTA */}
        <section className="vrm-section">
          <div className="vrm-glass-panel vrm-conversion">
            <h2 className="vrm-heading-2">Get in Touch</h2>
            <p className="vrm-text-lead" style={{color: 'var(--vrm-primary-text)'}}>
              Transform chaos into clarity with Fluxvell's intelligent reasoning layer.
            </p>
            <Link to="/contact" className="vrm-btn-primary" style={{marginTop: '1rem'}}>
              Request Demo
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
