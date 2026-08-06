import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterQ: LetterStory = {
  id: "quail",
  letter: "Q",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Quails and the Net",
  imageWord: "Quail",
  culture: "Indian (Buddhist Jataka)",
  region: "South Asia / ancient India",
  traditionalTitle:
    "Sammodamāna Jātaka / Quail Jataka — birds cooperate to lift a net",
  sourceNotes:
    "Buddhist Jataka tradition (Sammodamāna Jātaka and related quail/net tellings): a flock of quails, caught under a hunter’s net, escape by rising together on a count and carrying the net to a thorn thicket; later quarreling breaks their unity and the hunter succeeds. Public-domain Pali/English Jataka translations paraphrased; modern picture-book wording not reprinted.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Quail and teamwork under the net. Softens hunting peril without erasing consequence of quarrel. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "In PNW meadows and field edges, California quail run in little companies — heads bobbing, calling to one another. Together they find cover; alone, the open feels much larger.",
  tellAloud: `Long ago, in a land of tall grass and warm wind, a great flock of Quails lived together. They scratched for seeds between the stems. They drank from shallow pools that held the sky. At dusk their soft calls crossed the meadow like beads on a string. At night they huddled close — soft rounded bodies like a living blanket on the earth — and the moon watched over their stillness. Their leader was wise and steady, with a crest that flicked when he listened hard.

“Stay together,” he told them each morning. “A Quail alone is small. Quails together are strong. Eat near one another. Fly as one flock. Answer when your neighbor calls.”

A hunter knew their habits. He watched from the field’s edge until he learned where the flock liked the sweetest grain. He wove a wide net, rope smelling of smoke and rain, and spread it carefully where the Quails would come. One bright morning, as they pecked and murmured and argued gently over a seed — the ordinary music of a flock — he cast the net.

Down it fell — a sudden sky of rope — and the whole company was caught beneath it. Wings beat against mesh. Dust rose. Hearts hammered like tiny drums. The hunter laughed a short hard laugh and came walking with a sack, certain of supper.

“Listen!” called the leader Quail, voice sharp with urgency. “Do not panic. Panic is the hunter’s friend. When I cry ‘Lift!’ we all rise at once — wings and feet together — and carry this net to the thorns!”

For a breath they froze. Then they understood. They waited, pressed side to side, fear held in common. “Lift!”

Up they went — a trembling cloud of Quails with the net upon their backs — wings roaring, feet kicking, every bird giving what strength it had. They flew hard toward a thicket of sharp thorns at the meadow’s rim. There they dropped the net. It snagged and tore on the spines. Gaps opened. The Quails slipped free into the grass, panting, alive, eyes bright with leftover terror and sudden joy. The hunter arrived to find only a ruined snare and empty air. He shook his fist at the thorns and went home empty-handed, supper turned to anger.

Day after day he tried again. Day after day the Quails remembered the count and the cry. “Lift!” — and the net rose — and the thorns received it — and the flock scattered free into the whispering stems. The hunter grew thin with anger. He sat in the dusk chewing dry bread and muttering, “If only they would quarrel, then I should have my supper. Division will do what rope cannot.”

And quarrel they did — not about the net, but about a small thing that felt large in the moment. One Quail, hopping for a seed, stepped on another’s head. “Clumsy!” snapped the second. “Rude!” cried the first. Words grew sharp as thorns. Friends took sides. Pride puffed up like a crop full of gravel. Listening shrank. The leader called for peace, but ears had closed.

The next morning the net fell again, wide and sudden. “Lift!” cried the leader. But half the Quails answered, “Why should we lift with them?” and the other half answered, “We will not lift with you!” Wings pulled different ways. Feathers tangled. The net barely trembled, then settled heavier than before. The hunter gathered them up into his sack — for division is a second net, harder than rope, and it closes from the inside.

In the fullest Jataka tellings, the lesson is spoken plainly for monks and children alike: unity saves; quarrel delivers us to the hunter. In this classroom telling we keep the living pictures: Quails who escaped by rising as one, the torn net on the thorns, and the sorrow when togetherness broke over a small step and a sharp word.

That is the story of the Quail — Q for Quail — who lifts the net when all lift together.`,
  spreads: [
    {
      id: "q-01",
      kind: "opening",
      initialCap: true,
      body: "A flock of Quails lived in tall grass. Their leader said, ‘Stay together. A Quail alone is small. Quails together are strong.’ A hunter spread a wide net where they liked to feed.",
    },
    {
      id: "q-02",
      kind: "picture",
      image: "/letters/q/spread-01.png",
      imageAlt: "A flock of quails feeding in tall warm grass",
      artPrompt: `${STYLE}. A flock of small round quails pecking seeds in tall golden-green grass under soft morning light, companionable and alert, natural meadow scene. ${ART_NO_LETTER}`,
    },
    {
      id: "q-03",
      kind: "text",
      body: "The net fell. ‘Lift!’ cried the leader — and every Quail rose at once, carrying the net to the thorns. They slipped free. The hunter found only a ruined snare.",
    },
    {
      id: "q-04",
      kind: "picture",
      image: "/letters/q/spread-02.png",
      imageAlt: "Quails rising together under a hunter’s net toward thorns",
      artPrompt: `${STYLE}. Many quails flying upward together lifting a woven net toward a thorny thicket, tense teamwork and hope, soft dusty light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "q-05",
      kind: "text",
      body: "Then a quarrel over a small step divided the flock. When the net fell again, they would not lift as one — and the hunter’s sack was filled. Unity had been their wings.",
    },
    {
      id: "q-06",
      kind: "picture",
      image: "/letters/q/spread-03.png",
      imageAlt: "Quails pulling different ways under a net while a hunter approaches",
      artPrompt: `${STYLE}. Quails under a net pulling in different directions, discord visible in their postures, a distant hunter silhouette approaching through grass, cautionary but not graphic, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "q-07",
      kind: "text",
      body: "That is the story of the Quail — Q for Quail — who lifts the net when all lift together.",
    },
  ],
  outline: {
    cueWord: "Quail",
    formNote:
      "Capital Q: a round O-shape with a little tail kicking out at the bottom — like a quail’s round body and a quick flick of its crest or foot.",
  },
};
