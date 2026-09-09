import React from 'react';
import { 
  ShieldCheck, AlertTriangle, Lock, Eye, CheckCircle, 
  Network, ArrowRight, BarChart, GraduationCap, Mail,
  Users, Database, FileText, Globe, Server
} from 'lucide-react';

const EducationSection = () => {
  return (
    <div id="education" style={{paddingTop: '2rem'}}>
      
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Education.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Secure education ecosystems from leaks, phishing, and risks. Protect student data, research, and campus infrastructure with comprehensive cyber security.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
              <CheckCircle size={20} />
              <span style={{fontWeight: 500}}>FERPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="tech-dashboard-wrapper">
        <div className="ind-glass-panel tech-dash-panel" style={{position: 'relative', padding: '2rem'}}>
          <div style={{position: 'absolute', top: '-12px', right: '2rem', background: '#3b82f6', color: '#ffffff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
            Example Education Security Snapshot
          </div>
          
          <div className="ind-grid-4">
            
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Research Data</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>
                Protected
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Active vault encryption
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Student DB</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                Phishing Attempt — Blocked
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Identity perimeter secure
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Campus Network</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                Secure & Encrypted
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Monitoring active
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Protected Records</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>
                12,847
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Student & faculty profiles
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">Phishing event detail</span>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>Malicious email targeting faculty portal intercepted and quarantined.</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>Zero user interaction occurred. Threat actors blocked network-wide.</div>
                </div>
                <span style={{background: '#fef3c7', color: '#d97706', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                  QUARANTINED
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Securing Education Institutions</h2>
          <p className="ind-text-lead">
            Educational institutions face unique security challenges with sensitive student data, research, and campus infrastructure. Fluxvell provides comprehensive protection across the entire education ecosystem.
          </p>
        </div>

        <div className="ind-grid-3" style={{marginBottom: '4rem'}}>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Network size={24} />
            </div>
            <h3 className="ind-heading-3">Campus Security</h3>
            <p className="ind-text-body">Protect campus networks, faculty portals, academic systems, and connected education infrastructure from external threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Lock size={24} />
            </div>
            <h3 className="ind-heading-3">Data Protection</h3>
            <p className="ind-text-body">Protect student data, academic records, research information, and sensitive institutional assets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <GraduationCap size={24} />
            </div>
            <h3 className="ind-heading-3">Academic Excellence</h3>
            <p className="ind-text-body">Protect student data, research, and academic infrastructure.</p>
          </div>
        </div>
      </section>

      {/* KEY CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>Key Security Challenges in Education</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <Database size={24} />
            </div>
            <h3 className="ind-heading-3">Student Data Breaches</h3>
            <p className="ind-text-body">Sensitive student information and records are prime targets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
              <Mail size={24} />
            </div>
            <h3 className="ind-heading-3">Phishing Attacks</h3>
            <p className="ind-text-body">Students and faculty are frequent targets of phishing campaigns.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <FileText size={24} />
            </div>
            <h3 className="ind-heading-3">Research Security</h3>
            <p className="ind-text-body">Valuable research data and intellectual property need protection.</p>
          </div>
        </div>
      </section>

      {/* FLUXVELL CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>How Fluxvell Secures Education Institutions</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Users size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Student Data Protection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously monitor and protect student PII and academic records.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Phishing Protection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Detect and prevent phishing attacks targeting students and faculty.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Lock size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Research Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Protect valuable research data and intellectual property.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <BarChart size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate reports for board members, administrators, and stakeholders.</p>
          </div>
        </div>
      </section>

      {/* EXTERNAL VISIBILITY FLOW */}
      <section className="ind-section">
        <div className="tech-flow-container">
          <div className="tech-flow-node">Student Data</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Academic Records</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Campus Network</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Faculty / Student Portals</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Research Systems</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Education Vendors</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* OUTCOMES / BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem', textAlign: 'center'}}>Why Education Institutions Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-card">
            <div className="ind-card-icon">
              <Eye size={24} />
            </div>
            <h3 className="ind-heading-3">Student Privacy</h3>
            <p className="ind-text-body">Protect student data and maintain trust with families.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Research Protection</h3>
            <p className="ind-text-body">Secure valuable research and intellectual property.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <CheckCircle size={24} />
            </div>
            <h3 className="ind-heading-3">FERPA Compliance</h3>
            <p className="ind-text-body">Meet FERPA and other educational data regulations.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Server size={24} />
            </div>
            <h3 className="ind-heading-3">Operational Resilience</h3>
            <p className="ind-text-body">Ensure business continuity with continuous monitoring.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>FERPA Compliant</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>SOC 2 Certified</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>ISO 27001 Certified</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>GDPR Compliant</span>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Education Institution?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for student data, research, and campus infrastructure.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default EducationSection;
