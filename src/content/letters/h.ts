import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterH: LetterStory = {
  id: "house",
  letter: "H",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Little House",
  imageWord: "House",
  culture: "Russian folk tradition (Teremok)",
  region: "Russia / Eastern Europe",
  traditionalTitle: "Teremok (Теремок) — the little house in the field",
  sourceNotes:
    "Russian folk tale Teremok: a little house (or hollow tree / wooden terem) stands in a field; animals arrive one by one asking who lives there and join until a large animal comes — often ending with collapse and rebuilding. Public-domain Slavic folk tradition. Locked pick: House on the animals’ shared place / road of creatures seeking shelter.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Keeps successive arrivals, pride of the cozy house, and the moment the house cannot hold everyone — then shared rebuilding. Softens crush/destruction without erasing consequence. American English.",
  pnwBridge:
    "Along a PNW forest edge, a cedar stump or trail shelter can feel like a tiny house waiting for whoever needs dry ground.",
  tellAloud: `In a wide green field stood a little House — no bigger than a playhouse, neat as a nutshell, with a tiny door and a roof that shone in the sun. No one knew who had left it there. The wind walked around it. The grass whispered at its walls. It waited.

First came a Mouse, soft-footed, looking for a safe place. She sniffed the doorway. “Little House, little House,” she called in a small voice, “who lives in this little House?”

No one answered.

“Then I will live here,” said the Mouse, and she went in. She swept a corner with her tail. She felt proud and warm. A house of her own!

Next came a Frog, hopping from the wet meadow. “Little House, little House, who lives in this little House?”

“I do,” squeaked the Mouse. “I am the Mouse. Who are you?”

“I am the Frog. May I live with you?”

“Come in,” said the Mouse, for the House felt roomy enough for two. They sat together and listened to the rain on the roof.

Then a Hare came down the animals’ road — the path the creatures used to cross the field. He stopped at the little House. “Who lives here?”

“Mouse and Frog,” they answered. “Who are you?”

“I am the Hare. May I come in?”

“Come in,” they said. Now three lived in the House. It was crowded, but cozy. They told stories. They shared crumbs.

A Fox arrived next, smelling of wildflowers and cunning. “Little House, little House — who lives here?”

“Mouse, Frog, and Hare. Who are you?”

“I am the Fox. Room for one more?”

They looked at one another. The House was small. Still, kindness opened the door. “Come in — but gently.”

Then a Wolf came along the same road, heavy-footed. He asked the same question. He was let in too, though the walls creaked and the floor felt tight under so many paws. Outside, the field grew quiet. Inside, the House held its breath.

At last a Bear came lumbering down the animals’ road. He was large — larger than the House seemed ready for. “Little House, little House,” he rumbled, “who lives in this little House?”

“Mouse, Frog, Hare, Fox, and Wolf!” they cried, a little afraid. “Who are you?”

“I am the Bear. I need a house too.”

They tried to make room. They squeezed. They pushed. The Bear set one great paw on the roof to climb in —

Crack!

The little House groaned. Timbers split. The roof tipped. Down came the walls in a soft, dusty tumble — not blood, not cruelty, but the plain truth: a house too small for every creature at once will break.

For a moment everyone sat in the wreckage, surprised and sorry. The Mouse’s whiskers trembled. The Bear hung his head. “I did not mean to ruin it,” he said.

“Then we will build again,” said the Hare. “A bigger House — for all of us who share this road.”

So they worked. Frog fetched soft mud. Fox found straight sticks. Wolf dragged branches. Bear lifted the heavy logs no one else could move. Mouse ran between them with bits of moss for the seams. By evening a new House stood in the field — wider, stronger, with room enough and a door that faced the animals’ road in welcome.

That night they slept under one roof, learning what the little House had taught: shelter is precious — and sharing it means building with care.

That is the story of the House — H for House — a home on the creatures’ road, made large enough for many.`,
  spreads: [
    {
      id: "h-01",
      kind: "opening",
      initialCap: true,
      body: "In a green field stood a little House, neat as a nutshell. A Mouse found it empty. “Then I will live here,” she said — proud and warm.",
    },
    {
      id: "h-02",
      kind: "picture",
      image: "/letters/h/spread-01.png",
      imageAlt: "A tiny wooden house standing alone in a green field",
      artPrompt: `${STYLE}. A tiny cozy wooden storybook house alone in a wide green meadow, warm daylight, inviting doorway, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "h-03",
      kind: "text",
      body: "Frog, Hare, Fox, and Wolf came down the animals’ road and asked to share. The House grew crowded, walls creaking — still kindness opened the door.",
    },
    {
      id: "h-04",
      kind: "picture",
      image: "/letters/h/spread-02.png",
      imageAlt: "Small forest animals gathered at the doorway of a little house",
      artPrompt: `${STYLE}. Gentle forest animals (mouse frog hare fox) gathered at the open door of a tiny meadow house, cozy crowded welcome, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "h-05",
      kind: "text",
      body: "Then the Bear came. The little House could not hold him — crack! Down it tumbled. Sorry and surprised, they chose to build again, wider and stronger, together.",
    },
    {
      id: "h-06",
      kind: "picture",
      image: "/letters/h/spread-03.png",
      imageAlt: "Animals rebuilding a larger sturdy house together",
      artPrompt: `${STYLE}. Forest animals including a gentle bear rebuilding a larger wooden house together in a meadow, hopeful teamwork, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "h-07",
      kind: "text",
      body: "That is the story of the House — a home on the creatures’ road, made large enough for many.",
    },
  ],
  outline: {
    cueWord: "House",
    formNote:
      "Capital H: two tall posts and a bridge between — like the upright walls of a house with a crossbeam holding them together.",
  },
};
