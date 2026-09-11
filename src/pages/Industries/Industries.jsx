import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import { 
  ShieldCheck, AlertTriangle, Cloud, Lock, Eye, CheckCircle, 
  Activity, Zap, Network, Bot, Cpu, Database, Server, RefreshCcw, ArrowRight,
  BarChart, Globe, LockKeyhole
} from 'lucide-react';
import './Industries.css';
import EnergySection from './EnergySection';
import AutomotiveSection from './AutomotiveSection';
import FinanceSection from './FinanceSection';
import HealthcareSection from './HealthcareSection';
import LegalSection from './LegalSection';
import RetailSection from './RetailSection';
import EducationSection from './EducationSection';
import HospitalitySection from './HospitalitySection';
import TelecomSection from './TelecomSection';
import CriticalInfrastructureSection from './CriticalInfrastructureSection';
import MediaEntertainmentSection from './MediaEntertainmentSection';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

const Industries = () => {
  const { industryId } = useParams();

  // Handle scrolling to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);

  const renderIndustrySection = () => {
    switch(industryId) {
      case 'energy': return <EnergySection />;
      case 'automotive': return <AutomotiveSection />;
      case 'finance': return <FinanceSection />;
      case 'healthcare': return <HealthcareSection />;
      case 'legal': return <LegalSection />;
      case 'retail': return <RetailSection />;
      case 'education': return <EducationSection />;
      case 'hospitality': return <HospitalitySection />;
      case 'telecom': return <TelecomSection />;
      case 'critical-infrastructure': return <CriticalInfrastructureSection />;
      case 'media-entertainment': return <MediaEntertainmentSection />;
      case 'technology':
        return (
          <div id="technology" style={{paddingTop: '2rem'}}>
          
          <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                        <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Real-time visibility into external threats and exposures.</h1>
              <p className="ind-text-lead" style={{color: '#94a3b8'}}>
                Fluxvell protects technology infrastructure, intellectual property, and digital assets through continuous monitoring and AI-powered threat intelligence.
              </p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
                <a href="/contact" className="ind-btn-primary">Contact Us</a>
                <button onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('tech-dashboard').scrollIntoView({ behavior: 'smooth' });
                }} className="ind-btn-secondary" style={{background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)'}}>Explore Technology Security</button>
              </div>
            </div>
          </section>

          {/* DASHBOARD */}
          <section id="tech-dashboard" className="tech-dashboard-wrapper">
            <div className="ind-glass-panel tech-dash-panel" style={{position: 'relative', padding: '2rem'}}>
              <div className="ind-grid-4">
                
                <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
                  <span className="tech-dash-label">Security Posture</span>
                  <div className="tech-dash-value" style={{color: '#10b981'}}>
                    94%
                  </div>
                  <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569', display: 'flex', justifyContent: 'space-between'}}>
                    <span>Last scan: 5 min ago</span>
                    <span>Risk: Low</span>
                  </div>
                </div>

                <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
                  <span className="tech-dash-label">Active Threats Detected</span>
                  <div className="tech-dash-value" style={{color: '#f59e0b'}}>
                    23
                  </div>
                  <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#ef4444', fontWeight: 500}}>
                    8 critical
                  </div>
                </div>

                <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
                  <span className="tech-dash-label">Open Vulnerabilities</span>
                  <div className="tech-dash-value" style={{color: '#f59e0b'}}>
                    156
                  </div>
                  <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#ef4444', fontWeight: 500}}>
                    12 critical
                  </div>
                </div>

                <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
                  <span className="tech-dash-label">Cloud</span>
                  <div className="tech-dash-value" style={{color: '#38bdf8'}}>
                    342
                  </div>
                  <div style={{marginTop: '0.5rem', fontSize: '0.85rem', color: '#475569'}}>
                    assets monitored • <span style={{color: '#10b981'}}>98% compliant</span>
                  </div>
                </div>

                <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
                  <span className="tech-dash-label">Top Risk Detected</span>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div>
                      <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>API Security Vulnerability</div>
                      <div style={{fontSize: '0.85rem', color: '#64748b'}}>3 external endpoints exposed</div>
                    </div>
                    <span style={{background: '#fee2e2', color: '#ef4444', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600}}>
                      CRITICAL
                    </span>
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
                Technology companies face unique challenges from complex infrastructures, rapid development cycles, and valuable intellectual property. Fluxvell provides comprehensive visibility into the technology ecosystem.
              </p>
            </div>

            <div className="ind-grid-2" style={{marginBottom: '4rem'}}>
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
            </div>

            <div className="ind-glass-panel" style={{textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255, 255, 255, 0.6)'}}>
              <h2 className="ind-heading-2" style={{color: '#38bdf8', marginBottom: '1rem'}}>Complete Visibility</h2>
              <p className="ind-text-lead" style={{marginBottom: 0}}>
                Monitor infrastructure, applications, and third-party dependencies in one unified interface.
              </p>
            </div>
          </section>

          {/* KEY CHALLENGES */}
          <section className="ind-section">
            <h2 className="ind-heading-2" style={{marginBottom: '3rem'}}>Key Technology Security Challenges</h2>
            <div className="ind-grid-3">
              <div className="ind-card">
                <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
                  <Network size={24} />
                </div>
                <h3 className="ind-heading-3">Complex Attack Surface</h3>
                <p className="ind-text-body">Multiple cloud environments, APIs, and microservices create extensive exposure that is difficult to manage without continuous mapping.</p>
              </div>
              <div className="ind-card">
                <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}>
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
                <p className="ind-text-body">Open-source libraries and external supplier APIs create direct supply-chain threat vectors.</p>
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
                <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously discover and monitor the digital footprint, including cloud assets, APIs, and external services, from an adversary’s perspective.</p>
              </div>
              <div className="ind-card" tabIndex="0">
                <div className="ind-card-icon">
                  <LockKeyhole size={24} />
                </div>
                <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Supply Chain Security</h3>
                <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Assess and monitor third-party vendors, open-source libraries, and software supply-chain risks. Identify and block components with compromised software signatures.</p>
              </div>
              <div className="ind-card" tabIndex="0">
                <div className="ind-card-icon">
                  <Zap size={24} />
                </div>
                <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
                <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence and indicators specific to the technology sector and infrastructure, with contextual, machine-learning-assisted security guidelines.</p>
              </div>
              <div className="ind-card" tabIndex="0">
                <div className="ind-card-icon">
                  <BarChart size={24} />
                </div>
                <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
                <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports and dashboards for stakeholders and support standard regulatory matrices with single-click automated downloads.</p>
              </div>
            </div>
          </section>

          {/* EXTERNAL VISIBILITY FLOW */}
          <section className="ind-section">
            <div className="tech-flow-container">
              <div className="tech-flow-node">Cloud Assets</div>
              <ArrowRight color="#38bdf8" />
              <div className="tech-flow-node">APIs</div>
              <ArrowRight color="#38bdf8" />
              <div className="tech-flow-node">Applications</div>
              <ArrowRight color="#38bdf8" />
              <div className="tech-flow-node">External Services</div>
              <ArrowRight color="#38bdf8" />
              <div className="tech-flow-node">Vendors</div>
              <ArrowRight color="#38bdf8" />
              <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
            </div>
          </section>

          {/* OUTCOMES / BENEFITS */}
          <section className="ind-section">
            <h2 className="ind-heading-2" style={{marginBottom: '3rem', textAlign: 'center'}}>Technology Security Outcomes</h2>
            <div className="ind-grid-2">
              <div className="ind-card" style={{background: 'rgba(56, 189, 248, 0.05)', borderColor: 'rgba(56, 189, 248, 0.2)'}}>
                <div className="ind-card-icon" style={{background: 'rgba(56, 189, 248, 0.1)', color: '#0284c7'}}>
                  <Eye size={24} />
                </div>
                <h3 className="ind-heading-3">Complete Visibility</h3>
                <p className="ind-text-body">Monitor cloud, on-premise, and external vendor APIs from a unified security view.</p>
              </div>
              <div className="ind-card">
                <div className="ind-card-icon">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="ind-heading-3">Proactive Risk Reduction</h3>
                <p className="ind-text-body">Identify, test, and remediate open-port exposures and code vulnerabilities.</p>
              </div>
              <div className="ind-card">
                <div className="ind-card-icon">
                  <Cpu size={24} />
                </div>
                <h3 className="ind-heading-3">DevSecOps Integration</h3>
                <p className="ind-text-body">Integrate security checks into live CI/CD workflows without affecting rapid development cycles.</p>
              </div>
              <div className="ind-card">
                <div className="ind-card-icon">
                  <CheckCircle size={24} />
                </div>
                <h3 className="ind-heading-3">Compliance Assurance</h3>
                <p className="ind-text-body">Support alignment with ISO 27001, SOC 2, and localized data regulations.</p>
              </div>
            </div>
          </section>

          {/* TRUST STRIP */}
          <div className="trust-strip">
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
                Complete visibility, actionable security scoring, and automated compliance coverage for technology infrastructure.
              </p>
              <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
            </div>
          </section>

        </div>
        );
      default:
        return <Navigate to="/industries/technology" replace />;
    }
  };

  return (
    <div className="ind-page">
      <div className="ind-content-wrapper">
        {renderIndustrySection()}
      </div>
    </div>
  );
};

export default Industries;
