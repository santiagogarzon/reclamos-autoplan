import { DOCS, WHATSAPP_HREF } from "@/lib/constants";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

const CHECK = (
  <svg className="di-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function Documentation() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="doc-split">
          {/* Left: text */}
          <div className="reveal">
            <span className="eyebrow" style={{ marginBottom: "20px" }}>Documentación</span>
            <h2 style={{ marginTop: "4px", marginBottom: "18px" }}>Si tenés esto, mejor</h2>
            <p style={{ color: "var(--muted)", fontSize: "17px", marginBottom: "24px" }}>
              Tener documentación ayuda a analizar tu caso más rápido. Pero no es un
              requisito para consultar — empezamos con lo que tengas.
            </p>
            <div className="doc-note">
              <p>
                <strong>Si no tenés todo, igual podés escribirnos.</strong> Vemos
                juntos qué tenés disponible y cómo avanzar desde ahí.
              </p>
            </div>
          </div>

          {/* Right: docs list */}
          <div className="reveal">
            <ul className="doc-list">
              {DOCS.map((doc, i) => (
                <li key={i} className="doc-item">
                  {CHECK}
                  {doc}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "28px" }}>
              <WhatsAppLink location="documentation" className="arrow-link">
                Escribir sin tener todo →
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
