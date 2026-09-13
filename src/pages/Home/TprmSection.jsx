import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './TprmSection.css';

export const TprmSection = () => {
  const comparisonRows = [
    {
      traditionalTitle: "Static questionnaire checklists",
      traditionalDesc: "Relies on self-reported compliance surveys that reflect last year's setup.",
      fluxvellTitle: "Real-time surface intelligence",
      fluxvellDesc: "Continuously maps your live supply-chain perimeter, active APIs, and third-party dependencies."
    },
    {
      traditionalTitle: "Subjective risk estimates",
      traditionalDesc: "Assigns speculative threat ratings based on paper assessments and assumptions.",
      fluxvellTitle: "Empirical exploit proof",
      fluxvellDesc: "Safely conducts authorized tests to confirm if external weaknesses can actually be compromised."
    },
    {
      traditionalTitle: "Overwhelming vulnerability logs",
      traditionalDesc: "Drowns security teams in thousands of unverified alerts with zero context on exploitability.",
      fluxvellTitle: "Prioritized attack paths",
      fluxvellDesc: "Filters out the noise to surface the exact critical vectors that threat actors could leverage."
    },
    {
      traditionalTitle: "Siloed ownership & lingering flaws",
      traditionalDesc: "Findings linger indefinitely across fragmented teams without verifiable deadlines or proof.",
      fluxvellTitle: "Guided closure & verified retests",
      fluxvellDesc: "Routes remediation directly to accountable teams and automatically retests once resolved."
    },
    {
      traditionalTitle: "Periodic point-in-time reviews",
      traditionalDesc: "Leaves defenses blind as soon as a supplier modifies infrastructure days later.",
      fluxvellTitle: "Adaptive continuous governance",
      fluxvellDesc: "Maintains an active, evolving resilience baseline across all partner ecosystems 24/7."
    }
  ];

  return (
    <section className="tprm-section" id="tprm">
      <div className="tprm-inner-wrap">
        {/* Distinctive Header Copy */}
        <div className="tprm-top-header">
          <div className="tprm-header-left">
            <h2 className="tprm-main-heading">
              Move beyond checklists.<br />
              <span className="tprm-italic-accent">Validate</span> your actual exposure.
            </h2>
            <p className="tprm-main-lead">
              Surveys and passive scores don’t stop supply chain breaches. Fluxvell unifies real-time third-party risk tracking with autonomous offensive validation, giving your team conclusive proof of what is exploitable before attackers find it.
            </p>
          </div>

          <div className="tprm-header-right">
            <a href="#demo" className="tprm-action-pill-btn">
              <span>Request a live trial</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* 2-Column Comparison Matrix */}
        <ScrollReveal delay={0.15}>
          <div className="tprm-comparison-matrix">
            {/* Left Column: Traditional Approach */}
            <div className="tprm-matrix-col tprm-col-traditional">
              <div className="tprm-matrix-header">
                <div className="tprm-header-badge-wrap">
                  <AlertCircle size={15} className="tprm-badge-icon alert" />
                  <span className="tprm-col-title">LEGACY RISK REVIEWS</span>
                </div>
              </div>

              <div className="tprm-matrix-body">
                {comparisonRows.map((row, index) => (
                  <div key={index} className="tprm-row-item">
                    <h4 className="tprm-item-title">{row.traditionalTitle}</h4>
                    <p className="tprm-item-desc">{row.traditionalDesc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Fluxvell Active Highlight */}
            <div className="tprm-matrix-col tprm-col-fluxvell">
              {/* Technical framing corner brackets */}
              <div className="bracket-tl"></div>
              <div className="bracket-tr"></div>
              <div className="bracket-bl"></div>
              <div className="bracket-br"></div>

              <div className="tprm-matrix-header fluxvell-brand-header">
                <div className="tprm-brand-logo-wrap">
                  <img 
                    src="/Fluxvell_logo_white.png" 
                    alt="Fluxvell" 
                    className="tprm-fluxvell-logo"
                  />
                  <span className="tprm-logo-tagline">CONTINUOUS ASSURANCE</span>
                </div>
              </div>

              <div className="tprm-matrix-body">
                {comparisonRows.map((row, index) => (
                  <div key={index} className="tprm-row-item fluxvell-row">
                    <div className="tprm-row-title-row">
                      <CheckCircle2 size={16} className="tprm-check-icon" />
                      <h4 className="tprm-item-title fluxvell-title">{row.fluxvellTitle}</h4>
                    </div>
                    <p className="tprm-item-desc fluxvell-desc">{row.fluxvellDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Supporting stats footer with authoritative data */}
        <ScrollReveal delay={0.25}>
          <div className="tprm-stats-strip">
            <div className="tprm-stat-box">
              <div className="tprm-stat-value">2x</div>
              <div className="tprm-stat-title">SUPPLY CHAIN VECTOR</div>
              <div className="tprm-stat-text">Supply chain and partner compromise frequency doubled to 30% in global breach investigations.</div>
            </div>
            <div className="tprm-stat-divider"></div>
            <div className="tprm-stat-box">
              <div className="tprm-stat-value">20%</div>
              <div className="tprm-stat-title">KNOWN WEAKNESS ATTACKS</div>
              <div className="tprm-stat-text">Direct exploitation of unverified external vulnerabilities causes 1 in 5 system intrusions.</div>
            </div>
            <div className="tprm-stat-divider"></div>
            <div className="tprm-stat-box">
              <div className="tprm-stat-value">32 Days</div>
              <div className="tprm-stat-title">UNPATCHED DURATION</div>
              <div className="tprm-stat-text">Connected enterprise perimeter vulnerabilities remain unaddressed for a median of 32 days.</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footnote reference */}
        <div className="tprm-section-footnote">
          Industry benchmarks referenced from Verizon DBIR and Gartner Continuous Threat Exposure Management (CTEM) frameworks.
        </div>
      </div>
    </section>
  );
};
