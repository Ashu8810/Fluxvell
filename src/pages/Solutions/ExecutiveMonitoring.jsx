import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert, Eye, Activity, FileText, Download, Calendar, ChevronDown, Server, Globe, Database,
  ArrowRight, BarChart2, AlertCircle, TrendingUp, Users, PieChart
} from 'lucide-react';
import { Footer } from '../../components/Footer/Footer';
import './ExecutiveMonitoring.css';

const ExecutiveMonitoring = () => {
  return (
    <div className="em-page-wrapper">
      <div className="em-hero-wrapper-dark">
        <div className="em-container">

          {/* HERO SECTION */}
          <section className="em-hero">
            <div className="em-hero-content">
              <h1 className="em-heading-1" style={{ marginBottom: '2rem' }}>Executive-Ready Risk Intelligence</h1>
              <Link to="/contact" className="em-btn-primary" style={{ marginBottom: '2rem' }}>
                Request Demo <ArrowRight size={20} />
              </Link>
              <p className="em-body-large">
                Transform complex security data into clear, actionable insights with executive-ready dashboards, reports, and visualizations that drive informed decision-making.
              </p>
            </div>

            <div className="em-glass em-dashboard-mockup em-dashboard-redesign">
              {/* Header */}
              <div className="em-dash-header">
                <div className="em-dash-brand">
                  <span className="em-dash-title">Executive Risk Dashboard</span>
                  <div className="em-label-pill em-dash-pill">Illustrative Data</div>
                </div>
                <div className="em-dash-actions">
                  <div className="em-dash-date-picker">
                    <Calendar size={14} /> Last 30 Days <ChevronDown size={14} />
                  </div>
                  <button className="em-dash-btn">
                    <Download size={14} /> Export
                  </button>
                </div>
              </div>

              {/* KPI Row */}
              <div className="em-dash-kpi-grid">
                {/* Global Risk Score */}
                <div className="em-dash-kpi-card">
                  <div className="em-dash-kpi-header">
                    <span>Global Risk Score</span>
                    <TrendingUp size={16} color="var(--em-state-safe-border)" />
                  </div>
                  <div className="em-dash-radial-container">
                    <svg viewBox="0 0 100 100" className="em-dash-radial">
                      <circle className="em-radial-bg" cx="50" cy="50" r="40" />
                      <circle className="em-radial-progress safe" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset="40.19" />
                    </svg>
                    <div className="em-radial-value">
                      <span className="score">84</span>
                      <span className="sub">/ 100</span>
                    </div>
                  </div>
                  <div className="em-dash-kpi-footer safe">
                    <span>+4 pts from last month</span>
                  </div>
                </div>

                {/* Critical Exposures */}
                <div className="em-dash-kpi-card">
                  <div className="em-dash-kpi-header">
                    <span>Critical Exposures</span>
                    <ShieldAlert size={16} color="var(--em-state-critical-border)" />
                  </div>
                  <div className="em-dash-kpi-value">12</div>
                  <div className="em-dash-sparkline">
                    <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                      <path d="M0,25 L20,10 L40,15 L60,5 L80,20 L100,5" fill="none" stroke="var(--em-state-critical-border)" strokeWidth="2" />
                      <path d="M0,25 L20,10 L40,15 L60,5 L80,20 L100,5 L100,30 L0,30 Z" fill="url(#crit-grad)" opacity="0.3" />
                      <defs>
                        <linearGradient id="crit-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--em-state-critical-border)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="em-dash-kpi-footer critical">
                    <span>3 new exposures detected</span>
                  </div>
                </div>

                {/* Vendor Compliance */}
                <div className="em-dash-kpi-card">
                  <div className="em-dash-kpi-header">
                    <span>Vendor Compliance</span>
                    <Activity size={16} color="var(--em-accent-indigo)" />
                  </div>
                  <div className="em-dash-kpi-value">92%</div>
                  <div className="em-dash-progress-bar">
                    <div className="em-progress-fill" style={{ width: '92%' }}></div>
                  </div>
                  <div className="em-dash-kpi-footer">
                    <span>28/30 critical vendors passed</span>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="em-dash-main-grid">
                {/* Risk Trend Chart */}
                <div className="em-dash-panel em-dash-trend">
                  <div className="em-dash-panel-header">
                    <span>Risk Posture Trend</span>
                    <div className="em-dash-legend">
                      <span className="legend-item"><span className="dot current"></span> Current</span>
                      <span className="legend-item"><span className="dot target"></span> Target</span>
                    </div>
                  </div>
                  <div className="em-dash-chart-container">
                    <svg viewBox="0 0 400 150" preserveAspectRatio="none" style={{width: '100%', height: '100%'}}>
                      {/* Grid lines */}
                      <line x1="0" y1="30" x2="400" y2="30" className="em-grid-line" />
                      <line x1="0" y1="75" x2="400" y2="75" className="em-grid-line" />
                      <line x1="0" y1="120" x2="400" y2="120" className="em-grid-line" />
                      
                      {/* Target line */}
                      <path d="M0,30 L400,30" className="em-target-line" />
                      
                      {/* Trend line */}
                      <path d="M0,100 L50,110 L100,90 L150,70 L200,80 L250,50 L300,60 L350,40 L400,45" fill="none" stroke="var(--em-accent-cyan)" strokeWidth="3" />
                      <path d="M0,100 L50,110 L100,90 L150,70 L200,80 L250,50 L300,60 L350,40 L400,45 L400,150 L0,150 Z" fill="url(#trend-grad)" opacity="0.2" />
                      
                      <defs>
                        <linearGradient id="trend-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--em-accent-cyan)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="em-chart-labels">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                    </div>
                  </div>
                </div>

                {/* Top Assets */}
                <div className="em-dash-panel em-dash-assets">
                  <div className="em-dash-panel-header">
                    <span>Critical Assets at Risk</span>
                  </div>
                  <div className="em-dash-asset-list">
                    {[
                      { icon: <Server size={14}/>, name: 'Core Payment Gateway', ip: '10.4.22.10', risk: 94, status: 'critical' },
                      { icon: <Database size={14}/>, name: 'Customer DB (Prod)', ip: '10.4.22.15', risk: 88, status: 'warning' },
                      { icon: <Globe size={14}/>, name: 'Public API Edge', ip: '192.168.1.100', risk: 72, status: 'warning' },
                      { icon: <Server size={14}/>, name: 'Internal Auth Server', ip: '10.0.5.50', risk: 45, status: 'safe' }
                    ].map((asset, i) => (
                      <div className="em-asset-row" key={i}>
                        <div className="em-asset-icon">{asset.icon}</div>
                        <div className="em-asset-info">
                          <span className="em-asset-name">{asset.name}</span>
                          <span className="em-asset-ip">{asset.ip}</span>
                        </div>
                        <div className="em-asset-risk">
                          <div className={`em-risk-badge ${asset.status}`}>Risk: {asset.risk}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="em-page-content">
        {/* OVERVIEW SECTION */}
        <section className="em-section em-overview-section" style={{ background: '#f8fafc', padding: '6rem 0' }}>
          <div className="em-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ paddingRight: '2rem' }}>
              <h2 className="em-heading-2" style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
                Board-Level Reporting Made Simple
              </h2>
              <p className="em-body-large" style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Translate complex technical metrics into clear business risk. Empower your leadership team to make informed security investments with confidence.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span className="em-pill-badge">KPI TRACKING</span>
                <span className="em-pill-badge">RISK QUANTIFICATION</span>
                <span className="em-pill-badge">BOARD REPORTING</span>
              </div>
            </div>
            
            <div className="em-white-card">
              <h3 className="em-heading-3" style={{ color: '#0f172a', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Risk Posture Breakdown (Illustrative)</h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', marginBottom: '2rem'}}>Organizational risk distributed by business unit.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                {[
                  { label: 'Corporate IT', score: 85, color: '#10b981' },
                  { label: 'Cloud Infrastructure', score: 72, color: '#f59e0b' },
                  { label: 'Third-Party Vendors', score: 64, color: '#0ea5e9' },
                  { label: 'Subsidiaries', score: 58, color: '#ef4444' }
                ].map((cat, i) => (
                  <div key={i}>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: '#0f172a'}}>
                      <span>{cat.label}</span>
                      <span style={{color: cat.color}}>{cat.score}/100</span>
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
        <section className="em-section em-capabilities-section" style={{ background: '#0f172a', padding: '6rem 0' }}>
          <div className="em-container">
            <h2 className="em-heading-2" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: '#ffffff', marginBottom: '3rem' }}>Key Capabilities</h2>
            <div className="em-bento-grid">
              <div className="em-glass em-capability-card em-cap-1" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="em-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><Eye size={24} color="#818cf8" /></div>
                <h3 className="em-heading-3" style={{ color: '#ffffff' }}>Real-Time Visibility</h3>
                <p style={{ color: '#94a3b8' }}>Monitor your organization's entire security posture through a single, unified executive pane of glass.</p>
              </div>

              <div className="em-glass em-capability-card em-cap-2" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="em-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><FileText size={24} color="#818cf8" /></div>
                <h3 className="em-heading-3" style={{ color: '#ffffff' }}>Stakeholder Reports</h3>
                <p style={{ color: '#94a3b8' }}>Generate board-ready reports that translate technical vulnerabilities into clear business risk and impact.</p>
              </div>

              <div className="em-glass em-capability-card em-cap-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="em-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><PieChart size={24} color="#818cf8" /></div>
                <h3 className="em-heading-3" style={{ color: '#ffffff' }}>Risk Scoring</h3>
                <p style={{ color: '#94a3b8' }}>Quantify your cyber risk with objective, industry-standard scoring metrics to track improvements over time.</p>
              </div>

              <div className="em-glass em-capability-card em-cap-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="em-icon-wrapper" style={{ background: 'rgba(67, 56, 202, 0.2)', borderColor: 'rgba(255,255,255,0.1)' }}><TrendingUp size={24} color="#818cf8" /></div>
                <h3 className="em-heading-3" style={{ color: '#ffffff' }}>Historical Trends</h3>
                <p style={{ color: '#94a3b8' }}>Analyze historical data to demonstrate ROI on security investments and track long-term posture changes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="em-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
          <div className="em-container">
            <h2 className="em-heading-2" style={{ textAlign: 'center', marginBottom: '3rem', color: '#0f172a' }}>Insight Workflow</h2>
            <div className="em-workflow">
              <div className="em-workflow-step">
                <div className="em-step-number">1</div>
                <div>
                  <h3 className="em-heading-3" style={{ color: '#0f172a' }}>Aggregate Data</h3>
                  <p style={{ color: '#475569' }}>Collect telemetry from across your attack surface and vendor ecosystem.</p>
                </div>
              </div>
              <div className="em-workflow-step">
                <div className="em-step-number">2</div>
                <div>
                  <h3 className="em-heading-3" style={{ color: '#0f172a' }}>Visualize Risk</h3>
                  <p style={{ color: '#475569' }}>Transform raw data into intuitive, executive-friendly dashboards and KPIs.</p>
                </div>
              </div>
              <div className="em-workflow-step">
                <div className="em-step-number">3</div>
                <div>
                  <h3 className="em-heading-3" style={{ color: '#0f172a' }}>Drive Decisions</h3>
                  <p style={{ color: '#475569' }}>Leverage insights to allocate resources effectively and communicate with the board.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FINAL CTA */}
        <section className="em-section">
          <div className="em-container">
            <div className="em-glass em-cta-panel">
              <h2 className="em-heading-1" style={{ marginBottom: '1rem' }}>Elevate Your Security Reporting</h2>
              <p className="em-body-large" style={{ maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
                Gain the clarity needed to drive strategic security decisions at the executive level.
              </p>
              <Link to="/contact" className="em-btn-primary" style={{ position: 'relative', zIndex: 10 }}>
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

export default ExecutiveMonitoring;
