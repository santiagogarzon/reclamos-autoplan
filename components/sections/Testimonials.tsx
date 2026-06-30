const testimonials = [
  {
    name: "Marcela G.",
    city: "Córdoba",
    initials: "MG",
    text: "Llevaba más de un año esperando y cada vez que llamaba me daban una excusa diferente. Gracias a Nicolás entendí que tenía herramientas para reclamar. En pocos meses tuvimos una resolución favorable. Ojalá lo hubiera consultado antes.",
  },
  {
    name: "Diego R.",
    city: "Río Cuarto",
    initials: "DR",
    text: "Me cambiaron el modelo sin avisarme y no sabía si podía hacer algo al respecto. Nicolás me explicó todo con claridad y sin vueltas. El proceso fue mucho más simple de lo que pensaba. Muy buena atención.",
  },
  {
    name: "Laura F.",
    city: "Villa María",
    initials: "LF",
    text: "Pagué cuotas por años y el auto nunca llegó. Consulté por WhatsApp a la noche y al día siguiente ya tenía respuesta. Atención directa, sin burocracia, y con resultados concretos. Los recomiendo totalmente.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad band-alt">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow center">Casos reales</span>
          <h2>Personas que pasaron por lo mismo que vos</h2>
          <p>Nombres abreviados por privacidad. Situaciones reales.</p>
        </div>

        <div className="testi-grid reveal">
          {testimonials.map((t) => (
            <div key={t.name} className="testi-card">
              <div className="quote-mark">"</div>
              <blockquote>{t.text}</blockquote>
              <div className="testi-meta">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <span className="tm-name">{t.name}</span>
                  <span className="tm-loc">{t.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--muted-2)", fontSize: "13.5px", marginTop: "32px" }}>
          Cada caso es distinto. Los resultados dependen de los hechos y circunstancias particulares.
        </p>
      </div>
    </section>
  );
}
