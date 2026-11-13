import Image from "next/image";
import ContactDialog from "@/components/contact-dialog";

const whatsappUrl =
  "https://wa.me/56973896121";
const phoneNumber = "+56227349542";
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Independencia%202522%2C%20Independencia%2C%20Chile";

function WhatsAppIcon() {
  return <Image src="/assets/whatsapp.svg" alt="" width={44} height={44} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="page-title">
        <h1 id="page-title">
          Consulta Pediátrica
          <br />
          Dra. Anamaría Peña
        </h1>

        <Image
          className="portrait"
          src="/assets/portrait.png"
          alt="Dra. Anamaría Peña"
          width={334}
          height={270}
          priority
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
            <strong>Particular</strong>, <strong>Fonasa</strong> e <strong>Isapre</strong>{" "}
            (Colmena, Cruz Blanca y Consalud).
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
          <Image
            src="/assets/consultation-map.png"
            alt="Mapa de la consulta en Independencia 2522"
            fill
            sizes="(min-width: 760px) 50vw, 100vw"
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
        {phoneNumber ? (
          <a className="call action" href={`tel:${phoneNumber}`}>
            <Image src="/assets/phone.svg" alt="" width={44} height={44} aria-hidden="true" />
            <span>Llamar</span>
          </a>
        ) : (
          <ContactDialog />
        )}
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
    </main>
  );
}
