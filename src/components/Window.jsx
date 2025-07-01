import React from "react";
import "../App.css";

export default function Window({ title, children, onClose }) {
  return (
    <div className="app-window">
      <div className="window-header">
        <span>{title}</span>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
} 