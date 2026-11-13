import Image from "next/image";
import ContactDialog from "@/components/contact-dialog";

const whatsappUrl =
  "https://wa.me/56973896121";
const phoneNumber = "+56227349542";

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

        <iframe
          className="map-link"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.265588682141!2d-70.66512212422407!3d-33.40309006023785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c7c0cfc89ec1%3A0xb66f312d30c8d205!2sConsulta%20Pedi%C3%A1trica%20Dra.%20Anamar%C3%ADa%20Pe%C3%B1a!5e1!3m2!1sen!2scl!4v1794592774196!5m2!1sen!2scl"
          title="Mapa de la consulta pediátrica en Independencia 2522"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

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
