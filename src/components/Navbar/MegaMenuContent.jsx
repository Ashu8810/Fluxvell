import React from 'react';

export function MegaMenuContent() {
  return (
    <div className="mega-menu">
      <div className="mega-menu-inner">
        <div className="mega-menu-section">
          <h3>COLLABORATION</h3>
          <ul>
            <li><a href="#"><strong>Channels</strong><span>Organize teams and work</span></a></li>
            <li><a href="#"><strong>Connect</strong><span>Work with external partners</span></a></li>
            <li><a href="#"><strong>Messaging</strong><span>Chat with your team</span></a></li>
            <li><a href="#"><strong>Huddles</strong><span>Meet using audio and video</span></a></li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <h3>PROJECT MANAGEMENT</h3>
          <ul>
            <li><a href="#"><strong>Templates</strong><span>Start any task, fast</span></a></li>
            <li><a href="#"><strong>Canvas</strong><span>Create rich, flexible docs</span></a></li>
            <li><a href="#"><strong>Lists</strong><span>Organize, track and manage projects</span></a></li>
          </ul>
        </div>
        <div className="mega-menu-section">
          <h3>INTELLIGENCE</h3>
          <ul>
            <li><a href="#"><strong>AI Assistant</strong><span>Save time and work smarter</span></a></li>
            <li><a href="#"><strong>Search</strong><span>Find anything, all from a single bar</span></a></li>
          </ul>
        </div>
        <div className="mega-menu-section bg-gray">
          <h3>MARKETPLACE</h3>
          <div className="marketplace-content">
            <p>Find new agents and apps that fit your team's needs.</p>
            <a href="#" className="browse-link">Browse marketplace &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
}
