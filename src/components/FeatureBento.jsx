import React, { useState } from 'react';

const FEATURES = [
  {
    id: 0,
    title: "Real-Time Stream Ingestion",
    badge: "CORE ENGINE",
    icon: "/svgs/arrow-trending-up.svg",
    gridClass: "bento-item-large",
    description: "Ingest high-throughput logs and transactional updates from Apache Kafka, AWS Kinesis, or database CDC nodes. Built-in flow control adjusts rates dynamically, matching consumption limits with sub-millisecond latencies.",
    visual: (
      <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#0c161c',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.05)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#10b981', marginBottom: '8px' }}>
          <span>● KAFKA_INGEST: ACTIVE</span>
          <span>430,210 EPS</span>
        </div>
        <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            height: '100%',
            width: '60%',
            backgroundColor: '#10b981',
            borderRadius: '2px',
            animation: 'loadProgress 2s infinite linear'
          }} />
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Self-Healing Workflows",
    badge: "AUTONOMOUS",
    icon: "/svgs/arrow-path.svg",
    gridClass: "",
    description: "AI agents continuously monitor pipeline logs. If schema drift, format errors, or type anomalies occur, Apex isolates the payload, generates corrections, and heals the node instantly without interrupting stream flow.",
    visual: (
      <div style={{
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '10px',
        backgroundColor: '#0c161c',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#ef4444' }}>FAIL_STAMP</span>
        <span style={{ display: 'inline-flex', animation: 'spin 2s linear infinite' }}>
          <img src="/svgs/arrow-path.svg" alt="" width="16" height="16" style={{ filter: 'invert(1)' }} />
        </span>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981' }}>RESOLVED</span>
      </div>
    )
  },
  {
    id: 2,
    title: "Autonomous Schema Mapping",
    badge: "COGNITIVE LAYER",
    icon: "/svgs/link.svg",
    gridClass: "bento-item-vertical",
    description: "Map relational variables across disparate target destinations automatically. Neural nodes match source columns, identify primary key relations, and configure transformation paths with over 99.8% semantic mapping precision.",
    visual: (
      <div style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '16px',
        backgroundColor: '#0c161c',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>source_id (int)</span>
          <img src="/svgs/link-solid.svg" alt="" width="12" height="12" style={{ filter: 'invert(1)' }} />
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>userId (varchar)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>created_at (ts)</span>
          <img src="/svgs/link-solid.svg" alt="" width="12" height="12" style={{ filter: 'invert(1)' }} />
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>timestamp (epoch)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.7rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>amount_cents (int)</span>
          <img src="/svgs/link-solid.svg" alt="" width="12" height="12" style={{ filter: 'invert(1)' }} />
          <span style={{ fontSize: '0.7rem', color: '#10b981', fontFamily: 'var(--font-mono)' }}>price (decimal)</span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Local Developer Sandbox",
    badge: "PLAYGROUND",
    icon: "/svgs/cog-8-tooth.svg",
    gridClass: "bento-item-large",
    description: "Launch offline dockerized instances of Apex pipelines. Trigger mock event generators, trace transformation costs, analyze memory heaps, and monitor layout execution directly from your command terminal.",
    visual: (
      <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#070f14',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.05)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: '#f4f3ec'
      }}>
        <span style={{ color: '#475569' }}>$</span> apex dev --sandbox<br />
        <span style={{ color: 'var(--accent)' }}>[DEV]</span> local daemon listening on port 8080<br />
        <span style={{ color: '#10b981' }}>[OK]</span> hot reload active. watching changes...
      </div>
    )
  }
];

export default function FeatureBento() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="features" style={{
      padding: '80px 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'rgba(15, 30, 38, 0.3)'
    }}>
      <div className="max-width-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="badge" style={{ marginBottom: '16px' }}>THE PLATFORM</span>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
            ENGINEERED FOR ABSOLUTE CONTROL
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Apex pairs high-performance streaming architectures with autonomous AI coordinators. Build responsive, self-maintaining pipelines.
          </p>
        </div>

        {/* Bento Grid / Mobile Accordion Wrapper */}
        <div className="bento-accordion-container">
          <div className="bento-grid">
            {FEATURES.map((feature, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={feature.id}
                  className={`bento-card glass-panel ${isActive ? 'active' : ''} ${feature.gridClass}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '220px'
                  }}
                >
                  {/* Mobile Accordion Header controls */}
                  <button
                    className="accordion-toggle-header"
                    aria-expanded={isActive}
                    onClick={(e) => {
                      // Prevent duplicate toggle triggers if already active
                      e.stopPropagation();
                      setActiveIndex(isActive ? -1 : index);
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={feature.icon} alt="" width="20" height="20" style={{ filter: 'drop-shadow(0 0 4px var(--accent))' }} />
                      <span className="accordion-title">{feature.title}</span>
                    </div>
                    <img
                      src="/svgs/chevron-down.svg"
                      alt=""
                      className="accordion-icon"
                      width="14"
                      height="14"
                      style={{ filter: 'invert(1)' }}
                    />
                  </button>

                  {/* Mobile Accordion Expandable Panel */}
                  <div className="accordion-panel">
                    <div className="accordion-content-inner">
                      <div style={{ marginBottom: '8px' }}>
                        <span className="badge">{feature.badge}</span>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                        {feature.description}
                      </p>
                      {feature.visual}
                    </div>
                  </div>

                  {/* Desktop Card Layout */}
                  <div className="bento-content-desktop">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                      <img src={feature.icon} alt="" width="24" height="24" style={{ filter: 'drop-shadow(0 0 4px var(--accent))' }} />
                      <span className="badge">{feature.badge}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                        {feature.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        {feature.description}
                      </p>
                      {feature.visual}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loadProgress {
          0% { left: -60%; }
          100% { left: 100%; }
        }
      `}} />
    </section>
  );
}
