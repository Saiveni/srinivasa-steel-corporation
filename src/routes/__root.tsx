import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BrandPreloader } from "@/components/BrandPreloader";
import { FloatingActions } from "@/components/FloatingActions";
import { SmoothScrollController } from "@/components/SmoothScrollController";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/app-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ssc-steel-light px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h1 text-foreground">404</h1>
        <h2 className="mt-4 text-h4 text-foreground uppercase">Page not found</h2>
        <p className="mt-2 text-body text-foreground/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-premium"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ssc-steel-light px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h4 text-foreground uppercase">
          This page didn't load
        </h1>
        <p className="mt-2 text-body text-foreground/60">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-premium"
          >
            Try again
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-border/20 bg-white px-6 py-3 text-small font-bold text-foreground transition-all hover:bg-ssc-steel-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // Standard SEO
      { title: "Srinivasa Steel Corporation" },
      { name: "description", content: "Trusted steel and TMT supplier serving construction and industrial requirements since 1994." },
      
      // Open Graph / WhatsApp / Facebook
      { property: "og:site_name", content: "Srinivasa Steel Corporation" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Srinivasa Steel Corporation" },
      { property: "og:description", content: "Trusted steel and TMT supplier serving construction and industrial requirements since 1994." },
      // WhatsApp prefers an absolute URL for og:image, but relative is standard for development
      { property: "og:image", content: "/favicon.png" }, 
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      
      // Twitter
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Srinivasa Steel Corporation" },
      { name: "twitter:description", content: "Trusted steel and TMT supplier serving construction and industrial requirements since 1994." },
      { name: "twitter:image", content: "/favicon.png" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[#0B1320]">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-[#0B1320] selection:bg-ssc-gold selection:text-ssc-navy">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollController />
      <div className="flex flex-col min-h-screen">
        <BrandPreloader />
        <Navbar />
        <main className="flex-grow pt-0">
          <Outlet />
        </main>
        <Footer />
        <FloatingActions />
      </div>
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
