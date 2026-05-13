# Copilot Instructions — HN-Designsystem

This is **Helsenorge's design system** ("Frankenstein"): a TypeScript/React monorepo that publishes the official component packages used
across [helsenorge.no](https://helsenorge.no) (Norway's national health portal). Documentation lives at
[helsenorge.design](https://helsenorge.design).

Requires Node `^24.0.0` and npm `11.6.2`.

---

## Repository structure

```
npm/build-tools/    # frankenstein-build-tools — internal Vite/build helpers (private)
npm/designsystem/   # @helsenorge/designsystem-react — the main component library
npm/datepicker/     # @helsenorge/datepicker — consumer package (depends on designsystem-react)
npm/lightbox/       # @helsenorge/lightbox — consumer package (depends on designsystem-react)
docs/               # @helsenorge/docs-guide — Storybook docs / examples site
utils/icons/        # icon source assets and tooling
Pipelines/          # Azure DevOps pipelines (build + storybook deploy)
scripts/            # repo-level helper scripts (e.g. Slack notifications)
```

Published packages (all `@helsenorge/*`, MIT-licensed, public):

- `@helsenorge/designsystem-react` — core React components, hooks, theme, SCSS, fonts, icons, illustrations
- `@helsenorge/datepicker` — date/range picker built on top of the design system
- `@helsenorge/lightbox` — lightbox/modal media viewer built on top of the design system

Workspaces are declared in the root `package.json` as `npm/*` and `docs`.

---

## Commands

### Build

The full build has strict ordering: `build-tools` → `designsystem-react` → (`datepicker` ∥ `lightbox`).

```bash
npm run build              # Full ordered monorepo build
npm run build:build-tools  # Only frankenstein-build-tools
npm run build:designsystem # Only @helsenorge/designsystem-react
npm run build:datepicker   # Only @helsenorge/datepicker
npm run build:lightbox     # Only @helsenorge/lightbox
```

Per-workspace build (from the workspace folder):

```bash
cd npm/designsystem
npm run build
```

`prebuild` in `npm/designsystem` runs `link-scss`, `clean`, `generate:iconnames`, `generate:illustrationnames`, and
`generate:cssdefinitions`. **If you change `.module.scss` files, re-run** `npm run generate:cssdefinitions` in that workspace to regenerate
the `.module.scss.d.ts` type files (uses `typed-scss-modules` with `--nameFormat none --exportType default`).

### Storybook

```bash
npm start                  # alias for: cd npm/designsystem && npm run start
# or
cd npm/designsystem && npm run start          # storybook dev on port 3000
cd npm/designsystem && npm run build-storybook
```

### Test

```bash
npm test                              # vitest in every workspace (--run, all-or-nothing)
npm test -w @helsenorge/designsystem-react
npm run docs:test                     # docs site tests
npm run docs:test:built               # docs tests against built lib (USE_BUILT=true)
```

To run a single test file inside a workspace:

```bash
cd npm/designsystem
npx vitest run src/components/Chip/Chip.test.tsx
```

### Lint / type-check

```bash
npm run validate    # typecheck + prettier + eslint + stylelint across all workspaces
npm run typecheck
npm run eslint
npm run stylelint
npm run prettier

# Auto-fix
npm run eslint:fix
npm run stylelint:fix
npm run prettier:fix
```

Per-workspace (from the workspace folder):

```bash
npm run eslint
npm run typecheck
```

`lint-staged` + Husky run eslint/stylelint/prettier on staged files in `pre-commit`.

### New component

```bash
cd npm/designsystem
npm run new   # scaffolds a new component via __scripts__/new-component.js
```

### Release & publish

Versioning bumps all three published packages together:

```bash
npm run version:patch
npm run version:minor
npm run version:major
npm run version:beta
```

Release prep, commit/tag, and publish:

```bash
npm run release:prepare         # build + validate + test + pack --dry-run
npm run release:commit-and-push # commit, tag vX.Y.Z, regenerate CHANGELOG, push --follow-tags
npm run publish:latest          # publish all three packages to npmjs.org
npm run publish:beta            # publish under the "beta" dist-tag
```

`release:ensure-clean` aborts if the working tree is dirty. Tag pushes drive CI in `Pipelines/`.

---

## Architecture

### Workspace dependency graph

```
frankenstein-build-tools  (build/test helpers; consumed via ../build-tools/lib/copy.js etc.)
        ▲
        │
@helsenorge/designsystem-react
        ▲
        ├── @helsenorge/datepicker
        └── @helsenorge/lightbox
```

`build-tools` is a private internal package — never import it from published code. Consumer packages (`datepicker`, `lightbox`) depend on
`designsystem-react` as a peer dep and reuse its SCSS, theme, and primitives.

### Package exports (sub-path imports)

`@helsenorge/designsystem-react` uses **explicit sub-path exports**, not a barrel. Consumers must import from the exact sub-path:

```ts
import Button from '@helsenorge/designsystem-react/components/Button';
import Chip from '@helsenorge/designsystem-react/components/Chip/Chip';
import { useLanguage } from '@helsenorge/designsystem-react/hooks/useLanguage';
import X from '@helsenorge/designsystem-react/components/Icons/X';
```

Inside the package itself, components import siblings via relative paths (e.g. `../Icon`, `../Icons/X`).

### Component file layout

Each component in `npm/designsystem/src/components/<Name>/` follows this layout:

```
<Name>.tsx              # Component + Props interface (co-located, exported)
<Name>.test.tsx         # vitest + @testing-library tests
<Name>.stories.tsx      # Storybook stories
index.ts                # Re-exports the component as default
styles.module.scss      # Component-scoped SCSS Module
styles.module.scss.d.ts # Generated by `generate:cssdefinitions` — do not hand-edit
resourceHelper.ts       # (when localized) returns default Norwegian/English strings
```

### Resources / i18n

Components that contain user-facing text accept a `resources?: Partial<HN…>` prop and merge it with defaults from `getResources(language)`.
Language comes from `useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN)`. Default language is **Norwegian Bokmål**.

### SCSS Modules

Use `.module.scss`. Import the default export:

```ts
import styles from './styles.module.scss';
```

Types are generated by `generate:cssdefinitions` (`typed-scss-modules`, `--nameFormat none --exportType default`). The published package
also ships raw SCSS via `./scss/*` and fonts via `./fonts/*` exports.

---

## Conventions

### React patterns

- React 19, functional components only, typed as `React.FC<Props>` or plain function components.
- **Props interfaces are co-located** in the same file as the component (e.g. `ChipProps` in `Chip.tsx`).
- **JSDoc on every public prop** — these are picked up by Storybook's docs panel.
- Hooks named `use*` live in `src/hooks/` and are exported individually (no barrel).
- Use `classnames` for conditional class composition.
- `testId` prop pattern: components forward an optional `testId` to the root element / interactive element for test selection.
- Use existing primitives: `Icon`/`Icons/*`, `AsChildSlot`, theme tokens from `theme/*`, constants from `constants.ts` (`AnalyticsId`,
  `LanguageLocales`, etc.).

### Directory conventions inside `npm/designsystem/src`

- `components/` — one folder per component, see layout above
- `components/Icons/` — auto-generated icon components (do not hand-edit; see `generateIconNames.mjs`)
- `components/Illustrations/` — auto-generated illustration components
- `hooks/` — shared hooks
- `theme/` — design tokens (colors, spacing, typography, palette)
- `utils/` — pure utilities
- `resources/` — string resource interfaces (e.g. `Resources.ts`)
- `__mocks__/` — manual mocks shipped with the package
- `__scripts__/` — build-time generator scripts (icon names, css typings, scss linking, scaffolding)

### Tests

- **vitest** with `jsdom` and `globals: true`.
- Co-located as `<Name>.test.tsx` next to the component.
- Use `@testing-library/react` patterns; query by role / label first, fallback to `data-testid`.
- Stories (`*.stories.tsx`) are excluded from published `lib/`.

### Language

Component names, public APIs, and library code are in **English**. Domain identifiers, comments, and Helsenorge- specific concepts may use
**Norwegian Bokmål** (e.g. `Personverninnstilling`, `samtykke`, `Hjelpeskuff`) when that matches the published Helsenorge vocabulary.

### Vite / Rolldown

The repo overrides Vite with `rolldown-vite` (`"vite": "npm:rolldown-vite@^7.1.2"` in root `overrides`). `@types/react` is pinned to
`19.2.11`. Don't bump these casually — they're coordinated across all workspaces.

### Commits & changelog

Commits follow Conventional Commits (`@commitlint/config-conventional`). `CHANGELOG.md` is generated by `conventional-changelog-cli` via
`npm run changelog` during the release flow — do not edit it by hand.

---

## When making changes

- Adding a new component → `cd npm/designsystem && npm run new`, then implement, story, and test.
- Adding a new icon/illustration → drop the SVG in `utils/icons/` (or appropriate source dir), then re-run `generate:iconnames` /
  `generate:illustrationnames`.
- Touching `.module.scss` → re-run `generate:cssdefinitions` in that workspace before typecheck.
- Adding a new sub-path consumers should import → add it to the `exports` map in `npm/designsystem/package.json`.
- Cross-package change (e.g. `designsystem-react` API used by `datepicker`/`lightbox`) → bump and rebuild in dependency order; the root
  `build:ordered` script encodes this.
- Before opening a PR: `npm run validate && npm test`.
