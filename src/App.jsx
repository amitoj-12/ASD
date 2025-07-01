import React, { useState } from "react";
import "./index.css";
import Taskbar from "./components/Taskbar";
import SystemTray from "./components/SystemTray";
import Terminal from "./components/Terminal";
import Window from "./components/Window";
import AboutMe from "./apps/AboutMe";
import CV from "./apps/CV";
import Certificates from "./apps/Certificates";

function App() {
  const [openApps, setOpenApps] = useState([]); // e.g. ["terminal", "about"]

  const openApp = (app) => {
    setOpenApps((prev) => (prev.includes(app) ? prev : [...prev, app]));
  };

  const closeApp = (app) => {
    setOpenApps((prev) => prev.filter((a) => a !== app));
  };

  // Render app windows
  const renderAppWindow = (app) => {
    switch (app) {
      case "about":
        return (
          <Window key="about" title="About Me" onClose={() => closeApp("about")}> <AboutMe /> </Window>
        );
      case "cv":
        return (
          <Window key="cv" title="CV" onClose={() => closeApp("cv")}> <CV /> </Window>
        );
      case "certificates":
        return (
          <Window key="certificates" title="Certificates" onClose={() => closeApp("certificates")}> <Certificates /> </Window>
        );
      case "projects":
        return (
          <Window key="projects" title="Projects" onClose={() => closeApp("projects")}> 
            <div style={{ padding: '24px 32px', maxWidth: 600, height: 400, overflowY: 'auto' }}>
               <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 26, marginBottom: 18, color: '#fff' }}>Projects</h2>
               <div style={{ background: '#23272e', borderRadius: 10, padding: '20px 24px', marginBottom: 18, boxShadow: '0 2px 8px #0003', border: '1px solid #333' }}>
                 <h3 style={{ color: '#4CAF50', fontWeight: 600, fontSize: 20, marginBottom: 8 }}>PiSight – A Smart Object Detection System</h3>
                 <p style={{ color: '#eee', fontSize: 15, marginBottom: 10 }}>
                   PiSight is a smart object detection system designed to assist visually impaired users by detecting nearby objects using a minimal, low-cost setup. It uses a Raspberry Pi Zero 2W and YOLOv8 for real-time object detection, with voice feedback via Bluetooth speaker.
                 </p>
                 <a href="https://www.linkedin.com/posts/amitojsingh-d-085a33259_iot-assistivetech-smartglasses-activity-7344784205328871425-KQC-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-wz6UBtdKkfCmFu-pFJw6JTOrXHUxXYlw" target="_blank" rel="noopener noreferrer" style={{ color: '#0A66C2', fontWeight: 'bold', fontSize: 16, textDecoration: 'underline' }}>
                   View on LinkedIn
                 </a>
               </div>
               <div style={{ background: '#23272e', borderRadius: 10, padding: '20px 24px', marginBottom: 18, boxShadow: '0 2px 8px #0003', border: '1px solid #333' }}>
                 <h3 style={{ color: '#ffb347', fontWeight: 600, fontSize: 20, marginBottom: 8 }}>Healink – BLE-Based Dementia Patient Tracker & Medicine Alert System</h3>
                 <p style={{ color: '#eee', fontSize: 15, marginBottom: 10 }}>
                   Healink is a BLE-based system designed for dementia patient tracking and medicine alerts. It uses Bluetooth Low Energy for real-time location tracking and timely medicine reminders, improving patient safety and care.
                 </p>
                 {/* Add a LinkedIn or GitHub link here if available */}
               </div>
            </div>
          </Window>
        );
      case "skills":
        return (
          <Window key="skills" title="Skills" onClose={() => closeApp("skills")}> 
            <div style={{ padding: '28px 36px', maxWidth: 600 }}>
              <h2 style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: 26, marginBottom: 18, color: '#fff' }}>Skills</h2>
              <ul style={{ color: '#eee', fontSize: 16, marginBottom: 24, paddingLeft: 24, textAlign: 'left', maxWidth: 600, lineHeight: 1.7 }}>
                <li><b>Languages:</b> C, Embedded C, Python</li>
                <li><b>Microcontroller:</b> Arduino, ESP32</li>
                <li><b>Embedded Tools:</b> Arduino IDE</li>
                <li><b>Protocols:</b> UART, MQTT, I2C, GPIO</li>
                <li><b>IoT Cloud:</b> Hive MQ</li>
              </ul>
            </div>
          </Window>
        );
      case "terminal":
        return (
          <Terminal key="terminal" onOpenApp={openApp} onClose={() => closeApp("terminal")} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="desktop">
      {/* System Tray */}
      <SystemTray />
      
      {/* Ubuntu-style App Tray */}
      <div className="app-tray">
        <div className="tray-icon" onClick={() => openApp("about")}> <span role="img" aria-label="About Me">👤</span> </div>
        <div className="tray-icon" onClick={() => openApp("cv")}> <span role="img" aria-label="CV">📄</span> </div>
        <div className="tray-icon" onClick={() => openApp("certificates")}> <span role="img" aria-label="Certificates">🎓</span> </div>
        <div className="tray-icon" onClick={() => openApp("projects")}> <span role="img" aria-label="Projects">🚀</span> </div>
        <div className="tray-icon" onClick={() => openApp("skills")}> <span role="img" aria-label="Skills">⚡</span> </div>
        <div className="tray-icon" onClick={() => openApp("terminal")}> <span role="img" aria-label="Terminal">💻</span> </div>
      </div>
      
      {/* App Windows */}
      {openApps.map(renderAppWindow)}
    </div>
  );
}

export default App;
