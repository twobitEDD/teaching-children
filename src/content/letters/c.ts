import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterC: LetterStory = {
  id: "cat",
  letter: "C",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Miller’s Cat",
  imageWord: "Cat",
  culture: "French (Charles Perrault)",
  region: "France / European literary fairy tale",
  traditionalTitle: "Puss in Boots (Le Maître Chat, ou le Chat botté), Perrault",
  sourceNotes:
    "Adapted from Charles Perrault’s “Puss in Boots” (1697): miller’s youngest son inherits a cat; the cat wins fortune through wit, gifts, trickery, and defeating an ogre who can change shape. Public-domain literary fairy tale.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Keeps inheritance unfairness, hunger, clever deceit, and the ogre’s danger (shape-change; cat overcomes him). Not graphic. Image-word Cat (C). American English.",
  pnwBridge:
    "Barn cats still work quietly on PNW farms — clever, proud, and full of secret plans.",
  tellAloud: `When a miller died, he left what little he owned to his three sons. The eldest took the mill — the stone and the grain and the steady work. The second took the donkey — strong enough to carry loads to market. The youngest son received only the Cat.

He sat on a stone and stared at the Cat and felt despair settle on him like dust. “My brothers may earn bread,” he said aloud. “But what shall I do with a cat? I will be hungry before the week is out, and then I shall have to eat you, poor creature, and make a muff of your skin.”

The Cat heard every word. He stood up on his hind legs, smooth as a shadow, and looked at his master with bright, serious eyes. “Do not worry so, master,” he said. “You are not as badly off as you think. Only give me a bag and a pair of boots, so I may walk among people with dignity, and you shall see what I can do.”

The young man had little hope left — yet something in the Cat’s voice made him obey. He found a bag and a pair of boots, small and fine. The Cat pulled them on, took the bag, and trotted off into the world as if he had always owned it.

First he went to a rabbit warren. He filled the bag with bran and left it open, clever as a trap. When a foolish young rabbit hopped in to eat, the Cat pulled the strings tight. Then he walked straight to the palace and bowed low before the king.

“Your Majesty,” he said proudly, “a gift from my noble master, the Marquis of Carabas!”

The king, pleased with the rabbit, accepted it. Again and again the Cat brought gifts — partridges, game from the fields — always in the name of the Marquis of Carabas. The king grew curious. The princess listened at doors. Who was this generous marquis?

One morning the Cat said to his master, “Do as I tell you, and fortune may smile. Bathe in the river where the king’s coach will pass. Leave the rest to me.”

The young man bathed. The Cat hid his shabby clothes under a stone. When the royal coach rolled near, the Cat raced to the road and cried out with all his might, “Help! Help! The Marquis of Carabas is drowning!”

Servants rushed. The Cat told the king that robbers had stolen his master’s clothes while he bathed. The king, remembering the fine gifts, at once sent rich garments from his own wardrobe. Dressed like a lord, the miller’s son looked almost like one. The king invited him into the coach beside the princess — and the princess found him handsome and quiet and strange.

On they rode through the countryside. Ahead lay fields. The Cat ran before the coach and spoke to the workers reaping: “If the king asks whose meadows these are, say they belong to the Marquis of Carabas — or you will wish you had!” The frightened workers obeyed. “And whose is this fine field?” asked the king. “The Marquis of Carabas, Your Majesty!” they answered. The young man in the coach blushed, but said nothing.

At last they came near a great castle. An ogre lived there — powerful, terrible, able to change his shape into any creature he wished. The Cat went first, alone, and asked for an audience. He bowed so politely the ogre was amused.

“I have heard,” said the Cat, “that you can transform yourself into a lion, or even an elephant. Is it true?”

“True enough!” roared the ogre, and became a lion that shook the hall. The Cat pretended to be terrified — then begged, when the ogre returned to his own shape, “But can you become something small? A rat, or a mouse? That, I think, would be the hardest of all.”

The ogre, proud of his power, laughed. “Hardest? Watch!” And he became a mouse upon the floor.

Quick as thought, the Cat sprang and caught him. That was the end of the ogre’s rule in the castle.

When the coach arrived, the Cat flung open the doors. “Welcome,” he cried, “to the castle of my master, the Marquis of Carabas!”

The miller’s son stepped inside as if he had always belonged there. The princess smiled. The king was astonished. And the clever Cat sat in his boots and purred, for he had turned the poorest inheritance into a grand fortune.

That is the story of the Cat — C for Cat — who proved that wit and courage can change a life.`,
  spreads: [
    {
      id: "c-01",
      kind: "opening",
      initialCap: true,
      body: "A miller died. The eldest took the mill, the second the donkey, and the youngest only the Cat. “What shall I do with a cat?” he sighed. The Cat stood tall: “Give me a bag and boots — you shall see.”",
    },
    {
      id: "c-02",
      kind: "picture",
      image: "/letters/c/spread-01.png",
      imageAlt: "A clever cat standing tall in little boots",
      artPrompt: `${STYLE}. A clever proud cat standing upright wearing small storybook boots, soft farmyard light. ${ART_NO_LETTER}`,
    },
    {
      id: "c-03",
      kind: "text",
      body: "The Cat trapped a rabbit and bowed at the palace. “A gift from my master, the Marquis of Carabas!” Again and again he brought gifts. The king grew curious. The princess listened.",
    },
    {
      id: "c-04",
      kind: "picture",
      image: "/letters/c/spread-02.png",
      imageAlt: "The cat presenting a gift at a palace doorway",
      artPrompt: `${STYLE}. A booted cat presenting a small gift at a fairy-tale palace doorway, warm light. ${ART_NO_LETTER}`,
    },
    {
      id: "c-05",
      kind: "text",
      body: "By the river the Cat cried that the Marquis was drowning. The king dressed the miller’s son in fine clothes and set him in the coach beside the princess. Ahead, workers were told to name every field for Carabas.",
    },
    {
      id: "c-06",
      kind: "picture",
      image: "/letters/c/spread-03.png",
      imageAlt: "A royal coach by a river with the clever cat nearby",
      artPrompt: `${STYLE}. A golden royal coach by a sparkling river, a clever booted cat on the bank, soft fairy-tale landscape. ${ART_NO_LETTER}`,
    },
    {
      id: "c-07",
      kind: "text",
      body: "At the ogre’s castle the Cat asked, “Can you become a mouse?” The proud ogre did — and the Cat sprang. The castle was won. “Welcome to the castle of the Marquis of Carabas!” That is the story of the Cat — wit and courage changing a life.",
    },
    {
      id: "c-08",
      kind: "picture",
      image: "/letters/c/spread-04.png",
      imageAlt: "The cat welcoming guests to a bright open castle",
      artPrompt: `${STYLE}. A proud booted cat at the open doors of a bright fairy-tale castle, warm welcome light. ${ART_NO_LETTER}`,
    },
  ],
  outline: {
    cueWord: "Cat",
    formNote:
      "Capital C: one open curve, like a cat curling around a bowl — start high, sweep around, leave the opening to the right.",
  },
};
