import { notFound } from "next/navigation";
import { LetterWorkspace } from "@/components/LetterWorkspace";
import { bookId, getBook, getReadyBooks } from "@/content";
import { ALPHABET } from "@/content/types";

type Props = {
  params: Promise<{ letter: string }>;
};

export function generateStaticParams() {
  const fromBooks = getReadyBooks().map((b) => ({ letter: bookId(b) }));
  const fromAlphabet = ALPHABET.map((letter) => ({ letter: letter.toLowerCase() }));
  const seen = new Set<string>();
  return [...fromBooks, ...fromAlphabet].filter((p) => {
    if (seen.has(p.letter)) return false;
    seen.add(p.letter);
    return true;
  });
}

export async function generateMetadata({ params }: Props) {
  const { letter } = await params;
  const data = getBook(letter);
  if (!data) return { title: "Letter not found" };
  return {
    title: `${data.letter} · ${data.title} · Letter Story Studio`,
    description: `Teacher materials for letter ${data.letter}: ${data.imageWord}`,
  };
}

export default async function LetterPage({ params }: Props) {
  const { letter } = await params;
  const data = getBook(letter);
  if (!data) notFound();

  return (
    <main>
      <LetterWorkspace letter={data} />
    </main>
  );
}
