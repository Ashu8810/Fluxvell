import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle, ServerCrash, RefreshCcw, ArrowRight, Scale, TrendingDown, Briefcase, Activity, ShieldCheck, FileText, AlertTriangle, LayoutDashboard, Users, GitBranch, Target, ClipboardCheck, BookOpen, FileSearch, HeartPulse, Building, Repeat, AlertOctagon, HelpCircle, Key, LineChart } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';

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
              Identify vendor operational threats early, including financial instability, legal disputes, mergers and acquisitions, and regulatory exposure, to protect your business continuity and make better decisions about vendor relationships.
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
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#3b82f6', marginBottom: '1rem' }}>Early Warning System</div>
                  <h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Financial Health Monitoring</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>Track vendor revenue trends, profitability, and financial stability through real-time risk scoring to detect early warning signs of vendor distress and insolvency before they impact delivery.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)'}}>
                  <ServerCrash size={24} color="#3b82f6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Exposure Discovery</div>
                <div className="vrm-bento-title-main">Legal & Litigation Tracking</div>
                <div className="vrm-bento-desc">
                  Monitor active lawsuits, regulatory actions, and legal exposure across your ecosystem. Avoid service degradation and reputational damage by tracking class-action dockets and enforcement actions.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom vrm-accent-blue-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.2)'}}>
                  <RefreshCcw size={24} color="#3b82f6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#3b82f6' }}>Structural Shifts</div>
                <div className="vrm-bento-title-main">M&A & Compliance Monitoring</div>
                <div className="vrm-bento-desc">
                  Track mergers, ownership changes, and regulatory compliance violations that could alter service strategy, affect financial stability, and trigger contract reassessment or exit decisions.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer vrm-accent-blue-premium">
                <ul className="vrm-bento-feature-list">
                  <li><CheckCircle size={20} color="#3b82f6"/> Real-Time Financial Scoring</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Litigation & Legal Alerts</li>
                  <li><CheckCircle size={20} color="#3b82f6"/> Ownership Change Tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consolidated Risk View Section */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 className="vrm-heading-2">Consolidated Operational-Risk View</h2>
              <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
                Combine financial, legal, M&A, and compliance intelligence into a single portfolio-level monitoring matrix.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div className="vrm-glass-panel" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>Portfolio Risk Matrix</h4>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', background: 'rgba(59,130,246,0.1)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                    <LayoutDashboard size={14} /> 842 Entities Monitored
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: 500 }}><TrendingDown size={18} color="#ef4444" /> Financial Risk Alert</div>
                    <span style={{ color: '#ef4444', fontWeight: 600 }}>High</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: 500 }}><Scale size={18} color="#f59e0b" /> Litigation Docket Entry</div>
                    <span style={{ color: '#f59e0b', fontWeight: 600 }}>Medium</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#334155', fontWeight: 500 }}><Briefcase size={18} color="#3b82f6" /> Ownership Change Detected</div>
                    <span style={{ color: '#3b82f6', fontWeight: 600 }}>Review Required</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Align Intelligence With Business Impact</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A financially healthy vendor may still be high-risk if it supports a critical service with no substitute. Map operational-risk intelligence to your specific vendor criticality, service impact, and risk appetite.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Service-impact mapping & concentration risk</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Automated triggers for remediation & escalation</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Integration with SIEM, Jira, & ServiceNow</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Who Uses Operational Risk Management */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Who Uses Operational Risk Management?</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Built for cross-functional teams that need to defend against vendor failure across the enterprise.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            {['Third-Party Risk (TPRM)', 'Procurement', 'Finance', 'Legal', 'Compliance', 'Enterprise Risk', 'Business Continuity', 'Operational Resilience', 'Security Teams', 'Executive Board'].map(team => (
              <div key={team} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#334155', fontWeight: 500 }}>
                <Users size={18} color="#64748b" /> {team}
              </div>
            ))}
          </div>
        </section>

        {/* TPRM Lifecycle Coverage */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Comprehensive TPRM Lifecycle Coverage</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              We support the entire third-party risk management lifecycle from onboarding to offboarding.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Target size={28} color="#3b82f6" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Risk Analysis</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Leverage financial, legal, litigation, M&A, and regulatory intelligence to conduct rigorous vendor risk assessments.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <ShieldCheck size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Risk Mitigation</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Early alerts automatically trigger review, escalation, remediation, and contingency planning.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Activity size={28} color="#f59e0b" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Continuous Monitoring</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Ongoing intelligence identifies high-risk events between your periodic questionnaires and formal reviews.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <GitBranch size={28} color="#8b5cf6" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Offboarding Decisions</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Ownership changes, litigation, or financial deterioration provide clear triggers for replacement or exit decisions.
              </p>
            </div>

          </div>
        </section>

        {/* Use Cases */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Common Use Cases</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Actionable intelligence for your most critical vendor lifecycle moments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <HeartPulse size={24} color="#ef4444" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Financial Distress Monitoring</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Identify declining financial health before a vendor interruption or insolvency event occurs.</p>
              </div>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <Scale size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Litigation & Regulatory Monitoring</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Detect lawsuits and enforcement events that materially change a vendor’s risk profile.</p>
              </div>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <Repeat size={24} color="#3b82f6" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Continuous Due Diligence</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Monitor vendors dynamically between annual or periodic assessments to catch risks early.</p>
              </div>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <AlertOctagon size={24} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>Concentration Risk Review</h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>Investigate whether multiple critical business services secretly depend on the same ownership group.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Resilience Gap */}
        <section className="vrm-section" style={{ background: '#0a0a0a', padding: '6rem 0', color: '#ffffff' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>Beyond Risk Intelligence: Achieving True Resilience</h2>
            <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
              External signals alone do not show which business services will be affected or how long your organization can tolerate a disruption. Fluxvell bridges the gap between vendor intelligence and true operational resilience.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Activity size={20} color="#3b82f6" />
                <span style={{ fontWeight: 500 }}>Dependency Mapping</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldCheck size={20} color="#10b981" />
                <span style={{ fontWeight: 500 }}>Contingency Planning</span>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 1.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ServerCrash size={20} color="#f59e0b" />
                <span style={{ fontWeight: 500 }}>Scenario Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Frequently Asked Questions</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Common questions about our Operational Risk intelligence.
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#3b82f6" /> How do you score a vendor's financial health?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                We analyze continuous market data, revenue trends, and profitability indicators to calculate an objective financial risk score, warning you of distress before a service interruption occurs.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#3b82f6" /> Does the platform identify concentration risk?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Yes. We map your third-party and fourth-party dependencies so you can identify if multiple critical business services secretly rely on the same underlying provider or ownership group.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#3b82f6" /> How does this connect to our existing TPRM lifecycle?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Our intelligence feeds directly into your onboarding, continuous monitoring, and offboarding decisions. It integrates seamlessly with your SIEM, Jira, or ServiceNow platforms to trigger automated workflows.
              </p>
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
              Join 500+ organizations using Fluxvell to manage third-party risks.
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
