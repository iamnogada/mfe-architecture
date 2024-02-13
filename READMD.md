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
- [superbase]() : k8s-resource, cloudzcp12#$
  - reference ID: tuqirjqadistrcyyzeaq
  - database
    - URL: postgres://postgres.tuqirjqadistrcyyzeaq:[YOUR-PASSWORD]@aws-0-ap-northeast-2.pooler.supabase.com:5432/postgres
    - User: postgres.tuqirjqadistrcyyzeaq
    - JWT: 2JjoABxm91VmrEWfYJvd7/Nv306ZnFGLXQM5TjUcJwgJMJ3FolsPlt1kcI+L1gSo3zVyNPzlJAadN1ucVCmpkw==
    - service role secret: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWlyanFhZGlzdHJjeXl6ZWFxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzc5MDYyNywiZXhwIjoyMDIzMzY2NjI3fQ.NG0RrR5WtonnKKjR5A6BP--pmYgAEH_PWBhrTmdIw2A

### Astro
- ENV Define
  - import.meta.env.MODE development for astro dev
  - import.meta.env.MODE production for astro build
