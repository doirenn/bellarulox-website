export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function localeFromPath(path: string): Locale {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'es';
}

export function stripLocale(path: string) {
  const bare = path.replace(/^\/en(?=\/|$)/, '') || '/';
  return bare.endsWith('/') ? bare : `${bare}/`;
}

/** Rutas que ya tienen versión en inglés. El resto sigue en español. */
const translated = new Set(['/', '/agenda/', '/contacto/']);

export function localePath(locale: Locale, path: string) {
  const bare = stripLocale(path);
  if (locale === 'es') return bare;
  if (!translated.has(bare)) return '/en/';
  return bare === '/' ? '/en/' : `/en${bare}`;
}

export function agendaPath(locale: Locale, servicio: string) {
  const base = locale === 'en' ? '/en/agenda/' : '/agenda/';
  return `${base}?servicio=${servicio}`;
}

export function contactoPath(locale: Locale, servicio = 'otro') {
  const base = locale === 'en' ? '/en/contacto/' : '/contacto/';
  return `${base}?servicio=${servicio}`;
}

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    close: 'Cerrar menú',
    lang: 'Idioma',
    cta: 'Agenda una llamada',
    nav: [
      { href: '/', label: 'Inicio' },
      { href: '/que-te-encuentren/', label: 'Que te encuentren' },
      { href: '/mensajes-y-citas/', label: 'Mensajes y citas' },
      { href: '/operaciones/', label: 'Operaciones' },
      { href: '/aprende/', label: 'Aprende' },
    ],
    frentesTitle: 'Cómo te ayudo',
    more: 'Más',
    talk: 'Hablemos',
    podcast: 'Podcast',
    resources: 'Recursos',
    test: 'Test WhatsApp',
    sites: 'Webs en Manta',
    motto: 'Crea. Organiza. Manifiesta.',
    where: 'Trabajo online, a cualquier país. La visita presencial se ofrece aparte, con un fee adicional.',
    pay: 'Pagos: tarjeta, transferencia o Deuna (Ecuador); PayPal para otros países.',
    rights: '© 2026 Marian Montilla · Bellarulox',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close menu',
    lang: 'Language',
    cta: 'Book a call',
    nav: [
      { href: '/en/', label: 'Home' },
      { href: '/que-te-encuentren/', label: 'Get found' },
      { href: '/mensajes-y-citas/', label: 'Messages and bookings' },
      { href: '/operaciones/', label: 'Operations' },
      { href: '/aprende/', label: 'Learn' },
    ],
    frentesTitle: 'How I help',
    more: 'More',
    talk: 'Let us talk',
    podcast: 'Podcast',
    resources: 'Resources',
    test: 'WhatsApp test',
    sites: 'Webs in Manta',
    motto: 'Create. Organize. Manifest.',
    where: 'I work online, for any country. An in-person visit is offered separately, with an additional fee.',
    pay: 'Payments: card, transfer or Deuna (Ecuador); PayPal for other countries.',
    rights: '© 2026 Marian Montilla · Bellarulox',
  },
} as const;
