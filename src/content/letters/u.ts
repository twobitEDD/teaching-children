import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";
import { SEIFERT_SINGING_SOUNDS, VOWEL_TEACHER_FRAME } from "../vowelsShared";

export const letterU: LetterStory = {
  id: "close",
  letter: "U",
  primary: true,
  status: "ready",
  mode: "vowel",
  title: "Thumbelina · Oo",
  imageWord: "Close",
  feeling: "Shrinking · holding close · awestruck mystery (Oo)",
  gesture:
    "Hands draw inward toward the heart — hush of mystery held close. Voice deepens “Oo.”",
  culture: "Danish (Hans Christian Andersen) + Waldorf vowel gesture",
  region: "Denmark / Waldorf classroom",
  traditionalTitle: "Thumbelina (Andersen) — mood: Oo / held close",
  sourceNotes: `${SEIFERT_SINGING_SOUNDS.citation} Story image for Oo: Andersen’s Thumbelina — tiny child in a flower; toad carries her off; held close in danger and wonder. Literary fairy tale (public domain).`,
  adaptations:
    "Expanded oral telling (~5–7 min). Opening wonder plus the toad’s abduction and the walnut-shell bed on the river — real peril held close without later full ordeal cycle. Gesture: Oo = shrinking, holding close, awestruck mystery. Letter is a print overlay.",
  pnwBridge:
    "Cupping a new seedling in PNW spring soil — small life held close; deep “Oo.”",
  tellAloud: `${VOWEL_TEACHER_FRAME}

Letter U — Oo — shrinking, holding close, awestruck mystery.

Picture-story (Andersen, Thumbelina):

A woman longed for a little child of her own until the longing sat in her house like a quiet ache. She went to a wise old witch and received a barleycorn unlike any other. “Plant it,” said the witch, “and watch.”

The woman planted the seed in a flowerpot on the sunny sill. She watered it. She waited. Soon a tulip grew — tall, closed, mysterious as a secret. When the blossom opened — oo — there sat a tiny girl, delicate and bright, no bigger than a thumb. The woman cried out softly in awestruck joy. She named her Thumbelina and loved her with a love that drew the whole world inward into that little life.

She made her a walnut-shell bed with a violet-petal mattress and a rose-petal cover. By day Thumbelina played on the table and sailed a tulip-leaf boat in a bowl of water, using a horsehair for a tiller. The cottage held its breath around her. A crumb became a loaf. A thimble became a stool. Everything large became a landscape; everything small became a home. Oo — the hush of mystery held close.

But the wide world does not always leave small wonders in peace.

One night, as Thumbelina slept in her walnut shell, a great damp toad squeezed through a broken windowpane, drawn by the scent of the flower and the glint of something precious. “What a fine wife for my son!” croaked the toad. She seized the shell with Thumbelina inside and hopped away into the wet garden and down toward the river — carrying the tiny girl off while she still slept. The woman’s house woke empty of its miracle.

Thumbelina woke on a lily pad in the middle of the stream. Green walls of reed rose around her. The toad’s muddy son sat waiting on the bank, pleased with himself. Mist rose. The water was deep and cold. She was very small, and very far from the woman’s warm hands. She wept — not loudly, but as one who feels the world shrink to a single trembling point.

Fishes under the pad heard her sorrow. They were not grand rescuers with banners — only living creatures who disliked cruelty. They nibbled the stem until the lily pad broke free and floated with the current — away from the toad, into unknown water. Butterflies came. A white butterfly helped draw her along. For a time she was a tiny traveler on a green raft, held between fear and beauty, the river cupping her like a deep “Oo.”

In Andersen’s longer tale, many more trials follow — beetle, mouse, mole, and winter cold — before spring returns and a swallow carries her toward light. In this classroom telling for the vowel Oo, we keep the first cup of mystery: the flower opening, the love that holds close, the toad’s rough taking, and the small child adrift yet not abandoned by the living world.

Hold the “Oo”: hands gather near the heart. The letter U lives in that deep cup of holding — wonder and danger both drawn inward, small life precious in the hush.`,
  spreads: [
    {
      id: "u-01",
      kind: "opening",
      initialCap: true,
      body: "A magic barleycorn grew. The blossom opened — Oo — a girl no bigger than a thumb. Held close in awestruck mystery.",
    },
    {
      id: "u-02",
      kind: "picture",
      image: "/letters/u/spread-01.png",
      imageAlt: "Tiny child nestled inside an open flower cup",
      artPrompt: `${STYLE}. A tiny gentle child nestled inside an open flower cup, held close in soft light, awestruck mystery, wholesome. ${ART_NO_LETTER}`,
    },
    {
      id: "u-03",
      kind: "text",
      body: "By night a toad carried her walnut-shell bed to the river. She woke small and far from home — yet fishes and butterflies helped her float free. Mystery held close, even in peril.",
    },
    {
      id: "u-04",
      kind: "picture",
      image: "/letters/u/spread-02.png",
      imageAlt: "Cupped hands or nest holding a small warm light",
      artPrompt: `${STYLE}. Soft cupped hands or a nest holding a small warm light in deep blue hush. ${ART_NO_LETTER}`,
    },
    {
      id: "u-05",
      kind: "text",
      body: "Gesture: inward · close · mysterious. Singing sound Oo. The letter U — the cup that holds.",
    },
  ],
  outline: {
    cueWord: "Oo",
    formNote:
      "Capital U: a deep cup held close — mystery gathered in — like the flower that held Thumbelina.",
  },
};
