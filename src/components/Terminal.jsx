import React, { useState, useRef, useEffect } from "react";
import "../App.css";

const helpText = `Available commands:\nabout - About Me\ncv - CV\ncertificates - Certificates\nclear - Clear terminal`;

export default function Terminal({ onOpenApp, onClose }) {
  const [lines, setLines] = useState(["Welcome to the Portfolio Terminal!", helpText]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [lines]);

  const handleCommand = (cmd) => {
    let output = "";
    switch (cmd) {
      case "about":
        onOpenApp("about");
        output = "Opening About Me...";
        break;
      case "cv":
        onOpenApp("cv");
        output = "Opening CV...";
        break;
      case "certificates":
        onOpenApp("certificates");
        output = "Opening Certificates...";
        break;
      case "clear":
        setLines([]);
        return;
      case "help":
        output = helpText;
        break;
      default:
        output = `Command not found: ${cmd}`;
    }
    setLines((prev) => [...prev, "> " + cmd, output]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input.trim());
      setInput("");
    }
  };

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span>Terminal</span>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {lines.map((line, i) => (
          <div key={i} className="terminal-line">{line}</div>
        ))}
      </div>
      <div className="terminal-input-area">
        <span>&gt;</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input"
          autoFocus
        />
      </div>
    </div>
  );
} 