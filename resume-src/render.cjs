// Regenerates static/"Neal Stanard - Software Engineer.pdf" from resume.html.
// Needs puppeteer; this borrows the install from ../midnight-software/print.
// Usage: node resume-src/render.cjs "../static/Neal Stanard - Software Engineer.pdf"
const puppeteer = require('/Users/nealstanard/Development/midnight-software/print/node_modules/puppeteer');
const { pathToFileURL } = require('url');
const path = require('path');
(async () => {
  const src = pathToFileURL(path.join(__dirname, 'resume.html')).href;
  const out = path.join(__dirname, process.argv[2] || 'resume.pdf');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(src, { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 300));
  await page.pdf({ path: out, format: 'letter', printBackground: true, margin: { top: '0.47in', right: '0.56in', bottom: '0.39in', left: '0.56in' } });
  await browser.close();
  console.log('wrote', out);
})().catch(e => { console.error(e); process.exit(1); });
