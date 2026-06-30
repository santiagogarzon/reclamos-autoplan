import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileText, AlertTriangle, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cómo salir de un autoplan: opciones y qué evaluar antes de decidir",
  description:
    "Si querés salir de tu autoplan o cancelar el plan de ahorro, conocé qué opciones existen, qué implica cada una y cómo evaluar tu situación.",
  keywords: [
    "salir del autoplan",
    "cancelar autoplan",
    "rescindir plan de ahorro",
    "cómo salir de un plan de ahorro",
    "baja autoplan argentina",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
  },
  openGraph: {
    title: "Cómo salir de un autoplan: opciones y qué evaluar antes de decidir",
    description:
      "Conocé qué opciones existen para salir de un autoplan, qué implica cada una y cómo evaluar tu situación antes de decidir.",
    url: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo salir de un autoplan en cualquier momento?",
    answer:
      "En general sí, pero las condiciones y consecuencias varían según el contrato y el momento en que se encuentre el plan. Algunas opciones implican penalidades, otras pueden evaluarse desde un ángulo distinto si hubo incumplimientos de la empresa. Lo más útil es revisar el caso puntual antes de tomar una decisión.",
  },
  {
    question: "¿Qué diferencia hay entre rescisión y cesión del plan?",
    answer:
      "La rescisión implica dar de baja el plan y, en principio, recibir la devolución de lo que corresponda según el contrato. La cesión, en cambio, consiste en transferir el plan a otra persona, que continúa pagando las cuotas. Cada opción tiene implicancias distintas en términos económicos y de tiempo.",
  },
  {
    question: "¿Pierdo todo lo que pagué si salgo del plan?",
    answer:
      "No necesariamente. Depende de en qué momento del plan estés, qué dice el contrato y si hubo o no incumplimientos por parte de la administradora. En algunos casos existen vías para recuperar parte o la totalidad de lo abonado. Vale la pena analizar el caso antes de asumir una pérdida total.",
  },
  {
    question: "¿Qué pasa si salgo del plan y la empresa no me devuelve nada?",
    answer:
      "Esa es una situación que puede evaluarse. Si el contrato establece una devolución y la empresa no la cumple, o si saliste del plan por incumplimientos de la administradora, hay herramientas para reclamar. Lo recomendable es no firmar acuerdos de baja sin revisar qué se está firmando.",
  },
  {
    question: "¿Necesito un abogado para salir del autoplan?",
    answer:
      "No siempre. Pero contar con asesoramiento puede ayudarte a entender qué opciones tenés, qué consecuencias implica cada una y si hay alguna vía que no estás considerando. En muchos casos, una consulta previa evita firmar algo que no conviene.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Qué hacer si el auto no llega y cómo evaluar tu situación.",
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
      headline: "Cómo salir de un autoplan: opciones y qué evaluar antes de decidir",
      description:
        "Guía sobre las opciones disponibles para salir de un plan de ahorro en Argentina: rescisión, cesión y reclamo. Documentación necesaria y consideraciones prácticas.",
      url: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
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
          name: "Salir del autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
        },
      ],
    },
  ],
};

export default function SalirDelAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Cómo salir de un autoplan: opciones y qué evaluar antes de decidir"
          titleHighlight="autoplan"
          description="Muchas personas que quieren salir de su plan de ahorro no saben bien qué opciones tienen ni qué implica cada una. Antes de tomar una decisión, conviene entender el panorama completo."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Salir de un autoplan puede parecer complicado, y en parte lo es: los contratos suelen
            ser extensos, las condiciones de salida no siempre están explicadas con claridad, y
            la empresa no siempre facilita el proceso. Sin embargo, existen distintas vías para
            desvincularseun plan, y cuál conviene depende de cada situación particular.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="opciones-salida" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Las alternativas principales
            </p>
            <h2 id="opciones-salida" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Opciones para salir de un autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              No hay una única forma de salir de un plan de ahorro. Las tres vías más habituales
              son la rescisión, la cesión y el reclamo. Cada una funciona de manera distinta y
              tiene consecuencias diferentes.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Rescisión del contrato",
                  body: "Consiste en dar de baja el plan y desvincularse de la empresa. Según las condiciones del contrato, puede implicar penalidades o la devolución parcial de lo abonado. Es la opción más directa, aunque no siempre la más conveniente económicamente.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Cesión del plan a un tercero",
                  body: "Implica transferir el plan a otra persona, que asume las cuotas restantes. Permite desvincularse sin necesariamente perder el valor acumulado. Requiere la aprobación de la administradora y tiene sus propios requisitos.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Reclamo por incumplimientos",
                  body: "Cuando la empresa no cumplió con lo prometido —demoras, cambios de condiciones, falta de información— puede evaluarse una vía de reclamo. En ese escenario, la salida del plan puede tener un fundamento distinto al de una simple rescisión.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <h3 className="font-semibold text-[#0F172A] text-sm">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="cuando-conviene" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Evaluando la situación
            </p>
            <h2 id="cuando-conviene" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cuándo conviene cada opción
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              La opción más adecuada depende de varios factores: cuánto tiempo llevás en el plan,
              cuánto pagaste, si hubo o no incumplimientos de la empresa, y cuál es tu objetivo
              principal (recuperar dinero, simplemente desvincularte, o ambos).
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Si el plan está al inicio y no hubo incumplimientos, una rescisión puede ser suficiente.",
                "Si ya pagaste una parte importante y querés recuperar algo, vale la pena revisar si hubo irregularidades.",
                "Si encontrás alguien interesado en el plan, la cesión puede ser una salida sin pérdida.",
                "Si la empresa no cumplió sus promesas, el reclamo puede cambiar el panorama económico de la salida.",
                "Si te apuran a firmar algo, es momento de consultar antes de hacerlo.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">A tener en cuenta:</span> Lo que
                dice el contrato importa, pero no siempre es la única variable. Hay aspectos de
                la situación que pueden cambiar el análisis. Lo más útil es revisar el caso con
                información completa antes de decidir.
              </p>
            </div>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Estás evaluando salir de tu autoplan?"
            description={`Contale tu situación a ${SITE_CONFIG.lawyer} por WhatsApp. Analizamos el caso sin costo y sin compromiso.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="documentacion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Antes de avanzar
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué documentación conviene reunir
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Tener documentación disponible permite analizar mejor las opciones y tomar decisiones
              con más información. No es imprescindible para una consulta inicial, pero sí ayuda.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "Las condiciones originales de tu plan" },
                { doc: "Comprobantes de pago de cuotas", note: "Para conocer cuánto abonaste y en qué etapa estás" },
                { doc: "Comunicaciones con la empresa", note: "Mensajes, emails o cualquier intercambio documentado" },
                { doc: "Notificaciones o cartas de la administradora", note: "Especialmente si anunciaron cambios o demoras" },
                { doc: "Número de grupo y orden del plan", note: "Datos administrativos que identifican tu plan" },
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

          {/* Sección 4 */}
          <section aria-labelledby="riesgos" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que conviene evitar
            </p>
            <h2 id="riesgos" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Riesgos frecuentes al salir de un autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Hay errores comunes que pueden complicar la salida o reducir las opciones disponibles.
              Conocerlos de antemano ayuda a evitarlos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
                  title: "Firmar documentos sin leerlos",
                  body: "Algunas bajas incluyen cláusulas de renuncia a reclamos futuros. Firmar sin entender qué se está firmando puede cerrar puertas.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "Aceptar el primer ofrecimiento",
                  body: "La empresa puede ofrecer una devolución o condiciones de salida que no son las únicas posibles. Vale la pena contrastarlas.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  title: "No conservar documentación",
                  body: "Si después surge alguna diferencia, los comprobantes y comunicaciones son clave para respaldar cualquier reclamo.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
                  title: "Decidir apurado por presión",
                  body: "Las empresas a veces generan urgencia. Tomarse el tiempo para consultar antes de firmar suele ser mejor decisión.",
                },
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

          {/* FAQ */}
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre cómo salir de un autoplan" />

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
        heading={`¿Querés salir de tu autoplan? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
