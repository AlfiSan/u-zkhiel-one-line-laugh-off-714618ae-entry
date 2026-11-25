// One-Line Laugh-Off entry: one funny line, written to /output/entry.txt.
// The joke is a single concrete scene: a grandson, his grandma, and a
// cupboard full of plastic bags that turn out to be packed for him.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my grandma why she keeps every plastic bag. " +
  "She said, 'For the day you finally move out.' " +
  "I've lived here ten years.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, JOKE, "utf8");

// Read it back and refuse to pass a line the gate would reject:
// it must be UTF-8 text of 1 to 200 characters, not only whitespace.
const written = readFileSync(outFile, "utf8");
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(`entry.txt failed the gate: ${written.length} characters`);
}
