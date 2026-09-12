import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowUpRight
} from 'lucide-react';
import './ThirdPartyRiskManagement.css';
import CyberRadarHero from '../../components/ui/CyberRadarHero/CyberRadarHero';
import ThirdPartyRiskManagementTimeline from '../../components/ui/Timeline/ThirdPartyRiskManagementTimeline';

export default function ThirdPartyRiskManagement() {
  const { sectionId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const rawHash = location.hash ? location.hash.replace('#', '') : sectionId;
    if (rawHash) {
      const element = document.getElementById(rawHash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, sectionId]);

  return (
    <div className="vrm-page">
      {/* CYBER RADAR HERO SECTION */}
      <CyberRadarHero 
        tag="THIRD-PARTY RISK MANAGEMENT"
        titleLine1="Find what matters."
        titleLine2="Before attackers do."
        description="Fluxvell helps security teams continuously discover, monitor, and mitigate third-party risk across brand reputation, operational resilience, dark web threats, and cyber insurance."
        primaryBtnText="Request Demo"
        primaryBtnLink="/contact"
        secondaryBtnText="See How It Works"
        secondaryBtnLink="#overview"
        showLogos={false}
      />

      <div className="vrm-content-wrapper">
        {/* OVERVIEW SECTION */}
        <section id="overview" className="vrm-section vrm-overview-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
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

        <ThirdPartyRiskManagementTimeline theme="blue" />

        {/* PRODUCT CAPABILITIES */}
        <section id="capabilities" className="vrm-section">
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

        {/* HOW IT WORKS / WORKFLOW */}
        <section id="workflow" className="vrm-continuous-wrapper" style={{ background: '#0f172a', padding: '6rem 0' }}>
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
        <section id="benefits" className="vrm-section">
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
              <Link to="/contact" className="btn btn-primary btn-animated">
                <span className="btn-text">REQUEST A DEMO</span>
                <div className="btn-icon-wrapper">
                  <ArrowUpRight size={16} />
                </div>
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
