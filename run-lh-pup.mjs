import puppeteer from "puppeteer";
import lighthouse from "lighthouse";

// ─── Config ──────────────────────────────────────────────────────────────────

const BASE_URL = "https://powermytennis.com";

const PAGES = [
  "/",
  "/about",
  "/pathway",
  "/programs-and-fees",
  "/coaches",
  "/facilities",
  "/contact",
  "/policies",
  "/private-lessons",
];

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const score = (n) => Math.round((n ?? 0) * 100);

const badge = (n) => {
  const s = score(n);
  if (s >= 90) return `\x1b[32m${s}\x1b[0m`; // green
  if (s >= 50) return `\x1b[33m${s}\x1b[0m`; // yellow
  return `\x1b[31m${s}\x1b[0m`; // red
};

const pad = (str, len) => String(str).padEnd(len);

function printSeparator(char = "─", len = 72) {
  console.log(char.repeat(len));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  console.log("\n\x1b[1m⚡ PowerMyTennis — Lighthouse Audit\x1b[0m");
  printSeparator();
  console.log(`  Base URL : ${BASE_URL}`);
  console.log(`  Pages    : ${PAGES.length}`);
  console.log(
    `  Checks   : ${CATEGORIES.join(", ")}`,
  );
  printSeparator();

  // ── Pre-flight check ────────────────────────────────────────────────────────
  try {
    const protocol = BASE_URL.startsWith("https") ? "https" : "http";
    const { default: client } = await import(protocol);
    await new Promise((resolve, reject) => {
      const req = client.get(BASE_URL, (res) => {
        res.resume();
        resolve(res.statusCode);
      });
      req.setTimeout(5000, () => { req.destroy(); reject(new Error("timeout")); });
      req.on("error", reject);
    });
  } catch {
    const isLocal = BASE_URL.includes("localhost");
    console.error(
      `\x1b[31m✖ Cannot reach ${BASE_URL}\x1b[0m\n` +
      (isLocal ? `  Run: npm run dev\n` : `  Check your network or that the site is deployed.\n`)
    );
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const port = new URL(browser.wsEndpoint()).port;

  // Accumulate results for final summary
  const summary = [];

  for (const page of PAGES) {
    const url = `${BASE_URL}${page}`;
    console.log(`\n\x1b[1m📄 ${page === "/" ? "Home (/)" : page}\x1b[0m`);

    const options = {
      logLevel: "error",
      output: "json",
      onlyCategories: CATEGORIES,
      port,
    };

    const row = { page, scores: {} };

    try {
      const result = await lighthouse(url, options);
      const report = JSON.parse(result.report);
      const cats = report.categories;
      const audits = report.audits;

      // ── Category scores ───────────────────────────────────────────────────
      for (const cat of CATEGORIES) {
        const s = cats[cat]?.score ?? null;
        row.scores[cat] = s;
        const label = pad(cats[cat]?.title ?? cat, 18);
        console.log(`  ${label} ${badge(s)}`);
      }

      // ── Failed audits ─────────────────────────────────────────────────────
      const failed = Object.values(audits).filter(
        (a) => a.score !== null && a.score < 1,
      );

      if (failed.length === 0) {
        console.log(`\n  \x1b[32m✅ No failing audits on this page.\x1b[0m`);
      } else {
        console.log(
          `\n  \x1b[33m⚠️  ${failed.length} failing audit(s):\x1b[0m`,
        );
        for (const audit of failed) {
          try {
            console.log(`\n    ❌ \x1b[1m${audit.title}\x1b[0m`);
            if (audit.description) {
              const desc = audit.description
                .replace(/\[.*?\]\(.*?\)/g, "")
                .trim()
                .slice(0, 120);
              console.log(`       ${desc}`);
            }
            const rawItems = audit.details?.items;
            const items = Array.isArray(rawItems) ? rawItems : [];
            for (const item of items.slice(0, 3)) {
              const snippet =
                item.node?.snippet ??
                item.url ??
                JSON.stringify(item).slice(0, 80);
              console.log(`       • ${snippet}`);
            }
            if (items.length > 3) {
              console.log(`       … and ${items.length - 3} more`);
            }
          } catch {
            // skip malformed audit detail
          }
        }
      }
    } catch (e) {
      console.error(`  \x1b[31mError: ${e.message}\x1b[0m`);
      CATEGORIES.forEach((c) => (row.scores[c] = null));
    }

    summary.push(row);
  }

  await browser.close();

  // ─── Final Summary Table ──────────────────────────────────────────────────
  console.log("\n");
  printSeparator("═");
  console.log(`\x1b[1m  SUMMARY\x1b[0m`);
  printSeparator("═");

  const catLabels = {
    performance: "Perf",
    accessibility: "A11y",
    "best-practices": "Best",
    seo: "SEO ",
  };

  // Header
  console.log(
    `  ${pad("Page", 26)}  ${CATEGORIES.map((c) => pad(catLabels[c], 6)).join("  ")}`,
  );
  printSeparator();

  for (const { page, scores } of summary) {
    const cols = CATEGORIES.map((c) => pad(badge(scores[c]), 15)).join("  ");
    console.log(`  ${pad(page, 26)}  ${cols}`);
  }

  // Column averages
  printSeparator();
  const avgs = CATEGORIES.map((c) => {
    const vals = summary.map((r) => r.scores[c]).filter((v) => v !== null);
    const avg = vals.length
      ? vals.reduce((a, b) => a + b, 0) / vals.length
      : null;
    return pad(badge(avg), 15);
  });
  console.log(`  ${pad("AVERAGE", 26)}  ${avgs.join("  ")}`);
  printSeparator("═");
  console.log("");
}

run().catch(console.error);
