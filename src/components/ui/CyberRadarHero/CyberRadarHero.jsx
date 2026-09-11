import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2,
  ServerCrash,
  FileSearch,
  BadgeCheck,
  Globe, 
  User, 
  Box, 
  FileText, 
  Cloud, 
  Code,
  ShieldCheck,
  Zap, 
  ArrowRight, 
  ArrowUpRight,
  ArrowDown 
} from 'lucide-react';
import './CyberRadarHero.css';

// Default 4 TPRM pillars orbiting in Blue Cyber Theme with Professional HUD Pin Placement
const DEFAULT_PLANETS = [
  {
    id: 'brand-reputation',
    title: 'BRM',
    subtitle: 'Brand Reputation Management',
    severity: null,
    severityType: 'cyan',
    color: '#00f2fe',
    icon: Building2,
    radius: 120,
    speed: 52,
    startAngle: 45,
    hudDir: 'up-right',
    targetX: 24,
    targetY: -16,
    leaderPath: 'M 0 0 L 24 -16'
  },
  {
    id: 'operational-risk',
    title: 'ORM',
    subtitle: 'Operational Risk Management',
    severity: null,
    severityType: 'sky',
    color: '#38bdf8',
    icon: ServerCrash,
    radius: 185,
    speed: 52,
    startAngle: 135,
    hudDir: 'down-right',
    targetX: 24,
    targetY: 16,
    leaderPath: 'M 0 0 L 24 16'
  },
  {
    id: 'dark-web',
    title: 'DWS',
    subtitle: 'Dark Web Surveillance',
    severity: null,
    severityType: 'blue',
    color: '#60a5fa',
    icon: FileSearch,
    radius: 255,
    speed: 52,
    startAngle: 225,
    hudDir: 'down-left',
    targetX: -24,
    targetY: 16,
    leaderPath: 'M 0 0 L -24 16'
  },
  {
    id: 'cyber-insurance',
    title: 'CI',
    subtitle: 'Cyber Insurance',
    severity: null,
    severityType: 'ice',
    color: '#22d3ee',
    icon: BadgeCheck,
    radius: 325,
    speed: 52,
    startAngle: 315,
    hudDir: 'up-left',
    targetX: -24,
    targetY: -16,
    leaderPath: 'M 0 0 L -24 -16'
  }
];

// Enterprise Trust Logos (SVG SVGs replicating Image 2)
const LOGOS = [
  {
    name: 'Microsoft',
    svg: (
      <svg width="105" height="24" viewBox="0 0 105 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 2.5H10.5V12H1V2.5Z" fill="#F25022"/>
        <path d="M12.5 2.5H22V12H12.5V2.5Z" fill="#7FBA00"/>
        <path d="M1 14H10.5V23.5H1V14Z" fill="#00A4EF"/>
        <path d="M12.5 14H22V23.5H12.5V14Z" fill="#FFB900"/>
        <text x="29" y="17.5" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="15" fontWeight="600" letterSpacing="-0.2px">Microsoft</text>
      </svg>
    )
  },
  {
    name: 'AWS',
    svg: (
      <svg width="55" height="24" viewBox="0 0 55 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 14.5C10.6 14.5 9 13.9 7.7 12.7C6.4 11.5 5.8 9.9 5.8 7.9C5.8 5.9 6.4 4.3 7.7 3.1C9 1.9 10.6 1.3 12.5 1.3C14.4 1.3 16 1.9 17.3 3.1C18.6 4.3 19.2 5.9 19.2 7.9C19.2 9.9 18.6 11.5 17.3 12.7C16 13.9 14.4 14.5 12.5 14.5Z" fill="none"/>
        <text x="2" y="14" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="800" letterSpacing="-0.5px">aws</text>
        <path d="M2 19C10 23.5 26 23.5 35 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M33 15L36 17.5L32 20" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: 'Google Cloud',
    svg: (
      <svg width="125" height="24" viewBox="0 0 125 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 18C12.5 18 15 16 15.8 13.2C14.9 13.1 14 13 13 13C9 13 5.5 15.2 4 18H9.5Z" fill="#EA4335"/>
        <path d="M16 12C16 8.7 13.3 6 10 6C8.2 6 6.5 6.8 5.4 8.2L7.6 10.4C8.2 9.5 9 9 10 9C11.7 9 13 10.3 13 12H16Z" fill="#4285F4"/>
        <path d="M4 18C4 17.5 4.1 17 4.3 16.5L1.8 14.6C1.3 15.6 1 16.8 1 18H4Z" fill="#FBBC05"/>
        <text x="22" y="16" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="600">Google Cloud</text>
      </svg>
    )
  },
  {
    name: 'ORACLE',
    svg: (
      <svg width="85" height="22" viewBox="0 0 85 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="16" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="900" letterSpacing="2.5px">ORACLE</text>
      </svg>
    )
  },
  {
    name: 'CISCO',
    svg: (
      <svg width="65" height="24" viewBox="0 0 65 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="8" width="3" height="6" rx="1.5" fill="currentColor"/>
        <rect x="8" y="4" width="3" height="10" rx="1.5" fill="currentColor"/>
        <rect x="14" y="2" width="3" height="12" rx="1.5" fill="currentColor"/>
        <rect x="20" y="4" width="3" height="10" rx="1.5" fill="currentColor"/>
        <rect x="26" y="8" width="3" height="6" rx="1.5" fill="currentColor"/>
        <text x="34" y="15" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="800" letterSpacing="1px">CISCO</text>
      </svg>
    )
  },
  {
    name: 'IBM',
    svg: (
      <svg width="55" height="22" viewBox="0 0 55 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="17" fill="currentColor" fontFamily="Impact, Arial Black, sans-serif" fontSize="20" fontWeight="900" letterSpacing="2px">IBM</text>
      </svg>
    )
  },
  {
    name: 'Deloitte',
    svg: (
      <svg width="80" height="22" viewBox="0 0 80 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="16" fill="currentColor" fontFamily="Georgia, serif" fontSize="16" fontWeight="700">Deloitte</text>
        <circle cx="68" cy="15" r="2.5" fill="#86bc25"/>
      </svg>
    )
  },
  {
    name: 'PwC',
    svg: (
      <svg width="45" height="22" viewBox="0 0 45 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="2" y="16" fill="currentColor" fontFamily="Georgia, serif" fontSize="17" fontWeight="800">pwc</text>
      </svg>
    )
  },
  {
    name: 'Accenture',
    svg: (
      <svg width="90" height="22" viewBox="0 0 90 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8L9 5L4 2" stroke="#A100FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="14" y="16" fill="currentColor" fontFamily="system-ui, -apple-system, sans-serif" fontSize="14" fontWeight="700">accenture</text>
      </svg>
    )
  }
];

// Helper to get color by planet or severity
const getPlanetColor = (planetOrType, theme = 'blue') => {
  if (typeof planetOrType === 'object' && planetOrType !== null) {
    if (planetOrType.color) return planetOrType.color;
    return getPlanetColor(planetOrType.severityType, theme);
  }
  
  if (theme === 'red') {
    switch (planetOrType) {
      case 'cyan': return '#fca5a5';
      case 'sky': return '#f87171';
      case 'blue': return '#ef4444';
      case 'ice': return '#dc2626';
      case 'critical': return '#ef4444';
      case 'medium': return '#f87171';
      case 'low': return '#fca5a5';
      case 'high':
      default: return '#dc2626';
    }
  }

  switch (planetOrType) {
    case 'cyan': return '#00f2fe';
    case 'sky': return '#38bdf8';
    case 'blue': return '#60a5fa';
    case 'ice': return '#22d3ee';
    case 'critical': return '#38bdf8';
    case 'medium': return '#60a5fa';
    case 'low': return '#22d3ee';
    case 'high':
    default: return '#00f2fe';
  }
};

export function CyberRadarHero({
  tag = "CONTINUOUS SECURITY VALIDATION",
  titleLine1 = "Find what\nmatters.",
  titleLine2 = "Before attackers do.",
  description = "Fluxvell helps security teams continuously discover, validate, and prioritize real risk across web applications, infrastructure, and cloud environments.",
  primaryBtnText = "Request a Demo",
  primaryBtnLink = "/contact",
  secondaryBtnText = "See How It Works",
  secondaryBtnLink = "#overview",
  onSecondaryClick,
  nodes,
  planets: customPlanets,
  stages = ["DISCOVER", "VALIDATE", "PRIORITIZE", "REMEDIATE"],
  footerTagline = "A MORE RESILIENT TOMORROW",
  trustedTitle = "TRUSTED BY SECURITY TEAMS WORLDWIDE",
  showLogos = true,
  theme = "blue"
}) {
  const planets = customPlanets || nodes || DEFAULT_PLANETS;
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const handleSecondaryAction = (e) => {
    if (onSecondaryClick) {
      e.preventDefault();
      onSecondaryClick(e);
    } else if (secondaryBtnLink.startsWith('#')) {
      e.preventDefault();
      const targetId = secondaryBtnLink.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: 600, behavior: 'smooth' });
      }
    }
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
  };

  return (
    <div className={`cyber-radar-hero-section theme-${theme}`}>
      <div className="cyber-radar-main-container">
        {/* LEFT COLUMN: Hero Copy & Actions */}
        <div className="cyber-radar-content">
          <div className="cyber-radar-tag-wrapper">
            <span className="cyber-radar-tag">{tag}</span>
            <div className="cyber-radar-tag-line" />
          </div>

          <h1 className="cyber-radar-title">
            <span className="cyber-radar-title-line-1">
              {typeof titleLine1 === 'string' ? (
                titleLine1.split('\n').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))
              ) : (
                titleLine1
              )}
            </span>
            <span className="cyber-radar-title-line-2">{titleLine2}</span>
          </h1>

          <p className="cyber-radar-description">
            {description}
          </p>

          <div className="cyber-radar-actions">
            <Link to={primaryBtnLink} className="btn btn-primary btn-animated" style={{textTransform: 'uppercase', fontWeight: 600}}>
              <span className="btn-text">{primaryBtnText}</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight size={16} />
              </div>
            </Link>

            <a 
              href={secondaryBtnLink} 
              onClick={handleSecondaryAction}
              className="cyber-radar-btn-secondary"
            >
              {secondaryBtnText}
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Solar System */}
        <div className="cyber-radar-stage-wrapper">
          <div className="cyber-radar-viewport">
            {/* Concentric Solar Orbit Rings for each planet */}
            {planets.map((planet) => (
              <div 
                key={`ring-${planet.id}`} 
                className={`solar-orbit-ring ${hoveredPlanet === planet.id ? 'active' : ''}`}
                style={{ 
                  width: `${planet.radius * 2}px`, 
                  height: `${planet.radius * 2}px` 
                }} 
              />
            ))}

            {/* Radiant Solar Sun Corona */}
            <div className="solar-sun-corona" />

            {/* Central Sun Core with Fluxvell Wing Logo */}
            <div className="solar-center-sun">
              <img 
                src="/Fluxvell_logo.png" 
                alt="Fluxvell Sun Core" 
                className="cyber-radar-center-logo"
              />
            </div>

            {/* Planets revolving along their true orbits */}
            {planets.map((planet) => {
              const IconComponent = planet.icon;
              const trailColor = getPlanetColor(planet, theme);

              return (
                <div 
                  key={planet.id} 
                  className="solar-planet-system"
                  onMouseEnter={() => setHoveredPlanet(planet.id)}
                  onMouseLeave={() => setHoveredPlanet(null)}
                >
                  {/* Orbit Rotator along circular path */}
                  <div 
                    className="solar-orbit-rotator"
                    style={{
                      '--speed': `${planet.speed}s`,
                      '--start-angle': `${planet.startAngle}deg`
                    }}
                  >
                    {/* Faded Orbital Motion Trail behind the dot */}
                    <svg
                      className="solar-trail-svg"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        transform: 'translate(-50%, -50%)',
                        width: `${(planet.radius + 20) * 2}px`,
                        height: `${(planet.radius + 20) * 2}px`,
                        pointerEvents: 'none',
                        overflow: 'visible'
                      }}
                      viewBox={`-${planet.radius + 20} -${planet.radius + 20} ${(planet.radius + 20) * 2} ${(planet.radius + 20) * 2}`}
                    >
                      <defs>
                        <linearGradient
                          id={`trail-grad-${planet.id}`}
                          x1={-planet.radius * 0.819}
                          y1={-planet.radius * 0.574}
                          x2={0}
                          y2={-planet.radius}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
                          <stop offset="35%" stopColor={trailColor} stopOpacity="0.2" />
                          <stop offset="70%" stopColor={trailColor} stopOpacity="0.55" />
                          <stop offset="100%" stopColor={trailColor} stopOpacity="0.95" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M ${-planet.radius * 0.819} ${-planet.radius * 0.574} A ${planet.radius} ${planet.radius} 0 0 1 0 ${-planet.radius}`}
                        fill="none"
                        stroke={`url(#trail-grad-${planet.id})`}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="solar-trail-path"
                        style={{
                          filter: `drop-shadow(0 0 6px ${trailColor})`
                        }}
                      />
                      {/* Trailing fading particles */}
                      <circle
                        cx={-planet.radius * 0.38}
                        cy={-planet.radius * 0.925}
                        r="1.8"
                        fill={getPlanetColor(planet, theme)}
                        opacity="0.75"
                        style={{ filter: `drop-shadow(0 0 8px ${getPlanetColor(planet, theme)})` }}
                      />
                      <circle
                        cx={-planet.radius * 0.64}
                        cy={-planet.radius * 0.768}
                        r="1.3"
                        fill={trailColor}
                        opacity="0.45"
                      />
                      <circle
                        cx={-planet.radius * 0.78}
                        cy={-planet.radius * 0.625}
                        r="1"
                        fill={trailColor}
                        opacity="0.25"
                      />
                    </svg>

                    {/* Planet Anchor translated radially to orbit radius */}
                    <div 
                      className="solar-planet-anchor"
                      style={{ '--radius': `${planet.radius}px` }}
                    >
                      {/* The glowing planet star dot right on the orbital path line */}
                      <div 
                        className={`solar-planet-dot ${planet.severityType || 'high'}`} 
                        style={{ 
                          backgroundColor: getPlanetColor(planet, theme), 
                          color: getPlanetColor(planet, theme),
                          boxShadow: `0 0 14px ${getPlanetColor(planet, theme)}, 0 0 28px ${getPlanetColor(planet, theme)}99`
                        }}
                      />

                      {/* Counter-Rotator centered directly at the Star dot (0, 0) */}
                      <div 
                        className="solar-counter-rotator"
                        style={{
                          '--speed': `${planet.speed}s`,
                          '--start-angle': `${planet.startAngle}deg`
                        }}
                      >
                        {/* Professional HUD Pin & Box Container */}
                        <div className={`solar-hud-attachment dir-${planet.hudDir || 'up-right'}`}>
                          {/* Precision SVG Leader Line from Star (0,0) to Box */}
                          <svg 
                            className="solar-leader-line-svg" 
                            width="70" 
                            height="50" 
                            viewBox="-35 -25 70 50"
                          >
                            <path 
                              d={planet.leaderPath || "M 0 0 L 24 -16"} 
                              stroke={getPlanetColor(planet, theme)} 
                              strokeWidth="1.2" 
                              strokeDasharray="2 2"
                              fill="none"
                              opacity="0.85"
                            />
                            <circle cx="0" cy="0" r="2.5" fill={getPlanetColor(planet, theme)} />
                            <circle 
                              cx={planet.targetX || 24} 
                              cy={planet.targetY || -16} 
                              r="2" 
                              fill={planet.color || '#38bdf8'} 
                              opacity="0.9"
                            />
                          </svg>

                          {/* The Sleek HUD Card Box */}
                          <div className="solar-hud-card-wrapper">
                            <div className="cyber-radar-card">
                              <div 
                                className="cyber-radar-card-icon"
                                style={{ 
                                  color: getPlanetColor(planet, theme), 
                                  borderColor: `${getPlanetColor(planet, theme)}35`, 
                                  background: `${getPlanetColor(planet, theme)}18` 
                                }}
                              >
                                <IconComponent size={17} />
                              </div>
                              <div className="cyber-radar-card-info">
                                <div className="cyber-radar-card-title-row">
                                  <span className="cyber-radar-card-title">{planet.title}</span>
                                  {planet.severity && (
                                    <span className={`cyber-radar-card-badge ${planet.severityType || 'high'}`}>
                                      {planet.severity}
                                    </span>
                                  )}
                                </div>
                                {planet.subtitle && (
                                  <span className="cyber-radar-card-subtitle">{planet.subtitle}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Margin Vertical Stage List */}
          {stages && stages.length > 0 && (
            <div className="cyber-radar-edge-steps">
              {stages.map((stage, idx) => (
                <span 
                  key={stage}
                  className={`cyber-radar-step-item ${activeStage === idx ? 'active' : ''}`}
                  onClick={() => setActiveStage(idx)}
                >
                  {stage}
                </span>
              ))}
            </div>
          )}


        </div>
      </div>

      {/* BOTTOM BAR: Trusted Enterprise Logos & Scroll */}
      {showLogos && (
        <div className="cyber-radar-trust-bar">
          <div className="cyber-radar-trust-title">{trustedTitle}</div>
          <div className="cyber-radar-trust-row">
            <div className="cyber-radar-logos-container">
              {LOGOS.map((item) => (
                <div key={item.name} className="cyber-radar-logo-item" title={item.name}>
                  {item.svg}
                </div>
              ))}
            </div>

            <div 
              className="cyber-radar-scroll-indicator" 
              onClick={handleScrollDown}
              role="button"
              tabIndex={0}
            >
              <ArrowDown size={14} className="cyber-radar-scroll-arrow" />
              <span>Scroll</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberRadarHero;
