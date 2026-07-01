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
  title: "Cuotas abusivas de autoplan: cuándo son ilegales y cómo reclamar",
  description:
    "Los aumentos de cuotas en un autoplan tienen límites legales. Si los importes subieron más allá de lo pactado o de forma inconsistente con el precio del vehículo, puede haber irregularidades.",
  keywords: [
    "cuotas abusivas autoplan",
    "aumento cuotas autoplan ilegal",
    "cuotas plan de ahorro vehicular",
    "aumento abusivo plan ahorro",
    "reclamo cuotas autoplan",
    "cuotas autoplan fuera de lo acordado",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/cuotas-abusivas-autoplan`,
  },
  openGraph: {
    title: "Cuotas abusivas de autoplan: cuándo son ilegales y cómo reclamar",
    description:
      "Si las cuotas de tu autoplan subieron más allá de lo razonable o cambiaron condiciones que no pactaste, puede haber fundamentos para un reclamo.",
    url: `${SITE_CONFIG.canonicalUrl}/cuotas-abusivas-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Las cuotas de un autoplan son fijas o pueden aumentar?",
    answer:
      "Las cuotas de un plan de ahorro vehicular no son fijas: se calculan como un porcentaje (alícuota) del precio de lista del vehículo, que cambia según las actualizaciones del fabricante. Que suban no es en sí ilegal — lo ilegal es cuando el aumento no responde al precio de lista oficial, cuando se cobran importes adicionales no previstos en el contrato, o cuando las condiciones se alteran de manera unilateral y arbitraria.",
  },
  {
    question: "¿Qué organismos controlan los autoplanes en Argentina?",
    answer:
      "Hasta 2020, los planes de ahorro vehicular eran regulados por el INAES (Instituto Nacional de Asociativismo y Economía Social). Ese año, la CNV (Comisión Nacional de Valores) asumió la supervisión por considerar que estos planes son instrumentos de inversión colectiva. Ambos organismos tienen normativa aplicable y ante cualquier irregularidad se puede denunciar ante la CNV.",
  },
  {
    question: "¿Puedo dejar de pagar las cuotas si considero que son abusivas?",
    answer:
      "No se recomienda dejar de pagar unilateralmente sin asesoramiento previo: genera mora y puede perjudicar tu posición. Lo correcto es notificar el incumplimiento por carta documento, exigir la corrección del importe, y simultáneamente iniciar el reclamo formal. Mientras se resuelve, existen vías para solicitar medidas cautelares que congelen temporalmente la deuda en disputa.",
  },
  {
    question: "¿El aumento de cuotas puede ser retroactivo?",
    answer:
      "No. Un aumento retroactivo —cobrar más por cuotas ya pagadas o ya vencidas— carece de respaldo legal. Si la empresa intentó cobrar diferencias por períodos anteriores sin haberlo comunicado en su momento, eso es un cargo no pactado que puede reclamarse.",
  },
  {
    question: "¿Qué es la alícuota y cuál es el máximo permitido?",
    answer:
      "La alícuota es el porcentaje del precio del vehículo que se cobra mensualmente. El contrato debe especificarla. Los aumentos solo son válidos si corresponden a actualizaciones del precio de lista del fabricante. Si la alícuota sube más que el precio del vehículo, o si se suman cargos administrativos no pactados, puede existir un cobro indebido.",
  },
  {
    question: "¿Puedo reclamar lo que pagué de más en cuotas anteriores?",
    answer:
      "Sí, con las limitaciones del plazo de prescripción. El artículo 2560 del Código Civil y Comercial establece una prescripción genérica de 5 años, aunque en consumo puede aplicarse la de 3 años (art. 2561). Lo importante es actuar antes de que venzan esos plazos desde que tomaste conocimiento del cobro indebido.",
  },
];

const relatedPages = [
  {
    href: "/cambiaron-condiciones-autoplan",
    label: "Cambios de condiciones en el autoplan",
    description: "Qué hacer cuando la empresa modifica el plan sin tu consentimiento.",
  },
  {
    href: "/carta-documento-autoplan",
    label: "Carta documento por autoplan",
    description: "El primer paso formal para documentar y reclamar el incumplimiento.",
  },
  {
    href: "/devolucion-cuotas-autoplan",
    label: "Devolución de cuotas de autoplan",
    description: "Si lo que pagaste de más no te fue devuelto, podés reclamarlo.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Cuotas abusivas de autoplan: cuándo son ilegales y cómo reclamar",
      description:
        "Análisis de cuándo los aumentos de cuotas en autoplanes argentinos son irregulares, qué dice la Ley 24.240 y la normativa CNV/INAES, y cuál es el camino para reclamar cobros indebidos.",
      url: `${SITE_CONFIG.canonicalUrl}/cuotas-abusivas-autoplan`,
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
          name: "Cuotas abusivas de autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/cuotas-abusivas-autoplan`,
        },
      ],
    },
  ],
};

export default function CuotasAbusivasAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Cuotas abusivas de autoplan: cuándo son ilegales y cómo reclamar"
          titleHighlight="autoplan"
          description="Que las cuotas de un autoplan suban no es siempre ilegal. Pero hay aumentos que no se ajustan a lo pactado ni a la normativa vigente — y esos sí tienen solución."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Una de las quejas más frecuentes en autoplanes es la de cuotas que parecen subir
            sin control, con aumentos que superan el ritmo de actualización del vehículo, cargos
            que no estaban en el contrato original, o importes que cambian sin ninguna explicación
            formal. Entender cuándo ese aumento es admisible legalmente y cuándo constituye un
            cobro indebido es el primer paso para saber si tenés un reclamo fundado.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="como-funcionan" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El mecanismo
            </p>
            <h2 id="como-funcionan" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo se calculan las cuotas de un autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              En un plan de ahorro vehicular, la cuota mensual no es un importe fijo en pesos:
              es una <strong className="text-slate-800">alícuota</strong> — un porcentaje del
              precio de lista del vehículo en ese momento. Cuando el fabricante actualiza el
              precio del auto, la cuota sube proporcionalmente.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Este mecanismo está previsto en el contrato y en sí mismo no es ilegal. El problema
              aparece cuando:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
                  title: "El aumento supera el del precio de lista oficial",
                  body: "Si el precio de lista del vehículo subió un 30% pero la cuota subió un 55%, la diferencia es un cobro sin respaldo contractual. Eso es pasible de reclamo.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "Se cobran cargos adicionales no previstos en el contrato",
                  body: "Seguros adicionales, gastos de administración, cargos por gestión o mora que no estaban en el contrato original son cobros que pueden impugnarse bajo el artículo 37 de la Ley 24.240.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
                  title: "Los aumentos se aplican sin notificación previa",
                  body: "El artículo 4 de la Ley 24.240 obliga al proveedor a informar al consumidor de manera adecuada y veraz. Un cambio en la cuota sin notificación formal viola este deber.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
                  title: "Se cobran diferencias retroactivas",
                  body: "Si la empresa intentó cobrar más por cuotas ya abonadas en períodos anteriores, eso es directamente un cobro indebido sin base legal.",
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
          <section aria-labelledby="marco-legal" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El respaldo normativo
            </p>
            <h2 id="marco-legal" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué dice la ley sobre cobros abusivos en autoplanes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Los planes de ahorro vehicular están sujetos a múltiples capas de regulación en
              Argentina:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                {
                  doc: "Ley 24.240 – Defensa del Consumidor",
                  note: "El artículo 37 declara nulas las cláusulas que desnaturalicen el contrato o creen un desequilibrio inequitativo. El artículo 52 bis habilita el daño punitivo para conductas graves.",
                },
                {
                  doc: "Ley 24.441 – Marco regulatorio de autoplanes (histórico)",
                  note: "Establece el marco básico de funcionamiento de los planes de ahorro y la obligación de informar al suscriptor.",
                },
                {
                  doc: "Normativa CNV (desde 2020)",
                  note: "La Comisión Nacional de Valores tomó la supervisión de los autoplanes. Sus resoluciones regulan el funcionamiento de los grupos, la administración y los límites de los cargos.",
                },
                {
                  doc: "Código Civil y Comercial – arts. 1117/1122",
                  note: "Contratos de consumo celebrados por adhesión: el consumidor no negocia las cláusulas, lo que impone un estándar de control judicial más estricto sobre el contenido contractual.",
                },
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
          </section>

          {/* CTA */}
          <CtaBox
            heading="¿Tus cuotas subieron más de lo que parece razonable?"
            description={`${SITE_CONFIG.lawyer} revisa el caso y te dice si hay fundamento para un reclamo. Consulta sin costo ni compromiso.`}
            buttonLabel="Consultar por WhatsApp"
          />

          {/* Sección 3 */}
          <section aria-labelledby="como-reclamar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Las opciones
            </p>
            <h2 id="como-reclamar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué podés hacer si tus cuotas son abusivas
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Carta documento exigiendo la corrección y la devolución del cobro indebido",
                  body: "El primer paso es documentar la queja de forma fehaciente. Se notifica el incumplimiento, se exige la corrección del importe y la devolución de lo cobrado de más, con un plazo de respuesta.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Denuncia ante la CNV",
                  body: "La Comisión Nacional de Valores tiene potestad sancionatoria sobre las administradoras de autoplanes. Una denuncia fundada puede generar inspecciones y sanciones a la empresa, y en muchos casos acelera la negociación.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "COPREC y/o demanda judicial",
                  body: "Para recuperar lo pagado de más, la vía más efectiva es la judicial previo COPREC. Se puede reclamar el reintegro del exceso cobrado, intereses y daño punitivo si la conducta fue grave o reiterada.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Medida cautelar para suspender cobros mientras dura el reclamo",
                  body: "En casos donde los cobros son urgentes o abusivos de forma evidente, se puede solicitar una cautelar que congele temporalmente la deuda en disputa mientras el juicio avanza.",
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

          {/* Sección 4 */}
          <section aria-labelledby="que-juntar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              La evidencia
            </p>
            <h2 id="que-juntar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué guardar para respaldar el reclamo
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Cuanta más documentación tenés, más sólido es el caso. Estas son las piezas
              más importantes:
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato original de adhesión al plan", note: "Para comparar las condiciones pactadas con lo que cobraron." },
                { doc: "Recibos o comprobantes de cada cuota pagada", note: "Con el desglose de conceptos: alícuota, seguro, administración." },
                { doc: "Comunicaciones de la empresa anunciando aumentos", note: "Emails, cartas, notificaciones en la app o portal." },
                { doc: "Listas de precios del vehículo en el período", note: "Para comparar el aumento del precio de lista vs. el aumento de la cuota." },
                { doc: "Capturas de pantalla del portal de la administradora", note: "Con fechas visibles. Muestran el historial de importes cobrados." },
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
              Si no tenés todos los recibos,{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
              >
                consultanos
              </a>
              . Hay formas de reconstruir el historial de cobros con la información disponible.
            </p>
          </section>

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre cuotas abusivas en autoplanes" />

          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés ver todos los tipos de casos que analizamos?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              En la página principal encontrás más información sobre cómo trabajamos y los
              resultados obtenidos.
            </p>
            <Link href="/" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm">
              Ver landing principal →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading="¿Las cuotas de tu autoplan no tienen lógica?"
        description={`${SITE_CONFIG.lawyer} revisa los números y te explica si los aumentos son legítimos o si hay fundamento para reclamar. Sin costo.`}
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
