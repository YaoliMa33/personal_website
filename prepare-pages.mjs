import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

// Give every changed asset a new URL so returning visitors receive current content.
const root = path.resolve(process.argv[2] || path.join(import.meta.dirname, 'dist'));
const names = ['styles.css', 'profiles.js', 'locale-zh.js', 'locale-de.js', 'locale-fr.js', 'i18n.js', 'app.js'];
const assets = names.map(name => {
  const content = fs.readFileSync(path.join(root, name));
  const hash = createHash('sha256').update(content).digest('hex').slice(0, 12);
  const { name: stem, ext } = path.parse(name);
  return { content, filename: `${stem}.${hash}${ext}`, stem, ext };
});
const pages = fs.readdirSync(root).filter(name => name.endsWith('.html')).map(name => {
  let content = fs.readFileSync(path.join(root, name), 'utf8');
  for (const asset of assets) {
    const pattern = new RegExp(`((?:src|href)=")${asset.stem}(?:\\.[a-f0-9]{12})?\\${asset.ext}(")`, 'g');
    content = content.replace(pattern, `$1${asset.filename}$2`);
  }
  return { name, content };
});
for (const asset of assets) fs.writeFileSync(path.join(root, asset.filename), asset.content);
for (const page of pages) fs.writeFileSync(path.join(root, page.name), page.content);
console.log(`Prepared ${assets.length} versioned assets for ${pages.length} pages.`);
