import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function resolveChromePath() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    path.join(
      os.homedir(),
      '.cache/puppeteer/chrome/mac_arm-145.0.7632.77/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'
    ),
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];

  return candidates.find((p) => fs.existsSync(p));
}

async function launchBrowser() {
  const executablePath = resolveChromePath();

  try {
    return await puppeteer.launch({
      headless: true,
      ...(executablePath ? { executablePath } : {}),
    });
  } catch {
    // Bundled Chrome missing — use installed Google Chrome channel
    return puppeteer.launch({ headless: true, channel: 'chrome' });
  }
}

async function generatePDF(htmlFilePath, outputPdfPath) {
  const resolvedHtml = path.resolve(htmlFilePath);
  const resolvedPdf = path.resolve(outputPdfPath);

  fs.mkdirSync(path.dirname(resolvedPdf), { recursive: true });

  const browser = await launchBrowser();
  const page = await browser.newPage();

  await page.goto(`file://${resolvedHtml}`, { waitUntil: 'networkidle0' });

  // Margins come from @page in the HTML — don't double-apply here
  await page.pdf({
    path: resolvedPdf,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });

  await browser.close();
  console.log(`PDF generated: ${resolvedPdf}`);
}

const htmlFile =
  process.argv[2] ??
  path.join(__dirname, 'resume', 'resume-fullstack-remote.html');
const outputPdf =
  process.argv[3] ?? path.join(__dirname, 'cv', 'mazharul-islam-nahid-fullstack-developer.pdf');

generatePDF(htmlFile, outputPdf).catch(console.error);
// From resume/: see README.md for active HTML → PDF mappings
// node generate-pdf.js resume/resume-fullstack-remote.html cv/mazharul-islam-nahid-fullstack-developer.pdf
// node generate-pdf.js resume/resume-minhajul-islam.html cv/minhajul-islam-fullstack-developer.pdf
