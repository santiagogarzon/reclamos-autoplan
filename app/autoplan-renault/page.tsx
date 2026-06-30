import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reclamo autoplan Renault: qué hacer si no te entregan el auto del plan",
  description:
    "Si tenés un plan de ahorro Renault y el auto no llega, conocé tus opciones. Nicolás Silva, abogado especialista en reclamos de autoplanes en Argentina.",
  keywords: [
    "reclamo autoplan renault",
    "demora plan ahorro renault",
    "plan de ahorro renault incumplimiento",
    "abogado autoplan renault",
    "renault plan ahorro argentina demora",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-renault`,
  },
  openGraph: {
    title: "Reclamo autoplan Renault: qué hacer si no te entregan el auto del plan",
    description:
      "Plan de ahorro Renault demorado. Consultá tu caso gratis con abogado especialista.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-renault`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo reclamar si mi plan de ahorro Renault lleva más de un año demorado?",
    answer:
      "Sí. Una demora prolongada sin justificación clara es una de las situaciones más frecuentes en los reclamos de autoplanes. La cantidad de tiempo es relevante para el análisis, pero no es el único factor: también importa lo que dice el contrato y las comunicaciones que hubo.",
  },
  {
    question: "¿RCI Banque y el plan de ahorro Renault son lo mismo?",
    answer:
      "RCI Banque es la entidad financiera del grupo Renault, pero los planes de ahorro pueden estar administrados por una entidad diferente. Es importante revisar el contrato para identificar correctamente a la administradora del plan.",
  },
  {
    question: "¿Qué pasa si me ofrecieron el auto pero en otro color o versión?",
    answer:
      "Depende de lo que diga el contrato y de si aceptaste o no el cambio. Si el cambio fue unilateral y no lo acordaste, puede ser un argumento válido en el reclamo. Eso se analiza caso por caso.",
  },
  {
    question: "¿Tengo opciones si firmé una nueva adhesión o prórroga?",
    answer:
      "No necesariamente perdiste todas las opciones. Hay casos en los que las prórrogas se firman en situaciones de presión o sin información completa. Vale la pena revisar cómo ocurrió antes de asumir que no hay nada por hacer.",
  },
  {
    question: "¿La consulta tiene algún costo?",
    answer:
      "No. La consulta inicial es gratuita. En esa instancia se analiza el caso y se explican las opciones disponibles sin ningún compromiso.",
  },
];

const relatedPages = [
  {
    href: "/autoplan-volkswagen",
    label: "Reclamo plan ahorro Volkswagen",
    description: "Información y opciones para planes de ahorro VW.",
  },
  {
    href: "/cambiaron-condiciones-autoplan",
    label: "Me cambiaron las condiciones del autoplan",
    description: "Qué hacer cuando modifican el plan sin tu consentimiento.",
  },
  {
    href: "/reclamo-plan-ahorro",
    label: "Reclamo por plan de ahorro",
    description: "Guía general sobre cómo avanzar con un reclamo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Reclamo autoplan Renault: qué hacer si no te entregan el auto del plan",
      description: "Guía para personas con planes de ahorro Renault que enfrentan demoras o incumplimientos.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-renault`,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.lawyer,
        jobTitle: "Abogado",
        address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
      },
      publisher: { "@type": "LegalService", name: SITE_CONFIG.name, url: SITE_CONFIG.canonicalUrl },
      inLanguage: "es-AR",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_CONFIG.canonicalUrl },
        { "@type": "ListItem", position: 2, name: "Reclamo autoplan Renault", item: `${SITE_CONFIG.canonicalUrl}/autoplan-renault` },
      ],
    },
  ],
};

export default function AutoplanRenaultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <SeoHero
          title="Reclamo de autoplan Renault: qué hacer cuando el auto no llega"
          titleHighlight="autoplan Renault"
          description="Si pagaste cuotas de tu plan de ahorro Renault y el vehículo no llegó, tenés opciones para evaluar tu situación. La consulta es gratuita y completamente remota."
          secondaryLabel="Volver al inicio"
          secondaryHref="/"
        />

        <div className="wrap-narrow" style={{ paddingBlock: "clamp(48px,7vw,88px)" }}>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid var(--line)" }}>
            Los planes de ahorro Renault son muy utilizados en Argentina. Cuando la entrega
            se dilata sin explicaciones claras, muchos suscriptores no saben si tienen
            herramientas para reclamar o si simplemente deben seguir esperando. En muchos
            casos, hay opciones concretas disponibles.
          </p>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Situaciones frecuentes</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Problemas comunes en planes de ahorro Renault
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              Entre los casos de planes Renault que llegan a consulta, los más frecuentes son:
              demoras en la entrega después de la adjudicación, cambios en el modelo o la versión
              acordada, falta de información por parte de la concesionaria, y presión para aceptar
              condiciones distintas a las del contrato original.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              En todos estos casos, el primer paso es analizar qué dice el contrato, cuánto
              tiempo lleva la demora y qué comunicaciones hubo. Con esa información se puede
              determinar qué opciones son viables.
            </p>
            <div className="callout">
              <h3>¿Te cambiaron el modelo o la versión?</h3>
              <p>
                Si el plan original especificaba un vehículo y la empresa pretende entregarte
                uno diferente sin tu consentimiento, es una situación que vale la pena analizar.
                Podría ser relevante a efectos del reclamo.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Cómo funciona</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Cómo se analiza un caso de autoplan Renault
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              La consulta inicial se hace por WhatsApp, sin costo y de forma remota. Se analiza
              la documentación disponible (contrato, pagos, comunicaciones) y se explican
              claramente las opciones: qué se puede hacer, cómo, y cuánto tiempo podría
              llevar cada camino.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              No hace falta tener todo reunido para consultar. Se puede empezar con lo que
              tengas disponible.
            </p>
          </section>

          <CtaBox
            heading="¿Tu plan de ahorro Renault está demorado?"
            description={`Consultá con ${SITE_CONFIG.lawyer} sin costo. Te orientamos sobre qué opciones tenés según tu situación particular.`}
            buttonLabel="Consultar ahora"
          />

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de autoplan Renault" />
          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`¿Plan de ahorro Renault demorado? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Análisis del caso sin costo inicial. Escribinos por WhatsApp y te orientamos en minutos."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
