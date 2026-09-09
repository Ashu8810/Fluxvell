import React from 'react';
import { 
  ShieldCheck, AlertTriangle, Lock, Eye, CheckCircle, 
  Network, ArrowRight, BarChart, Server, Activity, 
  RefreshCcw, Zap, Globe, Cpu, Cloud, LockKeyhole
} from 'lucide-react';

const TelecomSection = () => {
  return (
    <div id="telecom" style={{paddingTop: '2rem'}}>
      
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security For Telecom.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Gain real-time visibility into your external attack surface. Protect your IP, monitor third-party dependencies, and automate compliance with our enterprise security console.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
            <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', background: 'rgba(255,255,255,0.05)', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)'}}>
                <Globe size={18} />
                <span style={{fontWeight: 500, fontSize: '0.9rem'}}>fluxvell-console-us-east</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="tech-dashboard-wrapper">
        <div className="ind-glass-panel tech-dash-panel" style={{position: 'relative', padding: '2rem'}}>
          <div style={{position: 'absolute', top: '-12px', right: '2rem', background: '#3b82f6', color: '#ffffff', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
            Example Telecom Security Snapshot
          </div>
          
          <div className="ind-grid-4">
            
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">System Health</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>
                98%
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Active Scans
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Security status</span>
              <div className="tech-dash-value" style={{color: '#38bdf8', fontSize: '1.25rem', whiteSpace: 'nowrap'}}>
                Encrypted & Secure
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Global Traffic Analysis
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Cloud Assets</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>
                85%
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Visibility Maintained
              </div>
            </div>

            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">API Endpoints</span>
              <div className="tech-dash-value" style={{color: '#f59e0b'}}>
                62%
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                Dependencies: 100%
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="ind-section">
        <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
          <h2 className="ind-heading-2">Protecting the Technology Sector</h2>
          <p className="ind-text-lead">
            Technology companies face unique security challenges with complex infrastructures, rapid development cycles, and valuable intellectual property, and that Fluxvell provides comprehensive visibility into the entire ecosystem. Applicable to Communications and Telecom Environments.
          </p>
        </div>

        <div className="ind-grid-3" style={{marginBottom: '4rem'}}>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Activity size={24} />
            </div>
            <h3 className="ind-heading-3">Infrastructure Monitoring</h3>
            <p className="ind-text-body">Real-time status updates and configuration metrics from connected hybrid systems.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Lock size={24} />
            </div>
            <h3 className="ind-heading-3">Data Protection</h3>
            <p className="ind-text-body">Automatic vulnerability tracing and secure isolated vaults for core assets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Eye size={24} />
            </div>
            <h3 className="ind-heading-3">Complete Visibility</h3>
            <p className="ind-text-body">Monitor infrastructure, applications, and third-party dependencies in one unified interface.</p>
          </div>
        </div>
      </section>

      {/* KEY CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>Key Security Challenges in Technology</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <Network size={24} />
            </div>
            <h3 className="ind-heading-3">Complex Attack Surface</h3>
            <p className="ind-text-body">Multiple cloud environments, APIs, and microservices create extensive exposure that is hard to manage without continuous mapping.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b'}}>
              <RefreshCcw size={24} />
            </div>
            <h3 className="ind-heading-3">Rapid Development Cycles</h3>
            <p className="ind-text-body">Modern CI/CD pipelines can inadvertently ship production-ready vulnerabilities to live instances without automated continuous checks.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
              <Server size={24} />
            </div>
            <h3 className="ind-heading-3">Third-Party Dependencies</h3>
            <p className="ind-text-body">Heavily integrating open-source libraries and external supplier APIs leaves companies highly vulnerable to direct supply-chain threat vectors.</p>
          </div>
        </div>
      </section>

      {/* FLUXVELL CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>How Fluxvell Secures Technology Companies</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Globe size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Attack Surface Monitoring</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously discover and monitor your entire digital footprint, including cloud assets, APIs, and external services. Gain an adversary’s perspective of security vulnerabilities.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <LockKeyhole size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Supply Chain Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Assess and monitor third-party vendors, open-source libraries, and software supply-chain risks. Instantly identify and block components with compromised software signatures.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <Zap size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence and indicators specific to the technology sector and your infrastructure. Respond fast using contextual, machine-learning-assisted security guidelines.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon">
              <BarChart size={24} />
            </div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports and dashboards to communicate security posture and risk to stakeholders. Support standard regulatory matrices with single-click automated downloads.</p>
          </div>
        </div>
      </section>

      {/* EXTERNAL VISIBILITY FLOW */}
      <section className="ind-section">
        <div className="tech-flow-container" style={{flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center'}}>
          <div className="tech-flow-node">Communications Infrastructure</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Cloud Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">API Endpoints</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Third-Party Dependencies</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Global Traffic Analysis</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Threat Intelligence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* OUTCOMES / BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{marginBottom: '3rem', textAlign: 'center'}}>Why Technology Companies Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-card">
            <div className="ind-card-icon">
              <Eye size={24} />
            </div>
            <h3 className="ind-heading-3">Complete Visibility</h3>
            <p className="ind-text-body">See your entire attack surface across cloud, on-premise, and external vendor APIs through a single monitoring view.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <ShieldCheck size={24} />
            </div>
            <h3 className="ind-heading-3">Proactive Risk Reduction</h3>
            <p className="ind-text-body">Identify, test, and remediate systemic open-port exposures and code vulnerabilities before adversaries can probe them.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <Cpu size={24} />
            </div>
            <h3 className="ind-heading-3">DevSecOps Integration</h3>
            <p className="ind-text-body">Smoothly inject critical security scanning mechanisms into live CI/CD workflows without impacting rapid development cycles.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon">
              <CheckCircle size={24} />
            </div>
            <h3 className="ind-heading-3">Compliance Assurance</h3>
            <p className="ind-text-body">Stay aligned continuously with international security guidelines including ISO 27001, SOC 2, and localized data regulations.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip" style={{flexWrap: 'wrap', gap: '1.5rem'}}>
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

export default TelecomSection;
