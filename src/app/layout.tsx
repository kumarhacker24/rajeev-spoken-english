import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JSON_LD_SCHEMA, BUSINESS } from "@/lib/constants";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0D9488" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

export const metadata: Metadata = {
  title: "Rajeev Spoken English Classes | Spoken English in Adhartal, Jabalpur",
  description:
    "Join Rajeev Spoken English Classes in Adhartal, Jabalpur for expert offline spoken English coaching. Rated 4.9★ on Justdial. Build confidence, fluency, and communication skills. Call now!",
  keywords: [
    "Spoken English Classes in Jabalpur",
    "Spoken English Classes in Adhartal",
    "English Speaking Course Jabalpur",
    "Spoken English Coaching Jabalpur",
    "English Classes near Adhartal",
    "Rajeev Spoken English Classes",
    "Learn English in Jabalpur",
    "English Speaking Classes near me",
    "Best Spoken English Classes Jabalpur",
    "Offline English Classes Jabalpur",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  metadataBase: new URL("https://rajeevspokenenglish.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajeevspokenenglish.vercel.app",
    siteName: BUSINESS.name,
    title:
      "Rajeev Spoken English Classes | Spoken English in Adhartal, Jabalpur",
    description:
      "Transform your spoken English with expert-led, in-person classes in Adhartal, Jabalpur. Rated 4.9★ on Justdial. 100% Result-focused approach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajeev Spoken English Classes | Jabalpur",
    description:
      "Expert offline spoken English classes in Adhartal, Jabalpur. Rated 4.9★. Start speaking with confidence today!",
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
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(JSON_LD_SCHEMA),
          }}
        />
      </head>
      <body className="font-body antialiased bg-bg text-text">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
