// The Robot Vacuum's Funniest Excuse — entry for
// u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2
// Writes one line (<= 120 chars) to /output/entry.txt. Deterministic, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I saw the crumb, but my last filter died doing what it loved, and I'm not ready to care again. The dock understands.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
