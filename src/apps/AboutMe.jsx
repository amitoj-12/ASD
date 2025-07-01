import React, { useState } from "react";

export default function AboutMe() {
  const [section, setSection] = useState("profile");

  return (
    <div style={{ display: 'flex', minHeight: 400, maxHeight: 500 }}>
      {/* Navigation Panel */}
      <nav style={{
        minWidth: 160,
        borderRight: '1px solid #444',
        padding: '24px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        background: '#222b',
        borderRadius: '12px 0 0 12px',
        height: '100%',
      }}>
        <button onClick={() => setSection('profile')} style={{ background: section === 'profile' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Profile</button>
        <button onClick={() => setSection('achievements')} style={{ background: section === 'achievements' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Achievements and Participation</button>
        <button onClick={() => setSection('github')} style={{ background: section === 'github' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>GitHub</button>
        <button onClick={() => setSection('linkedin')} style={{ background: section === 'linkedin' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>LinkedIn</button>
        <button onClick={() => setSection('contact')} style={{ background: section === 'contact' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Contact</button>
        <button onClick={() => setSection('mail')} style={{ background: section === 'mail' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Mail</button>
        <button onClick={() => setSection('education')} style={{ background: section === 'education' ? '#444' : 'none', color: 'white', border: 'none', padding: '10px 18px', textAlign: 'left', cursor: 'pointer', borderRadius: 6, fontWeight: 500, fontSize: 16 }}>Education</button>
      </nav>
      {/* Section Content */}
      <div style={{ flex: 1, padding: '32px 36px', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        {section === 'profile' && (
          <>
            <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 28, marginBottom: 12, color: '#fff' }}>Profile</h2>
            <p style={{ fontSize: 17, color: '#eee', marginBottom: 18, lineHeight: 1.6, textAlign: 'left', maxWidth: 650 }}>
              Hi, I'm <b style={{ color: '#4CAF50' }}>Amitoj Singh Dhillon</b>, an Electronics and Telecommunication Engineering student from Pune, India, passionate about creating real-world tech solutions using Embedded Systems, IoT, and Artificial Intelligence.
            </p>
            <p style={{ fontSize: 16, color: '#ccc', marginBottom: 24, lineHeight: 1.6, textAlign: 'left', maxWidth: 650 }}>
              I love combining hardware and software to build smart, meaningful projects that help people in everyday life. From wearable devices for the visually impaired to BLE-based room tracking for dementia care, my work focuses on making technology useful and accessible.
            </p>
            <h3 style={{marginTop: 0, marginBottom: 10, color: '#ffb347', fontWeight: 600, fontSize: 20}}>What I Do</h3>
            <ul style={{ color: '#eee', fontSize: 15, marginBottom: 24, paddingLeft: 22, textAlign: 'left', maxWidth: 600, lineHeight: 1.7 }}>
              <li>Develop embedded systems using <b>Raspberry Pi</b> and <b>ESP32</b></li>
              <li>Create object detection systems with <b>YOLOv8</b>, <b>Roboflow</b>, and <b>TTS</b></li>
              <li>Build real-time tracking and alert systems using <b>BLE</b>, <b>MQTT</b>, and <b>NRF24L01</b></li>
              <li>Program in <b>C</b> and <b>Python</b> to interface with sensors, networks, and cloud APIs</li>
            </ul>
            <h3 style={{marginTop: 0, marginBottom: 10, color: '#4CAF50', fontWeight: 600, fontSize: 20}}>Current Projects</h3>
            <ul style={{ color: '#eee', fontSize: 15, marginBottom: 24, paddingLeft: 22, textAlign: 'left', maxWidth: 600, lineHeight: 1.7 }}>
              <li><b>PiSight</b> – Smart Glasses for Object Detection and Audio Feedback</li>
              <li><b>Healink</b> – BLE-Based Dementia Patient Tracker and Medicine Alert System</li>
            </ul>
            <p style={{ fontSize: 15, color: '#bbb', marginTop: 10, textAlign: 'left', maxWidth: 600 }}>
              I enjoy learning by building and sharing, and I'm always looking to push the boundaries of what's possible with simple, affordable hardware.
            </p>
          </>
        )}
        {section === 'achievements' && (
          <>
            <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 24, marginBottom: 16, color: '#fff', textAlign: 'left', maxWidth: 600 }}>Achievements and Participation</h2>
            <ul style={{ color: '#eee', fontSize: 16, marginBottom: 24, paddingLeft: 24, textAlign: 'left', maxWidth: 600, lineHeight: 1.7 }}>
              <li>🏆 Winner in Intra-college Hackathon - Hardware Section</li>
              <li>🛠️ Workshop on PLC System by PMS</li>
              <li>💻 Workshop on GitHub Introduction</li>
              <li>🎓 Participated in Spectrum 2023 - State Level Technical Symposium</li>
              <li>🥇 Winner of Mini Project Competition</li>
            </ul>
          </>
        )}
        {section === 'github' && (
          <>
            <h2>GitHub</h2>
            <a href="https://github.com/amitoj-12" target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50', fontWeight: 'bold', fontSize: 18, textDecoration: 'none' }}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 8 }}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
              amitoj-12
            </a>
          </>
        )}
        {section === 'linkedin' && (
          <>
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/amitojsingh-d-085a33259/" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', fontWeight: 'bold', fontSize: 18, textDecoration: 'none' }}>
              <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: 8 }}><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              amitojsingh-d-085a33259
            </a>
          </>
        )}
        {section === 'contact' && (
          <>
            <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 24, marginBottom: 12, color: '#fff' }}>Contact</h2>
            <p style={{ fontSize: 16, color: '#eee', marginBottom: 10 }}>Phone: <b>+91-9765664422</b></p>
            <p style={{ fontSize: 16, color: '#eee', marginBottom: 10 }}>Location: Pune, India</p>
          </>
        )}
        {section === 'mail' && (
          <>
            <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 24, marginBottom: 12, color: '#fff' }}>Mail</h2>
            <p style={{ fontSize: 16, color: '#eee', marginBottom: 10 }}>Email: <a href="mailto:amitojsingh.d12@gmail.com" style={{ color: '#4CAF50', textDecoration: 'underline' }}>amitojsingh.d12@gmail.com</a></p>
          </>
        )}
        {section === 'education' && (
          <>
            <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 24, marginBottom: 12, color: '#fff' }}>Education</h2>
            <ul style={{ color: '#eee', fontSize: 15, marginBottom: 24, paddingLeft: 22, textAlign: 'left', maxWidth: 600, lineHeight: 1.7 }}>
              <li><b>Bachelor of Engineering (B.E.)</b> in Electronics and Telecommunication Engineering (EnTC)<br/>DY Patil Institute of Engineering, Management and Research, Pune, India</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
} 