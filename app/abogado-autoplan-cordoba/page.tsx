import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, MapPin, MessageCircle, Users, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SeoHero from "@/components/seo/SeoHero";
import CtaBox from "@/components/seo/CtaBox";
import FaqBlock from "@/components/seo/FaqBlock";
import RelatedPages from "@/components/seo/RelatedPages";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Abogado de autoplan en Córdoba: reclamos por demoras e incumplimientos",
  description:
    "Si buscás un abogado en Córdoba para analizar demoras o incumplimientos en autoplanes, conocé cómo trabajamos y cómo consultar tu caso.",
  keywords: [
    "abogado autoplan cordoba",
    "abogado plan de ahorro cordoba",
    "reclamo autoplan cordoba",
    "abogado demora entrega auto cordoba",
    "reclamo incumplimiento autoplan",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/abogado-autoplan-cordoba`,
  },
  openGraph: {
    title: "Abogado de autoplan en Córdoba: reclamos por demoras e incumplimientos",
    description:
      "Nicolás Silva, abogado en Córdoba con más de 100 casos favorables en reclamos por autoplanes. Consulta sin costo.",
    url: `${SITE_CONFIG.canonicalUrl}/abogado-autoplan-cordoba`,
    type: "profile",
  },
};

const faqs = [
  {
    question: "¿Atendés casos de Córdoba Capital y del interior de la provincia?",
    answer:
      "Sí. Se analizan casos de toda la provincia de Córdoba, tanto de la Capital como del interior. La consulta y el análisis inicial se hacen de forma remota, por lo que la distancia no es un obstáculo.",
  },
  {
    question: "¿Necesito ir a un estudio o puedo hacer todo de forma remota?",
    answer:
      "La mayoría de los casos se pueden manejar de forma completamente remota. La consulta inicial, el análisis del caso y la orientación se hacen por WhatsApp o videollamada, sin necesidad de trasladarte.",
  },
  {
    question: "¿Cuánto cuesta la consulta inicial?",
    answer:
      "La consulta inicial para evaluar el caso no tiene costo. La idea es entender la situación antes de hablar de cualquier otro paso. Si hay algo para avanzar, lo conversamos con claridad.",
  },
  {
    question: "¿Qué pasa si mi autoplan es de una administradora de otra provincia?",
    answer:
      "No es un obstáculo. Se analizan casos de todo el país independientemente de dónde esté radicada la administradora o concesionaria. Lo importante es revisar el contrato y la situación concreta.",
  },
  {
    question: "¿Trabajás con todas las marcas y administradoras de autoplanes?",
    answer:
      "Sí. Se analizan casos de distintas marcas (Volkswagen, Toyota, Fiat, Ford, Chevrolet, Renault, entre otras) y sus respectivas administradoras. La marca no define si hay o no un reclamo viable.",
  },
  {
    question: "¿Qué pasa si todavía no sé bien si tengo un caso para reclamar?",
    answer:
      "Ese es exactamente el punto de partida más frecuente. Muchas personas consultan sin saber con certeza si su situación es reclamable. La consulta inicial sirve justamente para eso: entender si hay algo concreto para hacer.",
  },
];

const relatedPages = [
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega de autoplan",
    description: "Señales de alerta y qué documentación reunir ante una demora.",
  },
  {
    href: "/reclamo-plan-ahorro",
    label: "Reclamo por plan de ahorro",
    description: "Qué revisar antes de avanzar con un reclamo formal.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      name: "Abogado de autoplan en Córdoba – Nicolás Silva",
      url: `${SITE_CONFIG.canonicalUrl}/abogado-autoplan-cordoba`,
      mainEntity: {
        "@type": "Person",
        name: SITE_CONFIG.lawyer,
        jobTitle: "Abogado",
        knowsAbout: ["Autoplanes", "Planes de ahorro", "Defensa del consumidor", "Reclamos por incumplimiento"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Córdoba",
          addressRegion: "Córdoba",
          addressCountry: "AR",
        },
        worksFor: {
          "@type": "LegalService",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.canonicalUrl,
          areaServed: { "@type": "Country", name: "Argentina" },
        },
      },
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
          name: "Abogado de autoplan en Córdoba",
          item: `${SITE_CONFIG.canonicalUrl}/abogado-autoplan-cordoba`,
        },
      ],
    },
  ],
};

export default function AbogadoAutoplanCordobaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          eyebrow="Córdoba, Argentina · Atendemos todo el país"
          title="Abogado de autoplan en Córdoba: reclamos por demoras e incumplimientos"
          titleHighlight="Córdoba"
          description="Si tenés un problema con tu autoplan —demora en la entrega, falta de respuesta, cambios injustificados— podés consultar tu caso con Nicolás Silva, abogado especializado en este tipo de reclamos."
          ctaLabel="Consultar mi caso"
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Perfil */}
          <section aria-labelledby="sobre-nicolas" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El abogado que va a analizar tu caso
            </p>
            <h2 id="sobre-nicolas" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Nicolás Silva — Especialista en reclamos de autoplanes
            </h2>

            {/* Card de perfil */}
            <div className="bg-gradient-to-br from-[#0B1120] to-[#0f2456] rounded-3xl p-7 mb-7 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[60px]" aria-hidden="true" />
              <div className="relative flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
                  <span className="text-white font-bold text-xl">NS</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">{SITE_CONFIG.lawyer}</h3>
                  <p className="text-blue-300 text-sm font-medium mb-3">Abogado · Córdoba, Argentina</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: <BadgeCheck className="w-3.5 h-3.5" />, label: "Matriculado" },
                      { icon: <MapPin className="w-3.5 h-3.5" />, label: "Córdoba" },
                      { icon: <Users className="w-3.5 h-3.5" />, label: "Todo el país" },
                    ].map((badge, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 text-slate-300 text-xs px-2.5 py-1 rounded-full">
                        {badge.icon}{badge.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-4">
              Nicolás Silva es abogado en Córdoba con especialización en reclamos relacionados
              a planes de ahorro y autoplanes. Su trabajo está orientado a personas que enfrentan
              demoras en la entrega de su vehículo, cambios de condiciones injustificados o falta
              de respuesta por parte de las administradoras.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Con más de 100 casos favorables, su enfoque es directo: analizar el caso en
              concreto, explicar con claridad qué opciones existen y acompañar a la persona
              en el proceso, sin tecnicismos innecesarios.
            </p>
            <p className="text-slate-600 leading-relaxed">
              La atención es personal —no hay intermediarios ni derivaciones— y puede realizarse
              de forma completamente remota.
            </p>
          </section>

          {/* Bloque de autoridad */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            {[
              { stat: "+100", label: "Casos favorables", sub: "en reclamos de autoplanes" },
              { stat: "🇦🇷", label: "Todo el país", sub: "atención remota disponible" },
              { stat: "0$", label: "Consulta inicial", sub: "sin costo ni compromiso" },
            ].map((item, i) => (
              <div key={i} className="text-center bg-slate-50 border border-slate-200 rounded-2xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-0.5">{item.stat}</div>
                <div className="text-xs font-semibold text-slate-700 mb-0.5">{item.label}</div>
                <div className="text-xs text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>

          {/* Sección: problemas frecuentes */}
          <section aria-labelledby="problemas-frecuentes" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Qué analizamos
            </p>
            <h2 id="problemas-frecuentes" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Problemas frecuentes en autoplanes
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              La experiencia de haber trabajado más de 100 casos permite identificar los
              problemas que se repiten con mayor frecuencia:
            </p>
            <ul className="space-y-3">
              {[
                { title: "Demoras en la entrega del vehículo adjudicado", body: "El más común. El auto fue adjudicado pero no se entrega, o se entrega con demoras que superan cualquier plazo razonable." },
                { title: "Promesas de entrega incumplidas", body: "La empresa ofreció una fecha concreta —oral o escrita— y no la respetó. Las excusas se repiten sin solución real." },
                { title: "Cambios unilaterales de condiciones", body: "Modifican el precio, el modelo o el plazo sin hablar con el suscriptor, o le piden que acepte cambios que no estaban en el contrato." },
                { title: "Falta de información o silencio de la empresa", body: "Cuando preguntás, no hay respuestas claras. No saben, no pueden, no te atienden o te dan respuestas contradictorias." },
                { title: "Situaciones donde la persona ya reclamó sin éxito", body: "Primer reclamo sin resultado. El proceso no avanzó, la empresa ignoró la situación o respondió sin compromisos reales." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 bg-white border border-slate-200 hover:border-blue-200 rounded-xl p-5 transition-colors group">
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 shrink-0 mt-1 transition-colors" />
                  <div>
                    <span className="font-semibold text-[#0F172A] text-sm block mb-1">{item.title}</span>
                    <span className="text-slate-500 text-sm leading-relaxed">{item.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Tu situación encaja en alguno de estos casos?"
            description="Describila en un mensaje por WhatsApp y la analizamos. Sin formularios, sin esperas largas."
            buttonLabel="Escribir a Nicolás Silva"
          />

          {/* Sección: proceso */}
          <section aria-labelledby="proceso-analisis" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Cómo funciona
            </p>
            <h2 id="proceso-analisis" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo es el proceso de análisis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-7">
              No hay formularios complicados ni procesos burocráticos para empezar. El primer
              paso es simple:
            </p>
            <div className="space-y-4">
              {[
                { icon: <MessageCircle className="w-5 h-5 text-white" />, n: "01", title: "Me escribís por WhatsApp", body: "Contás brevemente tu situación. No hace falta tener todo claro ni documentación lista para empezar." },
                { icon: <BadgeCheck className="w-5 h-5 text-white" />, n: "02", title: "Reviso el caso", body: "Analizo lo que me contás, hago las preguntas necesarias y reviso el contrato u otros documentos si los tenés." },
                { icon: <Users className="w-5 h-5 text-white" />, n: "03", title: "Te explico qué opciones tenés", body: "Sin tecnicismos. Te cuento de forma clara si hay algo para hacer, qué caminos existen y cómo funcionaría cada uno." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 relative">
                    {step.icon}
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                      {step.n[1]}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-[#0F172A] mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sección: cobertura */}
          <section aria-labelledby="cobertura" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Dónde atendemos
            </p>
            <h2 id="cobertura" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Atención en Córdoba y en toda Argentina
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Aunque la base de operaciones es Córdoba Capital, la atención de casos no está
              limitada geográficamente. Todos los casos se pueden analizar y gestionar de
              forma remota, independientemente de en qué provincia esté el consultante.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {[
                { icon: <MapPin className="w-4 h-4 text-blue-600" />, title: "Córdoba Capital e interior", body: "Casos de toda la provincia de Córdoba, con o sin presencia física." },
                { icon: <Users className="w-4 h-4 text-blue-600" />, title: "Todo el territorio nacional", body: "Se analizan casos de Buenos Aires, Rosario, Mendoza, Tucumán y el resto del país." },
              ].map((card, i) => (
                <div key={i} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">{card.icon}</div>
                    <span className="font-semibold text-[#0F172A] text-sm">{card.title}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm">
              Si tu plan de ahorro es de una administradora radicada en otra provincia o incluso
              si la concesionaria está en otro punto del país, igual podemos analizar el caso.
              La ubicación de la empresa no es un obstáculo para avanzar.
            </p>
          </section>

          {/* FAQ */}
          <FaqBlock
            faqs={faqs}
            heading="Preguntas frecuentes sobre el servicio en Córdoba"
          />

          {/* Internal link */}
          <div className="my-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <p className="text-[#0F172A] font-semibold mb-2">
              ¿Querés saber más sobre demoras específicas en la entrega?
            </p>
            <p className="text-slate-500 text-sm mb-4">
              Tenemos una guía completa sobre qué señales observar y qué documentación reunir
              cuando el auto no llega.
            </p>
            <Link
              href="/demora-entrega-autoplan"
              className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-900 font-semibold text-sm"
            >
              Ver guía sobre demoras en autoplanes →
            </Link>
          </div>

          <RelatedPages pages={relatedPages} />
        </div>
      </main>
      <CtaBox
        heading={`Consultá tu caso con ${SITE_CONFIG.lawyer} — Córdoba`}
        description="Análisis directo, sin costo inicial. Escribinos por WhatsApp y evaluamos tu situación juntos."
        buttonLabel="Consultar ahora por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
