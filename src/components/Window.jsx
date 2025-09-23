import React from 'react';
import useDraggable from '../hooks/useDraggable';

export default function Window({ title, children, initialPos, visible, onMinimize, onClose, onFocus, focused }) {
  const [ref, pos, onMouseDown] = useDraggable(initialPos);
  if (!visible) return null;
  return (
    <div
      ref={ref}
      className={`xp-window${focused ? ' xp-window-focused' : ''}`}
      style={{ top: pos.top, left: pos.left, zIndex: focused ? 100 : 2 }}
      onMouseDown={onFocus}
    >
      <div className="xp-title-bar" onMouseDown={onMouseDown} style={{ cursor: 'move' }}>
        <span className="xp-title-bar-text">{title}</span>
        <div className="xp-title-bar-controls">
          <button className="xp-btn" onClick={onMinimize} title="Minimize">
            <svg viewBox="0 0 12 12"><rect x="2" y="9" width="8" height="2" fill="#222"/></svg>
          </button>
          <button className="xp-btn" disabled title="Maximize">
            <svg viewBox="0 0 12 12"><rect x="2" y="2" width="8" height="8" fill="none" stroke="#222" strokeWidth="1.5"/></svg>
          </button>
          <button className="xp-btn" onClick={onClose} title="Close">
            <svg viewBox="0 0 12 12"><line x1="3" y1="3" x2="9" y2="9" stroke="#a00" strokeWidth="2"/><line x1="9" y1="3" x2="3" y2="9" stroke="#a00" strokeWidth="2"/></svg>
          </button>
        </div>
      </div>
      <div className="xp-window-content">{children}</div>
    </div>
  );
}
