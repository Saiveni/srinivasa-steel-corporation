import { createFileRoute } from "@tanstack/react-router";
import { SteelTimeline } from "@/components/SteelTimeline";
import { AboutHero } from "@/components/AboutHero";
import { AboutBusinessCards } from "@/components/AboutBusinessCards";
import { LeadershipSection } from "@/components/LeadershipSection";
import { IndustrialNetwork } from "@/components/IndustrialNetwork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { BrandStrip } from "@/components/BrandStrip";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Srinivasa Steel Corporation | Established 1994" },
      { name: "description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:title", content: "About Srinivasa Steel Corporation | Established 1994" },
      { property: "og:description", content: "Learn about Srinivasa Steel Corporation, established in 1994 and serving steel, TMT and related construction requirements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
