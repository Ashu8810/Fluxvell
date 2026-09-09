import React from 'react';
import { 
  ShieldCheck, Activity, Users, FileText, 
  Globe, AlertTriangle, Layers, Cpu, Lock, 
  ArrowRight, CheckCircle, Database, Eye, CreditCard,
  Building, Briefcase, Key
} from 'lucide-react';

const FinanceSection = () => {
  return (
    <div id="finance">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Finance.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Protect critical financial infrastructure from evolving threats. Secure transactions, customer data, and financial assets with comprehensive cyber security.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
          </div>
          <div style={{marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><FileText size={16} color="#38bdf8" /> GLBA & SOX Compliant</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Lock size={16} color="#38bdf8" /> Bank-Grade Encryption</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><ShieldCheck size={16} color="#38bdf8" /> Assets Protected</span>
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
              <span className="tech-dash-label">Assets Protected</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>$12.4B</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Breaches</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>0 Breaches</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Uptime</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>100%</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Encryption</span>
              <div className="tech-dash-value" style={{color: '#38bdf8', fontSize: '1.25rem'}}>Bank-Grade</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">Compliance Status</span>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>GLBA & SOX Compliant</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>All reporting controls passing</div>
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
          <h2 className="ind-heading-2">Protecting Financial Infrastructure</h2>
          <p className="ind-text-lead">
            Financial institutions face unique security challenges with high-value transactions, sensitive customer data, and complex regulatory requirements. Fluxvell provides comprehensive protection for the entire financial ecosystem.
          </p>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon"><Building size={24} /></div>
            <h3 className="ind-heading-3">Asset Protection</h3>
            <p className="ind-text-body">Protect financial assets, transaction systems, and critical infrastructure from evolving external threats.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Support the security and reporting needs associated with financial regulatory requirements.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3">Complete Financial Security</h3>
            <p className="ind-text-body">Protect transactions, customer data, and financial assets.</p>
          </div>
        </div>
        
        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">Transactions</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Customer Data</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Financial Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Financial Utilities</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Threat Intelligence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Finance</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><AlertTriangle size={24} /></div>
            <h3 className="ind-heading-3">Financial Fraud</h3>
            <p className="ind-text-body">Sophisticated fraud attacks targeting transactions and customer accounts.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Lock size={24} /></div>
            <h3 className="ind-heading-3">Data Breaches</h3>
            <p className="ind-text-body">Sensitive financial data and customer information are prime targets.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><FileText size={24} /></div>
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Meeting GLBA, SOX, GDPR, and other financial regulations requirements.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Financial Institutions</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Activity size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Fraud Detection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Continuously monitor and detect fraud patterns, suspicious transactions, and financial crimes in real-time.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Lock size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Customer Data Protection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Protect sensitive customer PII, financial records, and transaction data across all systems.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Eye size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get real-time threat intelligence specific to the financial sector, including nation-state attacks and financial malware.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports for regulatory compliance, board presentations, and stakeholder communication.</p>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM FLOW */}
      <section className="ind-section">
        <h3 className="ind-heading-3" style={{textAlign: 'center', marginBottom: '2rem'}}>Financial Ecosystem Visibility Flow</h3>
        <div className="tech-flow-container">
          <div className="tech-flow-node">Customer Accounts</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Transactions</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Financial Assets</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Payment / Utilities</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Third Parties</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Threat Intelligence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Financial Institutions Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Fraud Prevention</h3>
            <p className="ind-text-body">Detect and prevent fraud attacks in real-time.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Customer Trust</h3>
            <p className="ind-text-body">Build and maintain customer trust with robust security.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Regulatory Compliance</h3>
            <p className="ind-text-body">Meet GLBA, SOX, and other financial regulations.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Operational Resilience</h3>
            <p className="ind-text-body">Ensure business continuity with continuous monitoring.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> GLBA & SOX Compliant</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> Bank-Grade Encryption</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> Assets Protected</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> SOC 2 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> ISO 27001 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> GLBA Compliant</div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Financial Institution?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for transactions, customer data, and financial assets.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default FinanceSection;
