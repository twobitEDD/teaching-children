import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterS: LetterStory = {
  id: "swan",
  letter: "S",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Six Swans",
  imageWord: "Swan",
  culture: "German (Brothers Grimm)",
  region: "Central Europe / Germany",
  traditionalTitle: "The Six Swans (Die sechs Schwäne), Grimm",
  sourceNotes:
    "Brothers Grimm “The Six Swans”: a king’s six sons are enchanted into swans by a stepmother’s spell; their sister must sew six shirts of nettles in silence for years to break the charm; near the end one sleeve remains unfinished. Public-domain Grimm tradition. Related “Swan Brothers” / “Wild Swans” motifs exist across Europe (including Andersen’s literary Wild Swans — not reprinted here).",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Swan. Softens stepmother malice and execution threat without erasing exile, silence-ordeal, or the cost of unfinished work (one brother keeps a wing-arm). No graphic violence. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "Along PNW lakes and coastal bays, trumpeter and tundra swans winter in pale flocks. Watching them lift — long necks, white wings — children can feel how a Swan holds both grace and longing.",
  tellAloud: `There was once a king who had six sons and one daughter, and he loved them as the woods love rain. The princes rode and laughed. The girl watched the sky and practiced quiet courage without yet knowing she would need it. One day, hunting far from home, the king lost his path in a dark forest where the trees leaned close and the paths lied. An old woman — a witch of hard heart — appeared between the trunks. She guided him out only when he promised to marry her daughter. Afraid, weary, ashamed of his lostness, he agreed.

The new queen came to the castle with a smile that did not warm the rooms. She disliked the six princes — their brightness, their claim on the king’s love. With a touch of cursed white shirts she changed them. Feathers covered their arms. Necks lengthened and curved. Feet became dark paddles. Where six boys had stood in the courtyard, six white Swans beat the air and rose over the trees, crying with voices still almost human. “As Swans you shall fly,” she hissed, “unless someone frees you by a hard and silent labor.”

The sister searched the forest with torn skirts and a stubborn heart, calling names into moss and echo, until she found a hut by a lake that held the sky like a second world. At dusk six Swans flew down on long white wings. They were her brothers. For a short hour each evening they took human shape again — faces known, hands known — and then the feathers returned with the dark.

“Sister,” they said, “only you can save us. You must sew six shirts of starwort nettles. You must not speak — not one word — for six years. If you speak, the work will fail, and we will remain Swans forever.”

The girl gathered nettles though they stung her hands until they blistered and healed and blistered again. She spun thread from green fire. She sewed by moonlight and by thin dawn. She lived in silence like a held breath. People who passed thought her strange, even cursed. A young king hunting near found her sewing in a tree’s cradle of branches and, moved by her quiet dignity, took her to his castle as his wife. Still she did not speak. Still her fingers worked the rough green shirts, stitch after painful stitch.

The young king’s mother whispered poison into the court’s ear: “She is not what she seems. Mute women hide dark things.” When a child was born, the jealous woman stole it away in the night and accused the silent queen of harm. The people murmured. Torches gathered. The king wept and did not know whom to believe. Still the sister sewed and would not speak — for her brothers’ lives rode on her silence like Swans on wind.

At last she was led toward a hard judgment. Wood was stacked. Fear stood in the square. Then the six years ended like a door opening. Six Swans came beating down from the sky, white against the smoke-colored air. She threw the nettle shirts over them — and five brothers stood whole as men, laughing and crying. The sixth shirt lacked one sleeve; that brother kept one arm as a swan’s white wing — a reminder of work unfinished, yet of love that almost reached completion, and still saved.

Then the sister spoke at last, voice rusty with unused years. She told the truth of nettles, Swans, and stolen blame. The child was found. The false accuser was sent away from the warm rooms. The Swan-brothers embraced her until her stung hands rested against living shoulders. The young king understood the price of her silence and honored it.

In the fullest Grimm tellings, fear and injustice press hard before the ending turns. In this classroom telling we keep the shining center: six Swans over water, a sister’s silent courage, nettles stinging toward freedom, and love that finishes what it can.

That is the story of the Swan — S for Swan — white wings held by a sister’s quiet hands.`,
  spreads: [
    {
      id: "s-01",
      kind: "opening",
      initialCap: true,
      body: "A hard-hearted stepmother changed six princes into Swans. Their sister found them by a lake: human for one hour at dusk, then white wings again. Only silent nettle-work could free them.",
    },
    {
      id: "s-02",
      kind: "picture",
      image: "/letters/s/spread-01.png",
      imageAlt: "Six white swans landing at a forest lake at dusk",
      artPrompt: `${STYLE}. Six white swans landing on a quiet forest lake at dusk, mist and soft gold-violet light, longing and beauty, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "s-03",
      kind: "text",
      body: "She gathered stinging nettles and sewed six shirts without speaking a word — through years, through false blame, through fear — holding her silence like a vow.",
    },
    {
      id: "s-04",
      kind: "picture",
      image: "/letters/s/spread-02.png",
      imageAlt: "A girl silently sewing shirts of nettles by a window",
      artPrompt: `${STYLE}. A young woman silently sewing rough green nettle shirts by a castle window, focused tender hands, soft indoor light, determination without melodrama, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "s-05",
      kind: "text",
      body: "At the last moment the Swans flew down. The shirts restored five brothers wholly; the sixth kept a swan-wing arm. Then she spoke — and truth flew free as well.",
    },
    {
      id: "s-06",
      kind: "picture",
      image: "/letters/s/spread-03.png",
      imageAlt: "Brothers restored from swans embracing their sister",
      artPrompt: `${STYLE}. Five restored young men and one brother with a single white swan wing embracing their sister in a courtyard, relief and love, soft morning light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "s-07",
      kind: "text",
      body: "That is the story of the Swan — S for Swan — white wings held by a sister’s quiet hands.",
    },
  ],
  outline: {
    cueWord: "Swan",
    formNote:
      "Capital S: a soft double curve, flowing like a swan’s neck — one bend, then another, balanced and graceful.",
  },
};
