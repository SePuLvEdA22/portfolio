import React from 'react';

export default function DesktopIcon({ icon, label, onOpen, openable }) {
  return (
    <div
      className="xp-desktop-icon"
      tabIndex={0}
      title={label}
      onDoubleClick={openable ? onOpen : undefined}
      onKeyDown={openable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen();
      } : undefined}
      style={openable ? { cursor: 'pointer' } : {}}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
}
