import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterT: LetterStory = {
  id: "tree",
  letter: "T",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Old Man Who Made Trees Blossom",
  imageWord: "Tree",
  culture: "Japanese folk",
  region: "Japan / East Asia",
  traditionalTitle:
    "Hanasaka Jiisan (花咲か爺さん) — The Old Man Who Made Trees Blossom",
  sourceNotes:
    "Japanese folktale Hanasaka Jiisan (also “The Old Man Who Made Dead Trees Blossom”): a kind old couple’s dog leads them to buried gold; a jealous neighbor’s cruelty follows; the dog’s spirit guides the kind old man to sprinkle ashes that make a bare Tree bloom, winning a lord’s favor. Public-domain Japanese folk tradition (Otogi-zōshi / children’s folk repertory). Modern picture-book wording not reprinted.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Tree (blossoming as gratitude’s visible wonder). Softens neighbor cruelty and the dog’s death without erasing injustice or consequence. Keeps planting/ash-bloom wonder and kindness rewarded. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "In early PNW spring, bare cherry and plum trees in city parks suddenly foam with blossom overnight. Standing under a Tree that seemed asleep yesterday, children feel the same hush the old man’s ashes woke.",
  tellAloud: `Long ago in a village of Japan there lived a kind old man and a kind old woman. Their house was small. Their garden was neat. They had no child, but they had a little white dog who loved them, and whom they loved as family. They shared their rice and pickles. They spoke gently even when weary. Even the morning glories by the door seemed to lean toward their kindness.

One day the dog tugged the old man’s sleeve and scratched eagerly at a spot in the field beyond the beans. “What is it, friend?” The old man fetched a spade and dug — and there, under ordinary earth, lay a cache of gold coins, bright as little suns. The couple gave thanks at the household shelf, shared with neighbors in need, and kept only what was fair. The dog wagged as if the whole world were a good smell on the wind.

A greedy neighbor heard of the gold and could not sleep for wanting it. He borrowed the dog with false sweetness and snarled once they were alone, “Find treasure!” The dog scratched at ordinary earth, confused, trying to please. The neighbor dug and found only scraps and stones. In a rage he struck the little white dog — and the friend fell and did not rise. The kind old couple wept as if a child had gone from their rooms. They buried the dog beneath a young Tree in their garden, patted the soil smooth, and watered the roots with tears that would not stop.

That night the dog’s spirit came in a dream, soft as fur against the cheek. “Cut the Tree that grows over my grave,” it said. “Make a mortar from the wood. Pound rice cakes — and watch.” The old man woke with sorrow and reverence. He obeyed carefully, speaking thanks to the Tree before each cut. When he pounded mochi in the wooden mortar with the old woman beside him, gold coins spilled like grain across the mat. Wonder returned, bittersweet — joy braided with memory.

The greedy neighbor heard again. He seized the mortar, pounded with greedy arms — and only foul things came forth, shameful and useless. In spite he burned the mortar until nothing remained but ash. Again the dog’s spirit spoke in a dream to the kind old man: “Take the ashes. Climb. Sprinkle them on bare trees. Do it with a quiet heart.”

The old man carried a small pouch of ashes along a winter road to an orchard where a great Tree stood black and leafless before a passing lord and his attendants. Breath smoked in the cold. Crows sat like commas on the fence. The lord frowned at the barren boughs and at the gray world that would not soften. The old man climbed carefully, bones creaking, and scattered the ash with a blessing under his breath — not a demand, only a request whispered to wood and sky. At once the Tree burst into blossom — pink and white, fragrant, impossible, a spring that would not wait for the calendar. Petals snowed upon the lord’s procession. Horses tossed their manes through perfume. Children in the train clapped. The lord laughed with open delight and rewarded the kind old man with honor and gifts enough for gentle years — rice, cloth, and a quiet respect that money alone cannot buy.

The greedy neighbor tried the ashes too, without respect, climbing roughly and flinging with a curse. The wind blew ash into eyes and coughs; no blossoms came for spite. He learned — too late, and too loudly — that wonder will not work for a hard heart, and that a Tree answers kindness more readily than force.

In fuller village tellings, more episodes braid envy and reward. In this classroom telling we keep the root image: a Tree that blossoms from gratitude and guidance, ashes of love waking flowers, and a kind old man who listened to a friend’s last gifts.

That is the story of the Tree — T for Tree — that bloomed when kindness remembered.`,
  spreads: [
    {
      id: "t-01",
      kind: "opening",
      initialCap: true,
      body: "A kind old couple loved a little white dog who led them to buried gold. A greedy neighbor’s cruelty followed. They buried their friend beneath a young Tree and watered it with tears.",
    },
    {
      id: "t-02",
      kind: "picture",
      image: "/letters/t/spread-01.png",
      imageAlt: "A young tree in a garden where a kind couple remember their dog",
      artPrompt: `${STYLE}. A tender Japanese village garden with a young tree, an elderly couple standing quietly nearby in soft morning light, grief held gently, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "t-03",
      kind: "text",
      body: "The dog’s spirit guided them: wood from the Tree became a mortar that poured gold for kind hands. Ashes from spite’s fire held a stranger gift.",
    },
    {
      id: "t-04",
      kind: "picture",
      image: "/letters/t/spread-02.png",
      imageAlt: "An old man sprinkling ashes on a bare tree before a lord",
      artPrompt: `${STYLE}. An elderly Japanese man in simple clothes sprinkling ashes from a pouch onto a tall bare winter tree before a watching lord’s procession, expectant hush, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "t-05",
      kind: "text",
      body: "The bare Tree burst into blossom — pink and white, a spring that would not wait. Kindness had remembered, and the Tree answered.",
    },
    {
      id: "t-06",
      kind: "picture",
      image: "/letters/t/spread-03.png",
      imageAlt: "A barren tree suddenly covered in pink and white blossoms",
      artPrompt: `${STYLE}. A tall tree exploding into abundant pink and white blossoms over a winter road, petals falling like soft snow, wonder and joy, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "t-07",
      kind: "text",
      body: "That is the story of the Tree — T for Tree — that bloomed when kindness remembered.",
    },
  ],
  outline: {
    cueWord: "Tree",
    formNote:
      "Capital T: one strong crossbar on a tall trunk-stroke — like a Tree’s canopy resting on a straight stem.",
  },
};
