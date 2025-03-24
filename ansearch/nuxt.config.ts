import tailwindcss from '@tailwindcss/vite';
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  router: {
    options: {
      strict: true, // remove trailing slashes
    },
  },
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  modules: ['unplugin-icons/nuxt', 'nitro-cloudflare-dev'],
});
