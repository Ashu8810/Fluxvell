import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Shield, ShieldAlert, BadgeCheck, FileSearch, Lock, Zap, ServerCrash, Key, Target, Radar } from 'lucide-react';

export function ProductsMenu() {
  return (
    <div className="mega-menu" style={{ width: '700px', padding: '1.5rem' }}>
      <div className="mega-menu-inner" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        
        {/* Third-Party Risk Management Section */}
        <div className="mega-menu-section">
          <Link to="/products/third-party-risk-management" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.25rem 0' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Third-Party Risk Management</h3>
          </Link>
          <ul style={{ gap: '0.25rem' }}>
            <li>
              <a href="/products/third-party-risk-management#brand-reputation" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Radar size={18} style={{ color: '#0ea5e9', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Brand Reputation Management</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Protect your brand from digital threats</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/third-party-risk-management#operational-risk" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <ServerCrash size={18} style={{ color: '#0ea5e9', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Operational Risk Management</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Monitor operational risks and resilience</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/third-party-risk-management#dark-web" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <FileSearch size={18} style={{ color: '#0ea5e9', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Dark Web Surveillance</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Monitor underground threats</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/third-party-risk-management#cyber-insurance" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <BadgeCheck size={18} style={{ color: '#0ea5e9', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Cyber Insurance</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Data-driven insights for decisions</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Autonomous Pentesting Section */}
        <div className="mega-menu-section">
          <Link to="/products/autonomous-pentesting" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', padding: '0.25rem 0' }}>
            <h3 style={{ fontSize: '0.8rem', fontWeight: 800, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Autonomous Pentesting</h3>
          </Link>
          <ul style={{ gap: '0.25rem' }}>
            <li>
              <a href="/products/autonomous-pentesting#web-app-pentesting" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Globe size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Web App Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Vulnerability discovery for web apps</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/autonomous-pentesting#api-pentesting" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Zap size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>API Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Secure APIs against modern threats</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/autonomous-pentesting#mcp-pentesting" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <ShieldAlert size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>MCP Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Continuous validation for MCPs</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/autonomous-pentesting#ai-vs-ai" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Target size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>AI vs AI</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Defend against AI-driven attacks</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/autonomous-pentesting#network-pentesting" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Lock size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Network Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Identify infrastructure weaknesses</span>
                </div>
              </a>
            </li>
            <li>
              <a href="/products/autonomous-pentesting#external-pentesting" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', textDecoration: 'none' }}>
                <Key size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>External Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>Discover external exposures</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem' }}>
                <Shield size={18} style={{ color: '#f97316', marginTop: '2px', flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#1e293b', fontWeight: 600 }}>Continuous Pentesting</strong>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4 }}>24/7 automated security testing</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
