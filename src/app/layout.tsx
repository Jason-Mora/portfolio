import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Mora – Web Developer",
  description:
    "Portfolio di Jason Mora, sviluppatore web specializzato in Next.js e React.",
  keywords: ["Jason Mora", "Portfolio", "Web Developer", "Next.js", "React"],
  authors: [{ name: "Jason Mora" }],
  openGraph: {
    title: "Jason Mora – Web Developer",
    description:
      "Portfolio di Jason Mora, sviluppatore web specializzato in Next.js e React.",
    url: "https://jasonmora.netlify.app",
    siteName: "Jason Mora Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anteprima Portfolio Jason Mora",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* HEADER */}
          <Navbar/>
          {/* CONTENUTO PAGINA */}
          <main className='max-w-5xl mx-auto px-4 ${xdw}'>{children}</main>
          {/* FOOTER */}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
