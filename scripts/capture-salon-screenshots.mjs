import { chromium, devices } from "playwright";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "assets", "salon", "work");

const projects = [
  { id: "beauty-n-blendz", url: "https://beautynblend.vercel.app/" },
  { id: "mane-rumor", url: "https://mane-rumor.vercel.app/" },
  { id: "beauty-by-kelsey", url: "https://khill-beauty.vercel.app/" },
  { id: "vegan-boujee", url: "https://vegan-boujee.vercel.app/" },
  { id: "mokhtar-safadi", url: "https://mokhtar-safadi-beauty-lounge.vercel.app/" },
];

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

const capture = async (page, path) => {
  await page.waitForLoadState("networkidle", { timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(2500);
  await page
    .waitForFunction(
      () =>
        document.body.innerText.length > 40 ||
        Array.from(document.images).some((img) => img.naturalWidth > 80),
      { timeout: 20000 },
    )
    .catch(() => {});
  await page.screenshot({
    path,
    type: "jpeg",
    quality: 82,
    animations: "disabled",
  });
};

for (const project of projects) {
  const desktop = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1.5,
  });
  console.log(`Desktop: ${project.id}`);
  await desktop.goto(project.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await capture(desktop, join(outDir, `${project.id}.jpg`));
  await desktop.close();

  const mobile = await browser.newPage({
    ...devices["iPhone 13"],
  });
  console.log(`Mobile: ${project.id}`);
  await mobile.goto(project.url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await capture(mobile, join(outDir, `${project.id}-mobile.jpg`));
  await mobile.close();
}

await browser.close();
console.log("Done.");
