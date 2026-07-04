import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aleprofit.es"),
  title: "ALEPROFIT | Entrena tu cuerpo. Educa tu mente. Encuentra tu equilibrio.",
  description:
    "ALEPROFIT es una marca deportiva y de salud fundada por Alejandro Prieto Carvajal. Entrenamiento personalizado, nutrición, mentalidad y hábitos sostenibles para construir una vida más fuerte y equilibrada.",
  keywords: [
    "ALEPROFIT",
    "Alejandro Prieto Carvajal",
    "entrenador personal Extremadura",
    "entrenamiento online",
    "nutrición deportiva",
    "Club Profit",
    "entrenamiento personalizado",
  ],
  openGraph: {
    title: "ALEPROFIT | Entrena tu cuerpo. Educa tu mente. Encuentra tu equilibrio.",
    description:
      "Entrenamiento, nutrición, mentalidad y hábitos sostenibles. Disciplina ahora. Libertad después.",
    url: "https://aleprofit.es",
    siteName: "ALEPROFIT",
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0806",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-dusk text-sand">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
