import React from 'react';
import { 
  Building2, Users, Network, ShieldCheck, Activity, FileText, 
  ArrowRight, Globe, Lock, CheckCircle, Database, Eye, Server, Cpu,
  AlertTriangle
} from 'lucide-react';

const MediaEntertainmentSection = () => {
  return (
    <div id="media-entertainment">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', position: 'relative'}}>
          <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Media & Entertainment</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Protect media and entertainment from digital threats and piracy. Protect content, intellectual property, digital platforms, distribution environments, and media operations with continuous security visibility.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
          </div>
          <div style={{marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><CheckCircle size={16} color="#38bdf8" /> Illustrative Experience</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Eye size={16} color="#38bdf8" /> Content Visibility</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Globe size={16} color="#38bdf8" /> Platform Monitoring</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><ShieldCheck size={16} color="#38bdf8" /> Brand Threat Awareness</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><FileText size={16} color="#38bdf8" /> Executive Reporting</span>
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
              <span className="tech-dash-label">Content Assets</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>
                Visibility enabled
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Distribution Platforms</span>
              <div className="tech-dash-value" style={{color: '#38bdf8', fontSize: '1.25rem'}}>
                Monitoring active
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Digital Threats</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.25rem'}}>
                Continuous detection
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Piracy Signals</span>
              <div className="tech-dash-value" style={{color: '#ef4444', fontSize: '1.25rem'}}>
                Review in progress
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Vendor Ecosystem</span>
              <div className="tech-dash-value" style={{color: '#f59e0b', fontSize: '1.25rem'}}>
                Risk monitoring active
              </div>
            </div>

            <div className="tech-dash-card">
              <span className="tech-dash-label">Executive View</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>
                Report available
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Protecting Media & Entertainment Operations</h2>
          <p className="ind-text-lead">
            Media and entertainment organizations depend on valuable content, intellectual property, digital platforms, distribution systems, and external partners. Fluxvell’s Media & Entertainment section should focus on visibility into digital threats, piracy signals, content ecosystems, and third-party exposure.
          </p>
        </div>

        <div className="ind-grid-3">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3">Content and IP Protection</h3>
            <p className="ind-text-body">Improve visibility into digital threats targeting content, intellectual property, publishing assets, and media operations.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Globe size={24} /></div>
            <h3 className="ind-heading-3">Platform and Distribution Security</h3>
            <p className="ind-text-body">Monitor streaming, publishing, broadcast, distribution, and public-facing digital platforms for external exposure.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3">Brand and Piracy Monitoring</h3>
            <p className="ind-text-body">Identify piracy signals, impersonation, abuse, and digital threats that can affect brand trust and content value.</p>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Media & Entertainment</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><AlertTriangle size={24} /></div>
            <h3 className="ind-heading-3">Content and Intellectual-Property Theft</h3>
            <p className="ind-text-body">Valuable media assets and intellectual property can be targeted through unauthorized access, copying, leakage, and distribution.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><AlertTriangle size={24} /></div>
            <h3 className="ind-heading-3">Digital Piracy and Abuse</h3>
            <p className="ind-text-body">Piracy, impersonation, unauthorized distribution, and platform abuse can affect content value, audience trust, and brand reputation.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><AlertTriangle size={24} /></div>
            <h3 className="ind-heading-3">Distributed Platforms and Vendors</h3>
            <p className="ind-text-body">Streaming platforms, publishers, broadcasters, production systems, agencies, vendors, and distribution partners create a complex external ecosystem to monitor.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Supports Media & Entertainment Security</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Digital Attack Surface Monitoring</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Discover and monitor public-facing domains, applications, platforms, APIs, and services connected to media and entertainment operations.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Content and Brand Threat Monitoring</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Surface indicators of impersonation, abuse, unauthorized exposure, and threats targeting content or media brands.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Lock size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Piracy and Distribution Visibility</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Organize piracy signals and unauthorized-distribution indicators for review and response by authorized teams.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Present digital exposure, content risk, vendor risk, brand threats, and response priorities to executives and stakeholders.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM FLOW */}
      <section className="ind-section">
        <h3 className="ind-heading-3" style={{textAlign: 'center', marginBottom: '2rem'}}>Content Ecosystem Visibility Flow</h3>
        <div className="tech-flow-container">
          <div className="tech-flow-node">Content Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Publishing / Streaming Platforms</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Distribution Partners</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Public-Facing Domains</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Brand and Piracy Signals</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Response Teams</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Media & Entertainment Organizations Need Continuous Visibility</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Protect Digital Assets</h3>
            <p className="ind-text-body">Improve visibility into threats affecting content, intellectual property, and public-facing assets.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Reduce Brand Abuse</h3>
            <p className="ind-text-body">Identify impersonation, misuse, suspicious exposure, and threats affecting media brands.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Improve Platform Awareness</h3>
            <p className="ind-text-body">Monitor digital platforms, distribution channels, APIs, and third-party dependencies from one security view.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Support Response and Resilience</h3>
            <p className="ind-text-body">Help security, content, legal, and executive teams prioritize threats and coordinate response.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Protect Your Media & Entertainment Organization?</h2>
          <p className="ind-text-lead" style={{maxWidth: '600px', margin: '0 auto 2.5rem auto'}}>
            Protect digital assets, platforms, brands, and content ecosystems from evolving threats and piracy signals.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainmentSection;
