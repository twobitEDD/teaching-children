"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { bookId } from "@/content";
import type { LetterStory } from "@/content/types";
import { waitForImages } from "@/lib/waitForImages";
import { StoryPanel } from "./StoryPanel";
import { PrintPreview, type PrintLayout } from "./PrintPreview";
import { OutlineSheet } from "./OutlineSheet";

type Tab = "story" | "print" | "outlines";

type Props = {
  letter: LetterStory;
};

export function LetterWorkspace({ letter }: Props) {
  const [tab, setTab] = useState<Tab>("story");
  const [printLayout, setPrintLayout] = useState<PrintLayout>("facing");
  const [printing, setPrinting] = useState(false);
  const id = bookId(letter);

  useEffect(() => {
    document.body.dataset.printLayout = printLayout;

    let style = document.getElementById("print-layout-page-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "print-layout-page-style";
      document.head.appendChild(style);
    }
    style.textContent =
      printLayout === "facing"
        ? "@media print { @page { size: letter landscape; margin: 0.4in; } }"
        : "@media print { @page { size: letter portrait; margin: 0.5in; } }";

    return () => {
      delete document.body.dataset.printLayout;
    };
  }, [printLayout]);

  useEffect(() => {
    // Ctrl/Cmd+P bypasses the button — still force print-art fetches.
    const onBeforePrint = () => {
      void waitForImages(document.querySelector(".print-preview"));
    };
    window.addEventListener("beforeprint", onBeforePrint);
    return () => window.removeEventListener("beforeprint", onBeforePrint);
  }, []);

  async function handlePrint() {
    if (printing) return;
    setPrinting(true);
    try {
      await waitForImages(document.querySelector(".print-preview"));
      window.print();
    } finally {
      setPrinting(false);
    }
  }

  return (
    <div className={`workspace${tab === "print" && printLayout === "facing" ? " workspace--wide" : ""}`}>
      <header className="workspace__header no-print">
        <div className="workspace__nav">
          <Link href="/" className="workspace__back">
            ← All letters
          </Link>
          <p className="workspace__eyebrow">Teacher studio · print only for children</p>
        </div>
        <div className="workspace__title-row">
          <h1 className="workspace__title">
            <span className="workspace__letter">{letter.letter}</span>
            {letter.title}
          </h1>
          <p className="workspace__subtitle">
            {letter.imageWord} · {letter.culture}
          </p>
        </div>
        <div className="workspace__tabs" role="tablist" aria-label="Letter sections">
          {(
            [
              ["story", "Story"],
              ["print", "Print preview"],
              ["outlines", "Outlines"],
            ] as const
          ).map(([tabId, label]) => (
            <button
              key={tabId}
              type="button"
              role="tab"
              aria-selected={tab === tabId}
              className={`workspace__tab${tab === tabId ? " is-active" : ""}`}
              onClick={() => setTab(tabId)}
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            className="workspace__print-btn"
            onClick={() => void handlePrint()}
            disabled={printing}
          >
            {printing ? "Preparing pictures…" : "Print / Save PDF"}
          </button>
          <Link href={`/bookshelf/${id}`} className="workspace__book-link">
            Book viewer
          </Link>
        </div>
      </header>

      <div className="workspace__body">
        {tab === "story" && (
          <div className="no-print">
            <StoryPanel letter={letter} />
          </div>
        )}
        <div className={tab === "print" ? undefined : "print-only"}>
          <PrintPreview
            letter={letter}
            layout={printLayout}
            onLayoutChange={setPrintLayout}
          />
        </div>
        <div className={tab === "outlines" ? undefined : "print-only"}>
          <OutlineSheet letter={letter} />
        </div>
      </div>
    </div>
  );
}
