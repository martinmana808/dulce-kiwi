import type { Metadata } from "next";
import { Fraunces, Google_Sans, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Clean, friendly geometric sans for body copy
const googleSans = Google_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-google-sans",
  display: "swap",
});

// Hand-lettered brush feel for headlines — the Woodland personality
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulce Kiwi — Repostería casera",
  description:
    "Repostería casera, natural y de la tierra. Budines y tortas con frutos secos, dátiles, banana y harinas integrales. Hecho a mano en Acassuso, Buenos Aires.",
  openGraph: {
    title: "Dulce Kiwi — Repostería casera",
    description:
      "Repostería casera, natural y de la tierra. Acassuso, Buenos Aires.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${googleSans.variable} ${caveat.variable}`}
    >
      <body className="bg-cream text-forest antialiased">{children}</body>
    </html>
  );
}
