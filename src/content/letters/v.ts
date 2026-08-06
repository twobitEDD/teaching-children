import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterV: LetterStory = {
  id: "vasilisa",
  letter: "V",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "Vasilisa and the Little Doll",
  imageWord: "Vasilisa",
  culture: "Russian folk",
  region: "Russia / Eastern Europe",
  traditionalTitle:
    "Vasilisa the Beautiful (Василиса Прекрасная) — doll-helper tradition (Afanas’ev)",
  sourceNotes:
    "Russian wonder-tale “Vasilisa the Beautiful” (Alexander Afanas’ev collection): a dying mother gives Vasilisa a little doll that helps when fed and consulted; stepmother cruelty sends Vasilisa for fire to Baba Yaga; the doll guides tasks and safe return with a glowing skull-lantern. Public-domain Afanas’ev tradition. Classroom telling centers the doll-helper and softens witch dread.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Vasilisa and the little doll’s quiet help. Minimizes Baba Yaga horror (forest hut as stern trial, not graphic fear); keeps stepmother injustice, courage, and light brought home. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "On dark PNW winter evenings, a single kitchen lamp in a cabin window can feel like courage. Children who keep a small pocket treasure — a stone, a tiny figure — know how Vasilisa’s doll felt: a friend you feed with attention.",
  tellAloud: `Once in a Russian village there lived a girl named Vasilisa. Winters were long. Summers smelled of hay and river mud. Her mother loved her with a love as steady as bread warm from the oven. When the mother grew ill and knew she must leave the world of stoves and songs, she called Vasilisa close to the bed and placed a little doll in her hands — small enough for a pocket, sewn with care, eyes bright as dew.

“Keep her with you always,” said the mother. “If you are in trouble, give her a sip of milk and a crumb, and ask her help. She will tell you what to do. Do not show her to those who mock. Bless you, my child.” Then the mother died, and Vasilisa’s tears fell like quiet rain on the doll’s dress.

Soon the father, lonely and hoping for order, married again. The stepmother and her daughters were sharp-tongued and lazy. They gave Vasilisa the hardest chores — ash from the stove, water from the well in the dark, cold mornings while they slept — and mocked her for working well. “Look at Vasilisa,” they sneered, “princess of the broom.” Vasilisa did not answer spite with spite. At night, when the house slept and the cricket sang, she took out the little doll, shared a crumb and a drop of milk, and whispered her troubles into the quiet. The doll’s eyes shone. “Do not fear,” it said softly. “Sleep. Morning is wiser than evening.” And somehow the work went better by day, as if kind hands had helped in secret while pride looked the other way.

One evening the stepmother put out all the fires in the house until the rooms went cold and black. She said with a false smile, “Vasilisa, go to the forest house and fetch us light. You are so clever — surely you can manage.” The stepsisters giggled behind their sleeves. The forest path was dark. Pine resin smelled sharp. Owls called. Vasilisa walked with the doll in her pocket, heart thumping against it, until she came to a hut that stood restless among the trees — a place of a stern forest witch called Baba Yaga, who was not kind, and not patient, and not to be treated lightly.

The witch’s eyes were bright and measuring, like coals that think. “Why have you come, girl?”

“For fire,” said Vasilisa, polite and afraid. “My stepmother sent me.”

“Work first,” said Baba Yaga. “Sort the grain from the dirt. Clean the yard. Sweep what must be swept. Do what I set — or you will not leave with light.”

Vasilisa’s hands trembled at the size of the tasks. In a quiet corner, away from the witch’s sharp glance, she fed the doll. “Help me,” she whispered. The doll answered, “Go to sleep. I will do it.” By morning the grain was sorted into clean heaps, the yard swept, order shining where chaos had been. Baba Yaga frowned at such success. She set harder work — more sorting, more cleaning, more impossible piles. Again Vasilisa fed the doll. Again she slept. Again she rose to finished labor and kept her courtesy, saying “please” and “thank you” even in that strange house.

At last Baba Yaga asked, narrowing her eyes, “How do you manage what others cannot?”

Vasilisa said truly, without boasting, “My mother’s blessing helps me.”

The witch disliked blessings in her hut; they sat wrong with her old hunger. “Take your fire and go, then.” She gave Vasilisa a skull-lantern with eyes of living flame — light to carry home through the trees, fierce and honest. The doll guided the path with tiny whispered turns: left at the birch, right at the stone. When Vasilisa reached the stepmother’s gate, the fierce light shone so true that spite could not bear it; the hard-hearted ones fled the glare, and the house was left to quiet and the smell of cold ash cooling.

In fuller tellings Vasilisa’s road continues toward a city, a loom of gold, and a different kind of recognition. In this classroom telling we keep the heart: a girl named Vasilisa, a mother’s doll, courage on a dark path, and help that comes when we feed what is small and good.

That is the story of Vasilisa — V for Vasilisa — who carried her mother’s blessing in a little doll’s hands.`,
  spreads: [
    {
      id: "v-01",
      kind: "opening",
      initialCap: true,
      body: "Dying, Vasilisa’s mother gave her a little doll. ‘Feed her and ask her help,’ she said. When a hard stepmother sent Vasilisa into the dark forest for fire, the doll went too — in her pocket, near her heart.",
    },
    {
      id: "v-02",
      kind: "picture",
      image: "/letters/v/spread-01.png",
      imageAlt: "Vasilisa holding a small doll given by her mother",
      artPrompt: `${STYLE}. A young Russian girl Vasilisa gently holding a small cloth doll in a humble cottage, warm lamplight, tender farewell mood without sentimentality, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "v-03",
      kind: "text",
      body: "In the forest hut, stern tasks waited. Vasilisa shared crumbs with the doll and slept. By morning the work was done. Courtesy and blessing outlasted fear.",
    },
    {
      id: "v-04",
      kind: "picture",
      image: "/letters/v/spread-02.png",
      imageAlt: "Vasilisa in a forest hut with grain sorted and yard cleared",
      artPrompt: `${STYLE}. Vasilisa standing in a rustic forest hut courtyard at dawn with sorted grain baskets and a swept yard, quiet accomplishment, soft misty trees, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "v-05",
      kind: "text",
      body: "She carried home a lantern of living light. Spite could not bear its truth. Vasilisa — and her mother’s doll — had brought the fire.",
    },
    {
      id: "v-06",
      kind: "picture",
      image: "/letters/v/spread-03.png",
      imageAlt: "Vasilisa walking home through trees with a glowing lantern",
      artPrompt: `${STYLE}. Vasilisa walking a dark forest path carrying a glowing lantern that lights the trees softly, hopeful and brave, doll tucked nearby, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "v-07",
      kind: "text",
      body: "That is the story of Vasilisa — V for Vasilisa — who carried her mother’s blessing in a little doll’s hands.",
    },
  ],
  outline: {
    cueWord: "Vasilisa",
    formNote:
      "Capital V: two strokes meeting at a point below — like a valley, or two arms of a path joining toward home.",
  },
};
