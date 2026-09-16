import React from 'react';
import { 
  Check, 
  X, 
  Target, 
  Settings, 
  Eye, 
  Globe, 
  Shield, 
  BarChart, 
  Network, 
  User, 
  Clock, 
  Zap,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './ComparisonSection.css';

export const ComparisonSection = () => {
  const comparisonData = [
    {
      capability: "Continuous third-party risk monitoring",
      icon: <Target size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Automated security assessment",
      icon: <Settings size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Real-time visibility into external exposure",
      icon: <Eye size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Detects vulnerabilities beyond your direct environment",
      icon: <Globe size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Automated penetration testing",
      icon: <Shield size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Prioritizes risks based on business impact",
      icon: <BarChart size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Centralized third-party security visibility",
      icon: <Network size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Manual assessment dependency",
      icon: <User size={18} />,
      fluxvell: false,
      traditional: true
    },
    {
      capability: "Long assessment cycles",
      icon: <Clock size={18} />,
      fluxvell: false,
      traditional: true
    },
    {
      capability: "Continuous risk intelligence",
      icon: <Zap size={18} />,
      fluxvell: true,
      traditional: false
    }
  ];

  return (
    <section className="comparison-section" id="why-fluxnode">
      <div className="comparison-inner">
        <ScrollReveal>
          <div className="comparison-title-container">
            <h3 className="why-fluxnode-title-new">
              Why <span className="fluxnode-red-accent">FluxNode?</span>
            </h3>
          </div>
          <div className="comparison-grid">
            
            {/* Header Row */}
            <div className="grid-header-row">
              <div className="grid-cell header-cell left-header">
                <h3>WHAT / CAPABILITY</h3>
                <p>A MORE RESILIENT EXTERNAL SECURITY POSTURE</p>
              </div>
              <div className="grid-cell header-cell middle-header">
                <div className="brand-logo-container">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>FluxNode</h3>
                </div>
                <p>CONTINUOUS. AUTOMATED. AHEAD.</p>
              </div>
              <div className="grid-cell header-cell right-header">
                <div className="traditional-logo-container">
                  <Building2 size={20} className="traditional-icon" />
                  <h3>Traditional / Other<br/>Solutions</h3>
                </div>
                <p>REACTIVE. MANUAL. LIMITED.</p>
              </div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => (
              <div className="grid-data-row" key={index}>
                <div className="grid-cell capability-cell">
                  <div className="capability-icon-wrap">
                    {row.icon}
                  </div>
                  <span className="capability-text">{row.capability}</span>
                </div>
                
                <div className="grid-cell fluxvell-cell">
                  {row.fluxvell ? (
                    <div className="check-filled">
                      <Check size={14} strokeWidth={3} color="white" />
                    </div>
                  ) : (
                    <X size={20} className="x-muted" strokeWidth={2} />
                  )}
                </div>
                
                <div className="grid-cell traditional-cell">
                  {row.traditional ? (
                    <Check size={20} className="check-white" strokeWidth={2} />
                  ) : (
                    <X size={20} className="x-muted" strokeWidth={2} />
                  )}
                </div>
              </div>
            ))}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
