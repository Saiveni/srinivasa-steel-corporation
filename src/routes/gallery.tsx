import { createFileRoute } from "@tanstack/react-router";
import { SteelGallery } from "@/components/SteelGallery";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.srinivasasteelcorporation.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Gallery",
      "item": "https://www.srinivasasteelcorporation.com/gallery"
    }
  ]
};


export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Steel Products & Stockyard Gallery | Srinivasa Steel Corporation" },
      { name: "description", content: "View our visual portfolio of TMT rebars, structural steel products, and our advanced stockyard facilities equipped with crane loading." },
      { property: "og:title", content: "Steel Products & Stockyard Gallery | Srinivasa Steel Corporation" },
      { property: "og:description", content: "View our visual portfolio of TMT rebars, structural steel products, and our advanced stockyard facilities equipped with crane loading." },
      { property: "og:url", content: "https://www.srinivasasteelcorporation.com/gallery" },
      { property: "og:image", content: "https://www.srinivasasteelcorporation.com/hero/hero-5.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.srinivasasteelcorporation.com/gallery" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
    ]
  }),
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#050A13]">
      <SteelGallery />
    </div>
  );
}
