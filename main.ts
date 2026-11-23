// main.ts — entry for make.fun "One Line, Zero Use: The Useless Superpower Sprint"
// (u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68)
//
// Writes exactly one line to /output/entry.txt: the winning one-liner from the
// local pairwise race (V4, 4-0). The line names a hilariously useless superpower:
// stopping time, but only while asleep — so it changes nothing at all.
//
// Node 22 stdlib only. No network, no secrets, no reading outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The winning line (V4). 96 characters, plain UTF-8, one line, no explanation
// of the joke — the punchline lands in the last few words, as the judge asks.
const LINE =
  "I can stop time, but only while I'm asleep, so I wake up exactly as late as I would have anyway.";

const OUT = "/output/entry.txt";

// Gate check, same rule as the server's sealed scorer (RULES.txt "The gate"):
// UTF-8 text of 1 to 200 characters, not only white space. Refuse to write an
// invalid entry rather than submitting one the judge never sees.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${chars} characters (need 1-200)`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8"); // exactly the line, no trailing newline
