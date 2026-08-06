import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterW: LetterStory = {
  id: "waves",
  letter: "W",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Fisherman and His Wife",
  imageWord: "Waves",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany (Baltic / North Sea coast tradition)",
  traditionalTitle: "The Fisherman and His Wife (Von dem Fischer un syner Fru), Grimm",
  sourceNotes:
    "Brothers Grimm tale “The Fisherman and His Wife”: a poor fisherman catches an enchanted flounder (a prince under a spell), releases it, and his wife demands escalating wishes — hut, cottage, castle, kingship, empire, papacy, then to rule the sun and moon — until the sea’s waves grow stormy and all is lost, returning them to the original pigsty/hovel. Public-domain Grimm tradition (Low German coastal setting).",
  adaptations:
    "Expanded oral telling (~900 words; ~5–7 min with picture pauses) for ages 4–7. Keeps greed escalation and the loss of wishes as moral consequence. Softens papal/church detail to “ruler of all the land’s holy houses” without cynicism; keeps storm and return to the hut. Centers image-word Waves as the sea’s answer to greed. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "On a PNW beach after a storm, Waves still roll in long gray lines — powerful, patient, and not ours to command. Children who watch the tide come and go know how the fisherman’s sea felt when too many wishes piled up.",
  tellAloud: `Once there lived a fisherman and his wife in a tiny hut by the sea — so small the wind leaned on its walls, so plain that the floor was hard-packed earth. Gulls cried above the roof. Salt crusted the door latch. Every morning the fisherman walked down to the shore where the Waves whispered and slapped and pulled at the pebbles. He cast his line into the cold green water and waited, smelling kelp and rain.

One day his hook caught something heavy. He pulled and pulled, boots slipping on wet stone, and up came a great Flounder, shining like wet silver. But the Flounder spoke!

“Fisherman,” it said in a clear voice, “I am an enchanted prince. Please let me go. I will do you no good in a pan.”

The fisherman’s heart softened. He looked into the Flounder’s eye and saw intelligence there, not only fish-fear. “I need no talking fish,” he said gently, and he slipped the Flounder back into the Waves. The sea closed over it with a soft gulp. For a moment the surface smoothed as if nothing strange had happened — then the ordinary slap of water returned.

That evening, by a thin fire, he told his wife. She sat up straight, eyes bright with hunger that was not for supper. “You caught a wishing fish and let it go for nothing? Go back! Ask for a snug little cottage — one with a real stove and a window that looks at the garden!”

The fisherman did not like to ask. His hands remembered the Flounder’s cool side and the kindness of release. Still, he walked to the shore. The Waves were calm and gray. He called, “Flounder, Flounder in the sea — my wife wants a cottage for her and me.”

The Flounder rose. “Go home. It is done.”

And so it was: a tidy cottage, warm bread smell, white curtains, a garden of cabbages shining with dew. The wife smiled and stroked the stove door… for a week. Then she frowned at the walls. “This is too small. The neighbors will still pity us. Go ask for a great stone castle.”

Again the fisherman went, slower this time. The Waves were a little higher, a little darker, as if the sea itself were listening with a furrowed brow. The Flounder granted the castle — towers, halls, servants, velvet chairs, a table long as a boat. The wife walked the corridors like a queen and heard her own footsteps echo… for a little while. Then emptiness crept in under the finery. She said, “Why should I only live in a castle? I wish to be King over all this land.”

The fisherman’s feet dragged on the sand. Foam hissed around his ankles. The Waves slapped harder against the rocks. Still the Flounder answered, and the wife became King — with a crown and soldiers and a golden seat. People bowed. Banners snapped. Yet rest would not stay in her hands. At night she turned the crown on the pillow and muttered, “King is not enough. I will be Emperor.”

Now the Waves rose in long gray walls. Wind tasted of salt and trouble. Seabirds flew inland. The fisherman called with a heavy heart, and the wish was granted. The wife ruled empires of maps and banners, roads and rivers drawn like toys beneath her finger… and still she wanted more. “I will rule the holy houses of the land as well — the highest seat of blessing and power.”

The sea grew wild. Waves crashed white. Clouds pressed low. Spray stung the fisherman’s face as he shouted the wish he did not want. The Flounder granted even that, and the wife sat in robes of pride so heavy they seemed to bend the air. Still she could not sleep. At dawn she shook the fisherman awake, wild-eyed. “I am not content. I wish to make the sun rise and the moon set — to order day and night as I please!”

The fisherman trembled. Outside, the sky looked bruised. “Wife — that is too much. That belongs to what is greater than us.”

“Go!” she cried. “Or I will have no peace!”

He went down to a shore where the Waves roared like angry horses. Thunder rolled. He called through the spray, ashamed and afraid, tasting copper and salt. The Flounder rose once more, and its voice was quiet as deep water — quieter than the storm.

“Go home,” it said. “She has asked for what cannot be given to greed.”

When the fisherman reached the place of castles and crowns, all of it was gone. No empire. No throne. No cottage. Only the old tiny hut by the sea, roof patchy, door crooked, and his wife standing in the doorway with empty hands. The wind leaned on the walls again. The floor was earth again.

The Waves settled to their old rhythm — slap, pull, whisper — neither cruel nor kind, only true. The fisherman took his wife’s hand. They had lost every wish. What remained was the hut, the shore, and the sea that will not be owned. And somehow, after so much wanting, the ordinary sound of water on stone felt like the first honest gift of the day.

That is the story of the Waves — W for Waves — which answered when wishing grew too large.`,
  spreads: [
    {
      id: "w-01",
      kind: "opening",
      initialCap: true,
      body: "A fisherman lived with his wife in a tiny hut by the sea. He caught a talking Flounder — an enchanted prince — and set it free. His wife said, “Go back! Ask for a cottage!”",
    },
    {
      id: "w-02",
      kind: "picture",
      image: "/letters/w/spread-01.png",
      imageAlt: "A fisherman releasing a shining flounder into calm coastal waves",
      artPrompt: `${STYLE}. A humble fisherman gently releasing a silver flounder into calm gray-green coastal waves near a pebble shore, soft daylight, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "w-03",
      kind: "text",
      body: "Cottage, then castle, then king, then emperor — each wish granted. The Waves grew higher and darker. Still the wife wanted more: the highest power, then command of sun and moon.",
    },
    {
      id: "w-04",
      kind: "picture",
      image: "/letters/w/spread-02.png",
      imageAlt: "Stormy sea waves rising under dark clouds as a fisherman calls from shore",
      artPrompt: `${STYLE}. Tall stormy ocean waves under dark clouds, a small fisherman on a windswept shore calling out, dramatic but not terrifying, natural coastal scene. ${ART_NO_LETTER}`,
    },
    {
      id: "w-05",
      kind: "text",
      body: "The Flounder said the last wish could not be given to greed. Castle and crown vanished. Only the old hut remained. The Waves returned to their quiet slap and whisper.",
    },
    {
      id: "w-06",
      kind: "picture",
      image: "/letters/w/spread-03.png",
      imageAlt: "A tiny seaside hut with gentle waves after the storm",
      artPrompt: `${STYLE}. A tiny weathered hut by a quiet shore after a storm, gentle rolling waves, soft clearing light, humble and peaceful, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "w-07",
      kind: "text",
      body: "That is the story of the Waves — which answered when wishing grew too large.",
    },
  ],
  outline: {
    cueWord: "Waves",
    formNote:
      "Capital W: down, up, down, up — like four strokes of water rising and falling.",
  },
};
