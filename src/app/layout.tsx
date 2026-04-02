import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeProvider } from "next-themes";
import { CookiePopup } from "../components/CookiePopup";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olucasxavier.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Lucas Xavier ",
    template: "%s // Lucas Xavier",
  },
  description:
    "Lucas Xavier is a personal website template built with Next.js 15, React 19 and Motion-Primitives.",
};

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
        data-component="RootLayout"
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen flex-1">
              <Header />
              {children}
              <Footer />
              <CookiePopup />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
