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
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop" },
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
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/a2615c71-b746-456f-94dd-63c177509331/ssc-logo-transparent.png" },
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
