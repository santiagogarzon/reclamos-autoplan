import { DOCS, WHATSAPP_HREF } from "@/lib/constants";
import { FileText, ArrowRight, CheckCircle } from "lucide-react";

export default function Documentation() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Documentación
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Si tenés esto, mejor
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Tener documentación ayuda a analizar tu caso más rápido. Pero no
              es un requisito para consultar — empezamos con lo que tengas.
            </p>

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm leading-relaxed">
                <span className="font-semibold">Si no tenés todo, igual podés escribirnos.</span>
                {" "}Vemos juntos qué tenés disponible y cómo avanzar desde ahí.
              </p>
            </div>
          </div>

          {/* Right: docs list */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-slate-700 text-sm">Documentos útiles</span>
            </div>
            <ul className="space-y-3 mb-6">
              {DOCS.map((doc, index) => (
                <li key={index} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{doc}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold text-sm transition-colors group"
            >
              Escribir sin tener todo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
