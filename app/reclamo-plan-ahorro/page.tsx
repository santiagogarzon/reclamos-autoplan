import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare, Scale, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Reclamo por plan de ahorro: cómo evaluar tu caso y avanzar",
  description:
    "Conocé qué aspectos revisar si querés hacer un reclamo por un plan de ahorro con demoras, incumplimientos o falta de respuesta.",
  keywords: [
    "reclamo plan de ahorro",
    "reclamar autoplan",
    "cómo reclamar plan de ahorro",
    "abogado plan de ahorro",
    "reclamo autoplan argentina",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/reclamo-plan-ahorro`,
  },
  openGraph: {
    title: "Reclamo por plan de ahorro: cómo evaluar tu caso y avanzar",
    description:
      "Aspectos clave a revisar antes de avanzar con un reclamo por plan de ahorro en Argentina.",
    url: `${SITE_CONFIG.canonicalUrl}/reclamo-plan-ahorro`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Qué es un plan de ahorro o autoplan?",
    answer:
      "Es un sistema de ahorro previo para la compra de vehículos en Argentina. Un grupo de personas paga cuotas mensuales, y cada mes uno o varios integrantes reciben el vehículo mediante sorteo o licitación. El proceso de entrega efectiva puede generar demoras o inconvenientes que dan lugar a reclamos.",
  },
  {
    question: "¿Cuánto tiempo tengo para reclamar?",
    answer:
      "Los plazos dependen del tipo de acción que se quiera ejercer y de las circunstancias del caso. En términos generales, conviene no esperar demasiado una vez que identificás un problema. Consultar temprano siempre da más margen para actuar.",
  },
  {
    question: "¿Necesito un abogado para hacer un reclamo por un plan de ahorro?",
    answer:
      "No siempre es obligatorio para todos los pasos, pero contar con asesoramiento legal te permite entender qué opciones realmente tenés y evitar errores que puedan perjudicarte. Muchas personas consultan y descubren que tienen más herramientas de las que suponían.",
  },
  {
    question: "¿Puedo reclamar si el auto todavía no me fue adjudicado?",
    answer:
      "Depende de la situación concreta. Hay casos en que el problema no es la adjudicación sino las condiciones del plan, la falta de información o cambios unilaterales. Cada situación merece un análisis propio.",
  },
  {
    question: "¿Qué organismos pueden intervenir en estos reclamos?",
    answer:
      "Existen distintas vías posibles: defensas del consumidor, organismos de control, instancias judiciales o extrajudiciales. Cuál es la más adecuada depende del caso puntual y de lo que se quiera lograr.",
  },
  {
    question: "¿Qué pasa si la administradora del plan ya no existe o cambió de nombre?",
    answer:
      "Ese contexto no cierra necesariamente las opciones. La continuidad de obligaciones puede seguir vigente incluso con cambios en la razón social. Vale la pena revisarlo.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Cuándo una demora puede ser un problema y qué señales observar.",
  },
  {
    href: "/abogado-autoplan-cordoba",
    label: "Abogado de autoplan en Córdoba",
    description: "Conocé a Nicolás Silva y cómo analiza cada caso.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Reclamo por plan de ahorro: cómo evaluar tu caso y avanzar",
      description:
        "Guía sobre cómo evaluar y avanzar con un reclamo por plan de ahorro en Argentina: situaciones frecuentes, qué revisar y cómo puede ayudar un abogado.",
      url: `${SITE_CONFIG.canonicalUrl}/reclamo-plan-ahorro`,
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
          name: "Reclamo por plan de ahorro",
          item: `${SITE_CONFIG.canonicalUrl}/reclamo-plan-ahorro`,
        },
      ],
    },
  ],
};

export default function ReclamoPlanAhorroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Reclamo por plan de ahorro: cómo evaluar tu caso y avanzar"
          titleHighlight="plan de ahorro"
          description="Cuando un plan de ahorro no cumple lo prometido, muchas personas quieren reclamar pero no saben por dónde empezar ni qué esperar. Esta guía te ayuda a entender qué revisar antes de actuar."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Reclamar por un plan de ahorro no es un proceso único ni igual para todos. Las
            situaciones varían según la administradora, el contrato, lo que pasó y lo que se
            quiere lograr. Por eso, el primer paso siempre es entender bien el caso antes de
            decidir cómo avanzar.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="situaciones-reclamo" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que vemos con más frecuencia
            </p>
            <h2 id="situaciones-reclamo" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Situaciones por las que muchas personas reclaman
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              No todos los reclamos son iguales, pero hay motivos que aparecen de forma
              recurrente en las consultas que recibimos:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  n: "01",
                  title: "El auto se adjudicó pero no se entrega",
                  body: "Ya ganaste el sorteo o la licitación, pero el vehículo no aparece o la entrega se posterga indefinidamente sin motivo claro.",
                },
                {
                  n: "02",
                  title: "Cambios en el precio o el modelo después de adjudicar",
                  body: "Te informan que el precio subió considerablemente o que el modelo prometido no está disponible, y te ofrecen una alternativa que no querías.",
                },
                {
                  n: "03",
                  title: "Falta total de información",
                  body: "No podés saber en qué estado está tu grupo, cuándo podrías adjudicar, ni nadie te da una respuesta concreta cuando preguntás.",
                },
                {
                  n: "04",
                  title: "Plazos del contrato vencidos sin entrega",
                  body: "El contrato tenía una duración estimada y ya venció sin que hayas recibido el vehículo. La empresa no ofrece ninguna solución.",
                },
                {
                  n: "05",
                  title: "Reclamos anteriores sin resultado",
                  body: "Ya intentaste reclamar —por defensa del consumidor u otros medios— y no obtuviste ningún avance concreto.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 bg-white border border-slate-200 rounded-xl p-5">
                  <span className="text-xl font-bold text-blue-200 shrink-0 w-8">{item.n}</span>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="que-revisar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Antes de actuar
            </p>
            <h2 id="que-revisar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué revisar antes de avanzar con un reclamo
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Antes de tomar cualquier acción, es útil tener un panorama claro de algunos
              puntos clave:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                { icon: <Search className="w-4 h-4 text-blue-600" />, label: "Qué dice el contrato", detail: "Plazos, condiciones de entrega y cláusulas relevantes para tu situación." },
                { icon: <MessageSquare className="w-4 h-4 text-blue-600" />, label: "Qué comunicaciones existieron", detail: "Mensajes, emails o llamadas donde la empresa hizo compromisos o promesas concretas." },
                { icon: <CheckCircle2 className="w-4 h-4 text-blue-600" />, label: "Si ya reclamaste formalmente", detail: "Qué canales usaste, cuándo, y qué respuesta obtuviste (o no obtuviste)." },
                { icon: <Scale className="w-4 h-4 text-blue-600" />, label: "Qué querés lograr", detail: "Si buscás la entrega del auto, una compensación, la rescisión, u otra solución." },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">{item.icon}</div>
                    <span className="font-semibold text-[#0F172A] text-sm">{item.label}</span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pl-9">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              No es necesario tener todo resuelto para consultar. En muchos casos, la consulta
              sirve justamente para ordenar la situación y entender por dónde conviene empezar.
            </p>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Querés revisar tu caso antes de decidir qué hacer?"
            description={`${SITE_CONFIG.lawyer} puede ayudarte a entender qué opciones tenés según tu situación concreta.`}
            buttonLabel="Consultar por WhatsApp"
          />

          {/* Sección 3 */}
          <section aria-labelledby="si-ya-reclamaste" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Cuando el primer intento no alcanzó
            </p>
            <h2 id="si-ya-reclamaste" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              ¿Qué pasa si ya reclamaste y no hubo respuesta?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Es una situación muy común. Muchas personas llegaron a nosotros después de haber
              intentado resolver la situación por su cuenta —llamando a la empresa, escribiendo
              por defensa del consumidor, enviando cartas— sin obtener ningún resultado concreto.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Un reclamo sin respuesta no significa que el camino se cerró. En algunos casos,
              significa que hay que cambiar la estrategia o escalar a instancias con más peso.
              Lo que pasó antes forma parte del historial del caso y puede ser relevante para
              los pasos siguientes.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-amber-700">A tener en cuenta:</span> Si ya
                hiciste reclamos previos, conservá los registros. Emails, números de reclamo,
                respuestas recibidas (o la constancia de que no respondieron). Todo eso puede
                ser útil.
              </p>
            </div>
          </section>

          {/* Sección 4 */}
          <section aria-labelledby="como-ayuda-abogado" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El rol del asesoramiento legal
            </p>
            <h2 id="como-ayuda-abogado" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo puede ayudarte un abogado
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Contar con asesoramiento no significa necesariamente iniciar un juicio. En
              muchos casos, lo más útil es simplemente entender bien qué dice el contrato,
              qué derechos te corresponden y qué opciones reales tenés.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Revisar el contrato e identificar cláusulas relevantes para el caso",
                "Evaluar si hubo incumplimiento y qué tan fundamentado está el reclamo",
                "Explicar las opciones disponibles de forma clara y sin tecnicismos",
                "Orientar sobre qué pasos dar y en qué orden",
                "Acompañar el proceso si se decide avanzar formalmente",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ArrowRight className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                {SITE_CONFIG.lawyer} trabaja directamente con cada persona, sin intermediarios,
                y con foco en explicar las cosas de forma clara. Podés ver más sobre su
                experiencia en{" "}
                <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium underline underline-offset-2">
                  la página principal
                </Link>
                .
              </p>
            </div>
          </section>

          {/* FAQ */}
          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre reclamos en planes de ahorro" />

          {/* Internal link */}
          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Estás en Córdoba o buscás un abogado especializado en autoplanes?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              Conocé el perfil de Nicolás Silva y cómo trabaja con cada caso.
            </p>
            <Link
              href="/abogado-autoplan-cordoba"
              className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm"
            >
              Ver abogado de autoplan en Córdoba →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading="¿Querés evaluar tu reclamo por plan de ahorro?"
        description={`Escribile a ${SITE_CONFIG.lawyer} y revisamos tu caso juntos. Sin costo inicial y sin compromiso.`}
        buttonLabel="Consultar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
