import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";
import { SEIFERT_SINGING_SOUNDS, VOWEL_TEACHER_FRAME } from "../vowelsShared";

export const letterO: LetterStory = {
  id: "whole",
  letter: "O",
  primary: true,
  status: "ready",
  mode: "vowel",
  title: "Stone Soup · Oh",
  imageWord: "Whole",
  feeling: "Embracing warmth · wonder · wholeness (Oh)",
  gesture:
    "Arms curve into a round embrace — holding the whole. Voice rounds warm “Oh.”",
  culture: "European folk + Waldorf vowel gesture",
  region: "Europe (folk tradition) / Waldorf classroom",
  traditionalTitle: "Stone Soup (European folk) — mood: Oh / wholeness",
  sourceNotes: `${SEIFERT_SINGING_SOUNDS.citation} Story image for Oh: European “Stone Soup” — hungry strangers, closed doors, then sharing into a whole. Public-domain folk tradition.`,
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps village suspicion and closed doors before the circle opens — scarcity and fear are real; wholeness comes through gradual gifts. Gesture: Oh = wholeness, embrace, wonder. Letter is a print overlay.",
  pnwBridge:
    "A potluck after a PNW storm — everyone brings a little; the circle feels whole. “Oh.”",
  tellAloud: `${VOWEL_TEACHER_FRAME}

Letter O — Oh — embracing warmth, wonder, wholeness.

Picture-story (Stone Soup):

Hungry travelers came down a long road to a village at dusk. Dust covered their cloaks. Their feet were sore. Their stomachs were empty. Smoke rose from chimneys, and the smell of cooking made their hunger sharper. They knocked at the first door.

“Please — a little food?”

The door shut. “We have nothing to spare.”

At the second house the same. At the third, a voice through a crack: “Hard times. Go elsewhere.” Curtains twitched. A dog barked and was hushed. People were afraid that if they gave, they themselves would go hungry before winter. Fear made the village small and separate — each house a closed circle of its own, guarding its crust.

The travelers did not rage. Anger would only shut the doors tighter. They went to the square, gathered sticks, built a fire, filled a pot with water from the well, and set a smooth clean stone in the bottom as if it were the most natural thing in the world. They stirred. They sniffed. They nodded to each other as cooks do when a secret is beginning.

“What are you making?” asked a child who had crept near, eyes wide.

“Stone soup,” said the travelers cheerfully. “The finest kind — though it will be a bit thin without a carrot or two. A shame. With a carrot it sings.”

The child ran home. Soon a woman appeared with three carrots — curious more than kind at first. Into the pot they went. Steam rose sweet. Another neighbor brought an onion, pretending it was nothing. A potato followed. A scrap of meat. A pinch of salt. A handful of barley. A sprig of herbs from a windowsill. Each gift seemed small alone. Together they thickened the broth into something rich and fragrant that pulled people from their doorways by the nose.

Doors that had been shut began to open. People brought bowls and spoons. They stood in a widening ring around the fire — and oh — how complete it felt. The stone still sat at the bottom, honest as ever, but the soup was real, made of many hands. Warmth passed from spoon to spoon. Stories started. Laughter returned. The village that had been separate became, for one night, a whole.

The travelers slept under a borrowed blanket. In the morning they left the stone by the well as a reminder: when fear closes every door, wonder can still open a circle — if someone begins, and others dare to add their little gift.

Hold the “Oh”: round arms, warm chest. The letter O lives in that embracing circle — after scarcity, after suspicion, when many become one warmth.`,
  spreads: [
    {
      id: "o-01",
      kind: "opening",
      initialCap: true,
      body: "Hungry travelers knocked. Doors shut. “Nothing to spare.” In the square they set a pot and a stone: “Stone soup!” Curiosity cracked the first closed door.",
    },
    {
      id: "o-02",
      kind: "picture",
      image: "/letters/o/spread-01.png",
      imageAlt: "Villagers in a circle around a round pot of soup",
      artPrompt: `${STYLE}. Gentle villagers in a warm circle around a round cooking pot of soup, embracing community after closed doors. ${ART_NO_LETTER}`,
    },
    {
      id: "o-03",
      kind: "text",
      body: "Carrot, onion, potato, salt — each small gift joined the round. Oh — warmth. Wonder. Wholeness. Many hands, one soup.",
    },
    {
      id: "o-04",
      kind: "picture",
      image: "/letters/o/spread-02.png",
      imageAlt: "A full moon of embracing light over a quiet village",
      artPrompt: `${STYLE}. Full soft moon as a perfect circle of embracing light over a quiet village. ${ART_NO_LETTER}`,
    },
    {
      id: "o-05",
      kind: "text",
      body: "Gesture: embrace · warm · whole. Singing sound Oh. The letter O — the round that holds everyone.",
    },
  ],
  outline: {
    cueWord: "Oh",
    formNote:
      "Capital O: one complete round — embrace, warmth, the whole — like the soup pot and the circle.",
  },
};
