# web-consulta-dra-pena

Sitio web de la consulta pediátrica de la Dra. Anamaría Peña.

## Aplicación Next.js

La aplicación de producción está en [`web/`](./web). La versión generada originalmente en Figma se conserva en [`figma/Consulta Pediátrica/`](./figma/Consulta%20Pedi%C3%A1trica/) como referencia visual.

Requisitos:

- Node.js 24
- pnpm 12

Comandos locales:

```bash
cd web
pnpm install
pnpm dev
```

Validaciones:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Despliegue

El workflow [`deploy.yml`](./.github/workflows/deploy.yml) valida y despliega la aplicación a Vercel en cada `push` a `main`. También puede ejecutarse manualmente desde GitHub Actions.

Configura estos secrets en el repositorio de GitHub:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

El proyecto de Vercel debe usar `web` como directorio raíz. Si se configura un dominio, agrega `NEXT_PUBLIC_SITE_URL` al entorno de producción para generar correctamente el sitemap, robots.txt y la URL canónica.

El número telefónico todavía no está publicado: debe configurarse en `web/app/page.tsx` antes de activar el enlace `tel:`.
