import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, ServerCrash, FileSearch, BadgeCheck } from 'lucide-react';
import './NetworkParticles.css';

const MAJOR_NODES_DATA = [
  { id: 'brand-reputation', title: 'Brand Reputation', icon: Building2, color: '#00f2fe' },
  { id: 'operational-risk', title: 'Operational Risk', icon: ServerCrash, color: '#38bdf8' },
  { id: 'dark-web', title: 'Dark Web', icon: FileSearch, color: '#60a5fa' },
  { id: 'cyber-insurance', title: 'Cyber Insurance', icon: BadgeCheck, color: '#22d3ee' }
];

const NUM_MINOR_NODES = 120;
const CONNECTION_DISTANCE = 220; // Increased line length
const RED_THEME = '#dc2626'; // Deep Red

export default function NetworkParticles() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const cardsRef = useRef([]);
  const navigate = useNavigate();
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 250 }); // Increased mouse interaction radius
  
  // State for the physics engine
  const stateRef = useRef({
    width: 0,
    height: 0,
    majorNodes: [],
    minorNodes: [],
    cards: []
  });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      stateRef.current.width = rect.width;
      stateRef.current.height = rect.height;
    };
    
    window.addEventListener('resize', updateSize);
    updateSize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Initialize nodes
    const { width, height } = stateRef.current;
    
    // Create minor nodes
    const minorNodes = Array.from({ length: NUM_MINOR_NODES }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 3 + 2 // Increased minor node radius
    }));
    
    // Create major nodes with specific quadrants to start spread out
    const quadrants = [
      { x: width * 0.25, y: height * 0.25 },
      { x: width * 0.75, y: height * 0.25 },
      { x: width * 0.25, y: height * 0.75 },
      { x: width * 0.75, y: height * 0.75 },
    ];
    
    const majorNodes = MAJOR_NODES_DATA.map((data, i) => ({
      ...data,
      x: quadrants[i].x + (Math.random() - 0.5) * 50,
      y: quadrants[i].y + (Math.random() - 0.5) * 50,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: 14 // Increased major node radius
    }));
    
    // Initialize card physics state (cards follow major nodes but avoid overlapping)
    const cards = majorNodes.map((node) => ({
      id: node.id,
      x: node.x,
      y: node.y - 60, // Preferred offset
      vx: 0,
      vy: 0,
      width: 200, // Approximate initial width, will be updated from DOM
      height: 50  // Approximate initial height
    }));
    
    stateRef.current.minorNodes = minorNodes;
    stateRef.current.majorNodes = majorNodes;
    stateRef.current.cards = cards;

    let animationFrameId;

    const renderLoop = () => {
      const { width, height, minorNodes, majorNodes, cards } = stateRef.current;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Update minor nodes
      minorNodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Mouse interaction (repel)
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distSq = dx * dx + dy * dy;
        const mouseRadiusSq = mouseRef.current.radius * mouseRef.current.radius;
        
        if (distSq < mouseRadiusSq) {
          const dist = Math.sqrt(distSq);
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          
          node.x -= forceDirectionX * force * 2;
          node.y -= forceDirectionY * force * 2;
        }

        // Center logo repel
        const cdx = width / 2 - node.x;
        const cdy = height / 2 - node.y;
        const cDistSq = cdx * cdx + cdy * cdy;
        const centerRadius = 140; // Avoid the center logo
        if (cDistSq < centerRadius * centerRadius) {
          const cDist = Math.sqrt(cDistSq);
          const forceDirectionX = cdx / cDist;
          const forceDirectionY = cdy / cDist;
          const force = (centerRadius - cDist) / centerRadius;
          
          node.x -= forceDirectionX * force * 3;
          node.y -= forceDirectionY * force * 3;
        }
        
        // Bounce off walls
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      });
      
      // Update major nodes
      majorNodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Soft boundary bounce (keep them somewhat centered)
        const margin = 100;
        if (node.x < margin) node.vx += 0.05;
        if (node.x > width - margin) node.vx -= 0.05;
        if (node.y < margin) node.vy += 0.05;
        if (node.y > height - margin) node.vy -= 0.05;
        
        // Center logo repel
        const cdx = width / 2 - node.x;
        const cdy = height / 2 - node.y;
        const cDistSq = cdx * cdx + cdy * cdy;
        const centerRadius = 180; // Larger avoidance for major nodes
        if (cDistSq < centerRadius * centerRadius) {
          const cDist = Math.sqrt(cDistSq);
          const forceDirectionX = cdx / cDist;
          const forceDirectionY = cdy / cDist;
          const force = (centerRadius - cDist) / centerRadius;
          
          node.vx -= forceDirectionX * force * 0.8;
          node.vy -= forceDirectionY * force * 0.8;
        }
      });
      
      // Collision Resolution for Major Nodes (Red big dots shouldn't overlap)
      for (let i = 0; i < majorNodes.length; i++) {
        for (let j = i + 1; j < majorNodes.length; j++) {
          const n1 = majorNodes[i];
          const n2 = majorNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minD = 120; // Minimum distance between big red dots
          if (dist < minD && dist > 0) {
            const force = (minD - dist) / dist * 0.05;
            const fx = dx * force;
            const fy = dy * force;
            n1.vx += fx;
            n1.vy += fy;
            n2.vx -= fx;
            n2.vy -= fy;
          }
        }
      }

      // Use fixed approximate size for stability if DOM sizes fail, otherwise use DOM sizes
      cardsRef.current.forEach((el, i) => {
        if (el && cards[i]) {
          cards[i].width = el.offsetWidth > 50 ? el.offsetWidth : 280;
          cards[i].height = el.offsetHeight > 20 ? el.offsetHeight : 60;
        }
      });
      
      // Physics for Cards
      const SPRING = 0.03;
      const DAMPING = 0.85;
      
      cards.forEach((card, i) => {
        const targetNode = majorNodes[i];
        
        // Preferred position (slightly above and to the right of the node)
        const targetX = targetNode.x + 40;
        const targetY = targetNode.y - 50;
        
        // Spring force towards target
        const fx = (targetX - card.x) * SPRING;
        const fy = (targetY - card.y) * SPRING;
        
        card.vx = (card.vx + fx) * DAMPING;
        card.vy = (card.vy + fy) * DAMPING;
        
        card.x += card.vx;
        card.y += card.vy;
        
        // Boundary constraints for cards
        if (card.x < card.width / 2) { card.x = card.width / 2; card.vx *= -0.5; }
        if (card.x > width - card.width / 2) { card.x = width - card.width / 2; card.vx *= -0.5; }
        if (card.y < card.height / 2) { card.y = card.height / 2; card.vy *= -0.5; }
        if (card.y > height - card.height / 2) { card.y = height - card.height / 2; card.vy *= -0.5; }
        
        // Center logo repel for cards
        const cdx = width / 2 - card.x;
        const cdy = height / 2 - card.y;
        const cDistSq = cdx * cdx + cdy * cdy;
        const centerRadius = 200; // Larger avoidance for cards
        if (cDistSq < centerRadius * centerRadius) {
          const cDist = Math.sqrt(cDistSq);
          const forceDirectionX = cdx / cDist;
          const forceDirectionY = cdy / cDist;
          const force = (centerRadius - cDist) / centerRadius;
          
          card.vx -= forceDirectionX * force * 2;
          card.vy -= forceDirectionY * force * 2;
        }
      });
      
      // Collision Resolution (Cards shouldn't overlap)
      // Run multiple iterations for better stability
      for (let iter = 0; iter < 3; iter++) {
        for (let i = 0; i < cards.length; i++) {
          for (let j = i + 1; j < cards.length; j++) {
            const c1 = cards[i];
            const c2 = cards[j];
            
            // Padding between cards
            const PADDING = 20;
            
            // Calculate overlap
            const dx = Math.abs(c1.x - c2.x);
            const dy = Math.abs(c1.y - c2.y);
            
            const minXDist = (c1.width / 2) + (c2.width / 2) + PADDING;
            const minYDist = (c1.height / 2) + (c2.height / 2) + PADDING;
            
            if (dx < minXDist && dy < minYDist) {
              // We have a collision. Determine axis of least penetration.
              const penX = minXDist - dx;
              const penY = minYDist - dy;
              
              if (penX < penY) {
                // Resolve on X axis
                const push = penX / 2;
                if (c1.x < c2.x) {
                  c1.x -= push; c2.x += push;
                } else {
                  c1.x += push; c2.x -= push;
                }
              } else {
                // Resolve on Y axis
                const push = penY / 2;
                if (c1.y < c2.y) {
                  c1.y -= push; c2.y += push;
                } else {
                  c1.y += push; c2.y -= push;
                }
              }
            }
          }
        }
      }
      
      // Update DOM elements for Cards
      cardsRef.current.forEach((el, i) => {
        if (el && cards[i]) {
          // Cards are absolutely positioned, translate moves them to center via CSS transform
          el.style.left = `${cards[i].x}px`;
          el.style.top = `${cards[i].y}px`;
        }
      });
      
      // Draw Connections (Network)
      ctx.lineWidth = 1;
      
      const allNodes = [...minorNodes, ...majorNodes];
      
      for (let i = 0; i < allNodes.length; i++) {
        const n1 = allNodes[i];
        
        // Draw connection to mouse if close enough
        const dxMouse = mouseRef.current.x - n1.x;
        const dyMouse = mouseRef.current.y - n1.y;
        const distMouseSq = dxMouse * dxMouse + dyMouse * dyMouse;
        if (distMouseSq < CONNECTION_DISTANCE ** 2) {
          const distMouse = Math.sqrt(distMouseSq);
          const opacity = 1 - (distMouse / CONNECTION_DISTANCE);
          ctx.strokeStyle = `rgba(220, 38, 38, ${opacity * 0.6})`;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }

        for (let j = i + 1; j < allNodes.length; j++) {
          const n2 = allNodes[j];
          const distSq = (n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2;
          
          if (distSq < CONNECTION_DISTANCE ** 2) {
            const dist = Math.sqrt(distSq);
            const opacity = 1 - (dist / CONNECTION_DISTANCE);
            
            // Deep red lines
            const isMajor = n1.id || n2.id;
            ctx.strokeStyle = isMajor ? `rgba(220, 38, 38, ${opacity * 0.45})` : `rgba(220, 38, 38, ${opacity * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw Tethers (Card to Major Node)
      cards.forEach((card, i) => {
        const node = majorNodes[i];
        
        ctx.beginPath();
        ctx.setLineDash([4, 4]); // Dotted line
        ctx.strokeStyle = `rgba(220, 38, 38, 0.7)`;
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(card.x, card.y);
        ctx.stroke();
        ctx.setLineDash([]); // Reset
      });
      
      // Draw Nodes
      // Minor nodes
      minorNodes.forEach(node => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(239, 68, 68, 0.4)`;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Major nodes
      majorNodes.forEach(node => {
        // Glowing halo
        ctx.beginPath();
        ctx.fillStyle = `rgba(239, 68, 68, 0.15)`;
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(239, 68, 68, 0.3)`;
        ctx.lineWidth = 1.5;
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = RED_THEME;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };
    
    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCardClick = (id) => {
    navigate(`/products/third-party-risk-management/${id}`);
  };

  return (
    <div className="network-particles-container" ref={containerRef}>
      <canvas ref={canvasRef} className="network-particles-canvas" />
      
      {MAJOR_NODES_DATA.map((node, i) => {
        const IconComponent = node.icon;
        return (
          <div
            key={node.id}
            ref={el => cardsRef.current[i] = el}
            className="network-card"
            data-category={node.id}
            onClick={() => handleCardClick(node.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="network-card-icon">
              <IconComponent size={24} />
            </div>
            <span>{node.title}</span>
          </div>
        );
      })}

      {/* Central Logo */}
      <div className="network-center-logo">
        <img src="/Fluxvell_logo.png" alt="Fluxvell" />
      </div>
    </div>
  );
}
