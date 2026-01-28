import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TASHICO TECH and Resources Management | Excellence in IT Education Since 2010",
    template: "%s | TASHICO TECH and Resources Management",
  },
  description: "TASHICO TECH and Resources Management - A cornerstone of technological education in Ogun State, Nigeria. Offering computer training, professional certifications (CompTIA, Cisco, Microsoft), IT consulting, and career development since 2010.",
  keywords: [
    "computer training",
    "IT education",
    "Ogun State",
    "Nigeria",
    "CompTIA certification",
    "Cisco certification",
    "Microsoft certification",
    "web development",
    "programming courses",
    "IT consulting",
    "Ijebu Igbo",
    "TASHICO",
  ],
  authors: [{ name: "TASHICO TECH and Resources Management" }],
  creator: "TASHICO TECH and Resources Management",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://tashico.com",
    siteName: "TASHICO TECH and Resources Management",
    title: "TASHICO TECH and Resources Management | Excellence in IT Education Since 2010",
    description: "Empowering futures through technology education. Over 3,000 graduates trained since 2010.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TASHICO TECH and Resources Management | Excellence in IT Education",
    description: "Empowering futures through technology education since 2010.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logot.png",
    shortcut: "/logot.png",
    apple: "/logot.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
