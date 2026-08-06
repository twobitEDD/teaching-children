import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterB: LetterStory = {
  id: "bear",
  letter: "B",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Willow-Wren and the Bear",
  imageWord: "Bear",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "The Willow-Wren and the Bear (Der Zaunkönig und der Bär), Grimm",
  sourceNotes:
    "Adapted from the Brothers Grimm tale “The Willow-Wren and the Bear”: the bear insults the willow-wren; beasts and birds go to war; the fox serves as standard-bearer; a gnat stings the fox’s ear so his tail drops and the beasts flee; the birds win. Public-domain Grimm tradition.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Keeps the forest war and clever victory. Conflict is real (sides gather, fear, flight) without graphic wounding. Image-word Bear (B). American English.",
  pnwBridge:
    "In the PNW woods a tiny wren can scold from a thicket — small voice, fierce courage — while bears move among the firs.",
  tellAloud: `One summer day, a great Bear was walking through the forest with the Wolf for company. The trees stood tall. The air smelled of warm bark and green leaves. As they walked, they came upon a little willow where a Willow-Wren had built her nest — a small, careful nest, woven tight, with eggs inside as precious as jewels to her.

The Bear stopped and peered in. Then he laughed a rumbling laugh that shook the twigs. “Look at this pitiful little nest!” he said to the Wolf. “What poor little royal children must be sitting in there! Kings and queens of the hedge, no doubt!”

The Willow-Wren’s feathers fluffed with anger. She was small, but her heart was not small. “Bear!” she cried in her bright, sharp voice. “Do not mock us! We birds are as fine as any creature in this forest. You think yourself great because you are large. We shall see who is truly strong!”

The Bear only laughed harder and lumbered on. But the Willow-Wren did not forget. She flew from tree to tree and called a gathering of all the birds. The beasts, hearing of the insult, gathered on the Bear’s side. Soon the whole forest knew: there would be a war between the birds and the beasts.

That night the woods were restless. Owls spoke in low voices. Foxes paced. The little wren sat on her nest and whispered to her eggs, “You are royal enough for me.”

Before dawn, messengers ran through underbrush and flew through canopy. The stag polished his antlers. The boar sharpened his tusks against a root. On the birds’ side the eagle checked the wind, the crow counted allies, and a flock of sparrows practiced diving as one. Even creatures who loved peace felt the pull of the quarrel — for insult had been spoken, and pride had answered.

At dawn the two armies faced each other in a clearing. On one side stood the beasts — Bear, Wolf, stag, boar, and many more — heavy and proud. On the other side the birds filled the branches — eagle, owl, crow, sparrow, and the fierce little Willow-Wren at their heart.

The beasts chose the Fox as their standard-bearer. “Watch my tail,” cried the Fox. “When I hold it high, advance! When I drop it — flee! That shall be our signal.”

The birds had their own cleverness. The Willow-Wren whispered to a Gnat, smaller even than a seed. “Friend,” she said, “creep into the Fox’s ear. When the moment comes, sting!”

The battle began with noise and rush — wings beating, paws thundering, dust rising. It was frightening, as wars are. Smaller creatures felt their hearts beat fast. Beasts charged. Birds wheeled and struck. For a time neither side could claim the clearing. The Bear roared to keep courage high. The Willow-Wren’s bright voice cut through the din: “Hold! Hold together!”

Then the Gnat did her work. She crept into the Fox’s ear and stung!

“Ow!” yelped the Fox, and his bushy tail dropped flat to the ground.

The beasts saw the signal and thought all was lost. Panic ran through them like fire in dry grass. “Flee! Flee!” they shouted. They turned and ran crashing through the brush — Bear and Wolf among them — while the birds wheeled above with bright cries of victory. The war was over almost as suddenly as it had begun, won not by the largest claws but by the smallest sting and a clever plan.

When the clearing emptied, the Bear stood alone for a moment, breathing hard. He had mocked the smallest bird in the wood — and the birds had won the day by wit and courage.

He hung his great head. “I am sorry,” he said, and his voice was quieter than before. “A little voice may still be brave. A little nest may still be royal.”

The Willow-Wren looked at him with her bright eye. “Remember that,” she said. “Size is not the only strength.”

Peace returned under the leaves. The eggs stayed warm. The forest learned again that the small must not be scorned — and that a mocking laugh can call up a battle the mighty did not expect to lose.

That is the story of the Bear — B for Bear — who learned that small can be strong.`,
  spreads: [
    {
      id: "b-01",
      kind: "opening",
      initialCap: true,
      body: "A great Bear walked the forest with the Wolf and laughed at a Willow-Wren’s tiny nest. “What poor little royal children!” he rumbled. The wren’s bright voice answered: “Do not mock us. We shall see who is truly strong!”",
    },
    {
      id: "b-02",
      kind: "picture",
      image: "/letters/b/spread-01.png",
      imageAlt: "A large bear looking at a tiny wren nest in a willow",
      artPrompt: `${STYLE}. A large brown bear peering at a tiny wren nest in a willow thicket, soft forest light. ${ART_NO_LETTER}`,
    },
    {
      id: "b-03",
      kind: "text",
      body: "The wren called the birds. The beasts gathered with the Bear. That night the woods were restless. At dawn two armies faced each other — heavy paws on one side, bright wings on the other. There would be a war in the clearing.",
    },
    {
      id: "b-04",
      kind: "picture",
      image: "/letters/b/spread-02.png",
      imageAlt: "Birds and beasts gathered for battle at dawn",
      artPrompt: `${STYLE}. Dawn forest clearing with birds in branches and woodland beasts below facing each other, tense storybook battle gathering, no gore. ${ART_NO_LETTER}`,
    },
    {
      id: "b-05",
      kind: "text",
      body: "The Fox raised his tail as the beasts’ signal: high meant advance, down meant flee. The Willow-Wren sent a tiny Gnat into the Fox’s ear. In the rush of battle the Gnat stung — “Ow!” — and the Fox’s tail dropped flat.",
    },
    {
      id: "b-06",
      kind: "picture",
      image: "/letters/b/spread-03.png",
      imageAlt: "A fox with lowered tail as beasts turn to run",
      artPrompt: `${STYLE}. A fox with bushy tail dropped low, woodland animals turning to run through misty trees, dramatic but not gory. ${ART_NO_LETTER}`,
    },
    {
      id: "b-07",
      kind: "text",
      body: "The beasts fled. The birds wheeled in victory. The Bear hung his head. “I am sorry. A little voice may still be brave. A little nest may still be royal.” The Wren answered: “Size is not the only strength.” Peace returned under the leaves.",
    },
    {
      id: "b-08",
      kind: "picture",
      image: "/letters/b/spread-04.png",
      imageAlt: "Bear and willow-wren at peace in the green forest",
      artPrompt: `${STYLE}. A humble brown bear and a tiny wren at peace near a willow nest, apology and respect, gentle forest light. ${ART_NO_LETTER}`,
    },
  ],
  outline: {
    cueWord: "Bear",
    formNote:
      "Capital B: a straight spine and two soft bumps — like a bear sitting up, round and strong.",
  },
};
