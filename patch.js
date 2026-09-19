const fs = require('fs');
const file = 'src/components/ui/NetworkParticles/NetworkParticles.jsx';
let content = fs.readFileSync(file, 'utf8');

// Inject a debug text div to see the cards array length and positions
content = content.replace(
  '<canvas ref={canvasRef} className="network-particles-canvas" />',
  `<canvas ref={canvasRef} className="network-particles-canvas" />
       <div id="debug-info" style={{position: 'absolute', top: 10, left: 10, zIndex: 1000, color: 'lime', background: 'black', padding: '10px'}}>Debug</div>`
);

content = content.replace(
  'el.style.transform = `translate(${cards[i].x}px, ${cards[i].y}px) translate(-50%, -50%)`;',
  `el.style.transform = \`translate(\${cards[i].x}px, \${cards[i].y}px) translate(-50%, -50%)\`;
          if (i===0) {
             const dbg = document.getElementById('debug-info');
             if (dbg) {
               dbg.innerHTML = cards.map((c, idx) => \`\${idx}: x=\${Math.round(c.x)} y=\${Math.round(c.y)} w=\${c.width}\`).join('<br/>') + '<br/>Refs: ' + cardsRef.current.map(e => e ? 'OK' : 'NULL').join(',');
             }
          }`
);

fs.writeFileSync(file, content);
console.log("Patched!");
