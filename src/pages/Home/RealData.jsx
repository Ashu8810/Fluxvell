import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './RealData.css';

export function RealData() {
  return (
    <section className="real-data-section">
      <div className="real-data-container">
        <ScrollReveal delay={0.1}>
          <h2 className="real-data-heading">
            A point-in-time view cannot keep up with a moving attack surface.
          </h2>
          <p className="real-data-body">
            Organizations depend on more suppliers, services, and connected assets than they can assess manually. At the same time, vulnerabilities are discovered, access paths change, and third-party relationships evolve. Continuous monitoring and evidence-backed validation help security teams see what changed, understand what matters, and act before exposure becomes impact.
          </p>
        </ScrollReveal>

        <div className="real-data-cards">
          <ScrollReveal className="real-data-card card-blue" delay={0.1}>
            <div className="real-data-metric">30%</div>
            <h3 className="real-data-card-headline">Third-party involvement doubled</h3>
            <p className="real-data-card-explanation">
              In Verizon’s 2025 DBIR dataset, the percentage of breaches involving a third party increased from 15% to 30%.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </ScrollReveal>

          <ScrollReveal className="real-data-card card-muted" delay={0.2}>
            <div className="real-data-metric">20%</div>
            <h3 className="real-data-card-headline">Vulnerability exploitation reached 20%</h3>
            <p className="real-data-card-explanation">
              Exploitation of vulnerabilities accounted for 20% of initial access vectors in the 2025 DBIR dataset, up 34% from the previous report.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </ScrollReveal>

          <ScrollReveal className="real-data-card card-coral" delay={0.3}>
            <div className="real-data-metric">32 days</div>
            <h3 className="real-data-card-headline">Remediation still takes time</h3>
            <p className="real-data-card-explanation">
              In the 2025 DBIR analysis, affected edge-device and VPN vulnerabilities took a median of 32 days to fully remediate.
            </p>
            <span className="real-data-source">Verizon 2025 DBIR, Executive Summary</span>
          </ScrollReveal>
        </div>

        <ScrollReveal className="real-data-footer" delay={0.4}>
          <p className="real-data-footnote">
            Statistics shown are from Verizon’s 2025 Data Breach Investigations Report and describe its analyzed dataset; they are not Fluxvell performance claims.
          </p>
          <a href="#workflow" onClick={(e) => e.preventDefault()} className="real-data-cta">
            See how Fluxvell turns risk signals into action <ArrowRight size={18} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
