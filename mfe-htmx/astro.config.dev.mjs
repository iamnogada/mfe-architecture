import { defineConfig } from 'astro/config';
import baseOptions from './astro.config.mjs';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";


//, sentry(), spotlightjs()
baseOptions.integrations.push(sentry(), spotlightjs());

// https://astro.build/config
export default defineConfig({
  ...baseOptions,
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:3000',
          // For Dev mode, it doesn't work in production
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  }
});