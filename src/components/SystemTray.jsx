import React, { useState, useEffect } from "react";

export default function SystemTray() {
  const [time, setTime] = useState(new Date());
  const [battery, setBattery] = useState({ level: null, charging: null });
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    // Battery API
    if (navigator.getBattery) {
      navigator.getBattery().then(bat => {
        function updateBattery() {
          setBattery({ level: bat.level, charging: bat.charging });
        }
        updateBattery();
        bat.addEventListener('levelchange', updateBattery);
        bat.addEventListener('chargingchange', updateBattery);
      });
    }

    return () => {
      clearInterval(timer);
      window.removeEventListener('online', () => setIsOnline(true));
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Placeholder handlers for accessibility
  const handleWifiClick = () => { alert('WiFi settings (placeholder)'); };
  const handleBatteryClick = () => { alert('Battery info (placeholder)'); };
  const handleVolumeClick = () => { alert('Volume settings (placeholder)'); };
  const handleLogout = () => {
    window.close();
    setTimeout(() => {
      if (!window.closed) {
        window.location.href = 'https://www.google.com';
      }
    }, 300);
  };

  return (
    <div className="system-tray">
      <div
        className="system-icon"
        title={isOnline ? "Online" : "Offline"}
        tabIndex="0"
        role="button"
        aria-label={isOnline ? "WiFi: Online" : "WiFi: Offline"}
        onClick={handleWifiClick}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleWifiClick(); }}
        style={{ color: isOnline ? '#4CAF50' : '#c00' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.95 3 4.21 4.34 1.2 6.6L3 9C5.5 7.12 8.62 6 12 6C15.38 6 18.5 7.12 21 9L22.8 6.6C19.79 4.34 16.05 3 12 3M12 9C9.3 9 6.81 9.89 4.8 11.4L6.6 13.8C8.1 12.67 9.97 12 12 12C14.03 12 15.9 12.67 17.4 13.8L19.2 11.4C17.19 9.89 14.7 9 12 9M12 15C10.65 15 9.4 15.45 8.4 16.2L12 21L15.6 16.2C14.6 15.45 13.35 15 12 15Z"/>
        </svg>
      </div>
      <div className="system-icon" title="Bluetooth">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 13L12 7V2H13V7L19 13L13 19V22H12V19L6 13M12 17.17L16.17 13L12 8.83V17.17Z"/>
        </svg>
      </div>
      <div
        className="system-icon"
        title={battery.level !== null ? `Battery: ${Math.round(battery.level * 100)}%${battery.charging ? ' (Charging)' : ''}` : "Battery status unavailable"}
        tabIndex="0"
        role="button"
        aria-label={battery.level !== null ? `Battery: ${Math.round(battery.level * 100)}%${battery.charging ? ' (Charging)' : ''}` : "Battery status unavailable"}
        onClick={handleBatteryClick}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleBatteryClick(); }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 20H8V6H16M16.67 4H15V2H9V4H7.33C6.6 4 6 4.6 6 5.33V20.67C6 21.4 6.6 22 7.33 22H16.67C17.4 22 18 21.4 18 20.67V5.33C18 4.6 17.4 4 16.67 4Z"/>
        </svg>
        {battery.level !== null && (
          <span style={{ fontSize: 12, marginLeft: 4, color: '#b5e853' }}>{Math.round(battery.level * 100)}%</span>
        )}
      </div>
      <div
        className="system-icon"
        title="Volume"
        tabIndex="0"
        role="button"
        aria-label="Volume settings"
        onClick={handleVolumeClick}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleVolumeClick(); }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.84 14 18.7V20.77C18 19.86 21 16.28 21 12C21 7.72 18 4.14 14 3.23M16.5 12C16.5 10.23 15.5 8.71 14 7.97V16C15.5 15.29 16.5 13.76 16.5 12M3 9V15H7L12 20V4L7 9H3Z"/>
        </svg>
      </div>
      <div
        className="system-icon"
        title="Logout"
        tabIndex="0"
        role="button"
        aria-label="Logout"
        onClick={handleLogout}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleLogout(); }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zm3-10H5c-1.1 0-2 .9-2 2v6h2V5h14v14H5v-4H3v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
      </div>
      <div className="time-date" title="Click for calendar">
        <div className="time">{formatTime(time)}</div>
        <div className="date">{formatDate(time)}</div>
      </div>
    </div>
  );
} 