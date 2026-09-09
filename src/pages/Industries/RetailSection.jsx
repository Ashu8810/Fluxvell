import React from 'react';
import { 
  ShieldCheck, Activity, Users, FileText, 
  Globe, AlertTriangle, Layers, Cpu, Lock, 
  ArrowRight, CheckCircle, Database, Eye, MapPin,
  CheckSquare, Cloud, Server, Box, ShoppingCart, CreditCard,
  Smartphone, Monitor, Truck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailSection = () => {
  return (
    <div id="retail">
      {/* HERO SECTION */}
      <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
        <div style={{maxWidth: '800px', margin: '0 auto'}}>
                    <h1 className="ind-heading-1" style={{background: 'none', WebkitTextFillColor: '#ffffff', color: '#ffffff'}}>Cyber Security for Modern Retail.</h1>
          <p className="ind-text-lead" style={{color: '#94a3b8'}}>
            Monitor retail risks across domains, apps, and vendors. Protect customer data, secure payment gateways, and ensure uninterrupted checkout experiences.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem'}}>
            <a href="/contact" className="ind-btn-primary">Contact Us</a>
          </div>
          <div style={{marginTop: '2.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><CheckCircle size={16} color="#38bdf8" /> PCI DSS Compliant</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500}}><Lock size={16} color="#38bdf8" /> End-to-End Encryption</span>
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="tech-dashboard-wrapper">
        <div className="tech-dash-panel" style={{padding: '2rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem'}}>
            <span style={{fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontWeight: 600}}>
              Example Retail Security Snapshot
            </span>
            <span style={{fontSize: '0.75rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
              <span style={{display: 'inline-block', width: '6px', height: '6px', background: '#38bdf8', borderRadius: '50%'}}></span>
              Live Snapshot
            </span>
          </div>
          <div className="ind-grid-4">
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Operations Scope</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>Global</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Network Status</span>
              <div className="tech-dash-value" style={{color: '#10b981'}}>Secure</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Tx Volume</span>
              <div className="tech-dash-value" style={{color: '#38bdf8'}}>12.4K / min</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: 'span 1'}}>
              <span className="tech-dash-label">Fraud Prevented</span>
              <div className="tech-dash-value" style={{color: '#10b981', fontSize: '1.25rem'}}>$24.5K</div>
            </div>
            <div className="tech-dash-card" style={{gridColumn: '1 / -1', background: '#ffffff'}}>
              <span className="tech-dash-label">Recent Transactions</span>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                  <div className="tech-dash-value" style={{fontSize: '1.25rem', marginBottom: '0.25rem', color: '#0f172a'}}>100% Threat Detection</div>
                  <div style={{fontSize: '0.85rem', color: '#64748b'}}>PCI DSS Compliant • End-to-End Encryption</div>
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
          <h2 className="ind-heading-2">Securing Retail Operations</h2>
          <p className="ind-text-lead">
            Retailers face unique security challenges with high-volume transactions, customer data, and complex supply chains. Fluxvell provides comprehensive protection across the entire retail ecosystem.
          </p>
        </div>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon"><CreditCard size={24} /></div>
            <h3 className="ind-heading-3">Payment Security</h3>
            <p className="ind-text-body">Protect payment gateways and detect checkout anomalies.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><Layers size={24} /></div>
            <h3 className="ind-heading-3">Omnichannel Protection</h3>
            <p className="ind-text-body">Unified security for both brick-and-mortar and e-commerce.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3">Customer Trust</h3>
            <p className="ind-text-body">Protect sensitive customer data, prevent breaches, and build lasting trust with your retail brand.</p>
          </div>
        </div>
        
        {/* Security Architecture Visual */}
        <div className="tech-flow-container" style={{marginTop: '6rem'}}>
          <div className="tech-flow-node">Retail Channels</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Payment Systems</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Customer Data</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">POS / E-commerce</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Vendors & Logistics</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node">Threat Intelligence</div>
          <ArrowRight color="#38bdf8" />
          <div className="tech-flow-node" style={{background: 'rgba(255, 255, 255, 0.8)', borderColor: '#8b5cf6'}}>Executive Reporting</div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Key Security Challenges in Retail</h2>
        <div className="ind-grid-3">
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><AlertTriangle size={24} /></div>
            <h3 className="ind-heading-3">Payment Fraud</h3>
            <p className="ind-text-body">Card-not-present fraud, automated bot checkouts, and chargebacks directly impact revenue and customer trust.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Database size={24} /></div>
            <h3 className="ind-heading-3">Customer Data Breaches</h3>
            <p className="ind-text-body">Loyalty programs and checkout databases containing sensitive PII and payment data are prime targets for cybercriminals.</p>
          </div>
          <div className="ind-card">
            <div className="ind-card-icon" style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444'}}><Truck size={24} /></div>
            <h3 className="ind-heading-3">Supply Chain Risks</h3>
            <p className="ind-text-body">Third-party logistics vendors, suppliers, and integrated POS software providers introduce external security vulnerabilities.</p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>How Fluxvell Secures Retailers</h2>
        <div className="ind-grid-4">
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Lock size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Payment Security</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Monitor and protect payment systems, detect fraudulent transactions in real-time, and ensure PCI DSS compliance.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><Users size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Customer Data Protection</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Secure customer personally identifiable information (PII) and payment data across CRM databases and e-commerce platforms.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><ShieldCheck size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Threat Intelligence</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Get proactive, real-time threat intelligence specific to retail sector threats, including point-of-sale (POS) malware.</p>
          </div>
          <div className="ind-card" tabIndex="0">
            <div className="ind-card-icon"><FileText size={24} /></div>
            <h3 className="ind-heading-3" style={{fontSize: '1.25rem'}}>Executive Reporting</h3>
            <p className="ind-text-body" style={{fontSize: '0.9rem'}}>Generate executive-ready reports on security posture, compliance status, and risk trends for board members.</p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ind-section">
        <h2 className="ind-heading-2" style={{textAlign: 'center', marginBottom: '4rem'}}>Why Retailers Choose Fluxvell</h2>
        <div className="ind-grid-2">
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Reduce Fraud</h3>
            <p className="ind-text-body">Detect and prevent payment fraud and chargebacks instantly.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Build Customer Trust</h3>
            <p className="ind-text-body">Protect customer data and build lasting brand trust.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">PCI Compliance</h3>
            <p className="ind-text-body">Meet Payment Card Industry Data Security Standards effortlessly.</p>
          </div>
          <div className="ind-glass-panel">
            <h3 className="ind-heading-3">Supply Chain Security</h3>
            <p className="ind-text-body">Monitor and protect your entire vendor and logistics ecosystem.</p>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> PCI DSS Compliant</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> End-to-End Encryption</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> SOC 2 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> ISO 27001 Certified</div>
        <div className="trust-badge"><CheckCircle size={16} color="#10b981" /> GDPR Compliant</div>
      </section>

      {/* CTA */}
      <section className="ind-section">
        <div className="ind-glass-panel" style={{textAlign: 'center', padding: '5rem 2rem'}}>
          <h2 className="ind-heading-2">Ready to Secure Your Retail Business?</h2>
          <p className="ind-text-lead" style={{maxWidth: '800px', margin: '0 auto 2.5rem auto'}}>
            Get comprehensive protection for customer data, payment gateways, and your retail brand’s reputation starting today.
          </p>
          <a href="/contact" className="ind-btn-primary" style={{fontSize: '1.125rem', padding: '1rem 3rem'}}>Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default RetailSection;
