import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrustCapabilities } from "@/components/TrustCapabilities";
import { TrustStatsBar } from "@/components/TrustStatsBar";
import ProductShowcase from "@/components/ProductShowcase";

import { SteelTimeline } from "@/components/SteelTimeline";
import { BrandStrip } from "@/components/BrandStrip";
import { SteelGallery } from "@/components/SteelGallery";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Srinivasa Steel Corporation",
  "url": "https://www.srinivasasteelcorporation.com/",
  "logo": "https://www.srinivasasteelcorporation.com/logo.svg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9440170453",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "te"]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Srinivasa Steel Corporation",
  "image": "https://www.srinivasasteelcorporation.com/logo.svg",
  "url": "https://www.srinivasasteelcorporation.com/",
  "telephone": "+91-9440170453",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 90, Iron Complex, Godown Block No. 36/3, Bhavanipuram",
    "addressLocality": "Vijayawada",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "520012",
    "addressCountry": "IN"
  },
  "description": "Trusted supplier of TMT rebars, structural steel, and industrial steel products with 40+ years of experience in Andhra Pradesh."
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Srinivasa Steel Corporation",
  "url": "https://www.srinivasasteelcorporation.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.srinivasasteelcorporation.com/products?product={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Srinivasa Steel Corporation | TMT Bars & Steel Supplier in Andhra Pradesh" },
      { name: "description", content: "Srinivasa Steel Corporation supplies high-quality TMT rebars, structural steel, and wire products for construction and industrial needs with 40+ years experience in Vijayawada & Gannavaram." },
      { property: "og:title", content: "Srinivasa Steel Corporation | TMT Bars & Steel Supplier in Andhra Pradesh" },
      { property: "og:description", content: "Srinivasa Steel Corporation supplies high-quality TMT rebars, structural steel, and wire products for construction and industrial needs with 40+ years experience in Vijayawada & Gannavaram." },
      { property: "og:url", content: "https://www.srinivasasteelcorporation.com/" },
      { property: "og:image", content: "https://www.srinivasasteelcorporation.com/hero/hero-5.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.srinivasasteelcorporation.com/" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) }
    ]
  }),
});

function HomePage() {
  return (
    <div className="font-body bg-ssc-navy">
      <HeroSection />


      <TrustCapabilities />
      <TrustStatsBar />
      <ProductShowcase />
      
      <SteelTimeline />
      <BrandStrip />
      <div className="bg-[#F8FAFC] py-16 lg:py-24 border-t border-ssc-navy/5">
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
        </div>
        <SteelGallery isHomePage={true} />
      </div>
      
    </div>
  );
}
