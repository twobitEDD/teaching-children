"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import SimpleShelf, { type BookInput } from "simpleshelf";
import "simpleshelf/dist/simpleshelf.css";
import { bookId } from "@/content";
import type { LetterStory } from "@/content/types";
import { assetPath } from "@/lib/assetPath";

type Props = {
  letters: LetterStory[];
};

const SPINE_COLORS = [
  "#3d4f3a",
  "#5c4033",
  "#2f4a55",
  "#6b4538",
  "#355a4a",
  "#4a4035",
  "#3a4550",
  "#5a4a38",
];

function coverImage(letter: LetterStory): string | undefined {
  const src = letter.spreads.find((s) => s.kind === "picture" && s.image)?.image;
  return src ? assetPath(src) : undefined;
}

function toBookInput(letter: LetterStory, index: number): BookInput {
  const pageEstimate = 160 + letter.spreads.length * 45;
  return {
    title: `${bookId(letter)} · ${letter.imageWord}`,
    author: `${letter.letter} · ${letter.title}`,
    pages: letter.status === "ready" ? pageEstimate : 120 + (index % 5) * 20,
    color: SPINE_COLORS[index % SPINE_COLORS.length],
    progress: letter.status === "ready" ? 100 : 0,
    status: letter.status === "ready" ? letter.culture : "Soon",
  };
}

function attachLocalCover(bookEl: HTMLElement, src: string, title: string) {
  const book3d = bookEl.querySelector(".simpleshelf__book-3d");
  if (!book3d || bookEl.querySelector(".simpleshelf__cover")) return;

  const height = bookEl.style.height || "240px";
  const cover = document.createElement("img");
  cover.className = "simpleshelf__cover";
  cover.src = src;
  cover.alt = title;
  cover.loading = "lazy";
  cover.style.height = height;
  cover.onerror = () => {
    cover.style.display = "none";
  };
  book3d.appendChild(cover);
}

export function Bookshelf({ letters }: Props) {
  const router = useRouter();
  const readyMount = useRef<HTMLDivElement>(null);

  const ready = useMemo(
    () => letters.filter((l) => l.status === "ready"),
    [letters],
  );

  useEffect(() => {
    const mount = readyMount.current;
    if (!mount) return;

    mount.replaceChildren();

    const shelf = SimpleShelf.createShelf(
      ready.map((letter, i) => toBookInput(letter, i)),
      {
        align: "center",
        showProgress: false,
        onBookClick: (book) => {
          const id = book.title.split(" · ")[0]?.toLowerCase();
          if (id) router.push(`/bookshelf/${id}`);
        },
      },
    );

    ready.forEach((letter, i) => {
      const bookEl = shelf.children[i] as HTMLElement | undefined;
      const cover = coverImage(letter);
      if (bookEl && cover) {
        attachLocalCover(bookEl, cover, letter.title);
      }
    });

    mount.appendChild(shelf);

    return () => {
      mount.replaceChildren();
    };
  }, [ready, router]);

  return (
    <div className="bookshelf-page">
      <header className="bookshelf-page__header">
        <Link href="/" className="bookshelf-page__back">
          ← Studio home
        </Link>
        <h1 className="bookshelf-page__title">Book Viewer</h1>
        <p className="bookshelf-page__lede">
          Preview each letter story as an open book — teacher review only, not for
          student screens. Hover a spine to peek the cover; click to open.
        </p>
      </header>

      <section className="simpleshelf-host" aria-label="Letter story books">
        <div ref={readyMount} className="simpleshelf-host__mount" />
      </section>

      <p className="bookshelf-page__credit">
        Bookshelf UI by{" "}
        <a
          href="https://github.com/kat3samsin/simpleshelf"
          target="_blank"
          rel="noreferrer"
        >
          simpleshelf
        </a>{" "}
        (MIT).
      </p>
    </div>
  );
}
