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
  title: "Devolución de cuotas de autoplan: qué te corresponde y cómo reclamarlo",
  description:
    "Si salís de un autoplan por incumplimiento de la empresa, tenés derecho a que te devuelvan lo pagado. Conocé cómo se calcula, si se actualiza por inflación, y cuál es el camino legal.",
  keywords: [
    "devolucion cuotas autoplan",
    "reintegro plan de ahorro",
    "devolucion dinero autoplan argentina",
    "rescision autoplan devolucion actualizada",
    "cuanto me devuelven autoplan",
    "devolución valor actual autoplan",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/devolucion-cuotas-autoplan`,
  },
  openGraph: {
    title: "Devolución de cuotas de autoplan: qué te corresponde y cómo reclamarlo",
    description:
      "Si salís de un autoplan por incumplimiento, tenés derecho a la devolución de lo pagado. Conocé si se actualiza por inflación y cuál es el proceso.",
    url: `${SITE_CONFIG.canonicalUrl}/devolucion-cuotas-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿La empresa puede aplicar una penalidad si rescindo el contrato?",
    answer:
      "Depende del motivo de la rescisión. Si salís del plan por voluntad propia sin que haya incumplimientos de la empresa, el contrato puede prever penalidades, aunque la Ley 24.240 limita las cláusulas abusivas. Si rescindís por incumplimientos de la empresa —demoras, cambios de condiciones— la penalidad no es exigible: fue ella quien generó el incumplimiento. Los tribunales han declarado nulas estas penalidades en numerosas ocasiones cuando el consumidor actúa ante una falta de la administradora.",
  },
  {
    question: "¿Cuánto tiempo tarda en recuperar el dinero?",
    answer:
      "Si hay acuerdo en COPREC, puede resolverse en 60 a 90 días desde la presentación. Si el caso va a juicio, los plazos dependen del juzgado y la complejidad, pero en causas de consumo suelen resolverse entre 12 y 24 meses. En casos urgentes o con daño punitivo de por medio, algunos juzgados han dictado medidas cautelares que aceleran los pagos.",
  },
  {
    question: "¿Qué pasa si ya firmé la baja del plan sin recibir nada?",
    answer:
      "Si firmaste una rescisión y la empresa no te devolvió lo prometido, todavía podés reclamar el incumplimiento de ese acuerdo. Si firmaste renunciando expresamente a futuros reclamos, la situación es más compleja pero no siempre definitiva: los tribunales han anulado cláusulas de renuncia cuando se firma bajo presión o sin información adecuada (art. 37 y 65 Ley 24.240). Conviene consultarlo.",
  },
  {
    question: "¿Se puede reclamar también daño moral y daño punitivo?",
    answer:
      "Sí. El artículo 52 bis de la Ley 24.240 contempla el daño punitivo cuando hay conducta grave del proveedor. Los tribunales argentinos lo han aplicado en casos de autoplanes con demoras prolongadas o negativa sistemática a devolver dinero. El daño moral también es reclamable cuando el incumplimiento generó angustia, tiempo perdido y frustración del proyecto personal de obtener el vehículo.",
  },
  {
    question: "¿Qué es el COPREC y es obligatorio antes de ir a juicio?",
    answer:
      "COPREC es la Conciliación Previa en las Relaciones de Consumo, una instancia gratuita administrada por el Ministerio de Economía. Para causas de consumo nacionales es obligatoria previamente al juicio: si no la intentaste, el juzgado puede rechazar la demanda. El proceso suele durar entre 30 y 60 días. Si las partes no llegan a un acuerdo, se emite un certificado que habilita la vía judicial.",
  },
  {
    question: "¿Dónde se presenta el reclamo si la administradora es de otra provincia?",
    answer:
      "La Ley 24.240 (art. 36 y 37) permite que el consumidor litigue en el lugar de su domicilio real, no en el de la empresa. Esto es especialmente importante en autoplanes, donde las administradoras suelen tener domicilio en Buenos Aires pero los consumidores están en Córdoba, Mendoza u otras provincias.",
  },
];

const relatedPages = [
  {
    href: "/salir-del-autoplan",
    label: "Cómo salir de un autoplan",
    description: "Opciones para desvincularte del plan y qué evaluar antes de decidir.",
  },
  {
    href: "/carta-documento-autoplan",
    label: "Carta documento por autoplan",
    description: "El primer paso formal para reclamar: cuándo y cómo enviarla.",
  },
  {
    href: "/cuotas-abusivas-autoplan",
    label: "Cuotas abusivas de autoplan",
    description: "Qué hacer cuando los aumentos superan lo acordado contractualmente.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Devolución de cuotas de autoplan: qué te corresponde y cómo reclamarlo",
      description:
        "Guía sobre el derecho a la devolución de cuotas en autoplanes argentinos: cómo se calcula el reintegro, si se actualiza por inflación, el rol del COPREC y la vía judicial.",
      url: `${SITE_CONFIG.canonicalUrl}/devolucion-cuotas-autoplan`,
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
          name: "Devolución de cuotas de autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/devolucion-cuotas-autoplan`,
        },
      ],
    },
  ],
};

export default function DevolucionCuotasAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Devolución de cuotas de autoplan: qué te corresponde y cómo reclamarlo"
          titleHighlight="autoplan"
          description="Cuando una empresa de autoplanes incumple, el consumidor tiene derecho a recuperar lo que pagó. La pregunta que más importa no es si te devuelven — es cuánto y cómo se calcula."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Muchas personas que salen de un autoplan por incumplimientos de la empresa asumen que
            van a recuperar solo lo que pagaron en pesos nominales. En un país con inflación alta,
            eso puede representar una pérdida enorme de poder adquisitivo. Pero la ley y la
            jurisprudencia argentina cuentan otra historia: los tribunales han reconocido de forma
            creciente el derecho a una devolución actualizada al valor real del vehículo al momento
            del pago efectivo. Entender esto antes de iniciar cualquier reclamo puede cambiar
            radicalmente lo que terminás recibiendo.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="derecho-devolucion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              La base legal
            </p>
            <h2 id="derecho-devolucion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Tu derecho a la devolución: qué dice la ley
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              El artículo <strong className="text-slate-800">10 bis de la Ley 24.240</strong> de
              Defensa del Consumidor establece que ante el incumplimiento de la empresa proveedora,
              el consumidor puede optar por:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Exigir el cumplimiento forzado de la obligación (entrega del vehículo).",
                "Aceptar otro producto o servicio equivalente.",
                "Rescindir el contrato con derecho a la devolución de lo abonado, con daños y perjuicios.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-5">
              La rescisión por incumplimiento no es una penalidad para el consumidor: es un
              remedio legal ante una falla de la empresa. Esto significa que no aplican las
              cláusulas de penalidad que suelen figurar en los contratos cuando la rescisión es
              consecuencia del incumplimiento del proveedor.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Art. 37 Ley 24.240:</span> Son nulas
                de pleno derecho las cláusulas que restrinjan los derechos del consumidor o amplíen
                los derechos del proveedor de manera desproporcionada. Una cláusula que habilita a
                la empresa a retener lo pagado cuando ella fue quien incumplió puede ser declarada
                abusiva por esta vía.
              </p>
            </div>
          </section>

          {/* Sección 2 - La más importante */}
          <section aria-labelledby="calculo-devolucion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El punto más importante
            </p>
            <h2 id="calculo-devolucion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              ¿Te devuelven los pesos que pagaste o el valor actualizado?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Aquí está el debate central en los reclamos de autoplanes. Las empresas intentan
              devolver los pesos nominales pagados en su momento. Los consumidores — y cada vez
              más los tribunales — sostienen que eso equivale a una pérdida real y que el
              reintegro debe calcularse de otro modo.
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
                  title: "Lo que ofrecen las empresas (y no conviene aceptar sin analizarlo)",
                  body: "Devolver el importe nominal de las cuotas pagadas. En un contexto de inflación del 100–200% anual, eso puede representar el 20–30% del valor actual del vehículo. Aceptar esto sin consultarlo suele ser la peor decisión económica.",
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                  title: "Lo que reconocen los tribunales (la posición favorable al consumidor)",
                  body: "Devolución proporcional al valor actual del vehículo. Si pagaste el 40% del total del plan, tenés derecho al 40% del valor actual del vehículo al momento del pago efectivo. Esta doctrina fue aplicada por múltiples cámaras civiles y comerciales de todo el país.",
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
            <p className="text-slate-600 leading-relaxed mb-5">
              La discusión legal gira en torno a los artículos 765 y 766 del Código Civil y
              Comercial (obligaciones de dar sumas de dinero y reajuste) y a la prohibición de
              enriquecimiento sin causa. Cuando la empresa retiene el plan por años cobrando
              cuotas indexadas al valor del vehículo, y luego devuelve los pesos originales sin
              ningún ajuste, los tribunales ven en eso un enriquecimiento ilegítimo.
            </p>
          </section>

          {/* CTA */}
          <CtaBox
            heading="¿Querés saber cuánto te podrían devolver?"
            description={`Cada caso es distinto. ${SITE_CONFIG.lawyer} analiza el tuyo y te dice qué podés reclamar y por qué vía. Sin costo.`}
            buttonLabel="Consultar ahora"
          />

          {/* Sección 3 */}
          <section aria-labelledby="proceso" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Los pasos
            </p>
            <h2 id="proceso" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo reclamar la devolución: el proceso paso a paso
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: "01",
                  title: "Carta documento a la administradora",
                  body: "Notificás formalmente el incumplimiento y exigís la devolución actualizada en un plazo de 5 a 10 días hábiles. Esto constituye en mora a la empresa y genera el primer registro probatorio.",
                },
                {
                  step: "02",
                  title: "COPREC (Conciliación Previa en Relaciones de Consumo)",
                  body: "Instancia gratuita y obligatoria antes del juicio. Se presenta online, se fija audiencia, y un conciliador intenta que lleguen a un acuerdo. Si la empresa ofrece el valor nominal y el consumidor exige el actualizado, aquí suelen divergir.",
                },
                {
                  step: "03",
                  title: "Demanda judicial",
                  body: "Si no hay acuerdo en COPREC, con el certificado de mediación frustrada se puede iniciar la demanda. En causas de consumo, podés litigar en tu domicilio (no en el domicilio de la empresa). Se solicita capital actualizado + intereses + daños.",
                },
                {
                  step: "04",
                  title: "Sentencia y cobro",
                  body: "Los fallos favorables ordenan el pago del capital actualizado más intereses a tasa activa desde la mora. Si la empresa no paga en plazo, se puede ejecutar la sentencia contra sus bienes.",
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
              Qué necesitás
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Documentación para respaldar el reclamo
            </h2>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión al plan", note: "Define las condiciones originales pactadas." },
                { doc: "Comprobantes de todas las cuotas pagadas", note: "Permite calcular cuánto se abonó y en qué período." },
                { doc: "Comunicaciones con la empresa", note: "WhatsApps, emails, respuestas por escrito. Todo suma." },
                { doc: "Notificación de adjudicación (si aplica)", note: "Si ya te adjudicaron y no entregaron, es evidencia clave." },
                { doc: "Notificaciones de cambio de condiciones", note: "Si te comunicaron aumentos de cuotas o cambios de modelo." },
                { doc: "Carta documento enviada y acuse de recibo", note: "El antecedente fehaciente de que notificaste el incumplimiento." },
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
                consultanos igual
              </a>
              . Muchos documentos se pueden reconstruir o solicitar directamente a la empresa.
            </p>
          </section>

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre la devolución de cuotas" />

          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés ver todos los tipos de casos que analizamos?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              En la página principal encontrás más información sobre cómo trabajamos y los
              resultados que obtuvimos para personas en situaciones similares a la tuya.
            </p>
            <Link href="/" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm">
              Ver landing principal →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading="¿Querés recuperar lo que pagaste en tu autoplan?"
        description={`${SITE_CONFIG.lawyer} analiza tu caso sin costo. Te decimos si tenés derecho a una devolución actualizada y cómo avanzar.`}
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
