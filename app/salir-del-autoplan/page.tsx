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
  title: "Cómo salir de un autoplan: opciones, derechos y qué evaluar",
  description:
    "Si querés salir de tu autoplan, tenés opciones: rescisión, cesión o reclamo por incumplimiento. Conocé qué implica cada una, qué te pueden devolver y cómo avanzar.",
  keywords: [
    "salir del autoplan",
    "cancelar autoplan",
    "rescindir plan de ahorro",
    "cómo salir de un plan de ahorro",
    "baja autoplan argentina",
    "rescision autoplan sin penalidad",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
  },
  openGraph: {
    title: "Cómo salir de un autoplan: opciones, derechos y qué evaluar",
    description:
      "Rescisión, cesión o reclamo: conocé qué opciones tenés para salir de un autoplan, qué te pueden devolver y cómo evaluarlo antes de decidir.",
    url: `${SITE_CONFIG.canonicalUrl}/salir-del-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo salir de un autoplan en cualquier momento?",
    answer:
      "Técnicamente sí, pero las condiciones y consecuencias dependen del momento del plan y del motivo. Si salís por voluntad propia sin que haya incumplimientos de la empresa, el contrato puede prever penalidades. Si salís porque la empresa incumplió —demoras, cambios de condiciones— las penalidades no son exigibles. En ambos casos conviene revisar el caso puntual antes de decidir.",
  },
  {
    question: "¿Qué diferencia hay entre rescisión y cesión del plan?",
    answer:
      "La rescisión da de baja el contrato y habilita la devolución de lo abonado (en distinta medida según el motivo). La cesión transfiere el plan a otra persona, que continúa pagando las cuotas. En la cesión no perdés lo aportado —lo negocia el nuevo suscriptor— pero requiere que encuentres a alguien interesado y que la administradora lo apruebe.",
  },
  {
    question: "¿Cuánto me devuelven si rescindo el plan?",
    answer:
      "Si rescindís por incumplimiento de la empresa, los tribunales han reconocido el derecho a la devolución del valor proporcional actualizado al precio actual del vehículo —no solo los pesos nominales pagados. Si rescindís voluntariamente, el contrato puede prever un porcentaje de retención. En ningún caso la empresa puede retener el 100% de lo pagado si no hay causa para ello.",
  },
  {
    question: "¿La empresa puede aplicar una multa si me voy del plan?",
    answer:
      "Solo si la rescisión es por decisión propia del consumidor y el contrato lo prevé expresamente. Incluso en ese caso, la Ley 24.240 (art. 37) limita las cláusulas abusivas: una penalidad desproporcionada puede ser declarada nula. Además, si el motivo de salida es un incumplimiento de la empresa, no hay multa aplicable —fue ella quien incumplió.",
  },
  {
    question: "¿Pierdo todo lo que pagué si salgo del plan?",
    answer:
      "No. Esa idea es falsa y las empresas la usan para desalentar reclamos. Dependiendo del caso, tenés derecho a una devolución parcial o total de lo abonado, actualizada o no según el motivo de la salida. En rescisiones por incumplimiento, los fallos judiciales han reconocido el valor actual proporcional del vehículo.",
  },
  {
    question: "¿Qué pasa si ya firmé la baja sin recibir nada?",
    answer:
      "Si firmaste la baja y la empresa no te devolvió lo prometido, podés reclamar el incumplimiento de ese acuerdo. Si firmaste una renuncia expresa a reclamos futuros, la situación es más compleja pero no necesariamente definitiva: esas renuncias pueden cuestionarse cuando se firman sin información adecuada o bajo presión.",
  },
  {
    question: "¿Necesito un abogado para salir del autoplan?",
    answer:
      "No es obligatorio para todos los pasos. Para la carta documento o la cesión, podés actuar solo. Pero si hay disputa sobre el monto a devolver, si la empresa aplica penalidades que considerás abusivas, o si querés reclamar daños, el asesoramiento legal marca la diferencia entre aceptar lo que ofrecen y obtener lo que corresponde.",
  },
];

const relatedPages = [
  {
    href: "/devolucion-cuotas-autoplan",
    label: "Devolución de cuotas de autoplan",
    description: "Cuánto te corresponde recuperar y si puede calcularse al valor actualizado.",
  },
  {
    href: "/carta-documento-autoplan",
    label: "Carta documento por autoplan",
    description: "El primer paso formal para iniciar el proceso de rescisión.",
  },
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega del auto",
    description: "Qué hacer si el vehículo no llegó en el tiempo prometido.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cómo salir de un autoplan: opciones, derechos y qué evaluar",
      description:
        "Guía completa sobre las opciones para salir de un plan de ahorro vehicular en Argentina: rescisión, cesión, reclamo por incumplimiento, devolución de cuotas y proceso legal.",
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
          title="Cómo salir de un autoplan: opciones, derechos y qué evaluar"
          titleHighlight="autoplan"
          description="Muchas personas que quieren salir de un plan de ahorro no saben qué opciones tienen ni qué implica cada una. Antes de decidir, conviene entender el panorama completo."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Salir de un autoplan puede parecer complicado — y en parte lo es. Los contratos
            suelen ser extensos, las condiciones de salida no siempre están explicadas con
            claridad, y las empresas no siempre facilitan el proceso. Sin embargo, existen
            distintas vías, y cuál conviene depende de tu situación particular: cuánto pagaste,
            si hubo incumplimientos de la empresa, y cuál es tu objetivo final.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="opciones-salida" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Las alternativas
            </p>
            <h2 id="opciones-salida" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Tres formas de salir de un autoplan
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "1. Rescisión del contrato",
                  body: "Das de baja el plan y te desvinculás de la empresa. Podés hacerlo por voluntad propia o por incumplimientos de la administradora. La diferencia importa: si rescindís por incumplimiento de la empresa, no aplican penalidades y el reintegro puede calcularse al valor actualizado del vehículo. Si es voluntaria, el contrato puede prever retenciones.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "2. Cesión del plan a un tercero",
                  body: "Transferís el contrato a otra persona, que asume las cuotas restantes. No perdés lo aportado porque el nuevo suscriptor suele compensar ese valor. Requiere que la administradora lo apruebe y que el cesionario cumpla los requisitos. Es una salida limpia cuando encontrás a alguien interesado.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "3. Rescisión por incumplimiento con reclamo de daños",
                  body: "Si la empresa no cumplió —demoras en adjudicación, cambios de condiciones, falta de información, cuotas inconsistentes— podés rescindir el contrato y reclamar el reintegro actualizado más daño moral y daño punitivo si la conducta fue grave. Este camino puede ser el más conveniente económicamente.",
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
          <section aria-labelledby="rescision-incumplimiento" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El caso más favorable
            </p>
            <h2 id="rescision-incumplimiento" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Rescisión por incumplimiento: qué cambia
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              La rescisión por incumplimiento de la empresa —bajo el artículo 10 bis de la
              Ley 24.240— es distinta a una rescisión voluntaria. Estos son los derechos
              que se activan:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "No aplican las cláusulas de penalidad del contrato: fue la empresa quien incumplió, no vos.",
                "El reintegro puede calcularse al valor proporcional actual del vehículo, no solo los pesos nominales pagados.",
                "Podés reclamar daño moral por el tiempo perdido, la angustia y la frustración del proyecto.",
                "Si la conducta fue grave o reiterada, el juez puede aplicar daño punitivo (art. 52 bis Ley 24.240).",
                "Los intereses corren desde la mora de la empresa, no desde la sentencia.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">El punto clave sobre el reintegro:</span>{" "}
                Las empresas suelen ofrecer devolver los pesos nominales pagados. En un contexto
                de inflación alta, eso puede valer una fracción del valor real. Los tribunales
                argentinos han reconocido de forma creciente que el consumidor tiene derecho a
                recuperar el valor proporcional al precio actual del vehículo, no el valor
                histórico de los pesos abonados.
              </p>
            </div>
          </section>

          {/* CTA */}
          <CtaBox
            heading="¿Estás evaluando salir de tu autoplan?"
            description={`Contale tu situación a ${SITE_CONFIG.lawyer} por WhatsApp. Analizamos el caso sin costo y te orientamos sobre qué opciones tenés y qué conviene más.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="proceso-rescision" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El camino
            </p>
            <h2 id="proceso-rescision" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo se hace la rescisión paso a paso
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: "01",
                  title: "Reunir la documentación",
                  body: "Contrato original, comprobantes de cuotas pagas, comunicaciones con la empresa. Cuanto más completo el registro, más sólido el respaldo.",
                },
                {
                  step: "02",
                  title: "Enviar carta documento",
                  body: "Notificación fehaciente de la decisión de rescindir y el motivo (incumplimiento o voluntad propia). Si es por incumplimiento, se especifica cuál y se exige el reintegro correspondiente.",
                },
                {
                  step: "03",
                  title: "COPREC (si hay disputa sobre el monto)",
                  body: "Si la empresa no devuelve lo acordado o el monto es inferior al que corresponde, se inicia la conciliación previa obligatoria. Gratuita, dura 30–60 días, y muchos casos se resuelven aquí.",
                },
                {
                  step: "04",
                  title: "Juicio (si no hay acuerdo)",
                  body: "Con el certificado de COPREC frustrada, se presenta la demanda en el tribunal del propio domicilio. Se reclama reintegro actualizado + intereses + daños si corresponde.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <span className="font-serif text-2xl text-blue-200 font-bold shrink-0 leading-none mt-1">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] text-sm mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 4 */}
          <section aria-labelledby="documentacion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Antes de avanzar
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué documentación conviene reunir
            </h2>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "Las condiciones originales que pactaste." },
                { doc: "Comprobantes de pago de cuotas", note: "Para saber cuánto abonaste y en qué etapa estás." },
                { doc: "Comunicaciones con la empresa", note: "WhatsApps, emails, respuestas escritas. Todo vale." },
                { doc: "Notificaciones o cartas de la administradora", note: "Especialmente si anunciaron cambios o demoras." },
                { doc: "Número de grupo y orden del plan", note: "Identifica tu plan en el sistema de la administradora." },
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

          {/* Sección 5 */}
          <section aria-labelledby="errores" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que conviene evitar
            </p>
            <h2 id="errores" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Errores frecuentes al salir de un autoplan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
                  title: "Firmar documentos sin entender qué dicen",
                  body: "Algunas bajas incluyen cláusulas de renuncia a reclamos futuros. Firmar sin asesorarse puede cerrar puertas importantes.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "Aceptar el primer ofrecimiento sin evaluar",
                  body: "La empresa ofrece lo que le conviene, no lo que te corresponde. Vale la pena compararlo con lo que dice la ley antes de aceptar.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  title: "No guardar los comprobantes de pago",
                  body: "Si después reclamás, necesitás probar cuánto pagaste. Sin comprobantes, el reclamo se complica.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
                  title: "Decidir con prisa por presión de la empresa",
                  body: "Las empresas a veces crean urgencia artificial. Tomarse 24–48 horas para consultar suele ser siempre la mejor decisión.",
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

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre cómo salir de un autoplan" />

          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés ver todos los tipos de casos que analizamos?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              En la página principal encontrás más información sobre cómo trabajamos y los
              resultados obtenidos en reclamos de autoplanes.
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
        description="Analizamos tu caso sin costo inicial. Te orientamos sobre qué opciones tenés, qué corresponde reclamar y cuál es el mejor camino según tu situación."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
