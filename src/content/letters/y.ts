import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterY: LetterStory = {
  id: "yarn",
  letter: "Y",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "Ariadne’s Yarn",
  imageWord: "Yarn",
  culture: "Greek myth (soft classroom telling)",
  region: "Crete / ancient Greece (Mediterranean)",
  traditionalTitle:
    "Ariadne and Theseus — the thread through the Labyrinth (classical Greek myth)",
  sourceNotes:
    "Classical Greek myth: Princess Ariadne of Crete helps Theseus enter the Labyrinth to face the Minotaur by giving him a ball of thread (clew) so he can unwind it on the way in and follow it out again. Sources include Apollodorus’s Library and later classical summaries; widely retold in children’s myth collections. Public-domain classical tradition.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Softens the Labyrinth into a stone maze of confusing turns; minimizes Minotaur dread (a dark guarding beast, no gore). Centers image-word Yarn as Ariadne’s guiding thread — courage, trust, and the way home. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "On a foggy PNW trail, a bright bit of yarn or ribbon tied to a branch can guide you back when the path forks. Ariadne’s gift is that same quiet cleverness: leave a line you can trust.",
  tellAloud: `On the island of Crete, where the sea flashed like hammered blue metal and olive trees silvered in the wind, there stood a palace of many rooms — painted halls, cool courtyards, bees in the thyme — and beneath it, a Labyrinth: a maze of stone corridors that turned and turned until even a clever person might forget the way out. Torches could not cure its confusion. Footsteps doubled back on themselves. In the heart of that maze lived a guarding beast, dark and lonely, and people feared to enter. Fear sat on the island like a heavy cloak.

Princess Ariadne lived in the palace above. She had quick eyes and a kinder heart than the hard rules around her. She watched ships come and go. She knew that strength without a plan can vanish in a twist of stone. When a young hero named Theseus came from across the water, brave and determined to end the fear that hung over Crete, Ariadne did not give him a sword alone. She gave him something softer and wiser — a gift spun from patience.

She placed in his hands a ball of Yarn — wool wound tight, pale as moonlight, strong as a promise. It smelled faintly of sheep and clean hands. It filled his palm like a small moon.

“Unroll it as you go,” she whispered at the threshold where daylight met shadow. “Tie the end at the door. Walk the twisting paths. Do what you must in the center. Then — follow the Yarn home. The maze will try to confuse your eyes. Pride will try to guess. The Yarn will not lie.”

Theseus knelt on cool flagstones and tied the free end of the Yarn to a bronze ring beside the Labyrinth’s mouth. The knot was simple and firm. Then he stepped into cool stone shadow. Left turn. Right turn. A corridor that looked like the last. Another that smelled of damp earth and old dust. A third that opened into a round chamber with three doors, each the twin of the others. Each step, the Yarn whispered off the ball with a soft hiss — a thin pale line laid behind him like a glowing path only courage could trust. Sometimes he paused and felt the line with his fingertips: still connected, still true.

Deeper he went. The walls felt close. Echoes played tricks — drip became footstep, breath became whisper. Once he thought he heard his own footsteps coming the other way. His heart knocked. He touched the Yarn — still taut, still true — and breathed until the knocking slowed.

At the heart of the maze he faced the dark beast. There was struggle and fear, as hard tasks bring — a clash in a low chamber, a roar that shook grit from the ceiling — and then quiet. (We do not linger on wounds, children — only on the moment after, when the air felt lighter and the island’s dread began to loosen like a knot pulled free.)

Theseus turned to leave… and the corridors looked all the same. Door, door, door. Shadow, shadow, shadow. Panic fluttered like a bird in a closed room. He could have run and been lost forever. Then he looked down. The Yarn still ran, pale and patient, from his hand back through the dark — Ariadne’s quiet road.

He followed it — not by guessing, not by pride, but by the soft guide. Turn by turn the maze undid itself. Where three doors waited, the Yarn chose. Where echoes lied, the Yarn told truth. The line grew shorter on the path and fuller again in his palm as he wound it home, gathering courage into a ball once more. At last daylight touched his face, warm as bread. Dust motes danced. Ariadne waited at the door, and when she saw the Yarn’s end still tied where she had imagined it, she smiled a smile that was relief and wisdom together.

“You found the way,” she said.

“You made the way findable,” he answered, holding up the ball, now whole again.

That is the heart of the tale for our classroom: not every brave deed is loud. Sometimes bravery is a ball of Yarn — a soft guide through confusion — offered by someone who wants you to come home.

That is the story of the Yarn — Y for Yarn — Ariadne’s thread through the labyrinth.`,
  spreads: [
    {
      id: "y-01",
      kind: "opening",
      initialCap: true,
      body: "Beneath a Cretan palace lay a stone Labyrinth of confusing turns. Princess Ariadne gave Theseus a ball of Yarn: “Unroll it as you go. Follow it home. The Yarn will not lie.”",
    },
    {
      id: "y-02",
      kind: "picture",
      image: "/letters/y/spread-01.png",
      imageAlt: "Ariadne offering a ball of pale yarn to Theseus at a stone doorway",
      artPrompt: `${STYLE}. A Greek princess offering a soft ball of pale yarn to a young hero at an ancient stone doorway, warm Mediterranean light, gentle and hopeful, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "y-03",
      kind: "text",
      body: "Theseus tied the Yarn at the entrance and walked the twisting corridors. Echoes played tricks. He touched the taut thread and kept going — until the maze’s heart, and the hard task, were done.",
    },
    {
      id: "y-04",
      kind: "picture",
      image: "/letters/y/spread-02.png",
      imageAlt: "A pale yarn trail leading through soft-lit stone labyrinth corridors",
      artPrompt: `${STYLE}. Soft-lit stone labyrinth corridors with a thin pale yarn trail along the floor guiding the way, mysterious but not scary, calm watercolor atmosphere, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "y-05",
      kind: "text",
      body: "Coming back, every corridor looked the same — until he followed Ariadne’s Yarn turn by turn into daylight. Soft courage had made the way home.",
    },
    {
      id: "y-06",
      kind: "picture",
      image: "/letters/y/spread-03.png",
      imageAlt: "Theseus emerging from the labyrinth doorway holding yarn, Ariadne waiting",
      artPrompt: `${STYLE}. A young hero emerging from a stone maze doorway into daylight holding a ball of yarn, princess waiting nearby with relief and joy, warm light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "y-07",
      kind: "text",
      body: "That is the story of the Yarn — Ariadne’s thread through the labyrinth.",
    },
  ],
  outline: {
    cueWord: "Yarn",
    formNote:
      "Capital Y: a V set on a stem — like a ball of yarn’s pull leading down into one strong line.",
  },
};
