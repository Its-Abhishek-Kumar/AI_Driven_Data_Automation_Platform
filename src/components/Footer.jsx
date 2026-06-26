import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0 24px 0',
      color: 'var(--text-secondary)'
    }}>
      <div className="max-width-container">
        {/* Footer Top */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '40px',
          marginBottom: '48px'
        }}>
          {/* Logo & Info column */}
          <div style={{ maxWidth: '300px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <img src="/svgs/cube-16-solid.svg" alt="Apex Logo" width="24" height="24" />
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontWeight: '700', 
                fontSize: '1.1rem',
                color: 'var(--text-primary)'
              }}>
                APEX<span style={{ color: 'var(--accent)' }}>.IO</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Apex is the autonomous data automation framework engineered for developer speed, low TTI, and state performance isolation.
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '64px',
            textAlign: 'left'
          }}>
            {/* Column A */}
            <div>
              <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '0.1em' }}>
                // PRODUCT
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Core Engine</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Self-Healing API</a></li>
                <li><a href="#pricing" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Tariff Matrix</a></li>
              </ul>
            </div>

            {/* Column B */}
            <div>
              <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '0.1em' }}>
                // ENGINEERING
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Developer Sandbox</a></li>
                <li><a href="https://github.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Github Repository</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>System Architecture</a></li>
              </ul>
            </div>

            {/* Column C */}
            <div>
              <h4 style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '16px', letterSpacing: '0.1em' }}>
                // PROTOCOLS
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Security Standard</a></li>
                <li><a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Compliance SLA</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '24px' }} />

        {/* Footer Bottom */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} APEX ENGINE CORE INC. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>LATENCY: 0.11ms</span>
            <span>●</span>
            <span>SHARDS: 48/48 ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
