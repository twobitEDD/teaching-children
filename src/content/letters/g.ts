import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterG: LetterStory = {
  id: "goose",
  letter: "G",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Golden Goose",
  imageWord: "Goose",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "The Golden Goose (Die goldene Gans), Grimm",
  sourceNotes:
    "Brothers Grimm “The Golden Goose”: Simpleton shares food with a little grey man, receives a goose with golden feathers; people stick fast; a princess who never laughs finally laughs; fortune follows. Public-domain Grimm tradition.",
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps the brothers’ scorn, the grey man’s test, sticky parade comedy, and the princess who could not laugh. Kindness rewarded without flattening the mockery or the stuck-fast consequence. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "Geese in noisy Vs over PNW rivers — ordinary birds that still feel a little golden in morning mist.",
  tellAloud: `There was once a man who had three sons. The two eldest were clever in the world’s eyes — quick tongues, proud shoulders. The youngest was called Simpleton, and they mocked him for it. When there was hard work, they left him the dull share. When there was praise, they took it for themselves.

One day the eldest went into the forest to cut wood. His mother packed him a fine cake and a bottle of wine. In the woods he met a little grey man who bowed and said, “I am hungry and thirsty. Share a little of your cake and wine with me.”

“If I give you any,” said the eldest sharply, “I shall have too little for myself.” He turned away and began to chop. But the axe slipped; he cut his arm and had to go home bleeding and empty-handed. That is how it went when greed met the little grey man.

The second brother went next, with cake and wine as fine as the first. Again the little grey man asked for a share. Again he was refused. Again misfortune followed — a stumble, a bruise, wood left uncut — and he limped home sour-faced.

Then Simpleton said, “Father, let me try.”

They laughed. “You?” cried his brothers. “You will only make a fool of yourself.” But his father, weary of spoiled trips, at last allowed it. Simpleton’s mother gave him only a hard cake baked with water and a bottle of sour beer — for they thought little of him.

In the forest the little grey man appeared once more. “I am hungry and thirsty,” he said. “Share with me.”

Simpleton looked at his poor cake and sour drink. “It is not fine,” he said honestly, “but what I have, I will share.” They sat together. And as they ate, the cake became good and the drink became sweet — for kindness changes more than manners.

“You have a good heart,” said the little grey man. “Cut that tree.” Simpleton set his axe to the trunk. When the tree fell, there from the roots walked a Goose with feathers of pure gold — soft, shining, alive with wonder.

“Take her,” said the little grey man. “She will bring you luck — though luck may look strange at first.”

Simpleton tucked the Golden Goose under his arm and set off toward town, proud and careful. At an inn, the landlord’s daughters saw the gleaming feathers and burned with curiosity. One reached to pluck a single golden plume — and her fingers stuck fast! She could not let go. The second sister grabbed her to pull her free — and stuck too! The third joined the tug — and stuck as well! Soon Simpleton walked on, and behind him trailed three sisters glued to the goose and to each other, hopping and complaining.

A parson saw the strange parade and cried, “Have you no shame, girls, running after a lad like that?” He seized the last sister by the hand to scold her free — and stuck! A sexton came to help the parson — and stuck! Two farmers in a field reached out — and stuck!

On they went, a long laughing, shouting chain behind the Golden Goose — fear mixed with comedy, pride undone by sticky magic. Simpleton did not mean them harm; he only walked, and the goose shone, and the world stuck to what it tried to take without leave.

Now the king of that country had a daughter who was so serious she had never laughed. The king had promised that whoever could make her laugh might win her hand and a share of fortune. Many had tried with jokes and tumbles. She only looked away.

Then she saw Simpleton and the Golden Goose and the whole sticky parade stumbling and arguing down the road — and at last she laughed, bright as a bell, until tears stood in her eyes.

The sticky hands let go. The parade fell apart into ordinary people again, rubbing their fingers, half angry and half relieved. Simpleton stood with his goose, kind still, and luck — strange luck — had opened a door.

In the fullest Grimm tellings, more trials follow before the ending is complete. In this classroom telling we keep what the children need most: scorn turned aside by sharing, a golden wonder, the sticky cost of greedy touching, and laughter breaking a long silence.

That is the story of the Goose — G for Goose — golden feathers, and a heart that shared.`,
  spreads: [
    {
      id: "g-01",
      kind: "opening",
      initialCap: true,
      body: "Two proud brothers refused to share with a little grey man — and came to grief. Simpleton shared his poor cake. Kindness opened the forest.",
    },
    {
      id: "g-02",
      kind: "picture",
      image: "/letters/g/spread-01.png",
      imageAlt: "A golden goose in a forest clearing",
      artPrompt: `${STYLE}. A magical goose with soft golden feathers in a gentle forest clearing, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "g-03",
      kind: "text",
      body: "From the tree’s roots walked a Goose with feathers of pure gold. In town, curious fingers touched — and stuck! More stuck! A long parade trailed the Golden Goose.",
    },
    {
      id: "g-04",
      kind: "picture",
      image: "/letters/g/spread-02.png",
      imageAlt: "A comical chain of people stuck behind the golden goose",
      artPrompt: `${STYLE}. A boy carrying a golden goose with a comical chain of townspeople stuck behind, warm fairy-tale street, wholesome humor, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "g-05",
      kind: "text",
      body: "A princess who had never laughed saw them — and laughed at last, bright as a bell. Sticky hands let go. Kindness had brought strange luck.",
    },
    {
      id: "g-06",
      kind: "picture",
      image: "/letters/g/spread-03.png",
      imageAlt: "A princess laughing near the proud golden goose",
      artPrompt: `${STYLE}. A young princess laughing joyfully near a proud golden goose in a soft garden, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "g-07",
      kind: "text",
      body: "That is the story of the Goose — golden feathers, and a heart that shared.",
    },
  ],
  outline: {
    cueWord: "Goose",
    formNote:
      "Capital G: a wide open curve like a C, then a little inward shelf — like a goose tucking its neck into a rounded body.",
  },
};
