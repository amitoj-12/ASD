import React, { useState } from "react";

const certificates = [
  {
    name: "Smart English Basics for Professionals",
    file: "/Smart English Basics for proffesional.png"
  },
  {
    name: "Digital Productivity",
    file: "/Digital Productivity.png"
  },
  {
    name: "Responsive Website Development using Bootstrap Framework",
    file: "/Responsive Website Development using Bootstrap Framework.png"
  },
  {
    name: "Spectrum 2023",
    file: "/Spectrum 2023.jpeg"
  },
  {
    name: "HACKATHON 3.0",
    file: "/HACKATHON 3.0.jpeg"
  },
  {
    name: "Programable Logic Controller",
    file: "/Programable Logic Controller.jpeg"
  },
  {
    name: "HACKATHON 2.0",
    file: "/HACKATHON 2.0.jpeg"
  },
  {
    name: "Introduction to GITHUB",
    file: "/Introduction to GITHUB.jpeg"
  }
];

export default function Certificates() {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ display: 'flex', minHeight: 320, maxHeight: 480 }}>
      {/* Navigation Panel */}
      <nav style={{
        minWidth: 220,
        borderRight: '1px solid #444',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        background: '#222b',
        borderRadius: '10px 0 0 10px',
        height: '100%',
      }}>
        <h3 style={{ color: '#fff', margin: '0 0 12px 24px', fontSize: 18 }}>Certificates</h3>
        {certificates.map((cert, idx) => (
          <button
            key={cert.name}
            onClick={() => setSelected(idx)}
            style={{
              background: selected === idx ? '#444' : 'none',
              color: 'white',
              border: 'none',
              padding: '10px 18px',
              textAlign: 'left',
              cursor: 'pointer',
              borderRadius: 6,
              fontWeight: 500,
              fontSize: 15,
              marginLeft: 12,
              marginRight: 12
            }}
          >
            {cert.name}
          </button>
        ))}
      </nav>
      {/* Certificate Preview */}
      <div style={{ flex: 1, padding: '24px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'auto' }}>
        <h4 style={{ color: '#4CAF50', marginBottom: 16, fontSize: 18 }}>{certificates[selected].name}</h4>
        <img
          src={certificates[selected].file}
          alt={certificates[selected].name}
          style={{ maxWidth: '100%', maxHeight: 340, borderRadius: 8, boxShadow: '0 2px 8px #0006', border: '1px solid #333' }}
        />
      </div>
    </div>
  );
} 