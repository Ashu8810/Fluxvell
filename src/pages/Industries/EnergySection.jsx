import React from 'react';
import { 
  Zap, Server, ShieldCheck, Activity, Users, FileText, 
  Globe, AlertTriangle, Layers, Cpu, Radio, ShieldAlert 
} from 'lucide-react';

const EnergySection = () => {
  return (
    <div id="energy">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Energy.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Protect critical energy infrastructure from external threats. Secure operational technology (OT), industrial control systems (ICS), and valuable energy assets with comprehensive cyber security.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
          </div>
          <div style={{marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><ShieldCheck size={16} color="#38bdf8" /> NERC CIP Compliant</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Activity size={16} color="#38bdf8" /> Continuous OT Monitoring</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Zap size={16} color="#38bdf8" /> Grid Stable</span>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="tech-dashboard-wrapper">
        <div className="tech-dash-panel" style={{padding: '2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem'}}>
            <span style={{fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontWeight: 600}}>
              Illustrative Dashboard Data
            </span>
            <span style={{fontSize: '0.75rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
              <span style={{display: 'inline-block', width: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%'}}></span>
              Live Snapshot
            </span>
          </div>
          <div className="ind-grid-4">
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Operational Uptime</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>99.98%</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">OT Network Security</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>Secure</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">ICS Firmware</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>Updated</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Live Power Load</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.5rem'}}>Gen. 2.4 GW</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">SCADA Defense</span>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>142 threats neutralized</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>Continuous monitoring active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Protecting Energy Infrastructure</h2>
          <p className="ind-text-lead">
            Energy companies face critical security challenges involving operational technology (OT), industrial control systems (ICS), and critical infrastructure. Fluxvell provides comprehensive protection for the entire energy ecosystem.
          </p>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon"><Zap size={24} /></div>
            <h3 className="ind-heading-3">Grid Security</h3>
            <p className="ind-text-body">Protect grid-related systems and services from external threats and operational disruption.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Server size={24} /></div>
            <h3 className="ind-heading-3">OT Protection</h3>
            <p className="ind-text-body">Protect operational technology and industrial control systems.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3">Critical Infrastructure</h3>
            <p className="ind-text-body">Protect operational technology and control systems.</p>
          </div>
        </div>
        
        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">External Threats</div>
          <div className="tech-flow-node">Energy Attack Surface</div>
          <div className="tech-flow-node">OT/ICS Systems</div>
          <div className="tech-flow-node">Critical Infrastructure</div>
          <div className="tech-flow-node" style={{borderColor: '#38bdf8', color: '#38bdf8', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'}}>Executive Visibility</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Energy</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)', color: '#f59e0b'}}><Cpu size={24} /></div>
            <h3 className="ind-heading-3">OT/ICS Vulnerabilities</h3>
            <p className="ind-text-body">Aging industrial control systems are increasingly targeted by cyber threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)', color: '#f59e0b'}}><Users size={24} /></div>
            <h3 className="ind-heading-3">Supply Chain Risks</h3>
            <p className="ind-text-body">Equipment vendors and service providers introduce security vulnerabilities.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%)', color: '#f59e0b'}}><FileText size={24} /></div>
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Meeting NERC CIP, ISO 27001, and other regulatory requirements.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Energy Companies</h2>
        <div className="ind-grid-2">
          <div className="ind-card">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3">OT Asset Monitoring</h3>
            <p className="ind-text-body">Continuously monitor operational technology assets, industrial control systems, and critical infrastructure for security threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Globe size={24} /></div>
            <h3 className="ind-heading-3">Vendor Risk Management</h3>
            <p className="ind-text-body">Assess and monitor risks from equipment vendors, service providers, and third-party contractors.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><ShieldAlert size={24} /></div>
            <h3 className="ind-heading-3">Threat Intelligence</h3>
            <p className="ind-text-body">Get real-time threat intelligence specific to the energy sector, including OT/ICS-specific attacks and nation-state threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Layers size={24} /></div>
            <h3 className="ind-heading-3">Executive Reporting</h3>
            <p className="ind-text-body">Generate executive-ready reports and dashboards for regulatory compliance and stakeholder communication.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM FLOW */}
      <section className="ind-section">
        <h3 className="ind-heading-3" style={{textAlign: 'center', marginBottom: '2rem'}}>Energy Ecosystem Visibility</h3>
        <div className="tech-flow-container">
          <div className="tech-flow-node">Generation / Grid Assets</div>
          <div className="tech-flow-node">OT & ICS</div>
          <div className="tech-flow-node">Vendors & Contractors</div>
          <div className="tech-flow-node">External Services</div>
          <div className="tech-flow-node" style={{borderColor: '#38bdf8', color: '#38bdf8', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'}}>Threat Intelligence</div>
          <div className="tech-flow-node" style={{borderColor: '#38bdf8', color: '#38bdf8', boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'}}>Executive Reporting</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Energy Companies Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Critical Infrastructure</h3>
            <p className="ind-text-body">Protect operational technology and control systems.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Meet NERC CIP and other industry regulations.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Operational Resilience</h3>
            <p className="ind-text-body">Ensure business continuity with continuous monitoring.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Supply Chain Security</h3>
            <p className="ind-text-body">Monitor and protect your entire vendor ecosystem.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-badge"><ShieldCheck size={16} /> NERC CIP Compliant</div>
        <div className="trust-badge"><Activity size={16} /> Continuous OT Monitoring</div>
        <div className="trust-badge"><Zap size={16} /> Grid Stable</div>
        <div className="trust-badge"><FileText size={16} /> SOC 2 Certified</div>
        <div className="trust-badge"><Globe size={16} /> ISO 27001 Certified</div>
        <div className="trust-badge"><Users size={16} /> GDPR Compliant</div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Energy Organization?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for critical infrastructure and operational technology.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default EnergySection;
