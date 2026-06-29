import puppeteer from "puppeteer-core";

const CHROME =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = process.env.URL || "http://localhost:3000";
const OUT = process.env.OUT || "/tmp/dk";

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

// Slow scroll to trigger whileInView reveals and lazy images
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const h = document.body.scrollHeight;
  for (let y = 0; y <= h; y += 300) {
    window.scrollTo(0, y);
    await sleep(60);
  }
  window.scrollTo(0, 0);
  await sleep(400);
});

// Hero (top viewport)
await page.screenshot({ path: `${OUT}/01-hero.png` });

// Each section, scrolled to top of viewport
for (const id of ["reposteria", "sobre-mi", "contacto"]) {
  await page.evaluate((id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await new Promise((r) => setTimeout(r, 700));
  await page.screenshot({ path: `${OUT}/sec-${id}.png` });
}

// Full page (tall)
await page.screenshot({ path: `${OUT}/00-full.png`, fullPage: true });

await browser.close();
console.log("shots done ->", OUT);
