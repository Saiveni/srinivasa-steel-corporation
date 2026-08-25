import { createFileRoute } from "@tanstack/react-router";
import { ProductsComponent } from "@/components/ProductsComponent";


export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Steel & TMT Products | Srinivasa Steel Corporation" },
      { name: "description", content: "Explore TMT rebars, binding wire, GI wire, oil rods and other steel products supplied by Srinivasa Steel Corporation." },
      { property: "og:title", content: "Steel & TMT Products | Srinivasa Steel Corporation" },
      { property: "og:description", content: "Explore TMT rebars, binding wire, GI wire, oil rods and other steel products supplied by Srinivasa Steel Corporation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ProductsPage() {
  return (
    <div className="pt-[62px] sm:pt-[68px] md:pt-[72px] bg-ssc-steel-light">
      <ProductsComponent />
    </div>
  );
}

