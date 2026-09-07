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
>    Hvis v16 ikke er publisert som 'latest' ennå, bruk 'beta'-versjonen
>    (f.eks. 16.0.0-beta.0). De tre pakkene er versjonert sammen — bruk
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

## CSS-tokens er omdøpt

Fargetokens har fått ny navnestruktur for å følge en mer konsistent navnekonvensjon i hele designsystemet. Dette påvirker all egen kode som
refererer direkte til tokens via `var(--color-...)` eller `var(--brandcolor-...)` i CSS/SCSS eller TypeScript.

De fleste gamle `--color-*`-tokennavnene fortsetter å fungere i v16 når `helsenorge.scss` importeres: pakken shipper en legacy-fil
(`scss/supernova-legacy/styles/legacy-colors.css`) som lastes automatisk der. Denne kompatibiliteten gjelder ikke ved direkte import av
`scss/supernova/styles/colors.css`, og den gjelder heller ikke `--brandcolor-*`-tokenene. Verdiene i legacy-filen er frosne hex-verdier som
ikke lenger vedlikeholdes — migrér derfor til de nye navnene.

For hver token i listen under, søk etter alle forekomster av det gamle tokennavnet og erstatt det med det nye.

### Agent-prompt

```
Migrér CSS-tokens fra v15 til v16-nomenklatur.

1. Sjekk om kodebasen bruker gamle tokens:
   Søk etter forekomster av de gamle tokennavnene i filer som
   bruker CSS-variabler: .css, .scss, .module.scss, .ts, .tsx, .js, .jsx.
   Se etter mønstre som 'var(--color-...)', 'var(--brandcolor-...)',
   eller direkte '--color-...'/'--brandcolor-...'-referanser. Søk også
   etter direkte import av
   '@helsenorge/designsystem-react/scss/supernova/styles/colors.css':
   denne importen inkluderer ikke legacy-tokenene.
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   gamle tokens ikke er i bruk.

2. Tokenmap (gammel → ny) — bytt alle forekomster i denne rekkefølgen.
   Rekkefølgen er viktig: tokens med lengre navn må byttes før tokens
   som deler samme prefiks (f.eks. '-ondark-hover' før '-ondark').
   Gjør hele/eksakte erstatninger — ikke delvise substring-bytter.

   --color-action-background-ondark-hover  →  --color-action-background-light-hover
   --color-action-background-ondark-selected  →  --color-action-background-light-selected
   --color-action-background-ondark  →  --color-action-background-light-normal
   --color-action-background-onlight-active  →  --color-action-background-dark-plus1-active
   --color-action-background-onlight-hover  →  --color-action-background-dark-plus1-hover
   --color-action-background-onlight  →  --color-action-background-dark-normal
   --color-action-background-transparent-onmulticolor-active  →  --color-action-background-transparent-multi-ondark-hover
   --color-action-background-transparent-onmulticolor-hover  →  --color-action-background-transparent-multi-onlight-hover
   --color-action-border-ondark-focus  →  --color-action-border-light-focus
   --color-action-border-ondark-hover  →  --color-action-border-light-hover
   --color-action-border-ondark  →  --color-action-border-light-normal
   --color-action-border-onlight-focus  →  --color-action-border-dark-focus
   --color-action-border-onlight-hover  →  --color-action-border-dark-plus1-hover
   --color-action-border-onlight  →  --color-action-border-dark-normal
   --color-action-graphics-emphasized-onlight  →  --color-action-graphics-dark-active
   --color-action-graphics-ondark-hover  →  --color-action-graphics-light-hover
   --color-action-graphics-ondark  →  --color-action-graphics-light-normal
   --color-action-graphics-onlight-hover  →  --color-action-graphics-dark-hover
   --color-action-graphics-onlight  →  --color-action-graphics-dark-normal
   --color-action-text-ondark  →  --color-action-text-light-normal
   --color-action-text-onlight-hover  →  --color-action-text-dark-hover
   --color-action-text-onlight  →  --color-action-text-dark-normal
   --color-base-background-blueberry  →  --color-base-blueberry-background-light
   --color-base-background-cherry  →  --color-base-cherry-background-light
   --color-base-background-dark-blueberry  →  --color-base-blueberry-background-dark
   --color-base-background-dark-cherry  →  --color-base-cherry-background-dark
   --color-base-background-dark-neutral  →  --color-base-neutral-background-dark
   --color-base-background-neutral  →  --color-base-neutral-background-light
   --color-base-background-white  →  --color-base-background-light
   --color-base-border-blueberry  →  --color-base-blueberry-border-light
   --color-base-border-cherry  →  --color-base-cherry-border-light
   --color-base-border-neutral-emphasized  →  --color-base-neutral-border-light-plus1
   --color-base-border-neutral  →  --color-base-neutral-border-light
   --color-base-border-ondark  →  --color-base-border-light-ondark
   --color-base-border-onlight-emphasized  →  --color-base-emphasized-border-dark
   --color-base-border-onlight-subtle  →  --color-base-border-light
   --color-base-border-onlight  →  --color-base-border-dark
   --color-base-graphics-ondark  →  --color-base-graphics-light
   --color-base-graphics-onlight  →  --color-base-graphics-dark
   --color-base-text-ondark  →  --color-base-text-light
   --color-base-text-onlight-subdued  →  --color-base-subdued-text-dark
   --color-base-text-onlight  →  --color-base-text-dark
   --brandcolor-black  →  --brand-color-black
   --brandcolor-blueberry-dark  →  --brand-color-blueberry-dark
   --brandcolor-blueberry-light  →  --brand-color-blueberry-light
   --brandcolor-blueberry-medium  →  --brand-color-blueberry-medium
   --brandcolor-blueberry-mediumdark  →  --brand-color-blueberry-mediumdark
   --brandcolor-blueberry-mediumlight  →  --brand-color-blueberry-mediumlight
   --brandcolor-blueberry-verylight  →  --brand-color-blueberry-verylight
   --brandcolor-cherry-dark  →  --brand-color-cherry-dark
   --brandcolor-cherry-light  →  --brand-color-cherry-light
   --brandcolor-cherry-medium  →  --brand-color-cherry-medium
   --brandcolor-cherry-mediumdark  →  --brand-color-cherry-mediumdark
   --brandcolor-cherry-verylight  →  --brand-color-cherry-verylight
   --brandcolor-neutral-dark  →  --brand-color-neutral-dark
   --brandcolor-neutral-light  →  --brand-color-neutral-light
   --brandcolor-neutral-medium  →  --brand-color-neutral-medium
   --brandcolor-neutral-mediumlight  →  --brand-color-neutral-mediumlight
   --brandcolor-neutral-verydark  →  --brand-color-neutral-verydark
   --brandcolor-neutral-verylight  →  --brand-color-neutral-verylight
   --brandcolor-white  →  --brand-color-white
   --color-destructive-background-emphasized  →  --color-destructive-background-light-plus1-hover
   --color-destructive-background-normal  →  --color-destructive-background-light-plus1-normal
   --color-destructive-border-normal  →  --color-destructive-border-dark-normal
   --color-destructive-graphics-emphasized-onlight  →  --color-destructive-graphics-dark-active
   --color-destructive-graphics-hover  →  --color-destructive-graphics-dark-hover
   --color-destructive-graphics-normal  →  --color-destructive-graphics-dark-normal
   --color-destructive-text-hover  →  --color-destructive-text-dark-hover
   --color-destructive-text-normal  →  --color-destructive-text-dark-normal
   --color-disabled-background  →  --color-disabled-background-light
   --color-disabled-border-ondark  →  --color-disabled-border-light
   --color-disabled-border  →  --color-disabled-border-dark
   --color-disabled-graphics-ondark  →  --color-disabled-graphics-light
   --color-disabled-graphics  →  --color-disabled-graphics-dark
   --color-disabled-text-ondark  →  --color-disabled-text-light
   --color-help-background-transparent-onlight-hover-selected  →  --color-help-background-transparent-onlight-hoverselected
   --color-help-background-normal  →  --color-help-background
   --color-help-border-dark  →  --color-help-border-plus1
   --color-help-border-normal  →  --color-help-border
   --color-help-border-verydark  →  --color-help-border-plus2
   --color-help-graphics-dark  →  --color-help-graphics-plus1
   --color-help-graphics-normal  →  --color-help-graphics
   --color-help-graphics-verydark  →  --color-help-graphics-plus2
   --color-notification-background-error-active  →  --color-notification-error-background-active
   --color-notification-background-error-hover  →  --color-notification-error-background-hover
   --color-notification-background-error  →  --color-notification-error-background
   --color-notification-background-info-active  →  --color-notification-info-background-active
   --color-notification-background-info-hover  →  --color-notification-info-background-hover
   --color-notification-background-info  →  --color-notification-info-background
   --color-notification-background-success-active  →  --color-notification-success-background-active
   --color-notification-background-success-hover  →  --color-notification-success-background-hover
   --color-notification-background-success  →  --color-notification-success-background
   --color-notification-background-warning-active  →  --color-notification-warning-background-active
   --color-notification-background-warning-hover  →  --color-notification-warning-background-hover
   --color-notification-background-warning  →  --color-notification-warning-background
   --color-notification-border-error  →  --color-notification-error-border
   --color-notification-border-info  →  --color-notification-info-border
   --color-notification-border-success  →  --color-notification-success-border
   --color-notification-border-warning  →  --color-notification-warning-border
   --color-notification-graphics-error  →  --color-notification-error-graphics
   --color-notification-graphics-info  →  --color-notification-info-graphics
   --color-notification-graphics-success  →  --color-notification-success-graphics
   --color-notification-graphics-warning  →  --color-notification-warning-graphics
   --color-notification-status-draft  →  --color-notification-draft
   --color-notification-status-error  →  --color-notification-error
   --color-notification-status-info  →  --color-notification-info
   --color-notification-status-success  →  --color-notification-success
   --color-notification-status-warning  →  --color-notification-warning
   --color-notification-text-error  →  --color-notification-error-text
   --color-notification-text-info  →  --color-notification-info-text
   --color-notification-text-success  →  --color-notification-success-text
   --color-notification-text-warning  →  --color-notification-warning-text
   --color-placeholder-text-onlight  →  --color-placeholder-text-dark

   Følgende gamle tokens har INGEN direkte erstatning i det nye settet.
   De fortsetter å fungere via legacy-filen, men verdiene er frosne.
   Ikke bytt dem automatisk — noter forekomster i PR-beskrivelsen og
   flagg dem for manuell design-gjennomgang:

   --color-action-background-stroke-onlight
   --color-action-background-ondark-hoverselected
   --color-action-background-transparent-ondark-hover
   --color-action-background-transparent-ondark-hoverselected
   --color-action-background-transparent-onlight-hoverselected
   --color-base-background-stroke-dark-blueberry
   --color-base-background-stroke-dark-cherry
   --color-base-background-stroke-dark-neutral

3. Etter endringer, søk igjen etter de gamle tokennavnene for å
   verifisere at alle forekomster er erstattet:
   Søk etter et utvalg av gamle navn (f.eks.
   '--color-action-background-ondark',
   '--color-notification-background-error', '--brandcolor-blueberry-medium')
   i hele kodebasen for å
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

## Komponentene laster ikke lenger CSS-tokens selv

I v15 importerte hver enkelt komponent tokenfilene (`colors.css`, `spacers.css`) i sin egen SCSS-modul. Dette ga mange dupliserte kopier av
tokenene i konsumentens bundle, og er fjernet i v16. Tokenene leveres nå kun globalt.

Prosjekter som importerer `@helsenorge/designsystem-react/scss/helsenorge.scss` er ikke berørt — den laster tokenene (og legacy-laget) som
før.

Prosjekter som **ikke** bruker `helsenorge.scss` (typisk utenfor Helsenorge-plattformen) må selv importere tokenene fra supernova **én gang
globalt**, ellers mister komponentene farger og spacing:

```scss
// Alt-i-ett (farger, spacing, typografi):
@import '@helsenorge/designsystem-react/scss/supernova/index.css';

// Eller enkeltvis:
@import '@helsenorge/designsystem-react/scss/supernova/styles/colors.css';
@import '@helsenorge/designsystem-react/scss/supernova/styles/spacers.css';
```

Merk: Direkteimport av supernova-filene inkluderer **ikke** legacy-tokennavnene (se seksjonen «CSS-tokens er omdøpt») — egen kode må være
migrert til de nye navnene.

### Agent-prompt

```
Sørg for at CSS-tokens lastes globalt.

1. Sjekk om prosjektet allerede laster tokenene globalt:
   Søk etter 'helsenorge.scss' og 'scss/supernova' i hele kodebasen.
   Hvis prosjektet importerer
   '@helsenorge/designsystem-react/scss/helsenorge.scss' i en global
   stilfil eller app-entry: ingen endring nødvendig — hopp over denne
   seksjonen og noter det i PR-beskrivelsen.

2. Hvis tokenene ikke lastes globalt:
   Legg til én import i prosjektets globale stilfil eller app-entry
   (der annen global CSS lastes):
   '@helsenorge/designsystem-react/scss/supernova/index.css'

3. Fjern redundante direkteimporter:
   Søk etter 'supernova/styles/colors' og 'supernova/styles/spacers' i
   prosjektets egne .module.scss-filer. Slike imports var et
   arbeidsmønster fra v15 og dupliserer nå bare innhold — fjern dem
   (behold kun den globale importen fra steg 1/2).

4. Verifiser:
   Kjør prosjektets build og start appen/storybook. Sjekk at komponenter
   fra designsystemet har riktige farger og spacing (CSS-variabler som
   '--color-*' og '--spacer-*' skal være satt på :root).
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

## HelpTooltip er fjernet

`HelpTooltip` (og `HelpTooltipDelayGroup`) er slettet fra `@helsenorge/designsystem-react`. Det finnes ingen direkte erstatningskomponent.
Byggeklossene komponenten var laget av — `DictionaryTrigger` og `PopOver` — er fortsatt tilgjengelige, og tilsvarende funksjonalitet kan
bygges med disse sammen med `@floating-ui/react` (slik `HelpTooltip` selv var implementert).

### Agent-prompt

```
Fjern bruk av HelpTooltip.

1. Sjekk om kodebasen bruker HelpTooltip:
   Søk etter import-stien '@helsenorge/designsystem-react/components/HelpTooltip'
   i TypeScript/TSX-filer, og etter strengene 'HelpTooltip' og
   'HelpTooltipDelayGroup' i JSX og re-eksporter.
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   HelpTooltip ikke er i bruk.

2. For hvert treff:
   - Komponenten er slettet uten direkte erstatning. Tilsvarende
     funksjonalitet kan bygges med komponentene DictionaryTrigger
     ('@helsenorge/designsystem-react/components/DictionaryTrigger/DictionaryTrigger')
     og PopOver ('@helsenorge/designsystem-react/components/PopOver')
     sammen med useFloating/useHover/useFocus/useDismiss/useInteractions
     fra '@floating-ui/react': DictionaryTrigger som referanse-element
     og PopOver med role="tooltip" som flytende innhold.
   - Les TypeScript-typene i
     node_modules/@helsenorge/designsystem-react/lib/components/DictionaryTrigger/
     og node_modules/@helsenorge/designsystem-react/lib/components/PopOver/
     for å bekrefte props. Ikke gjett.
   - Hvis bruken er kompleks eller UX-kritisk: ikke gjett på en løsning —
     noter i PR-beskrivelsen at funksjonaliteten må erstattes manuelt og
     flagg for menneskelig gjennomgang.

3. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines.

5. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   "HelpTooltip ikke i bruk" hvis ingen treff.
```

## HelpPanel — `compact`-varianten er fjernet

`HelpPanelVariants` er endret fra `'normal' | 'compact' | 'subdued'` til `'normal' | 'subdued'`. `variant="compact"` finnes ikke lenger og
vil feile typecheck. Bruk `normal` (standard) eller `subdued` i stedet — hvilken som passer best er en designvurdering.

### Agent-prompt

```
Fjern bruk av HelpPanel sin compact-variant.

1. Sjekk om kodebasen bruker HelpPanel med compact:
   Søk etter import-stien '@helsenorge/designsystem-react/components/HelpPanel'
   i TypeScript/TSX-filer. For hvert treff, søk videre etter
   variant="compact" eller variant={'compact'} i samme JSX-bruk (også via
   prop-spread eller variabler av typen HelpPanelVariants).
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   HelpPanel ikke bruker compact-varianten.

2. For hvert treff:
   - Fjern variant="compact" (gir 'normal', som er standard) eller bytt
     til variant="subdued" hvis det visuelt passer bedre.
   - Les TypeScript-typene i
     node_modules/@helsenorge/designsystem-react/lib/components/HelpPanel/HelpPanel.d.ts
     for å bekrefte gyldige varianter.
   - Siden dette er en visuell endring: noter i PR-beskrivelsen hvilke
     steder som gikk fra compact til normal/subdued, slik at design kan
     vurdere resultatet.

3. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for stories som bruker HelpPanel.
```

## Drawer — `withBackButton` og `onRequestBack` er fjernet

Propene `withBackButton` og `onRequestBack` er fjernet fra `Drawer` (og `InnerDrawerProps`). Tilbakefunksjonalitet bygges nå ved å sende
eget header-innhold via `headerContent`-propen, som erstatter standard tittel (og tilbakeknapp) i headeren — lukkeknappen rendres fortsatt.
Hvis du tidligere brukte disse propene for å vise en tilbakeknapp, må du implementere den selv i `headerContent`.

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
   - Hvis tilbakeknapp-funksjonalitet fortsatt er nødvendig for brukeropplevelsen:
     bygg den selv via 'headerContent'-propen på Drawer, som erstatter
     standard tittel i headeren (lukkeknappen rendres fortsatt). Hvis du er
     usikker på riktig utforming, ikke gjett — noter i PR-beskrivelsen at
     funksjonaliteten må erstattes manuelt og flagg for menneskelig gjennomgang.

3. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for stories som bruker Drawer med tilbakeknapp.
```

## Standardstørrelsen på `size`-props heter nå `normal`

Flere komponenter har fått omdøpt verdien som er standardstørrelse i `size`-propen til `normal`. Selve utseendet er uendret — dette er kun
en navneendring — men de gamle verdiene finnes ikke lenger i typene og vil feile typecheck. Hvilken gammel verdi som er omdøpt varierer per
komponent:

| Komponent(er)                                                         | Type/enum              | Gammel verdi | Ny verdi |
| --------------------------------------------------------------------- | ---------------------- | ------------ | -------- |
| `Button`                                                              | `ButtonSize`           | `medium`     | `normal` |
| `HelpTriggerIcon`                                                     | `HelpTriggerIconSizes` | `medium`     | `normal` |
| `LinkList` / `LinkList.Link`                                          | `LinkListSize`         | `medium`     | `normal` |
| `ElementHeader`                                                       | `ElementHeaderSize`    | `medium`     | `normal` |
| `Checkbox`, `Radio`, `Input`, `FormGroup`, `FormLayout`, `Validation` | `FormSize`             | `medium`     | `normal` |
| `Loader`                                                              | `LoaderSizes`          | `small`      | `normal` |
| `Modal`                                                               | `ModalSize`            | `large`      | `normal` |
| `Progressbar`                                                         | `ProgressbarSize`      | `large`      | `normal` |

Merk at kun standardverdien er omdøpt: `Loader` beholder `tiny`, `medium` og `large`, `Modal` beholder `medium`, og `Progressbar` beholder
`small` og `medium`. Kode som ikke setter `size` eksplisitt er ikke berørt (standardverdien peker nå på `normal` og rendrer likt som før).

Før:

```tsx
<Button size="medium">Lagre</Button>
<Loader size="small" />
<Modal size={ModalSize.large} title="Tittel" />
```

Etter:

```tsx
<Button size="normal">Lagre</Button>
<Loader size="normal" />
<Modal size={ModalSize.normal} title="Tittel" />
```

De interne CSS-klassenavnene er også endret tilsvarende (f.eks. `button--medium` → `button--normal`, `loader--small` → `loader--normal`),
noe som kan påvirke snapshot-tester og egne stilark som refererer til disse klassene.

### Agent-prompt

```
Migrér size-props til den nye 'normal'-verdien.

1. Sjekk om kodebasen bruker de berørte komponentene med eksplisitt size:
   Søk i TypeScript/TSX-filer etter import-stier under
   '@helsenorge/designsystem-react/components/' for disse komponentene:
   Button, HelpTriggerIcon, LinkList, ElementHeader, Checkbox, Radio,
   Input, FormGroup, FormLayout, Validation, Loader, Modal, Progressbar.
   Søk også etter enum-importene FormSize, ModalSize og ProgressbarSize
   fra '@helsenorge/designsystem-react/constants' eller komponentenes
   undermapper.
   For hvert treff, søk videre etter en eksplisitt size-prop i JSX
   (size="...", size={...}) eller bruk av enum-medlemmene.
   Hvis ingen treff med eksplisitt size: hopp over dette steget og noter
   i PR-beskrivelsen at ingen berørte size-props er i bruk.

2. Bytt gammel verdi til 'normal' — mappingen varierer per komponent:
   - Button, HelpTriggerIcon, LinkList, ElementHeader: 'medium' → 'normal'
   - Checkbox, Radio, Input, FormGroup, FormLayout, Validation:
     'medium' → 'normal' (også FormSize.medium → FormSize.normal)
   - Loader: 'small' → 'normal' (tiny/medium/large er uendret)
   - Modal: ModalSize.large / 'large' → ModalSize.normal / 'normal'
     ('medium' er uendret)
   - Progressbar: ProgressbarSize.large / 'large' → ProgressbarSize.normal /
     'normal' ('small' og 'medium' er uendret)
   Kode som ikke setter size eksplisitt trenger ingen endring.
   Vær nøye med å ikke bytte 'medium' på Loader, Modal eller Progressbar —
   der er 'medium' fortsatt en gyldig (annen) størrelse.
   Ved tvil: les komponentens TypeScript-typer i
   node_modules/@helsenorge/designsystem-react/lib/components/<Navn>/<Navn>.d.ts
   og bekreft gyldige verdier. Ikke gjett.

3. Søk etter hardkodede referanser til de gamle CSS-klassenavnene
   (f.eks. 'button--medium', 'loader--small', 'loader__dot--small')
   i egne SCSS-filer og snapshot-tester — disse er omdøpt til
   '...--normal' og må oppdateres der de forekommer.

4. Sjekk om noen av treffene er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

5. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
     Typecheck vil fange igjenværende bruk av de gamle verdiene.
   - Hvis prosjektet har visual regression (Chromatic e.l.): utseendet skal
     være uendret, men snapshot-baserte tester kan slå ut pga. endrede
     klassenavn. Oppdater baselines ved behov.

6. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   at ingen berørte size-props er i bruk hvis ingen treff.
```
