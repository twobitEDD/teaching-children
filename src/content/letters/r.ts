import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterR: LetterStory = {
  id: "rabbit",
  letter: "R",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Rabbit and the Lion",
  imageWord: "Rabbit",
  culture: "Indian (Panchatantra)",
  region: "South Asia / classical India",
  traditionalTitle:
    "The Rabbit and the Lion (lion at the well) — Panchatantra / Hitopadesha tradition",
  sourceNotes:
    "Classical Indian fable tradition (Panchatantra / related Hitopadesha tellings): a man-eating lion demands daily animal tribute; a clever rabbit delays, leads the lion to a well, and shows him his own reflection as a rival lion; the lion leaps in and perishes. Public-domain Sanskrit/English tradition paraphrased. Distinct from Joel Chandler Harris “Brer Rabbit” framing (not used). American English classroom telling.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Rabbit as soft trickster wit. Softens predation and the lion’s end (leap into the well as pride’s consequence, no gore). Keeps fear, cleverness, and community relief. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "In PNW brush and meadow edges, cottontails freeze, then zigzag — small bodies, quick minds. Watching one vanish into salal, you remember that wit can be a kind of courage.",
  tellAloud: `Once, in a forest of teak and shadow, there lived a lion who had grown greedy and cruel. He did not hunt only when hungry. He roared for the joy of making the canopy shake. The deer fled along green tunnels. The boars hid in thorn. The birds went silent, and even the monkeys forgot their chatter. Fear lived in the roots.

At last the animals gathered by a still pool, eyes wide, and sent a trembling message to the den: “Great lion, do not kill us all at once. Each day we will send one animal to you by turn. You will eat without chase. The forest will live, and you will not tire yourself.”

The lion agreed — for laziness suited his pride as well as blood did. So each day, by turn, one animal walked the sorrowful path between the trees to the den. Mothers wept into their fur. Fathers stood helpless with lowered heads. The forest counted sunsets like beads of dread. Some days the path smelled of rain; some days of dust; every day it smelled of goodbye.

One morning the turn fell to a small Rabbit. His ears shook. His nose twitched. His heart tapped like a drum under his soft ribs. Still he set out — but he did not hurry. He walked slowly, thoughtfully, pausing by roots and stones, tasting the air, thinking hard. The sun climbed. Shadows shortened. He arrived at the den long after noon.

The lion was furious with waiting. His tail lashed. His hunger had grown teeth of its own. “Why are you late, scrap of fur?” he thundered. “I could eat ten of you for this insult!”

The Rabbit bowed so low his whiskers brushed the earth. “O king, it is not my fault alone. On the road I met another lion — huge, fierce, with a mane like storm-cloud — who claimed to be the true king of this forest. He seized the other rabbits sent with me as tribute. I barely escaped between his paws to tell you. He says you are a weak pretender. He laughs at your roar.”

The lion’s mane bristled. Pride burned hotter than hunger, hotter than the afternoon. “Where is this pretender?” he snarled. “Lead me! I will teach him whose forest this is!”

The Rabbit led him through the trees — past peacocks that froze, past ants that marched on, unimpressed by kings — to an old stone well half hidden by vines. Deep water shone below like a dark mirror, still and secret. “He lives down there,” whispered the Rabbit, pointing with a trembling paw. “Look over the rim — see how he glares at you!”

The lion peered over. He saw a lion’s face glaring back — his own reflection, though he did not know it — mane for mane, snarl for snarl, eyes full of the same fierce claim. He roared. The well-lion roared back, voice doubled by stone. Rage swallowed wisdom whole. “I will finish you!” he cried — and leaped.

Splash! The water closed. Circles spread and faded. The proud lion struggled against his own choice and sank, defeated by the image he could not bear to share the world with. The Rabbit did not laugh cruelly. He sat a moment with shaking paws, breathing the quiet that follows danger, then hopped home as fast as hope through leaf-light and root-shadow.

The forest learned the news like dawn after a long night. No more daily tribute. Deer returned to the open. Birds tested their songs. The animals bowed to the small Rabbit — not because he was strongest, not because his claws were long, but because he had used wit when force would have failed, and courage when running alone would not have saved the many.

In older tellings the moral is spoken for princes and pupils: pride blinds; cleverness can free a people. In this classroom telling we keep the living pictures: the sorrowful path, the late Rabbit, the well’s cold mirror, and relief returning to the trees like rain.

That is the story of the Rabbit — R for Rabbit — whose wit was braver than a roar.`,
  spreads: [
    {
      id: "r-01",
      kind: "opening",
      initialCap: true,
      body: "A greedy lion forced the forest to send one animal each day. When the turn fell to a small Rabbit, fear walked with him — and so did a plan.",
    },
    {
      id: "r-02",
      kind: "picture",
      image: "/letters/r/spread-01.png",
      imageAlt: "A small rabbit on a forest path toward a lion’s den",
      artPrompt: `${STYLE}. A small brave rabbit on a teak forest path in dappled light, ears alert, tense but thoughtful, distant den-shadow ahead, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "r-03",
      kind: "text",
      body: "The Rabbit told the lion of a rival king. He led him to a deep well. ‘Look — see how he glares!’ The lion saw his own reflection and leaped in pride.",
    },
    {
      id: "r-04",
      kind: "picture",
      image: "/letters/r/spread-02.png",
      imageAlt: "A lion peering into a well while a rabbit watches",
      artPrompt: `${STYLE}. A proud lion peering into an old stone well seeing his reflection, a small rabbit watching from nearby stones, tense fairy-tale forest light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "r-05",
      kind: "text",
      body: "The well closed over the lion’s rage. The Rabbit hopped home. The forest breathed again — freed by wit, not by claws.",
    },
    {
      id: "r-06",
      kind: "picture",
      image: "/letters/r/spread-03.png",
      imageAlt: "Forest animals gathered around a relieved rabbit",
      artPrompt: `${STYLE}. Forest animals gathered gently around a small rabbit in a sunlit clearing, relief and gratitude, warm wholesome mood, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "r-07",
      kind: "text",
      body: "That is the story of the Rabbit — R for Rabbit — whose wit was braver than a roar.",
    },
  ],
  outline: {
    cueWord: "Rabbit",
    formNote:
      "Capital R: a P that grows a kicking leg — like a rabbit sitting tall, then springing forward on a strong slanted stroke.",
  },
};
