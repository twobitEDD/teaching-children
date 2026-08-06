import { notFound } from "next/navigation";
import { BookViewer } from "@/components/BookViewer";
import { bookId, getBook, getReadyBooks } from "@/content";

type Props = {
  params: Promise<{ letter: string }>;
};

export function generateStaticParams() {
  return getReadyBooks().map((b) => ({ letter: bookId(b) }));
}

export async function generateMetadata({ params }: Props) {
  const { letter } = await params;
  const data = getBook(letter);
  if (!data || data.status !== "ready") return { title: "Book not found" };
  return {
    title: `${data.letter} · ${data.title} · Book Viewer`,
  };
}

export default async function BookViewerPage({ params }: Props) {
  const { letter } = await params;
  const data = getBook(letter);
  if (!data || data.status !== "ready") notFound();

  return (
    <main>
      <BookViewer letter={data} />
    </main>
  );
}
