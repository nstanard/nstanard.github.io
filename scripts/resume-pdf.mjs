// Prints the built /resume-print/ page to public/<pdfFileName> so the site's
// "Download PDF" link serves a PDF generated from src/data/resume.ts.
// Runs after `gatsby build` (see package.json "build"). Uses the locally
// installed Google Chrome via puppeteer-core, so nothing is downloaded.

import http from "node:http"
import { readFile } from "node:fs/promises"
import { extname, join, normalize } from "node:path"
import puppeteer from "puppeteer-core"

const PUBLIC = new URL("../public/", import.meta.url).pathname
const PDF_NAME = "Neal Stanard - Software Engineer.pdf"
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2",
}

const server = http.createServer(async (req, res) => {
  let path = normalize(decodeURIComponent(req.url.split("?")[0]))
  if (path.endsWith("/")) path += "index.html"
  try {
    const body = await readFile(join(PUBLIC, path))
    res.writeHead(200, { "content-type": MIME[extname(path)] ?? "application/octet-stream" })
    res.end(body)
  } catch {
    res.writeHead(404).end()
  }
})
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve))
const { port } = server.address()

const browser = await puppeteer.launch({ channel: "chrome", args: ["--no-sandbox"] })
try {
  const page = await browser.newPage()
  await page.goto(`http://127.0.0.1:${port}/resume-print/`, { waitUntil: "networkidle0" })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 300))
  const out = join(PUBLIC, PDF_NAME)
  await page.pdf({ path: out, format: "letter", printBackground: true, preferCSSPageSize: true })
  console.log(`wrote ${out}`)
} finally {
  await browser.close()
  server.close()
}
