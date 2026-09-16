const fs = require('fs');

let content = fs.readFileSync('src/components/ui/AnimatedNetwork.jsx', 'utf8');

const replacement = `
        const gridX = offsetX + totalPanX;
        const gridY = offsetY + totalPanY;

        // Calculate original flat distance from center
        const dist = Math.hypot(gridX, gridY);
        
        let scale = 1;
        let opacity = 1;
        let finalX = 0;
        let finalY = 0;

        // Apple Watch style spherical projection
        const maxDist = 350; // Radius of the visual sphere
        
        if (dist === 0) {
          scale = 1;
          finalX = 0;
          finalY = 0;
        } else if (dist < maxDist) {
          const theta = (dist / maxDist) * (Math.PI / 2);
          
          // scale is derivative of projected distance so nodes stay perfectly touching!
          scale = Math.cos(theta);
          
          // The projected distance ensures gaps shrink exactly proportionally to the scale
          const projectedDist = (maxDist / (Math.PI / 2)) * Math.sin(theta);
          
          finalX = (gridX / dist) * projectedDist;
          finalY = (gridY / dist) * projectedDist;
          
          // Fade out smoothly at the edge
          opacity = 1 - Math.pow(dist / maxDist, 4);
        } else {
          scale = 0;
          opacity = 0;
          const projectedDist = (maxDist / (Math.PI / 2));
          finalX = (gridX / dist) * projectedDist;
          finalY = (gridY / dist) * projectedDist;
        }

        finalX += baseX;
        finalY += baseY;

        el.style.transform = \\\`translate(\\\${finalX}px, \\\${finalY}px) translate(-50%, -50%) scale(\\\${scale})\\\`;
        el.style.opacity = opacity;
        el.style.zIndex = Math.round(scale * 100);
`;

content = content.replace(/const totalPanX = panOffset\.current\.x \+ idleX;[\s\S]*?(?=el\.style\.transform =)/, 
`const totalPanX = panOffset.current.x + idleX;
      const totalPanY = panOffset.current.y + idleY;

      const baseX = 500; 
      const baseY = 340; 

      nodesRef.current.forEach((el, index) => {
        if (!el) return;
        const node = allNodes[index];
        
        const offsetX = D * (node.q + node.r / 2);
        const offsetY = h * node.r;

${replacement}`
);

fs.writeFileSync('src/components/ui/AnimatedNetwork.jsx', content);
