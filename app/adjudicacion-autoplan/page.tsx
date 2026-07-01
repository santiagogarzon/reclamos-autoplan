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
  title: "Adjudicación demorada en autoplan: derechos y cómo reclamar",
  description:
    "Si ya te adjudicaron el vehículo en tu autoplan y no lo recibís, o si nunca te adjudican pese a años de cuotas, tenés derechos concretos. Conocé cómo reclamar.",
  keywords: [
    "adjudicacion autoplan demorada",
    "no me adjudican el autoplan",
    "demora adjudicacion plan de ahorro",
    "adjudicacion plan ahorro vehicular",
    "reclamo adjudicacion autoplan",
    "sorteo autoplan no me tocan",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/adjudicacion-autoplan`,
  },
  openGraph: {
    title: "Adjudicación demorada en autoplan: derechos y cómo reclamar",
    description:
      "Años pagando cuotas y todavía no te adjudicaron el vehículo. Conocé cuándo la demora es un incumplimiento legal y qué podés hacer.",
    url: `${SITE_CONFIG.canonicalUrl}/adjudicacion-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Cuántas cuotas tengo que pagar para que me adjudiquen?",
    answer:
      "No hay un número fijo establecido por ley: depende del contrato, el tipo de plan y la modalidad de adjudicación. En los planes por sorteo, la adjudicación puede ocurrir en cualquier período (mes 1 o mes 84). En los planes mixtos, también podés adjudicarte por licitación, ofreciendo adelantar cuotas. El problema es cuando pasaron muchos períodos y nunca te tocó ni por sorteo ni por licitación, lo que puede ser indicio de irregularidades en la administración del grupo.",
  },
  {
    question: "¿Qué diferencia hay entre adjudicación por sorteo y por licitación?",
    answer:
      "En el sorteo, la empresa realiza un sorteo mensual y quien resulte favorecido recibe el vehículo. En la licitación, los suscriptores ofrecen adelantar cuotas (pagar más por adelantado) y quien ofrece más se adjudica el mes. El sistema mixto combina ambas modalidades. La legalidad del proceso de sorteo y licitación puede cuestionarse si no hay transparencia en cómo se realizan.",
  },
  {
    question: "Ya me adjudicaron pero no me entregan el auto. ¿Qué hago?",
    answer:
      "La adjudicación crea una obligación concreta de entrega. Si ya recibiste la notificación de adjudicación y la empresa no cumple con la entrega en el plazo comprometido, estás ante un incumplimiento directo del contrato. En ese caso tenés derecho a exigir la entrega forzada o a rescindir con devolución actualizada más daños. La carta documento es el primer paso para documentar el incumplimiento.",
  },
  {
    question: "¿Puedo reclamar daño punitivo si llevan años sin adjudicarme?",
    answer:
      "Sí, si hay elementos que muestren una conducta grave o reiterada de la empresa. El artículo 52 bis de la Ley 24.240 habilita el daño punitivo cuando el proveedor actúa con dolo o culpa grave. Los tribunales argentinos han aplicado este instituto en casos de autoplanes donde la administradora sistemáticamente postergó adjudicaciones o entregó información falsa sobre los sorteos.",
  },
  {
    question: "¿Prescribe el derecho a reclamar si esperé mucho tiempo?",
    answer:
      "El plazo de prescripción para acciones de daños en consumo es de 3 años desde que el consumidor tomó o debió tomar conocimiento del incumplimiento (art. 2561 CCyCN). El plazo se interrumpe con la carta documento (art. 2546). Si llevás varios años sin adjudicación y nunca reclamaste, conviene evaluar el caso cuanto antes para no perder el derecho.",
  },
  {
    question: "¿La empresa puede cambiarme el modelo del vehículo al momento de la adjudicación?",
    answer:
      "No sin tu consentimiento. Si el contrato especifica un modelo y al momento de adjudicar la empresa intenta darte otro diferente, estás ante una modificación unilateral de las condiciones contractuales. Podés rechazarlo y exigir el modelo pactado o la rescisión con devolución actualizada.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega del auto",
    description: "Cuando la empresa no cumple con el plazo de entrega del vehículo.",
  },
  {
    href: "/devolucion-cuotas-autoplan",
    label: "Devolución de cuotas de autoplan",
    description: "Si decidís salir, conocé cuánto te corresponde recuperar.",
  },
  {
    href: "/carta-documento-autoplan",
    label: "Carta documento por autoplan",
    description: "El primer paso formal para reclamar cualquier incumplimiento.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Adjudicación demorada en autoplan: derechos y cómo reclamar",
      description:
        "Guía sobre los derechos del consumidor ante la demora en la adjudicación de un plan de ahorro vehicular en Argentina: base legal, proceso de reclamo y opciones disponibles.",
      url: `${SITE_CONFIG.canonicalUrl}/adjudicacion-autoplan`,
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
          name: "Adjudicación demorada en autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/adjudicacion-autoplan`,
        },
      ],
    },
  ],
};

export default function AdjudicacionAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Adjudicación demorada en autoplan: derechos y cómo reclamar"
          titleHighlight="autoplan"
          description="Años pagando cuotas sin que te adjudiquen el vehículo — o adjudicado pero sin entrega. Hay derechos concretos, plazos que importan y caminos para avanzar."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            La adjudicación es el momento en que el plan de ahorro vehicular debería empezar a
            concretarse: te asignan el vehículo y comenzás el proceso de entrega. El problema
            es cuando ese momento nunca llega — o llega pero el auto tampoco. Muchas personas
            llevan 3, 4 o más años pagando cuotas sin haber recibido el vehículo que compraron.
            Esa situación tiene nombre legal: incumplimiento del contrato. Y tiene remedios.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="como-funciona" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El sistema
            </p>
            <h2 id="como-funciona" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo funciona la adjudicación en un autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              En un plan de ahorro vehicular, los suscriptores se agrupan típicamente en grupos
              de 70 a 100 personas que pagan cuotas mensuales durante un plazo determinado
              (generalmente 60 o 84 meses). Cada mes, la administradora entrega uno o más
              vehículos a través de dos mecanismos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                {
                  title: "Adjudicación por sorteo",
                  desc: "Se realiza un sorteo entre los suscriptores que aún no recibieron el vehículo. El ganador se adjudica el auto ese mes. Cada miembro tiene la misma probabilidad teórica.",
                  tag: "Por sorteo",
                },
                {
                  title: "Adjudicación por licitación",
                  desc: "Los suscriptores compiten ofreciendo adelantar cuotas. Quien ofrece más anticipo se adjudica el vehículo. Tiene un costo económico pero garantiza adjudicación en el período.",
                  tag: "Por licitación",
                },
              ].map((opt, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full mb-3 inline-block">
                    {opt.tag}
                  </span>
                  <h3 className="font-semibold text-[#0F172A] text-sm mb-2">{opt.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed">
              El problema ocurre cuando, a pesar de los sorteos, una misma persona nunca resulta
              adjudicada por años — o cuando la adjudicación ocurre pero la entrega se pospone
              indefinidamente. Ambas situaciones habilitan el reclamo.
            </p>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="cuando-incumplimiento" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El límite legal
            </p>
            <h2 id="cuando-incumplimiento" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cuándo la demora se convierte en incumplimiento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              No existe en la ley un plazo fijo que defina "cuántos meses sin adjudicación
              generan incumplimiento". Lo que sí establece la normativa — y lo que los
              tribunales han aplicado — es que el contrato de plan de ahorro es un{" "}
              <strong className="text-slate-800">contrato de consumo</strong> regido por la
              Ley 24.240, lo que significa:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "La empresa tiene el deber de información permanente sobre el estado del grupo y las adjudicaciones (art. 4 Ley 24.240).",
                "Si el contrato establece un plazo de adjudicación y no se cumple, hay incumplimiento contractual directo.",
                "Si la empresa no puede demostrar que los sorteos se realizaron correctamente y con transparencia, hay presunción de irregularidad.",
                "La falta de entrega post-adjudicación es incumplimiento inmediato y no requiere espera adicional.",
                "La empresa no puede invocar causas ajenas (escasez de stock, falta de unidades) si esa situación era previsible o fue generada por su propia gestión.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Jurisprudencia relevante:</span>{" "}
                Múltiples cámaras civiles y comerciales de Argentina —incluyendo las de Córdoba,
                Buenos Aires y Mendoza— han condenado a administradoras de autoplanes (Plan Óvalo,
                Plan Rombo, Plan Fiat, entre otras) por demoras en adjudicaciones y entrega,
                ordenando la entrega del vehículo o el reintegro del valor actualizado más
                intereses y daño punitivo.
              </p>
            </div>
          </section>

          {/* CTA */}
          <CtaBox
            heading="¿Años pagando y todavía nada?"
            description={`${SITE_CONFIG.lawyer} analiza tu caso gratuitamente. Si hay incumplimiento, te explicamos qué opciones tenés y cómo avanzar.`}
            buttonLabel="Consultar por WhatsApp"
          />

          {/* Sección 3 */}
          <section aria-labelledby="que-reclamar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que podés reclamar
            </p>
            <h2 id="que-reclamar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué podés pedir ante una adjudicación demorada
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Entrega forzada del vehículo",
                  body: "Si el objetivo es recibir el auto, podés exigir judicialmente el cumplimiento del contrato. El juez puede ordenar la entrega bajo apercibimiento de aplicar astreintes (multas diarias) hasta que se cumpla.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Rescisión con reintegro actualizado",
                  body: "Si preferís salir del plan, podés exigir la rescisión por incumplimiento más la devolución del valor proporcional al precio actual del vehículo. Los tribunales han reconocido este criterio para evitar el deterioro inflacionario de la devolución.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Daño moral",
                  body: "La frustración de un proyecto personal, el tiempo invertido, el estrés y la angustia generados por años de incumplimiento son indemnizables como daño moral. Los montos varían según el caso, pero los tribunales han sido generosos en este ítem.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Daño punitivo (art. 52 bis Ley 24.240)",
                  body: "Si la conducta de la empresa fue grave, reiterada o dolosa — como negar información, mentir sobre los sorteos, o dilatar deliberadamente la entrega — el juez puede agregar una multa punitiva. Ha sido aplicado en varios fallos contra administradoras de autoplanes.",
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
          <section aria-labelledby="proceso" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El camino
            </p>
            <h2 id="proceso" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Proceso para reclamar una adjudicación demorada
            </h2>
            <div className="space-y-4 mb-6">
              {[
                {
                  step: "01",
                  title: "Reunir la documentación",
                  body: "Contrato, comprobantes de pago, notificaciones de la empresa (o su ausencia), comunicaciones donde hayas reclamado, y cualquier registro de adjudicación si ya te notificaron.",
                },
                {
                  step: "02",
                  title: "Carta documento a la administradora",
                  body: "Notificás el incumplimiento, exigís la entrega en un plazo determinado (o la rescisión con devolución actualizada), y reservás el derecho a daños. Constituye en mora a la empresa.",
                },
                {
                  step: "03",
                  title: "COPREC",
                  body: "Instancia de conciliación obligatoria antes del juicio. Muchos casos se resuelven aquí, especialmente cuando la empresa ve que el consumidor va en serio. Si no hay acuerdo, se obtiene el certificado para ir a juicio.",
                },
                {
                  step: "04",
                  title: "Juicio",
                  body: "Se presenta la demanda en el tribunal del domicilio del consumidor (no de la empresa). Se solicita entrega o rescisión + actualización + daños. La duración varía, pero en consumo suelen ir rápido.",
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

          {/* Sección 5 */}
          <section aria-labelledby="documentacion" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              La evidencia
            </p>
            <h2 id="documentacion" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué documentar y guardar desde ahora
            </h2>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato original del plan", note: "Define qué se comprometieron a entregar y cuándo." },
                { doc: "Todos los comprobantes de pago de cuotas", note: "Acreditan el cumplimiento de tu parte." },
                { doc: "Notificación de adjudicación (si la hubo)", note: "El documento clave que crea la obligación de entrega." },
                { doc: "Comunicaciones donde pediste información y no respondieron", note: "WhatsApps, mails, reclamos telefónicos registrados." },
                { doc: "Capturas del portal o app mostrando tu estado en el grupo", note: "Con fecha visible. Evidencia el historial." },
                { doc: "Cualquier promesa escrita de fecha de entrega", note: "Emails, mensajes, notas. Vale como prueba de incumplimiento si no se cumplió." },
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
              Empezá a guardar todo desde hoy, aunque todavía no hayas decidido reclamar.{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
              >
                Si tenés dudas sobre qué conservar, escribinos
              </a>
              .
            </p>
          </section>

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre adjudicación en autoplanes" />

          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés ver todos los tipos de casos que analizamos?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              En la página principal encontrás información sobre cómo trabajamos y los resultados
              obtenidos para personas en situaciones similares.
            </p>
            <Link href="/" className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm">
              Ver landing principal →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading="¿Cuántos meses esperando sin adjudicación?"
        description={`${SITE_CONFIG.lawyer} analiza tu situación sin costo y te dice si tenés fundamento para reclamar. La consulta es directa con el abogado.`}
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
