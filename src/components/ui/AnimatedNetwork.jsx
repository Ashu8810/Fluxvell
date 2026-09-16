import React, { useEffect, useRef, useState } from 'react';
import { 
  Megaphone, Activity, Eye, ShieldCheck, AppWindow, Code, Terminal, Bot, 
  Network, Target, RefreshCw, Laptop, Zap, Car, Landmark, HeartPulse, Scale, 
  ShoppingCart, GraduationCap, Bed, Radio, Factory, Film, Users, Radar, 
  Briefcase, Globe, Bug 
} from 'lucide-react';
import './AnimatedNetwork.css';

const D = 74;
const h = D * 0.866;

const baseNodes = [
  // Image 1 items
  { icon: <Megaphone size={32} color="white" />, label: "Brand Reputation Management", color: '#2F6BFF' },
  { icon: <Activity size={32} color="white" />, label: "Operational Risk Management", color: '#007aff' },
  { icon: <Eye size={32} color="white" />, label: "Dark Web Surveillance", color: '#ff3b30' },
  { icon: <ShieldCheck size={32} color="white" />, label: "Cyber Insurance", color: '#5ac8fa' },
  { icon: <AppWindow size={32} color="white" />, label: "Web App Pentesting", color: '#ff9500' },
  { icon: <Code size={32} color="white" />, label: "API Pentesting", color: '#ffcc00' },
  { icon: <Terminal size={32} color="white" />, label: "MCP Pentesting", color: '#4cd964' },
  { icon: <Bot size={32} color="white" />, label: "AI vs AI", color: '#5856d6' },
  { icon: <Network size={32} color="white" />, label: "Network Pentesting", color: '#FF7A68' },
  { icon: <Target size={32} color="white" />, label: "External Pentesting", color: '#2F6BFF' },
  { icon: <RefreshCw size={32} color="white" />, label: "Continuous Pentesting", color: '#ff3b30' },
  
  // Image 2 items
  { icon: <Laptop size={32} color="white" />, label: "Technology", color: '#5ac8fa' },
  { icon: <Zap size={32} color="white" />, label: "Energy", color: '#ffcc00' },
  { icon: <Car size={32} color="white" />, label: "Automotive", color: '#4cd964' },
  { icon: <Landmark size={32} color="white" />, label: "Finance", color: '#007aff' },
  { icon: <HeartPulse size={32} color="white" />, label: "Healthcare", color: '#FF7A68' },
  { icon: <Scale size={32} color="white" />, label: "Legal", color: '#5856d6' },
  { icon: <ShoppingCart size={32} color="white" />, label: "Retail", color: '#ff9500' },
  { icon: <GraduationCap size={32} color="white" />, label: "Education", color: '#ff3b30' },
  { icon: <Bed size={32} color="white" />, label: "Hospitality", color: '#2F6BFF' },
  { icon: <Radio size={32} color="white" />, label: "Telecom", color: '#5ac8fa' },
  { icon: <Factory size={32} color="white" />, label: "Critical Infrastructure", color: '#4cd964' },
  { icon: <Film size={32} color="white" />, label: "Media & Entertainment", color: '#5856d6' },
  
  // Image 3 items
  { icon: <Users size={32} color="white" />, label: "Vendor Risk Management", color: '#007aff' },
  { icon: <Radar size={32} color="white" />, label: "Threat Intelligence", color: '#FF7A68' },
  { icon: <Briefcase size={32} color="white" />, label: "Executive Monitoring", color: '#ffcc00' },
  { icon: <Globe size={32} color="white" />, label: "External Attack Surface Management", color: '#2F6BFF' },
  { icon: <Bug size={32} color="white" />, label: "Vulnerability Management", color: '#ff3b30' }
];

const allNodes = [
  { id: 'center', isCenter: true, icon: <img src="/Fluxvell_logo.png" alt="Fluxvell" className="center-logo-img" />, label: "Fluxvell", color: '#ffffff' },
  ...baseNodes.map((node, i) => ({ ...node, id: `n${i + 1}` })),
  ...baseNodes.map((node, i) => ({ ...node, id: `n${i + 1 + baseNodes.length}` }))
];

const numNodes = allNodes.length;
const nodes3D = allNodes.map((node, i) => {
  if (node.isCenter) {
    return { x: 0, y: 0, z: 1 }; // Center node is exactly in front
  }
  
  const index = i - 1; // Assuming center is index 0
  const total = numNodes - 1;
  
  // Fibonacci sphere algorithm for even distribution
  const phi = Math.acos(1 - 2 * (index + 0.5) / total);
  const theta = Math.PI * (1 + Math.sqrt(5)) * index;
  
  return {
    x: Math.cos(theta) * Math.sin(phi),
    y: Math.sin(theta) * Math.sin(phi),
    z: Math.cos(phi)
  };
});

// Precalculate connections (edges) for the wireframe globe
const connections = [];
for (let i = 1; i < numNodes; i++) {
  const n1 = nodes3D[i];
  const distances = [];
  for (let j = 1; j < numNodes; j++) {
    if (i !== j) {
      const n2 = nodes3D[j];
      const dist = Math.sqrt((n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2 + (n1.z - n2.z) ** 2);
      distances.push({ index: j, dist });
    }
  }
  distances.sort((a, b) => a.dist - b.dist);
  // Connect to the 3 closest nodes
  for (let k = 0; k < 3; k++) {
    if (distances[k] && i < distances[k].index) {
      connections.push([i, distances[k].index]);
    }
  }
}

export function AnimatedNetwork() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  
  // Drag physics state
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const panOffset = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const entryProgress = useRef(0);
  const hoverPos = useRef({ x: -1000, y: -1000 });
  const targetPanOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    
    const renderLoop = () => {
      // Smooth interpolation for parallax panning
      if (!isDragging.current) {
        panOffset.current.x += (targetPanOffset.current.x - panOffset.current.x) * 0.08;
        panOffset.current.y += (targetPanOffset.current.y - panOffset.current.y) * 0.08;
      } else {
        // Apply momentum if dragging (for touch devices)
        panOffset.current.x += velocity.current.x;
        panOffset.current.y += velocity.current.y;
        
        velocity.current.x *= 0.92;
        velocity.current.y *= 0.92;
      }
      
      // Add a tiny idle float for liveliness
      timeRef.current += 0.005;
      const idleX = Math.cos(timeRef.current) * 15;
      const idleY = Math.sin(timeRef.current * 0.8) * 15;
      
      // Entry animation
      if (entryProgress.current < 1) {
        entryProgress.current += 0.03;
        if (entryProgress.current > 1) entryProgress.current = 1;
      }
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - entryProgress.current, 3);

      const totalPanX = panOffset.current.x + idleX;
      const totalPanY = panOffset.current.y + idleY;

      let baseX = 500; 
      let baseY = 340; 
      if (containerRef.current) {
        baseX = containerRef.current.clientWidth / 2;
        baseY = containerRef.current.clientHeight / 2;
      }

      nodesRef.current.forEach((el, index) => {
        if (!el) return;
        
        const node3D = nodes3D[index];
        
        // Convert pan offset to 3D rotation angles
        // Add auto-rotation over time to make it spin automatically
        const angleX = -totalPanY * 0.004; // Pitch (tilt up/down)
        const angleY = (totalPanX * 0.004) + (timeRef.current * 0.5);  // Yaw (turn left/right) + auto-spin
        
        // 1. Rotate around X-axis (Pitch)
        const x1 = node3D.x;
        const y1 = node3D.y * Math.cos(angleX) - node3D.z * Math.sin(angleX);
        const z1 = node3D.y * Math.sin(angleX) + node3D.z * Math.cos(angleX);
        
        // 2. Rotate around Y-axis (Yaw)
        const rx = x1 * Math.cos(angleY) - z1 * Math.sin(angleY);
        const ry = y1;
        const rz = x1 * Math.sin(angleY) + z1 * Math.cos(angleY);

        // Globe radius on screen (smaller circular globe)
        const R = 150; 
        
        // 3D to 2D projection
        let finalX = baseX + rx * R;
        let finalY = baseY + ry * R;
        
        // Perspective scaling and opacity based on depth (Z)
        const zNormalized = (rz + 1) / 2; // 0 (back) to 1 (front)
        
        // Scale down the icons to fit the smaller globe
        const baseGlobeScale = 0.55; 
        let scale = (0.4 + zNormalized * 0.8) * baseGlobeScale; 
        let opacity = 0.1 + zNormalized * 0.9;
        
        // Fade out nodes on the back of the sphere rapidly
        if (rz < -0.1) {
          opacity *= Math.max(0, 1 + (rz + 0.1) * 3);
        }
        
        // Apply entry animation scale
        scale *= easeProgress;
        
        // Staggered entry based on depth
        const distDelay = Math.max(0, 1 - zNormalized);
        const nodeProgress = Math.max(0, Math.min(1, (easeProgress - 0.2 * distDelay) / 0.8));
        const nodeScale = scale * (0.5 + 0.5 * nodeProgress);
        const nodeOpacity = opacity * nodeProgress;

        // Store the final calculated coordinates and visibility for drawing lines later
        nodes3D[index].screenX = finalX;
        nodes3D[index].screenY = finalY;
        nodes3D[index].screenZ = zNormalized;
        nodes3D[index].screenOpacity = nodeOpacity;
        
        // Apply transformations
        el.style.transform = `translate(${finalX}px, ${finalY}px) translate(-50%, -50%) scale(${nodeScale})`;
        el.style.opacity = nodeOpacity;
        // z-index scaling so smaller nodes go behind larger ones
        el.style.zIndex = Math.round(nodeScale * 100);
      });

      // Draw connecting lines on the canvas
      if (canvasRef.current && containerRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Ensure canvas size matches container exactly
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }

        ctx.clearRect(0, 0, width, height);

        // Draw connections
        ctx.lineWidth = 1;
        connections.forEach(([i, j]) => {
          const n1 = nodes3D[i];
          const n2 = nodes3D[j];

          // Average depth to determine line opacity
          const avgZ = (n1.screenZ + n2.screenZ) / 2;
          // Fade lines that are on the back of the globe
          let lineOpacity = (0.05 + avgZ * 0.25) * easeProgress;
          
          if (lineOpacity > 0) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineOpacity})`; // Slate 400 color
            ctx.moveTo(n1.screenX, n1.screenY);
            ctx.lineTo(n2.screenX, n2.screenY);
            ctx.stroke();
          }
        });
      }

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
    // Synchronize target with current pan when drag starts
    targetPanOffset.current = { ...panOffset.current };
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      hoverPos.current = { x: mouseX, y: mouseY };

      // Calculate parallax target pan based on mouse position relative to center
      if (!isDragging.current) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const normalizedX = (mouseX - centerX) / centerX;
        const normalizedY = (mouseY - centerY) / centerY;
        
        // Max pan distance (adjust this to allow viewing edge nodes)
        const maxPan = 500; 
        
        targetPanOffset.current = {
          x: -normalizedX * maxPan,
          y: -normalizedY * maxPan
        };
      }
    }

    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    
    panOffset.current.x += dx;
    panOffset.current.y += dy;
    targetPanOffset.current = { ...panOffset.current }; // Sync target during drag
    
    velocity.current = { x: dx * 0.5, y: dy * 0.5 };
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    hoverPos.current = { x: -1000, y: -1000 };
    // Gently return to center when mouse leaves
    targetPanOffset.current = { x: 0, y: 0 };
  };

  const handleWheel = (e) => {
    e.preventDefault();
    panOffset.current.x -= e.deltaX * 0.5;
    panOffset.current.y -= e.deltaY * 0.5;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    velocity.current = { x: 0, y: 0 };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - lastMousePos.current.x;
    const dy = e.touches[0].clientY - lastMousePos.current.y;
    
    panOffset.current.x += dx;
    panOffset.current.y += dy;
    
    velocity.current = { x: dx * 0.5, y: dy * 0.5 };
    lastMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  return (
    <div 
      className="animated-network-container" 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      style={{ touchAction: 'none' }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      {allNodes.map((node, i) => (
        <div
          key={node.id}
          ref={el => nodesRef.current[i] = el}
          className={`watch-node ${node.isCenter ? 'watch-node-center' : 'watch-node-outer'}`}
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
