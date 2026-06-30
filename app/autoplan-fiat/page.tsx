import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demora en autoplan Fiat: cómo reclamar si no te entregan el auto",
  description:
    "Si tenés un plan de ahorro Fiat y no te entregan el vehículo, conocé tus opciones. Nicolás Silva, abogado especialista en reclamos de autoplanes en Argentina.",
  keywords: [
    "demora autoplan fiat",
    "reclamo plan ahorro fiat",
    "plan de ahorro fiat incumplimiento",
    "abogado autoplan fiat",
    "fiat credito argentina demora",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-fiat`,
  },
  openGraph: {
    title: "Demora en autoplan Fiat: cómo reclamar si no te entregan el auto",
    description:
      "Si tenés un plan de ahorro Fiat y no te entregan el vehículo, conocé tus opciones. Consulta gratuita con abogado especialista.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-fiat`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo reclamar si tengo un plan de ahorro Fiat y no me entregaron el auto?",
    answer:
      "Sí. Si cumpliste con los pagos y la entrega no se concretó en el plazo acordado o comunicado, podés tener herramientas para reclamar. La situación concreta se analiza caso por caso, pero el hecho de que Fiat sea una empresa grande no impide avanzar.",
  },
  {
    question: "¿Qué diferencia hay entre reclamar a la concesionaria y a la administradora del plan Fiat?",
    answer:
      "Son dos partes distintas. La administradora gestiona el grupo de ahorro y los fondos; la concesionaria entrega el vehículo. Según las circunstancias, el reclamo puede ir dirigido a una, a la otra o a ambas. Eso se define al analizar el caso.",
  },
  {
    question: "¿Fiat Crédito y el plan de ahorro son lo mismo?",
    answer:
      "No necesariamente. Los planes de ahorro vehicular de Fiat pueden estar administrados por distintas entidades. Es importante revisar el contrato para identificar quién es la administradora antes de avanzar con cualquier reclamo.",
  },
  {
    question: "¿Puedo consultar desde cualquier provincia aunque mi concesionaria Fiat esté en otra ciudad?",
    answer:
      "Sí. La atención es completamente remota. No importa dónde estés ni dónde esté la concesionaria: el análisis del caso se hace de forma digital y sin que tengas que moverte.",
  },
  {
    question: "¿Qué pasa si Fiat me ofrece una compensación para que no reclame?",
    answer:
      "Antes de aceptar cualquier oferta conviene consultarla con un profesional. En algunos casos las compensaciones son inferiores a lo que correspondería. Una consulta previa te permite evaluar si lo que ofrecen es razonable o no.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Qué tener en cuenta cuando el auto no aparece.",
  },
  {
    href: "/autoplan-volkswagen",
    label: "Demora en autoplan Volkswagen",
    description: "Información y opciones para planes de ahorro VW.",
  },
  {
    href: "/autoplan-chevrolet",
    label: "Demora en autoplan Chevrolet",
    description: "Cómo analizar tu caso si el plan es de Chevrolet.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Demora en autoplan Fiat: cómo reclamar si no te entregan el auto",
      description:
        "Guía para personas con planes de ahorro Fiat que enfrentan demoras. Qué opciones existen y cómo consultar.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-fiat`,
      author: {
        "@type": "Person",
        name: SITE_CONFIG.lawyer,
        jobTitle: "Abogado",
        address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
      },
      publisher: {
        "@type": "LegalService",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.canonicalUrl,
      },
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Demora autoplan Fiat",
          item: `${SITE_CONFIG.canonicalUrl}/autoplan-fiat`,
        },
      ],
    },
  ],
};

export default function AutoplanFiatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Demora en autoplan Fiat: qué podés hacer si no te entregan el vehículo"
          titleHighlight="autoplan Fiat"
          description="Muchas personas con planes de ahorro Fiat enfrentan demoras sin explicación. Si eso te está pasando, hay opciones concretas que vale la pena conocer antes de resignarte."
          secondaryLabel="Volver al inicio"
          secondaryHref="/"
        />

        <div className="wrap-narrow" style={{ paddingBlock: "clamp(48px,7vw,88px)" }}>

          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid var(--line)" }}>
            Los planes de ahorro Fiat son uno de los más utilizados en Argentina, y también
            uno de los que concentra mayor cantidad de reclamos por demoras en la entrega.
            Si ya integraste o pagaste cuotas y el vehículo no llegó, es importante
            entender qué opciones tenés antes de seguir esperando sin información.
          </p>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Por qué se demoran</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Causas frecuentes de demora en planes de ahorro Fiat
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              Las demoras en autoplanes Fiat pueden tener distintas causas: problemas en la
              producción, falta de stock del modelo solicitado, cambios en la administración
              del grupo, o simplemente una mala coordinación entre la fábrica, la administradora
              y la concesionaria.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              El problema es que muchas veces estas causas no se comunican con claridad al
              suscriptor, que sigue pagando sus cuotas sin saber cuándo va a recibir el auto.
              Esa falta de información, combinada con el tiempo que pasa, puede configurar un
              incumplimiento.
            </p>
            <div className="callout">
              <h3>¿Cuánto tiempo de demora es "demasiado"?</h3>
              <p>
                No hay un número fijo: depende de lo que dice el contrato y de las comunicaciones
                que hubo. Lo que sí importa es si la empresa cumplió con sus obligaciones de
                informar y de respetar los plazos comprometidos. Eso se analiza en cada caso.
              </p>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Qué podés hacer</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Opciones disponibles si tu autoplan Fiat está demorado
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              Dependiendo del caso, puede haber distintas vías para avanzar: un reclamo directo
              ante la administradora o concesionaria, una acción ante organismos de defensa del
              consumidor, o la vía judicial si el incumplimiento lo justifica.
            </p>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>
              En cualquier caso, el primer paso es analizar la situación: qué dice el contrato,
              cuánto se pagó, qué comunicaciones hubo y cuánto tiempo lleva la demora. Con esa
              información, es posible determinar qué camino tiene más sentido.
            </p>
          </section>

          <CtaBox
            heading="¿Tenés un plan de ahorro Fiat demorado?"
            description={`Consultá tu caso con ${SITE_CONFIG.lawyer} por WhatsApp. Sin costo inicial y sin compromiso.`}
            buttonLabel="Consultar ahora"
          />

          <section style={{ marginBottom: "48px" }}>
            <span className="eyebrow" style={{ marginBottom: "16px" }}>Qué tener a mano</span>
            <h2 style={{ fontSize: "clamp(24px,2.8vw,32px)", color: "var(--ink)", margin: "12px 0 18px" }}>
              Documentación útil para analizar tu caso
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
              Si tenés alguno de estos documentos, el análisis puede ser más rápido y completo.
              Pero podés consultar aunque no tengas todo reunido.
            </p>
            <ul className="doc-list">
              {[
                "Contrato o solicitud de adhesión al plan de ahorro Fiat",
                "Comprobantes de pago o constancia de integración",
                "Comunicaciones con la concesionaria o administradora",
                "Fechas de entrega prometidas (escritas o por mensaje)",
                "Número de grupo y orden del plan",
              ].map((doc, i) => (
                <li key={i} className="doc-item">
                  <svg className="di-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de autoplan Fiat" />

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`¿Tenés un autoplan Fiat demorado? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
