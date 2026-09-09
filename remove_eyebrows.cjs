const fs = require('fs');
const path = require('path');

const dir = 'src/pages/Industries';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Section.jsx') || f === 'Industries.jsx');

const blockToRemove = `          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem'}}>
            Enterprise Security
          </div>\n`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace exact block if present
  if (content.includes(blockToRemove)) {
    content = content.replace(blockToRemove, '');
    fs.writeFileSync(filePath, content, 'utf8');
  } else {
    // try removing with just the text inside without the newline
    const blockToRemove2 = `          <div style={{display: 'inline-block', padding: '6px 16px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem'}}>
            Enterprise Security
          </div>`;
    if (content.includes(blockToRemove2)) {
      content = content.replace(blockToRemove2, '');
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});

console.log('Removed eyebrows from all files.');
