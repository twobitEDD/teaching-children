import type { LetterStory } from "../types";
import { ART_STYLE as STYLE } from "../style";

export const letterCrow: LetterStory = {
  id: "crow",
  letter: "C",
  primary: false,
  status: "ready",
  mode: "consonant",
  title: "The Crow and the Pitcher",
  imageWord: "Crow",
  culture: "Ancient Greek (Aesop)",
  region: "Mediterranean / Greece",
  traditionalTitle: "The Crow and the Pitcher (Aesop)",
  sourceNotes:
    "Drawn from Aesop’s fable “The Crow and the Pitcher,” classical Greek fable in English children’s editions. Public-domain motif: thirst, failed attempts, patience, stones raising water.",
  adaptations:
    "Full oral arc across short picture spreads for ages 4–7: search, discovery, failed reach, failed tip, pebbles, rising water, drink. American English.",
  pnwBridge:
    "Crows are clever neighbors in the Pacific Northwest — you hear them call from fir tops after the rain, thinking their bird thoughts.",
  tellAloud: `One hot day, a Crow flew over dry land. The sun pressed on his black feathers. Dust rose from the road below. His throat felt like a path without rain. He needed a drink — truly, deeply, he needed a drink.

He flew over empty fields. He flew past a quiet farmyard. He looked left and right for a puddle, a trough, a shining drop. Nothing. His wings grew tired.

At last, in a scrap of shade beside a wall, he saw a pitcher. A clay pitcher, standing alone. The Crow’s heart lifted. “Water!” he thought, and he hopped close on his careful feet.

He stretched his beak over the rim and pushed it down inside. Oh — he could see the water shining at the bottom, cool and clear… but it sat too low. His beak could not reach. Not by a little. Not by a lot. Too low.

The Crow pulled back. He walked around the pitcher. He pushed it with his chest, hoping to tip it so the water would spill where he could drink. He pushed again, harder. The pitcher was thick and heavy. It would not tip. It only wobbled, then stood firm.

Now the Crow felt a small cloud of worry. He was so thirsty. The water was right there — and still he could not have it. For a moment he nearly flew away in despair.

Then he stopped. He tilted his bright eye. He looked at the ground around the pitcher. There, scattered in the dust, lay pebbles — small stones, smooth and round.

An idea came to him, quiet as a wing-beat.

The Crow picked up one pebble in his beak. He flew to the rim. Drop — into the pitcher. The water shivered, but only a little. He fetched another pebble. Drop. Another. Drop.

It was slow work. Pebble after pebble. His throat still ached. But each stone settled on the bottom, and little by little the water had nowhere to go but up. Higher… and higher… until the shining surface rose toward the rim.

At last the Crow could reach. He dipped his beak and drank — cool water, enough and more. The dry day softened. His wings felt light again.

He had not given up. He had thought. He had worked, one small stone at a time.

And that is the story of the Crow — C for Crow — who found a way.`,
  spreads: [
    {
      id: "c-01",
      kind: "opening",
      initialCap: true,
      body: "One hot day, a Crow flew over dry land. Dust rose below. His throat ached. He searched fields and farmyard — no puddle, no trough.",
    },
    {
      id: "c-02",
      kind: "picture",
      image: "/letters/crow/spread-03.png",
      imageAlt: "A crow flying over dry sunlit fields",
      artPrompt: `${STYLE}. A crow flying over dry sunlit fields and a dusty road, thirsty and determined, warm earth colors and soft sky, no people.`,
    },
    {
      id: "c-03",
      kind: "text",
      body: "In a scrap of shade he found a clay pitcher. “Water!” He pushed his beak inside — the water shone at the bottom, cool and clear… but much too low to reach.",
    },
    {
      id: "c-04",
      kind: "picture",
      image: "/letters/crow/spread-01.png",
      imageAlt: "A crow looking into a pitcher where water sits too low",
      artPrompt: `${STYLE}. A thoughtful crow beside a simple clay pitcher, peering at water too low to drink, warm dry-earth colors with soft shade, no people.`,
    },
    {
      id: "c-05",
      kind: "text",
      body: "He pushed the pitcher with his chest to tip it. It was thick and heavy. It only wobbled, then stood firm. For a moment he nearly gave up.",
    },
    {
      id: "c-06",
      kind: "picture",
      image: "/letters/crow/spread-04.png",
      imageAlt: "A crow trying to tip a heavy clay pitcher",
      artPrompt: `${STYLE}. A crow leaning against a heavy clay pitcher trying to tip it, pitcher barely wobbling, dusty ground, gentle storybook struggle, no people.`,
    },
    {
      id: "c-07",
      kind: "text",
      body: "Then he saw pebbles in the dust. An idea came, quiet as a wing-beat. Drop. Drop. Drop. One stone at a time, the water began to rise.",
    },
    {
      id: "c-08",
      kind: "picture",
      image: "/letters/crow/spread-02.png",
      imageAlt: "A crow dropping pebbles into a pitcher as water rises",
      artPrompt: `${STYLE}. A clever crow dropping a smooth pebble into a clay pitcher, water rising near the brim, hopeful light, gentle storybook moment, no people.`,
    },
    {
      id: "c-09",
      kind: "text",
      body: "Higher… higher… until at last he could drink. Cool water. Enough and more. C for Crow — who did not give up, and found a way.",
    },
    {
      id: "c-10",
      kind: "picture",
      image: "/letters/crow/spread-05.png",
      imageAlt: "A crow drinking happily from a pitcher of raised water",
      artPrompt: `${STYLE}. A crow drinking calmly from a clay pitcher filled near the brim, relieved and content, soft shade and warm light, no people.`,
    },
  ],
  outline: {
    cueWord: "Crow",
    formNote:
      "Capital C: one open curve, like a crow’s beak in profile — start near the top, sweep around, leave the right side open to the air.",
  },
};
