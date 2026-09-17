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

export const TprmComparisonSection = () => {
  const comparisonData = [
    {
      capability: "Continuous vendor risk monitoring",
      icon: <Target size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Automated vendor onboarding & assessment",
      icon: <Settings size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Real-time third-party exposure visibility",
      icon: <Eye size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Dark web & credential leak surveillance",
      icon: <Globe size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Zero-touch third-party risk scoring",
      icon: <Shield size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Automated business impact prioritization",
      icon: <BarChart size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Centralized supply chain security dashboard",
      icon: <Network size={18} />,
      fluxvell: true,
      traditional: false
    },
    {
      capability: "Point-in-time questionnaire dependency",
      icon: <User size={18} />,
      fluxvell: false,
      traditional: true
    },
    {
      capability: "Long manual assessment cycles",
      icon: <Clock size={18} />,
      fluxvell: false,
      traditional: true
    },
    {
      capability: "Continuous risk intelligence & alerts",
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
              Why <span className="fluxnode-red-accent">FluxWatch?</span>
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
                  <img src="/fluxwatch_black.png" alt="FluxWatch" style={{ height: '48px' }} />
                </div>
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
