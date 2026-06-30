"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  function toggle(i: number) {
    setOpen(open === i ? null : i);
  }

  return (
    <section className="section-pad" id="faq">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Preguntas frecuentes</span>
          <h2>Lo que más se consulta</h2>
          <p>Respuestas directas a las dudas más comunes sobre reclamos por autoplanes.</p>
        </div>

        <div className="faq-list reveal">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button
                className="faq-q"
                aria-expanded={open === i}
                onClick={() => toggle(i)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div
                className="faq-a"
                style={{ maxHeight: open === i ? "600px" : undefined }}
              >
                <div className="faq-a-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
