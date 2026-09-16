import React from 'react';
import './ScrollingMarquee.css';

const keywords = [
  "AUTONOMOUS PENTESTING",
  "CONTINUOUS TELEMETRY",
  "EXPLOIT VALIDATION",
  "ASSET DISCOVERY",
  "THREAT-INFORMED",
  "DRIFT DETECTION",
  "ZERO-DAY",
  "RESILIENCE",
  "COMPLIANCE",
  "VENDOR RISK",
  "ATTACK SURFACE"
];

const MarqueeTrack = ({ reverse = false, className = "" }) => {
  return (
    <div className={`marquee-track ${reverse ? 'reverse' : ''} ${className}`}>
      <div className="marquee-content">
        {/* Render the list multiple times to ensure seamless infinite scrolling */}
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {keywords.map((word, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="marquee-text">{word}</span>
                <span className="marquee-star">★</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export const ScrollingMarquee = () => {
  return (
    <div className="scrolling-marquee-container">
      <div className="marquee-ribbon ribbon-1">
        <MarqueeTrack />
      </div>
      <div className="marquee-ribbon ribbon-2">
        <MarqueeTrack reverse={true} />
      </div>
    </div>
  );
};

export default ScrollingMarquee;
