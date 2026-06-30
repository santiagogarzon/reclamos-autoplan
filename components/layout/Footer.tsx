import Link from "next/link";
import { SITE_CONFIG, WHATSAPP_HREF } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="brand">
              <div className="brand-mark">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v3m0 0L9 9m3-3 3 3M3 20h18M5 20l2-4m10 4-2-4M9 12l-2 4M15 12l2 4M9 12h6"/></svg>
              </div>
              <div>
                <span className="brand-name">{SITE_CONFIG.lawyer}</span>
                <span className="brand-sub">Abogado · Reclamos Autoplan</span>
              </div>
            </div>
            <p className="footer-about">
              Asesoramiento en reclamos por demoras e incumplimientos en autoplanes. Más de 100 casos favorables en toda Argentina.
            </p>
            <p className="footer-disclaimer">
              La información de este sitio es de carácter orientativo y no constituye asesoramiento legal formal.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>
                <span className="fc-line">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {SITE_CONFIG.city}
                </span>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/demora-entrega-autoplan">Demora en entrega</Link></li>
              <li><Link href="/reclamo-plan-ahorro">Reclamo plan ahorro</Link></li>
              <li><Link href="/salir-del-autoplan">Salir del autoplan</Link></li>
              <li><Link href="/cambiaron-condiciones-autoplan">Cambio de condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 {SITE_CONFIG.lawyer}. Todos los derechos reservados.</p>
          <p>Córdoba, Argentina</p>
        </div>
      </div>
    </footer>
  );
}
