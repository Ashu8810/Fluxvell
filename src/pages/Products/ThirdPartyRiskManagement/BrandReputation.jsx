import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, CheckCircle, BarChart, Zap, ArrowRight, ShieldAlert, Search, RefreshCw, FileText, Activity, TrendingUp, Users, PieChart, Crosshair, Filter, ShieldCheck, Cpu, Database, HelpCircle } from 'lucide-react';
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
              Monitor your company’s presence across the open web, social media, forums, news outlets, and the dark web. Detect impersonation, phishing domains, unauthorized brand use, negative sentiment, and misinformation before they damage customer trust or business operations.
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
                  <div className="vrm-bento-title-small" style={{ textAlign: 'center',  color: '#8b5cf6', marginBottom: '1rem' }}>Multi-Channel Monitoring</div>
                  <h4 style={{ textAlign: 'center', color: '#0f172a', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2}}>Digital Brand Protection</h4>
                  <p style={{ textAlign: 'center', margin: '0 auto', color: '#475569', fontSize: '1.15rem', lineHeight: 1.6}}>We establish a continuous 24/7 scanning perimeter across the web, social media, messaging platforms, and the dark web to detect early warning signs of brand abuse, leaked credentials, and executive impersonation.</p>
                </div>
              </div>

              {/* Side Cards - Phase 2 & 3 */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-top vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)'}}>
                  <BarChart size={24} color="#8b5cf6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#8b5cf6' }}>Reputation Analytics</div>
                <div className="vrm-bento-title-main" style={{ color: '#0f172a' }}>Sentiment Index & Scoring</div>
                <div className="vrm-bento-desc" style={{ color: '#475569' }}>
                  Track your brand-health scores with our AI-driven Sentiment Index. Monitor social channels for negative sentiment and misinformation, empowering your communications and legal teams with executive-ready reports.
                </div>
              </div>
              
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-side-bottom vrm-accent-purple-premium">
                <div className="vrm-bento-icon-wrapper" style={{background: 'rgba(139, 92, 246, 0.1)', borderColor: 'rgba(139, 92, 246, 0.2)'}}>
                  <Zap size={24} color="#8b5cf6" />
                </div>
                <div className="vrm-bento-title-small" style={{ color: '#8b5cf6' }}>Threat Disruption</div>
                <div className="vrm-bento-title-main" style={{ color: '#0f172a' }}>Impersonation & Takedowns</div>
                <div className="vrm-bento-desc" style={{ color: '#475569' }}>
                  Detect fake social-media accounts, phishing domains, and unauthorized use of logos. Initiate rapid takedown workflows to remove lookalike domains and impersonators, seamlessly integrating with your SIEM/SOAR stack.
                </div>
              </div>

              {/* Features */}
              <div className="vrm-bento-item vrm-glass-panel vrm-bento-footer vrm-accent-purple-premium">
                <ul className="vrm-bento-feature-list" style={{ color: '#475569' }}>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Lookalike Domain Takedowns</li>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Executive Impersonation Detection</li>
                  <li><CheckCircle size={20} color="#8b5cf6"/> Dark Web & Credential Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Expanded Capabilities Section */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Comprehensive Digital Risk Protection</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              From lookalike domains to executive impersonation, our AI-powered platform provides end-to-end monitoring, detection, and takedown workflows.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Globe size={32} color="#3b82f6" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>Lookalike Domain Monitoring</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Identify domains that resemble your web properties. We detect typo-squatted domains and phishing pages to prevent fraud before it impacts your customers.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <ShieldAlert size={32} color="#ef4444" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>Executive Impersonation</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Detect fake profiles or online identities impersonating your senior leaders across professional networks like LinkedIn and social media channels.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2rem', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <Search size={32} color="#8b5cf6" style={{ marginBottom: '1.5rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>Dark Web Intelligence</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Monitor underground channels, paste sites, code repositories, and criminal infrastructure for leaked credentials and stolen brand assets.
              </p>
            </div>
          </div>
        </section>

        {/* Actionable Reporting & Analytics */}
        <section className="vrm-section" style={{ background: '#0f172a', padding: '6rem 0', color: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              
              <div className="vrm-glass-panel" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', margin: 0 }}>Brand Sentiment Index</h4>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(16,185,129,0.1)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>
                    <TrendingUp size={14} /> +4.2 points
                  </span>
                </div>
                <div style={{ fontSize: '4.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1, marginBottom: '1rem' }}>87%</div>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Positive brand presence across major social channels, forums, and news outlets. Measured over the last 30 days.</p>
              </div>

              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#ffffff', marginBottom: '1.5rem' }}>Executive-Ready Reporting</h3>
                <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Convert complex threat data into actionable brand-health indicators. Our analytics engine weights sources, filters false positives, and provides clear visibility for the boardroom.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}><PieChart size={20} color="#8b5cf6"/> Source weighting and baseline metrics</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}><Activity size={20} color="#8b5cf6"/> Real-time sentiment shifts tracking</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#e2e8f0' }}><FileText size={20} color="#8b5cf6"/> Automated boardroom briefings</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works / The Disruption Workflow */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">The Disruption Workflow</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Our proven three-stage process ensures threats are not just detected, but completely neutralized.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div className="vrm-glass-panel" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#3b82f6' }}>
                <Search size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>1. Detect & Verify</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                AI-driven scanning flags potential abuse across the open and dark web, followed by context enrichment and analyst review.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#8b5cf6' }}>
                <Crosshair size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>2. Enforce & Notify</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Leveraging global partnerships, we instantly notify hosts, registrars, and social networks to enforce your intellectual property rights.
              </p>
            </div>

            <div className="vrm-glass-panel" style={{ padding: '2.5rem', background: '#ffffff', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#10b981' }}>
                <ShieldCheck size={32} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#0f172a' }}>3. Cease & Desist</h4>
              <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                For persistent threats, we automate legal workflows, issuing formal cease-and-desist actions directly to the threat actors.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Fluxvell */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                AI-Assisted Precision,<br />Zero Alert Fatigue
              </h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Generic scrapers overwhelm teams with false positives. Fluxvell combines machine learning, image recognition, and natural-language processing to surface only verified threats.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155', fontWeight: 500 }}><Cpu size={20} color="#8b5cf6"/> OCR & Logo Recognition</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155', fontWeight: 500 }}><Filter size={20} color="#8b5cf6"/> Automated False-Positive Filtering</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155', fontWeight: 500 }}><Database size={20} color="#8b5cf6"/> Threat Intelligence Context Enrichment</li>
              </ul>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)', borderRadius: '16px', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 60%)' }}></div>
                <Cpu size={80} color="#64748b" style={{ opacity: 0.5 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Who Uses Brand Reputation */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Who Uses Brand Reputation Management?</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Built for cross-functional teams that need to defend brand equity across all digital channels.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            {['Security Operations', 'Threat Intelligence', 'Brand Protection', 'Communications & PR', 'Legal Counsel', 'Fraud Prevention', 'Executive Risk Teams', 'Marketing'].map(team => (
              <div key={team} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', color: '#334155', fontWeight: 500 }}>
                <Users size={18} color="#64748b" /> {team}
              </div>
            ))}
          </div>
        </section>

        {/* Takedown & Integrations Section */}
        <section className="vrm-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>Rapid Takedown Operations</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                  A "takedown sent" status isn't enough. Our platform orchestrates the entire disruption workflow from evidence collection to final removal, supporting rapid enforcement across global jurisdictions.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Analyst-assisted threat verification</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Automated cease-and-desist actions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#334155' }}><CheckCircle size={20} color="#10b981"/> Transparent removal success tracking</li>
                </ul>
              </div>
              <div style={{ background: '#ffffff', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <RefreshCw size={24} color="#3b82f6" />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>Security Stack Integrations</h4>
                </div>
                <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Seamlessly route alerts and context to your existing security operations center (SOC).
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {['Slack', 'Microsoft Teams', 'Jira', 'ServiceNow', 'SIEM/SOAR', 'Splunk', 'Microsoft Sentinel', 'Okta'].map(integration => (
                    <span key={integration} style={{ padding: '6px 14px', background: '#f1f5f9', color: '#475569', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
                      {integration}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="vrm-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="vrm-heading-2">Frequently Asked Questions</h2>
            <p className="vrm-text-lead" style={{ maxWidth: '700px', margin: '0 auto', color: '#64748b' }}>
              Common questions about our Brand Reputation platform.
            </p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#8b5cf6" /> Does the platform handle the actual takedown of lookalike domains?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Yes. We orchestrate the entire disruption workflow from evidence collection to formal cease-and-desist actions, working directly with global hosts and registrars for rapid takedown.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#8b5cf6" /> How do you avoid alert fatigue from false positives?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Fluxvell utilizes AI, machine learning, and optical character recognition (OCR) to filter out noise, ensuring your security team only reviews verified, high-confidence threats.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.5rem' }}>
                <HelpCircle size={20} color="#8b5cf6" /> Can you monitor for executive impersonation on social media?
              </h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', margin: 0, paddingLeft: '2.25rem', lineHeight: 1.6 }}>
                Yes, we establish a continuous scanning perimeter across professional networks and social platforms to detect fake profiles or unauthorized identities pretending to be your senior leadership.
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
            <h2 className="vrm-heading-2">Ready to Protect Your Brand Reputation?</h2>
            <p className="vrm-text-lead" style={{color: 'var(--vrm-primary-text)', marginBottom: '2rem'}}>
              Join 500+ organizations using Fluxvell for digital risk protection.
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
