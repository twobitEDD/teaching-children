import type { LetterStory } from "@/content/types";
import { FitWord } from "./FitText";

type Props = {
  letter: LetterStory;
};

export function OutlineSheet({ letter }: Props) {
  return (
    <div className="outline-wrap">
      <p className="outline-wrap__hint no-print">
        Print this sheet for chalkboard / crayon form drawing. Vector letter — crisp at any size.
      </p>
      <section className="print-page print-page--outline" aria-label="Letter outline sheet">
        <p className="outline-sheet__label">
          Letter {letter.letter} · {letter.outline.cueWord}
        </p>
        <div className="outline-sheet__glyph" aria-hidden="true">
          {letter.letter}
        </div>
        <FitWord word={letter.outline.cueWord} className="outline-sheet__cue" />
        <p className="outline-sheet__note no-print">{letter.outline.formNote}</p>
      </section>
    </div>
  );
}
