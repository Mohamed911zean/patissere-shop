const fs = require('fs');
const path = require('path');

// We will load the current EN and AR JSONs
const enPath = path.join(__dirname, 'locales/en/common.json');
const arPath = path.join(__dirname, 'locales/ar/common.json');

let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
let arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

if (!enJson.sections) enJson.sections = {};
if (!arJson.sections) arJson.sections = {};

function sanitizeKey(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 30).replace(/_+/g, '_').replace(/^_|_$/g, '');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Need to make sure the file imports useTranslation
  // If not, we add it later if we made changes
  
  // Match {isAr ? 'ARABIC' : 'ENGLISH'} or isAr ? "ARABIC" : "ENGLISH"
  // Regex: isAr\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3
  // Wait, sometimes it's {isAr ? '...' : '...'} and sometimes without braces.
  const regex = /isAr\s*\?\s*(['"`])(.*?)\1\s*:\s*(['"`])(.*?)\3/g;
  
  let match;
  let changed = false;
  
  while ((match = regex.exec(originalContent)) !== null) {
    const fullMatch = match[0];
    const arText = match[2];
    const enText = match[4];
    
    // Skip if it's ltr/rtl or basic css stuff
    if (enText === 'ltr' || enText === 'rtl' || enText.includes('text-') || enText.includes('flex-')) {
      continue;
    }
    
    const key = sanitizeKey(enText);
    const fullKey = `sections.${key}`;
    
    enJson.sections[key] = enText;
    arJson.sections[key] = arText;
    
    // Replace in content
    // We need to replace exactly fullMatch with t('sections.key')
    // BUT if the original was inside braces like {isAr ? 'A' : 'E'}, we want {t('sections.key')}
    // If it was already a JS expression, t('sections.key') is fine.
    content = content.replace(fullMatch, `t('${fullKey}')`);
    changed = true;
  }
  
  if (changed) {
    // Ensure useTranslation is imported and t is defined
    if (!content.includes('useTranslation')) {
      content = `import { useTranslation } from 'react-i18next';\n` + content;
    }
    if (!content.includes('const { t } = useTranslation()')) {
      // Find the component definition and insert it
      // This is tricky, so we'll just rely on the existing LanguageContext's t function!
      // Wait, all these files ALREADY have: const { language, t } = useLanguage(); 
      // OR const { language } = useLanguage();
      if (content.includes('const { language } = useLanguage();')) {
        content = content.replace('const { language } = useLanguage();', 'const { language, t } = useLanguage();');
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function processObjectArrays(filePath) {
    // Specifically target SLIDES, FEATURES, etc that use titleEn / titleAr
    // This is too specific, better to just let the user know we can't regex complex objects safely without breaking them,
    // OR we just write custom logic for them if they are simple enough.
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            processFile(fullPath);
        }
    }
}

walkDir(path.join(__dirname, 'components'));
walkDir(path.join(__dirname, 'app'));

fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2), 'utf8');
console.log('Dictionaries updated!');
