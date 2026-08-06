import { Bookshelf } from "@/components/Bookshelf";
import { getReadyBooks } from "@/content";

export const metadata = {
  title: "Book Viewer · Letter Story Studio",
  description: "Teacher bookshelf and animated letter-story book preview.",
};

export default function BookshelfPage() {
  const books = getReadyBooks();

  return (
    <main>
      <Bookshelf letters={books} />
    </main>
  );
}
