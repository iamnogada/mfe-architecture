import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import alpinejs from '@astrojs/alpinejs';
import tailwind from '@astrojs/tailwind';
// import htmx from 'astrojs-htmx';



// https://astro.build/config
export default defineConfig({
  server: {
    port: 9001
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [ tailwind(), alpinejs()]
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