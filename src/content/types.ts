export type SpreadKind = "opening" | "text" | "picture";

export type StorySpread = {
  id: string;
  kind: SpreadKind;
  /** Body copy for opening/text pages */
  body?: string;
  /** Show large decorative initial on opening pages */
  initialCap?: boolean;
  /** Path under /public, e.g. /letters/a/spread-01.png */
  image?: string;
  /** Alt text for print accessibility / teacher preview */
  imageAlt?: string;
  /** Prompt used to generate art (for regeneration docs) */
  artPrompt?: string;
};

export type LetterOutline = {
  /** Story word cue printed under the letter form */
  cueWord: string;
  /** Short stroke / form note for the teacher */
  formNote: string;
};

export type LetterMode = "consonant" | "vowel";

export type LetterStory = {
  /**
   * Unique book id for catalog / routes (e.g. "bear", "bee", "crow").
   * Defaults to lowercase letter when omitted (legacy single-book letters).
   */
  id?: string;
  letter: string;
  status: "ready" | "soon";
  /**
   * Default teaching pick for this letter when multiple books share it.
   * If none marked, the first ready book for the letter is used.
   */
  primary?: boolean;
  /** Consonant picture-stories vs vowel singing-sound / mood work */
  mode?: LetterMode;
  title: string;
  /** Primary image-word that carries the letter (or mood-word for vowels) */
  imageWord: string;
  /** Feeling / soul quality for vowel letters */
  feeling?: string;
  /** Gesture hint for vowel introduction */
  gesture?: string;
  culture: string;
  region: string;
  traditionalTitle: string;
  sourceNotes: string;
  adaptations: string;
  pnwBridge: string;
  /** Full oral script, or teacher tell-instructions for copyrighted sources */
  tellAloud: string;
  spreads: StorySpread[];
  outline: LetterOutline;
};

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const VOWELS = ["A", "E", "I", "O", "U"] as const;
