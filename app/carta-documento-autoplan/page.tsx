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
  title: "Carta documento por autoplan: cuándo mandarla y qué incluir",
  description:
    "La carta documento es el primer paso formal para reclamar por un autoplan. Conocé cuándo enviarla, qué debe decir, y qué pasa si la empresa no responde.",
  keywords: [
    "carta documento autoplan",
    "carta documento plan de ahorro",
    "carta documento concesionaria autoplan",
    "telegrama autoplan incumplimiento",
    "primer paso reclamo autoplan",
    "carta documento administradora autoplan",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.canonicalUrl}/carta-documento-autoplan`,
  },
  openGraph: {
    title: "Carta documento por autoplan: cuándo mandarla y qué incluir",
    description:
      "La carta documento es el primer paso formal para reclamar por un autoplan. Conocé cuándo enviarla, qué debe decir, y qué pasa si la empresa no responde.",
    url: `${SITE_CONFIG.canonicalUrl}/carta-documento-autoplan`,
    type: "article",
  },
};

const faqs = [
  {
    question: "¿Puedo enviar la carta documento yo mismo o necesito un abogado?",
    answer:
      "Podés enviarla vos mismo desde cualquier sucursal del Correo Argentino. No es obligatorio tener un abogado para el envío. Sin embargo, el contenido es clave: lo que dice la carta define qué estás reclamando y qué pruebas generás. Una carta mal redactada puede debilitar el caso. Para situaciones complejas, conviene asesorarse antes.",
  },
  {
    question: "¿Cuánto tarda en llegar y cuánto cuesta una carta documento?",
    answer:
      "La carta documento enviada por Correo Argentino suele demorar entre 2 y 5 días hábiles en llegar al destinatario. El costo varía según el peso y distancia, pero generalmente ronda los valores de un envío registrado estándar. El telegrama colacionado es más económico y tiene la misma validez legal, aunque es más escueto.",
  },
  {
    question: "¿La empresa tiene obligación de responder la carta documento?",
    answer:
      "No hay un plazo legal estricto para responder una carta documento, pero la falta de respuesta tiene consecuencias: consolida la mora, refuerza tu posición en un reclamo posterior, y puede ser presentada como evidencia de que la empresa fue notificada y no actuó. Si no respondieron en el plazo que vos estipulaste, el siguiente paso es COPREC o la vía judicial.",
  },
  {
    question: "¿A quién hay que dirigir la carta documento, a la concesionaria o a la administradora?",
    answer:
      "Depende del tipo de incumplimiento. Si la demora en entrega involucra a la concesionaria, puede ser útil notificarla. Pero en la mayoría de los casos, la administradora del plan (Plan Óvalo, Plan Rombo, Plan Fiat, etc.) es la responsable contractual. Se puede enviar a ambas. Lo importante es usar la razón social correcta, no solo el nombre comercial.",
  },
  {
    question: "¿Qué pasa si la carta documento me llega devuelta?",
    answer:
      "Si la empresa rechaza recibirla o la dirección está mal, hay que actuar rápido. El Correo devuelve la pieza con detalle del intento de entrega, lo que también tiene valor probatorio (la empresa evitó recibir la notificación). En ese caso conviene consultar con un abogado para definir el siguiente paso.",
  },
  {
    question: "¿La carta documento interrumpe la prescripción del reclamo?",
    answer:
      "Sí. Bajo el artículo 2546 del Código Civil y Comercial, la intimación fehaciente interrumpe el plazo de prescripción. Esto es importante: si estás cerca de cumplir los 3 años desde que tomaste conocimiento del incumplimiento, enviar una carta documento puede ser urgente para no perder el derecho a reclamar.",
  },
];

const relatedPages = [
  {
    href: "/devolucion-cuotas-autoplan",
    label: "Devolución de cuotas de autoplan",
    description: "Qué tenés derecho a recuperar y cómo se calcula el reintegro.",
  },
  {
    href: "/salir-del-autoplan",
    label: "Cómo salir de un autoplan",
    description: "Opciones para desvincularte del plan y qué implica cada una.",
  },
  {
    href: "/demora-entrega-autoplan",
    label: "Demora en la entrega del auto",
    description: "Qué hacer cuando el vehículo no llega en el tiempo prometido.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Carta documento por autoplan: cuándo mandarla y qué incluir",
      description:
        "Guía práctica sobre la carta documento en reclamos de autoplanes: cuándo enviarla, qué debe incluir, diferencia con telegrama colacionado, y qué hacer si la empresa no responde.",
      url: `${SITE_CONFIG.canonicalUrl}/carta-documento-autoplan`,
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
          name: "Carta documento por autoplan",
          item: `${SITE_CONFIG.canonicalUrl}/carta-documento-autoplan`,
        },
      ],
    },
  ],
};

export default function CartaDocumentoAutoplanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <SeoHero
          title="Carta documento por autoplan: cuándo mandarla y qué incluir"
          titleHighlight="autoplan"
          description="La carta documento es el primer paso formal ante un incumplimiento de tu plan de ahorro. Una bien redactada abre el camino al reclamo; una mal enviada puede complicarlo."
          secondaryLabel="Ver la landing principal"
          secondaryHref="/"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

          {/* Intro */}
          <p className="text-lg text-slate-600 leading-relaxed mb-12 pb-12 border-b border-slate-100">
            Cuando una empresa de autoplan incumple — demora la entrega, cambia condiciones, o
            directamente no responde — el primer paso formal que tenés disponible es la carta
            documento. Es una notificación fehaciente: tiene valor legal, genera prueba de que
            la empresa fue notificada, y en muchos casos interrumpe la prescripción del reclamo.
            Entender qué es, cuándo mandarla y qué debe decir puede marcar la diferencia entre
            un reclamo sólido y uno que se cae por cuestiones formales.
          </p>

          {/* Sección 1 */}
          <section aria-labelledby="que-es" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El instrumento
            </p>
            <h2 id="que-es" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué es una carta documento y para qué sirve en un autoplan
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              La carta documento es un envío postal registrado que el Correo Argentino certifica:
              quién la mandó, a quién, cuándo, y con qué contenido. Eso la convierte en{" "}
              <strong className="text-slate-800">prueba fehaciente</strong> ante cualquier
              instancia posterior — administrativa, judicial o de conciliación.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              En el contexto de un autoplan, sirve para varios fines concretos:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Notificar formalmente a la administradora o concesionaria que estás en conocimiento del incumplimiento.",
                "Exigir por escrito una solución concreta (entrega del vehículo, reintegro, corrección de cuotas) con un plazo determinado.",
                "Constituir en mora a la empresa, lo que tiene efectos sobre los intereses y daños reclamables.",
                "Interrumpir el plazo de prescripción de 3 años para accionar judicialmente (art. 2546 CCyCN).",
                "Crear un antecedente documentado antes de iniciar COPREC o juicio.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold text-blue-700">Base legal:</span> El derecho a
                exigir el cumplimiento del contrato o a rescindirlo por incumplimiento del
                proveedor está contemplado en el{" "}
                <strong>artículo 10 bis de la Ley 24.240</strong> de Defensa del Consumidor.
                La carta documento es el modo típico de ejercer ese derecho de forma documentada.
              </p>
            </div>
          </section>

          {/* Sección 2 */}
          <section aria-labelledby="cuando-mandar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El momento indicado
            </p>
            <h2 id="cuando-mandar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cuándo conviene enviar una carta documento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              No hay que esperar a agotar todas las instancias informales para enviarla. Estos son
              los escenarios más frecuentes en los que una carta documento es el paso adecuado:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Demora en la entrega del vehículo",
                  body: "Si ya te adjudicaron el auto o te dieron una fecha de entrega que no se cumplió, y las llamadas y mensajes no dieron resultado, la carta documento formaliza la exigencia y activa el reloj legal.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Cambio de condiciones sin tu consentimiento",
                  body: "Si la administradora modificó el monto de las cuotas por encima de lo pactado, cambió el modelo del vehículo, o alteró cualquier condición esencial del contrato sin notificación previa y tu aceptación, la carta fija esa situación por escrito.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Falta de respuesta ante consultas reiteradas",
                  body: "Si llevás semanas o meses sin obtener información concreta de la empresa pese a haberla contactado, la carta documento crea un registro formal de que agotaste la vía amigable.",
                },
                {
                  icon: <ArrowRight className="w-5 h-5 text-blue-500" />,
                  title: "Decisión de rescindir el contrato",
                  body: "Si ya tomaste la decisión de salir del plan por incumplimientos de la empresa, la carta documento es la notificación formal de rescisión que activa tu derecho a la devolución de lo abonado.",
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

          {/* Sección 3 */}
          <section aria-labelledby="que-incluir" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El contenido
            </p>
            <h2 id="que-incluir" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué debe incluir la carta documento
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Una carta documento efectiva tiene estructura clara: identifica a las partes, describe
              el incumplimiento con precisión, formula una exigencia concreta y fija un plazo. Estos
              son los elementos clave:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                {
                  doc: "Datos del remitente",
                  note: "Nombre completo, DNI, domicilio real. Asegurate de que coincidan con los del contrato.",
                },
                {
                  doc: "Datos del destinatario",
                  note: "Razón social completa de la administradora (no el nombre comercial), CUIT y domicilio legal.",
                },
                {
                  doc: "Identificación del plan",
                  note: "Número de grupo, orden, tipo de plan y vehículo. Todo lo que identifique tu contrato específico.",
                },
                {
                  doc: "Descripción del incumplimiento",
                  note: "Qué prometieron, qué no cumplieron, desde cuándo, y qué comunicaciones previas hubo.",
                },
                {
                  doc: "Exigencia concreta",
                  note: "Qué estás pidiendo: entrega del vehículo, devolución de cuotas, corrección de importes, rescisión.",
                },
                {
                  doc: "Plazo de respuesta",
                  note: "Típicamente 5 a 10 días hábiles. Aclará que el vencimiento del plazo sin respuesta habilitará acciones legales.",
                },
                {
                  doc: "Reserva de acciones legales",
                  note: "Frase que indica que te reservás el derecho a iniciar las acciones legales correspondientes en caso de incumplimiento.",
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

          {/* CTA intermedio */}
          <CtaBox
            heading="¿Necesitás ayuda para redactar la carta documento?"
            description={`${SITE_CONFIG.lawyer} puede revisar tu situación y orientarte sobre qué decir y a quién dirigirla. Consultá sin costo.`}
            buttonLabel="Consultar por WhatsApp"
          />

          {/* Sección 4 */}
          <section aria-labelledby="como-enviar" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              El envío
            </p>
            <h2 id="como-enviar" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Cómo enviarla y qué variantes existen
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              En Argentina hay tres formas principales de enviar una notificación fehaciente, cada
              una con distintos usos y costos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {[
                {
                  title: "Carta documento",
                  desc: "La más común. Se envía desde Correo Argentino con acuse de recibo. Permite texto extendido, es registrada y queda copia en el correo.",
                  tag: "Más usada",
                  color: "blue",
                },
                {
                  title: "Telegrama colacionado",
                  desc: "Más económico. El texto viaja por telegrama pero queda certificado. Tiene la misma validez legal pero está limitado en extensión.",
                  tag: "Más económico",
                  color: "green",
                },
                {
                  title: "Carta notarial",
                  desc: "Redactada y enviada por escribano público. Tiene mayor formalidad y costo. Se usa cuando el monto en juego lo justifica o para casos complejos.",
                  tag: "Mayor formalidad",
                  color: "purple",
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
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm leading-relaxed">
                  <span className="font-semibold">Lo que no vale como notificación fehaciente:</span>{" "}
                  WhatsApp, email sin acuse formal, llamados telefónicos, mensajes de redes sociales.
                  Si la empresa no reconoce haberlos recibido, son difíciles de probar. Guardá todo
                  igualmente como documentación complementaria, pero no reemplazan a la carta documento.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section aria-labelledby="sin-respuesta" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Después de enviarla
            </p>
            <h2 id="sin-respuesta" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Qué hacer si la empresa no responde
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              El silencio de la empresa no te deja en punto muerto — al contrario. Una carta
              documento sin respuesta en el plazo estipulado es una pieza de evidencia que muestra
              que notificaste el incumplimiento y la empresa no actuó. El siguiente paso habitual
              es presentarse en <strong className="text-slate-800">COPREC</strong> (Conciliación
              Previa en las Relaciones de Consumo): una instancia gratuita y obligatoria antes de
              ir a juicio, donde un conciliador intenta que las partes lleguen a un acuerdo.
            </p>
            <ul className="space-y-3 mb-5">
              {[
                "Si hay acuerdo en COPREC, se firma y tiene fuerza ejecutiva.",
                "Si no hay acuerdo, obtenés un certificado de mediación frustrada que habilita la vía judicial.",
                "En paralelo, podés denunciar ante la Defensa del Consumidor municipal o provincial.",
                "Si el incumplimiento es grave y reiterado, el juez puede aplicar daño punitivo (art. 52 bis Ley 24.240).",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 text-sm">
              Si querés iniciar el COPREC,{" "}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-2"
              >
                escribinos antes
              </a>
              . El modo en que está redactada la carta documento puede influir en cómo se presenta
              el caso en la audiencia.
            </p>
          </section>

          {/* Errores frecuentes */}
          <section aria-labelledby="errores" className="mb-14">
            <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest mb-2">
              Lo que conviene evitar
            </p>
            <h2 id="errores" className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              Errores frecuentes al enviar una carta documento
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
                  title: "Dirigirla al nombre comercial en lugar de la razón social",
                  body: "\"Plan Óvalo\" no es una empresa jurídica. El destinatario debe ser Volkswagen Argentina S.A. o la razón social que firma el contrato.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
                  title: "Usar una dirección incorrecta",
                  body: "Mandala al domicilio legal del contrato o al declarado en el INAES/CNV. Si la devuelven, también tiene valor probatorio, pero es mejor que llegue.",
                },
                {
                  icon: <FileText className="w-5 h-5 text-blue-500" />,
                  title: "No guardar el acuse de recibo",
                  body: "El talón que confirma que la carta fue entregada es tan importante como la carta misma. Guardalo junto con el duplicado del texto.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
                  title: "Pedir demasiadas cosas a la vez sin claridad",
                  body: "Una carta que mezcla demandas sin orden dificulta la respuesta y puede debilitar el reclamo. Mejor concisa y específica.",
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

          <FaqBlock faqs={faqs} heading="Preguntas frecuentes sobre la carta documento en autoplanes" />

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
        heading={`¿Necesitás enviar una carta documento por tu autoplan?`}
        description={`${SITE_CONFIG.lawyer} te orienta sobre qué decir, a quién dirigirla y qué hacer si la empresa no responde. Consulta sin costo.`}
        buttonLabel="Hablar por WhatsApp"
        variant="full"
      />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
