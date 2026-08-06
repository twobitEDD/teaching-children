import { ALPHABET, type LetterStory } from "./types";
import { letterA } from "./letters/a";
import { letterAnt } from "./letters/ant";
import { letterB } from "./letters/b";
import { letterBee } from "./letters/bee";
import { letterC } from "./letters/c";
import { letterCrow } from "./letters/crow";
import { letterD } from "./letters/d";
import { letterE } from "./letters/e";
import { letterF } from "./letters/f";
import { letterG } from "./letters/g";
import { letterH } from "./letters/h";
import { letterI } from "./letters/i";
import { letterJ } from "./letters/j";
import { letterK } from "./letters/k";
import { letterL } from "./letters/l";
import { letterM } from "./letters/m";
import { letterN } from "./letters/n";
import { letterO } from "./letters/o";
import { letterP } from "./letters/p";
import { letterQ } from "./letters/q";
import { letterR } from "./letters/r";
import { letterS } from "./letters/s";
import { letterT } from "./letters/t";
import { letterU } from "./letters/u";
import { letterV } from "./letters/v";
import { letterW } from "./letters/w";
import { letterX } from "./letters/x";
import { letterY } from "./letters/y";
import { letterZ } from "./letters/z";

/** Master catalog — every usable storybook, including letter alternates. */
const catalog: LetterStory[] = [
  letterA,
  letterAnt,
  letterB,
  letterBee,
  letterC,
  letterCrow,
  letterD,
  letterE,
  letterF,
  letterG,
  letterH,
  letterI,
  letterJ,
  letterK,
  letterL,
  letterM,
  letterN,
  letterO,
  letterP,
  letterQ,
  letterR,
  letterS,
  letterT,
  letterU,
  letterV,
  letterW,
  letterX,
  letterY,
  letterZ,
];

export function bookId(book: LetterStory): string {
  return book.id ?? book.letter.toLowerCase();
}

function placeholder(letter: string): LetterStory {
  return {
    id: letter.toLowerCase(),
    letter,
    status: "soon",
    primary: true,
    title: `Letter ${letter}`,
    imageWord: letter,
    culture: "—",
    region: "—",
    traditionalTitle: "—",
    sourceNotes: "Not yet researched. Follow docs/CONTENT-PIPELINE.md to add this letter.",
    adaptations: "—",
    pnwBridge: "—",
    tellAloud: "Story coming soon.",
    spreads: [],
    outline: {
      cueWord: letter,
      formNote: "Form notes coming soon.",
    },
  };
}

/** All ready books in catalog order (includes alternates like Bee, Crow, Ant). */
export function getReadyBooks(): LetterStory[] {
  return catalog.filter((b) => b.status === "ready");
}

/** Look up a book by catalog id (`bear`, `bee`, `crow`, `awe`…) or legacy letter (`b`). */
export function getBook(idOrLetter: string): LetterStory | undefined {
  const key = idOrLetter.toLowerCase();
  const byId = catalog.find((b) => bookId(b) === key);
  if (byId) return byId;

  const upper = key.toUpperCase();
  if (ALPHABET.includes(upper)) {
    return getLetter(upper);
  }
  return undefined;
}

/** Primary (or first) book for a letter — used by letter workspace routes. */
export function getLetter(letter: string): LetterStory | undefined {
  const key = letter.toUpperCase();
  if (!ALPHABET.includes(key)) return undefined;

  const forLetter = catalog.filter((b) => b.letter === key);
  if (forLetter.length === 0) return placeholder(key);

  const primary = forLetter.find((b) => b.primary) ?? forLetter[0];
  return primary;
}

/** Every letter A–Z with the primary pick (placeholders for unfinished). */
export function getAllLetters(): LetterStory[] {
  return ALPHABET.map((L) => getLetter(L)!);
}

/**
 * All catalog books for one letter (primary + alternates).
 * Alternates (Ant, Bee, Crow) stay available via /letters/ant etc. and the bookshelf.
 */
export function getBooksForLetter(letter: string): LetterStory[] {
  const key = letter.toUpperCase();
  return catalog.filter((b) => b.letter === key && b.status === "ready");
}

/** @deprecated Prefer getReadyBooks — kept for older imports */
export function getReadyLetters(): LetterStory[] {
  return getReadyBooks();
}
