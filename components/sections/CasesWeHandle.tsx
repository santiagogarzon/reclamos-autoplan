import { CASES, WHATSAPP_HREF } from "@/lib/constants";
import { Clock, CalendarX, AlertTriangle, MessageSquareOff, HelpCircle, ArrowRight } from "lucide-react";

const caseIcons = [Clock, CalendarX, AlertTriangle, MessageSquareOff, HelpCircle];
const caseColors = [
  "from-blue-500 to-blue-600",
  "from-indigo-500 to-indigo-600",
  "from-violet-500 to-violet-600",
  "from-sky-500 to-sky-600",
  "from-slate-500 to-slate-600",
];

export default function CasesWeHandle() {
  return (
    <section id="casos" className="bg-[#F8FAFC] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            ¿Aplica tu situación?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Casos que analizamos
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Si tu situación encaja en alguno de estos puntos, es buen momento
            para consultar.
          </p>
        </div>

        {/* Cases grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {CASES.map((item, index) => {
            const Icon = caseIcons[index];
            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 hover:border-blue-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${caseColors[index]} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-[#0F172A] font-bold mb-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold transition-colors group text-base"
          >
            Consultá si tu caso aplica
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
