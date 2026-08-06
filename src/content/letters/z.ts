import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterZ: LetterStory = {
  id: "zebra",
  letter: "Z",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "How the Zebra Got Its Stripes",
  imageWord: "Zebra",
  culture: "San (Bushmen) folk tradition — Southern Africa",
  region: "Southern Africa (Kalahari / Namibia region — San oral tradition)",
  traditionalTitle:
    "How the Zebra Got Its Stripes — San / Bushmen waterhole and baboon fire pourquoi",
  sourceNotes:
    "Southern African San (Bushmen) pourquoi tale widely retold in regional children’s and safari education sources: in a time of heat and scarce water, a baboon guards a waterhole by a fire and claims lordship of the water; a plain white zebra challenges him; after a struggle the baboon is kicked onto rocks (explaining the baboon’s bare patch), and the zebra stumbles back through the fire, scorching black stripes onto its coat before galloping to the open plains. Cited classroom-friendly retellings include public San-story summaries (e.g. Gateway Africa “How the Zebra Got His Stripes” San Clan telling) and parallel versions in Southern African oral-education blogs. Adapt with cultural respect; illustrations are studio-generated drafts, not traditional San art.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Softens the fight (dust, shove, kick — no gore) and the fire scorch (startle and stripe marks, not graphic burns). Keeps the moral: water is for sharing, not hoarding. Centers image-word Zebra. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "Even in the rainy PNW, a summer creek can shrink to pools — and children learn that water shared keeps more friends than water guarded. The Zebra’s tale carries that same lesson under a hotter sun.",
  tellAloud: `Long ago in Southern Africa, when the sun pressed hard on the land and rain was a rare visitor, water hid in only a few pools among cracked pans and thorn scrub. The air shimmered. Dust tasted of iron. Acacias threw thin shade like lace that did not cool enough. Animals walked far on hot earth, tongues dry, shadows short, hoping for a drink that might still be there when they arrived. At one of those precious waterholes a Baboon made himself guard. He piled sticks and built a fire beside the pool to watch by night, orange light jumping on the water’s skin, and he barked at anyone who came near.

“I am lord of the water!” he shouted, chest puffed. “This pool is mine. Go away!”

Smaller creatures turned back, ears flat. A tortoise paused, then turned. Birds circled and left. Thirst made them brave and then afraid again. The Baboon liked that fear. He liked the fire. He liked being loud under a sky too wide to argue with.

In those days the Zebra was plain white from nose to tail — pale as cloud, bright as fresh milk — with no stripes at all. One hot morning a young Zebra came down from the dry grass with his father (as some San tellings include), thirsty and tired, coat dull with dust. He smelled water — sweet, cool, almost like hope after a long walk. He heard the Baboon’s boast crack across the silence and felt his own courage rise like a second heartbeat.

“The water is for everyone,” said the young Zebra, polite but firm, hooves planted in the baked mud. “Not only for you. The land is dry. Sharing keeps us alive.”

“If you want a drink,” snapped the Baboon, shaking a stick, sparks winking behind him, “you must fight for it!”

Dust rose in a soft brown cloud. They shoved and circled beside the pool. The Baboon was fierce and loud, teeth flashing, fire spit crackling. The Zebra was strong and sure, muscles gathered under white hide. Back and forth they pushed — not a tale of cruelty for its own sake, but a contest over life’s water. Hooves thudded. The pool trembled. At last the Zebra gave a mighty kick — to free the pool — and the Baboon went tumbling up onto the rocks behind the waterhole. He landed hard on his seat, and the hair there rubbed away on stone. (Even today, people say, baboons carry a bare patch and sit among high rocks, holding their tails oddly, barking defiance at strangers.)

The young Zebra staggered back, dizzy from the struggle, ears ringing, not looking where his hooves went —

and he stumbled through the Baboon’s fire!

Embers flew like angry fireflies. Hot sticks kissed his white coat in long dark lines from shoulder to flank. The shock of heat and surprise sent him leaping with a startled cry that scattered doves from a thorn tree. He galloped, galloped, galloped toward the open savannah, wind streaming past, cooling the marks until they set as bold black stripes upon white — night-rivers drawn across daylight.

When at last he stopped on the wide plains, sides heaving, he looked at himself in a shallow rain-memory of sky on the grass. Stripes ran across his flanks and down his legs. He was no longer plain. He was a Zebra — patterned, proud, and free where the grass rolled forever under a kinder wind. Behind him, at the waterhole, the selfish guard had fled to the cliffs. Other animals came carefully to drink — antelope, birds, small dry throats — noses touching the water at last, for water was never meant to belong to one loud voice alone.

That is how, in this old San telling from Southern Africa, the Zebra got its stripes — not as decoration first, but as the mark of a hard, hot day when someone refused to let thirst be owned.

That is the story of the Zebra — Z for Zebra — striped by fire, friend of the open plain.`,
  spreads: [
    {
      id: "z-01",
      kind: "opening",
      initialCap: true,
      body: "In a time of great heat, a Baboon guarded a waterhole by his fire and barked, “I am lord of the water!” A plain white Zebra came, thirsty, and said the water belonged to everyone.",
    },
    {
      id: "z-02",
      kind: "picture",
      image: "/letters/z/spread-01.png",
      imageAlt: "A plain white zebra approaching a waterhole watched by a baboon near a fire",
      artPrompt: `${STYLE}. A plain white zebra approaching a small African waterhole, a baboon sitting by a little campfire guarding it, hot dry savannah light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "z-03",
      kind: "text",
      body: "They struggled in the dust. The Zebra’s kick sent the Baboon to the rocks. Dizzy, the Zebra stumbled back through the fire — and black scorch-lines marked his white coat.",
    },
    {
      id: "z-04",
      kind: "picture",
      image: "/letters/z/spread-02.png",
      imageAlt: "Zebra startling back through embers as stripes begin to mark its coat",
      artPrompt: `${STYLE}. A white zebra startling through scattered embers beside a waterhole, soft dark stripe marks beginning on its coat, dramatic but gentle storybook moment, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "z-05",
      kind: "text",
      body: "He galloped to the open plains. The marks stayed — bold stripes. The waterhole was free for sharing. That is how the Zebra got its stripes.",
    },
    {
      id: "z-06",
      kind: "picture",
      image: "/letters/z/spread-03.png",
      imageAlt: "A striped zebra standing proudly on open sunlit savannah plains",
      artPrompt: `${STYLE}. A proud black-and-white striped zebra standing on open sunlit savannah plains with soft gold grass, free and calm, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "z-07",
      kind: "text",
      body: "That is the story of the Zebra — striped by fire, friend of the open plain.",
    },
  ],
  outline: {
    cueWord: "Zebra",
    formNote:
      "Capital Z: a zigzag path — top bar, diagonal, bottom bar — like stripes turning a corner.",
  },
};
