import React from 'react';
import { ArrowRight } from 'lucide-react';
import './RealData.css';

export function RealData() {
  return (
    <section className="real-data-section">
      <div className="real-data-container">
        <h2 className="real-data-heading">
          A point-in-time view cannot keep up with a moving attack surface.
        </h2>
        <p className="real-data-body">
          Organizations depend on more suppliers, services, and connected assets than they can assess manually. At the same time, vulnerabilities are discovered, access paths change, and third-party relationships evolve. Continuous monitoring and evidence-backed validation help security teams see what changed, understand what matters, and act before exposure becomes impact.
        </p>

        <div className="real-data-cards">
          <div className="real-data-card card-blue">
            <div className="real-data-metric">30%</div>
            <h3 className="real-data-card-headline">Third-party involvement doubled</h3>
            <p className="real-data-card-explanation">
              In Verizon’s 2025 DBIR dataset, the percentage of breaches involving a third party increased from 15% to 30%.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </div>

          <div className="real-data-card card-muted">
            <div className="real-data-metric">20%</div>
            <h3 className="real-data-card-headline">Vulnerability exploitation reached 20%</h3>
            <p className="real-data-card-explanation">
              Exploitation of vulnerabilities accounted for 20% of initial access vectors in the 2025 DBIR dataset, up 34% from the previous report.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </div>

          <div className="real-data-card card-coral">
            <div className="real-data-metric">32 days</div>
            <h3 className="real-data-card-headline">Remediation still takes time</h3>
            <p className="real-data-card-explanation">
              In the 2025 DBIR analysis, affected edge-device and VPN vulnerabilities took a median of 32 days to fully remediate.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </div>
        </div>

        <div className="real-data-footer">
          <p className="real-data-footnote">
            Statistics shown are from Verizon’s 2025 Data Breach Investigations Report and describe its analyzed dataset; they are not Fluxvell performance claims.
          </p>
          <a href="#workflow" className="real-data-cta">
            See how Fluxvell turns risk signals into action <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
