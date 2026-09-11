import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Search, Menu, X, ArrowUpRight,
  Globe, Shield, ShieldAlert, BadgeCheck, FileSearch, Lock, Zap, ServerCrash, Key, Target, Radar, Building2
} from 'lucide-react';
import { MegaMenuContent } from './MegaMenuContent';
import { SolutionsMenu } from './SolutionsMenu';
import { ProductsMenu } from './ProductsMenu';
import { IndustriesMenu } from './IndustriesMenu';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    solutions: false,
    products: false,
    industries: false
  });
  const location = useLocation();

  const toggleDropdown = (key) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.location.pathname === '/') {
        setIsDarkSection(window.scrollY > window.innerHeight - 100);
      } else {
        setIsDarkSection(false);
      }
    };
    // Initialize on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const useDarkNavStyle = isDarkSection;
  const logoSrc = useDarkNavStyle ? "/Fluxvell_logo_white.png" :
    (isScrolled || location.pathname.startsWith('/industries') || location.pathname === '/') ? "/Fluxvell_logo_black.png" : "/Fluxvell_logo_white.png";

  return (
    <>
      <div className={`nav-container ${isScrolled ? 'nav-scrolled' : ''} ${useDarkNavStyle ? 'nav-theme-dark' : 'nav-theme-light'} ${(location.pathname.startsWith('/industries') || location.pathname === '/') ? 'nav-dark' : ''}`}>
        <nav className="navbar">
          <div className="nav-left">
            <Link to="/" className="logo">
              <img src={logoSrc} alt="Fluxvell Logo" style={{ width: '165px', height: 'auto', transform: 'scale(1.3)', transformOrigin: 'left center', display: 'block' }} />
            </Link>
          </div>

          <ul className="nav-links desktop-only">
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>Solutions <ChevronDown size={14} /></a>
              <SolutionsMenu />
            </li>
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>Products <ChevronDown size={14} /></a>
              <ProductsMenu />
            </li>
            <li className="dropdown">
              <a href="#" onClick={(e) => e.preventDefault()}>Industries <ChevronDown size={14} /></a>
              <IndustriesMenu />
            </li>
            <li><Link to="/partners" className={location.pathname === '/partners' ? 'active' : ''}>Partners</Link></li>
          </ul>

          <div className="nav-right desktop-only">
            <Link to="/contact" className="btn btn-primary btn-animated">
              <span className="btn-text">REQUEST A DEMO</span>
              <div className="btn-icon-wrapper">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
            <img src="/Fluxvell_logo_black.png" alt="Fluxvell Logo" style={{ width: '165px', height: 'auto', transform: 'scale(1.3)', transformOrigin: 'left center', display: 'block' }} />
          </Link>
          <button
            className="close-menu-btn"
            aria-label="Close Menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <ul className="mobile-nav-links">
          <li className="mobile-dropdown-item">
            <button className="mobile-dropdown-btn" onClick={() => toggleDropdown('solutions')}>
              Solutions <ChevronDown size={14} className={mobileDropdowns.solutions ? 'open' : ''} />
            </button>
            <div className={`mobile-dropdown-content ${mobileDropdowns.solutions ? 'open' : ''}`}>
              <div className="mobile-rich-list">
                <Link to="/solutions/vendor-risk-management" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Vendor Risk Management</strong>
                    <span>Manage vendor risks with AI-powered assessments</span>
                  </div>
                </Link>
                <Link to="/solutions/external-attack-surface-management" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>External Attack Surface Management</strong>
                    <span>Discover and monitor your external exposures</span>
                  </div>
                </Link>
                <Link to="/solutions/threat-intelligence" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Threat Intelligence</strong>
                    <span>Real-time threat detection and insights</span>
                  </div>
                </Link>
                <Link to="/solutions/vulnerability-management" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Vulnerability Management</strong>
                    <span>Identify and prioritize vulnerabilities</span>
                  </div>
                </Link>
                <Link to="/solutions/executive-monitoring" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Executive Monitoring</strong>
                    <span>Executive-ready reports and dashboards</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li className="mobile-dropdown-item">
            <button className="mobile-dropdown-btn" onClick={() => toggleDropdown('products')}>
              Products <ChevronDown size={14} className={mobileDropdowns.products ? 'open' : ''} />
            </button>
            <div className={`mobile-dropdown-content ${mobileDropdowns.products ? 'open' : ''}`}>
              <div className="mobile-rich-list">
                <div className="mobile-dropdown-section-title">Third-Party Risk Management</div>
                <Link to="/products/third-party-risk-management#brand-reputation" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Building2 size={18} style={{ color: '#0ea5e9' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Brand Reputation Management</strong>
                    <span>Protect your brand from digital threats</span>
                  </div>
                </Link>
                <Link to="/products/third-party-risk-management#operational-risk" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><ServerCrash size={18} style={{ color: '#0ea5e9' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Operational Risk Management</strong>
                    <span>Monitor operational risks and resilience</span>
                  </div>
                </Link>
                <Link to="/products/third-party-risk-management#dark-web" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><FileSearch size={18} style={{ color: '#0ea5e9' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Dark Web Surveillance</strong>
                    <span>Monitor underground threats</span>
                  </div>
                </Link>
                <Link to="/products/third-party-risk-management#cyber-insurance" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><BadgeCheck size={18} style={{ color: '#0ea5e9' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Cyber Insurance</strong>
                    <span>Data-driven insights for decisions</span>
                  </div>
                </Link>

                <div className="mobile-dropdown-section-title" style={{ color: '#f97316', marginTop: '0.5rem' }}>Autonomous Pentesting</div>
                <Link to="/products/autonomous-pentesting/web-app" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Globe size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Web App Pentesting</strong>
                    <span>Vulnerability discovery for web apps</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/api" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Zap size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>API Pentesting</strong>
                    <span>Secure APIs against modern threats</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/mcp-pentesting" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><ShieldAlert size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>MCP Pentesting</strong>
                    <span>Continuous validation for MCPs</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/ai-vs-ai" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Target size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>AI vs AI</strong>
                    <span>Defend against AI-driven attacks</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/network" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Lock size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Network Pentesting</strong>
                    <span>Identify infrastructure weaknesses</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/external" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Key size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>External Pentesting</strong>
                    <span>Discover external exposures</span>
                  </div>
                </Link>
                <Link to="/products/autonomous-pentesting/continuous" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Shield size={18} style={{ color: '#f97316' }} /></div>
                  <div className="mobile-rich-text">
                    <strong>Continuous Pentesting</strong>
                    <span>24/7 automated security testing</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li className="mobile-dropdown-item">
            <button className="mobile-dropdown-btn" onClick={() => toggleDropdown('industries')}>
              Industries <ChevronDown size={14} className={mobileDropdowns.industries ? 'open' : ''} />
            </button>
            <div className={`mobile-dropdown-content ${mobileDropdowns.industries ? 'open' : ''}`}>
              <div className="mobile-rich-list">
                <Link to="/industries/technology" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Technology</strong>
                    <span>Real-time visibility into external threats and exposures</span>
                  </div>
                </Link>
                <Link to="/industries/finance" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Finance</strong>
                    <span>Protect critical financial infrastructure from evolving threats</span>
                  </div>
                </Link>
                <Link to="/industries/retail" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Retail</strong>
                    <span>Monitor retail risks across domains, apps, and vendors</span>
                  </div>
                </Link>
                <Link to="/industries/telecom" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Telecom</strong>
                    <span>Monitor and protect critical telecom attack surfaces</span>
                  </div>
                </Link>
                <Link to="/industries/energy" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Energy</strong>
                    <span>Protect critical energy infrastructure from external threats</span>
                  </div>
                </Link>
                <Link to="/industries/healthcare" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Healthcare</strong>
                    <span>Continuous visibility into healthcare external attack surfaces</span>
                  </div>
                </Link>
                <Link to="/industries/education" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Education</strong>
                    <span>Secure education ecosystems from leaks, phishing, and risks</span>
                  </div>
                </Link>
                <Link to="/industries/critical-infrastructure" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Critical Infrastructure</strong>
                    <span>Detect threats across infrastructure, vendors, and access points</span>
                  </div>
                </Link>
                <Link to="/industries/automotive" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Automotive</strong>
                    <span>AI-driven visibility into automotive external attack surfaces</span>
                  </div>
                </Link>
                <Link to="/industries/legal" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Legal</strong>
                    <span>Continuous monitoring for leaks, threats, and abuse</span>
                  </div>
                </Link>
                <Link to="/industries/hospitality" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Hospitality</strong>
                    <span>Comprehensive hospitality risk protection</span>
                  </div>
                </Link>
                <Link to="/industries/media-entertainment" onClick={() => setMobileMenuOpen(false)} className="mobile-rich-item">
                  <div className="mobile-rich-text">
                    <strong>Media & Entertainment</strong>
                    <span>Protect media and entertainment from digital threats and piracy</span>
                  </div>
                </Link>
              </div>
            </div>
          </li>
          <li><Link to="/partners" onClick={() => setMobileMenuOpen(false)}>Partners</Link></li>
          <li><Link to="/signin" onClick={() => setMobileMenuOpen(false)}>Sign in</Link></li>
        </ul>
        <div className="mobile-menu-actions">
          <Link to="/contact" className="btn btn-primary full-width btn-animated" onClick={() => setMobileMenuOpen(false)}>
            <span className="btn-text">REQUEST A DEMO</span>
            <div className="btn-icon-wrapper">
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
