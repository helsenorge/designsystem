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

## Gammel DatePicker er fjernet — `Unsafe_DatePicker` heter nå `DatePicker`

Den gamle `DatePicker` i `@helsenorge/datepicker` er slettet, sammen med `DateTime`, `DateTimePickerWrapper`, `validate-utils`, typene
`DateFormat`/`DatePickerProps` (gammel variant) og ressurstypen `HNDesignsystemDatePicker`. Den nye datovelgeren, som tidligere het
`Unsafe_DatePicker`, har fått navnet `DatePicker` og overtar import-stien `@helsenorge/datepicker/components/DatePicker`. Alle
`Unsafe_`-prefikser er fjernet fra komponenter, typer og under-stier.

| Før                                                       | Etter                                       |
| --------------------------------------------------------- | ------------------------------------------- |
| `Unsafe_DatePicker` (+ `Unsafe_DatePickerProps`/`Handle`) | `DatePicker` (+ `DatePickerProps`/`Handle`) |
| `Unsafe_ISODatePicker`                                    | `ISODatePicker`                             |
| `Unsafe_DateAndTime`                                      | `DateAndTime`                               |
| `Unsafe_ISODateAndTime`                                   | `ISODateAndTime`                            |
| `Unsafe_TimeInput`                                        | `TimeInput`                                 |
| `Unsafe_DateRangePickers`                                 | `DateRangePickers`                          |
| `Unsafe_DatePickerStandalone(Props)`                      | `DatePickerStandalone(Props)`               |
| `Unsafe_DateRangeSelector(Props)`                         | `DateRangeSelector(Props)`                  |

Import-stier:

```tsx
// Før
import Unsafe_DatePicker, { Unsafe_TimeInput } from '@helsenorge/datepicker/components/Unsafe_DatePicker';
import Unsafe_DateRangeSelector from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector';
import { DateRangePresets } from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector/utils';

// Etter
import DatePicker, { TimeInput } from '@helsenorge/datepicker/components/DatePicker';
import DateRangeSelector from '@helsenorge/datepicker/components/DatePicker/DateRangeSelector';
import { DateRangePresets } from '@helsenorge/datepicker/components/DatePicker/DateRangeSelector/utils';
```

Sub-path-eksportene `components/Unsafe_DatePicker/BaseDayPicker/utils` og `components/Unsafe_DatePicker/Unsafe_DateRangeSelector/utils` er
flyttet til `components/DatePicker/BaseDayPicker/utils` og `components/DatePicker/DateRangeSelector/utils`.

Brukte du den **gamle** `DatePicker`, må du migrere til den nye API-en — den er ikke 1:1 (blant annet `dateValue` → `value`, `onChange`
sender nå `Date | null`, `inputId` → `id`, og feil styres via `errorText`). Se `DatePickerProps` i
`node_modules/@helsenorge/datepicker/lib/components/DatePicker/DatePicker.d.ts`. Ressursene til den nye velgeren heter fortsatt
`HNDesignsystemUnsafe_DatePicker` og `HNDesignsystemUnsafe_DateRangeSelector` (typene er ikke omdøpt).

### Agent-prompt

```
Migrer datepicker-bruk til v17 av @helsenorge/datepicker.

1. Sjekk om kodebasen bruker affiserte API-er:
   Søk i TypeScript/TSX-filer (inkludert *.stories.tsx, tester og snapshots) etter:
   - import-stier som starter med '@helsenorge/datepicker/components/Unsafe_DatePicker'
   - identifikatorene Unsafe_DatePicker, Unsafe_ISODatePicker, Unsafe_DateAndTime,
     Unsafe_ISODateAndTime, Unsafe_TimeInput, Unsafe_DateRangePickers,
     Unsafe_DatePickerStandalone, Unsafe_DateRangeSelector og tilhørende
     *Props/*Handle-typer (JSX-bruk, typer, refs og spread-props)
   - import fra '@helsenorge/datepicker/components/DatePicker' (gammel
     DatePicker), samt DateTime, DateTimePickerWrapper, DateFormat,
     validate-utils og typen HNDesignsystemDatePicker
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   datepicker ikke er i bruk.

2. For Unsafe_-treff:
   - Fjern 'Unsafe_'-prefikset fra komponent- og typenavn (se mapping:
     Unsafe_DatePicker→DatePicker, Unsafe_ISODatePicker→ISODatePicker,
     Unsafe_DateAndTime→DateAndTime, Unsafe_ISODateAndTime→ISODateAndTime,
     Unsafe_TimeInput→TimeInput, Unsafe_DateRangePickers→DateRangePickers,
     Unsafe_DatePickerStandalone→DatePickerStandalone,
     Unsafe_DateRangeSelector→DateRangeSelector).
   - Endre import-stier fra '.../components/Unsafe_DatePicker' til
     '.../components/DatePicker', og '.../Unsafe_DatePicker/Unsafe_DateRangeSelector'
     til '.../DatePicker/DateRangeSelector' (gjelder også /constants og /utils,
     og BaseDayPicker/utils).
   - Ressurstypene HNDesignsystemUnsafe_DatePicker og
     HNDesignsystemUnsafe_DateRangeSelector er uendret.
   - Sjekk også eslint-konfig: regler som ignorerer 'Unsafe_*' for
     react/jsx-pascal-case kan fjernes for datepicker.

3. For treff på gammel DatePicker/DateTime/DateTimePickerWrapper/validate-utils:
   - Bytt til ny DatePicker (eller DateAndTime/TimeInput ved behov for tid).
   - Ikke gjett prop-mapping: les typene i
     node_modules/@helsenorge/datepicker/lib/components/DatePicker/DatePicker.d.ts
     (og DateAndTime.d.ts / TimeInput.d.ts). Verdi er Date | null via
     value/onChange; validering gjøres av konsumenten (f.eks. via
     errorText).
   - Oppdater tester, stories og snapshots.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test- og evt. storybook-build-scriptene. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.) og du byttet
     fra gammel DatePicker, oppdater baselines.

5. I PR-beskrivelsen: lim inn liste over endrede filer, og list hvilke
   deler som ikke var i bruk.
```

## DropdownOld er fjernet

`DropdownOld` (`@helsenorge/designsystem-react/components/DropdownOld/DropdownOld`) er slettet, sammen med sub-path-eksportene
`components/DropdownOld/resourceHelper` og `components/DropdownOld/constants`. Komponenten var markert som deprecated. Bruk `Dropdown` som
erstatning.

### Agent-prompt

```
Migrer fra DropdownOld til Dropdown.

1. Sjekk om kodebasen bruker DropdownOld:
   Søk etter 'DropdownOld' i TypeScript/TSX-filer, SCSS og snapshot-filer,
   og etter import-stiene
   '@helsenorge/designsystem-react/components/DropdownOld/DropdownOld',
   '.../DropdownOld/resourceHelper' og '.../DropdownOld/constants'.
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   DropdownOld ikke er i bruk.

2. For hvert treff:
   - Endre import til '@helsenorge/designsystem-react/components/Dropdown'
     og bytt JSX-tagnavn.
   - Mapp props ved å lese typene i
     node_modules/@helsenorge/designsystem-react/lib/components/Dropdown/Dropdown.d.ts.
     Ikke gjett — verifiser (API-et er ikke nødvendigvis 1:1).
   - Oppdater stories, tester og snapshots.

3. Verifiser:
   - Les scripts-feltet i package.json og kjør typecheck-, test- og evt.
     storybook-build-scriptene.
   - Ved visual regression (Chromatic e.l.): oppdater baselines.

4. I PR-beskrivelsen: lim inn liste over endrede filer, eller skriv
   "DropdownOld ikke i bruk" hvis ingen treff.
```

## Gammel Table heter nå `TableOld` — `UNSAFE_Table` heter nå `Table`

Den gamle `Table` i `@helsenorge/designsystem-react` er omdøpt til `TableOld`, og alle eksporter fra den har fått `Old` som suffiks.
`UNSAFE_Table` har samtidig fått navnet `Table` og er den nye hovedkomponenten. Alle `UNSAFE_`-prefikser er fjernet fra komponenter, typer
og under-stier. `TableOld` er ment som en overgang og vil bli fjernet i en senere versjon.

**Gammel Table → TableOld**

| Før                                                                                                           | Etter                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Table`, `TableBody`, `TableCell`, `TableHead`, `TableHeadCell`, `TableRow`                                   | `TableOld`, `TableBodyOld`, `TableCellOld`, `TableHeadOld`, `TableHeadCellOld`, `TableRowOld`                                |
| `TableExpandedRow`, `TableExpanderCell`                                                                       | `TableExpandedRowOld`, `TableExpanderCellOld`                                                                                |
| `Props` (per komponent), `BreakpointConfig`                                                                   | `TablePropsOld`, `TableBodyPropsOld`, `TableCellPropsOld` osv., `BreakpointConfigOld`                                        |
| `SortDirection`, `HeaderCategory`, `TextAlign`, `ResponsiveTableVariant`, `ModeType`                          | `SortDirectionOld`, `HeaderCategoryOld`, `TextAlignOld`, `ResponsiveTableVariantOld`, `ModeTypeOld`                          |
| `defaultConfig`, `simpleConfig`                                                                               | `defaultConfigOld`, `simpleConfigOld`                                                                                        |
| `getCurrentConfig`, `getBreakpointClass`, `getCenteredOverflowTableStyle`, `mapChildrenWithMode`, `omitProps` | `getCurrentConfigOld`, `getBreakpointClassOld`, `getCenteredOverflowTableStyleOld`, `mapChildrenWithModeOld`, `omitPropsOld` |

**UNSAFE_Table → Table**

| Før                                                                                                   | Etter                                                                                      |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `UNSAFE_Table` (+ `UNSAFE_TableProps`)                                                                | `Table` (+ `TableProps`)                                                                   |
| `UNSAFE_TableHead`, `UNSAFE_TableBody`, `UNSAFE_TableRow`, `UNSAFE_TableHeadCell`, `UNSAFE_TableCell` | `TableHead`, `TableBody`, `TableRow`, `TableHeadCell`, `TableCell` (+ tilhørende `*Props`) |

Import-stier:

```tsx
// Gammel Table, før
import Table, {
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
  HeaderCategory,
} from '@helsenorge/designsystem-react/components/Table';
// Gammel Table, etter
import TableOld, {
  TableHeadOld,
  TableRowOld,
  TableHeadCellOld,
  TableBodyOld,
  TableCellOld,
  HeaderCategoryOld,
} from '@helsenorge/designsystem-react/components/TableOld';

// UNSAFE_Table, før
import UNSAFE_Table, { UNSAFE_TableRow } from '@helsenorge/designsystem-react/components/UNSAFE_Table';
// UNSAFE_Table, etter
import Table, { TableRow } from '@helsenorge/designsystem-react/components/Table';
```

Sub-path-eksportene er flyttet tilsvarende: `components/Table/Table`, `components/Table/utils` og `components/Table/constants` (gammel) er
nå `components/TableOld/TableOld`, `components/TableOld/utils` og `components/TableOld/constants`. `components/UNSAFE_Table/*`
(`UNSAFE_Table`, `constants`, `utils`, `useTableExpandedRows`, `useTableShowMore`, `TableCaption`, `TableContext`) er flyttet til
`components/Table/*` (`Table`, `constants`, osv.).

**Viktig:** Kode som fortsatt bruker den gamle `Table` kan ikke bare beholde navnet — `Table` er nå den nye komponenten, og API-et er ikke
1:1. Den raskeste, trygge migreringen er å bytte til `TableOld`. På sikt bør man gå over til nye `Table`, som blant annet krever `caption`,
har fjernet `dataLabel` på celler, `category` på `TableHead` og `mode`, og bruker `expandedContent`/`expandableRowId`/`popMenu` på
`TableRow` (se `TableProps` i `node_modules/@helsenorge/designsystem-react/lib/components/Table/Table.d.ts`).

### Agent-prompt

```
Migrer Table-bruk til v17 av @helsenorge/designsystem-react.

1. Sjekk om kodebasen bruker affiserte API-er:
   Søk i TypeScript/TSX-filer (inkludert *.stories.tsx, tester, snapshots og
   SCSS) etter:
   - import-stier som starter med
     '@helsenorge/designsystem-react/components/Table' (gammel Table) eller
     '@helsenorge/designsystem-react/components/UNSAFE_Table'
   - JSX-bruk og typer for Table, TableHead, TableBody, TableRow,
     TableHeadCell, TableCell, TableExpandedRow, TableExpanderCell,
     samt SortDirection, HeaderCategory, TextAlign, ResponsiveTableVariant,
     ModeType, defaultConfig, simpleConfig, BreakpointConfig og
     tilhørende Props-typer importert fra disse stiene
   - identifikatorer som starter med 'UNSAFE_Table'
   Hvis ingen treff: hopp over dette steget og noter i PR-beskrivelsen at
   Table ikke er i bruk.

2. Skill mellom to tilfeller i hvert treff:
   a) Treff som importerer fra '.../components/UNSAFE_Table' (eller bruker
      UNSAFE_Table*-navn): fjern 'UNSAFE_'-prefikset fra komponent- og
      typenavn (UNSAFE_Table→Table, UNSAFE_TableRow→TableRow,
      UNSAFE_TableProps→TableProps osv.) og endre import-stien til
      '.../components/Table' (gjelder også /constants, /utils, /Table,
      /TableCaption, /TableContext, /useTableExpandedRows og
      /useTableShowMore). Hvis eslint-konfig har regler som ignorerer
      'UNSAFE_*' for react/jsx-pascal-case kun for Table, kan de fjernes.
   b) Treff som importerer fra '.../components/Table' og bruker den GAMLE
      API-en (f.eks. dataLabel på TableCell, category på TableHead, mode,
      HeaderCategory, ModeType, rowKey/expandable på TableRow): bytt til
      TableOld ved å endre import-stien til '.../components/TableOld' og
      legge til 'Old' på slutten av alle navn (Table→TableOld,
      TableRow→TableRowOld, TableHeadCell→TableHeadCellOld,
      SortDirection→SortDirectionOld, HeaderCategory→HeaderCategoryOld,
      defaultConfig→defaultConfigOld, Props-typer →TablePropsOld osv.).
      Les eksporterte navn i
      node_modules/@helsenorge/designsystem-react/lib/components/TableOld/index.d.ts
      — ikke gjett. Ikke bytt til ny Table uten å ha lest
      Table.d.ts og vurdert API-forskjellene (caption er påkrevd, dataLabel
      og category er fjernet, ekspandering skjer via expandedContent og
      expandableRowId på TableRow).
   Merk: samme import-sti '.../components/Table' betyr nå ny Table, så
   sjekk hvert treff mot hvilket API det faktisk bruker.

3. Oppdater tester, stories og snapshots som refererer til de omdøpte
   navnene.

4. Verifiser:
   - Les scripts-feltet i package.json og finn riktig navn på typecheck-,
     test- og evt. storybook-build-scriptene. Kjør dem.
   - Hvis prosjektet har visual regression (Chromatic e.l.) og du byttet
     fra gammel Table til ny Table, oppdater baselines.

5. I PR-beskrivelsen: lim inn liste over endrede filer, noter hvilke
   steder som er midlertidig flyttet til TableOld, og list hva som ikke
   var i bruk.
```
