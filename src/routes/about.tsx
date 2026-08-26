import { createFileRoute } from "@tanstack/react-router";
import { SteelTimeline } from "@/components/SteelTimeline";
import { AboutHero } from "@/components/AboutHero";
import { AboutBusinessCards } from "@/components/AboutBusinessCards";
import { LeadershipSection } from "@/components/LeadershipSection";
import { IndustrialNetwork } from "@/components/IndustrialNetwork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BrandStrip } from "@/components/BrandStrip";

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
      "name": "About",
      "item": "https://www.srinivasasteelcorporation.com/about"
    }
  ]
};

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Srinivasa Steel Corporation | 40+ Years of Steel Supply" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation's 40+ year legacy, our advanced stockyard facilities, weighment accuracy, and our commitment to on-time steel delivery." },
      { property: "og:title", content: "About Srinivasa Steel Corporation | 40+ Years of Steel Supply" },
      { property: "og:description", content: "Learn about Srinivasa Steel Corporation's 40+ year legacy, our advanced stockyard facilities, weighment accuracy, and our commitment to on-time steel delivery." },
      { property: "og:url", content: "https://www.srinivasasteelcorporation.com/about" },
      { property: "og:image", content: "https://www.srinivasasteelcorporation.com/hero/hero-5.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://www.srinivasasteelcorporation.com/about" }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
    ]
  }),
});

function AboutPage() {
  return (
    <div className="bg-ssc-navy flex flex-col pt-[62px] sm:pt-[68px] md:pt-[72px]">
      {/* 01 — PREMIUM ABOUT OPENING & 02 — COMPANY STORY */}
      <AboutHero />

      {/* 03 — STRATEGIC PARTNERSHIPS */}
      <BrandStrip />

      {/* 04 — BUSINESS AREAS / SPECIFICATION PANELS */}
      <AboutBusinessCards />


      {/* 04 — INDUSTRIAL TIMELINE */}
      <SteelTimeline />

      {/* 04 — LEADERSHIP / PROMOTERS */}
      <LeadershipSection />
      
      {/* 06 — WHY CHOOSE SRINIVASA STEEL? & 07 — STRONG CTA */}
      <WhyChooseUs />
    </div>
  );
}
