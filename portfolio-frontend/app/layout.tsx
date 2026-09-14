import CommandPalette from "@/components/CommandPalette";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SoundFeedback from "@/components/SoundFeedback";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mhmdhfisali.dev",
  ),
  title: {
    default: "Muhamad Hafis Ali | Software Engineer & AI Researcher",
    template: "%s | Muhamad Hafis Ali",
  },
  description:
    "Portofolio rekayasa perangkat lunak, Full-Stack Web, Mobile Development (Flutter), dan riset Computer Vision oleh Muhamad Hafis Ali.",
  keywords: [
    "Muhamad Hafis Ali",
    "Hafis Ali",
    "absolutelie",
    "mhmdhfisali",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "Flutter Developer",
    "Next.js Portfolio",
    "Computer Vision",
    "YOLOv8",
  ],
  authors: [
    { name: "Muhamad Hafis Ali", url: "https://github.com/mhmdhfisali" },
  ],
  creator: "Muhamad Hafis Ali",
  publisher: "Muhamad Hafis Ali",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muhamad Hafis Ali | Software Engineer & AI Researcher",
    description:
      "Katalog portofolio rekayasa perangkat lunak, arsitektur sistem modern, dan riset implementasi model AI.",
    url: "/",
    siteName: "Muhamad Hafis Ali Engineering Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Hafis Ali | Software Engineer & AI Researcher",
    description:
      "Portofolio rekayasa perangkat lunak dan riset Computer Vision oleh Muhamad Hafis Ali.",
    creator: "@mhmdhfisali",
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
