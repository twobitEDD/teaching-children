/** Wait until every `<img>` under `root` has finished loading (or errored). */
export async function waitForImages(root: ParentNode | null): Promise<void> {
  if (!root) return;

  const images = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    images.map(async (img) => {
      // Print/PDF often includes clipped `.print-only` nodes; lazy never fetches those.
      if (img.loading === "lazy") {
        img.loading = "eager";
      }

      if (img.complete && img.naturalWidth > 0) {
        return;
      }

      await new Promise<void>((resolve) => {
        const done = () => resolve();
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      });
    }),
  );
}
