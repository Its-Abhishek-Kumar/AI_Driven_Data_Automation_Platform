import React from 'react';

const TESTIMONIALS = [
  {
    quote: "The autonomous self-healing loops saved our production clusters from data corruption twice last month. Apex resolved schema drifts on stream in under 0.4ms.",
    author: "Elena Rostova",
    role: "VP of Infrastructure",
    company: "DeltaTech",
    avatarColor: "#114C5A"
  },
  {
    quote: "Ingestion pipeline latencies dropped from 8.2ms to 0.11ms. The platform handled 430k messages per second without a single frame drop or re-render lag.",
    author: "Marcus Aurelius",
    role: "Principal Architect",
    company: "FinScale",
    avatarColor: "#FF9932"
  },
  {
    quote: "We mapped and synced over 150 relational tables using their neural mapping engine. Total developer migration time dropped from 3 weeks to 4 hours.",
    author: "Sarah Jenkins",
    role: "Head of Engineering",
    company: "LogiStream",
    avatarColor: "#FFC801"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      padding: '80px 0',
      backgroundColor: 'rgba(15, 30, 38, 0.3)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="max-width-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>SOCIAL PROOF</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
            TRUSTED BY PLATFORM TEAMS
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Read how global scale infrastructure teams leverage Apex to maintain data pipeline integrity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="glass-panel testimonial-card">
              <div>
                {/* SVG Quote Icon */}
                <div style={{ marginBottom: '12px', display: 'flex' }}>
                  <span style={{ fontSize: '2.5rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)', lineHeight: '0.8' }}>“</span>
                </div>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  color: 'var(--text-secondary)',
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="testimonial-author-info">
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: t.avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  color: 'var(--oceanic-noir)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>
                  {t.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {t.author}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {t.role} @ <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
