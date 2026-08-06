# Letter Story Studio

Teacher-only Next.js app for designing and printing **physical** Waldorf-style letter stories for ages 4–7. Students never see this screen — you print storybook pages and outline sheets, then tell aloud.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Public site (GitHub Pages)

Live URL after deploy: **https://twobitEDD.github.io/teaching-children/**

Every push to `main` builds a static export and deploys via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

**One-time setup in GitHub** (if Pages isn’t on yet):

1. Repo **Settings → Pages**
2. **Source:** GitHub Actions
3. Push to `main` (or run the **Deploy GitHub Pages** workflow manually)

Local static build that matches Pages paths:

```bash
npm run build:pages
npx serve out
```

Then open the path under `/teaching-children/`.

- Home: A–Z letter grid (hover A/B/C for Ant, Bee, Crow alternates)
- Letter workspace: **Story** (tell-aloud / vowel gesture + source notes) · **Print preview** · **Outlines**
- Book viewer shelf for flip-through preview
- Use **Print / Save PDF** (browser print dialog)

## Stack

- Next.js (App Router) + React + TypeScript + Tailwind CSS v4
- Content as typed modules under `src/content/`
- Static art under `public/letters/{letter}/`

## How to add a new letter

1. Follow the checklist in [`docs/CONTENT-PIPELINE.md`](docs/CONTENT-PIPELINE.md) (consonants) or [`docs/VOWELS.md`](docs/VOWELS.md) (vowels).
2. Create `src/content/letters/{letter}.ts` (copy a consonant or vowel file).
3. Export and register it in `src/content/index.ts` (`readyLetters`).
4. Add watercolor spreads to `public/letters/{letter}/spread-01.png`, …
5. Run `npm run dev`, open the letter, read aloud, print a test page, polish.

## Ready content

| Letter | Cue | Source / method |
|--------|-----|-----------------|
| A | Ah — awe (*Star Money*) | Vowel gesture + Grimm |
| B | Bear | Grimm — *The Willow-Wren and the Bear* |
| C | Cat | Perrault — *Puss in Boots* (miller’s cat) |
| E | Eh — boundary (*Two Goats*) | Vowel gesture + Aesop |
| I | Ee — “I am” (*Tin Soldier*) | Vowel gesture + Andersen |
| O | Oh — wholeness (*Stone Soup*) | Vowel gesture + folk |
| U | Oo — close (*Thumbelina*) | Vowel gesture + Andersen |

Consonants: world stories. Vowels: singing sounds / emotional gestures — see [`docs/VOWELS.md`](docs/VOWELS.md).

## Project layout

```
src/app/                  # routes (home, /letters/[letter])
src/components/           # grid, workspace, story, print, outline
src/content/              # schema + letter modules
public/letters/           # print art
docs/CONTENT-PIPELINE.md  # consonant research + art prompts
docs/VOWELS.md            # vowel gesture map
```

## Print tips

- US Letter, portrait
- In print preview, hide headers/footers in the browser dialog if you want clean classroom pages
- Outline sheets use stroked type for crisp chalk/crayon forms
