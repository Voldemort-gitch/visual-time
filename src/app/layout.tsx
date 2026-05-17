import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://visualtime.in'),
  title: "Visual Time",
  icons: {
    icon: '/vt_new_logo_bg.png',
    apple: '/vt_new_logo_bg.png',
  },
  verification: {
    google: 'EccI2vzxTVbWsD1lUQo3n8xyfSnQ8gqm8EnKJ811bQU',
  },
  description: "Boutique LED rental and corporate event production in Chennai. Specializing in high-end LED screen rentals, cinematic stage designs, and professional corporate event management.",
  keywords: "LED screen rental Chennai, corporate event management Chennai, LED video wall rental, Visual Time LED, professional sound and light rental, product launch management Chennai, event production",
  openGraph: {
    title: 'Visual Time',
    description: 'Elevating moments into timeless memories. Premier boutique event firm with over 26 years of experience.',
    url: 'https://visualtime.in',
    siteName: 'Visual Time',
    images: [
      {
        url: '/vt_new_logo_bg.png',
        width: 1200,
        height: 630,
        alt: 'Visual Time',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Time',
    description: 'Elevating moments into timeless memories in Chennai.',
    images: ['/vt_new_logo_bg.png'],
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
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
