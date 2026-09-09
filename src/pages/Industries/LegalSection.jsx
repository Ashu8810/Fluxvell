import React from 'react';
import { 
  ShieldCheck, Activity, Users, FileText, 
  Globe, AlertTriangle, Layers, Cpu, Lock, 
  ArrowRight, CheckCircle, Database, Eye, MapPin,
  CheckSquare, Cloud, Server, Box, Network
} from 'lucide-react';

const LegalSection = () => {
  return (
    <div id="legal">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security For Legal.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Gain real-time visibility into your external attack surface and automate compliance across your entire hybrid cloud environment.
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
              Example Enterprise Security Snapshot
            </span>
            <span style={{fontSize: '0.75rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
              <span style={{display: 'inline-block', width: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%'}}></span>
              Live Snapshot
            </span>
          </div>
          <div className="ind-grid-4">
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Region</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}><MapPin size={18} style={{display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom'}} /> US-EAST-1</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">System status</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>LIVE</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Scan status</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>Scan Complete</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Vulnerabilities</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>0 Vulnerabilities found</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">System Integrity</span>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>100% System Integrity Secure</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>Continuous protection active</div>
                </div>
                <span style={{background: '#d1fae5', color: '#059669', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          
          <h2 className="ind-heading-2">Protecting the Technology Sector</h2>
          <p className="ind-text-lead">
            Technology companies face unique security challenges with complex infrastructures, rapid development cycles, and valuable intellectual property. Fluxvell provides comprehensive visibility into the entire ecosystem.
          </p>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon"><Server size={24} /></div>
            <h3 className="ind-heading-3">Infrastructure Monitoring</h3>
            <p className="ind-text-body">Real-time status updates and configuration metrics from connected hybrid systems.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Lock size={24} /></div>
            <h3 className="ind-heading-3">Data Protection</h3>
            <p className="ind-text-body">Automatic vulnerability tracing and secure isolated vaults for core assets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3">Complete Visibility</h3>
            <p className="ind-text-body">Monitor infrastructure, applications, and third-party dependencies in one unified, fluid cloud interface.</p>
          </div>
        </div>
        
        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">Client Portals</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Hybrid Cloud</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">APIs</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Third-Party Legal Tech</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Attack Surface</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Compliance Evidence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          
          <h2 className="ind-heading-2">Key Security Challenges in Technology</h2>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Network size={24} /></div>
            <h3 className="ind-heading-3">Complex Attack Surface</h3>
            <p className="ind-text-body">Multiple cloud environments, APIs, and microservices create extensive exposure that is hard to manage without continuous mapping.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Cpu size={24} /></div>
            <h3 className="ind-heading-3">Rapid Development Cycles</h3>
            <p className="ind-text-body">Modern CI/CD pipelines can inadvertently ship production-ready vulnerabilities to live instances without automated continuous checks.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Box size={24} /></div>
            <h3 className="ind-heading-3">Third-Party Dependencies</h3>
            <p className="ind-text-body">Heavily integrating open-source libraries and external supplier APIs leaves companies highly vulnerable to direct supply-chain threat vectors.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Technology Companies</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Attack Surface Monitoring</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously discover and monitor your entire digital footprint, including cloud assets, APIs, and external services. Gain an adversary's perspective of security vulnerabilities.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Box size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Supply Chain Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Assess and monitor third-party vendors, open-source libraries, and software supply chain risks. Instantly identify and block components with compromised software signatures.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence and indicators specific to the technology sector and your infrastructure. Respond fast using contextual, machine-learning-assisted security guidelines.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports and dashboards to communicate security posture and risk to stakeholders. Support standard regulatory matrices with single-click automated downloads.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Technology Companies Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Complete Visibility</h3>
            <p className="ind-text-body">See your entire attack surface across cloud, on-premise, and external vendor APIs through a single monitoring view.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Proactive Risk Reduction</h3>
            <p className="ind-text-body">Identify, test, and remediate systemic open-port exposures and code vulnerabilities before adversaries can probe them.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">DevSecOps Integration</h3>
            <p className="ind-text-body">Smoothly inject critical security scanning mechanisms into live CI/CD workflows without impacting rapid development cycles.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Compliance Assurance</h3>
            <p className="ind-text-body">Stay aligned continuously with international security guidelines including ISO 27001, SOC 2, and localized data regulations.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> SOC 2 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> ISO 27001 Certified</div>
        {/* NERC CIP is retained because it appears on the live source page. Replace if corrected Legal certifications are supplied. */}
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> NERC CIP Compliant</div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Technology Organization?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get complete visibility, actionable security scoring, and automated compliance coverage for your tech infrastructure starting today.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default LegalSection;
