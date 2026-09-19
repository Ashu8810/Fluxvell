import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileCheck, CheckCircle, BadgeCheck, FileText, ArrowRight, Shield, Activity, TrendingDown, Users, PieChart, HelpCircle, FileKey, ShieldAlert, BarChart, Search, RefreshCw } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';

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
              margin: '0 auto',
              fontWeight: 400,
              maxWidth: '800px'
            }}>
              A comprehensive cyber-insurance readiness and risk-evidence platform. Assess cyber-risk exposure, identify coverage gaps, demonstrate continuous security compliance, and negotiate more favorable premiums.
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
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#059669', marginBottom: '1rem' }}>Assessment</div>
                  <h4 style={{ textAlign: 'center', color: 'var(--vrm-primary-text)', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>AI-Powered Risk Scoring</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: 'var(--vrm-secondary-text)', fontSize: '1.15rem', lineHeight: 1.6}}>Translate technical controls and inside-out telemetry into objective risk scores. Move beyond static questionnaires to demonstrate true security posture and quantify financial exposure to underwriters.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)'}}>
                  <BarChart size={24} color="#059669" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#059669' }}>Analysis</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Coverage-Gap Analysis</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  Automatically compare your business exposures against policy limits, sublimits, and exclusions. Benchmark your coverage against peers to identify critical gaps before renewal.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)'}}>
                  <TrendingDown size={24} color="#059669" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#059669' }}>Optimization</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Premium Optimization</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  Generate audit-ready compliance reports for insurers. Prove that critical controls like MFA, EDR, and IAM are fully deployed to negotiate premium savings of 18-25%.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer">
                <ul className="vrm-bento-feature-list" style={{ color: 'var(--vrm-secondary-text)' }}>
                  <li><CheckCircle size={20} color="#059669"/> Claim-Readiness Assessment</li>
                  <li><CheckCircle size={20} color="#059669"/> Continuous Posture Monitoring</li>
                  <li><CheckCircle size={20} color="#059669"/> Third-Party Concentration Risk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">End-to-End Insurance Readiness</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Designed for risk managers, CISOs, brokers, and underwriters to align on security reality.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <FileCheck size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Application Preparation</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Organize security posture and control evidence before applying for coverage or preparing for a renewal.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <ShieldAlert size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Claim Readiness</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Maintain incident-response documentation, forensic evidence, and recovery records to accelerate claims processing.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Users size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Third-Party Concentration</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Identify shared providers and dependencies that may create correlated losses across your vendor portfolio.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <PieChart size={28} color="#10b981" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Insurance Benchmarking</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Compare premiums, limits, and risk posture against a relevant peer group of 500+ similar companies.</p>
            </div>

          </div>
        </section>

        {/* By the Numbers */}
        <section className="vrm-section" style={{ background: '#0f172a', padding: '6rem 0', color: '#ffffff' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2" style={{ color: '#ffffff' }}>Proven Policy Outcomes</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#94a3b8' }}>
              Measurable improvements in insurability and coverage costs.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem', lineHeight: 1 }}>18-25%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Average Premium Savings</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>By demonstrating reduced exposure and objective control coverage.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem', lineHeight: 1 }}>94%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Controls Met</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Consistent validation of MFA, backups, and IAM policies.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem', lineHeight: 1 }}>87%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Coverage Adequacy</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Ensuring policy limits align with true business exposure.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem', lineHeight: 1 }}>94%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Claim Approval Rate</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Resulting from strong evidence preservation and claim readiness.</div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Frequently Asked Questions</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Common questions during the underwriting and application process.
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#10b981" /> Does the risk score represent likelihood or financial loss?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Our AI-powered scoring combines technical control maturity (likelihood) with business interruption and ransomware impact metrics to provide a holistic view of your financial loss exposure.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#10b981" /> How is evidence collected and kept current?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Fluxvell utilizes an inside-out telemetry approach, continuously monitoring configurations and automatically ingesting evidence from your EDR, IAM, and backup systems rather than relying purely on external scans.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#10b981" /> Can it identify portfolio concentration risk?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Yes, our platform maps third-party and fourth-party dependencies (like shared cloud or DNS providers) that could create correlated insurance losses across a wider ecosystem.
              </p>
            </div>

          </div>
        </section>

        {/* The Insurance Lifecycle */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="vrm-heading-2">Built for the Full Insurance Lifecycle</h2>
              <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
                From initial application to continuous monitoring and claims processing.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              
              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '1.5rem' }}>
                  <Search size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>1. Risk Discovery</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Understand your organization, systems, critical services, vendors, and loss scenarios.</p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '1.5rem' }}>
                  <FileText size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>2. Underwriting</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Collect evidence, assess controls, and analyze exposure to determine optimal pricing and terms.</p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '1.5rem' }}>
                  <Activity size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>3. Continuous Monitoring</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Detect material changes in security posture, external exposure, or third-party dependencies.</p>
              </div>

              <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981', marginBottom: '1.5rem' }}>
                  <RefreshCw size={20} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>4. Renewal & Portfolio</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Reassess controls, aggregate risk, and review policy adequacy with automated reporting.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Who Uses Cyber Insurance */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Who Uses Fluxvell Cyber Insurance?</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Bridging the gap between security, finance, and underwriters.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            {['Risk Managers', 'CISOs', 'Brokers', 'Insurance Buyers', 'CFOs', 'Security Leaders', 'Legal Teams', 'Underwriters'].map(team => (
              <div key={team} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#334155', fontWeight: 500 }}>
                <Users size={18} color="#10b981" /> {team}
              </div>
            ))}
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
