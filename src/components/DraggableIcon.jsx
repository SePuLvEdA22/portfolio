
import React, { useRef, useState, useEffect } from 'react';

export default function DraggableIcon({ icon, label, onOpen, openable, initialPos }) {

  const [pos, setPos] = useState(initialPos || { top: 0, left: 0 });
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const iconRef = useRef(null);

  // Responsive icon size
  const [iconSize, setIconSize] = useState(window.innerWidth < 600 ? 48 : 70);
  const [imgSize, setImgSize] = useState(window.innerWidth < 600 ? 28 : 36);

  useEffect(() => {
    const onResize = () => {
      setIconSize(window.innerWidth < 600 ? 48 : 70);
      setImgSize(window.innerWidth < 600 ? 28 : 36);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Mouse events
  const onMouseDown = (e) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - pos.left,
      y: e.clientY - pos.top,
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  const onMouseMove = (e) => {
    if (!dragging.current) return;
    setPos({
      left: e.clientX - offset.current.x,
      top: e.clientY - offset.current.y,
    });
  };
  const onMouseUp = () => {
    dragging.current = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  // Touch events for mobile
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    dragging.current = true;
    offset.current = {
      x: touch.clientX - pos.left,
      y: touch.clientY - pos.top,
    };
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };
  const onTouchMove = (e) => {
    if (!dragging.current) return;
    const touch = e.touches[0];
    setPos({
      left: touch.clientX - offset.current.x,
      top: touch.clientY - offset.current.y,
    });
  };
  const onTouchEnd = () => {
    dragging.current = false;
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  useEffect(() => {
    // Cleanup in case component unmounts while dragging
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      dragging.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={iconRef}
      className="xp-desktop-icon"
      tabIndex={0}
      title={label}
      style={{
        position: 'absolute',
        left: pos.left,
        top: pos.top,
        cursor: openable ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: iconSize,
        height: iconSize,
        userSelect: 'none',
        fontSize: iconSize < 60 ? 12 : 14,
      }}
      onDoubleClick={openable ? onOpen : undefined}
      onKeyDown={openable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') onOpen();
      } : undefined}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <img src={icon} alt={label} style={{ width: imgSize, height: imgSize, marginBottom: 2, display: 'block' }} />
      <span style={{ textAlign: 'center', marginTop: 2 }}>{label}</span>
    </div>
  );
}
