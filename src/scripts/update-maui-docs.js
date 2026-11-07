const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../..');
const EN_HTML_DIR = path.join(ROOT_DIR, 'dist/data/doc/en/maui-component');
const ZH_HTML_DIR = path.join(ROOT_DIR, 'dist/data/doc/maui-component');

// The 27 MAUI Component documentation files
const mauiFiles = [
  'Button.html',
  'Cell.html',
  'Checkbox.html',
  'Dialog.html',
  'Divider.html',
  'Empty.html',
  'Field.html',
  'Icon.html',
  'Image.html',
  'Layout.html',
  'List.html',
  'Loading.html',
  'Modal.html',
  'Overlay.html',
  'Popup.html',
  'Progress.html',
  'Radio.html',
  'Sidebar.html',
  'Slider.html',
  'Stepper.html',
  'Steps.html',
  'Sticky.html',
  'Switch.html',
  'Tab.html',
  'Tag.html',
  'titleBar.html',
  'Toast.html'
];

/**
 * Numbers each sample code section in an HTML document.
 */
function numberDoc(html, isEn) {
  const sampleRegex = /<(h[23])[^>]*id="(?:sample-code|代码演示)"[^>]*>.*?<\/\1>/i;
  const sampleMatch = html.match(sampleRegex);
  if (!sampleMatch) return html;

  const startIdx = sampleMatch.index + sampleMatch[0].length;
  // End of sample code section is start of API, Options, Props, etc.
  const endRegex = /<(h[23])[^>]*id="(?:api|options|props)"[^>]*>/i;
  const endMatch = html.slice(startIdx).match(endRegex);
  const endIdx = endMatch ? startIdx + endMatch.index : html.length;

  const before = html.slice(0, startIdx);
  let section = html.slice(startIdx, endIdx);
  const after = html.slice(endIdx);

  const ignoredIds = new Set([
    'api', 'props', 'events', 'slot', 'slots', 'options', 'tips',
    'image-fill-modes', 'left-icon-value-types', 'left-icon-值类型',
    'page-meta', 'others', '其他'
  ]);

  let num = 1;
  section = section.replace(/<(h[34])([^>]*)id="([^"]*)"([^>]*)>(.*?)<\/\1>/gi, (match, tag, pre, id, post, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    if (ignoredIds.has(id.toLowerCase())) return match;
    // Strip any existing number prefix
    const baseText = cleanText.replace(/^\d+\.\s*/, '');
    const newText = `${num}. ${baseText}`;
    num++;
    return `<${tag}${pre}id="${id}"${post}>${newText}</${tag}>`;
  });

  return before + section + after;
}

function updateAllMauiDocs() {
  console.log('Numbering MAUI component documentation files in EN and ZH...');
  let totalUpdated = 0;

  for (const file of mauiFiles) {
    const enPath = path.join(EN_HTML_DIR, file);
    const zhPath = path.join(ZH_HTML_DIR, file);

    if (fs.existsSync(enPath)) {
      const enContent = fs.readFileSync(enPath, 'utf8');
      const updatedEn = numberDoc(enContent, true);
      fs.writeFileSync(enPath, updatedEn, 'utf8');
      totalUpdated++;
    }

    if (fs.existsSync(zhPath)) {
      const zhContent = fs.readFileSync(zhPath, 'utf8');
      const updatedZh = numberDoc(zhContent, false);
      fs.writeFileSync(zhPath, updatedZh, 'utf8');
      totalUpdated++;
    }
  }

  console.log(`✓ Successfully updated ${totalUpdated} MAUI documentation files.`);
}

updateAllMauiDocs();
