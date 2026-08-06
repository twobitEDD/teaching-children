import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";
import { SEIFERT_SINGING_SOUNDS, VOWEL_TEACHER_FRAME } from "../vowelsShared";

export const letterE: LetterStory = {
  id: "edge",
  letter: "E",
  primary: true,
  status: "ready",
  mode: "vowel",
  title: "The Two Goats · Eh",
  imageWord: "Edge",
  feeling: "Separation · differentiation · boundary (Ay / Eh)",
  gesture:
    "Hands draw a clear edge or gently push apart — “this / that.” Voice bright “Eh.”",
  culture: "Ancient Greek (Aesop) + Waldorf vowel gesture",
  region: "Mediterranean / Waldorf classroom",
  traditionalTitle: "The Two Goats (Aesop tradition) — mood: Eh / boundary",
  sourceNotes: `${SEIFERT_SINGING_SOUNDS.citation} Story image for Eh: Aesop’s two goats meeting on a narrow bridge (pride, boundary, consequence). Public-domain fable tradition.`,
  adaptations:
    "Expanded oral telling (~5–7 min). Restores the fable’s hard edge: pride, refusal to yield, both falling into the stream — then the clear learning of boundary. Wet and shaken, not graphic. Gesture: separation, differentiation, boundary. Letter is a print overlay.",
  pnwBridge:
    "A fallen log over a PNW creek — only room for one at a time; a living boundary.",
  tellAloud: `${VOWEL_TEACHER_FRAME}

Letter E — Eh / Ay — separation, differentiation, boundary.

Picture-story (Aesop, The Two Goats):

On either side of a deep mountain stream there lived herds of goats. The water ran cold and fast between steep banks. In spring it rose. In autumn it sang against the stones. Between the pastures ran a narrow bridge of wood — an edge over rushing water. It was strong enough for one careful crossing, but not for two who refused to make room. The old goats taught the young: wait your turn on the bridge. The young sometimes forgot.

One bright morning a goat from the east set her hooves on the bridge, thinking of sweet grass on the far side. From the west another goat stepped on at the same moment, thinking the same. They met in the middle. The water talked loud below them. Spray kissed their legs. The bridge was only as wide as a single path.

“I was here first,” said the eastern goat, lowering her horns a little. “Give way.”

“I will not,” said the western goat. “You give way. My pasture waits, and I am not afraid of you.”

A bird called from a willow. Neither goat listened. They stood nose to nose. Neither wished to seem weak before the other — or before any watching eyes on the banks. Each felt the boundary — here and there, you and I — and each, in pride, tried to own the whole edge at once.

They pushed. They stamped. Horns clicked. The bridge shivered. For a breath it seemed one might squeeze past if the other only softened — but neither softened. “Eh!” their breath came sharp, as if the sound itself were a line drawn between them.

Then — both lost their footing.

Down they tumbled into the cold stream with a great splash! The current caught them and spun them. They kicked and scrambled, wet and angry and astonished, until at last they dragged themselves out on opposite banks, dripping, shaken, and wiser than their pride had been. The bridge still stood — narrow as ever. The water still ran. Only their certainty had been washed away.

From that day the goats of those hills remembered: a narrow place is a true boundary. One may wait. One may yield a little. This… and that. You… and I. The edge asks for differentiation — or the water teaches it hard.

Hold the “Eh”: hands draw the edge. This… and that. The letter E lives in that clear boundary — and in the splash that comes when pride pretends the edge is wide enough for two stubborn wills.`,
  spreads: [
    {
      id: "e-01",
      kind: "opening",
      initialCap: true,
      body: "Two goats met on a narrow bridge — an edge over rushing water. “Give way!” “You give way!” Pride stood nose to nose.",
    },
    {
      id: "e-02",
      kind: "picture",
      image: "/letters/e/spread-01.png",
      imageAlt: "Two goats facing each other on a narrow bridge",
      artPrompt: `${STYLE}. Two goats facing on a narrow wooden bridge over a lively stream, tension of boundary and pride, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "e-03",
      kind: "text",
      body: "They pushed. The bridge shivered. Both tumbled into the cold stream — wet, shaken, wiser. A narrow place is a true boundary.",
    },
    {
      id: "e-04",
      kind: "picture",
      image: "/letters/e/spread-02.png",
      imageAlt: "Shoreline boundary where forest meets water",
      artPrompt: `${STYLE}. Forest meeting water at a sharp gentle shoreline boundary after a splash, clear edge of land and stream. ${ART_NO_LETTER}`,
    },
    {
      id: "e-05",
      kind: "text",
      body: "Gesture: edge · apart · distinct. Singing sound Eh. Here… and there. This… and that.",
    },
  ],
  outline: {
    cueWord: "Eh",
    formNote:
      "Capital E: tall spine with three arms — marking levels, separating space into clear parts.",
  },
};
