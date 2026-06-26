import React, { useEffect, useState, useRef } from 'react';

const INITIAL_LOGS = [
  '// Apex Engine v1.0.4 initialized.',
  '// Ingestion source: kafka://stream.prod.internal:9092/transactions',
  '[OK] Connected to stream. Ingesting at 124,000 msg/sec.',
  '[METRIC] Ingestion Latency: 0.08ms | Buffer Util: 14%',
  '[AI] Schema match confidence: 99.8%. Mapping variables...'
];

const LOG_TEMPLATES = [
  '[OK] Mapped transactional block delta_0142 -> PostgreSQL Master.',
  '[HEAL] Alert: Invalid timestamp formatting in block delta_0145.',
  '[HEAL] Resolve: Standardizing ISO 8601 formatting. Autocorrection successful. (0.4ms)',
  '[METRIC] CPU Util: 18.2% | GPU Cluster: Idle | State: Balanced',
  '[OK] Schema drift sync completed. No new mutations found.',
  '[OK] Sync token generated: sha256_e109d... (Validated by 3 validators)',
  '[METRIC] Pipeline throughput spiked: 168,400 msg/sec. Latency remains: 0.11ms',
  '[AI] Optimizing query planning on index_hash_01a...'
];

export default function Hero() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prevLogs) => {
        const nextTemplate = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
        const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
        const formattedLog = `[${timestamp}] ${nextTemplate}`;
        
        // Keep logs size limited to prevent memory bloat or layout performance hits
        if (prevLogs.length > 50) {
          return [...prevLogs.slice(15), formattedLog];
        }
        return [...prevLogs, formattedLog];
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <section className="max-width-container" style={{
      paddingTop: '64px',
      paddingBottom: '80px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      {/* Premium Badge */}
      <div style={{ marginBottom: '24px' }}>
        <span className="badge">
          <img src={`${import.meta.env.BASE_URL}svgs/arrow-trending-up.svg`} alt="" width="14" height="14" style={{ marginRight: '6px' }} />
          RELEASE V1.0.4: ZERO-LATENCY AUTOMATIONS
        </span>
      </div>

      {/* Main Hero Header */}
      <h1 style={{
        fontSize: 'clamp(2.25rem, 5vw, 4rem)',
        lineHeight: '1.1',
        maxWidth: '900px',
        marginBottom: '24px',
        letterSpacing: '-0.04em'
      }}>
        ZERO-LATENCY DATA STREAMING.<br/>
        <span style={{
          background: 'linear-gradient(90deg, var(--accent), var(--accent-alt))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(255, 200, 1, 0.15)'
        }}>ORCHESTRATED BY AI.</span>
      </h1>

      {/* Sub-headline */}
      <p style={{
        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
        color: 'var(--text-secondary)',
        maxWidth: '700px',
        marginBottom: '40px',
        fontWeight: '400',
        lineHeight: '1.6'
      }}>
        Build, scale, and self-heal production data pipelines in real-time. Apex automates mapping, formatting, and schema validation with hardware-isolated execution.
      </p>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '64px'
      }}>
        <a href="#pricing" className="btn btn-primary">
          GET STARTED FREE
          <img src={`${import.meta.env.BASE_URL}svgs/chevron-right.svg`} alt="" width="14" height="14" style={{ filter: 'invert(1)' }} />
        </a>
        <a href="#features" className="btn btn-secondary">
          EXPLORE FEATURES
          <img src={`${import.meta.env.BASE_URL}svgs/cog-8-tooth.svg`} alt="" width="14" height="14" />
        </a>
      </div>

      {/* Interactive Developer Shell / Terminal Block */}
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '840px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border)',
        textAlign: 'left'
      }}>
        {/* Terminal Header */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          padding: '12px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border)'
        }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#EF4444' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#F59E0B' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10B981' }} />
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em'
          }}>
            apex-daemon --mode stream
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--success)',
              display: 'inline-block',
              animation: 'pulse 1.5s infinite alternate'
            }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--success)' }}>
              LIVE
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={terminalBodyRef}
          style={{
            padding: '20px',
            height: '240px',
            overflowY: 'auto',
            backgroundColor: '#070f14',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: '1.5',
            color: '#38bdf8',
            scrollBehavior: 'smooth'
          }}
        >
          {logs.map((log, index) => {
            let color = '#94a3b8'; // Default grey
            if (log.includes('[OK]')) color = '#34d399'; // Success green
            if (log.includes('[HEAL]')) color = 'var(--accent-alt)'; // Orange warning
            if (log.includes('[METRIC]')) color = '#a78bfa'; // Purple metric
            if (log.includes('[AI]')) color = 'var(--accent)'; // Yellow AI agent
            if (log.startsWith('//')) color = '#475569'; // Muted comment

            return (
              <div key={index} style={{ color, marginBottom: '6px', whiteSpace: 'pre-wrap' }}>
                {log}
              </div>
            );
          })}
        </div>
      </div>


      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          from { opacity: 0.4; }
          to { opacity: 1; }
        }
      `}} />
    </section>
  );
}
