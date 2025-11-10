import React from "react";

const scale = 15;

const ConnectionLine = ({ from, to }) => {
  const getCenter = (node) => {
    if (node.type === "label") {
      const r = node.radius || 40;
      return [node.x + r, node.y + r];
    } else {
      const w = (node.widthIn || 10) * scale;
      const h = (node.heightIn || 10) * scale;
      return [node.x + w / 2, node.y + h / 2];
    }
  };

  const [x1, y1] = getCenter(from);
  const [x2, y2] = getCenter(to);

  const minX = Math.min(x1, x2);
  const minY = Math.min(y1, y2);
  const width = Math.abs(x2 - x1);
  const height = Math.abs(y2 - y1);

  return (
    <svg
      className="connection-line"
      style={{
        position: "absolute",
        left: minX,
        top: minY,
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 1
      }}
      width={width}
      height={height}
    >
      <line
        x1={x1 - minX}
        y1={y1 - minY}
        x2={x2 - minX}
        y2={y2 - minY}
        stroke="#FF3CAC"
        strokeWidth="1"
      />
    </svg>
  );
};

export default ConnectionLine;
