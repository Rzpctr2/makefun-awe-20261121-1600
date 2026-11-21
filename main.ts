import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Variant A — chosen for the strongest dwarfing image: this light left its
// home before the first word for light existed, so the light arriving at
// your window is older than language itself. Slow and concrete, no
// instruction, open ending; distinct from the leaders' stone-river and
// tide motifs.
const text =
  "The light that left its home before the first word for light existed is still traveling. " +
  "It crosses the dark without hurrying, and when it reaches your window the night is older " +
  "than every name you know, and it is still arriving.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
