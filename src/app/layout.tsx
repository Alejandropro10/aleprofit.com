import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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

const TITLE =
  "ALEPROFIT | Entrenador Personal en Extremadura — Preparador Físico y Nutricionista Deportivo";
const DESCRIPTION =
  "ALEPROFIT es la marca deportiva y de salud de Alejandro Prieto Carvajal: entrenador personal y preparador físico en Extremadura, nutricionista deportivo y creador del Método ALEPROFIT. Entrenamiento, nutrición, hábitos y salud mental para toda la vida.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aleprofit.com"),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ALEPROFIT",
    "Alejandro Prieto Carvajal",
    "entrenador personal en Extremadura",
    "entrenador personal Badajoz",
    "entrenador personal Cáceres",
    "preparador físico",
    "nutricionista deportivo",
    "entrenamiento online",
    "entrenamiento personalizado",
    "Club Profit",
  ],
  alternates: {
    canonical: "https://aleprofit.com",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://aleprofit.com",
    siteName: "ALEPROFIT",
    locale: "es_ES",
    type: "website",
    images: ["/logo-lion.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {    
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ALEPROFIT",
  description: DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Alejandro Prieto Carvajal",
    jobTitle: "Entrenador personal y preparador físico",
  },
  areaServed: {
    "@type": "State",
    name: "Extremadura, España",
  },
  telephone: "+34633231747",
  email: "prietocarvajalfit@gmail.com",
  url: "https://com",
  image: "https://aleprofit.com/logo-lion.png",
  sameAs: ["https://instagram.com/ale.profit", "https://instagram.com/alejandrpc10"],
  priceRange: "€€",
  serviceType: [
    "Entrenador personal",
    "Preparador físico",
    "Nutricionista deportivo",
    "Entrenamiento online",
    "Club Profit — eventos deportivos, recreativos y educativos",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
