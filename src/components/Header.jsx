import React from 'react';

export default function Header() {
  return (
    <header className="glass-panel site-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/svgs/cube-16-solid.svg" 
          alt="APEX Logo" 
          width="28" 
          height="28"
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,200,1,0.3))' }}
        />
        <span className="site-logo-text">
          APEX<span style={{ color: 'var(--accent)' }}>.IO</span>
        </span>
      </div>

      <nav className="site-nav">
        <a href="#features" className="site-nav-link">
          // FEATURES
        </a>
        <a href="#pricing" className="site-nav-link">
          // PRICING
        </a>
        <a href="#testimonials" className="site-nav-link">
          // WALL
        </a>
      </nav>

      <div>
        <a href="#pricing" className="btn btn-primary site-cta-btn">
          LAUNCH
          <img src="/svgs/chevron-right.svg" alt="" width="12" height="12" style={{ filter: 'invert(1)' }} />
        </a>
      </div>
    </header>
  );
}
