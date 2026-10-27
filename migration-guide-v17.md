# Migreringsguide v17 — Helsenorge designsystem

> Denne guiden beskriver endringer i v17 av Helsenorge designsystem-pakkene (`@helsenorge/designsystem-react`, `@helsenorge/datepicker`,
> `@helsenorge/lightbox`). Hver seksjon inneholder en menneskelig beskrivelse av hva som er endret, og en **agent-prompt** med konkrete
> instrukser for å utføre migreringen.
>
> **For agenter — steg 0, gjør dette før alt annet:**
>
> ```
> Oppdater designsystem-pakkene til riktig versjon.
>
> 1. List designsystem-pakkene i package.json:
>    Søk etter '@helsenorge/designsystem-react', '@helsenorge/datepicker', og
>    '@helsenorge/lightbox' i package.json (både dependencies og devDependencies).
>
> 2. Finn riktig versjon:
>    npm dist-tag ls @helsenorge/designsystem-react
>    Hvis v17 ikke er publisert som 'latest' ennå, bruk 'beta'-versjonen
>    (f.eks. 17.0.0-beta.0). De tre pakkene er versjonert sammen — bruk
>    samme versjon for alle tre.
>
> 3. Andre @helsenorge-pakker:
>    Pakker som @helsenorge/core-framework, @helsenorge/framework-utils,
>    @helsenorge/core-utils, @helsenorge/eslint-config m.fl. er IKKE en del
>    av denne migreringen — ikke endre versjonene deres.
>
> 4. Presenter oppdateringsplanen for brukeren og vent på godkjenning
>    før du endrer noe i package.json.
>
> 5. Etter godkjenning: oppdater versjonsnumre i package.json og kjør
>    npm install. Løs eventuelle peer dependency-konflikter (særlig mot
>    react@^19, motion, normalize.css, og andre @helsenorge-pakker).
>    Ikke gå videre til neste steg før npm install er vellykket.
> ```
>
> **Steg 1 og utover:** Gå gjennom alle seksjoner i rekkefølge. For hver seksjon: følg instruksene i agent-prompten nøyaktig. Start alltid
> med applicability-sjekken — hopp over seksjoner som ikke er relevante for dette prosjektet, og noter det i PR-beskrivelsen.

## Button — `arrow="accessibility-character"` er fjernet

Verdien `'accessibility-character'` er fjernet fra `arrow`-propen på `Button` (og fra typen `ButtonArrows`). Den ga samme resultat som
`'inline-accessible-right'` (to hardt mellomrom etterfulgt av `→`), så bruk den i stedet. Gyldige verdier er nå `'icon'`,
`'inline-accessible-right'`, `'inline-accessible-up'` og `'inline-accessible-down'`.

```tsx
// Før
<Button variant="borderless" arrow="accessibility-character">Neste</Button>

// Etter
<Button variant="borderless" arrow="inline-accessible-right">Neste</Button>
```

### Agent-prompt

```
Erstatt arrow="accessibility-character" på Button med arrow="inline-accessible-right".

1. Sjekk om kodebasen bruker verdien:
   Søk etter strengen 'accessibility-character' i TypeScript/TSX-filer,
   og i *.stories.tsx, testfiler og snapshot-filer. Se spesielt etter
   bruk i JSX som arrow="accessibility-character" eller
   arrow={'accessibility-character'}, objekter/props som sendes via
   spread (f.eks. { arrow: 'accessibility-character' }), og typen
   'ButtonArrows' importert fra
   '@helsenorge/designsystem-react/components/Button'.
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   'accessibility-character' ikke er i bruk.

2. For hvert treff:
   - Bytt verdien 'accessibility-character' med 'inline-accessible-right'.
     Rendringen er identisk (to hardt mellomrom + '→').
   - Hvis verdien lagres i en variabel eller egen type, oppdater
     typen slik at den ikke lenger inneholder 'accessibility-character'.
   - Oppdater snapshot-tester og stories som refererer til verdien.

3. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Siden rendringen er uendret skal visuelle baselines ikke endres, men
     hvis prosjektet har visual regression (Chromatic e.l.), kjør den og
     bekreft at det ikke er diff.

4. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   "accessibility-character ikke i bruk" hvis ingen treff.
```
