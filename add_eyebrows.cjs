const fs = require('fs');
const path = require('path');

const dir = 'src/pages/Industries';
const files = [
  'AutomotiveSection.jsx',
  'EnergySection.jsx',
  'FinanceSection.jsx',
  'HealthcareSection.jsx',
  'Industries.jsx'
];

const newEyebrow = `          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem'}}>
            Enterprise Security
          </div>\n`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('Enterprise Security')) {
    // We insert it right before the h1
    if (file === 'Industries.jsx') {
      content = content.replace(
        '<h1 className="ind-heading-1"', 
        newEyebrow + '          <h1 className="ind-heading-1"'
      );
    } else {
      content = content.replace(
        '<h1 className="ind-heading-1"', 
        newEyebrow + '          <h1 className="ind-heading-1"'
      );
    }
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log('Added Enterprise Security eyebrow to remaining files.');
