---
name: letter-story-studio
description: >-
  Builds and revises Waldorf letter curriculum content for the teaching-children
  Letter Story Studio (teacher print tool). Use when adding letters, drafting
  tell-alouds, generating scene art, print overlays, vowels vs consonants, or
  reviewing batches of letter stories for ages 4–7.
---

# Letter Story Studio

Teacher-only app: design/print physical letter materials. **Never** build student screen/TV playback.

## Core split

| Kind | Method |
|------|--------|
| **Consonants** | One documented world story + concrete **image-word** |
| **Vowels (A E I O U)** | Emotional gesture / singing sound (+ optional Seifert frame) |

## Hard rules (from teacher)

1. **Do not force the letter into the story prose.** No “smoke curled like a great D.” Tell the story naturally; close with image-word if needed (“…Dragon — D for Dragon”).
2. **Do not mold scenery into letter shapes in art.** Paint natural story scenes only.
3. **Letters are overlays** on picture pages (CSS/print layer over the image), lined up on top of the scene — not baked into the painting.
4. Work **3 letters at a time**, then pause for teacher review before the next batch.
5. Ages **4–7**, ~**5–7 minute** tell with picture pauses; American English; light **PNW bridge**.
6. **Adapt, don’t invent** folk tales. Honest `sourceNotes` + `adaptations`.
7. **Waldorf oral substance:** rich pictorial language, archetypal images, moral consequence. Do **not** over-soften until the story loses meaning. War, fear, greed, and hard choices may appear in image-form suitable for young ears — hold darkness without graphic gore or cynicism. Children can meet difficulty when the teacher holds the story warmly.

## Tell length

Aim for **5–7 minutes** when read slowly with picture pauses (~700–1100 words of `tellAloud`, plus spread beats). Prefer depth and compelling images over a rushed summary.

## Verbatim gesture map (vowels)

Use these feelings **verbatim**:

- A- (ah) suprise, awe, or admiration
- E- (AY/Eh) seperation, differentiation, boundary
- I (Ee) upright, sharp focused, piercing inner stance "I am"
- O (Oh)- embracing warmth and wonder or wholeness
- U (Oo)- Shringinking, holding close or awestruk mystery

(Optional frame: Michael Seifert, *The Land of the Singing Sounds* — tell from teacher’s copy; **do not reprint** full copyrighted prose in the repo.)

## Locked consonant picks (A–Z primary pass complete)

| L | Image | Story |
|---|--------|--------|
| B | Bear | Grimm *Willow-Wren and the Bear* (+ Bee alternate) |
| C | Cat | Perrault *Puss in Boots* (+ Crow alternate) |
| D | Dragon | Percival and the dragon |
| F | Firebird | Russian Firebird |
| G | Goose | Grimm *Golden Goose* |
| H | House | Russian *Teremok* |
| J | Jug | Grimm *Water of Life* |
| K | King | Grimm *King Thrushbeard* |
| L | Ladle | *The Luminous Pearl* / Golden Dipper |
| M | Mountain | Chinese *Yu Gong Moves Mountains* |
| N | Necklace | Panchatantra grateful beasts |
| P | Prince | Flying carpet / Galland–Diyab episode |
| Q | Quail | Jataka quails & the net |
| R | Rabbit | Panchatantra rabbit & lion |
| S | Swan | Grimm *Six Swans* (soft) |
| T | Tree | Japanese *Hanasaka Jiisan* |
| V | Vasilisa | Soft doll-helper *Vasilisa* |
| W | Waves | Grimm *Fisherman and His Wife* |
| X | Ox | Chinese Great Race; X as ending of **ox** |
| Y | Yarn | Soft Ariadne thread |
| Z | Zebra | Cited San stripes pourquoi |

Vowels A E I O U + Ant alternate remain as before.

## Content file checklist

For each letter module under `src/content/letters/`:

- [ ] `mode`: `consonant` | `vowel`
- [ ] `imageWord`, sources, `tellAloud`, `pnwBridge`
- [ ] `spreads`: short text ↔ picture pairs (facing layout)
- [ ] `artPrompt`: scene only + `ART_NO_LETTER` from `src/content/style.ts`
- [ ] Register in `src/content/index.ts`
- [ ] Assets in `public/letters/{letter}/spread-0N.png` (**no letters in the PNG**)
- [ ] Picture pages get letter via `print-page__letter-overlay` in `PrintPreview`

## Art generation

Use `ART_STYLE` + `ART_NO_LETTER` from `src/content/style.ts`.

**Wrong:** “capital D formed by the dragon’s tail and cave wall”  
**Right:** natural dragon/cave scene; app overlays **D**

## Batch workflow

1. Implement next 3 remaining letters from the locked table  
2. Ask teacher to review (`keep` / changes)  
3. Only then start the next 3  

Remaining after full A–Z pass: teacher review batches (`keep` / changes). Alternates Ant/Bee/Crow remain in catalog.

## Reference

- [LOCKED-PICKS.md](LOCKED-PICKS.md) — full pick + vowel notes  
- Repo docs: `docs/CONTENT-PIPELINE.md`, `docs/VOWELS.md`
