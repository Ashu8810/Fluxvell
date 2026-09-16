import React, { useEffect, useRef, useState } from 'react';
import { 
  Shield, Users, Radar, Globe, ShieldAlert, Activity, 
  Building2, ActivitySquare, Eye, BadgeCheck, AppWindow, 
  Zap, Cpu, Target, Network, Key 
} from 'lucide-react';
import './AnimatedNetwork.css';

// Pre-defined nodes arranged in an elegant rectangular grid around the center hub
const outerNodes = [
  { id: 'n1', icon: <Users size={18} />, label: "Vendor Risk", desc: "AI-powered assessments", x: 150, y: 90, pos: 'top' },
  { id: 'n2', icon: <Globe size={18} />, label: "EASM", desc: "Discover external exposures", x: 325, y: 90, pos: 'top' },
  { id: 'n3', icon: <Activity size={18} />, label: "Exec Monitor", desc: "Executive dashboards", x: 500, y: 90, pos: 'top' },
  { id: 'n4', icon: <Radar size={18} />, label: "Threat Intel", desc: "Real-time threat detection", x: 675, y: 90, pos: 'top' },
  { id: 'n5', icon: <ShieldAlert size={18} />, label: "Vuln Mgmt", desc: "Prioritize vulnerabilities", x: 850, y: 90, pos: 'top' },
  { id: 'n6', icon: <Building2 size={18} />, label: "Brand Rep", desc: "Protect from digital threats", x: 850, y: 220, pos: 'right' },
  { id: 'n7', icon: <ActivitySquare size={18} />, label: "Op Risk", desc: "Monitor resilience", x: 850, y: 340, pos: 'right' },
  { id: 'n8', icon: <Eye size={18} />, label: "Dark Web", desc: "Underground threats", x: 850, y: 460, pos: 'right' },
  { id: 'n9', icon: <BadgeCheck size={18} />, label: "Cyber Ins", desc: "Data-driven insights", x: 850, y: 590, pos: 'bottom' },
  { id: 'n10', icon: <AppWindow size={18} />, label: "Web App", desc: "App vulnerabilities", x: 675, y: 590, pos: 'bottom' },
  { id: 'n11', icon: <Zap size={18} />, label: "API", desc: "Secure modern APIs", x: 500, y: 590, pos: 'bottom' },
  { id: 'n12', icon: <Cpu size={18} />, label: "MCP", desc: "Continuous MCP validation", x: 325, y: 590, pos: 'bottom' },
  { id: 'n13', icon: <Target size={18} />, label: "AI vs AI", desc: "Defend AI attacks", x: 150, y: 590, pos: 'bottom' },
  { id: 'n14', icon: <Network size={18} />, label: "Network", desc: "Infrastructure weaknesses", x: 150, y: 460, pos: 'left' },
  { id: 'n15', icon: <Key size={18} />, label: "External", desc: "External exposures", x: 150, y: 340, pos: 'left' },
  { id: 'n16', icon: <Shield size={18} />, label: "Continuous", desc: "24/7 security testing", x: 150, y: 220, pos: 'left' },
];

export function AnimatedNetwork() {
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [ambientLines, setAmbientLines] = useState([]);

  // Base center point for the main logo / hub
  const logoX = 500;
  const logoY = 340;

  useEffect(() => {
    const generatePaths = () => {
      const getPathForNode = (nodeX, nodeY, pos) => {
        if (pos === 'top') {
          return `M ${nodeX} ${nodeY} C ${nodeX} 220, ${logoX} 220, ${logoX} ${logoY}`;
        } else if (pos === 'bottom') {
          return `M ${nodeX} ${nodeY} C ${nodeX} 460, ${logoX} 460, ${logoX} ${logoY}`;
        } else if (pos === 'left') {
          return `M ${nodeX} ${nodeY} C 300 ${nodeY}, 300 ${logoY}, ${logoX} ${logoY}`;
        } else { // right
          return `M ${nodeX} ${nodeY} C 700 ${nodeY}, 700 ${logoY}, ${logoX} ${logoY}`;
        }
      };

      const paths = outerNodes.map((node, index) => {
        const pathD = getPathForNode(node.x, node.y, node.pos);
        return {
          id: `path-${index}`,
          d: pathD,
          delay: index * 0.2
        };
      });
      setLines(paths);

      // Generate ambient background lines that shoot out along curves
      const ambient = [];
      const numAmbient = 16;
      for(let i=0; i<numAmbient; i++) {
        const node = outerNodes[i];
        // Ambient lines follow exactly the same paths as the main nodes
        ambient.push({
          id: `ambient-${i}`,
          d: getPathForNode(node.x, node.y, node.pos),
          endX: node.x,
          endY: node.y,
          delay: i * 0.15
        });
      }
      setAmbientLines(ambient);
    };

    generatePaths();
  }, []);

  return (
    <div className="animated-network-container" ref={containerRef}>
      {/* SVG layer for connecting lines */}
      <svg className="network-svg" width="100%" height="100%" viewBox="0 0 1000 680" preserveAspectRatio="none">
        {/* Gradients */}
        <defs>
          <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" x1="500" y1="340" x2="0" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="ambient-gradient" gradientUnits="userSpaceOnUse" x1="500" y1="340" x2="1000" y2="680">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </linearGradient>
          
          {/* Subtle glow filter for the dots */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Render Ambient Background Lines */}
        {ambientLines && ambientLines.map((line) => (
          <g key={line.id}>
            <path
              d={line.d}
              fill="none"
              stroke="url(#ambient-gradient)"
              strokeWidth="1"
              className="network-path-ambient"
            />
            {/* Glowing terminator dot at the end of the ambient line */}
            <circle 
              cx={line.endX} 
              cy={line.endY} 
              r="2.5" 
              fill="#60A5FA" 
              filter="url(#glow)"
              opacity="0.6"
            />
          </g>
        ))}

        {/* Render Primary Node Lines */}
        {lines.map((line) => (
          <g key={line.id}>
            {/* Background path (permanently lit so the line never disappears) */}
            <path
              d={line.d}
              fill="none"
              stroke="#3B82F6"
              strokeOpacity="0.15"
              strokeWidth="1.5"
              className="network-path-bg"
            />
            {/* Animated beam path (thinner) */}
            <path
              d={line.d}
              fill="none"
              stroke="#60A5FA"
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
              strokeWidth="5"
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
        style={{ left: `${(logoX / 1000) * 100}%`, top: `${(logoY / 680) * 100}%`, transform: 'translate(-50%, -50%)' }}
      >
        <div className="network-node-inner center-inner" style={{ background: '#ffffff', border: '1px solid rgba(59, 130, 246, 0.3)', boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}>
          <img src="/Fluxvell_logo.png" alt="Fluxvell" style={{ width: '80px', height: 'auto', display: 'block' }} />
        </div>
      </div>

      {/* Outer Nodes */}
      {outerNodes.map((node) => {
        const posX = `calc(50% + ${node.x - 500}px - 28px)`;
        const posY = `calc(50% + ${node.y - 340}px - 28px)`;

        return (
          <div
            key={node.id}
            className="network-node network-node-outer"
            style={{ left: posX, top: posY }}
          >
            <div className="network-node-inner">
              {node.icon}
            </div>
            <div className={`network-node-label pos-${node.pos}`}>
              <div className="network-node-title">{node.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
