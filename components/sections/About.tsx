import { BadgeCheck, MapPin, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#0B1120] to-[#0f2456] rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/20 blur-[60px]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-indigo-600/15 blur-[50px]" aria-hidden="true" />

              {/* Avatar placeholder */}
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
                <span className="text-3xl font-bold text-white">NS</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {SITE_CONFIG.lawyer}
              </h3>
              <p className="text-blue-300 text-sm font-medium mb-6">
                Abogado · Córdoba, Argentina
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-0.5">+100</div>
                  <div className="text-slate-400 text-xs">Casos favorables</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-white mb-0.5">🇦🇷</div>
                  <div className="text-slate-400 text-xs">Todo el país</div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5">
              <BadgeCheck className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">Abogado matriculado</span>
            </div>
            <div className="absolute -top-4 -left-4 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2.5">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold text-slate-700">Atención directa</span>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Quién va a analizar tu caso
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
              Especialista en reclamos por autoplanes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Nicolás Silva es abogado en Córdoba, Argentina, y se especializa en
              reclamos por demoras e incumplimientos en autoplanes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Cuenta con más de 100 casos favorables, trabajando directamente con
              personas que necesitan respuestas claras frente a problemas con
              concesionarias y administradoras.
            </p>

            {/* Quote */}
            <div className="border-l-4 border-blue-500 pl-5 bg-blue-50 rounded-r-xl py-4 pr-5 mb-8">
              <p className="text-slate-700 italic leading-relaxed">
                "Entender el caso rápido, explicar opciones sin vueltas y
                acompañar el proceso de forma clara."
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <MapPin className="w-3.5 h-3.5" />, label: "Córdoba, Argentina" },
                { icon: <BadgeCheck className="w-3.5 h-3.5" />, label: "Matriculado" },
                { icon: <Users className="w-3.5 h-3.5" />, label: "Toda Argentina" },
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-full">
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
