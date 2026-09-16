const fs = require('fs');
const path = './src/components/ui/AnimatedNetwork.jsx';
let content = fs.readFileSync(path, 'utf8');

// Change D to 76 for tighter packing
content = content.replace('const D = 100;', 'const D = 78;');

// Add colors to allNodes
const nodesRegex = /const allNodes = \[[\s\S]*?\];/;
const newNodes = `const allNodes = [
  // Center
  { id: 'center', isCenter: true, icon: <img src="/favicon.svg" alt="Fluxvell" className="center-logo-img" />, label: "Fluxvell", offsetX: 0, offsetY: 0, color: '#ffffff' },
  // Ring 1
  { id: 'n1', icon: <Users size={32} color="white" />, label: "Vendor Risk", offsetX: D, offsetY: 0, color: '#ff3b30' },
  { id: 'n2', icon: <Globe size={32} color="white" />, label: "EASM", offsetX: D/2, offsetY: -h, color: '#ff9500' },
  { id: 'n3', icon: <Activity size={32} color="white" />, label: "Exec Monitor", offsetX: -D/2, offsetY: -h, color: '#4cd964' },
  { id: 'n4', icon: <Radar size={32} color="white" />, label: "Threat Intel", offsetX: -D, offsetY: 0, color: '#5ac8fa' },
  { id: 'n5', icon: <ShieldAlert size={32} color="white" />, label: "Vuln Mgmt", offsetX: -D/2, offsetY: h, color: '#ff2d55' },
  { id: 'n6', icon: <Building2 size={32} color="white" />, label: "Brand Rep", offsetX: D/2, offsetY: h, color: '#5856d6' },
  
  // Ring 2
  { id: 'n7', icon: <ActivitySquare size={32} color="white" />, label: "Op Risk", offsetX: 2*D, offsetY: 0, color: '#ffcc00' },
  { id: 'n8', icon: <Eye size={32} color="white" />, label: "Dark Web", offsetX: 1.5*D, offsetY: -h, color: '#ff3b30' },
  { id: 'n9', icon: <BadgeCheck size={32} color="white" />, label: "Cyber Ins", offsetX: D, offsetY: -2*h, color: '#4cd964' },
  { id: 'n10', icon: <AppWindow size={32} color="white" />, label: "Web App", offsetX: 0, offsetY: -2*h, color: '#5ac8fa' },
  { id: 'n11', icon: <Zap size={32} color="white" />, label: "API", offsetX: -D, offsetY: -2*h, color: '#ff9500' },
  { id: 'n12', icon: <Cpu size={32} color="white" />, label: "MCP", offsetX: -1.5*D, offsetY: -h, color: '#5856d6' },
  { id: 'n13', icon: <Target size={32} color="white" />, label: "AI vs AI", offsetX: -2*D, offsetY: 0, color: '#ff2d55' },
  { id: 'n14', icon: <Network size={32} color="white" />, label: "Network", offsetX: -1.5*D, offsetY: h, color: '#4cd964' },
  { id: 'n15', icon: <Key size={32} color="white" />, label: "External", offsetX: -D, offsetY: 2*h, color: '#ffcc00' },
  { id: 'n16', icon: <Shield size={32} color="white" />, label: "Continuous", offsetX: 0, offsetY: 2*h, color: '#5ac8fa' },
];`;
content = content.replace(nodesRegex, newNodes);

// Update style injection for color
content = content.replace(
  /className={\`watch-node \$\{node.isCenter \? 'watch-node-center' : 'watch-node-outer'\}\`}/g,
  `className={\`watch-node \${node.isCenter ? 'watch-node-center' : 'watch-node-outer'}\`}`
);

// We need to inject the inline background color into the watch-node-inner
content = content.replace(
  /<div className="watch-node-inner">/g,
  `<div className="watch-node-inner" style={{ background: node.color }}>`
);

fs.writeFileSync(path, content);
console.log('Updated JS');
