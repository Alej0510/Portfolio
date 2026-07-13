import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const projects = [
  { slug: "raices", url: "https://raices-cafe.vercel.app/" },
  { slug: "to-do-app", url: "https://to-do-two-wheat.vercel.app/" },
  { slug: "5-direcciones", url: "https://5direcciones.vercel.app/" },
  { slug: "estilo-grafico", url: "https://www.estilografico.co/" },
];

const outputDir = join(process.cwd(), "public", "mockups");

async function main() {
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  const succeeded = [];
  const failed = [];

  for (const { slug, url } of projects) {
    try {
      console.log(`Capturing ${slug} -> ${url}`);
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(500);
      const outPath = join(outputDir, `${slug}.png`);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  saved -> ${outPath}`);
      succeeded.push(slug);
    } catch (err) {
      console.warn(`  WARNING: failed to capture ${slug} (${url}): ${err.message}`);
      failed.push({ slug, url, error: err.message });
    }
  }

  await browser.close();

  console.log("\n--- Summary ---");
  console.log(`${succeeded.length}/${projects.length} succeeded`);
  if (failed.length > 0) {
    console.log("Failed:");
    for (const f of failed) {
      console.log(`  - ${f.slug}: ${f.error}`);
    }
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
