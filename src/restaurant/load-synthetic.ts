import type { Dataset } from "./types";
import { validateDataset } from "./model.mjs";

// Dev-only loader. index.vue imports this module only after an explicit
// synthetic-demo request, and only when import.meta.env.DEV is true.
export async function loadSyntheticDataset(): Promise<Dataset> {
  const mod = (await import("../../tests/fixtures/dataset.mjs")) as {
    fixtureDataset: Dataset;
  };
  return validateDataset(structuredClone(mod.fixtureDataset));
}
