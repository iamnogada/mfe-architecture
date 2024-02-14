import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 9000
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [vue(), react(), tailwind()]
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://localhost:3000',
  //         // For Dev mode, it doesn't work in production
  //         changeOrigin: true,
  //         rewrite: path => path.replace(/^\/api/, '')
  //       }
  //     }
  //   }
  // }
});
