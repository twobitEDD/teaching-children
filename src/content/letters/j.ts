import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterJ: LetterStory = {
  id: "jug",
  letter: "J",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Water of Life",
  imageWord: "Jug",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "The Water of Life (Das Wasser des Lebens), Grimm",
  sourceNotes:
    "Brothers Grimm “The Water of Life”: a dying king; three sons seek the water; proud elder brothers fail a dwarf’s test; youngest succeeds, fills a vessel at the spring; betrayal with seawater; truth restored. Public-domain Grimm. Image-word Jug for the vessel that holds the water.",
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps illness, pride, kindness to the dwarf, the castle spring, brothers’ deceit (sea water swapped for the true jug), and repair of trust. No graphic violence; huntsman threat held lightly. American English.",
  pnwBridge:
    "A clay jug of cold creek water after a long PNW hike — ordinary vessel, life inside it.",
  tellAloud: `There was once a King who grew so ill that it seemed he would die. His three sons stood by his bed, afraid. An old traveler whispered, “Only the Water of Life can save him — and it is hard to find.”

The eldest prince set out at once, thinking of crowns and glory. On the road he met a little dwarf. “Where do you ride in such a hurry?” asked the dwarf.

“Out of my way, little scrap,” snapped the prince, and rode on. The dwarf’s eyes flashed. Soon the road narrowed between rocks until the proud prince could neither go forward nor turn back — trapped by his own scorn.

The second prince rode the same way, spoke the same hard words, and met the same fate.

Then the youngest prince knelt by his father. “Let me try,” he said. The King feared to lose him too, but at last allowed it. On the road the dwarf asked the same question.

The young prince stopped his horse and bowed. “I seek the Water of Life for my father, who is dying. Can you help me?”

“Because you have spoken kindly,” said the dwarf, “I will help.” He gave the prince an iron wand and two loaves. “Strike the castle door three times. Feed the lions. Fill your Jug at the spring before the clock strikes twelve — or the gates will shut forever.”

The prince rode until he found the enchanted castle. He struck the door. Lions rose — and ate the bread from his hands, then let him pass. Inside, halls slept under a hush. He found a princess who woke and blessed his quest. In the courtyard a spring shone like liquid light. He knelt and filled his Jug with the Water of Life — cold, bright, smelling of green leaves and morning.

He almost lingered too long. The clock’s hand climbed. He ran. The gate closed on his heel as he sprang free, Jug safe against his heart.

On the road home he found his brothers trapped and begged the dwarf to free them. The dwarf warned, “Their hearts are not like yours.” Still the youngest could not leave them. Freed, the elder brothers smiled with their mouths and not their eyes.

They came to a sea crossing. While the youngest slept, the elder brothers emptied his Jug and filled it with bitter seawater. They hid the true Water for themselves.

At the palace the youngest offered his Jug. The King drank — and grew worse, for seawater is not life. The elder brothers then produced the true Water. The King recovered and believed the youngest had tried to harm him. Anger rose like a storm. For a time the youngest was cast out, walking woods alone with an empty heart and an empty Jug.

But truth has a way of rising. Deeds the youngest had done on the road — help given in hard kingdoms — came to light. The princess arrived seeking the one who had filled the Jug at her spring. The King saw how he had been deceived. The elder brothers fled their shame. The youngest returned, and the Jug of true Water stood on the table as a reminder: pride traps; kindness opens doors; and what is stolen cannot stay stolen forever.

That is the story of the Jug — J for Jug — that carried the Water of Life.`,
  spreads: [
    {
      id: "j-01",
      kind: "opening",
      initialCap: true,
      body: "A King lay dying. Only the Water of Life could save him. Two proud princes scorned a dwarf on the road and were trapped. The youngest stopped, spoke kindly, and was helped.",
    },
    {
      id: "j-02",
      kind: "picture",
      image: "/letters/j/spread-01.png",
      imageAlt: "A young prince kneeling to fill a jug at a shining castle spring",
      artPrompt: `${STYLE}. A young prince kneeling at a luminous courtyard spring filling a clay jug with glowing clear water, enchanted castle garden, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "j-03",
      kind: "text",
      body: "He filled his Jug at the spring — then his brothers swapped seawater for the true Water. The King drank bitterness and believed a lie.",
    },
    {
      id: "j-04",
      kind: "picture",
      image: "/letters/j/spread-02.png",
      imageAlt: "A simple clay jug of clear water on a wooden table",
      artPrompt: `${STYLE}. A humble clay jug filled with clear sparkling water on a wooden table in soft royal chamber light, hopeful still life, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "j-05",
      kind: "text",
      body: "Truth rose. The King saw the deceit. The Jug of true Water stood as reminder: kindness opens doors; stolen gifts cannot stay stolen forever. J for Jug.",
    },
    {
      id: "j-06",
      kind: "picture",
      image: "/letters/j/spread-03.png",
      imageAlt: "Father and son reconciled near a jug of bright water",
      artPrompt: `${STYLE}. A recovered king and a young prince standing together near a jug of bright water, warm reconciliation light, gentle storybook scene, natural. ${ART_NO_LETTER}`,
    },
  ],
  outline: {
    cueWord: "Jug",
    formNote:
      "Capital J: a hook that dips below the line and curls — like a jug’s handle catching light.",
  },
};
