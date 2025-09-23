import React, { useEffect, useState } from 'react';
import DraggableIcon from './DraggableIcon';

const ICON_SIZE = 70;
const ICON_MARGIN = 18;

function getGridPositions(iconCount, width, height) {
  // Calculate max columns and rows based on available space
  const maxCols = Math.max(1, Math.floor((width - ICON_MARGIN) / (ICON_SIZE + ICON_MARGIN)));
  const maxRows = Math.max(1, Math.floor((height - ICON_MARGIN) / (ICON_SIZE + ICON_MARGIN)));
  const cols = Math.min(maxCols, Math.ceil(iconCount / maxRows));
  const rows = Math.ceil(iconCount / cols);
  const positions = [];
  for (let i = 0; i < iconCount; i++) {
    const col = Math.floor(i / rows);
    const row = i % rows;
    positions.push({
      left: ICON_MARGIN + col * (ICON_SIZE + ICON_MARGIN),
      top: ICON_MARGIN + row * (ICON_SIZE + ICON_MARGIN),
    });
  }
  return positions;
}

export default function Desktop({ icons }) {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const onResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const positions = getGridPositions(icons.length, dimensions.width, dimensions.height);

  return (
    <div className="xp-desktop-icons" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {icons.map((icon, idx) => (
        <DraggableIcon
          key={icon.key}
          icon={icon.icon}
          label={icon.label}
          onOpen={icon.onOpen}
          openable={icon.openable}
          initialPos={positions[idx]}
        />
      ))}
    </div>
  );
}
