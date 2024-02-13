# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── css/
│   ├── js/
│   │   └── alpinejs.3.x.min: client js fwk for dom manipulation
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── *.astro : Component Start with Uppercase
│   ├── layouts/
│   │   └── Layout.astro : Common layout for pages
│   ├── pages/
│   │   ├── index.astro : main page
    │   └── partial.astro : render innerhtml only
│   └── styles/
│       └── base.css : customized tailwind
├── package.json
├── jsconfig.json : package path alias and rule
└── types.d.ts : declare module for vscode lint rule. It follows jsconfig.json's path alias
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### astro.config.mjs
``` js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import vue from '@astrojs/vue';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';
import htmx from 'astro-htmx';
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
  integrations: [vue(), react(), alpinejs(), tailwind(), htmx()],
  vite: {
    server:{
      proxy: {
        '/api': {
          target: 'http://localhost:3000', // For Dev mode, it doesn't work in production
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  }
});
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:9000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Styles for icon
- https://icofont.com/examples
- fontawesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css
  ``` html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  ```

```jsx
import React from "react";
const componentURI = "http://localhost:3000/src/MicroFrontend.jsx";
// import MicroFrontendA from "http://localhost:3000/src/MicroFrontend.jsx";
// import MicroFrontendB from "http://localhost:7200/bundle.js";


const module =await import(componentURI);
// const MicroFrontendA = module.default;
// const ReactComponent = () => (
//   <>
//     <MicroFrontendA />
//     {/* <MicroFrontendB /> */}
//   </>
// );

export default module.default;
```