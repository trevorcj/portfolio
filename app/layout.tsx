import type { Metadata } from "next";
import "./globals.css";
import Avatar from "@/components/Avatar";
import ScrollAnimations from "@/components/animations/ScrollAnimations";

export const metadata: Metadata = {
  metadataBase: new URL("https://trevorcjustus.tech"),

  title: "Chimamanda Justus | Frontend Developer",
  description:
    "Chimamanda Justus is a Frontend Developer based in Lagos, Nigeria, building web applications and digital products with React, Next.js, and TypeScript.",

  openGraph: {
    title: "Chimamanda Justus | Frontend Developer",
    description:
      "Frontend developer building thoughtful digital products for the web.",
    url: "https://trevorcjustus.tech",
    siteName: "Chimamanda Justus",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Chimamanda Justus | Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chimamanda Justus | Frontend Developer",
    description:
      "Frontend developer building web applications and digital products.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var t = localStorage.getItem('theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })();`,
          }}
        />
      </head>
      <body className="mx-auto pt-16 px-8 max-w-162.5">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-md focus:shadow-lg focus:outline-none">
          Skip to main content
        </a>

        <nav className="flex justify-between text-sm mb-15" aria-label="Main Navigation">
          <Avatar />
        </nav>

        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
