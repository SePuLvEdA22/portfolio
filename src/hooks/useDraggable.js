import { useState, useRef } from 'react';

export default function useDraggable(initialPos) {
  const [pos, setPos] = useState(initialPos);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const ref = useRef(null);

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

  return [ref, pos, onMouseDown];
}
