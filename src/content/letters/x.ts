import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterX: LetterStory = {
  id: "ox",
  letter: "X",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Ox and the Great Race",
  imageWord: "Ox",
  culture: "Chinese folk tradition",
  region: "China / East Asia",
  traditionalTitle:
    "The Great Race (Chinese zodiac origin legend) — Ox as second animal",
  sourceNotes:
    "Chinese folk legend of the Great Race used to explain the twelve-animal zodiac order: the Jade Emperor (or Heaven) calls animals to race across a river; the kind, strong Ox swims steadily and would arrive first, but the clever Rat rides on the Ox’s back and leaps ashore ahead, so Rat is first and Ox second. Widely attested in Chinese New Year / zodiac children’s retellings and cultural education materials (traditional oral and literary folk motif; not a single authored Grimm-style text). Classroom focus: image-word Ox; letter X taught as the ending sound in oX (/ks/).",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers the Ox’s strength, patience, and kindness; keeps the Rat’s leap as mild trickery without cruelty. Softens or omits cat-drowning variants. Closes by teaching X as the ending sound of Ox. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "In the PNW, draft animals are rarer now, but children who watch a heavy horse or a patient farm steer know the Ox’s gift: steady power that does not need to shout.",
  tellAloud: `Long ago in China, when the years needed names and the sky needed a calendar of living creatures, the Jade Emperor called a great race. Drums sounded in the mist. Banners of cloud hung above the river. “Cross the wide water,” said the Emperor. “The first twelve animals to reach the far shore will each have a year named after them — forever. Swim with courage. Arrive with honor.”

Animals gathered at the near bank where reeds whispered and mud sucked at hooves and paws. Tiger flexed his shoulders until the fur stood. Dragon coiled in the clouds, tasting thunder. Horse stamped and tossed his mane. Pig blinked sleepily and practiced one brave grunt. Snake slid in gleaming coils. Dog barked once for luck. And among them stood the Ox — broad of shoulder, calm of eye, strong as a hillside after rain. The Ox did not boast. He only lowered his head and looked at the current, measuring eddies and deep places with quiet courage. He had pulled plows. He had waited through winters. Waiting and working were his old friends.

The Rat was small and clever and worried. The river was deep, cold, and wide as a rumor. “Friend Ox,” said the Rat, whiskers trembling, “you are the strongest swimmer among us. May I ride upon your back? Together we will cross safely. I will be light. You will be sure.”

The Ox, kind-hearted, considered the little creature and the long water. He nodded. “Climb up. Hold on. I will carry you. We will reach the far shore.”

At the signal, animals plunged in. Splash and spray! Foam flew like white petals. Tiger fought the current with fierce strokes, growling at every wave. Horse surged, nostrils flaring. The Ox entered steadily — one powerful shoulder, then the other — and the river parted around his bulk as if it respected honest work. Cold water climbed his ribs. On his back the Rat clung like a seed on a leaf, watching the far shore grow nearer through sheets of spray. “Left a little,” the Rat squeaked once. The Ox adjusted, patient as stone.

Stroke by stroke the Ox pulled ahead. His breath was deep and even. His legs never quit. Behind him, other animals fell into the cold swirl or climbed onto floating debris. Dragon took a high road through mist and lost time helping villagers (as some tellings say). The Ox did not look back. He felt the muddy bottom near the finish — toes of earth after so much swimming — and began to climb the bank, first among them all, the prize almost his. Water streamed. Muscles trembled with good tiredness. The Emperor’s pavilion shone ahead.

Then the Rat leaped!

From the Ox’s wet head the Rat sprang onto the dry bank and scampered, tiny feet flying, to the Emperor’s feet. “I am first!” cried the Rat, bright-eyed and breathless.

The Ox stepped ashore a moment later, surprised, river still pouring from his sides in silver ropes. He had carried another — and that other had taken the lead. For a heartbeat anger flickered like a spark on wet wood. Then he stood still, breathing, remembering his own kindness.

The Jade Emperor smiled at both. “Rat shall have the first year,” he said, “for clever arrival. Ox shall have the second — for strength, patience, and a generous heart still deserve honor. The calendar needs both wit and steady power.”

The Ox stood tall. He did not stomp in rage. He shook the river from his hide in a bright shower and accepted second place with dignity, for he knew what he was: reliable as sunrise, steady as a plow through spring earth, strong enough to carry another and still finish well. In years to come, people would say those born under the Ox are hardworking and true — and they would remember how an Ox nearly won the world by simply not giving up.

Now, children — listen for a secret of our letter work. The word Ox ends with a special sound: /ks/. That ending sound is our letter X. We do not begin many English words with X, but we meet X at the end of Ox — strong and clear. When you say Ox, feel that final snap: oX. Picture our patient swimmer as you write the crossing strokes.

That is the story of the Ox — and X for the ending of Ox — who swam the river with kindness and strength.`,
  spreads: [
    {
      id: "x-01",
      kind: "opening",
      initialCap: true,
      body: "The Jade Emperor called a race across a wide river. Twelve animals would name the years. The strong, kind Ox agreed to carry the little Rat upon his back.",
    },
    {
      id: "x-02",
      kind: "picture",
      image: "/letters/x/spread-01.png",
      imageAlt: "A strong ox standing at a riverbank ready for a race",
      artPrompt: `${STYLE}. A strong calm ox standing at a wide riverbank among soft morning mist, other animals faintly suggested in distance, patient strength, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "x-03",
      kind: "text",
      body: "The Ox swam steadily ahead of all. Near the finish the Rat leaped from his head to the shore and claimed first place. The Ox arrived second — surprised, still honorable.",
    },
    {
      id: "x-04",
      kind: "picture",
      image: "/letters/x/spread-02.png",
      imageAlt: "Ox swimming a river with a small rat on his back",
      artPrompt: `${STYLE}. A powerful ox swimming a broad river with a tiny rat riding on his back, soft spray and mist, determined and kind, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "x-05",
      kind: "text",
      body: "The Emperor honored both. Ox received the second year for strength and a generous heart. Listen: Ox ends with the /ks/ sound — that ending is our letter X.",
    },
    {
      id: "x-06",
      kind: "picture",
      image: "/letters/x/spread-03.png",
      imageAlt: "Ox standing proudly on the far shore after the race",
      artPrompt: `${STYLE}. A dignified wet ox standing on the far river shore in soft gold light, calm acceptance and strength, natural landscape, no text. ${ART_NO_LETTER}`,
    },
    {
      id: "x-07",
      kind: "text",
      body: "That is the story of the Ox — and X for the ending of Ox — who swam with kindness and strength.",
    },
  ],
  outline: {
    cueWord: "Ox",
    formNote:
      "Capital X: two strokes crossing at the center — teach after saying Ox, feeling the ending /ks/.",
  },
};
