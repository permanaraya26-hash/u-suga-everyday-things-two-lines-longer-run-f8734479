// SPDX-License-Identifier: MIT
// Everyday Things, Two Lines, Longer Run
// One everyday thing explained to a 10-year-old in two lines: a vivid analogy,
// then one honest sentence about what the analogy maps and what it leaves out.
// Writes the entry to /output/entry.txt (gate: UTF-8, 1-400 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  "A toaster is a little elevator for bread: it carries your slice down into a hot, glowing box and pops it back up brown and crunchy.";
const line2 =
  "The ride is the true part — the bread goes down, waits, and pops back up — but the elevator leaves out the heat that browns it and the fact that bread never chooses the trip.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line1 + "\n" + line2 + "\n", "utf8");
