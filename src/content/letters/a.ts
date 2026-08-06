import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";
import { SEIFERT_SINGING_SOUNDS, VOWEL_TEACHER_FRAME } from "../vowelsShared";

export const letterA: LetterStory = {
  id: "awe",
  letter: "A",
  primary: true,
  status: "ready",
  mode: "vowel",
  title: "The Star Money · Ah",
  imageWord: "Awe",
  feeling: "Surprise · awe · admiration (Ah)",
  gesture:
    "Arms and face open in wonder — a soft gasp of admiration. Voice sings warm open “Ah.”",
  culture: "German (Brothers Grimm) + Waldorf vowel gesture",
  region: "Central Europe / Waldorf classroom",
  traditionalTitle: "The Star Money (Die Sterntaler), Grimm — mood: Ah / awe",
  sourceNotes: `${SEIFERT_SINGING_SOUNDS.citation} Story image for Ah: Grimm’s “The Star Money” (orphan girl gives away all; stars fall as coins). Public-domain Grimm.`,
  adaptations:
    "Expanded oral telling (~5–7 min) for the vowel mood Ah. Keeps real need — orphan, cold, giving until nothing remains — then the sky’s gift. Not a poverty lecture; substance held in image. Gesture map locked: Ah = surprise, awe, admiration. Letter is a print overlay.",
  pnwBridge:
    "A clear PNW night when stars suddenly show between clouds — that open “Ah” of surprise.",
  tellAloud: `${VOWEL_TEACHER_FRAME}

Letter A — Ah — surprise, awe, admiration.

Picture-story (Grimm, The Star Money):

There was once a little girl whose father and mother had died. She was so poor she had no room to live in and no bed to sleep in. Neighbors had little enough for themselves. At last she had nothing left but the clothes she wore and a small bit of bread in her hand that a kind soul had given her. Yet her heart was good, and she walked out into the open country trusting that the world still held mercy.

The road was long. Fields stood empty after harvest. Wind moved in the stubble. She did not complain; she walked.

She met a poor man who said, “Ah, give me something to eat. I am so hungry.” The girl looked at her only bread, then at his thin face. She gave him the whole piece and said, “May God bless you,” and walked on with empty hands.

Next she met a child who was cold and crying beside a ditch. “I am freezing,” said the child. “Please — your hood.” The girl took off her little hood — the last warm thing for her own head — and settled it on the child. Farther on she met another who had no jacket against the evening chill, and she gave her jacket. Then another who begged for her dress — for need keeps meeting need upon the road — and she gave that too, until she came into a forest at dusk wearing only her little shift, barefoot on the cold path.

Night deepened. The wind found her between the trunks. Owls called. She thought of the warm rooms she did not have, of a mother’s hand that would not come again — and still, when one more child stood shivering among the trees and begged for her last shift, she thought, “It is dark; no one will see me. I will not keep what another needs more.” She gave away even that, and stood in the forest with nothing left to give — poor as bare earth, open as an empty bowl.

Then — ah! —

The stars began to fall from the sky.

They were not ordinary stars. Soft and bright, they came down like gifts of light and became shining coins upon the ground and in her apron — as many as she could gather. And there appeared a fine new shift of the softest linen. She put it on and gathered the star-money, gazing upward in wonder and admiration, arms open to the night that had answered her. Surprise first. Then awe. Then a quiet admiration for a sky that could be so generous.

Hold the “Ah”: open arms, behold the light. Do not rush. The letter A lives in that peak of wonder — after emptiness, after giving, when the sky opens.`,
  spreads: [
    {
      id: "a-01",
      kind: "opening",
      initialCap: true,
      body: "A poor orphan girl walked into the open country with only bread and the clothes she wore. She met the hungry, the cold, the begging — and gave, and gave again.",
    },
    {
      id: "a-02",
      kind: "picture",
      image: "/letters/awe/spread-01.png",
      imageAlt: "Stars falling into an open apron at night",
      artPrompt: `${STYLE}. A child with open apron catching soft falling stars at night, sense of awe and admiration after hardship. ${ART_NO_LETTER}`,
    },
    {
      id: "a-03",
      kind: "text",
      body: "In the forest at last she gave away even her shift. Empty hands. Cold night. Then — Ah! — stars fell like bright gifts. Wonder. Awe. Admiration.",
    },
    {
      id: "a-04",
      kind: "picture",
      image: "/letters/awe/spread-02.png",
      imageAlt: "Open night sky of wonder and falling star-light",
      artPrompt: `${STYLE}. Wide night sky opening in awe, golden star-rays over a quiet forest path. ${ART_NO_LETTER}`,
    },
    {
      id: "a-05",
      kind: "text",
      body: "Gesture: open · behold · admire. Singing sound Ah. The letter A lives in that peak of wonder.",
    },
  ],
  outline: {
    cueWord: "Ah",
    formNote:
      "Capital A: two strokes rising to a peak of wonder, crossbar like a held breath of admiration.",
  },
};
