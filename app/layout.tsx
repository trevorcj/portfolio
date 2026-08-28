import type { Metadata } from "next";
import "./globals.css";
import Avatar from "@/components/Avatar";

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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto pt-16 px-8 max-w-162.5">
        <nav className="flex justify-between text-sm mb-15">
          <Avatar />
        </nav>

        {children}
      </body>
    </html>
  );
}
