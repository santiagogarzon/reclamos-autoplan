"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqBlockProps {
  faqs: FaqItem[];
  heading?: string;
}

export default function FaqBlock({
  faqs,
  heading = "Preguntas frecuentes",
}: FaqBlockProps) {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-8">
        {heading}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <FaqAccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

function FaqAccordionItem({
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
    <div
      className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
        open
          ? "border-blue-200 shadow-md shadow-blue-500/10"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0F172A] leading-snug pr-2">
          {question}
        </span>
        <div
          className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            open ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
          }`}
        >
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
