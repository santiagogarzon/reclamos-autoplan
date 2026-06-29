import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import ScrollTracker from "@/components/analytics/ScrollTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GTM_ID = "GTM-W7QVX9BR";

const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalUrl),
  title: {
    default: `¿Demoran tu auto de autoplan? | ${SITE_CONFIG.lawyer} – Abogado`,
    template: `%s | ${SITE_CONFIG.lawyer} – Abogado`,
  },
  description:
    "Si pagaste cuotas y no entregaron tu auto de autoplan, podés reclamar. Nicolás Silva, abogado en Córdoba, Argentina, con más de 100 casos favorables en reclamos por demoras e incumplimientos de planes de ahorro.",
  keywords: [
    "autoplan demora",
    "plan de ahorro demora entrega",
    "reclamo autoplan argentina",
    "abogado autoplan córdoba",
    "incumplimiento plan ahorro vehiculo",
    "concesionaria no entrega auto",
    "demora entrega auto plan ahorro",
    "reclamo consumidor autoplan",
  ],
  authors: [{ name: SITE_CONFIG.lawyer }],
  creator: SITE_CONFIG.lawyer,
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
    type: "website",
    locale: "es_AR",
    url: SITE_CONFIG.canonicalUrl,
    siteName: SITE_CONFIG.name,
    title: "¿Te demoraron la entrega de tu auto de autoplan?",
    description:
      "Más de 100 casos favorables en reclamos por demoras en autoplanes. Consultá gratis con Nicolás Silva, abogado en Córdoba.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Reclamos Autoplan – Nicolás Silva Abogado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Te demoraron la entrega de tu auto de autoplan?",
    description:
      "Más de 100 casos favorables. Consultá gratis con Nicolás Silva, abogado especialista en reclamos de autoplanes.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: gtmHeadScript }} />
      </head>
      <body className="antialiased min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollTracker />
        {children}
      </body>
    </html>
  );
}
