import type { LetterStory } from "../types";
import { ART_STYLE as STYLE } from "../style";

export const letterI: LetterStory = {
  letter: "I",
  status: "ready",
  title: "Issun-bōshi, the Inch-Boy",
  imageWord: "Inch-boy",
  culture: "Japanese",
  region: "Japan",
  traditionalTitle: "Issun-bōshi (一寸法師), Japanese folktale",
  sourceNotes:
    "Classical Japanese folktale: a thumb-sized boy sails in a bowl to the capital, serves a lord, defeats an oni with a needle sword, and wins a wishing mallet that makes him grow. Public-domain folk tradition.",
  adaptations:
    "Shortened for ages 4–7: birth wish, bowl voyage, bravery with needle, mallet wish, happy growth. Softened oni threat. American English; kept Japanese name with image-word Inch-boy for the letter I.",
  pnwBridge:
    "Even a tiny fir seedling on a PNW hillside can grow into something tall — small beginnings matter.",
  tellAloud: `Long ago in Japan, a kind couple prayed for a child. At last a boy was born — no bigger than a thumb! They named him Issun-bōshi, the Inch-Boy, and loved him with their whole hearts.

When he was older, Issun-bōshi said, “I will go to the capital and make my way.” He took a needle for a sword, a bowl for a boat, and a chopstick for an oar. Off he sailed on the river, small as a song.

In the capital he served in a fine house and guarded a young lady with great courage. One day a fierce oni threatened them. Issun-bōshi drew his needle-sword and fought so bravely that the oni fled — and dropped a magical wishing mallet.

“What do you wish?” asked the lady. Issun-bōshi wished to grow. With a shake of the mallet he grew — taller, taller — until he stood as tall as any young man, still brave, still kind.

He returned home so his parents could see him full-grown, and joy filled their little house.

That is the story of the Inch-boy — I for Inch-boy — small as a thumb, brave as a giant.`,
  spreads: [
    {
      id: "i-01",
      kind: "opening",
      initialCap: true,
      body: "A kind couple prayed for a child. A boy was born no bigger than a thumb — Issun-bōshi, the Inch-Boy. They loved him with their whole hearts.",
    },
    {
      id: "i-02",
      kind: "picture",
      image: "/letters/i/spread-01.png",
      imageAlt: "A tiny boy standing on a wooden floor near a bowl",
      artPrompt: `${STYLE}. A tiny thumb-sized boy in simple Japanese folk clothing standing near a wooden rice bowl, warm indoor light, whimsical and kind, no scary elements.`,
    },
    {
      id: "i-03",
      kind: "text",
      body: "He sailed to the capital in his bowl-boat, needle for a sword, chopstick for an oar — small as a song on the river.",
    },
    {
      id: "i-04",
      kind: "picture",
      image: "/letters/i/spread-02.png",
      imageAlt: "A tiny boy sailing in a bowl down a river",
      artPrompt: `${STYLE}. A tiny boy sailing in a wooden bowl boat on a gentle river with a chopstick oar, soft misty banks, adventurous and calm.`,
    },
    {
      id: "i-05",
      kind: "text",
      body: "When danger came, he fought bravely with his needle-sword. The oni fled and dropped a wishing mallet.",
    },
    {
      id: "i-06",
      kind: "picture",
      image: "/letters/i/spread-03.png",
      imageAlt: "A tiny brave boy with a needle sword and a magical mallet",
      artPrompt: `${STYLE}. A tiny brave boy holding a needle like a sword beside a small magical wooden mallet, soft glow, triumphant and gentle, no monster shown.`,
    },
    {
      id: "i-07",
      kind: "text",
      body: "He wished to grow — and grew tall as any young man, still brave, still kind. I for Inch-boy — small as a thumb, brave as a giant.",
    },
    {
      id: "i-08",
      kind: "picture",
      image: "/letters/i/spread-04.png",
      imageAlt: "A grown kind young man returning home at sunset",
      artPrompt: `${STYLE}. A kind young man in simple clothes returning to a small countryside home at soft sunset, joyful reunion mood, gentle faces.`,
    },
  ],
  outline: {
    cueWord: "Inch-boy",
    formNote:
      "Capital I: one tall straight post — simple and strong — like a tiny hero standing bravely upright.",
  },
};

export const letterJ: LetterStory = {
  letter: "J",
  status: "ready",
  title: "Jack and the Beanstalk",
  imageWord: "Jack",
  culture: "English",
  region: "British Isles / England",
  traditionalTitle: "Jack and the Beanstalk (English fairy tale)",
  sourceNotes:
    "English fairy tale tradition (printed forms from 18th–19th c.): Jack trades a cow for beans, climbs a beanstalk to a giant’s realm, returns with gifts, cuts the stalk. Public-domain folk/fairy-tale tradition.",
  adaptations:
    "Softened for ages 4–7: wonder of the stalk, a clumsy giant, Jack brings home a hen that helps his mother; giant does not fall to death — stalk cut, giant stays above. American English.",
  pnwBridge:
    "Bean vines race up PNW garden poles in summer — ordinary green that can feel like a ladder to the sky.",
  tellAloud: `Jack and his mother were poor. One day Jack took their cow to market — and traded her for five strange beans. His mother was angry and threw the beans out the window.

Overnight, a beanstalk grew — up, up, up through the clouds! Jack climbed. Above the clouds he found a great house and a giant’s table set with wonders.

Jack was careful and quiet. He found a hen that laid golden eggs, and he carried her home to his mother. What joy! They would not go hungry.

The giant roared and thundered after him. Jack scrambled down the beanstalk. “Mother — an axe!” Chop, chop, chop! The beanstalk fell away. The giant stayed in his cloud-world, far above, and Jack stayed safe on the ground with his mother and the wondrous hen.

That is the story of Jack — J for Jack — who climbed toward wonder, and came home again.`,
  spreads: [
    {
      id: "j-01",
      kind: "opening",
      initialCap: true,
      body: "Poor Jack traded the cow for five strange beans. His mother threw them out the window — and overnight a beanstalk grew up through the clouds!",
    },
    {
      id: "j-02",
      kind: "picture",
      image: "/letters/j/spread-01.png",
      imageAlt: "A giant beanstalk rising into the clouds",
      artPrompt: `${STYLE}. A enormous green beanstalk twisting up from a cottage garden into soft clouds, wondrous and tall, no people.`,
    },
    {
      id: "j-03",
      kind: "text",
      body: "Jack climbed and climbed. Above the clouds he found a great house — and a hen that laid golden eggs.",
    },
    {
      id: "j-04",
      kind: "picture",
      image: "/letters/j/spread-02.png",
      imageAlt: "Jack climbing the beanstalk into misty clouds",
      artPrompt: `${STYLE}. A boy climbing a huge beanstalk into misty soft clouds, adventurous and gentle, looking upward, wholesome.`,
    },
    {
      id: "j-05",
      kind: "text",
      body: "He brought the hen home. The giant thundered after! Jack chopped the stalk — chop, chop — and stayed safe on the ground.",
    },
    {
      id: "j-06",
      kind: "picture",
      image: "/letters/j/spread-03.png",
      imageAlt: "A hen with a golden egg beside Jack and his mother",
      artPrompt: `${STYLE}. A wholesome hen with a soft golden egg near a boy and his mother in a simple cottage kitchen, warm relief and joy, gentle faces.`,
    },
    {
      id: "j-07",
      kind: "text",
      body: "They would not go hungry. J for Jack — who climbed toward wonder, and came home again.",
    },
    {
      id: "j-08",
      kind: "picture",
      image: "/letters/j/spread-04.png",
      imageAlt: "The beanstalk fallen and a peaceful cottage garden",
      artPrompt: `${STYLE}. A peaceful cottage garden with a fallen green beanstalk vine on the ground, calm morning light, safe and quiet, no people.`,
    },
  ],
  outline: {
    cueWord: "Jack",
    formNote:
      "Capital J: a hook that dips below the line, like a beanstalk curling or a boy’s path climbing then coming home.",
  },
};

export const letterK: LetterStory = {
  letter: "K",
  status: "ready",
  title: "King Midas and the Golden Touch",
  imageWord: "King",
  culture: "Ancient Greek",
  region: "Mediterranean / Greece (Phrygia in legend)",
  traditionalTitle: "King Midas and the Golden Touch (Greek myth)",
  sourceNotes:
    "Greek myth of King Midas, granted a golden touch by Dionysus; he turns food and his daughter (in many children’s tellings) to gold and begs release; washes the gift away in a river. Classical myth tradition.",
  adaptations:
    "Ages 4–7: wish, golden food problem, beloved child turned to gold (softened — statue-still then restored), river wash, grateful king. American English.",
  pnwBridge:
    "River water in the Cascades can feel like a blessing after a long dusty hike — clean, cold, and freeing.",
  tellAloud: `Long ago lived King Midas, who loved gold more than anything. A forest spirit granted him a wish. “Let all I touch become gold!” cried the King.

At first he laughed with delight — a chair turned gold, a cup turned gold! Then breakfast came. Bread turned to gold. Water turned to gold. How could a king eat gold?

His little daughter ran to hug him. The moment he touched her, she became a golden statue — still and shining and silent. King Midas wept. “Take back this gift!” he cried.

The spirit told him to wash in the river. Midas ran and plunged his hands into the water. The golden touch flowed away. He raced home — and his daughter breathed and smiled again, warm and living.

From then on, King Midas loved golden mornings and golden leaves… but he loved living people more.

That is the story of the King — K for King — who learned that not all gold is treasure.`,
  spreads: [
    {
      id: "k-01",
      kind: "opening",
      initialCap: true,
      body: "King Midas wished that all he touched would turn to gold. A chair — gold! A cup — gold! He laughed with delight.",
    },
    {
      id: "k-02",
      kind: "picture",
      image: "/letters/k/spread-01.png",
      imageAlt: "A king touching a cup that turns to gold",
      artPrompt: `${STYLE}. A king in a simple crown touching a cup that gleams gold, soft palace light, wondrous not greedy-faced, gentle.`,
    },
    {
      id: "k-03",
      kind: "text",
      body: "But bread turned to gold. Water turned to gold. Then his daughter’s hug turned her still and golden. The King wept.",
    },
    {
      id: "k-04",
      kind: "picture",
      image: "/letters/k/spread-02.png",
      imageAlt: "Golden bread and a golden cup on a table",
      artPrompt: `${STYLE}. A table with bread and a cup turned entirely to soft gold, quiet troubled mood, palace interior, no people.`,
    },
    {
      id: "k-05",
      kind: "text",
      body: "He washed the wish away in the river. He raced home — and his daughter smiled, warm and living again.",
    },
    {
      id: "k-06",
      kind: "picture",
      image: "/letters/k/spread-03.png",
      imageAlt: "A king washing his hands in a shining river",
      artPrompt: `${STYLE}. A king washing his hands in a clear sparkling river surrounded by soft green banks, relieved and hopeful, gentle face.`,
    },
    {
      id: "k-07",
      kind: "text",
      body: "He still loved golden light — but living people more. K for King — who learned that not all gold is treasure.",
    },
    {
      id: "k-08",
      kind: "picture",
      image: "/letters/k/spread-04.png",
      imageAlt: "King and daughter embracing in warm morning light",
      artPrompt: `${STYLE}. A king and his young daughter embracing in warm morning light, joyful relief, soft palace garden, gentle faces.`,
    },
  ],
  outline: {
    cueWord: "King",
    formNote:
      "Capital K: a tall spine with two diagonal arms kicking out — like a crown’s points, or a king standing firm.",
  },
};

export const letterL: LetterStory = {
  letter: "L",
  status: "ready",
  title: "The Lion and the Mouse",
  imageWord: "Lion",
  culture: "Ancient Greek (Aesop)",
  region: "Mediterranean / Greece",
  traditionalTitle: "The Lion and the Mouse (Aesop)",
  sourceNotes:
    "Aesop’s fable: a lion spares a mouse; later the mouse gnaws ropes to free the lion from a hunter’s net. Public-domain classical fable.",
  adaptations:
    "Full friendship arc for ages 4–7 across spreads. Soft hunters (net only, no gore). American English.",
  pnwBridge:
    "Even a tiny chickadee can raise an alarm that helps a whole PNW forest listen — small friends matter.",
  tellAloud: `A mighty Lion lay sleeping in the shade. A little Mouse ran across his paw by mistake. The Lion woke and caught her. “Please let me go!” squeaked the Mouse. “Someday I may help you!”

The Lion laughed — a Mouse help a Lion? But he was not cruel that day. He opened his paw and let her run free.

Days later, hunters set a net. The Lion was caught — roaring, tangled, unable to break the ropes. The little Mouse heard him. She ran and chewed, chewed, chewed, until the ropes fell away.

“You laughed,” said the Mouse kindly, “but even a small friend can be a great help.”

The Lion bowed his golden head. From then on they were friends — big and little under the same sun.

That is the story of the Lion — L for Lion — mighty, and wise enough to spare a Mouse.`,
  spreads: [
    {
      id: "l-01",
      kind: "opening",
      initialCap: true,
      body: "A mighty Lion slept. A little Mouse ran across his paw. He caught her — then let her go when she promised, someday, to help.",
    },
    {
      id: "l-02",
      kind: "picture",
      image: "/letters/l/spread-01.png",
      imageAlt: "A lion and a tiny mouse face to face in soft shade",
      artPrompt: `${STYLE}. A large gentle lion face to face with a tiny mouse in soft savanna shade, kind moment, anatomically correct animals, no people.`,
    },
    {
      id: "l-03",
      kind: "text",
      body: "Later the Lion was caught in a hunter’s net. He roared and could not break free. The Mouse heard — and came.",
    },
    {
      id: "l-04",
      kind: "picture",
      image: "/letters/l/spread-02.png",
      imageAlt: "A lion tangled in rope netting looking distressed",
      artPrompt: `${STYLE}. A lion gently tangled in soft rope netting looking worried, not bloody, warm light through trees, no hunters visible, no people.`,
    },
    {
      id: "l-05",
      kind: "text",
      body: "She chewed the ropes until they fell away. “Even a small friend can be a great help,” she said. The Lion bowed.",
    },
    {
      id: "l-06",
      kind: "picture",
      image: "/letters/l/spread-03.png",
      imageAlt: "A mouse chewing ropes to free the lion",
      artPrompt: `${STYLE}. A tiny mouse chewing through ropes on a net while a grateful lion watches, hopeful rescue moment, soft light, no people.`,
    },
    {
      id: "l-07",
      kind: "text",
      body: "Big and little under the same sun — friends. L for Lion — mighty, and wise enough to spare a Mouse.",
    },
    {
      id: "l-08",
      kind: "picture",
      image: "/letters/l/spread-04.png",
      imageAlt: "Lion and mouse resting together in golden light",
      artPrompt: `${STYLE}. A lion resting peacefully with a tiny mouse nearby in golden afternoon light, friendship and calm, no people.`,
    },
  ],
  outline: {
    cueWord: "Lion",
    formNote:
      "Capital L: a tall post and a firm base — like a lion sitting proud, chest high, paws on the earth.",
  },
};
