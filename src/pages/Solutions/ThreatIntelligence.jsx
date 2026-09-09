import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert, Eye, Target, Activity, FileText,
  ChevronRight, ArrowRight, BarChart2, Globe, AlertCircle, Zap
} from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import './ThreatIntelligence.css';

const ThreatIntelligence = () => {
  return (
    <div className="ti-page-wrapper">
      <div className="ti-hero-wrapper-dark">
        <div className="ti-container">

          {/* HERO SECTION */}
          <section className="ti-hero">
            <div className="ti-hero-content">
              <h1 className="ti-heading-1" style={{ marginBottom: '2rem' }}>Stay Ahead of Emerging Threats</h1>
              <Link to="/contact" className="ti-btn-primary" style={{ marginBottom: '2rem' }}>
                Request Demo <ArrowRight size={20} />
              </Link>
              <p className="ti-body-large">
                Get real-time threat intelligence and actionable insights to detect, prevent, and respond to cyber threats before they affect your business.
              </p>
            </div>

            <div className="ti-glass ti-dashboard-mockup">
              <div className="ti-dashboard-header">
                <div className="ti-dashboard-title">Threat Intelligence Dashboard</div>
                <div className="ti-label-pill" style={{ margin: 0, padding: '0.25rem 0.75rem' }}>Live</div>
              </div>

              <div className="ti-dash-grid">
                {/* Threat Vectors Donut Chart */}
                <div className="ti-dash-panel ti-dash-vectors">
                  <div className="ti-panel-header">
                    <span className="ti-panel-title">Threat Vectors</span>
                    <Target size={14} color="#94a3b8" />
                  </div>
                  <div className="ti-donut-container">
                    <svg viewBox="0 0 100 100" className="ti-svg-donut">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="35" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                      {/* Segments (circumference = 2 * pi * 35 = ~220) */}
                      <circle cx="50" cy="50" r="35" fill="transparent" stroke="#ef4444" strokeWidth="12" strokeDasharray="53 220" strokeDashoffset="0" className="ti-donut-segment" />
                      <circle cx="50" cy="50" r="35" fill="transparent" stroke="#f59e0b" strokeWidth="12" strokeDasharray="79 220" strokeDashoffset="-53" className="ti-donut-segment" />
                      <circle cx="50" cy="50" r="35" fill="transparent" stroke="#06b6d4" strokeWidth="12" strokeDasharray="62 220" strokeDashoffset="-132" className="ti-donut-segment" />
                      <circle cx="50" cy="50" r="35" fill="transparent" stroke="#8b5cf6" strokeWidth="12" strokeDasharray="26 220" strokeDashoffset="-194" className="ti-donut-segment" />
                      
                      <text x="50" y="47" textAnchor="middle" fill="#f8fafc" fontSize="16" fontWeight="bold">342</text>
                      <text x="50" y="58" textAnchor="middle" fill="#94a3b8" fontSize="7">Events</text>
                    </svg>
                    <div className="ti-donut-legend">
                      <div className="ti-legend-item"><span className="ti-legend-dot" style={{background: '#ef4444'}}></span>Malware</div>
                      <div className="ti-legend-item"><span className="ti-legend-dot" style={{background: '#f59e0b'}}></span>Phishing</div>
                      <div className="ti-legend-item"><span className="ti-legend-dot" style={{background: '#06b6d4'}}></span>DDoS</div>
                      <div className="ti-legend-item"><span className="ti-legend-dot" style={{background: '#8b5cf6'}}></span>Insider</div>
                    </div>
                  </div>
                </div>

                {/* Incident Timeline Bar Chart */}
                <div className="ti-dash-panel ti-dash-timeline">
                  <div className="ti-panel-header">
                    <span className="ti-panel-title">Incident Timeline (7d)</span>
                    <BarChart2 size={14} color="#94a3b8" />
                  </div>
                  <div className="ti-bar-chart-container">
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '30%', background: '#06b6d4'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '50%', background: '#06b6d4'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '20%', background: '#06b6d4'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '80%', background: '#ef4444'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '65%', background: '#f59e0b'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '40%', background: '#06b6d4'}}></div></div>
                    <div className="ti-bar-col"><div className="ti-bar-fill" style={{height: '90%', background: '#ef4444'}}></div></div>
                  </div>
                </div>

                {/* Active Threats */}
                <div className="ti-dash-panel ti-dash-threats">
                  <div className="ti-panel-header">
                    <span className="ti-panel-title">Active Threats</span>
                  </div>
                  <div className="ti-threat-list">
                    <div className="ti-threat-row">
                      <div className="ti-threat-info">
                        <span className="ti-threat-name">Malware Payload</span>
                        <span className="ti-threat-ip">192.168.1.104</span>
                      </div>
                      <span className="ti-severity-badge critical">Critical</span>
                    </div>
                    <div className="ti-threat-row">
                      <div className="ti-threat-info">
                        <span className="ti-threat-name">Brute Force</span>
                        <span className="ti-threat-ip">10.0.0.52</span>
                      </div>
                      <span className="ti-severity-badge high">High</span>
                    </div>
                    <div className="ti-threat-row">
                      <div className="ti-threat-info">
                        <span className="ti-threat-name">Port Scan</span>
                        <span className="ti-threat-ip">172.16.0.8</span>
                      </div>
                      <span className="ti-severity-badge medium">Medium</span>
                    </div>
                  </div>
                </div>

                {/* Trend Chart */}
                <div className="ti-dash-panel ti-dash-trend">
                  <div className="ti-panel-header">
                    <span className="ti-panel-title">Severity Trend (24h)</span>
                    <Activity size={14} color="#94a3b8" />
                  </div>
                  <div className="ti-trend-chart-container">
                    <svg viewBox="0 0 200 80" className="ti-svg-trend" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="trendGradCrit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(239, 68, 68, 0.3)" />
                          <stop offset="100%" stopColor="rgba(239, 68, 68, 0)" />
                        </linearGradient>
                        <linearGradient id="trendGradWarn" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(245, 158, 11, 0.3)" />
                          <stop offset="100%" stopColor="rgba(245, 158, 11, 0)" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 60 Q 40 40 80 50 T 160 30 T 200 50 L 200 80 L 0 80 Z" fill="url(#trendGradWarn)" />
                      <path d="M 0 60 Q 40 40 80 50 T 160 30 T 200 50" fill="none" stroke="#f59e0b" strokeWidth="2" />
                      
                      <path d="M 0 70 Q 50 80 100 40 T 150 60 T 200 20 L 200 80 L 0 80 Z" fill="url(#trendGradCrit)" />
                      <path d="M 0 70 Q 50 80 100 40 T 150 60 T 200 20" fill="none" stroke="#ef4444" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Active Campaigns */}
                <div className="ti-dash-panel ti-dash-campaigns">
                  <div className="ti-panel-header">
                    <span className="ti-panel-title">Active Campaigns</span>
                    <Target size={14} color="#94a3b8" />
                  </div>
                  <div className="ti-campaign-list">
                    <div className="ti-campaign-item">
                      <div className="ti-campaign-dot active"></div>
                      <div className="ti-campaign-details">
                        <span className="ti-campaign-name">APT29 / Cozy Bear</span>
                        <span className="ti-campaign-type">Phishing</span>
                      </div>
                    </div>
                    <div className="ti-campaign-item">
                      <div className="ti-campaign-dot monitoring"></div>
                      <div className="ti-campaign-details">
                        <span className="ti-campaign-name">Lazarus Group</span>
                        <span className="ti-campaign-type">Crypto Targeting</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="ti-page-content">
        {/* OVERVIEW SECTION */}
        <section className="ti-section ti-overview-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div className="ti-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ paddingRight: '2rem' }}>
              <h2 className="ti-heading-2" style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
                Transform Threat Data into Actionable Intelligence
              </h2>
              <p className="ti-body-large" style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Axentro Threat Intelligence correlates data from multiple sources to provide contextual, actionable insights. Move from fragmented alerts to prioritized response.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="ti-pill-badge">REAL-TIME ALERTS</span>
                <span className="ti-pill-badge">THREAT PRIORITIZATION</span>
                <span className="ti-pill-badge">ACTIONABLE INSIGHTS</span>
              </div>
            </div>
            
            <div className="ti-white-card">
              <h3 className="ti-heading-3" style={{ color: '#0f172a', fontSize: '1.25rem', marginBottom: '0.5rem' }}>AI-scored Threat Correlation</h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem'}}>Confidence scores across attack vectors in your network.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {[
                  { label: 'Network Threats', score: 98, color: '#0ea5e9' },
                  { label: 'Endpoint Anomalies', score: 94, color: '#f59e0b' },
                  { label: 'Cloud Misconfigurations', score: 89, color: '#10b981' },
                  { label: 'Dark Web Exposure', score: 91, color: '#8b5cf6' }
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

        {/* CORE CAPABILITIES (BENTO GRID) */}
        <section className="ti-section ti-capabilities-section" style={{ background: '#0f172a', padding: '6rem 0' }}>
          <div className="ti-container">
            <h2 className="ti-heading-2" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>Comprehensive Threat Intelligence</h2>
            <div className="ti-bento-grid">
              <div className="ti-glass ti-capability-card ti-cap-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="ti-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><ShieldAlert size={24} color="#818cf8" /></div>
                <h3 className="ti-heading-3" style={{ color: '#ffffff' }}>Real-Time Threat Detection</h3>
                <p style={{ color: '#94a3b8' }}>Instant alerts on emerging threats through AI-powered correlation and analysis.</p>
              </div>

              <div className="ti-glass ti-capability-card ti-cap-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="ti-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><Eye size={24} color="#818cf8" /></div>
                <h3 className="ti-heading-3" style={{ color: '#ffffff' }}>Dark Web Monitoring</h3>
                <p style={{ color: '#94a3b8' }}>Continuous monitoring of dark web forums, marketplaces, and chatter for threats targeting the organization.</p>
              </div>

              <div className="ti-glass ti-capability-card ti-cap-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="ti-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><Target size={24} color="#818cf8" /></div>
                <h3 className="ti-heading-3" style={{ color: '#ffffff' }}>IOC Detection</h3>
                <p style={{ color: '#94a3b8' }}>Automatic detection and real-time correlation of Indicators of Compromise across infrastructure.</p>
              </div>

              <div className="ti-glass ti-capability-card ti-cap-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="ti-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><Zap size={24} color="#818cf8" /></div>
                <h3 className="ti-heading-3" style={{ color: '#ffffff' }}>AI-Powered Analysis</h3>
                <p style={{ color: '#94a3b8' }}>AI-driven threat correlation and analysis to reduce false positives and prioritize real threats.</p>
              </div>

              <div className="ti-glass ti-capability-card ti-cap-5" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="ti-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><FileText size={24} color="#818cf8" /></div>
                <h3 className="ti-heading-3" style={{ color: '#ffffff' }}>Threat Intelligence Reports</h3>
                <p style={{ color: '#94a3b8' }}>Executive-ready reports with actionable insights and recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTINUOUS INTELLIGENCE */}
        <section className="ti-section">
          <div className="ti-container">
            <div className="ti-glass ti-continuous-panel">
            <div>
              <h2 className="ti-heading-2" style={{ marginBottom: '2rem' }}>Never Miss a Threat with Continuous Intelligence</h2>
              <div className="ti-metrics-grid">
                <div className="ti-metric-item">
                  <h4>200+</h4>
                  <div style={{ fontWeight: 600 }}>Global Intelligence</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>Sources worldwide</div>
                </div>
                <div className="ti-metric-item">
                  <h4><AlertCircle size={28} /></h4>
                  <div style={{ fontWeight: 600 }}>Real-Time Alerts</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>Instant notifications</div>
                </div>
                <div className="ti-metric-item">
                  <h4><Target size={28} /></h4>
                  <div style={{ fontWeight: 600 }}>Threat Prioritization</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>Focus on what matters</div>
                </div>
                <div className="ti-metric-item">
                  <h4><BarChart2 size={28} /></h4>
                  <div style={{ fontWeight: 600 }}>Trend Analysis</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.25rem' }}>Track threat patterns</div>
                </div>
              </div>
            </div>
            <div style={{ height: '100%', minHeight: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.4)' }}>
              <img src="/minimal_purple_graphic.jpg" alt="Threat Intelligence Continuous Monitoring" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="ti-section">
          <div className="ti-container">
            <h2 className="ti-heading-2" style={{ textAlign: 'center' }}>Transform Intelligence into Action</h2>
          <div className="ti-workflow">
            <div className="ti-workflow-step">
              <div className="ti-step-number">1</div>
              <div>
                <h3 className="ti-heading-3">Detect</h3>
                <p>Detect threats in real time across all sources.</p>
              </div>
            </div>
            <div className="ti-workflow-step">
              <div className="ti-step-number">2</div>
              <div>
                <h3 className="ti-heading-3">Analyze</h3>
                <p>Correlate and prioritize threats with AI.</p>
              </div>
            </div>
            <div className="ti-workflow-step">
              <div className="ti-step-number">3</div>
              <div>
                <h3 className="ti-heading-3">Respond</h3>
                <p>Take action with actionable intelligence.</p>
              </div>
            </div>
          </div>
          </div>
        </section>


        {/* FINAL CTA */}
        <section className="ti-section">
          <div className="ti-container">
            <div className="ti-glass ti-cta-panel">
            <h2 className="ti-heading-1" style={{ marginBottom: '1rem' }}>Ready to Stay Ahead of Threats?</h2>
            <p className="ti-body-large" style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
              Start getting real-time threat intelligence and actionable insights today.
            </p>
            <Link to="/contact" className="ti-btn-primary" style={{ position: 'relative', zIndex: 10 }}>
              Request Demo <ArrowRight size={20} />
            </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ThreatIntelligence;
