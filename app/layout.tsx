import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
        {/* Google Analytics 4 – reemplazar G-XXXXXXXXXX con tu ID real */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {/* Meta Pixel – reemplazar con tu Pixel ID real */}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                document,'script','https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}
      </head>
      <body className="antialiased min-h-full flex flex-col">{children}</body>
    </html>
  );
}
