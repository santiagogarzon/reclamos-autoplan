"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Preguntas frecuentes sobre demoras en autoplanes
          </h2>
          <p className="text-slate-500 text-lg">
            Respuestas directas a las dudas más comunes.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${open ? "border-blue-200 shadow-md shadow-blue-500/10" : "border-slate-200 hover:border-slate-300"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0F172A] leading-snug pr-2">
          {question}
        </span>
        <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${open ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-0">
          <div className="h-px bg-slate-100 mb-4" />
          <p className="text-slate-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
