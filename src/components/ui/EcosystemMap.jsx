import React, { useState } from 'react';
import './EcosystemMap.css';

export function EcosystemMap() {
  const [hoveredNode, setHoveredNode] = useState(null);

  const handleMouseEnter = (nodeId) => {
    setHoveredNode(nodeId);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  const isFaded = (nodeId) => {
    if (!hoveredNode) return false;
    return hoveredNode !== nodeId && hoveredNode !== 'center';
  };

  return (
    <div 
      className="ecosystem-map-container"
      role="img"
      aria-label="Diagram showing Fluxvell monitoring an organization and its connected vendors, cloud services, partners, applications, and internet-facing assets."
    >
      <svg 
        viewBox="0 0 800 600" 
        className="ecosystem-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background contour lines */}
        <g className="contour-lines" stroke="rgba(168, 181, 204, 0.05)" strokeWidth="1" fill="none">
          <circle cx="400" cy="300" r="100" />
          <circle cx="400" cy="300" r="180" />
          <circle cx="400" cy="300" r="260" />
          <circle cx="400" cy="300" r="340" />
        </g>

        {/* Coordinate markers */}
        <g className="coordinate-markers" fill="rgba(168, 181, 204, 0.3)" fontFamily="IBM Plex Mono" fontSize="10">
          <text x="390" y="30">N 45°</text>
          <text x="390" y="580">S 45°</text>
          <text x="30" y="295">W 90°</text>
          <text x="740" y="295">E 90°</text>
        </g>

        {/* Connection Paths */}
        {/* Vendors (Top Left) */}
        <path d="M 400 300 L 200 150" className={`connection-path blue-path ${isFaded('vendors') ? 'faded' : ''}`} />
        {/* Cloud (Top Right) */}
        <path d="M 400 300 L 600 150" className={`connection-path blue-path ${isFaded('cloud') ? 'faded' : ''}`} />
        {/* Applications (Bottom Left) */}
        <path d="M 400 300 L 250 450" className={`connection-path blue-path ${isFaded('apps') ? 'faded' : ''}`} />
        {/* Internet Facing Assets (Right) */}
        <path d="M 400 300 L 650 350" className={`connection-path blue-path ${isFaded('assets') ? 'faded' : ''}`} />
        
        {/* Partners (Bottom Right) - The Coral Path */}
        <path d="M 400 300 L 550 480" className={`connection-path coral-path ${isFaded('partners') ? 'faded' : ''}`} />

        {/* Animated Signals on Paths */}
        <circle cx="0" cy="0" r="3" className={`signal-dot ${isFaded('vendors') ? 'faded' : ''}`} fill="#2F6BFF">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 400 300 L 200 150" />
        </circle>
        <circle cx="0" cy="0" r="3" className={`signal-dot ${isFaded('cloud') ? 'faded' : ''}`} fill="#2F6BFF">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 400 300 L 600 150" />
        </circle>
        <circle cx="0" cy="0" r="3" className={`signal-dot ${isFaded('apps') ? 'faded' : ''}`} fill="#2F6BFF">
          <animateMotion dur="4.5s" repeatCount="indefinite" path="M 400 300 L 250 450" />
        </circle>
        <circle cx="0" cy="0" r="3" className={`signal-dot ${isFaded('assets') ? 'faded' : ''}`} fill="#2F6BFF">
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M 400 300 L 650 350" />
        </circle>
        
        <circle cx="0" cy="0" r="4" className={`signal-dot coral-signal ${isFaded('partners') ? 'faded' : ''}`} fill="#FF7A68">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 550 480 L 400 300" />
        </circle>

        {/* Coral Path Label */}
        <g className={`coral-label-group ${isFaded('partners') ? 'faded' : ''}`} transform="translate(480, 390)">
          <rect x="-6" y="-12" width="165" height="18" rx="4" fill="rgba(255, 122, 104, 0.15)" stroke="#FF7A68" strokeWidth="1" className="pulse-border" />
          <text x="2" y="0" fill="#FF7A68" fontFamily="IBM Plex Mono" fontSize="10" fontWeight="500">MATERIAL CHANGE DETECTED</text>
        </g>

        {/* Validation Capsule near center */}
        <g className="validation-capsule" transform="translate(415, 340)">
          <rect x="0" y="0" width="115" height="20" rx="10" fill="rgba(17, 27, 49, 0.8)" stroke="#FF7A68" strokeWidth="1" />
          <circle cx="10" cy="10" r="3" fill="#FF7A68" />
          <text x="20" y="14" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="9">NEEDS VALIDATION</text>
        </g>

        {/* Nodes */}
        {/* Vendors Node */}
        <g className={`map-node ${hoveredNode === 'vendors' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('vendors')} onMouseLeave={handleMouseLeave} transform="translate(200, 150)">
          <circle cx="0" cy="0" r="8" fill="#111B31" stroke="#2F6BFF" strokeWidth="2" />
          <rect x="-65" y="15" width="130" height="24" rx="4" fill="#080B12" stroke="rgba(168, 181, 204, 0.2)" />
          <text x="0" y="31" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">VENDOR ECOSYSTEM</text>
          
          <g className="hover-details" opacity="0">
            <rect x="-50" y="-35" width="100" height="20" rx="4" fill="rgba(47, 107, 255, 0.2)" />
            <text x="0" y="-22" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">740 Entities</text>
          </g>
        </g>

        {/* Cloud Services Node */}
        <g className={`map-node ${hoveredNode === 'cloud' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('cloud')} onMouseLeave={handleMouseLeave} transform="translate(600, 150)">
          <circle cx="0" cy="0" r="8" fill="#111B31" stroke="#2F6BFF" strokeWidth="2" />
          <rect x="-55" y="15" width="110" height="24" rx="4" fill="#080B12" stroke="rgba(168, 181, 204, 0.2)" />
          <text x="0" y="31" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">CLOUD SERVICES</text>
          
          <g className="hover-details" opacity="0">
            <rect x="-40" y="-35" width="80" height="20" rx="4" fill="rgba(47, 107, 255, 0.2)" />
            <text x="0" y="-22" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">12 Tenants</text>
          </g>
        </g>

        {/* Applications Node */}
        <g className={`map-node ${hoveredNode === 'apps' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('apps')} onMouseLeave={handleMouseLeave} transform="translate(250, 450)">
          <circle cx="0" cy="0" r="8" fill="#111B31" stroke="#2F6BFF" strokeWidth="2" />
          <rect x="-45" y="15" width="90" height="24" rx="4" fill="#080B12" stroke="rgba(168, 181, 204, 0.2)" />
          <text x="0" y="31" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">APPLICATIONS</text>
          
          <g className="hover-details" opacity="0">
            <rect x="-40" y="-35" width="80" height="20" rx="4" fill="rgba(47, 107, 255, 0.2)" />
            <text x="0" y="-22" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">180 Apps</text>
          </g>
        </g>

        {/* Internet Facing Assets Node */}
        <g className={`map-node ${hoveredNode === 'assets' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('assets')} onMouseLeave={handleMouseLeave} transform="translate(650, 350)">
          <circle cx="0" cy="0" r="8" fill="#111B31" stroke="#2F6BFF" strokeWidth="2" />
          <rect x="-80" y="15" width="160" height="24" rx="4" fill="#080B12" stroke="rgba(168, 181, 204, 0.2)" />
          <text x="0" y="31" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">INTERNET-FACING ASSETS</text>
          
          <g className="hover-details" opacity="0">
            <rect x="-45" y="-35" width="90" height="20" rx="4" fill="rgba(47, 107, 255, 0.2)" />
            <text x="0" y="-22" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">4,205 IPs</text>
          </g>
        </g>

        {/* Partners & Contractors Node (Coral) */}
        <g className={`map-node coral-node ${hoveredNode === 'partners' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('partners')} onMouseLeave={handleMouseLeave} transform="translate(550, 480)">
          <circle cx="0" cy="0" r="10" fill="#111B31" stroke="#FF7A68" strokeWidth="2" />
          <rect x="-80" y="15" width="160" height="24" rx="4" fill="#080B12" stroke="rgba(255, 122, 104, 0.4)" />
          <text x="0" y="31" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="10" textAnchor="middle">PARTNERS & CONTRACTORS</text>
          
          <g className="hover-details" opacity="0">
            <rect x="-55" y="-35" width="110" height="20" rx="4" fill="rgba(255, 122, 104, 0.2)" />
            <text x="0" y="-22" fill="#FF7A68" fontFamily="IBM Plex Mono" fontSize="9" textAnchor="middle">Risk Increased</text>
          </g>
        </g>

        {/* Central Organization Node */}
        <g className={`map-node center-node ${hoveredNode === 'center' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('center')} onMouseLeave={handleMouseLeave} transform="translate(400, 300)">
          <circle cx="0" cy="0" r="24" fill="#2F6BFF" opacity="0.15" className="pulse-bg" />
          <circle cx="0" cy="0" r="14" fill="#111B31" stroke="#EAF0FF" strokeWidth="2" />
          <rect x="-70" y="25" width="140" height="26" rx="4" fill="#080B12" stroke="#2F6BFF" strokeWidth="1" />
          <text x="0" y="42" fill="#EAF0FF" fontFamily="IBM Plex Mono" fontSize="11" fontWeight="600" textAnchor="middle">YOUR ORGANIZATION</text>
        </g>

      </svg>
    </div>
  );
}
