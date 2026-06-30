import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, FileText, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Me cambiaron las condiciones del autoplan: qué podés hacer",
  description:
    "Si la administradora cambió el modelo, el precio o las condiciones de tu autoplan sin tu consentimiento, conocé qué opciones tenés.",
  keywords: [
    "cambiaron condiciones autoplan",
    "cambiaron modelo autoplan",
    "modificaron plan de ahorro",
    "incumplimiento condiciones autoplan",
    "autoplan cambio unilateral",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/cambiaron-condiciones-autoplan`,
  },
  openGraph: {
    title: "Me cambiaron las condiciones del autoplan: qué podés hacer",
    description:
      "Conocé qué opciones tenés si la administradora de tu autoplan modificó unilateralmente el modelo, el precio o las condiciones pactadas.",
    url: `${SITE_CONFIG.canonicalUrl}/cambiaron-condiciones-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puede la administradora cambiarme el modelo de auto sin mi acuerdo?",
    answer:
      "Depende de lo que establezca el contrato y de cómo se implementó ese cambio. Algunos contratos contemplan ciertas variaciones, pero eso no significa que cualquier modificación sea automáticamente válida. Vale la pena revisar el contrato y la forma en que se comunicó el cambio antes de asumir que no hay nada que hacer.",
  },
  {
    question: "¿Qué pasa si firmé una conformidad con el cambio porque no sabía que podía negarme?",
    answer:
      "Haber firmado una conformidad no cierra necesariamente todas las puertas. En algunos casos, esas firmas se obtienen sin información clara sobre las implicancias o en contextos de presión. Es algo que puede revisarse puntualmente según cómo se dio la situación.",
  },
  {
    question: "¿Un cambio en el precio de la cuota puede ser motivo de reclamo?",
    answer:
      "Los ajustes de cuotas son frecuentes en los planes de ahorro, muchos de ellos previstos contractualmente. Pero hay situaciones donde los aumentos no responden a las fórmulas acordadas o se aplican de forma distinta a lo pactado. Ese tipo de desvío puede ser relevante para evaluar el caso.",
  },
  {
    question: "¿Tengo que seguir pagando si me cambiaron las condiciones?",
    answer:
      "Es una pregunta válida y la respuesta no es única: depende de qué cambió, en qué momento del plan estás y cuáles son tus objetivos. Dejar de pagar tiene consecuencias propias que también conviene evaluar. Lo más útil es analizar la situación antes de tomar esa decisión.",
  },
  {
    question: "¿Cuándo conviene reclamar por un cambio en las condiciones?",
    answer:
      "Cuando el cambio es significativo, no estaba previsto en el contrato o se implementó sin tu consentimiento real. También cuando el cambio afecta de forma concreta tu situación económica o tus expectativas sobre el plan. En esos casos, vale la pena al menos hacer una consulta para entender si hay margen para actuar.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Qué hacer si el auto no llega y cómo evaluar tu situación.",
  },
  {
    href: "/salir-del-autoplan",
    label: "Cómo salir de un autoplan",
    description: "Opciones disponibles y qué evaluar antes de decidir.",
  },
  {
    href: "/reclamo-plan-ahorro",
    label: "Reclamo por plan de ahorro",
    description: "Cómo evaluar tu caso y qué aspectos revisar antes de avanzar.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Me cambiaron las condiciones del autoplan: qué podés hacer",
      description:
        "Qué ocurre cuando una administradora modifica unilateralmente el modelo, precio o condiciones de un autoplan en Argentina, y qué opciones tiene el consumidor.",
      url: `${SITE_CONFIG.canonicalUrl}/cambiaron-condiciones-autoplan`,
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
          name: "Cambiaron condiciones del autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/cambiaron-condiciones-autoplan`,
        },
      ],
    },
  ],
};

export default function CambiaronCondicionesAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Me cambiaron las condiciones del autoplan: qué podés hacer"
          titleHighlight="autoplan"
          description="Uno de los problemas más frecuentes en los planes de ahorro es que la empresa modifica condiciones sin el acuerdo del suscriptor. Antes de asumir que no hay nada que hacer, vale la pena revisar el caso."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Cuando una persona ingresa a un autoplan, lo hace sobre la base de determinadas
            condiciones: un modelo de vehículo, un precio, un plazo. Pero en la práctica, muchas
            personas descubren que esas condiciones cambian con el tiempo —a veces de forma
            significativa— sin que les hayan pedido conformidad real. Entender si esos cambios
            son cuestionables es el primer paso.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="tipos-de-cambios" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que más se repite
            </p>
            <h2 id="tipos-de-cambios" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cambios frecuentes en los autoplanes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              No todos los cambios son iguales ni tienen el mismo impacto. Los más comunes que
              llegan a consulta son de tres tipos:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "Cambio de modelo o versión del vehículo",
                  body: "La empresa sustituye el modelo contratado por otro diferente —distinta categoría, equipamiento o características— sin el acuerdo explícito del suscriptor. A veces se informa como una actualización, pero en la práctica cambia lo que se va a recibir.",
                },
                {
                  icon: <Clock className="w-5 h-5 text-blue-500" />,
                  title: "Modificación del precio o las cuotas",
                  body: "Los ajustes de cuotas son habituales en los planes de ahorro y muchos están previstos en el contrato. Pero hay casos donde el ajuste no sigue la fórmula acordada o se aplica de forma diferente a lo pactado originalmente.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-red-500" />,
                  title: "Cambios en los plazos o condiciones de adjudicación",
                  body: "La empresa modifica las reglas sobre cómo y cuándo se accede al vehículo: cambian la forma de licitación, los criterios de adjudicación o los plazos estimados, con impacto directo en las expectativas del suscriptor.",
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
          <section aria-labelledby="cuando-reclamar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Evaluando el caso
            </p>
            <h2 id="cuando-reclamar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cuándo un cambio puede ser relevante para reclamar
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              No todo cambio da lugar automáticamente a un reclamo. Pero hay situaciones donde
              la modificación es lo suficientemente significativa como para que valga la pena
              analizar el caso. Algunos indicadores:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "El cambio no estaba previsto en el contrato original y se impuso de forma unilateral",
                "El nuevo modelo o condiciones son materialmente distintos a lo que contrataste",
                "No te dieron la posibilidad real de rechazar el cambio sin consecuencias",
                "El cambio afecta el valor económico de lo que recibirás al final del plan",
                "Te informaron del cambio de manera vaga o con información incompleta",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">A tener en cuenta:</span> El
                análisis depende del contrato, del tipo de cambio y de cómo ocurrió. No se puede
                concluir de antemano si hay o no margen para actuar sin revisar el caso puntual.
              </p>
            </div>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Te cambiaron las condiciones de tu autoplan?"
            description={`Contale tu situación a ${SITE_CONFIG.lawyer} por WhatsApp. Analizamos el caso sin costo y sin compromiso.`}
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
              Tener documentación disponible permite evaluar mejor el caso. No es un requisito
              para hacer una consulta inicial, pero sí ayuda a entender la situación con más
              detalle.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                { doc: "Contrato o solicitud de adhesión original", note: "Las condiciones bajo las cuales ingresaste al plan" },
                { doc: "Notificaciones de cambios recibidas", note: "Cartas, emails o mensajes donde te informaron de modificaciones" },
                { doc: "Comprobantes de pago de cuotas", note: "Para ver la evolución del monto a lo largo del plan" },
                { doc: "Comunicaciones con la administradora", note: "Cualquier intercambio relevante sobre el cambio" },
                { doc: "Documentos que te hayan pedido firmar", note: "Especialmente si están relacionados con el cambio de condiciones" },
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
          <section aria-labelledby="que-hacer" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Próximos pasos
            </p>
            <h2 id="que-hacer" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué conviene hacer si cambiaron tus condiciones
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Antes de tomar cualquier decisión —ya sea aceptar el cambio, rechazarlo o salir del
              plan— hay algunas cosas que conviene considerar:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  title: "Guardar toda la documentación",
                  body: "No descartes cartas, emails ni mensajes. Cualquier comunicación sobre el cambio puede ser relevante más adelante.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "No firmar sin entender",
                  body: "Si te piden conformidad con el cambio, revisá qué estás firmando. Algunas cláusulas pueden implicar renuncia a reclamos futuros.",
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
                  title: "Consultar antes de decidir",
                  body: "Antes de aceptar o rechazar el cambio, vale la pena entender qué opciones tenés y qué implicancias tiene cada una.",
                },
                {
                  icon: <Clock className="w-5 h-5 text-blue-500" />,
                  title: "No esperar demasiado",
                  body: "Cuanto antes se analiza el caso, más margen hay para evaluar opciones. El tiempo puede cerrar algunas puertas.",
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
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre cambios en condiciones de autoplan" />

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
        heading={`¿Te cambiaron las condiciones de tu autoplan? Consultá con ${SITE_CONFIG.lawyer}`}
        description="Analizamos tu caso sin costo inicial. Escribinos por WhatsApp y en minutos te orientamos sobre qué opciones tenés."
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
