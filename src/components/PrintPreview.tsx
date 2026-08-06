"use client";

import Image from "next/image";
import type { LetterStory, StorySpread } from "@/content/types";
import { pairFacingSpreads } from "@/content/pairSpreads";
import { spreadsWithFullStory } from "@/content/storyForPrint";
import { FitProse, FitWord } from "./FitText";

export type PrintLayout = "facing" | "pages";

type Props = {
  letter: LetterStory;
  layout: PrintLayout;
  onLayoutChange: (layout: PrintLayout) => void;
};

function TextPane({
  letter,
  spread,
  compact,
}: {
  letter: LetterStory;
  spread: StorySpread;
  compact?: boolean;
}) {
  const showInitial = spread.kind === "opening" && spread.initialCap;
  const text = spread.body ?? "";
  const paragraphs = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const firstPara = paragraphs[0] ?? "";
  const first = firstPara.charAt(0);
  const restFirst = firstPara.slice(1);
  const more = paragraphs.slice(1);

  return (
    <div className={`print-pane print-pane--text${compact ? " print-pane--compact" : ""}`}>
      <p className="print-page__running">
        {letter.letter} · {letter.imageWord}
      </p>
      <FitProse
        className="print-page__prose print-page__prose--full"
        fitKey={`${spread.id}:${text.length}`}
      >
        {paragraphs.length === 0 ? (
          <p />
        ) : showInitial ? (
          <>
            <p>
              <span className="drop-cap" aria-hidden="true">
                {first}
              </span>
              <span className="sr-only">{first}</span>
              {restFirst}
            </p>
            {more.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </>
        ) : (
          paragraphs.map((para) => <p key={para.slice(0, 48)}>{para}</p>)
        )}
      </FitProse>
    </div>
  );
}

function PicturePane({
  letter,
  spread,
  compact,
}: {
  letter: LetterStory;
  spread: StorySpread;
  compact?: boolean;
}) {
  return (
    <div className={`print-pane print-pane--picture${compact ? " print-pane--compact" : ""}`}>
      <div className="print-page__frame">
        {spread.image ? (
          <Image
            src={spread.image}
            alt={spread.imageAlt ?? ""}
            width={1200}
            height={900}
            className="print-page__image"
          />
        ) : (
          <div className="print-page__placeholder">Art pending</div>
        )}
        <span className="print-page__letter-overlay" aria-hidden="true">
          {letter.letter}
        </span>
        <FitWord word={letter.imageWord} className="print-page__word-overlay" />
      </div>
      <p className="print-page__caption no-print">{spread.imageAlt}</p>
    </div>
  );
}

export function PrintPreview({ letter, layout, onLayoutChange }: Props) {
  if (letter.spreads.length === 0) {
    return <p className="empty-note">No print spreads yet for this letter.</p>;
  }

  const printSpreads = spreadsWithFullStory(letter);
  const facing = pairFacingSpreads(printSpreads);

  return (
    <div
      className={`print-preview print-preview--${layout}`}
      data-print-layout={layout}
    >
      <div className="print-preview__toolbar no-print">
        <p className="print-preview__hint">
          {layout === "facing"
            ? "Facing book spreads with the full tell-aloud story on the left (type shrinks to fit), matching picture on the right. Print landscape for one open spread per sheet."
            : "Single pages with the full tell-aloud story split across text pages, then pictures. Type shrinks to fit each page."}
        </p>
        <div className="print-preview__modes" role="group" aria-label="Print layout">
          <button
            type="button"
            className={`print-preview__mode${layout === "facing" ? " is-active" : ""}`}
            onClick={() => onLayoutChange("facing")}
          >
            Facing spreads
          </button>
          <button
            type="button"
            className={`print-preview__mode${layout === "pages" ? " is-active" : ""}`}
            onClick={() => onLayoutChange("pages")}
          >
            Single pages
          </button>
        </div>
      </div>

      {layout === "facing" ? (
        <div className="facing-stack">
          {facing.map((unit, index) => {
            if (unit.type === "pair") {
              return (
                <section
                  key={`${unit.text.id}-${unit.picture.id}`}
                  className="book-spread"
                  aria-label={`Open book spread ${index + 1}`}
                >
                  <div className="book-spread__gutter" aria-hidden="true" />
                  <TextPane letter={letter} spread={unit.text} compact />
                  <PicturePane letter={letter} spread={unit.picture} compact />
                </section>
              );
            }

            return (
              <section
                key={unit.spread.id}
                className="print-page print-page--text book-spread--solo"
                aria-label={`Text page ${index + 1}`}
              >
                <TextPane letter={letter} spread={unit.spread} />
              </section>
            );
          })}
        </div>
      ) : (
        <div className="page-stack">
          {printSpreads.map((spread, index) => {
            if (spread.kind === "picture") {
              return (
                <section
                  key={spread.id}
                  className="print-page print-page--picture"
                  aria-label={`Picture page ${index + 1}`}
                >
                  <PicturePane letter={letter} spread={spread} />
                </section>
              );
            }

            return (
              <section
                key={spread.id}
                className="print-page print-page--text"
                aria-label={`Text page ${index + 1}`}
              >
                <TextPane letter={letter} spread={spread} />
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
