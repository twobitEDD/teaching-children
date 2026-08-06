import type { LetterStory } from "../types";
import { ART_STYLE as STYLE } from "../style";

export const letterBee: LetterStory = {
  id: "bee",
  letter: "B",
  primary: false,
  status: "ready",
  mode: "consonant",
  title: "The Queen Bee",
  imageWord: "Bee",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "The Queen Bee (Die Bienenkönigin), Grimm",
  sourceNotes:
    "Adapted from the Brothers Grimm tale “The Queen Bee”: youngest brother spares ants, ducks, and bees; at an enchanted castle he completes three tasks with their help; the Queen Bee marks the youngest princess. Public-domain Grimm tradition.",
  adaptations:
    "Full kindness chain and three castle tasks across short picture spreads for ages 4–7. Older brothers fail gently (they wait). American English.",
  pnwBridge:
    "Bees hum in PNW gardens and blackberry thickets in summer — small workers, just like the Bee who knew how to help.",
  tellAloud: `Long ago, three brothers set out into the world. The two older ones were loud and restless. The youngest was quiet and kind, and his brothers laughed at him and called him Simple.

On the road they came to an anthill, busy with tiny workers. The older brothers wanted to kick it open for sport. “No,” said the youngest, stepping in front of them. “Let the ants live and do their work.” So the anthill was left in peace.

Farther on they came to a lake where ducks swam in the bright water. The older brothers wanted to catch the ducks and roast them. “No,” said the youngest. “Let them swim. The lake is their home.” So the ducks paddled away, safe.

Then they came to a tree heavy with a hive, bees humming in the gold light, honey sweet in the air. The older brothers wanted to make a fire under the tree, smoke the bees away, and take all the honey. “No,” said the youngest. “Let the bees be. They work so hard for what is theirs.” And the hive was left humming.

At last the brothers reached a castle that stood strangely still. Inside, people sat as if asleep — a whole house under a quiet spell. A little tablet nearby told what must be done to wake the place: three hard tasks. Whoever finished them would break the enchantment. Whoever failed would have to sit and wait, unable to go on.

The oldest brother tried first. He could not finish the tasks. He sat down in the hush and waited. The second brother tried. He too could not finish. He sat and waited beside the first.

Then the youngest brother stepped forward — Simple, they had called him — and began the work.

The first task: a thousand pearls had been scattered in the forest floor, hidden under moss and leaves. They must all be found before sundown. The boy looked at the endless green and felt his heart sink. But then a great march of ants arrived — the very ants he had spared. They searched every root and shadow, and before evening they brought him the pearls, heaped and shining.

The second task: the castle key lay at the bottom of the lake. The boy stood at the shore and did not know how to reach it. Then the ducks he had spared dove deep. Up they came with the key shining in a bill, and laid it at his feet.

The third task was the hardest of all. Three sleeping princesses lay side by side, looking almost alike. The boy must find which one was the youngest. He stood and looked, and looked again — and did not know.

Then from the hive came the Queen Bee herself, bright and brave. She flew to the princesses and settled gently on the lips of the youngest — for that princess had eaten honey before she fell asleep, and the Bee knew the sweet truth.

So the boy chose rightly. The spell broke. The castle woke — doors opening, voices returning, light moving through the rooms again. The older brothers woke from their waiting, too. And because the youngest had been gentle with the smallest creatures, the smallest creatures had been gentle with him.

That is the story of the Bee — B for Bee — small wings, great help.`,
  spreads: [
    {
      id: "b-01",
      kind: "opening",
      initialCap: true,
      body: "Long ago, three brothers set out. The youngest was quiet and kind; they called him Simple. At an anthill the older ones wanted harm. “No,” he said. “Let the ants live.”",
    },
    {
      id: "b-02",
      kind: "picture",
      image: "/letters/bee/spread-03.png",
      imageAlt: "A busy anthill left in peace beside a forest path",
      artPrompt: `${STYLE}. A busy anthill with tiny ants working peacefully beside a soft forest path, warm daylight, gentle and small-scale, no people.`,
    },
    {
      id: "b-03",
      kind: "text",
      body: "At a bright lake the older brothers wanted to catch the ducks. “No,” said the youngest. “Let them swim. The lake is their home.” The ducks paddled away, safe.",
    },
    {
      id: "b-04",
      kind: "picture",
      image: "/letters/bee/spread-04.png",
      imageAlt: "Ducks swimming safely on a calm lake",
      artPrompt: `${STYLE}. Several gentle ducks swimming on a calm bright lake with soft reeds and sky reflection, peaceful, no people.`,
    },
    {
      id: "b-05",
      kind: "text",
      body: "Then a hive hummed in gold light. The older brothers wanted the honey. “No,” said the youngest. “Let the bees be. They work so hard.” The hive was left humming.",
    },
    {
      id: "b-06",
      kind: "picture",
      image: "/letters/bee/spread-01.png",
      imageAlt: "A beehive in a sunlit tree with bees humming",
      artPrompt: `${STYLE}. A wholesome tree with a natural beehive, golden sunlight, several gentle bees humming around honey-colored comb, peaceful forest edge, no people.`,
    },
    {
      id: "b-07",
      kind: "text",
      body: "A still castle waited under a spell — three hard tasks. The older brothers tried and failed, and sat waiting. Then Simple began. Ants he had spared found a thousand scattered pearls.",
    },
    {
      id: "b-08",
      kind: "picture",
      image: "/letters/bee/spread-05.png",
      imageAlt: "Ants gathering shining pearls among moss and leaves",
      artPrompt: `${STYLE}. Tiny ants carrying small shining pearls through moss and fallen leaves on a forest floor, magical and gentle, soft dusk light, no people.`,
    },
    {
      id: "b-09",
      kind: "text",
      body: "Next: the castle key lay deep in the lake. The ducks dove down and brought it up, shining. Last: three sleeping princesses looked almost alike. Which was the youngest?",
    },
    {
      id: "b-10",
      kind: "picture",
      image: "/letters/bee/spread-06.png",
      imageAlt: "Ducks bringing a shining key up from a lake",
      artPrompt: `${STYLE}. Ducks on a lake, one holding a small shining old key in its bill, soft water and reeds, hopeful storybook moment, no people.`,
    },
    {
      id: "b-11",
      kind: "text",
      body: "The Queen Bee flew in, bright and brave, and settled on the youngest princess — she had tasted honey, and the Bee knew. The castle woke. B for Bee — small wings, great help.",
    },
    {
      id: "b-12",
      kind: "picture",
      image: "/letters/bee/spread-02.png",
      imageAlt: "A queen bee flying toward a quiet castle",
      artPrompt: `${STYLE}. A single luminous queen bee flying through soft golden air toward a quiet storybook castle in the distance, hopeful and calm, no people close-up.`,
    },
  ],
  outline: {
    cueWord: "Bee",
    formNote:
      "Capital B: a straight spine, then two soft bumps — upper smaller, lower fuller — like a bee’s rounded body resting beside a stem.",
  },
};
