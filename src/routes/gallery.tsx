import { createFileRoute } from "@tanstack/react-router";
import { SteelGallery } from "@/components/SteelGallery";


export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Steel Products & Operations Gallery | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore TMT rebars, steel products, wire products, decoiling and steel stock associated with Srinivasa Steel Corporation." },
      { property: "og:title", content: "Steel Products & Operations Gallery | Srinivasa Steel Corporation" },
      { property: "og:description", content: "Explore TMT rebars, steel products, wire products, decoiling and steel stock associated with Srinivasa Steel Corporation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function GalleryPage() {
  return (
    <div className="bg-background min-h-screen pt-[62px] sm:pt-[68px] md:pt-[72px]">
      <SteelGallery />
    </div>
  );
}
