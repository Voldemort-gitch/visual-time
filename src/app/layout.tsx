import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visualtime.in'),
  title: "Visual Time | Luxury Event Management & Cinematic Storytelling",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  description: "Bringing over 26 years of cinematic storytelling to luxury event management in Chennai. We curate bespoke weddings, corporate galas, and premium celebrations.",
  keywords: "event management Chennai, luxury wedding planners Tamil Nadu, corporate event planners Chennai, Visual Time events, cinematic events, Kodambakkam event planners",
  openGraph: {
    title: 'Visual Time | Luxury Event Management',
    description: 'Elevating moments into timeless memories. Premier boutique event firm with over 26 years of experience.',
    url: 'https://visualtime.in',
    siteName: 'Visual Time',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Visual Time | Cinematic Event Management',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Time | Luxury Event Management',
    description: 'Elevating moments into timeless memories in Chennai.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-brand-text-primary bg-brand-background selection:bg-brand-secondary selection:text-brand-background">
        <div className="grain-overlay"></div>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
