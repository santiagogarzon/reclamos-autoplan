import Link from "next/link";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

interface SeoHeroProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  ctaLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function SeoHero({
  eyebrow = "Nicolás Silva · Abogado",
  title,
  titleHighlight,
  description,
  ctaLabel = "Consultar por WhatsApp",
  secondaryLabel,
  secondaryHref,
}: SeoHeroProps) {
  const [before, after] = titleHighlight
    ? title.split(titleHighlight)
    : [title, ""];

  return (
    <section className="relative bg-[#0B1120] overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-600/15 rounded-full blur-[60px]" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-24">
        <nav aria-label="breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-300 transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-700">/</li>
            <li className="text-slate-400 truncate max-w-[200px]" aria-current="page">
              {title.slice(0, 50)}…
            </li>
          </ol>
        </nav>

        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          {eyebrow}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5 max-w-3xl">
          {titleHighlight ? (
            <>
              {before}
              <span className="text-gradient">{titleHighlight}</span>
              {after}
            </>
          ) : (
            title
          )}
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <WhatsAppLink
            location="seo_hero"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DAE56] text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-green-900/30 hover:scale-[1.02]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {ctaLabel}
          </WhatsAppLink>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
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
