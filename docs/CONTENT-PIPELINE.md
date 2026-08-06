# Content pipeline — stories & art

Use this checklist every time you add a letter (D–Z). Keep one story per letter, ~5–7 minutes tell-aloud with picture pauses.

## Story research checklist

1. **Pick the image-word** — a concrete noun kids can see/feel that carries the letter sound (Ant, Bee, Crow). Prefer the letter’s common early sound.
2. **Find a documented source** — named folk tale, fable, or historical narrative from a real culture. Prefer public-domain collections (Aesop, Grimm, Perrault, well-cited regional collections).
3. **Reject fabrication** — do not invent a “fake folk tale.” You may shorten and soften; you may combine only short documented episodes that already belong together.
4. **Age fit (4–7)** — warm oral tone; no graphic gore; clear images over abstract morals. Keep substance: war, fear, greed, and hard choices may appear in held image-form (Waldorf oral style). Do not over-soften until meaning is lost.
5. **Write teacher metadata**
   - `traditionalTitle`, `culture`, `region`
   - `sourceNotes` (where it comes from)
   - `adaptations` (what you shortened/changed — be honest)
   - `pnwBridge` (one sentence linking to PNW lived sense — rain, fir, trail ants, garden bees, coastal crows — without relocating the tale)
6. **Draft `tellAloud`** — timed at a slow read with pauses ≈ 5–7 minutes (~700–1100 words).
7. **Split into spreads** — opening (big initial via CSS) → picture → text → picture (enough pages to hold the expanded beats).
8. **Teacher approval** — read aloud; revise before generating final art.

## File to create

Copy an existing letter file:

`src/content/letters/a.ts` → `src/content/letters/d.ts`

Register it in `src/content/index.ts` under `readyLetters`.

Add images under `public/letters/{letter}/spread-01.png`, etc.

## Art style bible (reuse verbatim)

```
Soft children's storybook watercolor illustration, warm paper texture, gentle natural colors of moss green soft gold and sky blue, calm composition, no text no letters no watermarks, print-friendly, classic picture book feel, natural realistic scene.
Do not include any letters, alphabet characters, monograms, or letter-shaped props. Paint only the natural story scene.
```

**Letterforms are CSS overlays** on picture pages (`print-page__letter-overlay`) — never molded into the painting or forced into story prose.

Append a **one-sentence scene** from the spread’s beat. Aspect ratio **4:3**.

Store the full prompt on each picture spread as `artPrompt` so regeneration stays consistent.

## Cultural care

- Avoid sacred imagery you are not entitled to depict.
- If a tale is sensitive, pick a different public story-image for that letter.
- Never claim AI art as traditional cultural artwork. Teacher notes should stay clear that illustrations are studio-generated for classroom print drafts.

## Outline sheet

Keep `outline.cueWord` and `outline.formNote` for chalkboard/crayon practice. Glyphs are CSS/vector stroke letters — do not AI-generate outline sheets.
