import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterK: LetterStory = {
  id: "king",
  letter: "K",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "King Thrushbeard",
  imageWord: "King",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "King Thrushbeard (König Drosselbart), Grimm",
  sourceNotes:
    "Brothers Grimm “King Thrushbeard”: a proud princess mocks suitors, especially a king she nicknames Thrushbeard; her father marries her to a beggar; hard work and humility follow; the beggar is revealed as the king. Public-domain Grimm.",
  adaptations:
    "Expanded oral telling (~5–7 min). Keeps pride, mockery, hard labor, shame, and the reveal — without cruelty for its own sake. Lesson held in image: a king may wear beggar’s clothes; pride costs. American English.",
  pnwBridge:
    "Even a “king” of the playground learns the same lesson as a forest trail: mockery makes a lonely road.",
  tellAloud: `There was once a King’s daughter so proud that no suitor pleased her. Princes came with gifts. She wrinkled her nose. Dukes bowed. She laughed behind her hand.

One day a fine King came — tall, thoughtful, with a beard she thought too pointed. “Look!” she cried before the whole court. “His chin is like a thrush’s beak! I shall call him King Thrushbeard!”

Laughter rippled. The King of that beard reddened, but said little. Her father, the old King, burned with shame at her cruelty. “You have mocked enough,” he said. “You will marry the next beggar who comes to the gate.”

Soon a fiddler in ragged clothes stood below, playing for coins. “There,” said the father. “Your husband.”

The princess wept and stormed, but the word of a King is hard as iron. She was married in her pride’s ruin and sent walking beside the beggar along dusty roads.

They came to a great forest. “Whose woods are these?” she asked.

“They belong to King Thrushbeard,” said the beggar. “If you had married him, they would have been yours.”

She bit her lip.

They passed fine fields. “Whose grain?”

“King Thrushbeard’s.”

They passed a city shining on a hill. “Whose city?”

“King Thrushbeard’s — the man you mocked.”

At a little broken cottage he stopped. “This is our home.”

She learned to work — badly at first. She tried to weave and tangled the thread. She tried to sell pots in the market and broke them through clumsiness and tears. Hunger taught her what mockery never had: that hands must serve, and pride does not fill a bowl.

One day the beggar sent her to the castle kitchen to hire as a kitchen maid. She carried jars and swept ashes. At a feast she hid behind a door, ashamed, watching nobles dance — and among them she saw King Thrushbeard himself, whom she had scorned.

Then the beggar threw off his rags. Beneath them stood that same King — Thrushbeard — who had loved her enough to teach her the long way, not the easy one.

“I was the fiddler,” he said. “I was the dust and the broken pots. I was also the King. You needed to meet both.”

She sank to her knees, not in fear, but in understanding. He raised her up. The court saw a princess who had learned the weight of words — and a King who had chosen patience over revenge.

That is the story of the King — K for King — who wore a beggar’s coat so pride could learn to bow.`,
  spreads: [
    {
      id: "k-01",
      kind: "opening",
      initialCap: true,
      body: "A proud princess mocked a fine King — “Thrushbeard!” she laughed. Her father married her to a beggar at the gate. Pride walked the dusty road.",
    },
    {
      id: "k-02",
      kind: "picture",
      image: "/letters/k/spread-01.png",
      imageAlt: "A king in simple travel clothes on a forest road",
      artPrompt: `${STYLE}. A dignified young king in simple travel cloak on a forest road, thoughtful not cruel, soft storybook light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "k-03",
      kind: "text",
      body: "Whose woods? Whose fields? Whose city? “King Thrushbeard’s,” said the beggar. She worked, failed, learned hunger — and shame that teaches.",
    },
    {
      id: "k-04",
      kind: "picture",
      image: "/letters/k/spread-02.png",
      imageAlt: "A small cottage and market pots in soft light",
      artPrompt: `${STYLE}. A humble wooden cottage beside a path, simple clay pots, sense of hard work and humility, warm natural light, no people close-up. ${ART_NO_LETTER}`,
    },
    {
      id: "k-05",
      kind: "text",
      body: "At the feast the beggar threw off his rags — and was King Thrushbeard. Patience over revenge. K for King.",
    },
    {
      id: "k-06",
      kind: "picture",
      image: "/letters/k/spread-03.png",
      imageAlt: "A king revealed in a warm castle hall",
      artPrompt: `${STYLE}. A king standing in a warm castle hall after removing a travel cloak, reconciliation and dignity, soft golden light, natural scene. ${ART_NO_LETTER}`,
    },
  ],
  outline: {
    cueWord: "King",
    formNote:
      "Capital K: a tall spine with two arms branching out — one up, one down — like a royal stance, open and strong.",
  },
};
