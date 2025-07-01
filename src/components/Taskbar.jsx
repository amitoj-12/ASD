import React from "react";
import "../App.css";

const icons = [
  { name: "Terminal", icon: "💻", app: "terminal" },
  { name: "About Me", icon: "👤", app: "about" },
  { name: "CV", icon: "📄", app: "cv" },
  { name: "Certificates", icon: "🎓", app: "certificates" },
];

export default function Taskbar({ onOpenApp }) {
  return (
    <div className="taskbar">
      {icons.map(({ name, icon, app }) => (
        <button
          key={app}
          className="taskbar-icon"
          title={name}
          onClick={() => onOpenApp(app)}
        >
          <span style={{ fontSize: 24 }}>{icon}</span>
        </button>
      ))}
    </div>
  );
} 