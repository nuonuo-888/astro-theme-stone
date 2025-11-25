import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  adapter: edgeoneAdapter(),
  viewTransitions: true,
  integrations: [tailwind(), compress()],
});
