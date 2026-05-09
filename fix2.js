const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'app/[locale]/about/page.tsx');
let content = fs.readFileSync(pagePath, 'utf8');
content = content.replace(
    "{t('sections.our_journey_has_always_been_ab')s about being a part of your celebrations, your milestones, and your everyday moments of indulgence.'}",
    "{t('sections.our_journey_has_always_been_ab')}"
);
fs.writeFileSync(pagePath, content, 'utf8');
console.log('Fixed page.tsx');

const enPath = path.join(__dirname, 'locales/en/common.json');
const arPath = path.join(__dirname, 'locales/ar/common.json');

let enJson = JSON.parse(fs.readFileSync(enPath, 'utf8'));
let arJson = JSON.parse(fs.readFileSync(arPath, 'utf8'));

if (enJson.sections.our_journey_has_always_been_ab === "Our journey has always been about more than just sweets; it\\") {
    enJson.sections.our_journey_has_always_been_ab = "Our journey has always been about more than just sweets; it's about being a part of your celebrations, your milestones, and your everyday moments of indulgence.";
    arJson.sections.our_journey_has_always_been_ab = "لطالما كانت رحلتنا أكثر من مجرد صنع الحلوى؛ إنها تدور حول مشاركتكم احتفالاتكم ولحظاتكم السعيدة.";
    fs.writeFileSync(enPath, JSON.stringify(enJson, null, 2), 'utf8');
    fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2), 'utf8');
    console.log('Fixed common.json');
}
