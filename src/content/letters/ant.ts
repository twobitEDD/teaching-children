import type { LetterStory } from "../types";
import { ART_STYLE as STYLE } from "../style";

export const letterAnt: LetterStory = {
  id: "ant",
  letter: "A",
  primary: false,
  status: "ready",
  mode: "consonant",
  title: "The Ant Who Worked",
  imageWord: "Ant",
  culture: "Ancient Greek (Aesop)",
  region: "Mediterranean / Greece",
  traditionalTitle: "The Ant and the Grasshopper (Aesop)",
  sourceNotes:
    "Drawn from Aesop’s fable traditionally titled “The Ant and the Grasshopper,” preserved in Greek and Latin collections and long retold for children in English. Public-domain motif: summer work, winter need, the industrious ant.",
  adaptations:
    "Full oral arc for ages 4–7 across short picture-book spreads: summer work, Grasshopper’s invitations, Ant’s reason, autumn, winter hunger, sharing, gentle lesson. Softened ending. American English.",
  pnwBridge:
    "Like ants busy on a damp Pacific Northwest trail after rain, this Ant keeps working while the world feels soft and green.",
  tellAloud: `Once, in a bright meadow, there lived a little Ant.

All through the long summer, the Ant worked. Morning light, noon heat, evening gold — step, step, step. She carried a seed down into her home under the earth. She carried a crumb. She carried a grain of wheat. She stacked them carefully where the rain could not spoil them and the cold could not reach them.

Nearby lived a Grasshopper with long legs and a bright song. He sprang through the tall grass and made music for the sun. One warm day he saw the Ant bent under her load.

“Ant!” he called. “Come play! Come sing with me! The day is soft and the flowers are open. Why do you work and work?”

The Ant set down her seed and wiped her brow. “I do like singing,” she said. “Truly I do. But listen — summer will not last forever. Winter will come. The meadow will turn quiet and white. There will be no seeds on the stems, and no crumbs in the sun. I am putting food away for those cold days.”

The Grasshopper laughed. “Winter is far away! Today is today!” And he hopped off to dance among the daisies.

Another week passed. The Ant was still working — seed, crumb, grain. Again the Grasshopper came. “Ant, leave that heavy work. The sky is blue!”

Again the Ant answered, kindly but firm: “When winter comes, I will be glad I did this.” And again the Grasshopper sang and played, and did not gather a single thing of his own.

Days grew shorter. The light turned the color of tea. Leaves loosened and drifted down. A chill walked through the grass. Then winter arrived — frost like sugar on every blade, a hush over the field, no insects humming, no soft picnic of summer left anywhere.

Inside her home, the Ant sat warm beside her careful store. She had enough. Outside, the Grasshopper searched and searched. The stems were bare. The ground was hard. His song had gone quiet in his throat. At last, shivering, he came to the Ant’s little door.

“Ant,” he said softly, “I am cold, and I am hungry. I sang all summer, and I saved nothing. May I have a little of what you gathered?”

The Ant looked at him for a long moment. Then she opened her home. She shared a little of what she had saved — enough to warm him, enough to teach him.

“Eat,” she said gently. “And remember. Next summer we can both work a little when the sun is high… and both sing a little when the work is done.”

And that is the story of the Ant — A for Ant — who worked with care, and still knew how to be kind.`,
  spreads: [
    {
      id: "ant-01",
      kind: "opening",
      initialCap: true,
      body: "Once, in a bright meadow, lived a little Ant. All summer she worked — morning, noon, evening gold. Seed, crumb, grain: stacked safe under the earth.",
    },
    {
      id: "ant-02",
      kind: "picture",
      image: "/letters/ant/spread-01.png",
      imageAlt: "A small ant carrying a seed across a sunlit meadow",
      artPrompt: `${STYLE}. A tiny ant carrying a round seed across a sunny meadow with soft grasses and wildflowers, viewed close and gentle, no people.`,
    },
    {
      id: "ant-03",
      kind: "text",
      body: "“Ant! Come play!” sang the Grasshopper. “I like singing,” said the Ant, “but winter will come. I am putting food away for those cold days.” He laughed — “Winter is far away!” — and danced on.",
    },
    {
      id: "ant-04",
      kind: "picture",
      image: "/letters/ant/spread-03.png",
      imageAlt: "A grasshopper singing in tall grass while an ant works nearby",
      artPrompt: `${STYLE}. A cheerful grasshopper singing in tall sunlit meadow grass while a small ant carries food in the background, gentle and lively, no people.`,
    },
    {
      id: "ant-05",
      kind: "text",
      body: "Again and again he called her to play. Again and again she worked. Days shortened. Leaves turned the color of tea. A chill walked through the grass.",
    },
    {
      id: "ant-06",
      kind: "picture",
      image: "/letters/ant/spread-04.png",
      imageAlt: "An ant continuing to work as autumn leaves drift down",
      artPrompt: `${STYLE}. Soft autumn meadow, tea-colored falling leaves, a determined little ant carrying a crumb toward her nest, cool gentle light, no people.`,
    },
    {
      id: "ant-07",
      kind: "text",
      body: "Winter came — frost, hush, bare stems. The Ant sat warm with her store. Outside, the Grasshopper was cold and hungry. He came shivering to her door.",
    },
    {
      id: "ant-08",
      kind: "picture",
      image: "/letters/ant/spread-02.png",
      imageAlt: "An ant sharing food with a cold grasshopper in winter",
      artPrompt: `${STYLE}. Winter meadow with soft frost, a cozy ant nest opening in the earth, a kind ant sharing a crumb with a quiet grasshopper, gentle and warm, no people.`,
    },
    {
      id: "ant-09",
      kind: "text",
      body: "She opened her home and shared. “Next summer,” she said, “we can both work a little, and both sing a little.” A for Ant — who worked with care, and still knew how to be kind.",
    },
    {
      id: "ant-10",
      kind: "picture",
      image: "/letters/ant/spread-05.png",
      imageAlt: "Ant and grasshopper together in a soft spring meadow",
      artPrompt: `${STYLE}. Soft spring meadow, a small ant and a grasshopper side by side in gentle morning light, peaceful friendship, no people.`,
    },
  ],
  outline: {
    cueWord: "Ant",
    formNote:
      "Capital A: two mountain strokes meeting at the peak, then a crossbar like a little bridge. Let the children feel the strong peak — like an ant’s determined path up and over.",
  },
};
