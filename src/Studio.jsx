import React, { useState, useRef, useEffect } from 'react';
import Node from './Node';
import ConnectionLine from './ConnectionLine';
import DetailPopup from './DetailPopup';
import images from './ImageData';

const Studio = () => {
  const [selected, setSelected] = useState(null);
  const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;
  const margin = 50;
  const [nodes, setNodes] = useState(() => {
    return images.map(n => ({
      ...n,
      x:  n.x !== undefined ? n.x : Math.floor(Math.random() * (CANVAS_WIDTH - margin * 2)) + margin,
      y:  n.y !== undefined ? n.y : Math.floor(Math.random() * (CANVAS_HEIGHT - margin * 2)) + margin
    }));
  });
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const mapRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const activeNode = useRef(null);
  const offset = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const floatTime = useRef(0);
  const dragDistance = useRef(0);
  

  useEffect(() => {
    const map = mapRef.current;
    const handleWheel = (e) => {
      e.preventDefault();
    };
    map.addEventListener('wheel', handleWheel);
    return () => map.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    const animate = () => {
      floatTime.current += 0.005;
      setNodes(prev => {
        const updated = prev.map((node, i) => {
          if (activeNode.current === i) return node;
          const floatOffset = Math.sin(floatTime.current + i * 0.5) * 0.15;
          const baseY = node._originalY !== undefined ? node._originalY : node.y;
          return { ...node, y: baseY + floatOffset };
        });

        if (activeNode.current !== null) {
          const dragged = updated[activeNode.current];
          dragged.connections?.forEach((cid) => {
            const targetIndex = updated.findIndex(n => n.id === cid);
            if (targetIndex !== -1) {
              const target = updated[targetIndex];
              const dx = dragged.x - target.x;
              const dy = dragged.y - target.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist > 0 && dist < 200) {
                const strength = 0.07 * (1 - dist / 200);
                updated[targetIndex] = {
                  ...target,
                  x: target.x + dx * strength,
                  y: target.y + dy * strength
                };

                target.connections?.forEach((ccid) => {
                  const ccIndex = updated.findIndex(n => n.id === ccid);
                  if (ccIndex !== -1 && ccIndex !== activeNode.current && ccIndex !== targetIndex) {
                    const cc = updated[ccIndex];
                    const ddx = target.x - cc.x;
                    const ddy = target.y - cc.y;
                    const ddist = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (ddist > 0 && ddist < 200) {
                      const ripple = 0.04 * (1 - ddist / 200);
                      updated[ccIndex] = {
                        ...cc,
                        x: cc.x + ddx * ripple,
                        y: cc.y + ddy * ripple
                      };
                    }
                  }
                });
              }
            }
          });
        }

        return updated;
      });
      animationFrame.current = requestAnimationFrame(animate);
    };
    animationFrame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX - transform.x,
      y: e.clientY - transform.y
    };
  };

  const handleMouseMove = (e) => {
    if (activeNode.current !== null) {
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;

      const dx = e.movementX;
      const dy = e.movementY;
      dragDistance.current += Math.sqrt(dx * dx + dy * dy);

      setNodes(prev => prev.map((node, idx) =>
        idx === activeNode.current
          ? { ...node, x: newX, y: newY, _originalY: newY }
          : node
      ));
    } else if (isDragging.current) {
      setTransform(prev => ({
        ...prev,
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      }));
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    activeNode.current = null;
  };

  const handleNodeMouseDown = (index, e) => {
    e.stopPropagation();
    activeNode.current = index;
    offset.current = {
      x: e.clientX - nodes[index].x,
      y: e.clientY - nodes[index].y
    };
    dragDistance.current = 0;
  };

  return (
    <div className="container">
      <div
        className="network-map"
        ref={mapRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
          position: 'relative'
        }}
      >
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <Node
              node={node}
              wasDragged={dragDistance.current >= 5}
              onClick={() => {
                if (node.type !== "label") setSelected(node);
              }}              
              onMouseDown={(e) => handleNodeMouseDown(i, e)}
            />
            {node.connections.map((cid, j) => {
              const target = nodes.find(n => n.id === cid);
              if (!target) return null;
              return <ConnectionLine key={j} from={node} to={target} />;
            })}
          </React.Fragment>
        ))}
      </div>
      <DetailPopup selected={selected} onClose={() => setSelected(null)} />
      <div className="detail-panel">
  {[...nodes]
    .filter((node) => node.type !== "label")
    .reverse()
    .map((node, index) => (
      <div key={index} className="mobile-artwork">
        <img src={node.fullImage} alt={node.title} />
        <h2 className="detail-title">{node.title}</h2>
        <p className="detail-description">{node.description}</p>
        {node.dimensions && (
          <p className="detail-dimensions">{node.dimensions}</p>
        )}
      </div>
  ))}
</div>

    </div>
  );
};

export default Studio;