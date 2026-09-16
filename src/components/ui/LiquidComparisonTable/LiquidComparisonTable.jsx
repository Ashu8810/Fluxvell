import React, { useEffect, useRef } from 'react';
import './LiquidComparisonTable.css';

const LiquidComparisonTable = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.liquid-row, .liquid-header');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const data = [
    {
      legacy: {
        title: "Static questionnaire checklists",
        desc: "Relies on self-reported compliance surveys that reflect last year's setup."
      },
      fluxvell: {
        title: "Real-time surface intelligence",
        desc: "Continuously maps your live supply-chain perimeter, active APIs, and third-party dependencies."
      }
    },
    {
      legacy: {
        title: "Subjective risk estimates",
        desc: "Assigns speculative threat ratings based on paper assessments and assumptions."
      },
      fluxvell: {
        title: "Empirical exploit proof",
        desc: "Safely conducts authorized tests to confirm if external weaknesses can actually be compromised."
      }
    },
    {
      legacy: {
        title: "Overwhelming vulnerability logs",
        desc: "Drowns security teams in thousands of unverified alerts with zero context on exploitability."
      },
      fluxvell: {
        title: "Prioritized attack paths",
        desc: "Filters out the noise to surface the exact critical vectors that threat actors could leverage."
      }
    },
    {
      legacy: {
        title: "Siloed ownership & lingering flaws",
        desc: "Findings linger indefinitely across fragmented teams without verifiable deadlines or proof."
      },
      fluxvell: {
        title: "Guided closure & verified retests",
        desc: "Routes remediation directly to accountable teams and automatically retests once resolved."
      }
    },
    {
      legacy: {
        title: "Periodic point-in-time reviews",
        desc: "Leaves defenses blind as soon as a supplier modifies infrastructure days later."
      },
      fluxvell: {
        title: "Adaptive continuous governance",
        desc: "Maintains an active, evolving resilience baseline across all partner ecosystems 24/7."
      }
    }
  ];

  return (
    <div className="liquid-comparison-wrapper">
      <div className="liquid-comparison-container" ref={containerRef}>
        
        {/* Header Row */}
        <div className="liquid-comparison-header">
          <div className="liquid-header legacy-header">
            <div className="header-content">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="header-icon">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>LEGACY RISK REVIEWS</span>
            </div>
            <div className="liquid-glow"></div>
          </div>
          
          <div className="liquid-header fluxvell-header">
            <div className="header-content fluxvell-brand">
              <span className="fluxvell-logo-text">FLUXVELL</span>
              <span className="fluxvell-badge">CONTINUOUS ASSURANCE</span>
            </div>
            <div className="corner-accent top-left"></div>
            <div className="corner-accent bottom-left"></div>
            <div className="liquid-glow"></div>
          </div>
        </div>

        {/* Content Rows */}
        <div className="liquid-comparison-body">
          {data.map((item, index) => (
            <div className="liquid-row-container" key={index}>
              <div className="liquid-row legacy-row">
                <div className="row-content">
                  <h3>{item.legacy.title}</h3>
                  <p>{item.legacy.desc}</p>
                </div>
                <div className="liquid-glow"></div>
              </div>
              
              <div className="liquid-row fluxvell-row">
                <div className="row-content">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff3b3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <div className="text-content">
                    <h3>{item.fluxvell.title}</h3>
                    <p>{item.fluxvell.desc}</p>
                  </div>
                </div>
                <div className="liquid-glow"></div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LiquidComparisonTable;
