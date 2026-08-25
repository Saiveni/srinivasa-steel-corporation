import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrustCapabilities } from "@/components/TrustCapabilities";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";

import { SteelTimeline } from "@/components/SteelTimeline";
import { BrandStrip } from "@/components/BrandStrip";
import { SteelGallery } from "@/components/SteelGallery";


export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { name: "description", content: "Srinivasa Steel Corporation supplies TMT rebars, steel products, wire products and decoiling solutions for construction and industrial requirements." },
      { property: "og:title", content: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { property: "og:description", content: "Steel, TMT and decoiling solutions for construction and industrial requirements." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Srinivasa Steel Corporation | TMT Rebars & Steel Products" },
      { name: "twitter:description", content: "Steel, TMT and decoiling solutions for construction and industrial requirements." },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
    ],
  }),
});

function HomePage() {
  return (
    <div className="font-body bg-ssc-navy pt-[72px] lg:pt-[72px]">
      <HeroSection />


      <TrustCapabilities />
      <TrustStatsBar />
      <ProductShowcase />
      
      <SteelTimeline />
      <BrandStrip />
      <div className="bg-white py-16 lg:py-24 border-t border-ssc-navy/5">
        <div className="container-wide">
          <div className="flex flex-col items-start gap-4 mb-10">
            <span className="text-micro">
              VISUAL PORTFOLIO
            </span>
            <div className="flex flex-col gap-2">
              <h2 className="text-ssc-navy">
                STEEL IN <span className="text-ssc-gold-dark">ELEMENT.</span>
              </h2>
              <p className="text-body text-ssc-gray-body max-w-sm">
                A technical perspective of our products and processing facilities.
              </p>
            </div>
          </div>
          <SteelGallery isHomePage={true} />
        </div>
      </div>
      
    </div>
  );
}
