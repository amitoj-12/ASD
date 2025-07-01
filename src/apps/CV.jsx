import React from "react";

export default function CV() {
  return (
    <div style={{ padding: '24px 32px', maxWidth: 700 }}>
      <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 26, marginBottom: 18, color: '#fff' }}>CV</h2>
      <a
        href="/CV Amitojsingh Dhillon.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: 18, textDecoration: 'underline', marginBottom: 18, display: 'inline-block' }}
      >
        Download my CV (PDF)
      </a>
      <div style={{ marginTop: 24, border: '1px solid #333', borderRadius: 8, boxShadow: '0 2px 8px #0006', overflow: 'hidden', background: '#23272e' }}>
        <iframe
          src="/CV Amitojsingh Dhillon.pdf"
          title="CV Amitoj Singh Dhillon"
          width="100%"
          height="500px"
          style={{ border: 'none', borderRadius: 8 }}
        />
      </div>
    </div>
  );
} 