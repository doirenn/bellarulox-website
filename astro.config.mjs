import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bellarulox.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = '2026-11-23';
        return item;
      },
    }),
  ],
});
