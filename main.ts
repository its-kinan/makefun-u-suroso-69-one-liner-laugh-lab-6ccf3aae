// One funny line, written to /output/entry.txt.
// Deterministic: no network, no randomness, no timestamps, no input.
// Node 22 runs this TypeScript as-is.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse a robot vacuum gives after eating a sock: deadpan legalism,
// now routed through counsel. The sock signed an NDA on the way down, so
// lunch itself is classified. "My lawyer advises" replaces the flat
// "In my defence" opener: a vacuum with a lawyer is a fresher, funnier
// frame than a vacuum defending itself. The closer is tightened from the
// stock "neither confirm nor deny" phrasing to "lunch remains classified" —
// same legal gag, shorter, and the punch lands on the last word.
const line =
  "My lawyer advises the sock signed an NDA on the way down — lunch remains classified.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate allows 1-200 characters, one line. Fail loudly rather than
// ever writing an invalid artifact.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`line breaks the gate: ${line.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
