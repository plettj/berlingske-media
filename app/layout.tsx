import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";

const fontSans = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Berlingske Media",
    default: "Berlingske Media - Free and Responsible Press",
  },
  description:
    "Berlingske Media provides independent, conservative journalism through Berlingske, B.T., Weekendavisen, and Euroinvestor. It focusses on democracy, free speech, and informed citizenship.",
  authors: [
    { name: "Josiah Plett", url: "https://plett.dev" },
    { name: "Berlingske Media", url: "https://www.berlingskemedia.dk" },
  ],
  creator: "Josiah Plett",
  keywords: [
    "Copenhagen Business School",
    "Berlingske Media",
    "Case Competition",
    "Free Press",
    "Responsible Press",
    "B.T.",
    "Weekendavisen",
    "Euroinvestor",
    "Newspaper",
    "Journalism",
    "Democracy",
  ],
  formatDetection: {
    telephone: true,
    date: false,
    email: true,
    url: true,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: "https://en.berlingskemedia.org",
    siteName: "berlingskemedia.org",
    title: "Berlingske Media",
    description:
      "Free and responsible press for an informed democracy through Berlingske, B.T., Weekendavisen, and Euroinvestor.",
    // images: [
    //   {
    //     url: "https://www.berlingskemedia.dk/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Berlingske Media Banner",
    //   },
    // ],
  },
  twitter: {
    title: "Berlingske Media",
    description: "Denmark's trusted source for free, independent news.",
    // image: "https://www.berlingskemedia.dk/twitter-image.jpg",
    site: "@berlingskemedia",
  },
  publisher: "Berlingske Media",
  alternates: {
    canonical: "https://www.berlingskemedia.org",
    languages: {
      da: "https://dk.berlingskemedia.org",
      en: "https://en.berlingskemedia.org",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(fontSans.variable)} suppressHydrationWarning>
      <body className="flex flex-col h-screen items-center overflow-x-hidden scrollbar bg-background font-sans antialiased transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}