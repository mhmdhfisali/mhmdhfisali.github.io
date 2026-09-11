import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import CursorSpotlight from "@/components/CursorSpotlight";
import SoundFeedback from "@/components/SoundFeedback";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#181a20" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Portofolio | Muhamad Hafis Ali",
  description:
    "Portofolio rekayasa perangkat lunak, sistem administrasi, dan implementasi aplikasi modern oleh Muhamad Hafis Ali.",
  keywords: [
    "Muhamad Hafis Ali",
    "Software Engineer",
    "System Administrator",
    "Web Developer",
    "Mobile Developer",
  ],
  authors: [{ name: "Muhamad Hafis Ali" }],
  openGraph: {
    title: "Portofolio | Muhamad Hafis Ali",
    description:
      "Portofolio rekayasa perangkat lunak, sistem administrasi, dan implementasi aplikasi modern.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 ease-in-out selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Laser Progress Bar di Atas Layar */}
          <ScrollProgress />

          {/* Navigasi Cepat Keyboard (Cmd + K / Ctrl + K) */}
          <CommandPalette />

          {/* Suara Klik Mikro Taktil (Web Audio API) */}
          <SoundFeedback />

          {/* Spotlight Cursor Mengikuti Gerakan Mouse */}
          <CursorSpotlight />

          {children}

          {/* Tombol Melayang Scroll to Top */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
