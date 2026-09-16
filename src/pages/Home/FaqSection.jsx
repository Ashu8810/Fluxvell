import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, MessageCircle, Sparkles, ChevronDown } from 'lucide-react';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import './FaqSection.css';

const faqs = [
  {
    q: "What is Fluxvell?",
    a: "Fluxvell is a continuous offensive validation platform that automates penetration testing and third-party risk management to actively secure your perimeter.",
  },
  {
    q: "What is FluxNode?",
    a: "FluxNode is our core intelligent engine that acts as an autonomous virtual hacker to continuously map and safely exploit vulnerabilities in your environment in real-time.",
  },
  {
    q: "How is Fluxvell different from traditional pentesting?",
    a: "Unlike periodic manual pentests that miss ephemeral assets, Fluxvell operates continuously. It executes safe, authorized exploits to provide empirical proof of vulnerabilities without disrupting production.",
  },
  {
    q: "Does Fluxvell replace our internal security team?",
    a: "No. Fluxvell augments your team by filtering out noise and delivering a prioritized list of critical attack paths with actionable remediation guidance, so your team can focus on fixing issues rather than finding them.",
  },
  {
    q: "Do you offer support or custom integrations?",
    a: "Yes! We provide dedicated support and flexible integration options for enterprise environments. Reach out to our team to discuss custom solutions tailored to your infrastructure.",
  },
];

const AccordionItem = ({ f, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="faq-accordion-item">
      <button
        className={`faq-accordion-trigger ${isOpen ? 'open' : ''}`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {f.q}
        <ChevronDown size={18} className="faq-chevron" />
      </button>
      <div 
        className="faq-accordion-content-wrapper" 
        style={{ height: `${height}px` }}
      >
        <div className="faq-accordion-content" ref={contentRef}>
          {f.a}
        </div>
      </div>
    </div>
  );
};

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <ScrollReveal className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-subtitle">
            Quick answers to the questions we get the most. Can't find
            yours? Write to <a href="mailto:support@fluxvell.com" className="faq-link">support@fluxvell.com</a>.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="faq-accordion-container">
          <div className="faq-accordion">
            {faqs.map((f, i) => (
              <AccordionItem 
                key={i} 
                f={f} 
                isOpen={openIndex === i} 
                onClick={() => toggleAccordion(i)} 
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="faq-contact-box">
          <div className="faq-contact-left">
            <div className="faq-contact-icon-wrap">
              <MessageCircle size={18} />
            </div>
            <div className="faq-contact-text">
              <p className="faq-contact-title">Still have a question?</p>
              <p className="faq-contact-subtitle">We reply within four business hours.</p>
            </div>
          </div>
          <button className="faq-contact-button">
            Ask us anything
            <ArrowRight size={16} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};
