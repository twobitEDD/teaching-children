import { LetterGrid } from "@/components/LetterGrid";
import { getAllLetters } from "@/content";

export default function HomePage() {
  const letters = getAllLetters();

  return (
    <main className="studio-home">
      <h1 className="studio-home__brand">Letter Story Studio</h1>
      <p className="studio-home__lede">
        Design and print physical letter materials for ages 4–7. Consonants from world
        stories; vowels from singing sounds and emotional gestures — never shown on a
        screen to children.
      </p>
      <p className="studio-home__note">
        Teacher tool only. Full A–Z primary catalog ready; hover A/B/C for Ant, Bee, Crow
        alternates.
      </p>
      <LetterGrid letters={letters} />
    </main>
  );
}
