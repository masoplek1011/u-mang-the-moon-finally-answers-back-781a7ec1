import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You keep texting 'you up?' at 2 a.m. like I have a choice. I've been up four billion years. Go to sleep.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
