import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Variant B — resubmit after variant A's dev rate came in low (0.669).
// A slow concrete image: rain on a tin roof fading until the silence
// between drops is longer than the rain, and the earth underneath has
// been listening since before the roof was built. No instruction, open
// ending; distinct from the leaders' stone-river and tide motifs.
const text =
  "The rain on the tin roof slows until the silence between drops is longer than the rain. " +
  "Under the house, the earth has been listening since before the roof was built, and it is listening still.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
