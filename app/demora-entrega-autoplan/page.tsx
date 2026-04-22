import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, FileText, CheckCircle2, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Demora en la entrega de autoplan: qué hacer y cuándo reclamar",
  description:
    "Si te demoraron la entrega de tu auto de autoplan, conocé qué tener en cuenta, cuándo podría haber incumplimiento y cómo consultar tu caso.",
  keywords: [
    "demora entrega autoplan",
    "demora entrega auto plan ahorro",
    "no me entregan el auto autoplan",
    "reclamo por demora autoplan",
    "cuánto tarda entrega autoplan",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/demora-entrega-autoplan`,
  },
  openGraph: {
    title: "Demora en la entrega de autoplan: qué hacer y cuándo reclamar",
    description:
      "Conocé cuándo una demora en la entrega de tu autoplan puede ser un incumplimiento y cómo evaluar tu caso.",
    url: `${SITE_CONFIG.canonicalUrl}/demora-entrega-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Existe un plazo máximo para la entrega de un auto de autoplan?",
    answer:
      "No hay un plazo único establecido por ley, ya que depende de las condiciones de cada contrato. Sin embargo, cuando la empresa ofrece o comunica una fecha de entrega y no la cumple, esa promesa puede tener relevancia al momento de evaluar si hubo incumplimiento.",
  },
  {
    question: "¿Qué diferencia hay entre una demora aceptable y un incumplimiento?",
    answer:
      "Una demora puede ser razonable si obedece a causas ajenas y la empresa comunica activamente al suscriptor. Se convierte en algo más serio cuando no hay información, los plazos se corren reiteradamente sin justificación, o se cambian condiciones sin acuerdo del consumidor.",
  },
  {
    question: "¿Puedo pedir la devolución de lo pagado si no me entregan el auto?",
    answer:
      "Depende de la situación concreta y del análisis del caso. Hay distintas vías que pueden evaluarse, y en algunos escenarios la devolución es una de las opciones posibles. Lo más útil es revisar el caso antes de asumir que no hay alternativas.",
  },
  {
    question: "¿Qué pasa si firmé una prórroga de entrega?",
    answer:
      "Haber firmado una prórroga no necesariamente cierra todas las puertas. En algunos casos esas firmas se obtienen en contextos de presión o sin información clara. Vale la pena revisar cómo fue el proceso antes de asumir que no hay nada que hacer.",
  },
  {
    question: "¿Tengo que esperar a que venza el nuevo plazo para consultar?",
    answer:
      "No. Podés consultar tu caso en cualquier momento. De hecho, hacerlo temprano permite entender mejor las opciones disponibles y actuar con más margen.",
  },
];

const relatedPages = [
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
      headline: "Demora en la entrega de autoplan: qué hacer y cuándo reclamar",
      description:
        "Guía práctica sobre demoras en la entrega de autos por planes de ahorro en Argentina. Señales de alerta, documentación y cómo evaluar tu situación.",
      url: `${SITE_CONFIG.canonicalUrl}/demora-entrega-autoplan`,
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
          name: "Demora en la entrega de autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/demora-entrega-autoplan`,
        },
      ],
    },
  ],
};

export default function DemoraEntregaAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Demora en la entrega de tu autoplan: qué hacer y cuándo reclamar"
          titleHighlight="autoplan"
          description="Las demoras en la entrega de autos de plan de ahorro son una de las consultas más frecuentes. Muchas personas no saben si lo que viven es una demora normal o algo que ya merece revisión."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Cuando alguien ingresa a un plan de ahorro, lo hace con la expectativa de recibir su
            vehículo en determinadas condiciones. Pero en la práctica, muchas personas se
            encuentran con que pasan los meses —a veces años— sin que el auto aparezca, y sin
            que la empresa brinde información clara. En ese punto, es válido preguntarse qué
            está pasando y qué se puede hacer.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="cuando-es-problema" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Entendiendo la situación
            </p>
            <h2 id="cuando-es-problema" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              ¿Cuándo una demora puede ser un problema?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              No toda demora en un autoplan implica automáticamente un incumplimiento. Existen
              situaciones que pueden explicar ciertos retrasos. Pero hay circunstancias en las
              que la demora deja de ser razonable y empieza a ser un problema concreto para el
              consumidor.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Algunos elementos que hacen que una demora sea más seria:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "La empresa ofreció una fecha de entrega concreta y no la cumplió",
                "El plazo original del contrato ya venció sin justificación válida",
                "Las condiciones del plan cambiaron sin tu consentimiento",
                "No recibís información sobre el estado real de tu grupo o adjudicación",
                "Te piden que firmes prorrogas sin explicar qué estás firmando",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Importante:</span> La situación
                de cada persona es distinta. Lo que importa es revisar el caso puntual, no
                aplicar reglas generales sin conocer los detalles.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="senales-alerta" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que vale la pena revisar
            </p>
            <h2 id="senales-alerta" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Señales de alerta frecuentes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              En los casos que llegan a consulta, hay patrones que se repiten. Si reconocés
              alguno de estos en tu situación, es un indicador de que vale la pena analizar
              el caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: <Clock className="w-5 h-5 text-amber-500" />, title: "Plazos que se van corriendo", body: "Te dan una fecha, y cuando se acerca, la mueven para adelante sin dar explicaciones claras." },
                { icon: <AlertTriangle className="w-5 h-5 text-red-500" />, title: "Silencio de la empresa", body: "Llamás, escribís y no obtenés respuesta concreta sobre tu caso ni sobre el estado del vehículo." },
                { icon: <FileText className="w-5 h-5 text-blue-500" />, title: "Cambios en las condiciones", body: "Te informan modificaciones en el precio, el modelo u otras condiciones que no estaban en el contrato original." },
                { icon: <AlertTriangle className="w-5 h-5 text-orange-500" />, title: "Presión para firmar", body: "Te piden que firmes documentos sin explicar bien qué significan o qué efectos tienen para tu reclamo futuro." },
              ].map((card, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {card.icon}
                    <h3 className="font-semibold text-[#0F172A] text-sm">{card.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Reconocés alguna de estas situaciones?"
            description={`Podés contarle tu caso a ${SITE_CONFIG.lawyer} por WhatsApp. Sin costo y sin compromiso.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="documentacion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Si querés estar preparado
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué documentación conviene reunir
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Tener documentación disponible ayuda a analizar el caso más rápido y con más
              detalle. Pero no es un requisito para hacer una primera consulta.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "El documento principal donde figuran las condiciones" },
                { doc: "Comprobantes de pago", note: "Cuotas pagas, integración, o cualquier pago realizado" },
                { doc: "Comunicaciones con la empresa", note: "Mensajes de WhatsApp, emails, cartas o notificaciones" },
                { doc: "Promesas de entrega documentadas", note: "Fechas comprometidas por escrito o de forma fehaciente" },
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
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre demoras en autoplanes" />

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
        heading={`¿Tuviste una demora en tu autoplan? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
