import React from "react";

const Node = ({ node, onClick, onMouseDown, wasDragged }) => {
  const handleClick = (e) => {
    if (!wasDragged) onClick();
  };

  const scale = 15;
  const widthPx = node.widthIn ? node.widthIn * scale : 150;
  const heightPx = node.heightIn ? node.heightIn * scale : 100;

  if (node.type === "label") {
    const radius = node.radius || 30;
    return (
      <div
        className="label-node"
        style={{
          top: node.y,
          left: node.x,
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
        onClick={handleClick}
        onMouseDown={onMouseDown}
      >
        <span className="label-text">{node.label}</span>
      </div>
    );
  }

  return (
    <div
      className="node-rect"
      style={{
        top: node.y,
        left: node.x,
        position: "absolute",
        backgroundImage: `url(${node.thumbnail})`,
        backgroundSize: "cover",
        width: `${widthPx}px`,
        height: `${heightPx}px`,
        cursor: "pointer"
      }}
      onMouseDown={onMouseDown}
      onClick={handleClick}
    />
  );
};

export default Node;
