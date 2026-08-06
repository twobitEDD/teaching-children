"use client";

import Image from "next/image";
import Link from "next/link";
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import HTMLFlipBookImport from "react-pageflip";
import { bookId } from "@/content";
import type { LetterStory, StorySpread } from "@/content/types";
import { spreadsWithFullStory } from "@/content/storyForPrint";
import { assetPath } from "@/lib/assetPath";
import { FitProse, FitWord } from "./FitText";

type Props = {
  letter: LetterStory;
};

type FlipBookHandle = {
  pageFlip: () => {
    flipNext: (corner?: "top" | "bottom") => void;
    flipPrev: (corner?: "top" | "bottom") => void;
    getCurrentPageIndex: () => number;
    getPageCount: () => number;
  };
};

type FlipBookProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  width: number;
  height: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  drawShadow?: boolean;
  flippingTime?: number;
  usePortrait?: boolean;
  startZIndex?: number;
  autoSize?: boolean;
  maxShadowOpacity?: number;
  showCover?: boolean;
  mobileScrollSupport?: boolean;
  swipeDistance?: number;
  clickEventForward?: boolean;
  useMouseEvents?: boolean;
  showPageCorners?: boolean;
  disableFlipByClick?: boolean;
  startPage?: number;
  onFlip?: (e: { data: number }) => void;
  onInit?: (e: unknown) => void;
};

const HTMLFlipBook = HTMLFlipBookImport as unknown as ComponentType<
  FlipBookProps & { ref?: Ref<FlipBookHandle> }
>;

type PageProps = {
  children: ReactNode;
  className?: string;
  hard?: boolean;
};

const FlipPage = forwardRef<HTMLDivElement, PageProps>(
  function FlipPage({ children, className = "", hard = false }, ref) {
    return (
      <div
        className={`flip-page ${className}`.trim()}
        ref={ref}
        data-density={hard ? "hard" : "soft"}
      >
        {children}
      </div>
    );
  },
);

function TextContent({
  letter,
  spread,
}: {
  letter: LetterStory;
  spread: StorySpread;
}) {
  const showInitial = spread.kind === "opening" && spread.initialCap;
  const text = spread.body ?? "";
  const paragraphs = text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const firstPara = paragraphs[0] ?? "";
  const first = firstPara.charAt(0);
  const restFirst = firstPara.slice(1);
  const more = paragraphs.slice(1);

  return (
    <div className="viewer-page__inner viewer-page__inner--text">
      <p className="viewer-page__running">
        {letter.letter} ·{" "}
        <FitWord word={letter.imageWord} className="viewer-page__running-word" />
      </p>
      <FitProse
        className="viewer-page__prose"
        fitKey={spread.id + String(text.length)}
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

function PictureContent({
  letter,
  spread,
}: {
  letter: LetterStory;
  spread: StorySpread;
}) {
  return (
    <div className="viewer-page__inner viewer-page__inner--picture">
      <div className="viewer-page__frame">
        {spread.image ? (
          <Image
            src={assetPath(spread.image)}
            alt={spread.imageAlt ?? ""}
            width={1200}
            height={900}
            className="viewer-page__image"
          />
        ) : (
          <div className="viewer-page__placeholder">Art pending</div>
        )}
        <span className="viewer-page__letter-overlay" aria-hidden="true">
          {letter.letter}
        </span>
        <FitWord word={letter.imageWord} className="viewer-page__word-overlay" />
      </div>
    </div>
  );
}

function buildProgressLabel(
  pageIndex: number,
  totalPages: number,
  spreadCount: number,
) {
  if (pageIndex <= 0) return "Cover";
  if (totalPages > 0 && pageIndex >= totalPages - 1) return "End";
  const interior = Math.max(1, pageIndex);
  const spreadApprox = Math.ceil(interior / 2);
  return `Page ${pageIndex + 1} · beat ${Math.min(spreadApprox, spreadCount)}`;
}

export function BookViewer({ letter }: Props) {
  const bookRef = useRef<FlipBookHandle>(null);
  const [mounted, setMounted] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const id = bookId(letter);

  const coverArt = letter.spreads.find((s) => s.kind === "picture" && s.image);
  const storySpreads = useMemo(() => spreadsWithFullStory(letter), [letter]);
  const spreadCount = useMemo(
    () => storySpreads.filter((s) => s.kind === "picture").length,
    [storySpreads],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const onFlip = useCallback((e: { data: number }) => {
    setPageIndex(e.data);
  }, []);

  const onInit = useCallback(() => {
    const flip = bookRef.current?.pageFlip();
    if (!flip) return;
    setPageCount(flip.getPageCount());
    setPageIndex(flip.getCurrentPageIndex());
  }, []);

  const goNext = useCallback(() => {
    bookRef.current?.pageFlip()?.flipNext("top");
  }, []);

  const goPrev = useCallback(() => {
    bookRef.current?.pageFlip()?.flipPrev("top");
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const canPrev = pageIndex > 0;
  const canNext = pageCount === 0 || pageIndex < pageCount - 1;
  const progressLabel = buildProgressLabel(
    pageIndex,
    pageCount || 1,
    spreadCount,
  );

  return (
    <div className="book-viewer">
      <header className="book-viewer__bar">
        <Link href="/bookshelf" className="book-viewer__back">
          ← Bookshelf
        </Link>
        <div className="book-viewer__meta">
          <span className="book-viewer__badge">{letter.letter}</span>
          <span>
            {letter.title}
            <span className="book-viewer__progress"> · {progressLabel}</span>
          </span>
        </div>
        <Link href={`/letters/${id}`} className="book-viewer__studio">
          Open in studio
        </Link>
      </header>

      <div className="book-viewer__stage">
        <button
          type="button"
          className="book-viewer__nav book-viewer__nav--prev"
          onClick={goPrev}
          disabled={!canPrev}
          aria-label="Previous page"
        >
          ‹
        </button>

        <div className="flip-stage" aria-live="polite">
          {!mounted ? (
            <div className="flip-stage__loading">Opening book…</div>
          ) : (
            <HTMLFlipBook
              ref={bookRef}
              className="flip-book"
              style={{ margin: "0 auto" }}
              width={420}
              height={560}
              size="stretch"
              minWidth={280}
              maxWidth={480}
              minHeight={380}
              maxHeight={640}
              drawShadow
              flippingTime={900}
              usePortrait
              startZIndex={0}
              autoSize
              maxShadowOpacity={0.55}
              showCover
              mobileScrollSupport
              swipeDistance={40}
              clickEventForward
              useMouseEvents
              showPageCorners
              disableFlipByClick={false}
              startPage={0}
              onFlip={onFlip}
              onInit={onInit}
            >
              <FlipPage className="flip-page--cover" hard>
                <div className="viewer-page__inner viewer-cover viewer-cover--front">
                  <p className="viewer-cover__letter">{letter.letter}</p>
                  <h2 className="viewer-cover__title">{letter.title}</h2>
                  <FitWord word={letter.imageWord} className="viewer-cover__word" />
                  <p className="viewer-cover__meta">{letter.culture}</p>
                  {coverArt?.image && (
                    <div className="viewer-cover__thumb">
                      <Image
                        src={assetPath(coverArt.image)}
                        alt=""
                        width={640}
                        height={400}
                        className="viewer-cover__thumb-img"
                      />
                    </div>
                  )}
                </div>
              </FlipPage>

              {storySpreads.map((spread) =>
                spread.kind === "picture" ? (
                  <FlipPage key={spread.id} className="flip-page--picture">
                    <PictureContent letter={letter} spread={spread} />
                  </FlipPage>
                ) : (
                  <FlipPage key={spread.id} className="flip-page--text">
                    <TextContent letter={letter} spread={spread} />
                  </FlipPage>
                ),
              )}

              <FlipPage className="flip-page--cover flip-page--back" hard>
                <div className="viewer-page__inner viewer-cover viewer-cover--back">
                  <span className="viewer-page__ornament" aria-hidden="true">
                    {letter.letter}
                  </span>
                  <FitWord word={letter.imageWord} className="viewer-cover__word" />
                  <p className="viewer-cover__meta">The end</p>
                </div>
              </FlipPage>
            </HTMLFlipBook>
          )}
        </div>

        <button
          type="button"
          className="book-viewer__nav book-viewer__nav--next"
          onClick={goNext}
          disabled={!canNext}
          aria-label="Next page"
        >
          ›
        </button>
      </div>

      <p className="book-viewer__hint">
        Drag a page corner, swipe, click arrows, or use ← →. Teacher preview only.
        Long image-words shrink to fit the same picture frame.
      </p>
    </div>
  );
}
