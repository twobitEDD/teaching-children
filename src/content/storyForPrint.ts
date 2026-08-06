import type { LetterStory, StorySpread } from "./types";

/** Strip teacher-only framing so print pages carry the oral story children hear. */
export function storyParagraphsForPrint(tellAloud: string): string[] {
  return tellAloud
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => {
      if (!p) return false;
      if (/^TEACHER\b/i.test(p)) return false;
      if (/^Vowels come through feeling/i.test(p)) return false;
      if (/^If you use Michael Seifert/i.test(p)) return false;
      if (/^Bring out this vowel/i.test(p)) return false;
      if (/^Print pages hold mood/i.test(p)) return false;
      if (/^Picture-story\s*\(/i.test(p)) return false;
      if (/^Letter [AEIOU]\s*[—–-]/i.test(p) && p.length < 120) return false;
      if (/^Hold the [“"]/i.test(p)) return false;
      if (/^Gesture:/i.test(p)) return false;
      return true;
    });
}

function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Split paragraphs into `bucketCount` chunks with roughly even word counts. */
export function chunkParagraphs(
  paragraphs: string[],
  bucketCount: number,
): string[] {
  if (bucketCount <= 0) return [];
  if (paragraphs.length === 0) {
    return Array.from({ length: bucketCount }, () => "");
  }
  if (bucketCount === 1) return [paragraphs.join("\n\n")];

  const total = paragraphs.reduce((sum, p) => sum + wordCount(p), 0);
  const target = Math.max(1, total / bucketCount);
  const chunks: string[] = [];
  let current: string[] = [];
  let currentWords = 0;

  for (const paragraph of paragraphs) {
    const nextWords = wordCount(paragraph);
    const wouldOverflow =
      current.length > 0 &&
      chunks.length < bucketCount - 1 &&
      currentWords + nextWords > target * 1.15 &&
      currentWords >= target * 0.55;

    if (wouldOverflow) {
      chunks.push(current.join("\n\n"));
      current = [];
      currentWords = 0;
    }

    current.push(paragraph);
    currentWords += nextWords;
  }

  if (current.length) chunks.push(current.join("\n\n"));
  while (chunks.length < bucketCount) chunks.push("");
  return chunks.slice(0, bucketCount);
}

/**
 * Clone spreads for print/book view, replacing short blurbs on text pages
 * with sequential chunks of the full tell-aloud.
 */
export function spreadsWithFullStory(letter: LetterStory): StorySpread[] {
  const paragraphs = storyParagraphsForPrint(letter.tellAloud);
  if (paragraphs.length === 0) return letter.spreads;

  const textIndexes = letter.spreads
    .map((spread, index) =>
      spread.kind === "opening" || spread.kind === "text" ? index : -1,
    )
    .filter((index) => index >= 0);

  if (textIndexes.length === 0) return letter.spreads;

  const chunks = chunkParagraphs(paragraphs, textIndexes.length);

  return letter.spreads.map((spread, index) => {
    const slot = textIndexes.indexOf(index);
    if (slot < 0) return spread;
    const body = chunks[slot]?.trim();
    if (!body) return spread;
    return {
      ...spread,
      body,
      initialCap: spread.kind === "opening" ? true : spread.initialCap,
    };
  });
}
