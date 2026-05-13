# Migreringsguide — feature/next (v15)

> Denne guiden beskriver endringer i v15 av Helsenorge designsystem-pakkene (`@helsenorge/designsystem-react`, `@helsenorge/datepicker`,
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
> 2. Finn riktig beta-versjon:
>    npm dist-tag ls @helsenorge/designsystem-react
>    De tre pakkene er versjonert sammen — bruk samme v15-beta-versjon
>    (f.eks. 15.0.0-beta.0) for alle tre. Per nå ligger 14.0.0-beta.9 som
>    beta-tag; vent til en 15.x.x-beta.N er publisert før du fortsetter
>    hvis ingen v15-beta finnes ennå.
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

## `Chip` — `onClick`-prop fjernet

Den deprecated `onClick`-propen på `Chip` er fjernet. Konsumenter må bruke `onChipClick` (klikk på selve chip-knappen) og/eller
`onCloseClick` (klikk på lukke-knappen). Tidligere fungerte `onClick` som et fallback for begge — denne dobbeltbruken er nå borte, så hver
hendelse må kobles eksplisitt.

Før:

```tsx
<Chip onClick={handleRemove}>Filter</Chip>
```

Etter (avhengig av hva `onClick` var ment å gjøre):

```tsx
<Chip onCloseClick={handleRemove}>Filter</Chip>
// eller
<Chip onChipClick={handleClick} onCloseClick={handleRemove}>Filter</Chip>
```

### Agent-prompt

```
Migrer bort fra Chip sin deprecated onClick-prop.

1. Sjekk om kodebasen bruker Chip:
   Søk etter import-stien '@helsenorge/designsystem-react/components/Chip'
   i TypeScript/TSX-filer. Søk i tillegg etter strengen 'Chip' i JSX
   (f.eks. '<Chip ' og '<Chip\n') for å fange treff via re-eksport.
   Hvis ingen treff: hopp over og noter i PR-beskrivelsen at Chip ikke
   er i bruk.

2. For hvert Chip-bruksted: finn de som bruker propen 'onClick'.
   Søk etter mønsteret 'onClick=' inne i Chip-JSX. Sjekk også prop-spread
   (f.eks. '<Chip {...someProps}>') der onClick kan komme fra et objekt —
   inspekter typedefinisjonen og kildedataen til de spreadede objektene.

3. For hvert treff: avgjør hva onClick var ment å gjøre.
   - Hvis Chip har withCloseButton (default true) og handleren fjerner
     chipen, mapp om til onCloseClick.
   - Hvis handleren reagerer på klikk på selve chip-flaten, mapp om
     til onChipClick.
   - Hvis begge intensjoner gjelder, sett begge propene eksplisitt.
   Les Chip sine TypeScript-typer i
   node_modules/@helsenorge/designsystem-react/lib/components/Chip/Chip.d.ts
   for å bekrefte signaturer.

4. Sjekk om noen treff er i *.stories.tsx eller snapshot-tester
   og oppdater disse også.

5. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for stories som bruker Chip.

6. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   "Chip ikke i bruk" / "Chip i bruk, men ingen onClick-prop" hvis ingen
   endringer var nødvendige.
```

## `Tag` — nytt design og endret API

`Tag` har fått nytt design og en betydelig forenklet API. Følgende public surface er **fjernet**:

- Propene `size`, `color` og `svgIcon`.
- Det eksporterte enumet `TagSize`.
- Den eksporterte typen `TagColors`.
- Variantene `TagVariant.oncolor` og `TagVariant.emphasised`.

Følgende er **lagt til**:

- Variantene `TagVariant.accent1` og `TagVariant.accent2` (sistnevnte er den nye banana-aksenten).

`TagVariant.normal` er beholdt som default. En `Tag` rendres nå alltid som ren tekst i et `<span>` — ikon-støtten er fjernet, og fargen
styres av `variant`, ikke lenger av `color`.

Før:

```tsx
<Tag size="large" color="banana" svgIcon="Star" variant={TagVariant.emphasised}>
  Ny
</Tag>
```

Etter:

```tsx
<Tag variant={TagVariant.accent2}>Ny</Tag>
```

### Agent-prompt

```
Migrer Tag til v15-API-et.

1. Sjekk om kodebasen bruker Tag:
   Søk etter import-stien '@helsenorge/designsystem-react/components/Tag'
   i TypeScript/TSX-filer, og etter symbolene 'TagSize', 'TagColors' og
   'TagVariant' i hele kodebasen (også .ts og .scss-filer i tilfelle de
   refereres som strenger).
   Hvis ingen treff: hopp over og noter i PR-beskrivelsen at Tag ikke er
   i bruk.

2. Fjern import av symboler som ikke finnes lenger:
   - 'TagSize' — fjern import og alle bruksteder.
   - 'TagColors' — fjern import og alle bruksteder.
   Hvis disse ikke importeres, hopp over.

3. For hvert <Tag>-bruksted i JSX:
   a. Fjern propen 'size'. Det finnes ingen erstatning — Tag har bare én
      størrelse nå.
   b. Fjern propen 'svgIcon'. Det finnes ingen erstatning — Tag støtter
      ikke ikon. Hvis ikon er nødvendig for designet, ta dette opp som
      en egen designdiskusjon; ikke prøv å gjenskape ikonet manuelt
      i JSX inni Tag.
   c. Fjern propen 'color' og mapp den om til 'variant':
      - color="blueberry" → variant={TagVariant.normal}  (eller bare
        utelat variant siden 'normal' er default).
      - color="banana"   → variant={TagVariant.accent2}
      - color="neutral" / "cherry" / "kiwi" / "plum"
        → ingen direkte erstatning. Velg variant={TagVariant.accent1}
          eller TagVariant.accent2 etter beste skjønn, og noter valget
          i PR-beskrivelsen for designgjennomgang.
   d. Erstatt fjernede varianter:
      - variant={TagVariant.emphasised} → variant={TagVariant.accent1}
        (nærmeste visuelle ekvivalent — bekreft i Storybook).
      - variant={TagVariant.oncolor} → ingen direkte erstatning. Velg
        TagVariant.normal eller TagVariant.accent1 etter kontekst, og
        noter valget i PR-beskrivelsen.

4. Sjekk Tag sine TypeScript-typer for å bekrefte den nye signaturen:
   node_modules/@helsenorge/designsystem-react/lib/components/Tag/Tag.d.ts
   node_modules/@helsenorge/designsystem-react/lib/components/Tag/constants.d.ts

5. Sjekk om noen treff er i *.stories.tsx eller snapshot-tester og
   oppdater disse også. Tag har fått ny visuell utforming, så snapshot-
   tester med inline klassenavn (f.eks. 'tag--medium', 'tag--blueberry',
   'tag--has-icon', 'tag--emphasised') vil måtte oppdateres — disse
   klassene finnes ikke lenger.

6. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test-, og evt. storybook-build-scriptene i dette prosjektet. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.), oppdater
     baselines for alle stories som bruker Tag — designet er endret.

7. I PR-beskrivelsen: lim inn liste over filer du endret, og marker
   eksplisitt eventuelle color-/variant-mappings som krever
   designgjennomgang.
```

## Fjernede sub-path-eksporter: `PanelOld` og `PanelListOld`

Ekspot-oppføringene `@helsenorge/designsystem-react/components/PanelOld/PanelOld` og
`@helsenorge/designsystem-react/components/PanelListOld/PanelListOld` er fjernet fra `exports`-mappen i `package.json`. Selve kildekoden var
allerede borte fra pakken — disse oppføringene var dødt opprydningsarbeid — men dersom et konsument-prosjekt fortsatt importerer fra dem,
vil bygget feile.

### Agent-prompt

```
Fjern bruk av PanelOld / PanelListOld.

1. Sjekk om kodebasen importerer disse sub-stiene:
   Søk etter strengene
     '@helsenorge/designsystem-react/components/PanelOld'
     '@helsenorge/designsystem-react/components/PanelListOld'
   i TypeScript/TSX/JS-filer.
   Hvis ingen treff: hopp over og noter i PR-beskrivelsen at
   PanelOld/PanelListOld ikke er i bruk.

2. For hvert treff: erstatt med Panel / PanelList fra
   '@helsenorge/designsystem-react/components/Panel' og
   '@helsenorge/designsystem-react/components/PanelList'.
   API-et er ikke nødvendigvis 1:1 — les TypeScript-typene i
   node_modules/@helsenorge/designsystem-react/lib/components/Panel/Panel.d.ts
   node_modules/@helsenorge/designsystem-react/lib/components/PanelList/PanelList.d.ts
   og mapp props eksplisitt. Ikke gjett.

3. Sjekk om noen treff er i *.stories.tsx eller snapshot-tester og
   oppdater disse også.

4. Verifiser:
   - Les scripts-feltet i package.json og kjør typecheck-, test- og
     storybook-build-scriptene.
   - Oppdater visual-regression-baselines hvis prosjektet bruker det.

5. I PR-beskrivelsen: lim inn liste over filer du endret, eller skriv
   "PanelOld/PanelListOld ikke i bruk".
```

## Verktøykjede og peer-avhengigheter (informativt)

Designsystemets devDependencies er oppgradert. Dette påvirker ikke konsumenter direkte fordi det er devDependencies i
designsystem-monorepoet, men konsumenter som speiler verktøystakken vår bør vurdere lignende oppgraderinger:

- **Vite 8** (fra `rolldown-vite@^7`). Designsystemet bygges nå med standard Vite 8.
- **TypeScript ~6.0.3** (fra ~5.9.x).
- **`@vitejs/plugin-react` ^6**, **Vitest ^4.1**, **Storybook ^10.3**.
- **`jsdom` ^29** (fra 26/27).
- **`jest-when` ^4** (fra ^3) — kun relevant for designsystemets egne tester.
- **`react-zoom-pan-pinch` ^4** i `@helsenorge/lightbox` (fra ^3.6) — dette er en intern transitiv avhengighet i lightbox-pakken og bør ikke
  påvirke konsumenter.
- **`react`, `react-dom`** peerDependencies er fortsatt `^19`.
- **`motion`** er bumpet til `^12.38` — fortsatt v12.

### Agent-prompt

```
Verifiser verktøykjede-kompatibilitet.

1. Sjekk om prosjektet låser noen av følgende devDependencies til
   versjoner som kan kollidere med designsystemet sine peer-avhengigheter:
   - typescript (designsystemet bruker ~6.0.3 internt — konsumenter kan
     være på 5.x, men vurder oppgradering hvis du ser type-feil etter
     pakke-oppgraderingen)
   - vite (designsystemet er nå på vite@^8; hvis prosjektet bruker
     rolldown-vite override eller vite@^5/^6/^7, sjekk at byggekjeden
     fortsatt fungerer)
   - vitest (^4)
   - jsdom (^29)
   - @vitejs/plugin-react (^6)

2. Søk etter disse pakkene i package.json. List versjonene du finner.

3. Kjør typecheck-, test- og build-scriptene fra package.json. Hvis noe
   feiler pga. verktøykjede-mismatch:
   - Rapporter det i PR-beskrivelsen som "verktøykjede-kompatibilitet
     må vurderes" — ikke automatisk oppgrader uten brukerens samtykke,
     fordi major-bumps av Vite/TS/Vitest kan kreve egne migreringer.

4. I PR-beskrivelsen: skriv kort om eventuelle verktøykjede-funn,
   eller "Verktøykjede uendret" hvis alt går grønt.
```
