import CommandPalette from "@/components/CommandPalette";
import CursorSpotlight from "@/components/CursorSpotlight";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import SoundFeedback from "@/components/SoundFeedback";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://mhmdhfisali.github.io",
  ),
  title: {
    default: "Muhamad Hafis Ali | Fullstack Developer & Mobile Developer",
    template: "%s | Muhamad Hafis Ali",
  },
  description:
    "Portofolio resmi Muhamad Hafis Ali — Fullstack Developer & Mobile Developer (Flutter, Next.js, Laravel). Pengembang sistem enterprise PPIC, IPC, Dashboard SMII di PT Sinar Meadow International Indonesia serta platform digital live absolutestore.id.",
  keywords: [
    "Muhamad Hafis Ali",
    "Muhamad Hafis Ali Portfolio",
    "Muhamad Hafis Ali Fullstack Developer",
    "Muhamad Hafis Ali Mobile Developer",
    "Muhamad Hafis Ali Sinar Meadow",
    "Muhamad Hafis Ali absolutestore",
    "Muhamad Hafis Ali GitHub",
    "Hafis Ali",
    "mhmdhfisali",
    "absolutelie",
    "Fullstack Developer Indonesia",
    "Mobile Developer Indonesia",
    "Full-Stack Developer",
    "Mobile Developer Flutter",
    "Computer Vision",
    "YOLOv8",
    "PPIC System",
    "Industrial Dashboard",
    "Next.js Portfolio",
    "PT Sinar Meadow International Indonesia",
    "absolutestore.id",
  ],
  authors: [
    { name: "Muhamad Hafis Ali", url: "https://mhmdhfisali.github.io" },
  ],
  creator: "Muhamad Hafis Ali",
  publisher: "Muhamad Hafis Ali",
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/",
    },
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
    title: "Muhamad Hafis Ali | Fullstack Developer & Mobile Developer",
    description:
      "Portofolio resmi rekayasa perangkat lunak, sistem industri PPIC & IPC di PT Sinar Meadow International Indonesia, dan platform absolutestore.id oleh Muhamad Hafis Ali.",
    url: "/",
    siteName: "Muhamad Hafis Ali — Official Engineering Portfolio",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Hafis Ali | Fullstack Developer & Mobile Developer",
    description:
      "Portofolio rekayasa perangkat lunak, sistem industri SMII, absolutestore.id, dan riset teknologi oleh Muhamad Hafis Ali.",
    creator: "@mhmdhfisali",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mhmdhfisali.github.io/#person",
      name: "Muhamad Hafis Ali",
      alternateName: ["Hafis Ali", "mhmdhfisali", "absolutelie"],
      jobTitle: "Fullstack Developer & Mobile Developer",
      description:
        "Muhamad Hafis Ali adalah Fullstack Developer dan Mobile Developer dengan pengalaman membangun sistem enterprise industri di PT Sinar Meadow International Indonesia serta platform e-commerce absolutestore.id.",
      url: "https://mhmdhfisali.github.io",
      sameAs: [
        "https://github.com/mhmdhfisali",
        "https://www.linkedin.com/in/mhmdhfisali",
        "https://absolutestore.id",
        "https://proceeding.unindra.ac.id/index.php/semnasristek/article/view/8895",
      ],
      worksFor: {
        "@type": "Organization",
        name: "PT Sinar Meadow International Indonesia",
        url: "https://sinarmeadow.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universitas Indraprasta PGRI",
      },
      knowsAbout: [
        "Software Engineering",
        "Full-Stack Web Development",
        "Next.js",
        "React",
        "Laravel",
        "PHP",
        "Flutter",
        "Mobile Application Development",
        "Computer Vision",
        "YOLOv8",
        "Systems Architecture",
        "PPIC Systems",
        "Industrial Operational Dashboards",
        "Docker",
        "Linux System Administration",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mhmdhfisali.github.io/#website",
      url: "https://mhmdhfisali.github.io",
      name: "Muhamad Hafis Ali Portfolio",
      description:
        "Portofolio resmi rekayasa perangkat lunak dan arsitektur sistem oleh Muhamad Hafis Ali.",
      publisher: {
        "@id": "https://mhmdhfisali.github.io/#person",
      },
      inLanguage: ["id", "en"],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mhmdhfisali.github.io/#profilepage",
      url: "https://mhmdhfisali.github.io",
      name: "Profil Rekayasa Perangkat Lunak Muhamad Hafis Ali",
      mainEntity: {
        "@id": "https://mhmdhfisali.github.io/#person",
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 ease-in-out selection:bg-blue-600 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
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
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
