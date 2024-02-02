import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import alpinejs from '@astrojs/alpinejs';
import htmx from 'astro-htmx';
import tailwind from '@astrojs/tailwind';



// https://astro.build/config
export default defineConfig({
  server: {
    port: 9001
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [ alpinejs(), tailwind(), htmx()]
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