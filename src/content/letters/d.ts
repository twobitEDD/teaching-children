import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterD: LetterStory = {
  id: "dragon",
  letter: "D",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "Percival and the Dragon",
  imageWord: "Dragon",
  culture: "Arthurian / medieval romance tradition (English & French)",
  region: "Britain / medieval Europe",
  traditionalTitle:
    "Percival (Perceval) and the dragon — Arthurian romance motif (classroom telling)",
  sourceNotes:
    "Drawn from Arthurian tradition around Percival/Perceval (Chrétien de Troyes and later romance cycles). Dragon encounters belong to knightly romance; this telling centers fear, courage, duty, and a hard meeting with wild power. Adapted Arthurian motif for ages 4–7.",
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps village terror, the dragon’s real menace, and Percival’s fear — and his choice to face it. Conflict held in image without graphic slaughter. Letter never forced into prose; art is natural scene + overlay.",
  pnwBridge:
    "Mist in the Cascades can look like a great creature breathing at a mountain’s mouth — awe mixed with caution.",
  tellAloud: `Long ago, in the days when knights still rode from castle to castle seeking deeds worth doing, there lived a young knight named Percival. He was not the oldest or the most famous. He was earnest. He wanted to be brave — and he was still learning what bravery cost.

One evening he rode down into a mountain village. The windows were shuttered early. No children played in the street. An old woman drew water and glanced toward the black ridge above them as if the stone itself might listen.

“What troubles this place?” Percival asked.

At first no one would answer. Then a shepherd, after looking both ways, spoke in a low voice. “A Dragon lives in the dark mouth of the mountain. It has taken sheep. It has scorched the upper pastures. At night we hear it breathing like a forge. No one dares go near. We sleep poorly, sir knight. We are afraid.”

Percival felt that fear enter him too — cold in the stomach, tight in the hands. He was not ashamed of it. Fear comes when danger is real. Yet he also felt a duty rise beside the fear. If he turned away, the village would remain under that shadow.

“I will go,” he said.

An old man pressed a crust of bread into his hand. A child offered a scrap of red ribbon for luck. Percival thanked them and rode upward as the last light left the peaks. The path grew narrow. Stones rolled under the horse’s hooves. Smoke and shadow curled from a cave mouth in the rock. The air smelled of hot stone and wild animal. Far below, the village lamps looked like tiny brave stars.

Percival’s horse stamped and tossed its head. Twice it tried to turn back. Percival laid a hand on the mane and whispered steady words until the horse would go on. He felt his own fear clearly — not as shame, but as a companion he must lead.

At the cave mouth he stopped and called, clear enough for the dark to hear: “I am Percival! I do not come for cruel sport. I come so these people may sleep in peace. Show yourself!”

For a long moment there was only the drip of water and the thump of his own heart. Then the Dragon came.

It was larger than any tale had prepared him for — scales glimmering like wet slate and ember, eyes bright as coals, breath a heat that made the air shiver. Wings half-folded scraped the stone. When it moved, pebbles danced. The world seemed to hold still. Percival’s knees wanted to soften. His sword-hand wanted to strike in panic.

He did not strike in panic.

He stood his ground. He spoke with respect for the wild power before him, and with firmness for the village below. “This mountain is wide,” he said. “These people are small beside you. They have lost sheep. They have lost sleep. Leave their flocks. Leave their doors. If you must rule the high rock, rule it without devouring their peace.”

The Dragon’s breath rolled over him like a furnace wind. For a heartbeat Percival thought the meeting would end in fire and ruin. Still he did not flee. Still he did not swing wildly.

The Dragon listened — or so the old stories say — as great creatures sometimes listen when courage stands without cruelty. Its rage, which had been a storm, slowly changed. In this telling the Dragon withdrew deeper into the mountain, and the scorched path below grew quiet again. Smoke thinned. The night sounds of ordinary rock and water returned.

When Percival rode back at dawn, the shutters opened. Children peeked. The shepherd wept without shame. Bread was broken in the square. The village would remember fear — for fear had been true — and they would also remember that someone had faced it without becoming a monster in answer.

Percival rode on, braver and wiser, carrying the image of the Dragon forever in his heart: power, danger, and the hard choice to meet them without becoming cruel.

That is the story of the Dragon — D for Dragon — power met with courage.`,
  spreads: [
    {
      id: "d-01",
      kind: "opening",
      initialCap: true,
      body: "Young Percival rode into a mountain village of shuttered windows. “A Dragon lives in the dark mouth of the mountain,” they whispered. “We are afraid.” He felt that fear too — and still he chose to go.",
    },
    {
      id: "d-02",
      kind: "picture",
      image: "/letters/d/spread-01.png",
      imageAlt: "A dragon at a mountain cave mouth in mist",
      artPrompt: `${STYLE}. A majestic storybook dragon at a natural mountain cave mouth, awe and menace held together, mist and rock. ${ART_NO_LETTER}`,
    },
    {
      id: "d-03",
      kind: "text",
      body: "He rode upward as light left the peaks. Smoke curled from the cave. His horse stamped. “I am Percival!” he called. “I come so these people may sleep in peace.”",
    },
    {
      id: "d-04",
      kind: "picture",
      image: "/letters/d/spread-02.png",
      imageAlt: "Percival facing the dragon with calm courage",
      artPrompt: `${STYLE}. A young knight on horseback facing a large dragon in misty mountains, courage and respect under real danger, soft dramatic light. ${ART_NO_LETTER}`,
    },
    {
      id: "d-05",
      kind: "text",
      body: "The Dragon was greater than any tale had prepared him for. Percival’s knees wanted to soften. He did not strike in panic. He stood his ground and asked the wild power to leave the village in peace.",
    },
    {
      id: "d-06",
      kind: "picture",
      image: "/letters/d/spread-03.png",
      imageAlt: "Peaceful mountain path after the dragon withdraws",
      artPrompt: `${STYLE}. Peaceful mountain path at soft dawn, distant dragon silhouette high on the ridge, hopeful after fear. ${ART_NO_LETTER}`,
    },
    {
      id: "d-07",
      kind: "text",
      body: "The Dragon withdrew. At dawn the shutters opened. The village would remember fear — and that someone had faced it. That is the story of the Dragon — power met with courage.",
    },
  ],
  outline: {
    cueWord: "Dragon",
    formNote:
      "Capital D: a straight spine and one full round curve — like a dragon curling against a cliff wall.",
  },
};
