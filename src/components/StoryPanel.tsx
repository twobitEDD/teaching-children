import type { LetterStory } from "@/content/types";

type Props = {
  letter: LetterStory;
};

export function StoryPanel({ letter }: Props) {
  const isVowel = letter.mode === "vowel";

  return (
    <article className="story-panel">
      {isVowel && (
        <section className="story-panel__block story-panel__block--aside">
          <h2>Emotional gesture</h2>
          <p className="story-panel__feeling">{letter.feeling}</p>
          {letter.gesture && <p>{letter.gesture}</p>}
        </section>
      )}

      <section className="story-panel__block">
        <h2>{isVowel ? "Teacher tell / gesture" : "Tell aloud"}</h2>
        <p className="story-panel__hint">
          {isVowel
            ? "Vowel = singing sound + feeling. Do not show this screen to students. Print mood pages only."
            : "About 5–7 minutes with pauses at each picture. Speak; do not show this screen to students."}
        </p>
        <div className="story-panel__script">
          {letter.tellAloud.split("\n\n").map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
      </section>

      <section className="story-panel__block story-panel__block--aside">
        <h2>PNW bridge</h2>
        <p>{letter.pnwBridge}</p>
      </section>

      <section className="story-panel__block story-panel__block--aside">
        <h2>Source notes (teacher)</h2>
        <dl className="story-panel__meta">
          <div>
            <dt>{isVowel ? "Frame / title" : "Traditional title"}</dt>
            <dd>{letter.traditionalTitle}</dd>
          </div>
          <div>
            <dt>Culture / region</dt>
            <dd>
              {letter.culture} · {letter.region}
            </dd>
          </div>
          <div>
            <dt>Provenance</dt>
            <dd>{letter.sourceNotes}</dd>
          </div>
          <div>
            <dt>Adaptations</dt>
            <dd>{letter.adaptations}</dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
