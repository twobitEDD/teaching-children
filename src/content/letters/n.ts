import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterN: LetterStory = {
  id: "necklace",
  letter: "N",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Grateful Beasts",
  imageWord: "Necklace",
  culture: "Indian (Panchatantra) / Indo-Tibetan fable tradition",
  region: "South Asia / Himalayan literary tradition",
  traditionalTitle:
    "The Grateful Beasts and the Ungrateful Man — Panchatantra / related Tibetan (Kanjur) grateful-animals cycle",
  sourceNotes:
    "Classical Indian fable tradition (Viṣṇu Śarma’s Panchatantra): a man rescues animals (and sometimes an ungrateful human) from a pit or trap; the beasts repay kindness — in well-known versions a tiger (or lion) offers a golden necklace and wrought ornaments kept for the rescuer. Parallel Indo-Tibetan tellings (Kah-gyur / Kanjur “Grateful Animals and the Ungrateful Man”) feature returned ornaments/jewels and betrayal by an ungrateful human. Distinct from Aesop’s Cock and the Jewel (rooster finds a gem and prefers grain). Public-domain folk/literary tradition; modern translations paraphrased, not reprinted.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Necklace as the grateful return-gift. Softens pit-rescue danger and accusation/prison beats without erasing injustice or gratitude’s triumph. No graphic wounding. American English.",
  pnwBridge:
    "In PNW tide pools and forest trails, children learn that a kindness returned — a shared berry, a found mitten — can feel as bright as a necklace of thanks.",
  tellAloud: `Once, in a land of rivers and teak forests, a traveler named Yajnadatta walked a lonely path. He was not rich. He carried a staff, a little food, and a heart that disliked leaving anyone in trouble — beast or human.

Near midday he heard cries from a deep pit dug as a trap. He peered over the rim. Below, tangled and frightened, were a tiger, a monkey, and a snake — and also a man who shouted louder than all the rest. “Save me first!” the man cried. “I am worth more than animals!”

Yajnadatta’s hands shook, for the pit was deep and the tiger’s eyes were wild. Still he found a long vine and a stout branch. First he helped the animals up — carefully, speaking soft words — for they had been trapped longest and their fear was raw. The tiger’s breath was hot; the monkey’s fingers clung; the snake coiled tight with fright until the open air returned. Then he helped the man. The tiger shook mud from his coat. The monkey chattered thanks. The snake bowed its head. The man brushed his clothes and said, almost as an afterthought, “If you ever need gold worked into ornaments, find me in the city. I am a goldsmith.” Then he hurried away without looking back.

The tiger spoke with rough dignity. “Friend, you saved us. If ever you are in need, call near my den. I keep a gift for one who is kind.” The monkey promised fruit and guidance through the trees. The snake promised cool shelter and a watchful guard. Yajnadatta bowed and went on his way, lighter for having done right, not knowing yet which promise would prove true.

Seasons turned. Hard times came. Rain spoiled the grain. Yajnadatta’s food ran low. Remembering the tiger’s word, he walked to the forest den and called softly. The tiger came at once, eyes bright with recognition. From a hollow in the rock he brought forth a golden Necklace — fine links, a pendant that caught the leaf-light — and other small ornaments kept safe for this very day.

“Take these,” said the tiger. “They came into my keeping after a traveler lost his way and left them behind in fear. I saved them for you. Go in peace.”

Yajnadatta thanked him with tears and carried the Necklace toward the city, thinking only of bread and honesty. The links were cool against his palm. He did not feel like a rich man — only like a man who had been remembered. There he showed the goldsmith — the very man from the pit — what he had been given, hoping to sell fairly.

The goldsmith’s eyes narrowed. He knew that workmanship. “These are royal pieces,” he whispered to himself — and greed woke in him like a snake of its own. Instead of helping, he ran to the king’s men. “This traveler is a thief!” he cried. “See the Necklace he carries!”

Guards seized Yajnadatta. He told the truth — the pit, the rescue, the tiger’s gift — but fear made the court harsh, and the goldsmith’s words sounded smooth. Yajnadatta was bound and led away under shame he had not earned. His heart ached more for the broken trust than for the ropes.

That night the grateful beasts learned of his trouble. The monkey ran the rooftops. The snake slid through garden shadows. The tiger paced beyond the walls, roaring once so the city knew wild justice was awake. Together they made a plan of wit, not cruelty: the snake startled the court just enough to stop the unjust punishment; the monkey brought witnesses from the forest path; the truth of the rescue was told again until even the king’s frown softened.

When the tale stood clear — that the Necklace was a gift of thanks, and the goldsmith had repaid rescue with betrayal — the king freed Yajnadatta. The goldsmith hung his head. The Necklace was returned to its rightful story: not stolen glitter, but gratitude made visible.

Yajnadatta bowed to the beasts who had not forgotten. “You kept faith,” he said. And the golden Necklace shone in the morning light like a circle of remembered kindness.

That is the story of the Necklace — N for Necklace — returned by grateful friends when a human heart forgot.`,
  spreads: [
    {
      id: "n-01",
      kind: "opening",
      initialCap: true,
      body: "A traveler heard cries from a deep pit — tiger, monkey, snake, and a shouting man. He saved them all. The beasts promised thanks. The man hurried off with barely a word.",
    },
    {
      id: "n-02",
      kind: "picture",
      image: "/letters/n/spread-01.png",
      imageAlt: "A traveler helping animals climb from a forest pit",
      artPrompt: `${STYLE}. A kind traveler helping a tiger monkey and snake climb from a deep forest pit with a vine, tense but gentle rescue, soft woodland light. ${ART_NO_LETTER}`,
    },
    {
      id: "n-03",
      kind: "text",
      body: "When hard times came, the tiger brought a golden Necklace kept safe as a gift of thanks. But the ungrateful goldsmith called the traveler a thief, and guards took him away.",
    },
    {
      id: "n-04",
      kind: "picture",
      image: "/letters/n/spread-02.png",
      imageAlt: "A tiger offering a golden necklace in forest light",
      artPrompt: `${STYLE}. A dignified tiger offering a golden necklace to a humble traveler at a forest den, warm leaf-light, gratitude and wonder. ${ART_NO_LETTER}`,
    },
    {
      id: "n-05",
      kind: "text",
      body: "The grateful beasts returned with wit and truth. The king freed the traveler. The Necklace shone as kindness remembered — not stolen glitter.",
    },
    {
      id: "n-06",
      kind: "picture",
      image: "/letters/n/spread-03.png",
      imageAlt: "A golden necklace shining in morning light with grateful animals nearby",
      artPrompt: `${STYLE}. A golden necklace catching soft morning light, with a tiger monkey and snake peacefully nearby and a freed traveler bowing in thanks, hopeful courtyard or forest edge. ${ART_NO_LETTER}`,
    },
    {
      id: "n-07",
      kind: "text",
      body: "That is the story of the Necklace — N for Necklace — returned by grateful friends when a human heart forgot.",
    },
  ],
  outline: {
    cueWord: "Necklace",
    formNote:
      "Capital N: two tall posts with a diagonal bridge between — like a necklace chain slanting from one shoulder to the other.",
  },
};
