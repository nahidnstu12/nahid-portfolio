import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generatePDF(htmlFilePath, outputPdfPath) {
  const resolvedHtml = path.resolve(htmlFilePath);
  const resolvedPdf = path.resolve(outputPdfPath);

  fs.mkdirSync(path.dirname(resolvedPdf), { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`file://${resolvedHtml}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: resolvedPdf,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '10mm',
      right: '10mm',
      bottom: '10mm',
      left: '10mm',
    },
  });

  await browser.close();
  console.log(`PDF generated: ${resolvedPdf}`);
}

const htmlFile =
  process.argv[2] ??
  './resume/resume-gigalogy.html';
const outputPdf =
  process.argv[3] ?? path.join(__dirname, 'cv', 'mazharul-islam-nahid-resume.pdf');

generatePDF(htmlFile, outputPdf).catch(console.error);
// node resume/generate-pdf.js resume/resume-gigalogy.html resume/cv/mazharul-islam-nahid-gigalogy.pdf
