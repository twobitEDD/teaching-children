import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";
import { SEIFERT_SINGING_SOUNDS, VOWEL_TEACHER_FRAME } from "../vowelsShared";

export const letterI: LetterStory = {
  id: "i-am",
  letter: "I",
  primary: true,
  status: "ready",
  mode: "vowel",
  title: "The Steadfast Soldier · Ee",
  imageWord: "I am",
  feeling: "Upright · sharp focused · piercing inner stance — “I am” (Ee)",
  gesture:
    "Stand tall, gaze clear and focused — “I am.” Voice bright focused “Ee.”",
  culture: "Danish (Hans Christian Andersen) + Waldorf vowel gesture",
  region: "Denmark / Waldorf classroom",
  traditionalTitle: "The Steadfast Tin Soldier (Andersen) — mood: Ee / I am",
  sourceNotes: `${SEIFERT_SINGING_SOUNDS.citation} Story image for Ee: Andersen’s steadfast tin soldier (one leg; falls from window; paper boat; fish; fire). Literary fairy tale (public domain).`,
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps the soldier’s upright “I am,” the tumble into the world, storm, fish, and the stove’s trial — held in image without dwelling on melting gore. Steadfastness through difficulty. Gesture: piercing focused stance. Letter is a print overlay.",
  pnwBridge:
    "A single fir on a windy ridge — upright “I am” against the sky.",
  tellAloud: `${VOWEL_TEACHER_FRAME}

Letter I — Ee — upright, sharp, focused: “I am.”

Picture-story (Andersen, The Steadfast Tin Soldier):

There were once twenty-five tin soldiers, all brothers, cast from the same old tin spoon. Each held a musket and looked straight ahead. But the last soldier had been poured when the tin ran short. He had only one leg.

Yet he stood as straight and true as any of them. “I am a soldier,” his upright heart seemed to say. He did not ask for pity. He faced forward, clear and focused.

On the table stood a paper castle, and at its door a lovely dancer who also stood on one leg — so still she might have been tin herself. The soldier thought her the bravest, most beautiful sight. He did not speak; he only stood and looked, steadfast.

Night came. The other toys began to stir and play. A mischievous jack-in-the-box took a dislike to the one-legged soldier. “Keep your eyes to yourself!” it snapped — and when morning arrived, a window stood open, and somehow the soldier fell from the sill — down, down to the street.

It was no gentle fall. He landed on his bayonet between paving stones. Rain began. The world was large and unkind. Two boys found him, made a paper boat, and set him sailing in the gutter. The stream ran fast. The boat spun. Water came over the sides. Still the soldier did not lie down inside himself. He stood upright in the boat and thought of the dancer — and of his own clear stance: I am.

The boat rushed into a dark tunnel under the street. It was frightening — cold walls, roaring water. A great water-rat demanded a toll. The soldier said nothing and held his musket true. Then the paper boat gave way, and he sank — and a fish swallowed him whole into a close, dark belly.

Even there, in the mystery and the squeeze of danger, he lay as straight as he could and kept his courage.

At last the fish was caught and cut open in a kitchen — and there was the tin soldier again, back upon the same table, before the same dancer. How strange the world’s circle can be!

But trials were not finished. A child, for no good reason — or for the restless reasons children sometimes have — threw the soldier into the stove. The flames rose. It was a hard and fiery place. The soldier felt himself growing soft with heat — yet he stood as steadfast as ever, eyes toward the dancer, heart saying still: I am.

A door opened. A draft caught the paper dancer. She flew like a sylph into the fire beside him. When the stove was cleared, there among the ashes the maid found a little tin heart — all that remained of the steadfast soldier — and the dancer’s spangle burned to a black coal.

Hold the “Ee”: tall spine, bright eyes. I am. The letter I lives in that single upright line — through fall, storm, dark, and fire — the piercing inner stance that does not crumple.`,
  spreads: [
    {
      id: "i-01",
      kind: "opening",
      initialCap: true,
      body: "One tin soldier stood on a single leg — straight, true, focused. I am. He fell into the wide world: rain, paper boat, dark tunnel, even the belly of a fish.",
    },
    {
      id: "i-02",
      kind: "picture",
      image: "/letters/i/spread-01.png",
      imageAlt: "A steadfast toy soldier standing tall",
      artPrompt: `${STYLE}. A small steadfast tin soldier standing perfectly upright and focused in soft toy-room light, dignified not scary. ${ART_NO_LETTER}`,
    },
    {
      id: "i-03",
      kind: "text",
      body: "Returned to the table, he faced fire in the stove — and still stood true. Through fall, storm, dark, and flame: I am.",
    },
    {
      id: "i-04",
      kind: "picture",
      image: "/letters/i/spread-02.png",
      imageAlt: "A single fir upright against the sky",
      artPrompt: `${STYLE}. A single tall fir upright against clear windy sky, sharp vertical presence. ${ART_NO_LETTER}`,
    },
    {
      id: "i-05",
      kind: "text",
      body: "Gesture: tall · focused · “I am.” Singing sound Ee. The letter I — one clear upright line.",
    },
  ],
  outline: {
    cueWord: "I",
    formNote:
      "Capital I: one upright stroke — the standing self, sharp and true — like the steadfast soldier.",
  },
};
