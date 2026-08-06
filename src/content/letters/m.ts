import type { LetterStory } from "../types";
import { ART_STYLE as STYLE, ART_NO_LETTER } from "../style";

export const letterM: LetterStory = {
  id: "mountain",
  letter: "M",
  primary: true,
  status: "ready",
  mode: "consonant",
  title: "Yu Gong Moves Mountains",
  imageWord: "Mountain",
  culture: "Chinese (Liezi / classical fable)",
  region: "China / East Asia",
  traditionalTitle:
    "The Foolish Old Man Removes the Mountains (愚公移山 Yú Gōng Yí Shān), Liezi",
  sourceNotes:
    "Classical Chinese fable from the Liezi (Daoist text, Warring States tradition; also retold in Liu Xiang’s Garden of Stories): Yu Gong (“Foolish Old Man”), nearly ninety, resolves to dig away two mountains blocking his family’s road south; the skeptic Zhi Sou (“Wise Old Man”) mocks him; Yu Gong answers that descendants will continue forever while the mountains cannot grow; Heaven, moved by perseverance, sends immortals to carry the mountains away. Public-domain classical tradition.",
  adaptations:
    "Expanded oral telling (~5–7 min) for ages 4–7. Keeps ridicule, hard labor, generational hope, and divine help without flattening the “foolishness.” Hardship of endless digging held in image; no gore. Image-word Mountain (M). American English.",
  pnwBridge:
    "Cascades and Olympics stand vast against PNW skies — yet trails are made one careful step at a time, the way Yu Gong’s baskets moved stone by stone.",
  tellAloud: `Long ago in the north of China, where the land rose in great shoulders of stone, there lived an old man people called Yu Gong — the Foolish Old Man. He was nearly ninety. His beard was white as frost. His hands were knotted from work. Before his house stood two Mountains so tall and wide that the road south was a weary climb around them. When the family went to market, they walked far. When they visited friends beyond the ridges, they came home late and tired. The Mountains sat like sleeping giants and did not care.

One morning Yu Gong gathered his sons and grandsons in the courtyard. The air smelled of dust and cooking smoke. “These Mountains block our way,” he said. “Every journey costs us sweat and daylight. I am old, but I am not finished. We will dig. We will carry the earth and stone away, basket by basket, until the road lies open.”

His sons looked at one another. The Mountains were enormous — green in summer, snow-capped in winter, rooted deeper than any dream of a shovel. Still they loved the old man. They took up hoes and baskets. They began.

Day after day they dug. Stone bit their palms. Sweat ran into their eyes. Baskets grew heavy. They carried loads to a far dumping place by the sea of Bohai in the old tellings, and the round trip took so long that seasons seemed to lean on their shoulders. Neighbors watched from doorways. Some shook their heads. Children pointed and whispered, “Look at the foolish family digging at the sky.”

Then came Zhi Sou — the so-called Wise Old Man — leaning on a stick, smiling a thin smile. “Yu Gong,” he said, loud enough for the village to hear, “you are foolish. You are nearly ninety. You cannot even pull up a small hill, let alone these two Mountains. Before you finish a corner, your strength will be gone. Stop this nonsense. Sit in the sun. Leave the Mountains alone.”

The young men flushed with shame and anger. The women paused with water jars. Dust hung in the air between mockery and work. Yu Gong rested his hoe and looked at Zhi Sou without anger — only with a clear, deep patience.

“You are right that I am old,” he said. “I will die. When I die, my sons will dig. When they die, their sons will dig, and their sons after them. Our line has no end. But these Mountains cannot grow taller. Each basket we carry makes them a little less. Why should we not level them in time?”

Zhi Sou had no answer that felt as solid as that. He muttered and went away. The digging continued — quiet, stubborn, day after day.

Spring mud clung to boots. Summer heat pressed on necks. Autumn wind cut through jackets. Winter frost made the baskets stiff. Still Yu Gong rose early. Still the family went to the Mountain face. They sang sometimes to keep courage. They rested sometimes with bread and water in the thin shade of a scrub pine. They looked at the small dent they had made and then at the huge remaining bulk — and they chose again to dig. A grandchild asked once, “Grandfather, will we see the end?” Yu Gong smiled. “You may see a clearer path than I. That is enough.”

High above, in the halls of Heaven, the story of their work drifted upward like smoke. The Heavenly Emperor listened. He saw an old man who would not quit, and children who learned perseverance from his hands. Moved by such stubborn hope, he sent two powerful spirits down to earth.

They lifted the Mountains as easily as a gardener lifts pots. One Mountain went east. One went west. Where the giants had stood, a clear road opened — south wind, south light, a path for market and friendship and ordinary joy.

Yu Gong stood in the new emptiness and felt the wind on his face. He was still called Foolish by some. But the road was open. The baskets could rest. And every child who heard the tale learned that a Mountain is moved not by one mighty shove, but by faithful work that outlasts a single life.

That is the story of the Mountain — M for Mountain — and the old man who would not stop digging.`,
  spreads: [
    {
      id: "m-01",
      kind: "opening",
      initialCap: true,
      body: "Nearly ninety, Yu Gong looked at two Mountains blocking the road south. “We will dig,” he told his sons and grandsons. “Basket by basket, until the way lies open.”",
    },
    {
      id: "m-02",
      kind: "picture",
      image: "/letters/m/spread-01.png",
      imageAlt: "Two vast mountains rising before a small courtyard house",
      artPrompt: `${STYLE}. Two vast green mountains rising before a small traditional Chinese courtyard house, soft morning light, sense of scale and quiet determination. ${ART_NO_LETTER}`,
    },
    {
      id: "m-03",
      kind: "text",
      body: "Zhi Sou mocked him: “You are foolish. You are too old.” Yu Gong answered: “I will die, but my children will dig on. The Mountains cannot grow. Why should we not level them in time?”",
    },
    {
      id: "m-04",
      kind: "picture",
      image: "/letters/m/spread-02.png",
      imageAlt: "An old man and family carrying baskets of stone from a mountain",
      artPrompt: `${STYLE}. An elderly Chinese man and family carrying woven baskets of stone and earth from a mountain slope, hard work and hope, soft dust and sky. ${ART_NO_LETTER}`,
    },
    {
      id: "m-05",
      kind: "text",
      body: "Heaven, moved by their perseverance, sent spirits who carried the Mountains away. A clear road opened. That is the story of the Mountain — faithful work that outlasts a single life.",
    },
    {
      id: "m-06",
      kind: "picture",
      image: "/letters/m/spread-03.png",
      imageAlt: "An open valley road where mountains once stood",
      artPrompt: `${STYLE}. An open sunlit valley road with distant moved mountain silhouettes on the horizon, hopeful clear path, soft golden light. ${ART_NO_LETTER}`,
    },
    {
      id: "m-07",
      kind: "text",
      body: "That is the story of the Mountain — M for Mountain — and the old man who would not stop digging.",
    },
  ],
  outline: {
    cueWord: "Mountain",
    formNote:
      "Capital M: two mountain peaks side by side — up, down to the valley, up again, then down to the base.",
  },
};
