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
  title: "Reclamo autoplan Mendoza: qué hacer si no te entregan el auto",
  description:
    "Reclamos por autoplanes en Mendoza. Consultá tu caso si hay demoras, incumplimientos o la empresa no responde.",
  keywords: [
    "reclamo autoplan mendoza",
    "abogado autoplan mendoza",
    "demora entrega autoplan mendoza",
    "plan ahorro mendoza",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/autoplan-mendoza`,
  },
  openGraph: {
    title: "Reclamo autoplan Mendoza: qué hacer si no te entregan el auto",
    description:
      "Reclamos por autoplanes en Mendoza. Consultá tu caso si hay demoras, incumplimientos o la empresa no responde.",
    url: `${SITE_CONFIG.canonicalUrl}/autoplan-mendoza`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo consultar desde Mendoza si el abogado está en Córdoba?",
    answer:
      "Sí. Nicolás Silva atiende toda Argentina de forma remota. La consulta se hace por WhatsApp o correo electrónico, sin necesidad de trasladarte ni de que el abogado viaje a Mendoza. El proceso completo se gestiona a distancia.",
  },
  {
    question: "¿El reclamo de autoplan se rige por leyes provinciales o nacionales?",
    answer:
      "El marco normativo que regula los planes de ahorro es de alcance nacional. Eso significa que las herramientas de reclamo disponibles son las mismas independientemente de la provincia donde esté el suscriptor.",
  },
  {
    question: "¿Qué pasa si la administradora del autoplan está en otra provincia y yo soy de Mendoza?",
    answer:
      "Es algo que se analiza dentro del caso. La ubicación de las partes puede ser relevante para definir qué estrategia es más conveniente, pero no es un obstáculo para iniciar la consulta ni para avanzar con el reclamo.",
  },
  {
    question: "¿Cuánto tiempo tengo para reclamar desde que ocurrió el incumplimiento?",
    answer:
      "Existen plazos de prescripción que varían según el tipo de acción que se quiera ejercer. Por eso es conveniente no demorar la consulta. Cuanto antes se analice el caso, más opciones suelen estar disponibles.",
  },
  {
    question: "¿Sirve de algo haber hecho un reclamo previo ante la empresa o en organismos de consumo?",
    answer:
      "Sí, y de hecho esos antecedentes pueden ser útiles. Los reclamos previos —aunque no hayan dado resultado— documentan la situación y pueden ser relevantes al evaluar los pasos siguientes.",
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
    href: "/autoplan-buenos-aires",
    label: "Reclamo autoplan Buenos Aires",
    description: "Información sobre reclamos de autoplan para personas en Buenos Aires.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Reclamo autoplan Mendoza: qué hacer si no te entregan el auto",
      description:
        "Guía para personas de Mendoza con problemas en autoplanes. Cómo funciona el reclamo, qué documentación reunir y cómo consultar de forma remota.",
      url: `${SITE_CONFIG.canonicalUrl}/autoplan-mendoza`,
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
          name: "Reclamo autoplan Mendoza",
          item: `${SITE_CONFIG.canonicalUrl}/autoplan-mendoza`,
        },
      ],
    },
  ],
};

export default function AutoplanMendozaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Reclamo de autoplan en Mendoza: qué hacer si la empresa no cumple"
          titleHighlight="Mendoza"
          description="Si tenés un autoplan en Mendoza y no te entregan el vehículo o la empresa no responde, hay opciones concretas para analizar tu situación. Atención remota para toda la provincia."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            El incumplimiento en la entrega de autos de plan de ahorro es un problema que
            afecta a suscriptores en todo el país, incluyendo Mendoza. Muchas personas llevan
            meses esperando su vehículo sin obtener respuestas claras de la administradora o
            la concesionaria. Conocer las opciones disponibles es el primer paso para saber
            cómo actuar.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="atencion-remota" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Cómo funciona la atención
            </p>
            <h2 id="atencion-remota" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Atención remota desde Mendoza
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              {SITE_CONFIG.lawyer} es abogado matriculado en Córdoba especializado en reclamos
              de autoplanes. Atiende casos de todo el país de forma remota, lo que significa
              que si estás en Mendoza podés consultar tu situación sin moverte ni viajar.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              La consulta inicial, el análisis del contrato y la documentación, y el seguimiento
              del caso se hacen por medios digitales. No hay necesidad de presencia física para
              ninguna etapa del proceso.
            </p>
            <div className="flex items-start gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Atención en toda Argentina.</span>{" "}
                Mendoza, San Rafael, San Martín, Godoy Cruz o cualquier punto de la provincia.
                La distancia no es un obstáculo.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="situaciones-frecuentes" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Casos más comunes
            </p>
            <h2 id="situaciones-frecuentes" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Situaciones que más se consultan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Los problemas en autoplanes suelen seguir patrones reconocibles. Estas son las
              situaciones que aparecen con mayor frecuencia en los casos que llegan a consulta:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "La empresa comprometió una fecha de entrega que no cumplió y sigue dilatando",
                "Abonaste cuotas durante meses o años y el vehículo todavía no llegó",
                "Te cambiaron el modelo, el precio o las condiciones del contrato sin acordarlo con vos",
                "La administradora o la concesionaria no responde o da información contradictoria",
                "Te entregaron papeles para firmar sin explicarte bien qué implicaban para tu reclamo",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Importante:</span> No todas las
                situaciones son iguales. Lo relevante es analizar el caso concreto antes de
                asumir que no hay nada por hacer.
              </p>
            </div>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Tenés un reclamo de autoplan en Mendoza?"
            description={`Consultá tu caso con ${SITE_CONFIG.lawyer} por WhatsApp. Sin costo y sin compromiso.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="como-avanzar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Primeros pasos
            </p>
            <h2 id="como-avanzar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo se analiza un caso de autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              El proceso empieza con una consulta sin costo. En esa instancia se revisan los
              datos clave del caso: qué dice el contrato, qué se pagó, qué comunicaciones
              hubo y qué opciones están disponibles según esa información.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                { icon: <FileText className="w-5 h-5 text-blue-500" />, step: "01", title: "Contás tu caso", body: "Por WhatsApp o correo. Explicás la situación con tu autoplan en Mendoza sin necesidad de formularios." },
                { icon: <Clock className="w-5 h-5 text-amber-500" />, step: "02", title: "Se revisa el caso", body: "Se analiza la documentación disponible y se evalúa la situación desde el punto de vista legal." },
                { icon: <AlertTriangle className="w-5 h-5 text-green-500" />, step: "03", title: "Recibís orientación", body: "Te explicamos qué opciones tenés y cómo se podría avanzar según tu situación concreta." },
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
              Documentación que ayuda al análisis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cuanta más información disponible, más completo puede ser el análisis. Pero si
              no tenés todo reunido no es un problema para la primera consulta.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "El documento donde figuran las condiciones originales del plan" },
                { doc: "Comprobantes de pago", note: "Cuotas abonadas, integración u otros pagos realizados al plan" },
                { doc: "Comunicaciones con la empresa", note: "Mensajes de WhatsApp, correos, cartas o notificaciones recibidas" },
                { doc: "Fechas de entrega comprometidas", note: "Por escrito, email u otro formato que permita documentarlas" },
                { doc: "Número de grupo y orden del plan", note: "Datos administrativos necesarios para ubicar el expediente" },
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
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos de autoplan en Mendoza" />

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
        heading={`¿Tenés un reclamo de autoplan en Mendoza? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés, sin importar desde dónde consultes."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
