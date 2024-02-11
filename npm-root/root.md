# Readmd
- [shell](./mfe-shell/README.md)
- [htmx project](./mfe-htmx/README.md)
- [api mockup](./mfe-api-mockup/README.md)

## Document

### Mocup database
- json-server
- [pocketbase](https://pocketbase.io/): admin@kubepia.net/admin123456
  . db path : ../mfe-api-mockup/pbdb/
  . $pocketbase serve --http 127.0.0.1:3000 --dir $(pwd)/../mfe-api-mockup/pbdb

### Astro
- ENV Define
  - import.meta.env.MODE development for astro dev
  - import.meta.env.MODE production for astro build
