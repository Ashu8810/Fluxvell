import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Globe,
  Search,
  ShieldAlert,
  Bell,
  Target,
  FileText
} from 'lucide-react';
import './ExternalAttackSurfaceManagement.css';

export default function ExternalAttackSurfaceManagement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="easm-page">
      <div className="easm-content-wrapper">
        
        {/* HERO SECTION */}
        <section className="easm-section easm-hero">
          <div className="easm-hero-content">
            <h1 className="easm-heading-1">
              Discover Your Complete External Attack Surface
            </h1>
            
            <div className="easm-hero-actions" style={{ marginBottom: '1.5rem', marginTop: 0 }}>
              <Link to="/contact" className="easm-btn-primary">
                Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            
            <p className="easm-hero-desc" style={{ marginTop: '0.5rem' }}>
              Continuously discover, inventory, and monitor your entire external digital footprint to identify vulnerabilities and misconfigurations before attackers can exploit them.
            </p>
          </div>
          
          <div className="easm-hero-visual">
            <div className="easm-dashboard-shell">
              <div className="easm-dash-header">
                <span className="easm-dash-title">External Attack Surface Dashboard</span>
                <div className="easm-dash-dots">
                  <div className="easm-dash-dot"></div>
                  <div className="easm-dash-dot"></div>
                  <div className="easm-dash-dot"></div>
                </div>
              </div>
              <div className="easm-dash-body">
                <div className="easm-dash-summary">
                  <div className="easm-dash-metric">
                    <div className="easm-metric-value">4,812</div>
                    <div className="easm-metric-label">Discovered Assets</div>
                  </div>
                  <div className="easm-dash-metric">
                    <div className="easm-metric-value">
                      <Target size={20} color="#f59e0b" />
                      14
                    </div>
                    <div className="easm-metric-label">Open Ports</div>
                  </div>
                  <div className="easm-dash-metric">
                    <div className="easm-metric-value">
                      <ShieldAlert size={20} color="#ef4444" />
                      3
                    </div>
                    <div className="easm-metric-label">Critical Risks</div>
                  </div>
                </div>
                
                <div className="easm-dash-main">
                  <div className="easm-dash-map">
                    <div className="easm-map-node" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, border: '1px solid #10b981'}}>
                      <Globe size={16} color="#10b981" />
                    </div>
                    {/* Connecting lines conceptually */}
                    <div style={{position: 'absolute', top: '25%', left: '30%', width: '30%', height: '1px', background: 'rgba(59, 130, 246, 0.2)', transform: 'rotate(30deg)'}}></div>
                    <div style={{position: 'absolute', top: '75%', left: '35%', width: '25%', height: '1px', background: 'rgba(59, 130, 246, 0.2)', transform: 'rotate(-45deg)'}}></div>
                    <div style={{position: 'absolute', top: '40%', right: '25%', width: '35%', height: '1px', background: 'rgba(59, 130, 246, 0.2)', transform: 'rotate(-15deg)'}}></div>
                    
                    <div className="easm-map-node" style={{top: '20%', left: '20%'}}></div>
                    <div className="easm-map-node" style={{bottom: '20%', left: '25%'}}></div>
                    <div className="easm-map-node" style={{top: '30%', right: '20%'}}></div>
                    <div className="easm-map-node" style={{bottom: '30%', right: '15%'}}></div>
                  </div>
                  
                  <div className="easm-dash-queue">
                    <div className="easm-queue-item">
                      <span className="easm-queue-label">Expired Certificate</span>
                      <span className="easm-queue-badge easm-badge-high">High</span>
                    </div>
                    <div className="easm-queue-item">
                      <span className="easm-queue-label">Cloud Misconfig</span>
                      <span className="easm-queue-badge easm-badge-med">Med</span>
                    </div>
                    <div className="easm-queue-item">
                      <span className="easm-queue-label">New Domain</span>
                      <span className="easm-queue-badge" style={{background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)'}}>Info</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="easm-section">
          <div className="easm-overview">
            <div>
              <h2 className="easm-heading-2">See Your Attack Surface the Way Attackers Do</h2>
              <p className="easm-text-lead">
                Axentro's Attack Surface Management continuously maps the external digital footprint and identifies exposed assets, misconfigurations, and vulnerabilities that could be exploited.
              </p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
                <span className="easm-glass" style={{padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600}}>Asset Discovery</span>
                <span className="easm-glass" style={{padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600}}>Risk Prioritization</span>
              </div>
            </div>
            <div className="easm-overview-visual">
               <div className="easm-perimeter-circle easm-circle-1"></div>
               <div className="easm-perimeter-circle easm-circle-2"></div>
               <div className="easm-abstract-card" style={{top: '20%', right: '10%'}}>
                 <ShieldAlert size={20} color="#ef4444" /> Exposed Endpoint
               </div>
               <div className="easm-abstract-card" style={{bottom: '20%', left: '10%'}}>
                 <Globe size={20} color="#3b82f6" /> Unknown Domain
               </div>
               <div className="easm-abstract-card" style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '1.5rem', background: 'rgba(15, 23, 42, 0.8)', color: 'white', borderColor: 'rgba(255,255,255,0.1)'}}>
                 Your Footprint
               </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="easm-section">
          <div className="easm-feature-bento">
            {[
              {
                title: 'Complete Visibility in Minutes',
                desc: 'Discover unknown assets and vulnerabilities across the entire external perimeter.'
              },
              {
                title: 'Continuous Asset Discovery',
                desc: 'Automatically discover and inventory external-facing domains, IPs, cloud services, and third-party connections.'
              },
              {
                title: 'Vulnerability Detection',
                desc: 'Identify misconfigurations, open ports, expired certificates, and other security gaps across the attack surface.'
              },
              {
                title: 'Real-Time Monitoring',
                desc: 'Receive instant alerts when new assets appear or existing assets change their security posture.'
              },
              {
                title: 'Risk-Based Prioritization',
                desc: 'Prioritize remediation using risk scores that consider exploitability, business impact, and asset criticality.'
              }
            ].map((cap, i) => (
              <div 
                key={i} 
                className={`easm-bento-card easm-bento-card-${i + 1}`}
              >
                <div className="easm-bento-number">0{i + 1}</div>
                <div className="easm-bento-content">
                  <h3 className="easm-bento-title">{cap.title}</h3>
                  <p className="easm-bento-desc">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTINUOUS MONITORING SECTION */}
        <div className="easm-monitoring-wrapper">
          <section className="easm-section" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <h2 className="easm-heading-2">Never Miss a Security Gap Again</h2>
            <p className="easm-text-lead">
              The external attack surface is continuously observed and changes are surfaced quickly.
            </p>
            
            <div className="easm-monitoring-immersive">
              <div className="easm-monitoring-side">
                <div className="easm-mon-card">
                  <h4>Full Visibility</h4>
                  <p>A complete view of external assets.</p>
                </div>
                <div className="easm-mon-card">
                  <h4>Instant Alerts</h4>
                  <p>Real-time notifications on changes.</p>
                </div>
              </div>
              
              <div className="easm-mon-center">
                <div className="easm-live-indicator">
                  <div className="easm-live-dot"></div>
                  <span className="easm-live-text">Live Scan</span>
                </div>
              </div>
              
              <div className="easm-monitoring-side">
                <div className="easm-mon-card">
                  <h4>Risk Scoring</h4>
                  <p>AI-powered risk prioritization.</p>
                </div>
                <div className="easm-mon-card">
                  <h4>Trend Analysis</h4>
                  <p>Tracking security posture over time.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* THREE-STEP WORKFLOW */}
        <section className="easm-section">
          <h2 className="easm-heading-2" style={{textAlign: 'center'}}>Transform Your Security Posture</h2>
          <div className="easm-workflow">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'identify all external assets and connections.',
                icon: <Search size={24} />
              },
              {
                step: '02',
                title: 'Prioritize',
                desc: 'focus on the most critical vulnerabilities.',
                icon: <Target size={24} />
              },
              {
                step: '03',
                title: 'Remediate',
                desc: 'fix security gaps and monitor progress.',
                icon: <ShieldAlert size={24} />
              }
            ].map((item, i) => (
              <div key={i} className="easm-workflow-step">
                <div className="easm-step-icon">
                  {item.icon}
                </div>
                <h3>{item.step}. {item.title}</h3>
                <p>{item.title} — {item.desc}</p>
              </div>
            ))}
          </div>
        </section>





        {/* FINAL CONVERSION SECTION */}
        <section className="easm-cta-section">
          <h2 className="easm-heading-1" style={{color: 'var(--easm-primary-text)', marginBottom: '1rem'}}>Ready to Map Your Attack Surface?</h2>
          <p className="easm-text-lead" style={{margin: '0 auto 2rem', maxWidth: '600px'}}>
            Start discovering and monitoring your external exposures today.
          </p>
          <Link to="/contact" className="easm-btn-primary">
            Request Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </section>

      </div>
    </div>
  );
}
