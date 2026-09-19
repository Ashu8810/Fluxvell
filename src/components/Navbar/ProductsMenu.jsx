import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Globe, Shield, ShieldAlert, BadgeCheck, FileSearch, Lock, Zap, ServerCrash, Key, Target } from 'lucide-react';

export function ProductsMenu() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div className="mega-menu" style={{ width: '500px', padding: '1rem' }} onMouseLeave={() => setActiveSubmenu(null)}>
      {/* Top level: Just the two logos */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
        
        {/* FluxNode Dropdown Item */}
        <Link 
          to="/products/third-party-risk-management"
          style={{ 
            flex: 1, 
            padding: '1.5rem', 
            border: '1px solid rgba(0,0,0,0.05)', 
            borderRadius: '8px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: activeSubmenu === 'fluxnode' ? '#f8fafc' : 'transparent',
            transition: 'all 0.2s'
          }}
          onMouseEnter={() => setActiveSubmenu('fluxnode')}
          onClick={() => setActiveSubmenu(null)}
        >
          <img src="/fluxnode_black.png" alt="FluxNode" style={{ height: '44px' }} />
        </Link>

        {/* FluxWatch Dropdown Item */}
        <Link 
          to="/products/autonomous-pentesting"
          style={{ 
            flex: 1, 
            padding: '1.5rem', 
            border: '1px solid rgba(0,0,0,0.05)', 
            borderRadius: '8px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: activeSubmenu === 'fluxwatch' ? '#f8fafc' : 'transparent',
            transition: 'all 0.2s'
          }}
          onMouseEnter={() => setActiveSubmenu('fluxwatch')}
          onClick={() => setActiveSubmenu(null)}
        >
          <img src="/fluxwatch_black.png" alt="FluxWatch" style={{ height: '44px' }} />
        </Link>
      </div>

      {/* Submenus - show conditionally based on hover state */}
      
      {/* FluxNode Submenu (TPRM) */}
      <div style={{ 
        display: activeSubmenu === 'fluxnode' ? 'grid' : 'none', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '1rem', 
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <Link to="/products/third-party-risk-management/brand-reputation" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Building2 size={18} style={{ color: '#0ea5e9' }} /></div>
          <div className="mobile-rich-text">
            <strong>Brand Reputation</strong>
            <span>Protect your digital brand</span>
          </div>
        </Link>
        <Link to="/products/third-party-risk-management/operational-risk" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><ServerCrash size={18} style={{ color: '#0ea5e9' }} /></div>
          <div className="mobile-rich-text">
            <strong>Operational Risk</strong>
            <span>Monitor resilience</span>
          </div>
        </Link>
        <Link to="/products/third-party-risk-management/dark-web" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><FileSearch size={18} style={{ color: '#0ea5e9' }} /></div>
          <div className="mobile-rich-text">
            <strong>Dark Web</strong>
            <span>Monitor threats</span>
          </div>
        </Link>
        <Link to="/products/third-party-risk-management/cyber-insurance" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><BadgeCheck size={18} style={{ color: '#0ea5e9' }} /></div>
          <div className="mobile-rich-text">
            <strong>Cyber Insurance</strong>
            <span>Data-driven insights</span>
          </div>
        </Link>
      </div>

      {/* FluxWatch Submenu (Pentesting) */}
      <div style={{ 
        display: activeSubmenu === 'fluxwatch' ? 'grid' : 'none', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '1rem', 
        marginTop: '1.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <Link to="/products/autonomous-pentesting/web-app" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Globe size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>Web App</strong>
            <span>Discover vulnerabilities</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/api" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Zap size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>API Pentesting</strong>
            <span>Secure your APIs</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/mcp-pentesting" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><ShieldAlert size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>MCP Pentesting</strong>
            <span>Validate MCPs</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/ai-vs-ai" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Target size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>AI vs AI</strong>
            <span>Defend against AI</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/network" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Lock size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>Network</strong>
            <span>Identify weaknesses</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/external" className="mobile-rich-item">
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Key size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>External</strong>
            <span>Discover exposures</span>
          </div>
        </Link>
        <Link to="/products/autonomous-pentesting/continuous" className="mobile-rich-item" style={{ gridColumn: 'span 2' }}>
          <div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><Shield size={18} style={{ color: '#f97316' }} /></div>
          <div className="mobile-rich-text">
            <strong>Continuous Pentesting</strong>
            <span>24/7 automated security testing</span>
          </div>
        </Link>
      </div>

    </div>
  );
}
