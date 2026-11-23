import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day: the day in a single letter.
// D stands for "dead" — as in "I'm dead": a day that flattened you,
// reported honestly in one syllable. Vivid, funny, true.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "D");
