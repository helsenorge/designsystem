# Migreringsguide v16 — Helsenorge designsystem

> Denne guiden beskriver endringer i v16 av Helsenorge designsystem-pakkene (`@helsenorge/designsystem-react`, `@helsenorge/datepicker`,
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
>    De tre pakkene er versjonert sammen — bruk samme versjon for alle tre.
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

## CSS-tokens er omdøpt

Navnene på CSS-tokens (designtokens) har endret seg betydelig for å følge en mer konsistent namingkonvensjon i hele designsystemet. Alle
farger, grenser, grafikkeelementer og tekst er nå navnelaget etter et meer strukturert mønster:
`--color-[kategori]-[betingelse]-[tilstand]`. Dette påvirker alle komponenter som bruker CSS-variabler og alle custom SCSS-filer som
refererer direkte til tokens.

For hver token i listen under, må du søke etter alle forekomster av det gamle tokennavnet og erstatte det med det nye.

### Agent-prompt

```
Migrér CSS-tokens fra v15 til v16-nomenklatur.

1. Sjekk om kodebasen bruker gamle tokens:
   Søk etter forekomster av de gamle tokennavnene i filer som
   bruker CSS-variabler: .css, .scss, .module.scss, .ts, .tsx, .js, .jsx
   filer. Look for patterns som 'var(--color-...)' eller direkte
   '--color-...' referanser.
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   gamle tokens ikke er i bruk.

2. Tokenmap (gjeldende liste) — bytt alle forekomster i denne rekkefølgen
   (rekkefølgen er viktig for å unngå delvis matching av tokens som deler
   prefiks):

   --color-action-background-stroke-onlight  →  --color-action-border-dark-onlight-hover
   --color-action-background-ondark  →  --color-action-background-light-ondark-normal
   --color-action-background-ondark-hover  →  --color-action-background-light-ondark-hover
   --color-action-background-ondark-hoverselected  →  --color-action-background-light-ondark-active
   --color-action-background-ondark-selected  →  --color-action-background-light-ondark-selected
   --color-action-background-onlight  →  --color-action-background-dark-onlight-normal
   --color-action-background-onlight-active  →  --color-action-background-dark-onlight-active-plus1
   --color-action-background-onlight-hover  →  --color-action-background-dark-onlight-hover-plus1
   --color-action-background-transparent-onlight-hover-selected  →  --color-action-background-transparent-onlight-hover-plus1
   --color-action-background-transparent-onmulticolor-active  →  --color-action-background-transparent-multi-ondark-hover
   --color-action-background-transparent-onmulticolor-hover  →  --color-action-background-transparent-multi-onlight-hover
   --color-action-border-ondark  →  --color-action-border-light-ondark-normal
   --color-action-border-ondark-focus  →  --color-action-border-light-ondark-focus
   --color-action-border-ondark-hover  →  --color-action-border-light-ondark-hover
   --color-action-border-onlight  →  --color-action-border-dark-onlight-normal
   --color-action-border-onlight-focus  →  --color-action-border-dark-onlight-focus
   --color-action-border-onlight-hover  →  --color-action-border-dark-onlight-hover-plus1
   --color-action-graphics-emphasized-onlight  →  --color-action-graphics-dark-onlight-active
   --color-action-graphics-ondark  →  --color-action-graphics-light-ondark-normal
   --color-action-graphics-ondark-hover  →  --color-action-graphics-light-ondark-hover
   --color-action-graphics-onlight  →  --color-action-graphics-dark-onlight-normal
   --color-action-graphics-onlight-hover  →  --color-action-graphics-dark-onlight-hover
   --color-action-text-ondark  →  --color-action-text-light-ondark-normal
   --color-action-text-onlight  →  --color-action-text-dark-onlight-normal
   --color-action-text-onlight-active  →  --color-action-text-dark-onlight-active
   --color-action-text-onlight-hover  →  --color-action-text-dark-onlight-hover
   --color-base-background-blueberry  →  --color-base-blueberry-background-light-onlight
   --color-base-background-cherry  →  --color-base-cherry-background-light-onlight
   --color-base-background-dark-blueberry  →  --color-base-blueberry-background-dark-onlight
   --color-base-background-dark-cherry  →  --color-base-cherry-background-dark-onlight
   --color-base-background-dark-neutral  →  --color-base-neutral-background-dark
   --color-base-background-neutral  →  --color-base-neutral-background-light
   --color-base-background-white  →  --color-base-white-background
   --color-base-border-blueberry  →  --color-base-blueberry-border-light-onlight
   --color-base-border-cherry  →  --color-base-cherry-border-light-onlight
   --color-base-border-neutral  →  --color-base-neutral-border-light-onlight
   --color-base-border-neutral-emphasized  →  --color-base-neutral-border-light-onlight-plus1
   --color-base-border-ondark  →  --color-base-border-light-ondark
   --color-base-border-onlight  →  --color-base-border-dark-onlight
   --color-base-border-onlight-emphasized  →  --color-base-emphasized-border-dark-onlight
   --color-base-border-onlight-subtle  →  --color-base-border-light-onlight
   --color-base-graphics-ondark  →  --color-base-graphics-light-ondark
   --color-base-graphics-onlight  →  --color-base-graphics-dark-onlight
   --color-base-text-ondark  →  --color-base-text-light-ondark
   --color-base-text-onlight  →  --color-base-text-dark-onlight
   --color-base-text-onlight-subdued  →  --color-base-subdued-text-dark-onlight
   --color-destructive-background-emphasized  →  --color-destructive-background-light-ondark-hover-plus1
   --color-destructive-background-normal  →  --color-destructive-background-light-ondark-normal-plus1
   --color-destructive-border-normal  →  --color-destructive-border-dark-onlight-normal
   --color-destructive-graphics-emphasized-onlight  →  --color-destructive-graphics-dark-onlight-active
   --color-destructive-graphics-hover  →  --color-destructive-graphics-dark-onlight-hover
   --color-destructive-graphics-normal  →  --color-destructive-graphics-dark-onlight-normal
   --color-destructive-text-hover  →  --color-destructive-text-dark-onlight-hover
   --color-destructive-text-normal  →  --color-destructive-text-dark-onlight-normal
   --color-disabled-background  →  --color-disabled-background-light-ondark
   --color-disabled-border  →  --color-disabled-border-dark-onlight
   --color-disabled-border-ondark  →  --color-disabled-border-light-ondark
   --color-disabled-graphics  →  --color-disabled-graphics-dark-onlight
   --color-disabled-graphics-ondark  →  --color-disabled-graphics-light-ondark
   --color-disabled-text-ondark  →  --color-disabled-text-dark-onlight
   --color-help-background-normal  →  --color-help-background
   --color-help-background-transparent-onlight-hover-selected  →  --color-help-background-transparent-onlight-hoverselected
   --color-help-border-dark  →  --color-help-border-plus1
   --color-help-border-normal  →  --color-help-border
   --color-help-border-verydark  →  --color-help-border-plus2
   --color-help-graphics-dark  →  --color-help-graphics-plus1
   --color-help-graphics-normal  →  --color-help-graphics
   --color-help-graphics-verydark  →  --color-help-graphics-plus2
   --color-notification-background-error  →  --color-notification-error-background
   --color-notification-background-error-active  →  --color-notification-error-background-active
   --color-notification-background-error-hover  →  --color-notification-error-background-hover
   --color-notification-background-info  →  --color-notification-info-background
   --color-notification-background-info-active  →  --color-notification-info-background-active
   --color-notification-background-info-hover  →  --color-notification-info-background-hover
   --color-notification-background-success  →  --color-notification-success-background
   --color-notification-background-success-active  →  --color-notification-success-background-active
   --color-notification-background-success-hover  →  --color-notification-success-background-hover
   --color-notification-background-warning  →  --color-notification-warning-background
   --color-notification-background-warning-active  →  --color-notification-warning-background-active
   --color-notification-background-warning-hover  →  --color-notification-warning-background-hover
   --color-notification-border-error  →  --color-notification-error-border
   --color-notification-border-info  →  --color-notification-info-border
   --color-notification-border-success  →  --color-notification-success-border
   --color-notification-border-warning  →  --color-notification-warning-border
   --color-notification-graphics-error  →  --color-notification-error-graphics
   --color-notification-graphics-info  →  --color-notification-info-graphics
   --color-notification-graphics-success  →  --color-notification-success-graphics
   --color-notification-graphics-warning  →  --color-notification-warning-graphics
   --color-notification-status-draft  →  --color-notification-draft
   --color-notification-text-error  →  --color-notification-error-text
   --color-notification-text-info  →  --color-notification-info-text
   --color-notification-text-success  →  --color-notification-success-text
   --color-notification-text-warning  →  --color-notification-warning-text
   --color-placeholder-text-onlight  →  --color-placeholder-text-dark-onlight

3. Etter endringer, søk igjen etter de gamle tokennavnene for å
   verifisere at alle forekomster er erstattet:
   Søk etter et utvalg av gamle navn (f.eks.
   '--color-action-background-ondark',
   '--color-notification-background-error') i hele kodebasen for å
   sikre at ingen gamle tokens blir brukt.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     lint-, test-, og evt. storybook-build-scriptene i dette prosjektet.
     Kjør dem alle for å sikre at migreringen ikke introduserer feil.
   - Hvis prosjektet har visual regression (Chromatic e.l.), kan
     screenshot-endringer oppstå pga. fargeendringer. Oppdater baselines
     hvis nødvendig.

5. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   at ingen gamle tokens ble funnet hvis ingen treff.
```

## RadioButton er omdøpt til Radio

Komponenten `RadioButton` er slettet og erstattet av `Radio`. Selve API-et (props) er uendret — kun navnet på komponenten, mappen,
sub-path-importen og de interne CSS-klassenavnene (f.eks. `radio-button-wrapper` → `radio-wrapper`, `radio-button-label` → `radio-label`) er
endret.

Før:

```tsx
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

<RadioButton inputId="option-1" label="Alternativ 1" />;
```

Etter:

```tsx
import Radio from '@helsenorge/designsystem-react/components/Radio';

<Radio inputId="option-1" label="Alternativ 1" />;
```

### Agent-prompt

```
Migrer fra RadioButton til Radio.

1. Sjekk om kodebasen bruker RadioButton:
   Søk etter import-stien '@helsenorge/designsystem-react/components/RadioButton'
   i TypeScript/TSX-filer, og etter strengen 'RadioButton' i JSX (f.eks.
   '<RadioButton ' eller 'RadioButton' som re-eksportert symbol).
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   RadioButton ikke er i bruk.

2. For hvert treff:
   - Endre import fra '@helsenorge/designsystem-react/components/RadioButton'
     til '@helsenorge/designsystem-react/components/Radio'.
   - Bytt JSX-tagnavnet fra RadioButton til Radio.
   - Propene er 1:1 identiske — ingen prop-mapping er nødvendig. Bekreft
     dette likevel ved å lese TypeScript-typene i
     node_modules/@helsenorge/designsystem-react/lib/components/Radio/Radio.d.ts
     hvis du er usikker.

3. Søk også etter direkte referanser til de gamle CSS-klassenavnene
   (f.eks. 'radio-button-wrapper', 'radio-button-label', 'radio-button__marker-wrapper')
   i egne SCSS-filer eller snapshot-tester — disse klassenavnene er endret
   til 'radio-wrapper', 'radio-label', 'radio__marker-wrapper' osv. og må
   oppdateres der de er hardkodet.

4. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

5. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for stories som bruker Radio.
```

## Drawer — `withBackButton` og `onRequestBack` er fjernet

Propene `withBackButton` og `onRequestBack` er fjernet fra `Drawer` (og `InnerDrawerProps`). Tilbakefunksjonalitet må nå bygges med
`DrawerHeaderContent` i stedet for. Hvis du tidligere brukte disse propene for å vise en tilbakeknapp, må du implementere denne
funksjonaliteten manuelt ved å styre Drawer-innholdet selv.

### Agent-prompt

```
Fjern bruk av Drawer sine withBackButton/onRequestBack-props.

1. Sjekk om kodebasen bruker disse propene:
   Søk etter import-stien '@helsenorge/designsystem-react/components/Drawer'
   i TypeScript/TSX-filer. For hvert treff, søk videre etter propene
   'withBackButton' og 'onRequestBack' i samme JSX-bruk (også via
   prop-spread, f.eks. '<Drawer {...someProps}>').
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   Drawer ikke bruker disse propene.

2. For hvert treff:
   - Fjern propene 'withBackButton' og 'onRequestBack' fra JSX-kallet —
     de finnes ikke lenger i typene og vil feile typecheck.
   - Les TypeScript-typene i
     node_modules/@helsenorge/designsystem-react/lib/components/Drawer/Drawer.d.ts
     for å bekrefte at propene faktisk er borte og se om det finnes noen
     alternativ mekanisme i den publiserte versjonen.
   - Hvis tilbakeknapp-funksjonalitet fortsatt er nødvendig for brukeropplevelsen,
     ikke gjett på en løsning — noter i PR-beskrivelsen at funksjonaliteten
     må erstattes manuelt (f.eks. med DrawerHeaderContent), og flagg dette for en menneskelig gjennomgang.

3. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for stories som bruker Drawer med tilbakeknapp.
```
