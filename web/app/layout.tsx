import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Consulta Pediátrica Dra. Anamaría Peña",
  description:
    "Atención pediátrica integral y personalizada para recién nacidos, niños, niñas y adolescentes en Independencia, Chile.",
  applicationName: "Consulta Pediátrica Dra. Anamaría Peña",
  authors: [{ name: "Dra. Anamaría Peña" }],
  creator: "Dra. Anamaría Peña",
  openGraph: {
    type: "website",
    locale: "es_CL",
    title: "Consulta Pediátrica Dra. Anamaría Peña",
    description:
      "Atención pediátrica integral y personalizada en Independencia, Chile.",
    siteName: "Consulta Pediátrica Dra. Anamaría Peña",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulta Pediátrica Dra. Anamaría Peña",
    description:
      "Atención pediátrica integral y personalizada en Independencia, Chile.",
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
