import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './ThirdPartyRiskManagementTimeline.css';

const timelineData = [
  {
    id: 1,
    category: "BRAND REPUTATION MANAGEMENT",
    title: "Protect the trust behind your brand.",
    whatItIs: "Brand reputation management continuously monitors how an organization, its products, executives, and services are represented across search engines, social media, news platforms, review websites, forums, and other online channels.",
    problem: "Negative reviews, misinformation, impersonation, fake accounts, data leaks, customer complaints, and harmful online content can damage trust and influence purchasing decisions.",
    solution: "We monitor relevant digital channels, identify suspicious or harmful content, detect impersonation and coordinated abuse, analyze reputation trends, prioritize emerging threats, and provide actionable guidance for response and remediation.",
    whyImportant: "Trust directly affects customer retention, revenue, partnerships, hiring, and investor confidence. Early detection allows organizations to respond before a reputation issue becomes a larger business crisis."
  },
  {
    id: 2,
    category: "OPERATIONAL RISK MANAGEMENT",
    title: "Reduce the risks that disrupt daily operations.",
    whatItIs: "Operational risk management identifies, evaluates, and reduces risks that could disrupt an organization’s people, processes, technology, suppliers, facilities, or daily business operations.",
    problem: "System outages, cyber incidents, human error, process failures, third-party disruptions, compliance issues, and weak business continuity planning can cause operational and financial damage.",
    solution: "We assess critical business processes, identify dependencies, review controls, analyze failure scenarios, evaluate third-party exposure, and prioritize practical risk-reduction strategies.",
    whyImportant: "Strong operational risk management improves resilience, reduces downtime, protects revenue, and helps organizations continue delivering essential services during unexpected events."
  },
  {
    id: 3,
    category: "DARK WEB SURVEILLANCE",
    title: "Detect exposed information before it is abused.",
    whatItIs: "Dark web surveillance is the authorized monitoring of underground forums, breach marketplaces, leak sites, paste sites, messaging channels, and other restricted online sources for information connected to an organization.",
    problem: "Stolen credentials, employee information, source code, customer data, confidential documents, and access tokens may be shared or sold before an organization knows that a compromise has occurred.",
    solution: "We monitor relevant sources, detect exposed credentials and organizational information, identify potential data leaks, validate credible alerts, assess potential impact, and provide guidance for containment and response.",
    whyImportant: "Early awareness gives security teams time to reset credentials, revoke access, investigate affected systems, and reduce the likelihood of further abuse."
  },
  {
    id: 4,
    category: "CYBER INSURANCE",
    title: "Strengthen your readiness for cyber risk.",
    whatItIs: "Cyber insurance support helps organizations understand, prepare for, and manage cybersecurity risks that may affect insurance eligibility, coverage, claims, and incident response.",
    problem: "Unclear security controls, incomplete documentation, inadequate incident-response plans, and gaps between actual risk and insurance requirements can increase premiums or create complications during a claim.",
    solution: "We assess security readiness, identify control gaps, review incident-response capabilities, organize security evidence, support risk-improvement planning, and help maintain a clear record of cybersecurity controls.",
    whyImportant: "Strong security controls and clear evidence improve preparedness, support faster incident response, and help organizations make more informed coverage decisions."
  }
];

const ThirdPartyRiskManagementTimeline = ({ theme = 'red' }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll listener to update activeIndex when user scrolls through right-side cards
  useEffect(() => {
    const handleScroll = () => {
      const cardElements = document.querySelectorAll('.tprm-timeline-item');
      if (!cardElements.length) return;

      const triggerPoint = window.innerHeight * 0.45;
      let currentActive = 0;

      cardElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerPoint) {
          currentActive = index;
        }
      });

      setActiveIndex((prev) => (prev !== currentActive ? currentActive : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Framer motion scroll progress for the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className={`tprm-timeline-section theme-${theme}`} ref={containerRef}>
      <div className="tprm-timeline-container">
        
        {/* Left Column (Sticky throughout section) */}
        <div className="tprm-timeline-left-col">
          <div className="tprm-timeline-sticky-left">
            <div className="tprm-timeline-left-inner">
              <div className="tprm-timeline-label">THIRD-PARTY RISK MANAGEMENT</div>
              <h2 className="tprm-timeline-headline">Control your vendor ecosystem.</h2>
              <p className="tprm-timeline-desc">
                Third-party vendors introduce hidden vulnerabilities into your supply chain. Our risk management platform helps you continuously discover, evaluate, and monitor vendor risk before it affects your business.
              </p>
              <div className="tprm-timeline-support">
                Assess faster. Monitor continuously. Scale securely.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Scrolling Timeline) */}
        <div className="tprm-timeline-list">
          <div className="tprm-timeline-line-bg"></div>
          <motion.div 
            className="tprm-timeline-line-progress" 
            style={{ scaleY, height: "100%" }}
          ></motion.div>

          {timelineData.map((step, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                key={step.id} 
                className={`tprm-timeline-item ${isActive ? 'is-active' : ''}`}
                data-index={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {/* Number Indicator */}
                <motion.div 
                  className={`tprm-timeline-indicator ${isActive ? 'active' : ''}`}
                  variants={{
                    hidden: { scale: 0.85, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } }
                  }}
                >
                  <div className="tprm-timeline-indicator-neon"></div>
                  <div className="tprm-timeline-indicator-inner">
                    {step.id}
                  </div>
                </motion.div>

                {/* Connector Line */}
                <div className="tprm-timeline-connector-wrapper">
                  <motion.div 
                    className="tprm-timeline-connector"
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } }
                    }}
                  ></motion.div>
                </div>
                
                {/* Card */}
                <motion.div 
                  className="tprm-timeline-card-wrapper"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <div className={`tprm-timeline-card-glow ${isActive ? 'active' : ''}`}></div>
                  <div className={`tprm-timeline-card ${isActive ? 'active' : ''}`}>
                    <div className="tprm-timeline-card-neon"></div>
                    <div className="tprm-timeline-card-inner">
                      <div className="tprm-timeline-card-header">
                        <div className="tprm-timeline-card-category">{step.category}</div>
                        <motion.h4
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.4 } }
                          }}
                        >
                          {step.title}
                        </motion.h4>
                      </div>

                    <div className="tprm-timeline-card-body">
                      <div className="tprm-timeline-sub-section">
                        <h5 className="tprm-timeline-sub-label">What it is</h5>
                        <p>{step.whatItIs}</p>
                      </div>

                      <div className="tprm-timeline-sub-section">
                        <h5 className="tprm-timeline-sub-label">The problem it solves</h5>
                        <p>{step.problem}</p>
                      </div>

                      <div className="tprm-timeline-sub-section">
                        <h5 className="tprm-timeline-sub-label">Our solution</h5>
                        <p>{step.solution}</p>
                      </div>

                      <div className="tprm-timeline-sub-section">
                        <h5 className="tprm-timeline-sub-label">Why it is important</h5>
                        <p>{step.whyImportant}</p>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ThirdPartyRiskManagementTimeline;
