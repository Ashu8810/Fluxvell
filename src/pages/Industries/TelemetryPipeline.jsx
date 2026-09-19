import React, { useState } from 'react';
import { ArrowRight, Activity, ShieldCheck, Search, Globe, FileText, BarChart } from 'lucide-react';
import './Industries.css';

const STAGES = [
  {
    num: '01',
    title: 'Cloud Assets',
    sub: 'AWS / GCP / K8s',
    metric: '342 nodes monitored · 0 drift',
    desc: 'Autonomous discovery of IP ranges, DNS entries, and cloud workloads from an external attacker perspective.',
    icon: Activity
  },
  {
    num: '02',
    title: 'APIs',
    sub: 'REST / GraphQL',
    metric: '1,204 endpoints · 2 unauthenticated',
    desc: 'Continuous mapping of shadow APIs, stale endpoints, and exposed data structures.',
    icon: Globe
  },
  {
    num: '03',
    title: 'Applications',
    sub: 'Web & Microservices',
    metric: '56 web apps · 99.9% uptime',
    desc: 'Deep security testing of web applications, single-page apps, and microservice interconnects.',
    icon: Search
  },
  {
    num: '04',
    title: 'External Services',
    sub: 'CDN / DNS / Mail',
    metric: '12 services · Secure configurations',
    desc: 'Monitoring edge infrastructure including CDN misconfigurations, DNS zone transfers, and email spoofing risks.',
    icon: ShieldCheck
  },
  {
    num: '05',
    title: 'Vendors',
    sub: 'Supply Chain SBOM',
    metric: '43 vendors · 1 critical CVE',
    desc: 'Automated third-party risk management and software bill of materials analysis.',
    icon: FileText
  },
  {
    num: '06',
    title: 'Executive Reporting',
    sub: 'CISO / Board PDF',
    metric: 'Real-time compliance mapping',
    desc: 'Generate executive-ready reports and dashboards for regulatory compliance and stakeholder communication.',
    icon: BarChart
  }
];

const TelemetryPipeline = () => {
  const [activeStage, setActiveStage] = useState(0);

  const activeData = STAGES[activeStage];
  const ActiveIcon = activeData.icon;

  return (
    <div className="telemetry-pipeline-wrapper">
      <div className="telemetry-pipeline-track">
        {STAGES.map((stage, index) => (
          <React.Fragment key={stage.num}>
            <div 
              className={`telemetry-stage-card ${activeStage === index ? 'active' : ''}`}
              onClick={() => setActiveStage(index)}
            >
              <div className="stage-num">{stage.num}</div>
              <div className="stage-title">{stage.title}</div>
              <div className="stage-sub">{stage.sub}</div>
            </div>
            {index < STAGES.length - 1 && (
              <ArrowRight className="telemetry-arrow" size={16} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="telemetry-active-details">
        <div className="details-left">
          <span className="details-badge">STAGE {activeData.num}</span>
          <span className="details-title">{activeData.title}</span>
        </div>
        <div className="details-right">
          <ActiveIcon size={16} color="#38bdf8" />
          <span>{activeData.metric}</span>
        </div>
        <div className="details-desc">
          {activeData.desc}
        </div>
      </div>
    </div>
  );
};

export default TelemetryPipeline;
