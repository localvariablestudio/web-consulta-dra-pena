import { useEffect, useRef, useState } from "react";

const whatsappUrl =
  "https://wa.me/?text=Hola%2C%20quisiera%20reservar%20una%20hora%20con%20la%20Dra.%20Anamar%C3%ADa%20Pe%C3%B1a.";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Independencia%202522%2C%20Independencia%2C%20Chile";

function WhatsAppIcon() {
  return <img src="/assets/f3e85.svg" alt="" width="44" height="44" aria-hidden="true" />;
}

export default function App() {
  const [showCallDialog, setShowCallDialog] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!showCallDialog) return;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowCallDialog(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [showCallDialog]);

  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <h1 id="page-title">
          Consulta Pediátrica
          <br />
          Dra. Anamaría Peña
        </h1>

        <img
          className="portrait"
          src="/assets/d332d.png"
          alt="Dra. Anamaría Peña"
          width="334"
          height="270"
        />

        <a
          className="whatsapp-primary action"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Reservar hora en WhatsApp"
        >
          <WhatsAppIcon />
          <span>
            Reservar hora
            <br />
            en WhatsApp
          </span>
        </a>
      </section>

      <section className="description" aria-label="Atención pediátrica">
        <p className="intro">
          Atención integral y personalizada para recién nacidos, niños, niñas y adolescentes.
        </p>
        <ul>
          <li>
            <strong>Consulta médica</strong> especialidad Pediatría e Infectología Infantil.
          </li>
          <li>
            <strong>Control de niño sano</strong> desde recién nacido.
          </li>
          <li>Atención de enfermedades agudas en niños, niñas y adolescentes.</li>
          <li>
            <strong>Valoraciones de salud</strong> para estudiantes del Programa de Integración
            Escolar (PIE).
          </li>
          <li>
            <strong>Particular</strong>, <strong>Fonasa</strong> e <strong>Isapre</strong> (Colmena,
            Cruz Blanca y Consalud).
          </li>
          <li>
            <strong>Telemedicina</strong>.
          </li>
        </ul>
      </section>

      <section className="location" aria-labelledby="location-title">
        <div className="location-copy">
          <h2 id="location-title">Encuéntranos en</h2>
          <p>Independencia 2522, Independencia</p>
        </div>

        <a
          className="map-link"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir ubicación de la consulta en Google Maps"
        >
          <img
            src="/assets/055b6.png"
            alt="Mapa de la consulta en Independencia 2522"
            width="334"
            height="310"
          />
          <span>Abrir mapa</span>
        </a>

        <div className="schedule">
          <h2>Horario de atención:</h2>
          <ul>
            <li>Lunes, Martes, Jueves: 12-6pm</li>
            <li>Miércoles: 10:00am-5:30pm</li>
          </ul>
        </div>
      </section>

      <nav className="contact-actions" aria-label="Opciones de contacto">
        <button className="call action" type="button" onClick={() => setShowCallDialog(true)}>
          <img src="/assets/90394.svg" alt="" width="44" height="44" aria-hidden="true" />
          <span>Llamar</span>
        </button>
        <a
          className="whatsapp-secondary action"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </nav>

      {showCallDialog && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setShowCallDialog(false);
          }}
        >
          <div
            className="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            <h2 id="dialog-title">Contacto telefónico</h2>
            <p>
              El número no está publicado. Escríbenos por WhatsApp para reservar una hora o
              solicitarlo.
            </p>
            <div className="dialog-actions">
              <button ref={closeButtonRef} type="button" onClick={() => setShowCallDialog(false)}>
                Volver
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setShowCallDialog(false)}
              >
                Ir a WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
