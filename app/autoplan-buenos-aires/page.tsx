import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, AlertTriangle, CheckCircle2, FileText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reclamo autoplan Buenos Aires: cómo reclamar si no te entregan el auto",
  description:
    "Si tenés un reclamo de autoplan en Buenos Aires y no te entregan el vehículo, conocé qué opciones tenés y cómo consultar tu caso.",
  keywords: [
    "reclamo autoplan buenos aires",
    "abogado autoplan buenos aires",
    "demora entrega autoplan buenos aires",
    "plan ahorro incumplimiento buenos aires",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-buenos-aires`,
  },
  openGraph: {
    title: "Reclamo autoplan Buenos Aires: cómo reclamar si no te entregan el auto",
    description:
      "Si tenés un reclamo de autoplan en Buenos Aires y no te entregan el vehículo, conocé qué opciones tenés y cómo consultar tu caso.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-buenos-aires`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo consultar desde Buenos Aires si el abogado está en Córdoba?",
    answer:
      "Sí. Nicolás Silva atiende toda Argentina de forma remota. La consulta, el análisis del caso y el seguimiento se hacen a distancia, sin necesidad de que te muevas. Muchos clientes de Buenos Aires ya gestionaron su reclamo de esta manera.",
  },
  {
    question: "¿Los reclamos de autoplan en Buenos Aires tienen alguna particularidad?",
    answer:
      "El marco legal que regula los planes de ahorro es nacional, por lo que las herramientas disponibles son las mismas en todo el país. Lo que puede variar es la empresa administradora o la concesionaria involucrada, pero eso se analiza caso por caso.",
  },
  {
    question: "¿Qué pasa si la concesionaria está en el interior y yo soy de Buenos Aires?",
    answer:
      "Es una situación que se presenta con frecuencia. El análisis del caso contempla dónde están las partes involucradas y qué opciones son más convenientes según esa geografía. No es un impedimento para avanzar.",
  },
  {
    question: "¿Cuánto tiempo tengo para reclamar?",
    answer:
      "Hay plazos que se deben tener en cuenta según el tipo de acción que se quiera ejercer. Por eso conviene consultar antes de que pase demasiado tiempo desde que surgió el problema. Una consulta temprana da más margen para evaluar opciones.",
  },
  {
    question: "¿Puedo reclamar aunque haya firmado una prórroga?",
    answer:
      "No necesariamente queda sin opciones por haber firmado algo. En algunos casos esas firmas se obtienen sin información suficiente o en contextos de presión. Vale la pena revisar cómo ocurrió antes de asumir que no hay nada por hacer.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Qué tener en cuenta cuando el auto no aparece y cómo analizar el caso.",
  },
  {
    href: "/reclamo-plan-ahorro",
    label: "Reclamo por plan de ahorro",
    description: "Cómo evaluar tu caso y qué aspectos revisar antes de avanzar.",
  },
  {
    href: "/abogado-autoplan-cordoba",
    label: "Abogado de autoplan en Córdoba",
    description: "Conocé cómo trabaja Nicolás Silva y cómo consultar tu caso.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Reclamo autoplan Buenos Aires: cómo reclamar si no te entregan el auto",
      description:
        "Guía para personas de Buenos Aires con problemas en autoplanes. Cómo funciona el reclamo, qué documentación reunir y cómo consultar de forma remota.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-buenos-aires`,
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
          name: "Reclamo autoplan Buenos Aires",
          item: `${SITE_CONFIG.canonicalUrl}/autoplan-buenos-aires`,
        },
      ],
    },
  ],
};

export default function AutoplanBuenosAiresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Reclamo de autoplan en Buenos Aires: cómo avanzar si no te entregan el auto"
          titleHighlight="Buenos Aires"
          description="Las demoras y los incumplimientos en autoplanes afectan a personas en todo el país, incluida Buenos Aires. Si estás en esa situación, hay opciones concretas que vale la pena conocer."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Muchas personas de Buenos Aires se inscriben en planes de ahorro con la expectativa
            de recibir su vehículo en un plazo razonable. Cuando ese plazo no se cumple —y la
            empresa no da respuestas claras—, surge la pregunta de qué se puede hacer desde la
            distancia, sin necesidad de moverse a otra provincia ni enfrentar el proceso solo.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="atencion-remota" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Cómo funciona la atención
            </p>
            <h2 id="atencion-remota" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Atención remota para clientes de Buenos Aires
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              {SITE_CONFIG.lawyer} es abogado matriculado en Córdoba y atiende casos de toda
              Argentina de forma remota. Eso significa que si estás en Buenos Aires —o en
              cualquier punto del país— podés consultar tu caso sin moverte de donde estás.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              La consulta inicial, el análisis de la documentación y el seguimiento del caso se
              realizan por canales digitales. No hace falta presentarse en un estudio ni viajar
              a Córdoba para empezar.
            </p>
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Atención en toda Argentina.</span>{" "}
                El proceso se gestiona de forma digital. No importa desde qué provincia consultés.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="situaciones-frecuentes" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Casos más comunes
            </p>
            <h2 id="situaciones-frecuentes" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Situaciones frecuentes en planes de ahorro
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Independientemente de la provincia, los problemas en autoplanes suelen seguir
              patrones similares. Estas son las situaciones que más se repiten en los casos
              que llegan a consulta:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "La empresa prometió una fecha de entrega que no cumplió y la sigue postergando",
                "Pagaste cuotas durante meses o años y el vehículo no aparece",
                "Te cambiaron el modelo, el precio o las condiciones sin tu acuerdo",
                "La concesionaria o administradora no responde o da información confusa",
                "Te presionaron para firmar una prórroga sin explicarte bien qué implicaba",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Si reconocés alguna de estas situaciones, lo más útil es analizar el caso con
              detalle antes de asumir que no hay opciones o que todo está perdido.
            </p>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Tenés un reclamo de autoplan en Buenos Aires?"
            description={`Consultá tu caso con ${SITE_CONFIG.lawyer} por WhatsApp. Sin costo y sin compromiso.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="como-avanzar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Primeros pasos
            </p>
            <h2 id="como-avanzar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo avanzar con tu reclamo
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              El proceso comienza con una consulta sin costo. En esa instancia se analiza la
              situación concreta del suscriptor: qué dice el contrato, cuánto se pagó, qué
              comunicaciones hubo con la empresa y qué alternativas están disponibles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: <FileText className="w-5 h-5 text-blue-500" />, step: "01", title: "Contás tu caso", body: "Por WhatsApp, en pocos minutos, sin formularios. Explicás lo que está pasando con tu autoplan." },
                { icon: <Clock className="w-5 h-5 text-amber-500" />, step: "02", title: "Se analiza el caso", body: "Se revisan los documentos disponibles y se evalúa la situación desde el punto de vista legal." },
                { icon: <AlertTriangle className="w-5 h-5 text-green-500" />, step: "03", title: "Te orientamos", body: "Recibís una explicación clara de qué opciones tenés y cómo se podría avanzar." },
              ].map((card, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {card.icon}
                    <span className="text-xs font-bold text-slate-400">{card.step}</span>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] text-sm mb-1">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section aria-labelledby="documentacion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Qué tener a mano
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Documentación útil para el análisis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Tener documentación disponible permite hacer un análisis más completo. Pero no
              es un requisito para la primera consulta: podés escribir aunque no tengas todo reunido.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "El documento principal con las condiciones originales" },
                { doc: "Comprobantes de pago", note: "Cuotas abonadas, integración u otros pagos realizados" },
                { doc: "Comunicaciones con la empresa", note: "WhatsApp, emails, cartas o notificaciones recibidas" },
                { doc: "Fechas de entrega prometidas", note: "Por escrito, por email o cualquier formato documentado" },
                { doc: "Número de grupo y orden", note: "Datos administrativos del plan de ahorro" },
              ].map(({ doc, note }, i) => (
                <li key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                  <div>
                    <span className="text-[#0F172A] font-medium text-sm">{doc}</span>
                    <span className="text-slate-400 text-xs block">{note}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm">
              Si no tenés todo,{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
              >
                igual podés escribirnos
              </a>
              . Empezamos con lo que tengas.
            </p>
          </section>

          {/* FAQ */}
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de autoplan desde Buenos Aires" />

          {/* Internal link */}
          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés ver todos los tipos de casos que analizamos?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              En la página principal encontrás más información sobre cómo trabajamos y los
              resultados obtenidos.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm"
            >
              Ver landing principal →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`¿Tenés un reclamo de autoplan en Buenos Aires? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés, sin importar dónde estés."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
