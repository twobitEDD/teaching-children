# Locked picks & product notes

## Product

- Teacher-only Letter Story Studio (Next.js)
- Physical print only for children (storybook spreads, outlines)
- Facing spreads + single-page print modes
- Drop-cap on opening **text** pages (typography); picture pages use **letter overlay**

## A / B / C pattern (how we built)

- **A (vowel primary):** gesture Ah + Grimm *Star Money* / **Awe** (`id: awe`)
- **A alternate:** Aesop *Ant and Grasshopper* / **Ant** (`id: ant`) — kept in master catalog
- **B (consonant primary):** Grimm *Willow-Wren and the Bear* / **Bear** (`id: bear`)
- **B alternate:** Grimm *Queen Bee* / **Bee** (`id: bee`) — kept in master catalog
- **C (consonant primary):** Perrault *Puss in Boots* / **Cat** (`id: cat`)
- **C alternate:** Aesop *Crow and the Pitcher* / **Crow** (`id: crow`) — kept in master catalog

Use `getReadyBooks()` for the full catalog; letter routes accept book ids (`/letters/bee`, `/bookshelf/crow`) as well as primary letter shortcuts (`/letters/b`).

## Teacher corrections to remember

- No letter metaphors forced into narrative (“like a great D of darkness”)
- Images must not mold environment into letters; letter is overlay on natural art
- Rest of Percival story tone was approved after that prose fix
- Review in batches of 3

## Vowel picture-story scaffolds (current)

| Vowel | Scaffold story |
|-------|----------------|
| A | *Star Money* (awe) |
| E | Aesop *Two Goats* (boundary) |
| I | Andersen *Tin Soldier* soft (I am) |
| O | *Stone Soup* (wholeness) |
| U | Andersen *Thumbelina* opening (held close) |
