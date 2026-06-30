import { CASES, WHATSAPP_HREF } from "@/lib/constants";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

const romanNumerals = ["I", "II", "III", "IV", "V"];

export default function CasesWeHandle() {
  return (
    <section id="casos" className="section-pad band-alt">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">¿Aplica tu situación?</span>
          <h2>Casos que analizamos</h2>
          <p>Si tu situación encaja en alguno de estos puntos, es buen momento para consultar.</p>
        </div>

        <div className="case-grid reveal">
          {CASES.map((item, i) => (
            <div key={i} className="case-card">
              <span className="cc-mark">{romanNumerals[i]}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          <div className="case-card case-wide" style={{ background: "var(--ink)", borderColor: "var(--navy-2)" }}>
            <span className="cc-mark" style={{ color: "var(--gold-bright)" }}>→</span>
            <div>
              <h3 style={{ color: "var(--paper)" }}>¿Tu caso no aparece acá?</h3>
              <p style={{ color: "var(--on-dark-mut)" }}>
                Cada situación es diferente. Contanos tu caso y lo analizamos sin costo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
