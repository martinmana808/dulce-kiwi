import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
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
    <html lang="es" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="bg-cream text-forest antialiased">{children}</body>
    </html>
  );
}
