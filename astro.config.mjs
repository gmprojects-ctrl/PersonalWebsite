// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name : "Stack Sans Text",
      cssVariable : "--custom-font-stack-sans-text",
    }
  ]
});