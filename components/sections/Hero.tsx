import { WHATSAPP_HREF, SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0B1120] overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 bg-dot-pattern" aria-hidden="true" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[80px]" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <Shield className="w-3.5 h-3.5" />
            Atendemos casos en toda Argentina
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            ¿Te demoraron la entrega de tu auto de{" "}
            <span className="text-gradient">autoplan</span>?
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
            Si ya pagaste, te prometieron una fecha y no cumplen, podrías estar
            frente a un incumplimiento. Analizamos tu caso y te orientamos para
            reclamar.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1DAE56] text-white font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 glow-green hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200"
            >
              Ver si mi caso aplica
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              `+${SITE_CONFIG.successCases} casos favorables`,
              "Atención directa",
              "Respuesta rápida",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat card */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block animate-float">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 w-52 text-center">
            <div className="text-5xl font-bold text-white mb-1">+100</div>
            <div className="text-sm text-slate-300 font-medium">Casos favorables</div>
            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-500">
              en reclamos por autoplanes
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
