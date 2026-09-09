import React from 'react';

export function IndustriesMenu() {
  return (
    <div className="mega-menu" style={{ left: '50%', transform: 'translateX(-60%)', width: '850px' }}>
      <div className="mega-menu-inner" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        <div className="mega-menu-section">
          <ul>
            <li>
              <a href="/industries/technology">
                <strong>Technology</strong>
                <span>Real-time visibility into external threats and exposures</span>
              </a>
            </li>
            <li>
              <a href="/industries/finance">
                <strong>Finance</strong>
                <span>Protect critical financial infrastructure from evolving threats</span>
              </a>
            </li>
            <li>
              <a href="/industries/retail">
                <strong>Retail</strong>
                <span>Monitor retail risks across domains, apps, and vendors</span>
              </a>
            </li>
            <li>
              <a href="/industries/telecom">
                <strong>Telecom</strong>
                <span>Monitor and protect critical telecom attack surfaces</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <ul>
            <li>
              <a href="/industries/energy">
                <strong>Energy</strong>
                <span>Protect critical energy infrastructure from external threats</span>
              </a>
            </li>
            <li>
              <a href="/industries/healthcare">
                <strong>Healthcare</strong>
                <span>Continuous visibility into healthcare external attack surfaces</span>
              </a>
            </li>
            <li>
              <a href="/industries/education">
                <strong>Education</strong>
                <span>Secure education ecosystems from leaks, phishing, and risks</span>
              </a>
            </li>
            <li>
              <a href="/industries/critical-infrastructure">
                <strong>Critical Infrastructure</strong>
                <span>Detect threats across infrastructure, vendors, and access points</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <ul>
            <li>
              <a href="/industries/automotive">
                <strong>Automotive</strong>
                <span>AI-driven visibility into automotive external attack surfaces</span>
              </a>
            </li>
            <li>
              <a href="/industries/legal">
                <strong>Legal</strong>
                <span>Continuous monitoring for leaks, threats, and abuse</span>
              </a>
            </li>
            <li>
              <a href="/industries/hospitality">
                <strong>Hospitality</strong>
                <span>Comprehensive hospitality risk protection</span>
              </a>
            </li>
            <li>
              <a href="/industries/media-entertainment">
                <strong>Media & Entertainment</strong>
                <span>Protect media and entertainment from digital threats and piracy</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
