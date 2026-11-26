# Cambios y pendientes

Vista previa: https://bellarulox-web-preview.vercel.app

Este archivo describe el sitio de la rama `astro-rediseno`. `main` sigue siendo el sitio que está en vivo. No mezclar esta rama hasta que Marian lo apruebe.

En todas las páginas nuevas el menú es el mismo: Inicio, Que te encuentren, Mensajes y citas, Operaciones, Aprende, y el botón «Agenda una llamada». El pie incluye los cuatro frentes, Podcast, Recursos, Test WhatsApp, Webs en Manta, Hiring, el correo, WhatsApp, las redes, «En persona en Manta · Online a cualquier país» y las formas de pago. Ya no está la barra de la comunidad ni el botón de unirse a ella. El logo es el actual (`logo-fuscia.png`). El lema es «Create. Organize. Manifest.».

## Cómo pedir cambios

Responde por número. Un ejemplo: «Inicio 3: cambia esto».

Los números de «Decisiones pendientes» valen para todo el sitio. Los números de cada página (Inicio 1, Que te encuentren 2, y así) valen solo para esa página.

## Decisiones pendientes

1. Precio local (Ecuador) de «Revisión de tu negocio». Hoy dice «desde [POR DEFINIR]». El precio internacional ya está en 150 USD.
2. Precio del blog (mínimo 4 artículos al mes). Hoy dice «desde [POR DEFINIR] al mes».
3. Nombre del plan internacional de 450 USD al mes. Hoy el nombre dice «[POR DEFINIR]» porque choca con el paquete local Web Esencial.
4. Precio de la sesión 1 a 1. Hoy dice «[POR DEFINIR]».
5. Qué talleres van en Aprende. Hoy las próximas fechas dicen «[POR DEFINIR]».
6. Qué ofrecer tras un bloqueo permanente de WhatsApp. Hoy esa tarjeta dice «[POR DEFINIR]». El texto deja claro que Meta decide si una cuenta vuelve o si una cuenta nueva queda limitada.
7. Confirmar el formulario de Kit de la newsletter y la etiqueta de la lista de espera. El formulario del inicio usa el mismo Kit que hiring (`fc551c7a63`, formulario 7554780). La lista de espera no tiene etiqueta: si se muestra, el formulario abre WhatsApp.
8. Agenda 2027. El bloque está armado y oculto (`src/data/agenda.json`, `mostrar: false`) para no alterar la maqueta de inicio. Falta decidir si se publica, si los cupos están abiertos o llenos, y cuántos cupos mostrar.
9. Hosting: Cloudflare Pages (build `npm run build`, carpeta `dist`) o seguir en Vercel. La vista previa de arriba está en Vercel. El DNS y el sitio de `main` no se han cambiado.

Además, antes de publicar, el calendario de «Agenda una llamada» (https://calendar.app.google/JorUwfy67LtHwWzF8) tiene que quedar en los horarios libres: mediodía entre semana, noches y sábados, con citas de 30 minutos. Ese mismo enlace está en el menú, el pie y los botones de las páginas.

## Inicio `/`

Vista previa: https://bellarulox-web-preview.vercel.app/

### Qué cambió

El inicio anterior hablaba de la idea del cliente, de la comunidad y de arquitectura B2B. Esta página sigue la maqueta: titular sobre tiempo, clientes o tranquilidad, métricas (250+ proyectos, 25 países, 10+ años), foto en arco, los cuatro frentes, Revisión de tu negocio, combo Presencia local (510 tachado, 350 USD), cómo trabajo, sobre mí, un bloque de podcast y la newsletter. El reproductor del inicio es un dibujo, no el episodio real. El episodio real está en `/podcast/`.

### Pendientes

1. Inicio 1. Confirmar el precio de Ecuador en Revisión de tu negocio. Ver decisión 1.
2. Inicio 2. Decidir si la agenda 2027 se muestra. Ver decisión 8.
3. Inicio 3. Confirmar que el formulario «Suscribirme» es el de la newsletter y no solo el de hiring. Ver decisión 7.
4. Inicio 4. El bloque «Último episodio» no nombra un episodio. La barra de avance es decorativa. Confirmar si se queda así o si se cambia por el reproductor real de Spotify.
5. Inicio 5. Confirmar que la foto recortada del arco es la que se publica. La foto anterior del sitio (`marian.png`) sigue en el repo y no se muestra.
6. Inicio 6. La imagen al compartir el enlace (`og-image.jpg`) es la del sitio anterior. Confirmar si se reemplaza.
7. Inicio 7. Ajustar la disponibilidad del calendario antes de publicar. El botón ya abre el enlace correcto.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. Es el logo anterior. |
| Retrato en arco | Hero | `/assets/marian-cut.png` | Sin URL pública. Viene del paquete de maquetas. | En uso. Por confirmar (Inicio 5). |
| Luna sobre el arco | Hero | `/assets/luna_estrella_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Estrellas del lema | Franja Create. Organize. Manifest. | `/assets/estrella_ocho_puntas_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de problemas | Problemas que quizás no sabías que tenías | `ojo_mistico_purpura.svg`, `luna_creciente_purpura.svg`, `vela_purpura.svg`, `cristales_purpura.svg`, `llave_purpura.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de los cuatro frentes | Cómo te ayudo | `ojo_mistico_dorado.svg`, `luna_creciente_dorado.svg`, `llave_dorado.svg`, `loto_dorado.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Divisor de lunas | Antes de podcast y newsletter | `/assets/divisor_fases_lunares_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Portada del bloque de podcast | Podcast | `/assets/luna_estrella_dorado.svg` | Sin URL pública. Kit de marca. | En uso. No es la carátula del programa. |
| Imagen al compartir | Todas las páginas | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada del sitio anterior. Por confirmar (Inicio 6). |
| Favicon | Todas las páginas | `/favicon.png` | https://bellarulox.com/favicon.png | En uso. |
| Foto anterior de Marian | No se muestra | `/assets/marian.png` | https://bellarulox.com/marian.png | No se muestra. |
| Logo negro anterior | No se muestra | `/assets/logo-negro.png` | https://bellarulox.com/logo-negro.png | No se muestra. El menú usa el logo fucsia. |

## Que te encuentren `/que-te-encuentren/`

Vista previa: https://bellarulox-web-preview.vercel.app/que-te-encuentren/

### Qué cambió

Esta página no existía. El sitio anterior no tenía un frente de web, Google Business y SEO local en bellarulox.com. Los paquetes de webs siguen en https://sitios.bellarulox.com/ y los botones «Ver estilos y paquetes» abren ese sitio. La tabla trae Web Esencial (desde 240 USD, renovación desde 55), Web Profesional (desde 480, renovación desde 60), Web Negocio (desde 600, renovación desde 70), Google Business (150 USD) y el combo Presencia local (350 USD, por separado 510).

### Pendientes

1. Que te encuentren 1. Precio local de Revisión de tu negocio. Ver decisión 1.
2. Que te encuentren 2. Precio de los blogs. Ver decisión 2.
3. Que te encuentren 3. «Video y fotos con Germán» dice «Cotizar». Confirmar si ese texto se queda.
4. Que te encuentren 4. Confirmar que los dos botones de estilos y paquetes deben ir a https://sitios.bellarulox.com/ y no a una página interna.
5. Que te encuentren 5. No hay fotos de webs de ejemplo ni del local. Confirmar si hace falta alguna.
6. Que te encuentren 6. El dominio se describe como «aprox. 12 a 20 USD al año». Confirmar el rango.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono «¿Te suena?» | Hero | `/assets/ojo_mistico_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de qué incluye | Qué incluye | `estrella_ocho_puntas_dorado.svg`, `llave_dorado.svg`, `ojo_mistico_dorado.svg`, `vela_dorado.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Mensajes y citas `/mensajes-y-citas/`

Vista previa: https://bellarulox-web-preview.vercel.app/mensajes-y-citas/

### Qué cambió

Página nueva. En el sitio anterior este contenido no tenía ruta propia. Aquí están la auditoría de WhatsApp, el mensaje de fuera de horario, la asesoría para verificar en Meta, la agenda en línea, el sistema de agendamiento (desde 15 USD al mes por local) y los recordatorios. El precio publicado de la auditoría más la asesoría es 120 USD. El combo Presencia local se repite (350 USD, 510 tachado). Hay un aviso de que Meta decide los límites de una cuenta y de que no se recuperan números bloqueados. El segundo botón abre el test en `/protocolo-uso-seguro/`.

### Pendientes

1. Mensajes y citas 1. Precio local de Revisión de tu negocio. Ver decisión 1.
2. Mensajes y citas 2. «Agenda, automatizaciones y recordatorios» dice «Cotizar según lo que necesites». Confirmar si se queda así.
3. Mensajes y citas 3. No hay captura del sistema de agendamiento ni de un mensaje de fuera de horario real. Confirmar si hace falta una imagen.
4. Mensajes y citas 4. El enlace del test es interno. Confirmar que el botón debe llamarse «Haz el test de uso seguro de WhatsApp».

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono del problema | Hero | `/assets/luna_creciente_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de qué incluye | Qué incluye | `ojo_mistico_dorado.svg`, `luna_creciente_dorado.svg`, `llave_dorado.svg`, `estrella_ocho_puntas_dorado.svg`, `cristales_dorado.svg`, `vela_dorado.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Operaciones `/operaciones/`

Vista previa: https://bellarulox-web-preview.vercel.app/operaciones/

`/arquitectura-b2b/` y `/sistemas` redirigen aquí.

### Qué cambió

Reemplaza a Arquitectura B2B. Ya no usa ese nombre ni el menú anterior. La página es el frente internacional: planes de 450 USD al mes (hasta 8 h) y Socio a 650 USD al mes (hasta 12 h), revisión de 150 USD, tres resultados sin nombres de clientes, y el orden Diagnóstico, Diseño, Implementación, Documentación. Los textos están juntos en la página para poder copiarlos después a `/en/operations/`. Esa ruta en inglés no existe.

### Pendientes

1. Operaciones 1. Nombre del plan de 450 USD al mes. Ver decisión 3.
2. Operaciones 2. Confirmar que los tres resultados anónimos se quedan (soporte en EE. UU., migración de Kajabi a Thinkific, CRM y agentes de voz en Canadá) y que no se agregan nombres.
3. Operaciones 3. Confirmar «PayPal u otra opción según tu país» como texto de pagos.
4. Operaciones 4. No hay versión en inglés. Confirmar que se deja para después.
5. Operaciones 5. No hay fotos de los trabajos. Solo iconos. Confirmar si hace falta alguna imagen.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono «Te pasa si» | Hero | `/assets/llave_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de resultados | Trabajos con clientes, sin nombres | `cristales_purpura.svg`, `llave_purpura.svg`, `ojo_mistico_purpura.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Aprende `/aprende/`

Vista previa: https://bellarulox-web-preview.vercel.app/aprende/

`/del-caos-al-foco/` redirige aquí.

### Qué cambió

La página anterior de Del Caos al Foco promocionaba la membresía. Esta página no la menciona. Reúne talleres virtuales, capacitaciones para equipos, sesiones 1 a 1, un enlace a Recursos y los enlaces del podcast (Spotify, Apple Podcasts, YouTube y `/podcast/`).

### Pendientes

1. Aprende 1. Lista de talleres y próximas fechas. Ver decisión 5.
2. Aprende 2. Precio de la sesión 1 a 1. Ver decisión 4.
3. Aprende 3. Las capacitaciones para equipos dicen «Cotizar». Confirmar si se queda así.
4. Aprende 4. No hay afiche ni fecha de un taller. Confirmar si se publica sin imagen hasta tener el calendario.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono del podcast en el hero | Hero | `/assets/loto_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Iconos de formatos | Cómo puedes aprender | `estrella_ocho_puntas_dorado.svg`, `rosa_dorado.svg`, `llave_dorado.svg`, `cristales_dorado.svg` en `/assets/` | Sin URL pública. Kit de marca. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Podcast `/podcast/`

Vista previa: https://bellarulox-web-preview.vercel.app/podcast/

### Qué cambió

Se mantiene el programa Del Caos al Foco y el reproductor de Spotify. Se quitó el llamado a la membresía. El cierre ahora dice «¿Quieres aplicarlo en tu negocio?» y lleva a Aprende y a la llamada. El título para compartir ya no es el genérico del sitio anterior. Los botones abren Spotify, Apple Podcasts y YouTube.

### Pendientes

1. Podcast 1. Confirmar el texto nuevo del cierre (Aprende a hacerlo y Agenda una llamada).
2. Podcast 2. El reproductor es el del programa completo, no de un episodio suelto. Confirmar si se queda así.
3. Podcast 3. No hay carátula propia. El hero usa el icono de luna y estrella. Confirmar si se agrega la imagen del programa.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono del hero | Hero | `/assets/luna_estrella_dorado.svg` | Sin URL pública. Kit de marca. | En uso. No es la carátula. |
| Reproductor | Escuchar | iframe de Spotify | https://open.spotify.com/embed/show/3yxnEvf6hurBN4opbrD7AW | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

Enlaces de las plataformas, ya puestos: Spotify https://open.spotify.com/show/3yxnEvf6hurBN4opbrD7AW , Apple Podcasts https://podcasts.apple.com/cm/podcast/del-caos-al-foco/id1565590418 , YouTube https://www.youtube.com/@MarianMOnline .

## Recursos `/recursos/`

Vista previa: https://bellarulox-web-preview.vercel.app/recursos/

### Qué cambió

Se quitó la frase de la membresía. El titular ahora es «Guías y herramientas para resolver algo puntual». Siguen la calculadora (ingreso + gastos fijos, dividido entre horas facturables) y las cuatro piezas con los precios que ya estaban: 12 USD, 15 USD, 5 USD y 44 USD. «Tienda Gumroad», «Descargar la versión completa» y «Ver en Gumroad» abren la portada de la tienda, no la ficha de cada pieza.

### Pendientes

1. Recursos 1. Cada pieza abre https://bellarulox.gumroad.com/ y no su propia ficha. Confirmar los enlaces de cada guía y del curso.
2. Recursos 2. Confirmar que los precios 12, 15, 5 y 44 USD siguen vigentes.
3. Recursos 3. No hay portada de cada recurso. Confirmar si se agregan imágenes.
4. Recursos 4. Confirmar la frase de la calculadora y los valores de ejemplo (2000, 500 y 80).

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Icono de la calculadora | Hero | `/assets/llave_dorado.svg` | Sin URL pública. Kit de marca. | En uso. |
| Portadas de las guías | Catálogo | Ninguna | Sin archivo | Por confirmar (Recursos 3). |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Protocolo de uso seguro `/protocolo-uso-seguro/`

Vista previa: https://bellarulox-web-preview.vercel.app/protocolo-uso-seguro/

### Qué cambió

El test se mantiene (preguntas, semáforos y resultado). La página usa el menú y el pie del sitio nuevo. La oferta visible de servicios es «Auditoría de WhatsApp + asesoría para verificar en Meta» a 120 USD, con enlace a `/mensajes-y-citas/`. La tarjeta de después de un bloqueo permanente está en «[POR DEFINIR]». Siguen el kit, el entrenamiento de equipo (desde 100 USD) y el sitio web que se cotiza aparte con Sitios Bellarulox. Las pantallas de teléfono son dibujos en la página, no fotos.

### Pendientes

1. Protocolo 1. Qué ofrecer tras un bloqueo permanente. Ver decisión 6.
2. Protocolo 2. El aviso de privacidad todavía dice «[POR DEFINIR]» en dónde se guardan los datos y por cuánto tiempo.
3. Protocolo 3. El mismo aviso dice «[POR DEFINIR]» en la lista de proveedores de alojamiento y de correo. El párrafo pide revisión legal antes de publicar.
4. Protocolo 4. Confirmar el complemento «Entrenamiento online para tu equipo» desde 100 USD.
5. Protocolo 5. Confirmar el precio y el enlace del kit en Gumroad: https://bellarulox.gumroad.com/l/protocolo-uso-seguro
6. Protocolo 6. Confirmar que las pantallas dibujadas de WhatsApp se quedan. No hay archivos de foto para reemplazarlas.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Pantallas de ejemplo | Inicio del test y «Si ya te bloquearon» | Dibujos SVG dentro de la página. No hay archivo de imagen. | Sin URL. Son parte del HTML del test. | En uso. Por confirmar (Protocolo 6). |
| PDF de emergencia | Archivo del test | `/protocolo-uso-seguro/assets/protocolo-de-emergencia.pdf` | Sin URL pública distinta. Ya estaba en el sitio. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## Hiring `/hiring/`

Vista previa: https://bellarulox-web-preview.vercel.app/hiring/

### Qué cambió

El feed, los filtros, el idioma ES/EN y `ofertas.json` se mantienen. Cambian el menú y el pie, que ahora son los del sitio nuevo. Se quitó la barra de la comunidad. El cierre sigue invitando a la newsletter «Un paso a la vez» y dice «una idea práctica cada semana». Ese texto no coincide con el inicio, que dice «un correo al mes». El botón «Unirme» abre https://deft-mover-9183.kit.com/fc551c7a63

### Pendientes

1. Hiring 1. Confirmar si el cierre se queda en «cada semana» o pasa al texto de un correo al mes del inicio.
2. Hiring 2. Confirmar que el botón «Unirme» debe abrir el formulario de Kit y no el bloque de newsletter del inicio.
3. Hiring 3. Confirmar que el interruptor ES/EN se queda.
4. Hiring 4. No hay foto ni logo propio del feed. Confirmar si hace falta alguna imagen.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Avisos del feed | Lista | Sin imagen. El texto sale de `/hiring/ofertas.json`. | Sin URL de imagen. | En uso. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. Por confirmar (Inicio 6). |

## 404

Cualquier dirección que no exista muestra esta página. Ejemplo de vista previa: una ruta que no está en el sitio.

### Qué cambió

El sitio anterior no tenía una página 404 con el menú nuevo. Esta dice «Esta página no está», lleva al inicio y tiene un segundo botón «Ver cómo te ayudo» que abre `/que-te-encuentren/`, no la sección de los cuatro frentes del inicio.

### Pendientes

1. 404 1. Confirmar el texto «Esta página no está» y «El enlace puede haber cambiado. Vuelve al inicio o cuéntame qué buscabas.»
2. 404 2. El segundo botón se llama «Ver cómo te ayudo» y abre solo Que te encuentren. Confirmar si debe ir al inicio, a `#como-te-ayudo`, o quedarse así.

### Imágenes

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Logo del menú y del pie | Cabecera y pie | `/assets/logo-fuscia.png` | https://bellarulox.com/logo-fuscia.png | En uso. |
| Ilustración de la página | Hero | Ninguna | Sin archivo | En uso, sin imagen. |
| Imagen al compartir | Meta | `/og-image.jpg` | https://bellarulox.com/og-image.jpg | Heredada. La página pide a los buscadores que no la indexen. |

## Archivos de imagen que ninguna página muestra

Están en el repo por si se necesitan. No aparecen en la vista previa.

| Espacio | Sección | Archivo actual | URL de origen | Estado |
| --- | --- | --- | --- | --- |
| Foto anterior | Sin uso | `/assets/marian.png` | https://bellarulox.com/marian.png | No se muestra. |
| Logo negro | Sin uso | `/assets/logo-negro.png` | https://bellarulox.com/logo-negro.png | No se muestra. |
| Favicon duplicado | Sin uso | `/assets/favicon.png` | Copia local. El favicon activo es `/favicon.png`. | No se muestra. |
| Iconos y marcos sin colocar | Sin uso | `destello_dorado.svg`, `destello_purpura.svg`, `divisor_estrella_dorado.svg`, `divisor_estrella_purpura.svg`, `marco_arco_dorado.svg`, `loto_purpura.svg`, `rosa_purpura.svg` en `/assets/` | Sin URL pública. Kit de marca. | No se muestra. |
