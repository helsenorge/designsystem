# @helsenorge/helsenorge-css

Privat workspace (publiseres ikke) som bygger og deployer `helsenorge.css` til static-domenet. Kilden er
`npm/designsystem/src/scss/helsenorge.scss`.

```bash
npm run build --prefix deploy/helsenorge-css
```

Output i `dist/` (deployes under `/core`):

- `static/css/helsenorge.[hash].css` (+ `.gz`)
- `static/css/helsenorge/helsenorge.css` (+ `.gz`): uhashet kopi for konsumenter som bruker fast URL
- `static/media/*`: fonter, referert som `/core/static/media/…`
- `assets.json`: `{ "helsenorge.css": { "file": "static/css/helsenorge.[hash].css", "js": [], "css": [] } }`

`file` er relativ til rot-URL-en (`{StaticUrl}/core/`), samme kontrakt som Core-frontend og CMS bruker. Filnavnet på manifestet kan endres
med miljøvariabelen `HELSENORGE_CSS_MANIFEST`.

Deploy: `Pipelines/hn-designsystem.helsenorge-css-pipeline.yml` bygger `Dockerfile` (kontekst: repo-rot) og oppdaterer gitops ved push til
master.

## Teste før gammel løsning byttes ut

- Pipelinen har parameteren `updateGitops` (default av). Uten den bygges og pushes kun imaget, og gitops røres aldri.
- Kjøring fra andre branches enn master gir alltid et test-image (`test-<buildnummer>`) uten gitops.
- Sammenlign artifact manuelt med det som serveres i dag (hashet filnavn, css-innhold, uhashet kopi, fonter og `assets.json`). Image kan
  åpnes med `docker create <image> && docker cp <container>:/app/wwwroot/core ./extracted`.
