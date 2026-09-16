const fs = require('fs');
const path = './src/components/ui/AnimatedNetwork.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace imports
const importRegex = /import \{\s*[\s\S]*?\s*\}\s*from 'lucide-react';/;
const newImports = `import { 
  Shield, Users, Radar, Globe, ShieldAlert, Activity, 
  Building2, ActivitySquare, Eye, BadgeCheck, AppWindow, 
  Zap, Cpu, Target, Network, Key, Car, Landmark, HeartPulse,
  Scale, ShoppingCart, GraduationCap, Bed, Wifi, Factory, Film
} from 'lucide-react';`;
content = content.replace(importRegex, newImports);

// Replace nodes array and D
const nodesRegex = /const D = 78;[\s\S]*?\];/;
const newNodes = `const D = 78;
const h = D * 0.866;

function getHexCoords(index) {
  if (index === 0) return { offsetX: 0, offsetY: 0 };
  let ring = 1, count = 1;
  while (index >= count + ring * 6) {
    count += ring * 6;
    ring++;
  }
  let pos = index - count;
  let q = ring, r = 0;
  const dirs = [{dq:0, dr:1}, {dq:-1, dr:1}, {dq:-1, dr:0}, {dq:0, dr:-1}, {dq:1, dr:-1}, {dq:1, dr:0}];
  let dirIdx = 0;
  for (let i = 0; i < pos; i++) {
    q += dirs[dirIdx].dq;
    r += dirs[dirIdx].dr;
    if ((i + 1) % ring === 0) dirIdx = (dirIdx + 1) % 6;
  }
  return { offsetX: D * (q + r / 2), offsetY: h * r };
}

const colors = ['#ff3b30', '#ff9500', '#ffcc00', '#4cd964', '#5ac8fa', '#007aff', '#5856d6'];

const rawNodes = [
  // Center
  { id: 'center', isCenter: true, icon: <img src="/favicon.svg" alt="Fluxvell" className="center-logo-img" />, label: "Fluxvell", color: '#ffffff' },
  // Data
  { id: 'n1', icon: <Cpu size={32} color="white" />, label: "Technology" },
  { id: 'n2', icon: <Zap size={32} color="white" />, label: "Energy" },
  { id: 'n3', icon: <Car size={32} color="white" />, label: "Automotive" },
  { id: 'n4', icon: <Landmark size={32} color="white" />, label: "Finance" },
  { id: 'n5', icon: <HeartPulse size={32} color="white" />, label: "Healthcare" },
  { id: 'n6', icon: <Scale size={32} color="white" />, label: "Legal" },
  { id: 'n7', icon: <ShoppingCart size={32} color="white" />, label: "Retail" },
  { id: 'n8', icon: <GraduationCap size={32} color="white" />, label: "Education" },
  { id: 'n9', icon: <Bed size={32} color="white" />, label: "Hospitality" },
  { id: 'n10', icon: <Wifi size={32} color="white" />, label: "Telecom" },
  { id: 'n11', icon: <Factory size={32} color="white" />, label: "Critical Infra" },
  { id: 'n12', icon: <Film size={32} color="white" />, label: "Media & Ent" },
  { id: 'n13', icon: <Building2 size={32} color="white" />, label: "Brand Rep" },
  { id: 'n14', icon: <ActivitySquare size={32} color="white" />, label: "Op Risk" },
  { id: 'n15', icon: <Eye size={32} color="white" />, label: "Dark Web" },
  { id: 'n16', icon: <BadgeCheck size={32} color="white" />, label: "Cyber Ins" },
  { id: 'n17', icon: <AppWindow size={32} color="white" />, label: "Web App" },
  { id: 'n18', icon: <Zap size={32} color="white" />, label: "API" },
  { id: 'n19', icon: <Cpu size={32} color="white" />, label: "MCP" },
  { id: 'n20', icon: <Target size={32} color="white" />, label: "AI vs AI" },
  { id: 'n21', icon: <Network size={32} color="white" />, label: "Network" },
  { id: 'n22', icon: <Key size={32} color="white" />, label: "External" },
  { id: 'n23', icon: <Shield size={32} color="white" />, label: "Continuous" },
  { id: 'n24', icon: <Users size={32} color="white" />, label: "Vendor Risk" },
  { id: 'n25', icon: <Radar size={32} color="white" />, label: "Threat Intel" },
  { id: 'n26', icon: <Activity size={32} color="white" />, label: "Exec Monitor" },
  { id: 'n27', icon: <Globe size={32} color="white" />, label: "EASM" },
  { id: 'n28', icon: <ShieldAlert size={32} color="white" />, label: "Vuln Mgmt" }
];

const allNodes = rawNodes.map((n, i) => {
  const coords = getHexCoords(i);
  return {
    ...n,
    offsetX: coords.offsetX,
    offsetY: coords.offsetY,
    color: n.isCenter ? n.color : colors[(i - 1) % colors.length]
  };
});`;
content = content.replace(nodesRegex, newNodes);

fs.writeFileSync(path, content);
console.log('Updated JS successfully');
