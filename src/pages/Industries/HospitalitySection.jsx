import React from 'react';
import NetworkParticles from '../../components/ui/NetworkParticles/NetworkParticles';
import { 
  ShieldCheck, AlertTriangle, Lock, Eye, CheckCircle, 
  Network, ArrowRight, BarChart, Server, CreditCard,
  Wifi, Building2, UserCheck, Zap, Globe
} from 'lucide-react';

const HospitalitySection = () => {
  return (
    <div id="hospitality" style={{paddingTop: '2rem'}}>
      
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden'}}>
        <NetworkParticles />
        <div style={{maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Hospitality.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Comprehensive hospitality risk protection. Secure guest data, payment systems, and property operations with comprehensive cyber security.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
            <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <CheckCircle size={18} />
                <span style={{fontWeight: 500, fontSize: '0.9rem'}}>PCI Compliant</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <ShieldCheck size={18} />
                <span style={{fontWeight: 500, fontSize: '0.9rem'}}>24/7 Monitoring</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <Globe size={18} />
                <span style={{fontWeight: 500, fontSize: '0.9rem'}}>Global Property SOC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="tech-dashboard-wrapper">
        <div className="ind-glass-panel tech-dash-panel" style={{position: 'relative', padding: '2rem'}}>
          <div style={{position: 'absolute', top: '-12px', right: '2rem', background: '#3b82f6', color: '#ffffff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
            Example Hospitality Security Snapshot
          </div>
          
          <div className="ind-grid-4">
            
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">System status</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>
                Secured
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Property operations online
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Guest Network</span>
              <div className="tech-dash-value" style={{color: '#38bdf8', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                Traffic Encrypted
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Wi-Fi isolation active
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">PMS Database</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                Firewall Active
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Access strictly filtered
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Payment Gateway</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                PCI DSS Validated
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Continuous compliance
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem'}}>
                <div style={{flex: 1}}>
                  <span className="tech-dash-label">Threat Blocked</span>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>Unauthorized POS access attempt prevented at Lobby Terminal.</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>Threat metadata: <span style={{fontWeight: 600}}>IP Flagged • 2s ago</span></div>
                </div>
                <div style={{textAlign: 'right'}}>
                  <span className="tech-dash-label">Guest Privacy</span>
                  <div style={{color: '#10b981', fontSize: '1.25rem', fontWeight: 700}}>100% PII Encrypted</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Securing Hospitality Operations</h2>
          <p className="ind-text-lead">
            Hospitality organizations face unique security challenges with guest data, payment systems, and property operations. Fluxvell provides comprehensive protection across the entire hospitality ecosystem.
          </p>
        </div>

        <div className="ind-grid-3" style={{marginBottom: '4rem'}}>
          <div className="ind-card">
            <div className="ind-card-icon">
              <UserCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Guest Protection</h3>
            <p className="ind-text-body">Protect guest data, reservations, and payment information from external threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Building2 size={24} />
            </div>
            <h3 className="ind-heading-3">Property Security</h3>
            <p className="ind-text-body">Secure property-management systems, guest networks, POS environments, and connected devices.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Guest Experience</h3>
            <p className="ind-text-body">Protect guest data and build trust with secure operations.</p>
          </div>
        </div>
      </section>

      {/* KEY CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>Key Security Challenges in Hospitality</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <Lock size={24} />
            </div>
            <h3 className="ind-heading-3">Guest Data Breaches</h3>
            <p className="ind-text-body">Sensitive guest information and payment data are prime targets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
              <Wifi size={24} />
            </div>
            <h3 className="ind-heading-3">Guest Wi-Fi Security</h3>
            <p className="ind-text-body">Unsecured guest networks and connected devices create vulnerabilities.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <Server size={24} />
            </div>
            <h3 className="ind-heading-3">Property Management</h3>
            <p className="ind-text-body">Property management systems and IoT devices introduce attack vectors.</p>
          </div>
        </div>
      </section>

      {/* FLUXVELL CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>How Fluxvell Secures Hospitality Organizations</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Lock size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Guest Data Protection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Protect guest PII, payment information, and reservations across all properties and systems.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Wifi size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Wi-Fi Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Monitor and secure guest Wi-Fi networks, connected devices, and IoT systems across properties.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Zap size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence specific to hospitality, including fraud attacks and data breaches.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <BarChart size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports and dashboards for property management and stakeholder communication.</p>
          </div>
        </div>
      </section>

      {/* EXTERNAL VISIBILITY FLOW */}
      <section className="ind-section">
        <div className="telemetry-pipeline-wrapper">
          <div className="telemetry-pipeline-track">
            <div className="telemetry-stage-card active">
              <div className="stage-num">01</div>
              <div className="stage-title">Cloud Assets</div>
              <div className="stage-sub">AWS / GCP / K8s</div>
            </div>
            <ArrowRight className="telemetry-arrow" size={16} />
            
            <div className="telemetry-stage-card">
              <div className="stage-num">02</div>
              <div className="stage-title">APIs</div>
              <div className="stage-sub">REST / GraphQL</div>
            </div>
            <ArrowRight className="telemetry-arrow" size={16} />

            <div className="telemetry-stage-card">
              <div className="stage-num">03</div>
              <div className="stage-title">Applications</div>
              <div className="stage-sub">Web & Microservices</div>
            </div>
            <ArrowRight className="telemetry-arrow" size={16} />

            <div className="telemetry-stage-card">
              <div className="stage-num">04</div>
              <div className="stage-title">External Services</div>
              <div className="stage-sub">CDN / DNS / Mail</div>
            </div>
            <ArrowRight className="telemetry-arrow" size={16} />

            <div className="telemetry-stage-card">
              <div className="stage-num">05</div>
              <div className="stage-title">Vendors</div>
              <div className="stage-sub">Supply Chain SBOM</div>
            </div>
            <ArrowRight className="telemetry-arrow" size={16} />

            <div className="telemetry-stage-card">
              <div className="stage-num">06</div>
              <div className="stage-title">Executive Reporting</div>
              <div className="stage-sub">CISO / Board PDF</div>
            </div>
          </div>

          <div className="telemetry-active-details">
            <div className="details-left">
              <span className="details-badge">STAGE 01</span>
              <span className="details-title">Cloud Assets</span>
            </div>
            <div className="details-right">
              <Activity size={16} color="#38bdf8" />
              <span>342 nodes monitored &middot; 0 drift</span>
            </div>
            <div className="details-desc">
              Autonomous discovery of IP ranges, DNS entries, and cloud workloads from an external attacker perspective.
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOMES / BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem', textAlign: 'center'}}>Why Hospitality Organizations Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-card">
            <div className="ind-card-icon">
              <UserCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Guest Trust</h3>
            <p className="ind-text-body">Build and maintain guest trust with robust data protection.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Brand Reputation</h3>
            <p className="ind-text-body">Protect your brand reputation from data breaches and incidents.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <CreditCard size={24} />
            </div>
            <h3 className="ind-heading-3">PCI Compliance</h3>
            <p className="ind-text-body">Meet Payment Card Industry Data Security Standards.</p>
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
      <div className="trust-strip" style={{flexWrap: 'wrap', gap: '1.5rem'}}>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>PCI Compliant</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>PCI DSS Validated</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>100% PII Encrypted</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>SOC 2 Certified</span>
        </div>
        <div className="trust-badge">
          <CheckCircle size={20} color="#10b981" />
          <span>ISO 27001 Certified</span>
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Hospitality Organization?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for guest data, properties, and operations.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>

    </div>
  );
};

export default HospitalitySection;
