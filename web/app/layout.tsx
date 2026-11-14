import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { siteUrl } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pediatra en Independencia | Dra. Anamaría Peña",
  description:
    "Consulta pediátrica en Independencia y telemedicina. Dra. Anamaría Peña, pediatra con más de 30 años de experiencia.",
  alternates: { canonical: "/" },
  applicationName: "Consulta Pediátrica Dra. Anamaría Peña",
  authors: [{ name: "Dra. Anamaría Peña" }],
  creator: "Dra. Anamaría Peña",
  openGraph: {
    type: "website",
    locale: "es_CL",
    title: "Pediatra en Independencia | Dra. Anamaría Peña",
    description:
      "Consulta pediátrica en Independencia y telemedicina con la Dra. Anamaría Peña, pediatra con más de 30 años de experiencia.",
    siteName: "Consulta Pediátrica Dra. Anamaría Peña",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pediatra en Independencia | Dra. Anamaría Peña",
    description:
      "Consulta pediátrica en Independencia y telemedicina con la Dra. Anamaría Peña, pediatra con más de 30 años de experiencia.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: "#f8f3e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-CL">
      <body>{children}</body>
    </html>
  );
}
