const fs = require('fs');

function fixIcons(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to match the icons in ProductsMenu and Navbar
  const iconRegex = /<([A-Za-z]+)\s+size=\{18\}\s+style=\{\{\s*color:\s*'([^']+)',\s*marginTop:\s*'2px',\s*flexShrink:\s*0\s*\}\}\s*\/>/g;
  
  content = content.replace(iconRegex, (match, iconName, color) => {
    return `<div style={{ width: '24px', display: 'flex', justifyContent: 'center', marginTop: '2px', flexShrink: 0 }}><${iconName} size={18} style={{ color: '${color}' }} /></div>`;
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed icons in ${filePath}`);
}

fixIcons('src/components/Navbar/ProductsMenu.jsx');
fixIcons('src/components/Navbar/Navbar.jsx');
