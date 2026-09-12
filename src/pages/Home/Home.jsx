import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Globe } from '../../components/ui/CobeGlobe';
import { RiskProblem } from './RiskProblem';
import { RealData } from './RealData';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './Home.css';

const markers = [
  { id: "sf", location: [37.7595, -122.4367], label: "San Francisco" },
  { id: "nyc", location: [40.7128, -74.006], label: "New York" },
  { id: "tokyo", location: [35.6762, 139.6503], label: "Tokyo" },
  { id: "london", location: [51.5074, -0.1278], label: "London" },
  { id: "sydney", location: [-33.8688, 151.2093], label: "Sydney" },
  { id: "saopaulo", location: [-23.5505, -46.6333], label: "São Paulo" },
];

const arcs = [
  { id: "sf-tokyo", from: [37.7595, -122.4367], to: [35.6762, 139.6503], label: "SF → Tokyo" },
  { id: "nyc-london", from: [40.7128, -74.006], to: [51.5074, -0.1278], label: "NYC → London" },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <section className="home-hero">
        <ScrollReveal className="home-hero-content" delay={0.1}>
          <h1 className="home-hero-title">Security beyond<br/>your perimeter.</h1>
          <p className="home-hero-subtitle">
            Continuously monitor third-party exposure and automate penetration testing to identify vulnerabilities before they become threats.
          </p>
          <div className="home-hero-ctas">
            <button className="home-btn-primary">
              Request a demo <ArrowRight size={18} />
            </button>
            <button className="home-btn-secondary">Explore the platform</button>
          </div>
        </ScrollReveal>

        <div className="home-hero-globe">
          <ScrollReveal delay={0.3} direction="up" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Globe
              markers={markers}
              arcs={arcs}
              markerColor={[1, 0.4, 0]}
              baseColor={[1, 1, 1]}
              arcColor={[1, 0.4, 0]}
              glowColor={[1, 1, 1]}
              dark={0}
              mapBrightness={10}
              markerSize={0.035}
              markerElevation={0.015}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Premium Sections */}
      <RiskProblem />
      <RealData />

    </div>
  );
}
