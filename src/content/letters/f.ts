import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterF: LetterStory = {
  id: "firebird",
  letter: "F",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Firebird",
  imageWord: "Firebird",
  culture: "Russian / Slavic fairy-tale tradition",
  region: "Russia / Eastern Europe",
  traditionalTitle: "The Firebird (Жар-птица) — Russian wonder tale motif",
  sourceNotes:
    "Drawn from Russian fairy-tale tradition of the Firebird (Tsarevitch and the Firebird cycles; Afanasyev collections and later retellings). Public-domain folk/literary tradition. Expanded luminous episode for ages 4–7.",
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps night garden wonder, the hunt’s hunger for beauty, startle and flight, and the feather as lasting call — not a full multi-quest cycle. No graphic cruelty. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "A sudden flash of oriole or evening grosbeak in a dark fir — a spark of fire-color in the PNW green.",
  tellAloud: `In a quiet kingdom there was a garden the old gardeners loved more than any other place. By day it held apple trees and cool paths. By night it should have slept — yet something luminous had begun to visit it.

The king’s youngest son, a prince with restless feet and a listening heart, heard the gardeners whisper. “Something comes when the moon is thin,” they said. “The apples shine as if lit from within. Feathers of gold catch in the grass. We are afraid to speak too loudly of it — beauty like that can trouble a whole court.”

One night the prince could not sleep. He rose, wrapped a cloak about his shoulders, and went barefoot into the dark orchard. The air smelled of leaf and dew. Then — ah — the garden woke with soft fire.

Into it flew the Firebird.

Her feathers were not ordinary feathers. They burned with gold and rose, as if a little sun had grown wings and learned to be gentle. When she landed on an apple-bough, the whole tree glowed. When she dipped her beak toward a fruit, light ran along the skin like warm honey. The prince stood in shadow and felt wonder pierce him so sharply he almost cried out.

“What beauty,” he whispered. “What living flame.”

He stepped closer. A twig snapped under his foot.

The Firebird startled. She rose in a spray of sparks — bright, sudden, gone into the high dark — and the orchard fell back toward ordinary night. But one feather drifted down, turning slowly, and settled into the prince’s open hand.

It was warm. It was bright. It did not burn him, yet it would not go out. That single feather lit the path home like a lantern. In his chamber he set it in a cup of water, and its glow painted the walls until dawn.

Morning brought the court. Courtiers peered and whispered. The feather’s light made even stone walls look softer — and greed woke in some eyes. The king frowned with hunger of a different kind — not for food, but for possession. “Find the bird,” some urged. “Cage it. Make the kingdom famous. Think of the songs! Think of the gold!”

The prince shook his head. He had felt the Firebird’s fear when the twig snapped. He had seen how freely she belonged to night and sky. “She is not a jewel to lock away,” he said. “She is a wonder that visits. If we hunt her only to own her, we will turn beauty into a wound.”

A few courtiers laughed at him. Others fell silent, uneasy, because they knew he spoke true.

Still the feather called to him. Night after night he returned to the garden — sometimes alone, sometimes with a quiet gardener who loved the trees more than glory. They waited without nets. They spoke in low voices. Once more the Firebird came, farther off this time, wary as wild things are after fright. She did not land near him. She circled high, a living ember against the stars, and the prince did not chase. He only watched, and held the feather, and learned that some lights are meant to be met with reverence.

In the old Russian tellings, princes often travel far for the Firebird — through forests, hard tasks, betrayal, and strange helpers — before wonder and danger finish their work. In this telling we keep the first true meeting: the night, the glow, the startle, the feather, the court’s hunger, and the choice not to turn wonder into a cage.

From that night on, the prince’s heart carried the Firebird’s light. When the court spoke of gold and fame, he remembered wings. When fear made people greedy, he remembered the soft burning that asked for nothing but to be seen. And when children of that kingdom later heard of a flame with feathers, they were taught: beauty may visit you — meet it, do not cage it.

That is the story of the Firebird — F for Firebird — a flame with wings, and a beauty too alive to own.`,
  spreads: [
    {
      id: "f-01",
      kind: "opening",
      initialCap: true,
      body: "By night something luminous visited the royal garden. The prince could not sleep. He went barefoot among the apple trees — and the orchard woke with soft fire.",
    },
    {
      id: "f-02",
      kind: "picture",
      image: "/letters/f/spread-01.png",
      imageAlt: "A luminous firebird in a night garden",
      artPrompt: `${STYLE}. A luminous firebird with golden-rose feathers perched in a night orchard, magical glow, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "f-03",
      kind: "text",
      body: "Feathers of gold and rose — as if a little sun had grown wings. A twig snapped. She rose in sparks. One glowing feather drifted into the prince’s hand — warm, bright, a lantern of wonder.",
    },
    {
      id: "f-04",
      kind: "picture",
      image: "/letters/f/spread-02.png",
      imageAlt: "A glowing firebird feather lighting a path",
      artPrompt: `${STYLE}. A single glowing golden feather held in soft light, illuminating a garden path, wondrous natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "f-05",
      kind: "text",
      body: "The court hungered to cage her. The prince refused. Night after night he watched from afar — reverence, not capture. Beauty too alive to own.",
    },
    {
      id: "f-06",
      kind: "picture",
      image: "/letters/f/spread-03.png",
      imageAlt: "Firebird flying upward leaving a trail of light",
      artPrompt: `${STYLE}. Firebird flying upward through night sky leaving a soft trail of light, hopeful natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "f-07",
      kind: "text",
      body: "That is the story of the Firebird — a flame with wings, and a light the heart may carry without locking away.",
    },
  ],
  outline: {
    cueWord: "Firebird",
    formNote:
      "Capital F: a tall spine with two bright arms — like a flame’s rising stroke and two bars of wing-light.",
  },
};
