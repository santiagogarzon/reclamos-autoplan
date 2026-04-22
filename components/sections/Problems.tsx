import { PROBLEMS, WHATSAPP_HREF } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const icons = ["⏳", "💸", "🔇", "🔀", "🔒"];

export default function Problems() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Te resulta familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Situaciones que vemos todos los días
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Si alguna de estas situaciones te identifica, puede que tengas más
            opciones de las que creés.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {PROBLEMS.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div className="text-2xl mb-3">{icons[index]}</div>
              <p className="text-[#0F172A] font-medium leading-snug">
                {problem}
              </p>
              <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
            </div>
          ))}

          {/* Last card — CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 flex flex-col justify-between">
            <p className="text-white font-semibold text-lg leading-snug mb-6">
              Si te sentís identificado, podemos ayudarte a entender cómo
              avanzar.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm px-4 py-2.5 rounded-xl transition-colors self-start"
            >
              Contanos tu caso
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
