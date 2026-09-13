import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './PlatformSection.css';

const WORKFLOW_STAGES = [
  {
    id: '01',
    num: '01',
    title: 'DISCOVER',
    subtitle: 'Map vendors and assets.',
    details: 'Catalogs external APIs, third-party software, SaaS vendors, and cloud perimeter endpoints into an active graph.'
  },
  {
    id: '02',
    num: '02',
    title: 'ASSESS',
    subtitle: 'Apply criticality and context.',
    details: 'Correlates vulnerability findings against business dependency criticality, data sensitivity, and operational impact.'
  },
  {
    id: '03',
    num: '03',
    title: 'VALIDATE',
    subtitle: 'Test authorized attack paths.',
    details: 'Authorized autonomous testing is validating whether the exposure is exploitable.'
  },
  {
    id: '04',
    num: '04',
    title: 'ACT',
    subtitle: 'Remediate, retest, and monitor.',
    details: 'Dispatches targeted fix playbooks directly to asset owners, verifies resolution via automatic retest, and maintains continuous audit.'
  }
];

export const PlatformSection = () => {
  // Active stage default: '03 / VALIDATE'
  const [activeStage, setActiveStage] = useState(2);
  const [hoveredStage, setHoveredStage] = useState(null);
  const [isManual, setIsManual] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % WORKFLOW_STAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isManual]);

  const selectStage = (index) => {
    setActiveStage(index);
    setIsManual(true);
    setTimeout(() => setIsManual(false), 15000);
  };

  const current = WORKFLOW_STAGES[hoveredStage !== null ? hoveredStage : activeStage];

  return (
    <section 
      className="fluxvell-platform-section" 
      ref={sectionRef}
      aria-label="Fluxvell continuous risk control workflow showing discovery, assessment, authorized autonomous validation, remediation, and monitored posture."
    >
      <div className="platform-shell">
        
        {/* Main 2-Column Enterprise Split: ~42% Left / ~58% Right */}
        <div className="platform-split-layout">
          
          {/* LEFT SIDE — Product Message */}
          <ScrollReveal className="platform-content-col">
            <span className="platform-eyebrow-text">CONTINUOUS RISK CONTROL</span>
            
            <h2 className="platform-hero-heading">
              Turn external exposure into a controlled security workflow.
            </h2>
            
            <p className="platform-hero-desc">
              Fluxvell connects third-party risk management with autonomous penetration testing so teams can discover what is connected, validate what is exploitable, and act on the risk that matters.
            </p>

            {/* Product Capability Tags */}
            <div className="platform-tag-group">
              <span className="product-pill">THIRD-PARTY RISK MANAGEMENT</span>
              <span className="product-pill">AUTONOMOUS PENETRATION TESTING</span>
            </div>

            {/* CTA Controls */}
            <div className="platform-action-row">
              <a href="#platform" className="primary-cta-button">
                <span>Explore the platform</span>
                <ArrowRight size={16} className="cta-arrow-icon" />
              </a>
              <a href="#workflow" className="secondary-text-link">
                See how it works.
              </a>
            </div>

            {/* Core Value Assurance Points */}
            <div className="value-bullets">
              <div className="bullet-row">
                <span className="bullet-dot" />
                <span className="bullet-text"><strong>Discover:</strong> Map vendors, partners, cloud services, and assets.</span>
              </div>
              <div className="bullet-row">
                <span className="bullet-dot" />
                <span className="bullet-text"><strong>Validate:</strong> Prove exploitable exposure through authorized testing.</span>
              </div>
              <div className="bullet-row">
                <span className="bullet-dot" />
                <span className="bullet-text"><strong>Remediate:</strong> Actionable prioritization, retesting, and continuous monitoring.</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE — Command-Layer Visualization (~58%) */}
          <ScrollReveal delay={0.15} className="platform-visual-col">
            <div className="command-console-panel">
              
              {/* Console Top Header */}
              <div className="console-header-bar">
                <div className="console-header-left">
                  <span className="console-label-tag">TELEMETRY STAGE</span>
                  <span className="console-title-text">03 / VALIDATION IN PROGRESS</span>
                </div>
                <div className="console-header-right">
                  <span className="status-live-dot" />
                  <span className="status-live-label">DEFENSE LOOP: ACTIVE</span>
                </div>
              </div>

              {/* Console Main Body: Circular Orbital Loop + Integrated Status Card */}
              <div className="console-workspace">
                
                {/* Visual Workflow Stage Orbit */}
                <div className="console-orbit-zone">
                  <div className="orbit-subtle-hint">
                    <span>INGRESS // PERIMETER &amp; VENDORS</span>
                  </div>

                  <svg viewBox="0 0 380 340" className="orbit-svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="activeArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3D78FF" />
                        <stop offset="100%" stopColor="#6FA2FF" />
                      </linearGradient>

                      <radialGradient id="consoleCenterGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(61, 120, 255, 0.15)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>

                      {/* Complete loop motion path */}
                      <path id="workflowLoopPath" d="M 190 60 A 100 100 0 1 1 189.9 60" fill="none" />
                    </defs>

                    {/* Ingress Stream */}
                    <path d="M 40 60 L 170 60" stroke="rgba(61, 120, 255, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                    
                    {/* Egress Stream */}
                    <path d="M 170 260 L 40 260" stroke="rgba(120, 231, 165, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

                    {/* Base Muted Graphite Orbit Path */}
                    <circle cx="190" cy="160" r="100" fill="none" stroke="rgba(164, 192, 235, 0.14)" strokeWidth="1.5" />
                    
                    {/* Active Vector Blue Arc Segment */}
                    <path 
                      d="M 190 60 A 100 100 0 0 1 190 260" 
                      fill="none" 
                      stroke="url(#activeArcGrad)" 
                      strokeWidth="2.5" 
                    />

                    {/* Clockwise Directional Arrow on Active Arc */}
                    <path 
                      d="M 290 160 L 294 152 L 286 152 Z" 
                      fill="#6FA2FF" 
                      transform="rotate(90 290 160)" 
                    />

                    {/* Smooth Animated Signal Packet */}
                    <circle r="3.5" fill="#6FA2FF">
                      <animateMotion dur="4.5s" repeatCount="indefinite">
                        <mpath href="#workflowLoopPath" />
                      </animateMotion>
                    </circle>

                    {/* Center Core HUD */}
                    <circle cx="190" cy="160" r="46" fill="#0C1322" stroke="rgba(164, 192, 235, 0.16)" strokeWidth="1" />
                    <circle cx="190" cy="160" r="44" fill="url(#consoleCenterGlow)" />
                    <text x="190" y="152" textAnchor="middle" className="center-stage-index">
                      {current.num}
                    </text>
                    <text x="190" y="168" textAnchor="middle" className="center-stage-label">
                      {current.title}
                    </text>
                    <text x="190" y="180" textAnchor="middle" className="center-stage-status">
                      {activeStage === 2 ? 'TESTING' : 'READY'}
                    </text>

                    {/* 01 / DISCOVER (Top: x=190, y=60) */}
                    <g 
                      className={`orbit-node-group ${activeStage === 0 ? 'selected' : ''}`}
                      transform="translate(190, 60)"
                      onClick={() => selectStage(0)}
                      onMouseEnter={() => setHoveredStage(0)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      <circle r="16" fill="#0E1626" stroke={activeStage === 0 ? "#3D78FF" : "rgba(164, 192, 235, 0.2)"} strokeWidth="1.5" />
                      <circle r="4" fill={activeStage === 0 ? "#6FA2FF" : "#9CAAC0"} />
                      <text x="0" y="-24" textAnchor="middle" className="orbit-node-title">01 / DISCOVER</text>
                      <text x="0" y="-12" textAnchor="middle" className="orbit-node-sub">Map vendors and assets</text>
                    </g>

                    {/* 02 / ASSESS (Right: x=290, y=160) */}
                    <g 
                      className={`orbit-node-group ${activeStage === 1 ? 'selected' : ''}`}
                      transform="translate(290, 160)"
                      onClick={() => selectStage(1)}
                      onMouseEnter={() => setHoveredStage(1)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      <circle r="16" fill="#0E1626" stroke={activeStage === 1 ? "#3D78FF" : "rgba(164, 192, 235, 0.2)"} strokeWidth="1.5" />
                      <circle r="4" fill={activeStage === 1 ? "#6FA2FF" : "#9CAAC0"} />
                      <text x="24" y="-2" textAnchor="start" className="orbit-node-title">02 / ASSESS</text>
                      <text x="24" y="10" textAnchor="start" className="orbit-node-sub">Apply criticality</text>
                    </g>

                    {/* 03 / VALIDATE (Bottom: x=190, y=260) — Active Stage */}
                    <g 
                      className={`orbit-node-group is-active-stage ${activeStage === 2 ? 'selected' : ''}`}
                      transform="translate(190, 260)"
                      onClick={() => selectStage(2)}
                      onMouseEnter={() => setHoveredStage(2)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      {/* Coral validation ripple pulse */}
                      <circle r="18" fill="none" stroke="#FF7A68" strokeWidth="1" opacity="0.6">
                        <animate attributeName="r" values="18;26;18" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle r="16" fill="#131F33" stroke="#3D78FF" strokeWidth="2" />
                      <circle r="4.5" fill="#FF7A68" />
                      <text x="0" y="28" textAnchor="middle" className="orbit-node-title active-highlight">03 / VALIDATE</text>
                      <text x="0" y="40" textAnchor="middle" className="orbit-node-sub active-sub">Test authorized attack paths</text>
                    </g>

                    {/* 04 / ACT (Left: x=90, y=160) */}
                    <g 
                      className={`orbit-node-group ${activeStage === 3 ? 'selected' : ''}`}
                      transform="translate(90, 160)"
                      onClick={() => selectStage(3)}
                      onMouseEnter={() => setHoveredStage(3)}
                      onMouseLeave={() => setHoveredStage(null)}
                    >
                      <circle r="16" fill="#0E1626" stroke={activeStage === 3 ? "#78E7A5" : "rgba(164, 192, 235, 0.2)"} strokeWidth="1.5" />
                      <circle r="4" fill={activeStage === 3 ? "#78E7A5" : "#9CAAC0"} />
                      <text x="-24" y="-2" textAnchor="end" className="orbit-node-title">04 / ACT</text>
                      <text x="-24" y="10" textAnchor="end" className="orbit-node-sub">Remediate, retest, monitor</text>
                    </g>
                  </svg>
                </div>

                {/* Status Console & Evidence Panel */}
                <div className="console-status-card">
                  <div className="status-card-header">
                    <span className="scope-badge">AUTHORIZED TEST SCOPE // APPROVED ASSETS</span>
                  </div>

                  <p className="active-stage-explainer">
                    {current.details}
                  </p>

                  {/* Progress Indicator */}
                  <div className="scope-progress-block">
                    <div className="progress-labels">
                      <span className="progress-caption">VALIDATION PROGRESS</span>
                      <span className="progress-percent">68%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: '68%' }} />
                    </div>
                  </div>

                  {/* Evidence Verification Rows */}
                  <div className="evidence-list">
                    <div className="evidence-row">
                      <div className="evidence-name-col">
                        <span className="status-dot green" />
                        <span className="evidence-title">ASSET INVENTORY</span>
                      </div>
                      <span className="evidence-state-tag green">MAPPED</span>
                    </div>

                    <div className="evidence-row">
                      <div className="evidence-name-col">
                        <span className="status-dot green" />
                        <span className="evidence-title">RISK CONTEXT</span>
                      </div>
                      <span className="evidence-state-tag green">ASSESSED</span>
                    </div>

                    <div className="evidence-row active-row">
                      <div className="evidence-name-col">
                        <span className="status-dot blue-pulse" />
                        <span className="evidence-title">EXPLOITABILITY</span>
                      </div>
                      <span className="evidence-state-tag blue">VALIDATING</span>
                    </div>

                    <div className="evidence-row">
                      <div className="evidence-name-col">
                        <span className="status-dot blue" />
                        <span className="evidence-title">REMEDIATION</span>
                      </div>
                      <span className="evidence-state-tag blue">READY FOR ACTION</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* BOTTOM SIGNAL RAIL: 4 Connected Checkpoints */}
              <div className="telemetry-signal-rail">
                <div className="rail-checkpoints">
                  <div className="checkpoint-item completed">
                    <span className="checkpoint-dot green" />
                    <div className="checkpoint-info">
                      <span className="checkpoint-label">MAPPED</span>
                      <span className="checkpoint-state">CURRENT</span>
                    </div>
                  </div>

                  <span className="rail-link-line completed" />

                  <div className="checkpoint-item completed">
                    <span className="checkpoint-dot green" />
                    <div className="checkpoint-info">
                      <span className="checkpoint-label">ASSESSED</span>
                      <span className="checkpoint-state">CURRENT</span>
                    </div>
                  </div>

                  <span className="rail-link-line active" />

                  <div className="checkpoint-item active">
                    <span className="checkpoint-dot blue-pulse" />
                    <div className="checkpoint-info">
                      <span className="checkpoint-label">VALIDATED</span>
                      <span className="checkpoint-state">IN PROGRESS</span>
                    </div>
                  </div>

                  <span className="rail-link-line" />

                  <div className="checkpoint-item pending">
                    <span className="checkpoint-dot green" />
                    <div className="checkpoint-info">
                      <span className="checkpoint-label">MONITORED</span>
                      <span className="checkpoint-state">READY</span>
                    </div>
                  </div>
                </div>

                <div className="rail-terminal-state">
                  <span className="rail-status-dot green" />
                  <span className="rail-status-text">DEFENSE LOOP: ACTIVE</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* TPRM AND AUTONOMOUS PENTESTING EXPLANATION PANELS */}
        <ScrollReveal delay={0.3} className="platform-capabilities-block">
          <div className="capabilities-grid">
            
            {/* Panel One: TPRM */}
            <div className="capability-card">
              <span className="cap-label">TPRM</span>
              <h4 className="cap-headline">Know what your business depends on.</h4>
              <p className="cap-body">
                Map vendors, partners, services, and external assets. Keep ownership, criticality, evidence, and material changes in view.
              </p>
            </div>

            {/* Connecting Bridge Caption */}
            <div className="capability-bridge">
              <span className="bridge-pill">Context + proof = better security decisions.</span>
            </div>

            {/* Panel Two: Autonomous Penetration Testing */}
            <div className="capability-card">
              <span className="cap-label">AUTONOMOUS PENETRATION TESTING</span>
              <h4 className="cap-headline">Prove what can actually be reached.</h4>
              <p className="cap-body">
                Validate approved environments and attack paths, prioritize exploitability, and retest remediation with evidence.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
