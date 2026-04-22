import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface RelatedPage {
  href: string;
  label: string;
  description: string;
}

interface RelatedPagesProps {
  heading?: string;
  pages: RelatedPage[];
}

export default function RelatedPages({
  heading = "También puede interesarte",
  pages,
}: RelatedPagesProps) {
  return (
    <section className="py-12 border-t border-slate-100">
      <h2 className="text-lg font-semibold text-[#0F172A] mb-5">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="group flex items-start justify-between gap-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl p-5 transition-all duration-200"
          >
            <div>
              <p className="font-semibold text-[#0F172A] group-hover:text-blue-700 transition-colors text-sm mb-1">
                {page.label}
              </p>
              <p className="text-slate-500 text-xs leading-relaxed">
                {page.description}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
