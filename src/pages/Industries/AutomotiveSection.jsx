import React from 'react';
import { 
  Zap, Server, ShieldCheck, Activity, Users, FileText, 
  Globe, AlertTriangle, Layers, Cpu, Radio, ShieldAlert,
  ArrowRight, Cloud, Lock, CheckCircle, Database, Eye, Car
} from 'lucide-react';

const AutomotiveSection = () => {
  return (
    <div id="automotive">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Automotive.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            AI-driven visibility into automotive external attack surfaces. Secure connected vehicles, manufacturing systems, and supply chain with comprehensive cyber security.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
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
              <span className="tech-dash-label">Vehicle Security Score</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>98%</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Vehicles Protected</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>12.4K+</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">System Breaches</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>0</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Threat Monitoring</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.5rem'}}>24/7 Active</div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Securing Connected Vehicles</h2>
          <p className="ind-text-lead">
            Automotive companies face unique security challenges with connected vehicles, manufacturing systems, and complex supply chains. Fluxvell provides comprehensive protection across the entire automotive ecosystem.
          </p>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon"><Car size={24} /></div>
            <h3 className="ind-heading-3">Vehicle Security</h3>
            <p className="ind-text-body">Protect connected vehicles, vehicle systems, and vehicle communications from external cyber threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Users size={24} /></div>
            <h3 className="ind-heading-3">Supply Chain</h3>
            <p className="ind-text-body">Monitor supplier, component, manufacturer, and third-party risk across the automotive ecosystem.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3">Complete Vehicle Protection</h3>
            <p className="ind-text-body">Protect connected vehicles, manufacturing, and supply chain.</p>
          </div>
        </div>
        
        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">Connected Vehicles</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">ECU / V2X</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Cloud Services</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Manufacturing Systems</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Suppliers</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Visibility</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Automotive</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Radio size={24} /></div>
            <h3 className="ind-heading-3">Connected Vehicle Threats</h3>
            <p className="ind-text-body">Connected vehicles introduce new attack vectors and vulnerabilities.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Server size={24} /></div>
            <h3 className="ind-heading-3">Manufacturing Security</h3>
            <p className="ind-text-body">OT systems and manufacturing infrastructure are prime targets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Users size={24} /></div>
            <h3 className="ind-heading-3">Supply Chain Risks</h3>
            <p className="ind-text-body">Third-party suppliers and components introduce security vulnerabilities.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Automotive Companies</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Vehicle Cybersecurity</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously monitor and protect connected vehicles, ECU systems, and vehicle-to-everything (V2X ) communications.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Server size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Manufacturing Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Secure OT systems, manufacturing lines, and industrial control systems in automotive production facilities.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence specific to automotive, including vehicle hacking and supply chain attacks.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports and dashboards for regulatory compliance and stakeholder communication.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM FLOW */}
      <section className="ind-section">
        <h3 className="ind-heading-3" style={{textAlign: 'center', marginBottom: '2rem'}}>Automotive Ecosystem Visibility Flow</h3>
        <div className="tech-flow-container">
          <div className="tech-flow-node">Vehicle Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">ECU Systems</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">V2X Communications</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Manufacturing OT</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Suppliers & Components</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Threat Intelligence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Automotive Companies Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Vehicle Security</h3>
            <p className="ind-text-body">Protect connected vehicles and ECU systems from attacks.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Manufacturing Protection</h3>
            <p className="ind-text-body">Secure production facilities and industrial control systems.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Supply Chain Security</h3>
            <p className="ind-text-body">Monitor and protect your entire vendor ecosystem.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Meet ISO 21434 and other automotive regulations.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> SOC 2 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> ISO 27001 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> ISO 21434 Compliant</div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Automotive Organization?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for connected vehicles, manufacturing, and supply chain.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default AutomotiveSection;
