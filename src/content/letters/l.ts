import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterL: LetterStory = {
  id: "ladle",
  letter: "L",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Luminous Pearl",
  imageWord: "Ladle",
  culture: "Chinese folk / literary fairy-tale tradition",
  region: "China / East Asia",
  traditionalTitle:
    "The Luminous Pearl — Chinese folktale (Golden Dipper / Dragon’s ladle motif)",
  sourceNotes:
    "Chinese folk tradition of brothers seeking a luminous pearl (night-shining pearl) to win the Dragon King’s daughter; a flooded village tests honesty and courage. Classroom and picture-book retellings (notably Betty L. Torre, The Luminous Pearl, 1990; Enki Education classroom versions) center a magic Golden Dipper / Dragon’s ladle that drains the flood in a few scoops. Folk variants also appear in Chinese flood-tale collections (e.g. brothers Ah Da / Ah Er choosing pearl vs. dipper). Public-domain folk motif adapted; modern picture-book wording not reprinted.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Ladle (the vessel that serves the village). Keeps greed vs. service, flood hardship, and the small thank-you pearl that outshines the large stolen treasure. No letter forced into prose. American English.",
  pnwBridge:
    "After heavy PNW rain, a kitchen ladle scooping floodwater from a doorstep feels small against a storm — and still, scoop by scoop, a path can clear.",
  tellAloud: `Long ago, beside a great eastern sea, there lived two brothers. The elder was strong and sharp of eye, and he loved fine things — silk that whispered, gold that caught the sun. The younger was quieter. He loved to keep his word, even when keeping it cost him time. Both had dreamed of a maiden of the sea — the Dragon King’s daughter — whose beauty was said to shine like moonlight on deep water, and whose voice could still a storm.

One day the maiden herself set a test before them on the shore. Gulls wheeled. The waves listened. “Bring me a luminous pearl that shines by night,” she said. “The one who brings the truest light shall win my hand. Be honest. Be brave. Size alone is not enough.”

The brothers bowed and set out toward the palace of the Dragon King beneath the waves. The road along the shore was wet and broken from days of rain. Soon they came to a village half drowned. Brown water stood in the streets like a second river. Roofs leaned. Chickens perched on railings. People called from upper windows, tired and afraid. Children clung to doorframes. An old woman waded to her knees and cried, “Help us! The river will not leave! Our rice is lost. Our doors are drowning!”

Both brothers promised — for how could anyone refuse such need? — and then the elder’s heart grew restless. He felt the clock of the contest ticking. “If we stay,” he muttered, “someone else may reach the Dragon King first. We will return with treasure and help them then.” He glanced at the flood, then at the sea path, and chose speed over service. He hurried on, leaving the village behind with its brown water and its waiting faces.

The younger brother stayed a little longer. He listened to the splash and the weeping. He smelled wet wood and spoiled grain. He felt the weight of his promise settle in his chest like a stone. Still he could not drain a village with bare hands — he needed help from the sea. So he went, carrying the village with him in his mind like a lantern he refused to blow out.

In the Dragon King’s treasure hall, light danced on pearls, jade, coral, and gold. Fish-advisers watched with bright black eyes. “Each of you may take one gift,” said the Dragon King. “Only one. Choose with care.”

The elder brother’s eyes fixed on the largest luminous pearl — a moon of treasure that filled the room with cold white fire. “This will win her,” he thought. He seized it and turned away, proud already, barely hearing the King’s warning.

The younger brother saw that pearl too. He saw other wonders that made his fingers itch. Then he remembered brown water in the streets, and children on doorframes, and his own spoken promise. On a low shelf rested a plain golden Ladle — a dipper of the Dragon King, worn smooth as if it had served many waters. It did not glitter like the pearl. It looked like work. “With this,” the younger thought, “I can keep my word.” He took the Ladle, only the Ladle, and bowed low until his forehead nearly touched the floor.

Back through the deep he went, Ladle held close, and up to the flooded village. “I have the Dragon’s Ladle!” he called. The people gathered, wet and hopeful, some still doubtful that a single dipper could matter. Together they dipped. Once — the water sighed and sank as if a giant had drawn breath. Twice — doorsteps appeared, and a cat stepped down carefully. Three times — the street lay clear, and mud shone in the returning sun. In the last scoop an oyster lay open upon the wet stones, and inside it a small dark pearl, modest as a seed.

A little girl pressed it into the young man’s hand. Her fingers were cold. Her eyes were bright. “It is all we have to give,” she said. “Take it with our thanks.”

He carried that small pearl carefully homeward. That night, when he drew it from his pack beside a quiet lamp, it woke with a light brighter than the moon — warm, living, honest light that painted the walls like dawn. The large pearl his brother had taken looked cold beside it, for it had been chosen for size alone, and size without service is a hollow shine.

The Dragon King’s daughter knew which light was true. She welcomed the brother of the Ladle. The elder stood ashamed with his bright, empty prize. The village slept dry. And the Ladle — that simple serving vessel — remained the image of the choice that saved them: not the biggest treasure, but the tool that helps.

That is the story of the Ladle — L for Ladle — which scooped the flood and opened the way for a luminous pearl.`,
  spreads: [
    {
      id: "l-01",
      kind: "opening",
      initialCap: true,
      body: "Two brothers sought a luminous pearl for the Dragon King’s daughter. Along the shore a village drowned in floodwater. Both promised help — then the elder hurried on for treasure, while the younger carried the promise in his heart.",
    },
    {
      id: "l-02",
      kind: "picture",
      image: "/letters/l/spread-01.png",
      imageAlt: "A flooded village street with people calling from doorways",
      artPrompt: `${STYLE}. A flooded Chinese village street after rain, people at doorways and windows above brown water, worried but hopeful, soft gray-gold light. ${ART_NO_LETTER}`,
    },
    {
      id: "l-03",
      kind: "text",
      body: "In the Dragon King’s hall the elder seized the largest shining pearl. The younger remembered the village and took only a golden Ladle — a serving dipper worn smooth by water.",
    },
    {
      id: "l-04",
      kind: "picture",
      image: "/letters/l/spread-02.png",
      imageAlt: "A golden ladle held in underwater treasure light",
      artPrompt: `${STYLE}. A simple golden ladle or dipper resting in a soft underwater treasure hall glow, warm pearl light, calm composition, natural props only. ${ART_NO_LETTER}`,
    },
    {
      id: "l-05",
      kind: "text",
      body: "Three dips of the Ladle calmed the flood. A child gave a small dark pearl in thanks — and that night it shone brighter than the moon. The true light was the gift of service.",
    },
    {
      id: "l-06",
      kind: "picture",
      image: "/letters/l/spread-03.png",
      imageAlt: "Villagers and a young man with a ladle as floodwater sinks",
      artPrompt: `${STYLE}. Villagers and a young man using a golden ladle to scoop floodwater as the street clears, soft dawn light, grateful relief, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "l-07",
      kind: "text",
      body: "That is the story of the Ladle — L for Ladle — which scooped the flood and opened the way for a luminous pearl.",
    },
  ],
  outline: {
    cueWord: "Ladle",
    formNote:
      "Capital L: one tall upright and a firm foot across the bottom — like a ladle’s long handle standing, with the bowl resting at the base.",
  },
};
