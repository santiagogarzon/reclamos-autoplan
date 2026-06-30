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
  title: "Reclamo plan ahorro Volkswagen: qué hacer si no te entregan el auto",
  description:
    "Si tenés un plan de ahorro Volkswagen (VW) y no te entregan el vehículo, conocé tus opciones. Nicolás Silva, abogado especialista en reclamos de autoplanes en Argentina.",
  keywords: [
    "reclamo plan ahorro volkswagen",
    "demora autoplan vw",
    "plan de ahorro volkswagen incumplimiento",
    "abogado autoplan volkswagen",
    "vw plan ahorro argentina demora",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-volkswagen`,
  },
  openGraph: {
    title: "Reclamo plan ahorro Volkswagen: qué hacer si no te entregan el auto",
    description:
      "Plan de ahorro VW demorado. Conocé tus opciones y consultá tu caso gratis con abogado especialista.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-volkswagen`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo reclamar si tengo un plan de ahorro Volkswagen demorado?",
    answer:
      "Sí. Si cumpliste tus obligaciones como suscriptor y la entrega no se concretó en el plazo acordado, podés tener herramientas para reclamar. El análisis del caso permite determinar qué opciones son las más convenientes.",
  },
  {
    question: "¿VW Plan de Ahorro y Volkswagen son la misma empresa?",
    answer:
      "VW Plan de Ahorro es la administradora del plan, aunque está relacionada con Volkswagen Argentina. A efectos del reclamo, es importante identificar correctamente quiénes son las partes del contrato: la administradora, la concesionaria y el fabricante pueden tener roles distintos.",
  },
  {
    question: "¿Qué pasa si me ofrecen otro modelo en lugar del que pedí?",
    answer:
      "Un cambio de modelo sin tu acuerdo puede ser relevante a efectos legales, especialmente si el contrato especificaba el vehículo o si el cambio se hizo de forma unilateral. Es una situación que vale la pena analizar.",
  },
  {
    question: "¿Puedo reclamar si ya hice reclamos informales y no funcionaron?",
    answer:
      "Sí. Los reclamos previos (llamadas, emails, reclamos ante la empresa) forman parte del historial del caso y pueden ser útiles como evidencia. No haberlos hecho no impide avanzar, pero haberlos hecho sí puede ayudar.",
  },
  {
    question: "¿Cuánto tarda un proceso de este tipo?",
    answer:
      "Depende del camino elegido y de las circunstancias del caso. Algunos se resuelven rápido mediante negociación directa; otros requieren instancias más formales. Eso se evalúa caso por caso en la consulta inicial.",
  },
];

const relatedPages = [
  {
    href: "/autoplan-fiat",
    label: "Demora en autoplan Fiat",
    description: "Información y opciones para planes de ahorro Fiat.",
  },
  {
    href: "/autoplan-chevrolet",
    label: "Demora en autoplan Chevrolet",
    description: "Cómo analizar tu caso si el plan es de Chevrolet.",
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
      headline: "Reclamo plan ahorro Volkswagen: qué hacer si no te entregan el auto",
      description: "Guía para personas con planes de ahorro VW que enfrentan demoras en la entrega del vehículo.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-volkswagen`,
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
        { "@type": "ListItem", position: 2, name: "Reclamo autoplan Volkswagen", item: `${SITE_CONFIG.canonicalUrl}/autoplan-volkswagen` },
      ],
    },
  ],
};

export default function AutoplanVolkswagenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <SeoHero
          title="Reclamo plan de ahorro Volkswagen: qué hacer si no te entregan el auto"
          titleHighlight="Volkswagen"
          description="Los planes de ahorro VW son muy populares en Argentina. Si el tuyo está demorado y no obtenés respuestas claras, hay opciones concretas para avanzar."
          secondaryLabel="Volver al inicio"
          secondaryHref="/"
        />

        <div className="wrap-narrow" style={{ paddingBlock: "clamp(48px,7vw,88px)" }}>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid var(--line)" }}>
            Los planes de ahorro Volkswagen tienen una enorme presencia en el mercado argentino.
            Cuando la entrega se demora sin explicación, muchos suscriptores no saben si
            tienen herramientas para reclamar. La respuesta, en muchos casos, es sí.
          </p>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Situaciones frecuentes</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Problemas comunes en planes de ahorro VW
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              En los planes VW, las situaciones más frecuentes que llegan a consulta son:
              demoras reiteradas sin justificación, cambios de modelo o versión sin consentimiento,
              falta de información por parte de la concesionaria o administradora, y presión para
              aceptar condiciones distintas a las originales.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              En varios de estos casos, el suscriptor tiene más opciones de las que cree. La
              clave está en analizar lo que dice el contrato y el historial de comunicaciones.
            </p>
            <div className="callout">
              <h3>Importante: guardá todo por escrito</h3>
              <p>
                Cualquier comunicación con la concesionaria o administradora —por WhatsApp, email o
                carta— puede ser útil si decidís avanzar con un reclamo. Cuanto más registros tengas,
                mejor.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Cómo funciona</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              El proceso de consulta y análisis
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              El primer paso es una consulta sin costo. Se analizan las particularidades del plan,
              los pagos realizados, el tiempo de demora y las comunicaciones disponibles. Con esa
              información, se determina qué opciones son viables y cuál tiene más sentido según el caso.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              Todo se hace de forma remota. No importa en qué provincia estés ni dónde esté
              la concesionaria VW: el proceso se gestiona digitalmente.
            </p>
          </section>

          <CtaBox
            heading="¿Tu plan de ahorro VW está demorado?"
            description={`Consultá con ${SITE_CONFIG.lawyer} sin costo. Analizamos tu caso y te orientamos sobre qué opciones tenés.`}
            buttonLabel="Consultar ahora"
          />

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de plan de ahorro Volkswagen" />
          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`¿Plan de ahorro VW demorado? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Análisis del caso sin costo inicial. Escribinos por WhatsApp y te orientamos en minutos."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
