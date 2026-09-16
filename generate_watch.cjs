const fs = require('fs');

// Generate the closest 61 coordinates (rings 0, 1, 2, 3, 4)
const D = 74;
const h = D * 0.866;
const coords = [];
for (let q = -5; q <= 5; q++) {
  for (let r = -5; r <= 5; r++) {
    const distSq = q*q + q*r + r*r;
    coords.push({q, r, distSq});
  }
}
coords.sort((a, b) => a.distSq - b.distSq);
const closestCoords = coords.slice(0, 61);

// Generate the nodes array
const icons = ['Cpu', 'Zap', 'Car', 'Landmark', 'HeartPulse', 'Scale', 'ShoppingCart', 'GraduationCap', 'Bed', 'Wifi', 'Factory', 'Film', 'Building2', 'ActivitySquare', 'Eye', 'BadgeCheck', 'AppWindow', 'Network', 'Key', 'Shield', 'Users', 'Radar', 'Activity', 'Globe', 'ShieldAlert'];
const colors = ['#ff3b30', '#ff9500', '#ffcc00', '#4cd964', '#5ac8fa', '#007aff', '#5856d6'];

let nodesStr = "const allNodes = [\n";
for (let i = 0; i < 61; i++) {
  const c = closestCoords[i];
  if (i === 0) {
    nodesStr += `  { id: 'center', isCenter: true, icon: <img src="/favicon.svg" alt="Fluxvell" className="center-logo-img" />, label: "Fluxvell", q: 0, r: 0, color: '#ffffff' },\n`;
  } else {
    const icon = icons[(i - 1) % icons.length];
    const color = colors[(i - 1) % colors.length];
    nodesStr += `  { id: 'n${i}', icon: <${icon} size={32} color="white" />, label: "${icon}", q: ${c.q}, r: ${c.r}, color: '${color}' },\n`;
  }
}
nodesStr += "];\n";

const newContent = `import React, { useEffect, useRef } from 'react';
import { 
  Shield, Users, Radar, Globe, ShieldAlert, Activity, 
  Building2, ActivitySquare, Eye, BadgeCheck, AppWindow, 
  Zap, Cpu, Target, Network, Key, Car, Landmark, HeartPulse,
  Scale, ShoppingCart, GraduationCap, Bed, Wifi, Factory, Film
} from 'lucide-react';
import './AnimatedNetwork.css';

const D = 74;
const h = D * 0.866;

${nodesStr}

export function AnimatedNetwork() {
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  
  // Drag physics state
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    let animationFrameId;
    
    const renderLoop = () => {
      // Apply momentum if not dragging
      if (!isDragging.current) {
        panOffset.current.x += velocity.current.x;
        panOffset.current.y += velocity.current.y;
        // Friction
        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;
      }
      
      // Add a tiny idle float
      timeRef.current += 0.005;
      const idleX = Math.cos(timeRef.current) * 10;
      const idleY = Math.sin(timeRef.current * 0.8) * 10;

      const totalPanX = panOffset.current.x + idleX;
      const totalPanY = panOffset.current.y + idleY;

      // Base center
      const baseX = 500; 
      const baseY = 340; 

      nodesRef.current.forEach((el, index) => {
        if (!el) return;
        const node = allNodes[index];
        
        const offsetX = D * (node.q + node.r / 2);
        const offsetY = h * node.r;

        // Calculate absolute position
        const x = baseX + offsetX + totalPanX;
        const y = baseY + offsetY + totalPanY;

        // Calculate distance from center for fisheye scaling
        const dist = Math.hypot(x - baseX, y - baseY);
        
        // Apple Watch style scaling
        const maxDist = 350;
        let scale = 1;
        let opacity = 1;
        
        if (dist < 100) {
          scale = 1;
        } else if (dist < maxDist) {
          const t = (dist - 100) / (maxDist - 100);
          scale = 1 - Math.sin(t * (Math.PI / 2)) * 0.75; // Shrink significantly
          opacity = 1 - Math.pow(t, 2) * 0.8; // Fade out slowly
        } else {
          scale = 0.25;
          opacity = 0.2;
        }

        if (node.isCenter) scale *= 1.1; 

        el.style.transform = \`translate(\${x}px, \${y}px) translate(-50%, -50%) scale(\${scale})\`;
        el.style.opacity = opacity;
        el.style.zIndex = Math.round(scale * 100);
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    
    panOffset.current.x += dx;
    panOffset.current.y += dy;
    
    velocity.current = { x: dx * 0.5, y: dy * 0.5 };
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <div 
      className="animated-network-container" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {allNodes.map((node, i) => (
        <div
          key={node.id}
          ref={el => nodesRef.current[i] = el}
          className={\`watch-node \${node.isCenter ? 'watch-node-center' : 'watch-node-outer'}\`}
        >
          <div className="watch-node-inner" style={{ background: node.color }}>
            {node.icon}
          </div>
          {!node.isCenter && (
            <div className="watch-node-label">
              <span>{node.label}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
`;

fs.writeFileSync('./src/components/ui/AnimatedNetwork.jsx', newContent);
console.log('Apple Watch layout complete.');
