import React, { useState } from "react";

export default function Certificates() {
  const certificates = [
    "HACKATHON3.png",
    "HACKATHON.png",
    "Spectrum 2023.png",
    "Introduction to GITHUB.png",
    "Programable Logic Controller.png",
    "Digital Productivity.png",
    "Smart English Basics for proffesional.png",
    "Responsive Website.png"
  ];
  const [selected, setSelected] = useState(0);
  // Responsive: use window width to apply mobile classes
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;
  return (
    <div
      className={isMobile ? "certificates-mobile-stack" : undefined}
      style={isMobile ? undefined : { display: 'flex', height: 400, maxWidth: 700, margin: '0 auto', background: '#23272e', borderRadius: 12, boxShadow: '0 2px 12px #0005', overflow: 'hidden' }}
    >
      {/* Left Panel */}
      <div
        className={isMobile ? "certificates-mobile-panel" : undefined}
        style={isMobile ? undefined : { width: 220, background: '#181c1f', padding: '18px 0', display: 'flex', flexDirection: 'column', gap: 6, borderRight: '1px solid #333' }}
      >
        {certificates.map((file, idx) => (
          <button
            key={file}
            onClick={() => setSelected(idx)}
            className={isMobile && selected === idx ? "selected" : undefined}
            style={isMobile ? undefined : {
              background: selected === idx ? '#333b' : 'none',
              color: selected === idx ? '#4CAF50' : '#fff',
              border: 'none',
              padding: '10px 18px',
              textAlign: 'left',
              cursor: 'pointer',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: 15,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {file.replace(/\.[^/.]+$/, "")}
          </button>
        ))}
      </div>
      {/* Right Image Display */}
      <div style={isMobile ? { width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#23272e' } : { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#23272e' }}>
        <img
          className={isMobile ? "certificates-mobile-image" : undefined}
          src={import.meta.env.BASE_URL + "Certificate/" + certificates[selected]}
          alt={certificates[selected].replace(/\.[^/.]+$/, "")}
          style={isMobile ? undefined : { maxWidth: '90%', maxHeight: 340, borderRadius: 10, boxShadow: '0 2px 12px #0007', background: '#fff' }}
        />
      </div>
    </div>
  );
} 