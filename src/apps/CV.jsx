import React from "react";

export default function CV() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>My CV</h2>
      <a
        href={import.meta.env.BASE_URL + "CV/CV Amitojsingh Dhillon.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: 18, color: '#1976d2', textDecoration: 'underline' }}
      >
        Download/View CV (PDF)
      </a>
    </div>
  );
} 