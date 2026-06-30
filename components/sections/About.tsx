import { SITE_CONFIG } from "@/lib/constants";

export default function About() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="about-grid">
          {/* Credential card */}
          <div className="cred-card reveal">
            <div className="cred-portrait">
              <span className="ph-monogram">NS</span>
            </div>
            <p className="cred-name">{SITE_CONFIG.lawyer}</p>
            <p className="cred-role">Abogado · Especialista en Reclamos de Autoplanes</p>
            <div className="cred-stats">
              <div className="cred-stat">
                <p className="cs-num">+{SITE_CONFIG.successCases}</p>
                <p className="cs-label">casos favorables</p>
              </div>
              <div className="cred-stat">
                <p className="cs-num">&lt;24hs</p>
                <p className="cs-label">tiempo de respuesta</p>
              </div>
              <div className="cred-stat">
                <p className="cs-num">100%</p>
                <p className="cs-label">atención directa</p>
              </div>
              <div className="cred-stat">
                <p className="cs-num">Cba.</p>
                <p className="cs-label">Argentina</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="about-body reveal">
            <span className="eyebrow" style={{ marginBottom: "20px", display: "inline-flex" }}>
              Quién va a analizar tu caso
            </span>
            <h2 style={{ marginTop: "4px", marginBottom: "22px" }}>
              Especialista en reclamos por autoplanes
            </h2>
            <p>
              Nicolás Silva es abogado en Córdoba, Argentina, especializado en
              reclamos por demoras e incumplimientos en planes de ahorro vehicular.
            </p>
            <p>
              Con más de <strong>100 casos favorables</strong>, trabaja directamente con
              personas que necesitan respuestas claras frente a problemas con
              concesionarias y administradoras.
            </p>
            <blockquote className="about-quote">
              "Entender el caso rápido, explicar las opciones sin vueltas y
              acompañar el proceso con claridad."
            </blockquote>
            <div className="pill-row">
              <span className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Córdoba, Argentina
              </span>
              <span className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                Abogado matriculado
              </span>
              <span className="pill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Atención en toda Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
