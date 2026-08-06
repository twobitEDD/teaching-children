import type { StorySpread } from "@/content/types";

export type FacingUnit =
  | { type: "pair"; text: StorySpread; picture: StorySpread }
  | { type: "solo"; spread: StorySpread };

/** Pair each text/opening page with the picture that follows it. */
export function pairFacingSpreads(spreads: StorySpread[]): FacingUnit[] {
  const units: FacingUnit[] = [];
  let i = 0;

  while (i < spreads.length) {
    const current = spreads[i];
    const next = spreads[i + 1];
    const isText =
      current.kind === "opening" || current.kind === "text";

    if (isText && next?.kind === "picture") {
      units.push({ type: "pair", text: current, picture: next });
      i += 2;
      continue;
    }

    units.push({ type: "solo", spread: current });
    i += 1;
  }

  return units;
}
