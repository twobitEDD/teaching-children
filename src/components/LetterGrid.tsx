"use client";

import Link from "next/link";
import { bookId, getBooksForLetter } from "@/content";
import type { LetterStory } from "@/content/types";

type Props = {
  letters: LetterStory[];
};

export function LetterGrid({ letters }: Props) {
  return (
    <ul className="letter-grid">
      {letters.map((item) => {
        const ready = item.status === "ready";
        const alts = ready
          ? getBooksForLetter(item.letter).filter((b) => !b.primary)
          : [];

        return (
          <li key={item.letter} className="letter-grid__cell">
            {ready ? (
              <div className="letter-tile-wrap">
                <Link
                  href={`/letters/${item.letter.toLowerCase()}`}
                  className="letter-tile letter-tile--ready"
                >
                  <span className="letter-tile__glyph">{item.letter}</span>
                  <span className="letter-tile__meta">
                    <span className="letter-tile__word">{item.imageWord}</span>
                    <span className="letter-tile__status">
                      {item.mode === "vowel" ? "Vowel" : "Ready"}
                    </span>
                  </span>
                </Link>

                {alts.length > 0 && (
                  <div className="letter-tile__alts" role="group" aria-label={`Other ${item.letter} stories`}>
                    <p className="letter-tile__alts-label">Also</p>
                    {alts.map((alt) => (
                      <Link
                        key={bookId(alt)}
                        href={`/letters/${bookId(alt)}`}
                        className="letter-tile__alt"
                      >
                        {alt.imageWord}
                        <span className="letter-tile__alt-title">{alt.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="letter-tile letter-tile--soon" aria-disabled="true">
                <span className="letter-tile__glyph">{item.letter}</span>
                <span className="letter-tile__meta">
                  <span className="letter-tile__word">Soon</span>
                  <span className="letter-tile__status">Placeholder</span>
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
