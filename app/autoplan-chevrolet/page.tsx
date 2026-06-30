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
  title: "Demora autoplan Chevrolet: cómo reclamar si no te entregan el vehículo",
  description:
    "Si tenés un plan de ahorro Chevrolet y no recibís el auto, conocé tus derechos. Nicolás Silva, abogado especialista en reclamos de planes de ahorro en Argentina.",
  keywords: [
    "demora autoplan chevrolet",
    "reclamo plan ahorro chevrolet",
    "plan de ahorro chevrolet incumplimiento",
    "abogado autoplan chevrolet",
    "chevrolet plan ahorro argentina",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-chevrolet`,
  },
  openGraph: {
    title: "Demora autoplan Chevrolet: cómo reclamar si no te entregan el vehículo",
    description:
      "Plan de ahorro Chevrolet demorado. Consultá tu caso gratis con abogado especialista en reclamos de autoplanes.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-chevrolet`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo reclamar si mi autoplan Chevrolet lleva meses demorado?",
    answer:
      "Sí, siempre que hayas cumplido con tus pagos y la empresa no haya entregado el vehículo en el plazo comprometido. La cantidad de meses de demora es uno de los factores que se analiza al evaluar el caso.",
  },
  {
    question: "¿Qué organismos administran los planes de ahorro Chevrolet en Argentina?",
    answer:
      "Los planes Chevrolet pueden estar administrados por distintas entidades. Es importante revisar el contrato para saber exactamente con quién firmaste, ya que el reclamo se dirige a la administradora correspondiente.",
  },
  {
    question: "¿Puedo reclamar si me adjudicaron pero no me entregaron?",
    answer:
      "Sí. La adjudicación implica que ya tenés derecho a recibir el vehículo. Si después de la adjudicación la entrega no se concreta, es una de las situaciones más claras para analizar un reclamo.",
  },
  {
    question: "¿Tengo que ir a Córdoba para hacer la consulta?",
    answer:
      "No. La atención es completamente remota. Podés consultar desde cualquier provincia de Argentina sin moverte de donde estás.",
  },
  {
    question: "¿Qué pasa si la concesionaria Chevrolet cerró o cambió de manos?",
    answer:
      "Es una situación que puede complicar el trámite pero no necesariamente lo impide. En estos casos es importante revisar quién está a cargo de la administración del plan y si hay otras partes involucradas a quienes dirigir el reclamo.",
  },
];

const relatedPages = [
  {
    href: "/autoplan-fiat",
    label: "Demora en autoplan Fiat",
    description: "Información y opciones para planes de ahorro Fiat.",
  },
  {
    href: "/autoplan-renault",
    label: "Demora en autoplan Renault",
    description: "Cómo analizar tu caso si el plan es de Renault.",
  },
  {
    href: "/salir-del-autoplan",
    label: "Cómo salir de un autoplan",
    description: "Opciones para desvincularte de un plan de ahorro.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Demora autoplan Chevrolet: cómo reclamar si no te entregan el vehículo",
      description: "Guía para personas con planes de ahorro Chevrolet que enfrentan demoras en la entrega.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-chevrolet`,
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
        { "@type": "ListItem", position: 2, name: "Demora autoplan Chevrolet", item: `${SITE_CONFIG.canonicalUrl}/autoplan-chevrolet` },
      ],
    },
  ],
};

export default function AutoplanChevroletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <SeoHero
          title="Demora en autoplan Chevrolet: qué podés hacer si el auto no llega"
          titleHighlight="autoplan Chevrolet"
          description="Si tu plan de ahorro Chevrolet está demorado y no obtenés respuestas, no estás solo. Hay opciones concretas para evaluar tu situación y entender cómo avanzar."
          secondaryLabel="Volver al inicio"
          secondaryHref="/"
        />

        <div className="wrap-narrow" style={{ paddingBlock: "clamp(48px,7vw,88px)" }}>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid var(--line)" }}>
            Los planes de ahorro Chevrolet tienen una presencia significativa en el mercado
            argentino. Cuando la entrega se demora meses —o años— sin una explicación razonable,
            muchos suscriptores terminan aceptando esa situación sin saber que pueden hacer algo al respecto.
          </p>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Qué analizar</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Cuándo una demora en Chevrolet se convierte en incumplimiento
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              No toda demora implica automáticamente un incumplimiento, pero hay señales que sí
              indican un problema: fechas comprometidas que no se cumplen, falta de información
              clara, cambios en el plan sin consentimiento, o imposibilidad de comunicarse con
              la administradora o la concesionaria.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              Si alguna de esas situaciones te resulta familiar, lo más útil es hacer una
              consulta para analizar el caso con los documentos disponibles.
            </p>
            <div className="callout">
              <h3>La adjudicación es clave</h3>
              <p>
                Si ya te adjudicaron el vehículo pero no lo entregaron, tu posición para reclamar
                es más sólida. La adjudicación reconoce formalmente que tenés derecho al auto.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Primeros pasos</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Cómo empezar a evaluar tu caso
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              El primer paso es reunir lo que tengas disponible: el contrato original, los
              comprobantes de pago o integración, y cualquier comunicación con la empresa.
              No hace falta tenerlo todo para consultar.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              La consulta inicial es sin costo y se hace de forma remota. En esa instancia se
              analiza la situación y se explican las opciones disponibles.
            </p>
          </section>

          <CtaBox
            heading="¿Tu autoplan Chevrolet está demorado?"
            description={`Consultá con ${SITE_CONFIG.lawyer} sin costo inicial. Te orientamos sobre qué opciones tenés según tu caso particular.`}
            buttonLabel="Consultar ahora"
          />

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de autoplan Chevrolet" />
          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`¿Autoplan Chevrolet demorado? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Análisis del caso sin costo inicial. Escribinos por WhatsApp y te orientamos en minutos."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
