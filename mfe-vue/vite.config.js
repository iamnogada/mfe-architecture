import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path';
import morgan from "morgan";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9002,
  },
  preview: {
    port: 9002,
  },
  plugins: [
    vue(),
    morganPlugin(),
    vuetify({ autoImport: true }),
    // federation({
    //   name: 'my_remote_mfe',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Aain': './src/main.js'
    //   }
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.js"),
      preserveEntrySignatures: "exports-only",
      output: {
        entryFileNames: "bundle.js",
        format: "es",
      }
  }
}
});

function morganPlugin(){
  return {
    name: 'morgan-plugin',
    configureServer(server) {
      return () => {
        server.middlewares.use(morgan('dev'));
      }
    }
  }
}
