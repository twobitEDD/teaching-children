#!/usr/bin/env node
/**
 * Ensure every ready catalog book's picture spreads point at real PNGs
 * under public/. Run: node scripts/check-letter-assets.mjs
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const lettersDir = join(root, "src/content/letters");
const publicDir = join(root, "public");

// Draft-only modules not registered in the catalog
const skipFiles = new Set(["i-l.ts"]);

const missing = [];
const checked = [];

for (const file of readdirSync(lettersDir).filter((f) => f.endsWith(".ts"))) {
  if (skipFiles.has(file)) continue;
  const text = readFileSync(join(lettersDir, file), "utf8");
  const refs = [...text.matchAll(/image:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  for (const ref of refs) {
    const abs = join(publicDir, ref.replace(/^\//, ""));
    checked.push({ file, ref });
    if (!existsSync(abs)) {
      missing.push({ file, ref });
    }
  }
}

if (missing.length) {
  console.error("Missing letter art assets:");
  for (const m of missing) {
    console.error(`  ${m.file}: ${m.ref}`);
  }
  process.exit(1);
}

console.log(`OK: ${checked.length} picture refs across catalog letter modules.`);
