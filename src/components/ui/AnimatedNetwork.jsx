import React, { useEffect, useRef, useState } from 'react';
import { Shield, Users, Radar, Globe, ShieldAlert, Activity } from 'lucide-react';
import './AnimatedNetwork.css';

// Pre-defined nodes with organic, scattered layout below the logo
const outerNodes = [
  { id: 'n1', icon: <Users size={24} />, label: "Vendor Risk Management", desc: "Manage vendor risks with AI-powered assessments", x: 200, y: 350 },
  { id: 'n2', icon: <Globe size={24} />, label: "External Attack Surface Management", desc: "Discover and monitor your external exposures", x: 380, y: 480 },
  { id: 'n3', icon: <Activity size={24} />, label: "Executive Monitoring", desc: "Executive-ready reports and dashboards", x: 500, y: 300 },
  { id: 'n4', icon: <Radar size={24} />, label: "Threat Intelligence", desc: "Real-time threat detection and insights", x: 650, y: 450 },
  { id: 'n5', icon: <ShieldAlert size={24} />, label: "Vulnerability Management", desc: "Identify and prioritize vulnerabilities", x: 800, y: 350 },
];

export function AnimatedNetwork() {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);

  // Logo position top center
  const logoX = 500;
  const logoY = 100;

  useEffect(() => {
    // Generate curved paths from scattered nodes up to the top logo
    const generatePaths = () => {
      const paths = outerNodes.map((node, index) => {
        const nodeX = node.x;
        const nodeY = node.y;
        
        // Flowing vertical bezier curve
        const pathD = `M ${nodeX} ${nodeY} C ${nodeX} ${nodeY - (nodeY - logoY) * 0.6}, ${logoX} ${logoY + (nodeY - logoY) * 0.6}, ${logoX} ${logoY}`;
        
        return {
          id: `path-${index}`,
          d: pathD,
          delay: index * 0.6 // Stagger animations elegantly
        };
      });
      setLines(paths);
    };

    generatePaths();
  }, []);

  return (
    <div className="animated-network-container" ref={containerRef}>
      {/* SVG layer for connecting lines */}
      <svg className="network-svg" width="1000" height="600" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        {/* Gradients */}
        <defs>
          <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="0" y1="500" x2="0" y2="100">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {lines.map((line) => (
          <g key={line.id}>
            {/* Background path (permanently lit so the line never disappears) */}
            <path
              d={line.d}
              fill="none"
              stroke="url(#beam-gradient)"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              className="network-path-bg"
              style={{
                filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.4))'
              }}
            />
            {/* Animated beam path (thinner) */}
            <path
              d={line.d}
              fill="none"
              stroke="url(#beam-gradient)"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="network-path-beam"
              pathLength="1000"
              style={{
                animationDelay: `${line.delay}s`
              }}
            />
            {/* Star following the head of the beam */}
            <path
              d={line.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              className="network-path-star"
              pathLength="1000"
              style={{
                animationDelay: `${line.delay}s`
              }}
            />
          </g>
        ))}
      </svg>

      {/* Center Node (Logo) */}
      <div 
        className="network-node network-node-center" 
        style={{ left: `calc(50% + ${logoX - 500}px - 40px)`, top: `calc(50% + ${logoY - 300}px - 40px)` }}
      >
        <div className="network-node-inner center-inner">
          <img src="/Fluxvell_logo.png" alt="Fluxvell" style={{ width: '80px', height: 'auto', display: 'block' }} />
        </div>
      </div>

      {/* Outer Nodes */}
      {outerNodes.map((node) => {
        const posX = `calc(50% + ${node.x - 500}px - 28px)`;
        const posY = `calc(50% + ${node.y - 300}px - 28px)`;

        return (
          <div 
            key={node.id} 
            className="network-node network-node-outer"
            style={{ left: posX, top: posY }}
          >
            <div className="network-node-inner">
              {node.icon}
            </div>
            <div className="network-node-label">
              <div className="network-node-title">{node.label}</div>
              <div className="network-node-desc">{node.desc}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
