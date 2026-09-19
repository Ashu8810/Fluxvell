import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Eye, CheckCircle, ShieldAlert, Lock, ArrowRight, FileKey, UserX, Database, Globe, Zap, FileText, AlertTriangle, Key, Users, Code, Activity, Search, MessageCircle, Terminal, HelpCircle, TrendingUp } from 'lucide-react';
import '../ThirdPartyRiskManagement.css';

export default function DarkWebSurveillance() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vrm-page">
      <div className="vrm-content-wrapper">
        
        {/* Dark Web Surveillance Hero (DARK) */}
        <section id="dark-web-hero" style={{ 
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
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(10, 10, 10, 0) 70%)',
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
              Master Dark Web Risk<br/>With Fluxvell
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
              A continuous cyber-threat intelligence service monitoring underground forums, marketplaces, and communication channels. Detect compromised credentials, leaked data, and threat-actor activity targeting your organization or your vendors.
            </p>
          </div>
        </section>

        {/* Dark Web Surveillance (WHITE) - Liquid Glass Theme */}
        <section id="dark-web" style={{ 
          background: 'linear-gradient(135deg, #f4f7f9 0%, #eff6ff 50%, #f0fdfa 100%)', 
          padding: '6rem 0 8rem', 
          width: '100vw', 
          marginLeft: 'calc(-50vw + 50%)', 
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Glass Orbs for background */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0 }}></div>

          <div className="vrm-section" style={{ paddingTop: 0, paddingBottom: 0, position: 'relative', zIndex: 1 }}>
            
            <div className="vrm-bento-grid-premium" style={{ '--orb-color': 'rgba(14, 165, 233, 0.15)' }}>
              {/* Hero Card - Phase 1 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-hero">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', padding: '2rem' }}>
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#0284c7', marginBottom: '1rem' }}>Identity Risk</div>
                  <h4 style={{ textAlign: 'center', color: 'var(--vrm-primary-text)', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Compromised-Credential Monitoring</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: 'var(--vrm-secondary-text)', fontSize: '1.15rem', lineHeight: 1.6}}>Detect stolen passwords, exposed session cookies, and active access tokens across dark-web marketplaces, stealer logs, and breach dumps. Stop account takeovers and lateral movement early.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(14, 165, 233, 0.1)', borderColor: 'rgba(14, 165, 233, 0.2)'}}>
                  <UserX size={24} color="#0284c7" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#0284c7' }}>Actor Profiling</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Threat-Actor Intelligence</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  Track threat actors discussing your organization in underground channels. Understand who is targeting you, what infrastructure they use, and if it's part of a broader campaign.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(14, 165, 233, 0.1)', borderColor: 'rgba(14, 165, 233, 0.2)'}}>
                  <Code size={24} color="#0284c7" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#0284c7' }}>IP Protection</div>
                <div className="vrm-bento-title-main" style={{ color: 'var(--vrm-primary-text)' }}>Data-Leak Detection</div>
                <div className="vrm-bento-desc" style={{ color: 'var(--vrm-secondary-text)' }}>
                  Identify leaked customer data, proprietary source code, and sensitive internal information across invite-only communities and ransomware leak sites.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer">
                <ul className="vrm-bento-feature-list" style={{ color: 'var(--vrm-secondary-text)' }}>
                  <li><CheckCircle size={20} color="#0284c7"/> 24/7 Continuous Monitoring</li>
                  <li><CheckCircle size={20} color="#0284c7"/> Instant Actionable Alerts</li>
                  <li><CheckCircle size={20} color="#0284c7"/> Executive Intelligence Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Essential Use Cases</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Protecting your organization from the outside in.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Key size={28} color="#0ea5e9" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Credential-Leak Detection</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Find corporate email addresses, passwords, tokens, or session information exposed by breaches or infostealers.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Globe size={28} color="#0ea5e9" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Vendor Exposure Monitoring</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Identify third-party breaches that expose your customer data or critical access paths.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <AlertTriangle size={28} color="#0ea5e9" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Ransomware Monitoring</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Detect whether your organization or a critical vendor appears on an extortion or ransomware leak site.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Users size={28} color="#0ea5e9" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Executive Protection</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Monitor executives, VIPs, and leadership identities for targeted attacks or impersonation.</p>
            </div>

          </div>
        </section>

        {/* Integration and Remediation */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Moving From Alerts to Action</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Monitoring is only useful if it leads to remediation. Fluxvell integrates seamlessly with your security stack to trigger immediate response workflows before threat actors can capitalize on leaked data.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#0ea5e9"/> Automated password resets & credential revocation</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#0ea5e9"/> Integration with IAM, SIEM, and SOAR tools</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#0ea5e9"/> Incident response playbook triggers</li>
                </ul>
              </div>
              <div style={{ position: 'relative', width: '100%', height: '350px', background: '#0a0a0a', borderRadius: '16px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #1e293b' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.2) 0%, transparent 100%)' }}></div>
                <img src="/alerts_action.jpg" alt="Moving from Alerts to Action Workflow" style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Unmatched Source Coverage */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Unmatched Source Coverage</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              We go far beyond publicly visible paste sites, penetrating gated and invite-only criminal communities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#0ea5e9' }}>
                <Globe size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Tor & I2P Networks</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>Continuous crawling of decentralized, anonymized hidden services and illicit marketplaces.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#0ea5e9' }}>
                <MessageCircle size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Encrypted Chat</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>Monitoring Telegram, Discord, and encrypted forums where initial access brokers operate.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#0ea5e9' }}>
                <Terminal size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Infostealer Logs</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>Direct access to raw stealer logs (RedLine, Vidar) before they hit public credential dumps.</p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#0ea5e9' }}>
                <Lock size={24} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#0f172a' }}>Gated Communities</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.9rem', margin: 0 }}>Human analysts leverage established personas to access invite-only cybercrime boards.</p>
            </div>

          </div>
        </section>

        {/* Who Uses Dark Web Surveillance */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Who Uses Dark Web Surveillance?</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Actionable intelligence for multiple lines of defense.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            {['Security Operations (SecOps)', 'Threat Intelligence', 'Incident Response', 'Fraud & Identity', 'Privacy & Legal', 'Compliance', 'Brand Protection', 'Executive Risk Teams'].map(team => (
              <div key={team} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#334155', fontWeight: 500 }}>
                <Users size={18} color="#64748b" /> {team}
              </div>
            ))}
          </div>
        </section>

        {/* By the Numbers */}
        <section className="vrm-section" style={{ background: '#0f172a', padding: '6rem 0', color: '#ffffff' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2" style={{ color: '#ffffff' }}>Proven Performance Metrics</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#94a3b8' }}>
              We track the metrics that matter. Stop drowning in noise and start acting on verified intelligence.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '0.5rem', lineHeight: 1 }}>98%</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Alert Accuracy</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Eliminating false positives with human validation.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '0.5rem', lineHeight: 1 }}>2.4h</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Average Detection</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>From dark web exposure to actionable alert.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '0.5rem', lineHeight: 1 }}>50M+</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Records Monitored</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Continuous scanning across 200+ dark web sources.</div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0ea5e9', marginBottom: '0.5rem', lineHeight: 1 }}>15k+</div>
              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' }}>Threats Prevented</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>Annually stopped account takeovers and lateral movement.</div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Frequently Asked Questions</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Common questions from security buyers evaluating dark web intelligence.
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#0ea5e9" /> Do you rely purely on automated collection?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                No. While automated crawling covers open forums and paste sites, we use specialized human analysts with established personas to access gated, invite-only communities where the highest-value data is traded.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#0ea5e9" /> How do you handle false positives and duplicate breach data?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                We do not alert on every recycled combo list. Our platform validates if a credential is new, whether it corresponds to an active employee, and filters out noise so your SOC only sees a validated 98% accurate alert stream.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#0ea5e9" /> Can you monitor our vendors and subsidiaries?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Yes. Fluxvell’s Dark Web Surveillance natively integrates with our TPRM platform, allowing you to automatically map supply-chain exposures and third-party breaches back to your vendor inventory.
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
