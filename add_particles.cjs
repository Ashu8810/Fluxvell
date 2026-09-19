const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/pages/Industries');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Skip if already added
  if (content.includes('<NetworkParticles />')) {
    console.log(`Skipping ${file} - already has NetworkParticles`);
    continue;
  }

  // Add import if not present
  if (!content.includes('NetworkParticles')) {
    // Find the last import
    const lastImportIndex = content.lastIndexOf('import ');
    const nextLineIndex = content.indexOf('\n', lastImportIndex) + 1;
    content = content.slice(0, nextLineIndex) + "import NetworkParticles from '../../components/ui/NetworkParticles/NetworkParticles';\n" + content.slice(nextLineIndex);
  }

  // Update tech-hero
  // Old: <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)'}}>
  // New: <section className="tech-hero" style={{background: '#0f172a', borderRadius: '32px', padding: '4rem 2rem', marginTop: '6rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden'}}>
  
  // Regex to match the section opening tag
  const sectionRegex = /<section className="tech-hero" style={{([^}]+)}}>/;
  content = content.replace(sectionRegex, (match, styleContent) => {
    // Check if it already has position relative
    if (!styleContent.includes('position')) {
      return `<section className="tech-hero" style={{${styleContent}, position: 'relative', overflow: 'hidden'}}>`;
    }
    return match;
  });

  // Inject <NetworkParticles /> and update the inner div
  const divRegex = /<div style={{maxWidth: '800px', margin: '0 auto'}}>/;
  content = content.replace(divRegex, `<NetworkParticles />\n        <div style={{maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 10}}>`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
