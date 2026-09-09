import React from 'react';
import { 
  Building2, Users, Network, ShieldCheck, Activity, FileText, 
  ArrowRight, Globe, Lock, CheckCircle, Database, Eye, Server, Cpu
} from 'lucide-react';

const CriticalInfrastructureSection = () => {
  return (
    <div id="critical-infrastructure">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', position: 'relative'}}>
          <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Critical Infrastructure.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Detect threats across infrastructure, vendors, and access points.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
          </div>
          <div style={{marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><CheckCircle size={16} color="#38bdf8" /> Illustrative Experience</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Globe size={16} color="#38bdf8" /> Continuous Visibility</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><ShieldCheck size={16} color="#38bdf8" /> Executive Reporting</span>
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
          <div className="ind-grid-3">
            
            <div className="tech-dash-card">
              <span className="tech-dash-label">Infrastructure Assets</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>
                Visibility enabled
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Cross-sector visibility active
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Vendor Ecosystem</span>
              <div className="tech-dash-value" style={{color: '#38bdf8', fontSize: '1.25rem'}}>
                Monitoring active
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Vendor-risk indicator tracked
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Access Points</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.25rem'}}>
                Risk assessment in progress
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Access-point-risk indicator updated
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Threat Detection</span>
              <div className="tech-dash-value" style={{color: '#8b5cf6', fontSize: '1.25rem'}}>
                Continuous monitoring
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Operational Resilience</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.25rem'}}>
                Review recommended
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Executive View</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>
                Report available
              </div>
            </div>

            {/* Non-operational dependency map visual */}
            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">Ecosystem Dependencies (Illustrative)</span>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap', gap: '1rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 500}}>
                  <Server size={20} color="#3b82f6" /> Asset Layer
                </div>
                <ArrowRight size={16} color="#cbd5e1" />
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 500}}>
                  <Users size={20} color="#8b5cf6" /> Third-Party Integrations
                </div>
                <ArrowRight size={16} color="#cbd5e1" />
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0f172a', fontWeight: 500}}>
                  <Globe size={20} color="#10b981" /> Remote Access
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Protecting Critical Infrastructure</h2>
          <p className="ind-text-lead">
            Critical infrastructure organizations depend on interconnected systems, vendors, operational environments, and access points. Fluxvell’s Critical Infrastructure section should focus on visibility and threat detection across these connected risk areas.
          </p>
        </div>

        <div className="ind-grid-3">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3">Infrastructure Visibility</h3>
            <p className="ind-text-body">Create a unified view of infrastructure assets, connected systems, and exposed services.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Users size={24} /></div>
            <h3 className="ind-heading-3">Vendor and Contractor Risk</h3>
            <p className="ind-text-body">Monitor the external dependencies, vendors, and contractors connected to essential operations.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Network size={24} /></div>
            <h3 className="ind-heading-3">Access-Point Awareness</h3>
            <p className="ind-text-body">Identify risk across remote access, external services, privileged pathways, and connected entry points.</p>
          </div>
        </div>

        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">Infrastructure Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Vendors / Contractors</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Access Points</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section" style={{background: '#f8fafc', borderRadius: '32px', padding: '4rem 2rem'}}>
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Critical Infrastructure</h2>
        <div className="ind-grid-3">
          <div className="ind-card" style={{background: '#ffffff'}} tabIndex="0">
            <div className="ind-card-icon" style={{background: '#fee2e2', color: '#ef4444'}}><Network size={24} /></div>
            <h3 className="ind-heading-3">Interconnected Infrastructure</h3>
            <p className="ind-text-body">Interdependent infrastructure and operational systems can create complex exposure that is difficult to map continuously.</p>
          </div>
          <div className="ind-card" style={{background: '#ffffff'}} tabIndex="0">
            <div className="ind-card-icon" style={{background: '#fef3c7', color: '#d97706'}}><Users size={24} /></div>
            <h3 className="ind-heading-3">Vendor and Supply-Chain Risk</h3>
            <p className="ind-text-body">Vendors, contractors, and service providers can introduce risk into critical operations and connected environments.</p>
          </div>
          <div className="ind-card" style={{background: '#ffffff'}} tabIndex="0">
            <div className="ind-card-icon" style={{background: '#e0e7ff', color: '#4f46e5'}}><Globe size={24} /></div>
            <h3 className="ind-heading-3">Distributed Access Points</h3>
            <p className="ind-text-body">Remote access, external services, and privileged pathways can create entry points that require continuous visibility and review.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Supports Critical Infrastructure Visibility</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Infrastructure Monitoring</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Maintain visibility into infrastructure assets, exposed services, and connected operational environments.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Vendor Risk Management</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Assess and monitor vendors, contractors, and third-party dependencies connected to critical operations.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Globe size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Surface relevant threat indicators and context for infrastructure, vendors, access points, and essential services.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Present security posture, exposure, risk priorities, and remediation progress to infrastructure leaders and stakeholders.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Critical Infrastructure</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Building2 size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Essential Services</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Identify critical components and map dependencies.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Cpu size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Operational Environments</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Monitor connected systems and assess third-party risk.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Lock size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Access Points</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Review entry points and surface contextual threat indicators.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Present posture, exposure, and priorities to stakeholders.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Critical Infrastructure Organizations Need Continuous Visibility</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Cross-Sector Visibility</h3>
            <p className="ind-text-body">Bring infrastructure, vendors, access points, and connected dependencies into one security view.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Proactive Risk Reduction</h3>
            <p className="ind-text-body">Identify exposed assets, risky dependencies, and access-point concerns before they become larger operational issues.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Vendor and Access Awareness</h3>
            <p className="ind-text-body">Improve understanding of third-party and remote-access exposure across the ecosystem.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Operational Resilience Support</h3>
            <p className="ind-text-body">Support preparedness, prioritization, communication, and continuity planning with security visibility.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Critical Infrastructure?</h2>
          <p className="ind-text-lead" style={{maxWidth: '600px', margin: '0 auto 2.5rem auto'}}>
            Detect threats across infrastructure, vendors, and access points with a unified security view.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default CriticalInfrastructureSection;
