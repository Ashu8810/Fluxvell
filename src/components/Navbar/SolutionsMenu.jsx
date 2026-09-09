import React from 'react';
import { Link } from 'react-router-dom';

export function SolutionsMenu() {
  return (
    <div className="mega-menu">
      <div className="mega-menu-inner" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="mega-menu-section">
          <ul>
            <li>
              <Link to="/solutions/vendor-risk-management">
                <strong>Vendor Risk Management</strong>
                <span>Manage vendor risks with AI-powered assessments</span>
              </Link>
            </li>
            <li>
              <Link to="/solutions/external-attack-surface-management">
                <strong>External Attack Surface Management</strong>
                <span>Discover and monitor your external exposures</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <ul>
            <li>
              <Link to="/solutions/threat-intelligence">
                <strong>Threat Intelligence</strong>
                <span>Real-time threat detection and insights</span>
              </Link>
            </li>
            <li>
              <Link to="/solutions/vulnerability-management">
                <strong>Vulnerability Management</strong>
                <span>Identify and prioritize vulnerabilities</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <ul>
            <li>
              <Link to="/solutions/executive-monitoring">
                <strong>Executive Monitoring</strong>
                <span>Executive-ready reports and dashboards</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
