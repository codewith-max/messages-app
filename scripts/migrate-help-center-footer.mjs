/**
 * Migrates help-center page.js files to HelpCenterArticlePageLayout.
 * Run from repo root: node scripts/migrate-help-center-footer.mjs
 */
import fs from 'fs';
import path from 'path';

const root = path.join(process.cwd(), 'app', '(pages)', 'help-center');

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name === 'page.js') out.push(p);
  }
  return out;
}

function layoutImportPath(file) {
  const norm = file.replace(/\\/g, '/');
  const m = norm.match(/\/help-center\/(.*)\/page\.js$/);
  const sub = m ? m[1] : '';
  const dirs = sub ? sub.split('/').filter(Boolean).length : 0;
  return `${'../'.repeat(2 + dirs)}Components/Organisms/HelpCenterArticlePageLayout`;
}

function stripFooterImports(lines) {
  return lines.filter(
    (l) =>
      !l.includes("Organisms/HelpCenterHeader") &&
      !l.includes('Organisms/HelpCenterSidebar') &&
      !l.includes('Organisms/HelpCenterSiteFooter')
  );
}

function migrateFile(file) {
  let src = fs.readFileSync(file, 'utf8');

  if (src.includes('HelpCenterArticlePageLayout')) return { ok: false, reason: 'already' };
  if (!src.includes('<HelpCenterSiteFooter')) return { ok: false, reason: 'no-footer' };
  if (src.includes("from 'next/navigation'") && src.includes('redirect')) return { ok: false, reason: 'redirect' };

  const blockRe =
    /<div className="min-h-screen bg-white text-wa-bg">\s*<HelpCenterHeader \/>\s*<div className="mx-auto flex max-w-\[1440px\] flex-col md:flex-row md:items-stretch">\s*<HelpCenterSidebar \/>\s*<div className="min-w-0 flex-1 bg-white">\s*([\s\S]*?)<HelpCenterSiteFooter \/>\s*<\/div>\s*<\/div>\s*<\/div>/;

  const m = src.match(blockRe);
  if (!m) return { ok: false, reason: 'pattern' };

  const innerRaw = m[1];
  let inner = innerRaw.trim();

  let openTag =
    '    <HelpCenterArticlePageLayout>';

  const isLanding =
    inner.includes('<HelpCenterSearchSection />') &&
    inner.includes('<HelpCenterTopicCards />') &&
    inner.includes('<HelpCenterArticlesPanel />');

  if (isLanding) {
    openTag = '    <HelpCenterArticlePageLayout>';
    // Keep full landing markup as children
  } else if (/^\s*<ArticleSearchRow\s*\/>\s*/m.test(inner)) {
    inner = inner.replace(/^\s*<ArticleSearchRow\s*\/>\s*/m, '').trim();
    openTag =
      '    <HelpCenterArticlePageLayout articleSearch={<ArticleSearchRow />}>';
  } else {
    return { ok: false, reason: 'unknown-inner' };
  }

  const newBlock =
    `${openTag}\n` +
    `      ${inner.split('\n').join('\n      ')}\n` +
    `    </HelpCenterArticlePageLayout>`;

  src = src.replace(blockRe, newBlock);

  const lines = stripFooterImports(src.split('\n'));

  let added = false;
  const layoutLine = `import HelpCenterArticlePageLayout from '${layoutImportPath(file)}';`;
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    out.push(lines[i]);
    if (!added && lines[i].startsWith('import ') && lines[i].includes('Organisms')) {
      out.push(layoutLine);
      added = true;
    }
  }
  if (!added) {
    const fi = lines.findIndex((l) => l.startsWith('import '));
    if (fi >= 0) out.splice(fi + 1, 0, layoutLine);
    else out.unshift(layoutLine);
  }

  fs.writeFileSync(file, stripFooterImports(lines).join('\n').replace(blockRe, newBlock));

  // If first write wrong, second pass: read fresh
  src = fs.readFileSync(file, 'utf8');
  if (!src.includes('HelpCenterArticlePageLayout')) {
    let s2 = fs.readFileSync(file, 'utf8');
    s2 = s2.replace(blockRe, newBlock);
    let L = stripFooterImports(s2.split('\n'));
    const L2 = [];
    let ad = false;
    for (let i = 0; i < L.length; i++) {
      L2.push(L[i]);
      if (!ad && L[i].startsWith('import ') && L[i].includes('Organisms')) {
        L2.push(layoutLine);
        ad = true;
      }
    }
    if (!ad) L2.splice(L2.findIndex((l) => l.startsWith('import ')) ?? 0, 0, layoutLine);
    fs.writeFileSync(file, L2.join('\n'));
  }

  return { ok: true };
}

/** Fix write logic: assemble file manually */
function migrateFileFixed(file) {
  let src = fs.readFileSync(file, 'utf8');

  if (src.includes('HelpCenterArticlePageLayout')) return { ok: false, reason: 'already' };
  if (!src.includes('<HelpCenterSiteFooter')) return { ok: false, reason: 'no-footer' };
  if (src.includes("from 'next/navigation'") && /redirect\s*\(/.test(src)) return { ok: false, reason: 'redirect' };

  const blockRe =
    /<div className="min-h-screen bg-white text-wa-bg">\s*<HelpCenterHeader \/>\s*<div className="mx-auto flex max-w-\[1440px\] flex-col md:flex-row md:items-stretch">\s*<HelpCenterSidebar \/>\s*<div className="min-w-0 flex-1 bg-white">\s*([\s\S]*?)<HelpCenterSiteFooter \/>\s*<\/div>\s*<\/div>\s*<\/div>/;

  const mx = src.match(blockRe);
  if (!mx) return { ok: false, reason: 'pattern' };

  let inner = mx[1].trim();

  let openTag;
  const isLanding =
    inner.includes('<HelpCenterSearchSection />') &&
    inner.includes('<HelpCenterTopicCards />') &&
    inner.includes('<HelpCenterArticlesPanel />');

  if (isLanding) {
    openTag = '    <HelpCenterArticlePageLayout>';
  } else if (/^\s*<ArticleSearchRow\s*\/>/m.test(inner)) {
    inner = inner.replace(/^\s*<ArticleSearchRow\s*\/>/m, '').trim();
    openTag =
      '    <HelpCenterArticlePageLayout articleSearch={<ArticleSearchRow />}>';
  } else {
    return { ok: false, reason: 'unknown-inner' };
  }

  const innerIndented = inner
    .split('\n')
    .map((l) => (l.trim() === '' ? l : `      ${l}`))
    .join('\n');

  const newBlock = `${openTag}\n${innerIndented}\n    </HelpCenterArticlePageLayout>`;

  let out = src.replace(blockRe, newBlock);

  const linesOut = stripFooterImports(out.split('\n'));
  const idx = linesOut.findIndex((l) => l.startsWith('import ') && l.includes('Organisms'));
  linesOut.splice(
    idx >= 0 ? idx : 1,
    0,
    `import HelpCenterArticlePageLayout from '${layoutImportPath(file)}';`
  );

  fs.writeFileSync(file, linesOut.join('\n'), 'utf8');
  return { ok: true };
}

const files = walk(root);
let n = 0;
for (const f of files) {
  try {
    const r = migrateFileFixed(f);
    if (r.ok) {
      n++;
      console.log('OK', path.relative(process.cwd(), f));
    }
  } catch (e) {
    console.error('ERR', path.relative(process.cwd(), f), e.message);
  }
}
console.log('migrated', n, '/', files.length);
