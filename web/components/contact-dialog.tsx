"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const whatsappUrl =
  "https://wa.me/?text=Hola%2C%20quisiera%20reservar%20una%20hora%20con%20la%20Dra.%20Anamar%C3%ADa%20Peña.";

export default function ContactDialog() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <button className="call action" type="button" onClick={() => setOpen(true)}>
        <Image src="/assets/phone.svg" alt="" width={44} height={44} aria-hidden="true" />
        <span>Llamar</span>
      </button>

      {open && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <h2 id="dialog-title">Contacto telefónico</h2>
            <p>
              El número no está publicado. Escríbenos por WhatsApp para reservar una hora o
              solicitarlo.
            </p>
            <div className="dialog-actions">
              <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)}>
                Volver
              </button>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Ir a WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
