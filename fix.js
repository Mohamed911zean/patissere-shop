const fs = require('fs');
const path = require('path');

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

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Fix 'use client' order
    if (content.startsWith("import { useTranslation } from 'react-i18next';\n'use client';")) {
        content = content.replace(
            "import { useTranslation } from 'react-i18next';\n'use client';",
            "'use client';\nimport { useTranslation } from 'react-i18next';"
        );
        changed = true;
    }
    
    // 2. Fix the specific syntax error in SpecialCakeCTA.tsx
    if (content.includes("{t('sections.whether_it')s a wedding")) {
        content = content.replace(
            "{t('sections.whether_it')s a wedding, birthday, or any milestone, our master pastry chefs create bespoke cakes that are as beautiful as they are delicious. Each cake is a work of art, handcrafted with the finest ingredients and your unique vision.'}",
            "{t('sections.whether_it')}"
        );
        // wait, I need to make sure 'sections.whether_it' in common.json has the full text!
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed ${filePath}`);
    }
}

walkDir(path.join(__dirname, 'components'));
walkDir(path.join(__dirname, 'app'));

// Also fix common.json whether_it
const enPath = path.join(__dirname, 'locales/en/common.json');
const arPath = path.join(__dirname, 'locales/ar/common.json');
let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
let arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

if (enJson.sections.whether_it === "Whether it\\") {
    enJson.sections.whether_it = "Whether it's a wedding, birthday, or any milestone, our master pastry chefs create bespoke cakes that are as beautiful as they are delicious. Each cake is a work of art, handcrafted with the finest ingredients and your unique vision.";
    arJson.sections.whether_it = "سواء كانت حفل زفاف، عيد ميلاد، أو أي مناسبة، يصنع طهاة المعجنات لدينا كيكات مخصصة رائعة الجمال وشهية الطعم — كل كيكة تحفة فنية بمكونات فاخرة وذوقك الفريد.";
    fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
    fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2), 'utf8');
    console.log('Fixed common.json');
}
