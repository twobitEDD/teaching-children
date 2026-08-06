import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterP: LetterStory = {
  id: "prince",
  letter: "P",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "The Prince and the Flying Carpet",
  imageWord: "Prince",
  culture: "Middle Eastern / Arabian Nights literary tradition (Galland)",
  region: "Indies / Persianate fairy-tale Orient (storytelling tradition)",
  traditionalTitle:
    "Prince Ahmed and the Fairy Paribanou — flying-carpet episode (Galland’s Arabian Nights; Hanna Diyab)",
  sourceNotes:
    "Public-domain Arabian Nights tradition as published by Antoine Galland (early 18th c.), from the oral telling of Hanna Diyab: three princes seek wonders; the eldest obtains a flying carpet that carries travelers wherever they wish; a seeing-tube and a healing apple join it to save a dying princess. Classroom telling centers the Prince and the carpet’s swift mercy. Modern copyrighted wordings not reprinted.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Centers image-word Prince (no parrot in this tale). Softens court rivalry and later fairy-realm tests; keeps wonder of flight, brotherly cooperation, and healing. American English. Letter is a print overlay — not molded into the art.",
  pnwBridge:
    "On a clear PNW day, watching clouds slide over the Cascades, children can almost feel what a flying carpet might mean — a soft ride above forests and rivers, carrying help quickly to someone who needs it.",
  tellAloud: `Long ago, in a kingdom of the Indies, a sultan had three sons — princes of fine bearing — and a niece, a princess gentle and bright as morning. Each prince loved her. Each hoped to win her hand. The sultan, wanting fairness more than quarrel, called them to the court where fountains whispered and peacock feathers stirred in the heat.

“Travel for a year,” he said. “Bring back the rarest wonder you can find. Whoever returns with the gift most precious shall win her hand. Go with courage. Return with truth.”

The three princes bowed until their foreheads nearly touched the marble. Then they set out on different roads. Dust rose behind their horses. Caravans jingled. Markets sang with spice, silk, lemon, and smoke. Each carried hope like a lantern cupped against the wind.

The eldest prince rode farthest of all, through provinces of palm and tower, until he came to a city where stalls spilled color into the streets. There a merchant unrolled a carpet — not huge, not shouting with gold, but patterned with quiet stars and soft geometry. “This carpet,” said the merchant, “will carry you wherever you wish, as swift as thought. Sit, name your place, and the air will obey.”

The prince tested it. He stepped on, named a rose garden beyond the walls — and the carpet lifted, soft as breath, cool as high air. Roofs slid away beneath him. Birds startled and then accepted him as weather. Before he could finish smiling, he stood among roses. He bought the Flying Carpet with a heavy purse, rolled it with care, and rode to the meeting place to wait for his brothers, heart full of secret pride.

The second prince, traveling another road, found an ivory tube sold by a quiet seller in a shaded court. Look through it, and you could see anyone, anywhere — a face across deserts, a lamp behind stone, a tear on a distant cheek. The youngest prince found, in a mountain market, an apple of strange perfume, smooth as a moon-pebble: one bite, it was said, could heal the sickest soul and cool the fiercest fever.

When the year turned and they met again under a wayside tree, each was proud of his wonder. They compared — carpet, tube, apple — and began to argue which gift was greatest. Then a messenger arrived, dust-stained, voice breaking: the princess lay dying. Fever had taken her like a thief. The court wept. Lamps burned low.

The princes did not argue then. Rivalry fell from them like a dropped cloak. The second prince lifted the tube with shaking hands and saw her pale upon her pillows, breath thin as thread. “Quick!” cried the eldest. They stepped onto the Flying Carpet together, shoulders touching. “To the princess — now!”

The carpet rose. It raced the wind over roads, over rivers braided with moonlight, over the roofs of villages where dogs barked at a shadow in the sky. The world blurred into mercy’s hurry. Then the carpet set them gently in the palace court, as soft as a leaf landing.

They ran. The youngest prince set the healing apple to her lips. Fragrance filled the chamber. Color returned to her cheeks. Breath deepened. She opened her eyes and smiled — weak, astonished, alive. The sultan embraced his sons. For a long moment no one spoke of contests. Wonder stood in the room like a fourth brother: a carpet that flies, a tube that sees, an apple that mends — and princes who used them together.

In the fullest Galland telling, contests and further journeys follow — arrows lost in grass, a fairy realm underground, tests of love and loyalty that stretch the tale. In this classroom telling we keep what the children need most: three princes seeking wonder, a Flying Carpet that carries help faster than fear, and healing shared when pride steps aside.

That is the story of the Prince — P for Prince — who rode the Flying Carpet to bring mercy home.`,
  spreads: [
    {
      id: "p-01",
      kind: "opening",
      initialCap: true,
      body: "Three princes sought the rarest wonder to win a princess’s hand. In a far city the eldest found a carpet patterned with quiet stars — a carpet that could fly.",
    },
    {
      id: "p-02",
      kind: "picture",
      image: "/letters/p/spread-01.png",
      imageAlt: "A prince standing on a flying carpet above a city of towers",
      artPrompt: `${STYLE}. A young prince standing on an ornate flying carpet rising above a warm Middle Eastern fairy-tale city of towers and markets, soft golden light, wonder and calm, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "p-03",
      kind: "text",
      body: "His brothers brought a seeing-tube and a healing apple. When the princess fell ill, they stepped onto the Flying Carpet together. ‘To the princess!’ — and the carpet raced the wind.",
    },
    {
      id: "p-04",
      kind: "picture",
      image: "/letters/p/spread-02.png",
      imageAlt: "Three princes on a flying carpet racing over rivers and roofs",
      artPrompt: `${STYLE}. Three young princes kneeling together on a flying carpet soaring over rivers and rooftops toward a distant palace, urgent but hopeful, soft dusk light, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "p-05",
      kind: "text",
      body: "The healing apple restored her. Rivalry rested. Wonder remained: a Prince, a carpet of mercy, and help that arrived in time.",
    },
    {
      id: "p-06",
      kind: "picture",
      image: "/letters/p/spread-03.png",
      imageAlt: "A prince offering a healing apple beside a recovering princess",
      artPrompt: `${STYLE}. A gentle palace chamber, a young prince offering a glowing apple near a recovering princess on pillows, brothers and warm lamplight nearby, relief and tenderness, natural scene. ${ART_NO_LETTER}`,
    },
    {
      id: "p-07",
      kind: "text",
      body: "That is the story of the Prince — P for Prince — who rode the Flying Carpet to bring mercy home.",
    },
  ],
  outline: {
    cueWord: "Prince",
    formNote:
      "Capital P: a tall upright stem with a rounded loop at the top — like a prince’s proud stance with a cloak gathered at the shoulder.",
  },
};
