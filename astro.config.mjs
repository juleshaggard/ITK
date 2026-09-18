import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  server: {
    host: '0.0.0.0',
    port: 4321,
    allowedHosts: ['localhost', '127.0.0.1', 'terminal.local'],
  },
});
