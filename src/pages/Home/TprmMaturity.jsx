import React, { useState } from 'react';
import { Shield, Sparkles, Activity, Target, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './TprmMaturity.css';

export const TprmMaturity = () => {
  const [activeStage, setActiveStage] = useState(3); // default highlight on continuous/autonomous stage

  const stages = [
    {
      id: 0,
      badge: "Stage 01",
      stepName: "Basic Diligence",
      tagline: "Perimeter Mapping",
      title: "Foundational Visibility",
      desc: "Catalog public assets, third-party software dependencies, and critical vendors to establish your baseline footprint.",
      shape: "hexagon",
      deliverables: ["Vendor registry", "Domain discovery", "Exposure baseline"]
    },
    {
      id: 1,
      badge: "Stage 02",
      stepName: "Periodic Audits",
      tagline: "Point-in-Time Assessments",
      title: "Structured Review Cycles",
      desc: "Run scheduled questionnaires and standard vulnerability scans to evaluate compliance at regular contractual intervals.",
      shape: "triangle",
      deliverables: ["Questionnaire audits", "Quarterly CVE scans", "Compliance reports"]
    },
    {
      id: 2,
      badge: "Stage 03",
      stepName: "Continuous Telemetry",
      tagline: "Live Asset Tracking",
      title: "Real-Time Surface Monitoring",
      desc: "Monitor vendor access changes, unmanaged cloud services, and new zero-days as they emerge across your ecosystem.",
      shape: "double-brackets",
      deliverables: ["Continuous asset sync", "Drift detection", "Subdomain takeover alerts"]
    },
    {
      id: 3,
      badge: "Stage 04",
      stepName: "Autonomous Validation",
      tagline: "Fluxvell Continuous Proof",
      title: "Threat-Informed Action",
      desc: "Validate exploitable attack chains through safe autonomous penetration testing and verify fixes with continuous retesting.",
      shape: "fluxvell-mark",
      deliverables: ["Autonomous exploit proof", "Remediation prioritization", "Continuous retesting"]
    }
  ];

  return (
    <section className="tprm-journey-section" id="tprm-journey">
      {/* Animated Liquid-Glass Ambient Background (Continuous Looping Mesh) */}
      <div className="tprm-liquid-bg-canvas" aria-hidden="true">
        <div className="liquid-orb liquid-orb-1"></div>
        <div className="liquid-orb liquid-orb-2"></div>
        <div className="liquid-orb liquid-orb-3"></div>
        <div className="liquid-orb liquid-orb-4"></div>
        <div className="liquid-mesh-grid"></div>
        {/* Floating Ambient Geometric Glyphs in Background */}
        <div className="floating-ambient-shape ambient-shape-1"></div>
        <div className="floating-ambient-shape ambient-shape-2"></div>
        <div className="floating-ambient-shape ambient-shape-3"></div>
      </div>

      <div className="tprm-journey-inner">
        {/* Minimalist Top Eyebrow / Abstract Motif */}
        <div className="tprm-journey-top-motif">
          <div className="motif-line"></div>
          <div className="motif-glyph">
            <span className="motif-dot"></span>
          </div>
          <div className="motif-line"></div>
        </div>

        {/* Section Header */}
        <ScrollReveal className="tprm-journey-header">
          <h2 className="tprm-journey-title">
            We meet you wherever you’re at<br />
            on your <span className="tprm-red-accent">TPRM journey.</span>
          </h2>
          <p className="tprm-journey-subtitle">
            Whether you are standardizing basic vendor tracking or executing continuous autonomous exploit validation, Fluxvell scales seamlessly with your security program’s maturity.
          </p>
        </ScrollReveal>

        {/* Minimal Progress Track Line with Step Nodes */}
        <div className="tprm-progress-track-wrapper">
          <div className="tprm-progress-line-bg">
            <div 
              className="tprm-progress-line-fill" 
              style={{ width: `${(activeStage / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="tprm-progress-nodes">
            {stages.map((stage, idx) => (
              <button
                key={stage.id}
                className={`tprm-progress-pill ${activeStage === idx ? 'active' : ''} ${idx <= activeStage ? 'passed' : ''}`}
                onClick={() => setActiveStage(idx)}
              >
                <span className="pill-step-indicator">{stage.stepName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Staged Minimal Cards with Unique Geometric Shapes */}
        <div className="tprm-cards-grid">
          {stages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`tprm-stage-card card-stage-${idx} ${activeStage === idx ? 'is-selected' : ''}`}
              onMouseEnter={() => setActiveStage(idx)}
            >
              {/* Background Geometric Watermark Shapes */}
              <div className="stage-card-watermark">
                {stage.shape === 'hexagon' && (
                  <svg className="watermark-svg svg-radar-pentagon" viewBox="0 0 160 160">
                    <polygon points="80,14 146,62 121,140 39,140 14,62" fill="none" stroke="currentColor" strokeWidth="1.75" opacity="0.4" />
                    <polygon points="80,36 128,71 110,126 50,126 32,71" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <polygon points="80,58 110,80 99,112 61,112 50,80" fill="none" stroke="currentColor" strokeWidth="1.25" opacity="0.85" />
                    <circle cx="80" cy="88" r="4" fill="currentColor" opacity="0.9" />
                    <line x1="80" y1="14" x2="80" y2="88" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="14" y1="62" x2="80" y2="88" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <line x1="146" y1="62" x2="80" y2="88" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                  </svg>
                )}

                {stage.shape === 'triangle' && (
                  <svg className="watermark-svg svg-nested-diamond" viewBox="0 0 160 160">
                    {/* Concentric 45-deg Diamond / Octagon Hybrid */}
                    <polygon points="80,10 150,80 80,150 10,80" fill="none" stroke="currentColor" strokeWidth="1.75" opacity="0.4" />
                    <polygon points="80,32 128,80 80,128 32,80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <polygon points="80,54 106,80 80,106 54,80" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.85" />
                    {/* Precision Corner Calibrators */}
                    <path d="M 72 10 L 80 2 L 88 10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
                    <path d="M 72 150 L 80 158 L 88 150" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
                    <path d="M 10 72 L 2 80 L 10 88" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
                    <path d="M 150 72 L 158 80 L 150 88" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.75" />
                  </svg>
                )}

                {stage.shape === 'double-brackets' && (
                  <svg className="watermark-svg svg-cyber-reticle" viewBox="0 0 160 160">
                    {/* Outer Segmented Precision Reticle */}
                    <circle cx="80" cy="80" r="68" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="16 8" opacity="0.45" />
                    <circle cx="80" cy="80" r="48" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.65" />
                    <circle cx="80" cy="80" r="28" fill="none" stroke="currentColor" strokeWidth="1.75" strokeDasharray="6 4" opacity="0.85" />
                    {/* Crosshair Target Ticks */}
                    <line x1="80" y1="6" x2="80" y2="28" stroke="currentColor" strokeWidth="2" opacity="0.75" />
                    <line x1="80" y1="132" x2="80" y2="154" stroke="currentColor" strokeWidth="2" opacity="0.75" />
                    <line x1="6" y1="80" x2="28" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.75" />
                    <line x1="132" y1="80" x2="154" y2="80" stroke="currentColor" strokeWidth="2" opacity="0.75" />
                    <circle cx="80" cy="80" r="5" fill="currentColor" opacity="0.9" />
                  </svg>
                )}

                {stage.shape === 'fluxvell-mark' && (
                  <div className="watermark-fluxvell-combo">
                    <svg className="watermark-svg svg-shield-aura" viewBox="0 0 160 160">
                      {/* Cyber Shield Perimeter Contour */}
                      <path d="M 80 12 L 142 36 C 142 96 112 136 80 152 C 48 136 18 96 18 36 Z" fill="none" stroke="currentColor" strokeWidth="1.75" opacity="0.4" />
                      <path d="M 80 28 L 128 48 C 128 92 104 122 80 136 C 56 122 32 92 32 48 Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.6" />
                    </svg>
                    <div className="watermark-fluxvell-glyph">
                      <img 
                        src="/Fluxvell_logo.png" 
                        alt="" 
                        className="glyph-img"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Header Content */}
              <div className="stage-card-content">
                <div className="stage-header-line">
                  <span className="stage-badge-number">{stage.badge}</span>
                  {idx === 3 && (
                    <span className="fluxvell-recommended-chip">FLUXVELL CORE</span>
                  )}
                </div>

                <h3 className="stage-title">
                  {stage.stepName}:
                </h3>
                
                <p className="stage-desc">
                  {stage.desc}
                </p>

                {/* Deliverables List */}
                <div className="stage-deliverables">
                  {stage.deliverables.map((item, i) => (
                    <div key={i} className="deliverable-item">
                      <span className="deliverable-dash">―</span>
                      <span className="deliverable-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom CTA Bar */}
        <ScrollReveal delay={0.2} className="tprm-journey-bottom-strip">
          <div className="bottom-strip-text">
            <span className="strip-highlight">Ready to advance your TPRM capability?</span>
            <span className="strip-sub">Assess your current maturity and see how Fluxvell automates exploit proof.</span>
          </div>

          <a href="#demo" className="tprm-journey-action-btn">
            <span>Explore Maturity Model</span>
            <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
