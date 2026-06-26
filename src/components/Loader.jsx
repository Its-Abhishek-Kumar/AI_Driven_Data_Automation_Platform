import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Initiate fade-out transition after 200ms
    const timer = setTimeout(() => {
      setHidden(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: 'spin 3s linear infinite' }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
        <span>APEX.IO</span>
      </div>
      <div className="loader-spinner" />
    </div>
  );
}
