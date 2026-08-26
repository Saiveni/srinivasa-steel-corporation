import { createFileRoute } from "@tanstack/react-router";
import { ProductsComponent } from "@/components/ProductsComponent";

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
      "name": "Products",
      "item": "https://www.srinivasasteelcorporation.com/products"
    }
  ]
};


export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "TMT Bars & Steel Products | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore our range of high-quality TMT rebars (8mm-32mm), structural steel, binding wire, and decoiling solutions for industrial needs." },
      { property: "og:title", content: "TMT Bars & Steel Products | Srinivasa Steel Corporation" },
      { property: "og:description", content: "Explore our range of high-quality TMT rebars (8mm-32mm), structural steel, binding wire, and decoiling solutions for industrial needs." },
      { property: "og:url", content: "https://www.srinivasasteelcorporation.com/products" },
      { property: "og:image", content: "https://www.srinivasasteelcorporation.com/hero/hero-5.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.srinivasasteelcorporation.com/products" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
    ]
  }),
});

function ProductsPage() {
  return (
    <div className="w-full">
      <ProductsComponent />
    </div>
  );
}

