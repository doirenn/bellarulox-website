# bellarulox.com

Sitio estático de Marian Montilla, en Astro. Esta rama (`astro-rediseno`) no se publica sola: `main` sigue siendo el sitio actual en Vercel. No hay que mezclar esta rama con `main` ni cambiar el DNS hasta que Marian lo apruebe.

## Cómo verlo

```bash
npm install
npm run dev
```

Abre http://localhost:4321/

Para la versión que se publica:

```bash
npm run build
npm run preview
```

El build deja los archivos en `dist`.

## Cloudflare Pages

- Comando de build: `npm run build`
- Carpeta de salida: `dist`
- Node 22
- Las redirecciones 301 están en `public/_redirects` (se copian a `dist`).

## Páginas

- `/` Inicio
- `/que-te-encuentren/`
- `/mensajes-y-citas/`
- `/operaciones/`
- `/aprende/`
- `/podcast/`
- `/recursos/`
- `/protocolo-uso-seguro/` test de WhatsApp
- `/agenda/` llamada de 20 minutos
- `/contacto/` formulario, sin agenda
- `/en/` inicio en inglés

`/hiring/` redirige a `/`.

Redirecciones: `/arquitectura-b2b/` va a `/operaciones/` y `/del-caos-al-foco/` va a `/aprende/`.
