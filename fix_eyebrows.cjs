const fs = require('fs');
const path = require('path');

const dir = 'src/pages/Industries';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Section.jsx') || f === 'Industries.jsx');

const newEyebrow = `          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem'}}>
            Enterprise Security
          </div>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace pill format eyebrows
  content = content.replace(/<div style=\{\{display: 'inline-block', padding: '6px 16px', background: 'rgba\(56, 189, 248, 0\.1\)', color: '#38bdf8', borderRadius: '20px', fontSize: '0\.875rem', fontWeight: 600, marginBottom: '1\.5rem'\}\}>\s*.*?\s*<\/div>/g, newEyebrow);

  // Replace uppercase format eyebrows
  content = content.replace(/<div style=\{\{color: '#38bdf8', fontWeight: 600, letterSpacing: '0\.05em', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '0\.875rem'\}\}>\s*.*?\s*<\/div>/g, newEyebrow);

  // Remove the extra pills in LegalSection
  content = content.replace(/<div style=\{\{display: 'inline-block', background: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '16px', fontSize: '0\.75rem', fontWeight: 600, marginBottom: '1rem'\}\}>\s*.*?\s*<\/div>/g, '');

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed eyebrows in all files.');
