import { SITE_CONFIG, FAQS } from "@/lib/constants";

export default function JsonLd() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${SITE_CONFIG.lawyer} – Reclamos Autoplan`,
    description:
      "Asesoramiento jurídico en reclamos por demoras e incumplimientos en planes de ahorro (autoplanes) en Argentina. Más de 100 casos favorables.",
    url: SITE_CONFIG.canonicalUrl,
    telephone: `+${SITE_CONFIG.whatsappNumber}`,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -31.4135,
      longitude: -64.18105,
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.lawyer,
      jobTitle: "Abogado",
      knowsAbout: [
        "Reclamos por autoplanes",
        "Planes de ahorro",
        "Defensa del consumidor",
        "Incumplimientos contractuales",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Jurídicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consulta por demora en autoplan",
            description:
              "Análisis y asesoramiento en casos de demoras en la entrega de vehículos de planes de ahorro.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reclamo por incumplimiento de autoplan",
            description:
              "Representación y orientación en reclamos formales por incumplimientos de administradoras y concesionarias.",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
