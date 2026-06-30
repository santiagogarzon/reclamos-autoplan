"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín R.",
    city: "Buenos Aires",
    initials: "MR",
    color: "from-blue-500 to-indigo-600",
    result: "Entrega del vehículo + compensación",
    months: 18,
    text: "Llevaba 18 meses esperando y la concesionaria me daba una excusa distinta cada vez. Contacté a Nicolás sin saber muy bien qué esperar, y en pocos meses tuvimos una resolución favorable. Ojalá hubiera consultado mucho antes.",
  },
  {
    name: "Valeria C.",
    city: "Mendoza",
    initials: "VC",
    color: "from-violet-500 to-purple-600",
    result: "Caso resuelto favorablemente",
    months: 9,
    text: "Me cambiaron el modelo del auto sin avisarme y no sabía si podía hacer algo. Nicolás me explicó todo con claridad y avanzamos. Fue mucho más simple de lo que pensaba. Muy buena atención y respuesta rápida.",
  },
  {
    name: "Rodrigo F.",
    city: "Santa Fe",
    initials: "RF",
    color: "from-emerald-500 to-teal-600",
    result: "Recuperó lo pagado",
    months: 24,
    text: "Pagué 24 cuotas y el auto nunca llegó. La empresa no respondía absolutamente nada. Gracias a la consulta entendí que tenía más opciones de las que creía. Proceso claro, sin vueltas, y con resultados concretos.",
  },
  {
    name: "Ana L.",
    city: "Córdoba",
    initials: "AL",
    color: "from-orange-500 to-amber-600",
    result: "Reclamo resuelto",
    months: 12,
    text: "Me presionaban para firmar una prórroga y no entendía qué estaba firmando. Consulté por WhatsApp a la noche y al día siguiente ya tenía respuesta. Atención directa, sin burocracia. Los recomiendo totalmente.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Casos reales
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-5">
            Personas que pasaron por lo mismo que vos
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Nombres abreviados por privacidad. Situaciones reales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-blue-100" aria-hidden="true" />
                <p className="text-slate-600 leading-relaxed pl-5 text-sm sm:text-base">
                  {t.text}
                </p>
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full self-start">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                {t.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-[#0F172A] font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.city} · Esperó {t.months} meses</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          Cada caso es distinto. Los resultados dependen de los hechos y circunstancias particulares.
        </p>
      </div>
    </section>
  );
}
