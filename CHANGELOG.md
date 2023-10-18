## 6.0.0-beta.2 (2023-10-18)

## 6.0.0-beta.1 (2023-10-18)

## 6.0.0-beta.0 (2023-10-18)

### ⚠ BREAKING CHANGES

- Ikon-komponent er flyttet fra components/Icons/Icon til components/Icon/Icon

Ikonene ligger fortsatt i components/Icons, f.eks. components/Icons/Minus

Dette er fordi vi skal kunne dynamisk importere alt som ligger i Icons, så da bør det bare være ikoner der.

### Features

- lazy loading av ikoner ([f688e78](https://github.com/helsenorge/designsystem/commit/f688e78a955bb43a2efa92b72b208c582dbfdd1d)), closes
  [#301359](https://github.com/helsenorge/designsystem/issues/301359)

## [5.0.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.4.0&targetVersion=GTv5.0.0) (2023-09-25)

### ⚠ BREAKING CHANGES

- role=region må settes via prop
- name/id settes ikke lenger default til verdien av title. Man må sette name/id selv om man trenger det.
- fjernet mulighet for at Tile kan være button

### Features

- formgroup har prop for fieldset name
  ([625f843](https://github.com/helsenorge/designsystem/commit/625f843aa947601f7edaa82f388f6c22cda00851)), closes
  [#308141](https://github.com/helsenorge/designsystem/issues/308141)
- helppanel ([e2e8f23](https://github.com/helsenorge/designsystem/commit/e2e8f2319626be54174c129f59f83e42603dd237))

### Bug Fixes

- expanderList/LinkList (ListHeader) HtmlValidering i story
  ([72b12a3](https://github.com/helsenorge/designsystem/commit/72b12a3a5570e6f73fb69045cbe90d0572fd5da6)), closes
  [#308137](https://github.com/helsenorge/designsystem/issues/308137)
- highlightbox har ikke lenger fargene kiwi/plum
  ([8852e6c](https://github.com/helsenorge/designsystem/commit/8852e6cd07abf4995518ffcea6fb2bb5b421b84e)), closes
  [#305259](https://github.com/helsenorge/designsystem/issues/305259)
- html i Tile validerer ([f0a9f37](https://github.com/helsenorge/designsystem/commit/f0a9f3739f39fa33d2feb1d78812958730c09f33)), closes
  [#308149](https://github.com/helsenorge/designsystem/issues/308149)
- ikke bruk aria-attributter med mindre NotificationPanel har role
  ([8f1b09b](https://github.com/helsenorge/designsystem/commit/8f1b09b48a4840c8a8ce0efb7abdbed05de62a8e)), closes
  [#309176](https://github.com/helsenorge/designsystem/issues/309176)
- notificationpanel er ikke region som default
  ([00103ce](https://github.com/helsenorge/designsystem/commit/00103ce8a237f0222966f3a25f80f2222fbecf37)), closes
  [#309176](https://github.com/helsenorge/designsystem/issues/309176)

## [4.4.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.3.1&targetVersion=GTv4.4.0) (2023-09-15)

### Features

- helpquestion ([a402a67](https://github.com/helsenorge/designsystem/commit/a402a6728a9273ca89b1e87c4972ab97c8ab2712)), closes
  [#301149](https://github.com/helsenorge/designsystem/issues/301149)
- step støtter sticky knapper ([5be5ed3](https://github.com/helsenorge/designsystem/commit/5be5ed35a13fad559e400c2ecae5f439e2bb48fd)),
  closes [#307046](https://github.com/helsenorge/designsystem/issues/307046)
- tableExpandedRow støtter id for bruk med aria-controls og html-validering
  ([968475c](https://github.com/helsenorge/designsystem/commit/968475c4403211caa9ed994b27c10f188e11d752)), closes
  [#308148](https://github.com/helsenorge/designsystem/issues/308148)

### Bug Fixes

- dropdown content havner nå over relative innhold på siden
  ([16418c7](https://github.com/helsenorge/designsystem/commit/16418c78eea3a333abac52858f31ee75c83a6cee)), closes
  [#309133](https://github.com/helsenorge/designsystem/issues/309133)
- expander large story riktig prop verdi
  ([5b206e6](https://github.com/helsenorge/designsystem/commit/5b206e6528291d3eb8bb74a1c872348560409e34)), closes
  [#309218](https://github.com/helsenorge/designsystem/issues/309218)
- html-feil i logo ([508496c](https://github.com/helsenorge/designsystem/commit/508496c8113e2e19dac48ba3b9b13edce83f1b8d)), closes
  [#308144](https://github.com/helsenorge/designsystem/issues/308144)
- html-valideringsfeil ([df9d87d](https://github.com/helsenorge/designsystem/commit/df9d87d2492108812b17092462d56d87499bda92)), closes
  [#291948](https://github.com/helsenorge/designsystem/issues/291948)
- table elementer kan rendres etter conditions
  ([c2742e8](https://github.com/helsenorge/designsystem/commit/c2742e8c8d17dfd69cac2e9b3f8e8979f232b9db)), closes
  [#308272](https://github.com/helsenorge/designsystem/issues/308272)

## [4.3.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.3.0&targetVersion=GTv4.3.1) (2023-08-28)

### Bug Fixes

- gjorde panel focusable optional og focus border er fjernet
  ([2fbda76](https://github.com/helsenorge/designsystem/commit/2fbda7641ed3b62ef62029611bce3b669f453a42)), closes
  [#307802](https://github.com/helsenorge/designsystem/issues/307802)
- windows high contrast mode checkbox og radiobutton er synlige
  ([54acf09](https://github.com/helsenorge/designsystem/commit/54acf09210b713e4ba996a10f2fe08783e66102c)), closes
  [#307340](https://github.com/helsenorge/designsystem/issues/307340)

## [4.3.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.2.4&targetVersion=GTv4.3.0) (2023-08-23)

### Features

- trigger-komponent ([5c0ded6](https://github.com/helsenorge/designsystem/commit/5c0ded6f8d71bddb780160d2f3124fd89686730e))
- trigger/hjelpetrigger/infotrigger ([7c66b8b](https://github.com/helsenorge/designsystem/commit/7c66b8b03569cc596e1263b9d1da048654d45d50)),
  closes [#301136](https://github.com/helsenorge/designsystem/issues/301136)

### Bug Fixes

- lagt til focusable feature i panel
  ([050d90f](https://github.com/helsenorge/designsystem/commit/050d90f0796718b58dd0e3965721c0df38a684c5)), closes
  [#305821](https://github.com/helsenorge/designsystem/issues/305821)

## [4.2.4](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.2.3&targetVersion=GTv4.2.4) (2023-08-03)

### Bug Fixes

- table med block-visning inne i table med block-visning har synlige kolonneoverskrifter
  ([7efd8c2](https://github.com/helsenorge/designsystem/commit/7efd8c2d409ac017d3834e812b6cd4b33e523430)), closes
  [#301989](https://github.com/helsenorge/designsystem/issues/301989)

## [4.2.3](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.2.2&targetVersion=GTv4.2.3) (2023-08-03)

### Bug Fixes

- labelclassname kan naa brukes av vertikaler
  ([8bdecee](https://github.com/helsenorge/designsystem/commit/8bdeceedb29c6e75a20ffae10ae7dbe1a10b48c8)), closes
  [#306322](https://github.com/helsenorge/designsystem/issues/306322)

## [4.2.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.2.1&targetVersion=GTv4.2.2) (2023-06-28)

### Bug Fixes

- checkbox og radiobutton sine refs merges riktig
  ([7fe16a6](https://github.com/helsenorge/designsystem/commit/7fe16a632e9a5f905474cdaa62316d2acb350ebe)), closes
  [#304617](https://github.com/helsenorge/designsystem/issues/304617) [#305272](https://github.com/helsenorge/designsystem/issues/305272)

## [4.2.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.2.0&targetVersion=GTv4.2.1) (2023-06-26)

### Bug Fixes

- skjul ekstra ekspander i block-visning av table på mobil
  ([550bd65](https://github.com/helsenorge/designsystem/commit/550bd65ca2264900a2a4939a033a48f59aa8df8e)), closes
  [#305303](https://github.com/helsenorge/designsystem/issues/305303)

## [4.2.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.1.1&targetVersion=GTv4.2.0) (2023-06-22)

### Features

- helpbubble støtter linktarget for å kunne åpne linker i ny fane
  ([0ead627](https://github.com/helsenorge/designsystem/commit/0ead627d761bce7a67d1165c633f415a73d6b43e)), closes
  [#300167](https://github.com/helsenorge/designsystem/issues/300167)

### Bug Fixes

- tabell som har plass i bredden blir ikke plassert til venstre unødvendig
  ([ffbacbb](https://github.com/helsenorge/designsystem/commit/ffbacbb5ba58fceb5b2a47ef7a5148172bdd49e4))

## [4.1.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.1.0&targetVersion=GTv4.1.1) (2023-06-21)

### Bug Fixes

- endret box-shadow til outline på slider fokus
  ([6d0280e](https://github.com/helsenorge/designsystem/commit/6d0280e8b9904e43256c304c22224122e25707b2)), closes
  [#302183](https://github.com/helsenorge/designsystem/issues/302183)
- removed hardcode color in LegalDocument icon
  ([43a6b97](https://github.com/helsenorge/designsystem/commit/43a6b9789ec0238d9d296e3fa425f9a2d6a85c4d)), closes
  [#302955](https://github.com/helsenorge/designsystem/issues/302955)
- **slider:** correct outline size on focus, fix clipping in fx
  ([38701a8](https://github.com/helsenorge/designsystem/commit/38701a82ac78d79fa3fcb1c805bdd98f92ac5007))
- **slider:** correct outline size on focus, fix clipping in fx
  ([0d6d190](https://github.com/helsenorge/designsystem/commit/0d6d19096970707eeeb82e96a4b4a3f1607db33d))

## [4.1.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.0.1&targetVersion=GTv4.1.0) (2023-06-05)

## [4.0.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv4.0.0&targetVersion=GTv4.0.1) (2023-05-30)

## [4.0.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.2.1&targetVersion=GTv4.0.0) (2023-05-23)

### Features

- label tas i bruk i form-komponenter
  ([042ae21](https://github.com/helsenorge/designsystem/commit/042ae214dd1f8cb1c0baf978d29f472031d830fb)), closes
  [#274702](https://github.com/helsenorge/designsystem/issues/274702)
- lagt til en midlertidig iconwall story
  ([fef2b52](https://github.com/helsenorge/designsystem/commit/fef2b522c997c11003c0af86b6310419be969285))

### Bug Fixes

- ny hoverfarge ([c0583ab](https://github.com/helsenorge/designsystem/commit/c0583abf4e9f6d5168b7bb77841c3261de524603)), closes
  [#300613](https://github.com/helsenorge/designsystem/issues/300613)

## [3.2.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.2.0&targetVersion=GTv3.2.1) (2023-05-15)

### Features

- nye ikoner ([9694a00](https://github.com/helsenorge/designsystem/commit/9694a0061f412d16241f8be9e051805711ec2cee)), closes
  [#301797](https://github.com/helsenorge/designsystem/issues/301797)

## [3.2.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.6&targetVersion=GTv3.2.0) (2023-05-09)

### Features

- nytt komponent label ([ab2ea36](https://github.com/helsenorge/designsystem/commit/ab2ea3668231e5b37793fef3ce527444844d6d4e)), closes
  [#274702](https://github.com/helsenorge/designsystem/issues/274702)

## [3.1.6](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.5&targetVersion=GTv3.1.6) (2023-05-05)

### Features

- tooltip text decoration endres til dotted
  ([8c1fddb](https://github.com/helsenorge/designsystem/commit/8c1fddbc93fe9186b9a729fafcdeb4f47263ec82)), closes
  [#301506](https://github.com/helsenorge/designsystem/issues/301506)

### Bug Fixes

- chrome hover-background ([762ae92](https://github.com/helsenorge/designsystem/commit/762ae9233312da790c5581a7e1ad3fd8b705a4d4)), closes
  [#301543](https://github.com/helsenorge/designsystem/issues/301543)
- style av checkbox ([d9bffd9](https://github.com/helsenorge/designsystem/commit/d9bffd96ed5f5a09c564047afab167f636979282)), closes
  [#289913](https://github.com/helsenorge/designsystem/issues/289913)

## [3.1.5](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.4&targetVersion=GTv3.1.5) (2023-04-13)

### Bug Fixes

- popmenu og helpbubble i centeredoverflow-tabell plasseres riktig
  ([1adbd97](https://github.com/helsenorge/designsystem/commit/1adbd97598a1c93fffa421892ca99c1852b91bef)), closes
  [#300128](https://github.com/helsenorge/designsystem/issues/300128)

## [3.1.4](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.3&targetVersion=GTv3.1.4) (2023-04-12)

### Bug Fixes

- unngå at tabellen hopper mellom ulike visninger på små skjermer
  ([5531200](https://github.com/helsenorge/designsystem/commit/553120095afa9185dce3e2fea6c770f4654eefbf)), closes
  [#300068](https://github.com/helsenorge/designsystem/issues/300068)

## [3.1.3](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.2&targetVersion=GTv3.1.3) (2023-04-11)

### Bug Fixes

- eksport av PopMenu ([857d136](https://github.com/helsenorge/designsystem/commit/857d136c0e5608cf3087315107b4e265289b412f)), closes
  [#260926](https://github.com/helsenorge/designsystem/issues/260926)
- html-validering i flere komponenter
  ([cd61d5c](https://github.com/helsenorge/designsystem/commit/cd61d5c77f931e67507d3666a9ea9bd681fca1dd)), closes
  [#298931](https://github.com/helsenorge/designsystem/issues/298931)
- panel med content a, b og datetime har riktig plassering av datetime på stor skjerm
  ([74adbca](https://github.com/helsenorge/designsystem/commit/74adbca810aa08cacc76c7e01fb6164d941f917a)), closes
  [#297532](https://github.com/helsenorge/designsystem/issues/297532)
- statusdot transparent har bedre kontrast mot bakgrunn
  ([2015054](https://github.com/helsenorge/designsystem/commit/20150540118e1d4d67a3847b1a3c182ebfb77ef1)), closes
  [#298938](https://github.com/helsenorge/designsystem/issues/298938)

## [3.1.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.1&targetVersion=GTv3.1.2) (2023-03-31)

### Bug Fixes

- styling av service message ([4fd8e7d](https://github.com/helsenorge/designsystem/commit/4fd8e7dc23a7a6a469befda007cc846ed91640e2)), closes
  [#292736](https://github.com/helsenorge/designsystem/issues/292736)

## [3.1.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.1.0&targetVersion=GTv3.1.1) (2023-03-30)

### Features

- service message ([fdbb1a6](https://github.com/helsenorge/designsystem/commit/fdbb1a6557c092eabc1c18ff2f7fb4515bf1b016)), closes
  [#292736](https://github.com/helsenorge/designsystem/issues/292736)

## [3.1.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.0.2&targetVersion=GTv3.1.0) (2023-03-29)

## [3.0.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.0.1&targetVersion=GTv3.0.2) (2023-03-29)

### Features

- stegvisning ([a03ac7c](https://github.com/helsenorge/designsystem/commit/a03ac7c5e442b4673e91ec8b802d098ae1f2eb47)), closes
  [#297425](https://github.com/helsenorge/designsystem/issues/297425)

### Bug Fixes

- expanderlist viser title når title er React-komponent
  ([c9c8b19](https://github.com/helsenorge/designsystem/commit/c9c8b19075ea51f761ba97c9fc80f7d286c0061d)), closes
  [#299335](https://github.com/helsenorge/designsystem/issues/299335)
- popmenu plasserer pil riktig sted ([ce90830](https://github.com/helsenorge/designsystem/commit/ce90830eac8efd755a9d5c88348f1ebb8f2e04a9)),
  closes [#298403](https://github.com/helsenorge/designsystem/issues/298403)

## [3.0.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv3.0.0&targetVersion=GTv3.0.1) (2023-03-23)

### Bug Fixes

- bullet-list nivå 4 og lavere skal ha dashed stil
  ([bbcb855](https://github.com/helsenorge/designsystem/commit/bbcb8559dca4d31ab8b066048f4d922486632b91)), closes
  [#285187](https://github.com/helsenorge/designsystem/issues/285187)
- table med horizontalscroll har begrenset bredde
  ([94e7166](https://github.com/helsenorge/designsystem/commit/94e716624cdd2a2f9a0a3b875b3c67a06442cb8b)), closes
  [#298409](https://github.com/helsenorge/designsystem/issues/298409)
- tooltip er en del av dom ([aedea69](https://github.com/helsenorge/designsystem/commit/aedea69524558a38a0d45536aa4c625971fb9f76)), closes
  [#298402](https://github.com/helsenorge/designsystem/issues/298402) [#298403](https://github.com/helsenorge/designsystem/issues/298403)

## [3.0.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.17.0&targetVersion=GTv3.0.0) (2023-03-13)

### Features

- expanderhierarchy-komponent ([40154eb](https://github.com/helsenorge/designsystem/commit/40154eb7f96b010fdb04b1d80149a908e8b9f802)),
  closes [#269610](https://github.com/helsenorge/designsystem/issues/269610)
- listekomponent ([0aa2c83](https://github.com/helsenorge/designsystem/commit/0aa2c8335e5f73d273bc3711a22b9cf84fb5c723)), closes
  [#285187](https://github.com/helsenorge/designsystem/issues/285187)
- popmenu ([1cef3d4](https://github.com/helsenorge/designsystem/commit/1cef3d4e1a6e54657d88b044cf8d968d72cc1a14)), closes
  [#260926](https://github.com/helsenorge/designsystem/issues/260926)

### Bug Fixes

- anchorlink med/uten fokus tar like stor plass
  ([0d04f59](https://github.com/helsenorge/designsystem/commit/0d04f594338024ec81378559d449cecc2b8f018c)), closes
  [#295268](https://github.com/helsenorge/designsystem/issues/295268)
- dra og slipp fungerer i Slider på Android
  ([95fecd9](https://github.com/helsenorge/designsystem/commit/95fecd96e253c0be7e6c890db2f1e22d3c16b094)), closes
  [#296701](https://github.com/helsenorge/designsystem/issues/296701)
- panel - gir padding til knapp om det ligger innhold i nærheten
  ([5618f31](https://github.com/helsenorge/designsystem/commit/5618f313650da6eb2e4cc08fe3ca9c43cb7791af)), closes
  [#292897](https://github.com/helsenorge/designsystem/issues/292897)

## 3.0.0-beta.0 (2023-02-22)

### ⚠ BREAKING CHANGES

- smallViewportVariant endrer navn til breakpointConfig. Table har ingen standard responsiv oppførsel.
- Tidligere måtte man spesifisere role="alert" som prop selv, det vil si at man kan ha brukt variant alert/crisis for det rent visuelle uten
  å få innholdet automatisk lest opp.
- NotificationPanel bruker ikke dangerouslySetInnerHTML for å sette label mer. Ved behov må man gjøre dette selv som bruker av komponenten.

### Features

- notificationPanel - nytt design ([2770165](https://github.com/helsenorge/designsystem/commit/27701653e83fda36e1314ba7b376982d7fdbb731)),
  closes [#292726](https://github.com/helsenorge/designsystem/issues/292726)
- notificationpanel har automatisk role=alert om variant er alert eller crisis
  ([b9ab235](https://github.com/helsenorge/designsystem/commit/b9ab2356ee9589c97af5f13eae21b182f0693dda)), closes
  [#295272](https://github.com/helsenorge/designsystem/issues/295272)
- nye farger fra design ([031f202](https://github.com/helsenorge/designsystem/commit/031f2029f30340675ffac6a42f234b8b2ecb25b6)), closes
  [#292726](https://github.com/helsenorge/designsystem/issues/292726)
- tabell har mulighet for flere responsive visninger
  ([1cbaa62](https://github.com/helsenorge/designsystem/commit/1cbaa62d1fdfbd407dd90746960e2a597f37a123)), closes
  [#288929](https://github.com/helsenorge/designsystem/issues/288929)
- table har to gjenbrukbare configer for ulike breakpoints
  ([a6ac619](https://github.com/helsenorge/designsystem/commit/a6ac6196cc351041a13e08c68058754447b236be)), closes
  [#296512](https://github.com/helsenorge/designsystem/issues/296512)

### Bug Fixes

- table bruker neste breakpoint i bootstrap 5
  ([458f59a](https://github.com/helsenorge/designsystem/commit/458f59a2bbfb690abc40fcb95925349ae6c03427))

### Code Refactoring

- fjern deprecated options i Table ([49fbced](https://github.com/helsenorge/designsystem/commit/49fbcedca0b8c93c314b6a1e86ed8558918777db))
- notificationpanel bruker ikke dangerouslySetInnerHTML
  ([75c8fc3](https://github.com/helsenorge/designsystem/commit/75c8fc3f636f299ad1bde80ce0b66bedd50b655e)), closes
  [#294226](https://github.com/helsenorge/designsystem/issues/294226)

## [2.17.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.16.1&targetVersion=GTv2.17.0) (2023-02-23)

### Features

- avrunder tag ([193ea63](https://github.com/helsenorge/designsystem/commit/193ea6391ced4b2c4c626c79298d8693f197fd27)), closes
  [#296200](https://github.com/helsenorge/designsystem/issues/296200)
- nytt ikon ([9ee93b8](https://github.com/helsenorge/designsystem/commit/9ee93b84c5a399c3cf1d45f5ee909e2b5f43bd97)), closes
  [#296600](https://github.com/helsenorge/designsystem/issues/296600)
- nytt ikon - unspecifiedFile ([e628a45](https://github.com/helsenorge/designsystem/commit/e628a4567e00a24c3c16bf3e1bab68dcd879398d)),
  closes [#296600](https://github.com/helsenorge/designsystem/issues/296600)

### Bug Fixes

- Panel vises riktig på mobilvisning
  ([82790a2](https://github.com/helsenorge/designsystem/commit/82790a2365ba09f9c4e1fe4d9d624cdab62eef76)), closes
  [#296298](https://github.com/helsenorge/designsystem/issues/296298)

## [2.16.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.16.0&targetVersion=GTv2.16.1) (2023-02-16)

### Bug Fixes

- duolist non-formatted linjeskift fiks
  ([1f3f45f](https://github.com/helsenorge/designsystem/commit/1f3f45f194d18207a3a6f8a8ef73b95c9a7ca1bf)), closes
  [#296356](https://github.com/helsenorge/designsystem/issues/296356)

## [2.16.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.15.0&targetVersion=GTv2.16.0) (2023-02-15)

### Features

- tabell har mulighet for flere responsive visninger
  ([6b0f202](https://github.com/helsenorge/designsystem/commit/6b0f202af5009f79d6c035aab16ff6ca7cf903bb)), closes
  [#288929](https://github.com/helsenorge/designsystem/issues/288929)

### Bug Fixes

- fixer bruk av Formgroup i storybook
  ([61bddf7](https://github.com/helsenorge/designsystem/commit/61bddf795d86e56ada7d39de30127434745c4ed4)), closes
  [#292556](https://github.com/helsenorge/designsystem/issues/292556)
- fjern klasse som ikke brukes ([8544a30](https://github.com/helsenorge/designsystem/commit/8544a304383cac0b3b586bb74097ee64bb9e6dee)),
  closes [#294599](https://github.com/helsenorge/designsystem/issues/294599)
- panelactionbtn er plassert i lik linje med datetime
  ([7b1fc4d](https://github.com/helsenorge/designsystem/commit/7b1fc4d33ccc430dad760e7e0f3f2f051932c2d5)), closes
  [#292669](https://github.com/helsenorge/designsystem/issues/292669)
- styling specificity ([cb35c03](https://github.com/helsenorge/designsystem/commit/cb35c03e173b2ae6896844f2f1f370eca6659688)), closes
  [#292556](https://github.com/helsenorge/designsystem/issues/292556)

## [2.15.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.14.0&targetVersion=GTv2.15.0) (2023-02-09)

### Features

- avatar har størrelse small og xsmall
  ([86a7dd4](https://github.com/helsenorge/designsystem/commit/86a7dd41d42588bc962137914bcb3f9e74863f3b))
- button ariaLabel mangel kaster bare error i dev
  ([89596fa](https://github.com/helsenorge/designsystem/commit/89596faeda26e45a32e759013edbda522c8ac4d9)), closes
  [#289312](https://github.com/helsenorge/designsystem/issues/289312)
- input har støtte for å telle antall tegn
  ([65eef57](https://github.com/helsenorge/designsystem/commit/65eef57f5dfddd4c5054a83cd821f477958c6df1)), closes
  [#291991](https://github.com/helsenorge/designsystem/issues/291991)
- legger til errorwrapper class ([5ca3378](https://github.com/helsenorge/designsystem/commit/5ca3378be19533b753db41a20f17243c4e231b52)),
  closes [#292556](https://github.com/helsenorge/designsystem/issues/292556)
- statusdot har attachment-variant ([dd27e68](https://github.com/helsenorge/designsystem/commit/dd27e68d6c888e8e2c65b8001c513d5e906319f2))
- SupportingPerson xs ikon ([138b3b5](https://github.com/helsenorge/designsystem/commit/138b3b5d0d264d6c6cc2f659e63fc09bc3f67669)), closes
  [#293547](https://github.com/helsenorge/designsystem/issues/293547)

### Bug Fixes

- date-time eksempel colon fiks ([02f0331](https://github.com/helsenorge/designsystem/commit/02f03310626bf74878aba5889884c681bdde4fcd))
- linklist-item har ikke class=undefined når type=fill
  ([b54ca6a](https://github.com/helsenorge/designsystem/commit/b54ca6a454c80ee331e608a3a163c3eaebabdb2f)), closes
  [#294599](https://github.com/helsenorge/designsystem/issues/294599)
- listheader med avatar er default størrelse xsmall
  ([e67d447](https://github.com/helsenorge/designsystem/commit/e67d447ee7cc05a3d61263765556a34c8ef28d6b))
- login icon fill-rule fikset ([62dcd0f](https://github.com/helsenorge/designsystem/commit/62dcd0fc158d3699f51446c3304907a6ca4aa976))
- oppdatert geometri i ikonene til arrowleft og arrowright
  ([20ab9c5](https://github.com/helsenorge/designsystem/commit/20ab9c5cc60e11860dd2c046be6e2cdbf20060fb)), closes
  [#293341](https://github.com/helsenorge/designsystem/issues/293341)

## [2.14.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.13.0&targetVersion=GTv2.14.0) (2023-02-01)

### Features

- ikoner for ny login logout hjertehender og error notification
  ([8fd3e28](https://github.com/helsenorge/designsystem/commit/8fd3e289ccd3934f84d5d11def33a9c1b527708d))

### Bug Fixes

- panel inline title blir inline med contentA
  ([3345db0](https://github.com/helsenorge/designsystem/commit/3345db0457a512c0edd28d25339cdaf4955ca54b)), closes
  [#294847](https://github.com/helsenorge/designsystem/issues/294847)

## [2.13.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.12.0&targetVersion=GTv2.13.0) (2023-01-26)

### Features

- duolist nonformatted format lagt til
  ([6bbdb76](https://github.com/helsenorge/designsystem/commit/6bbdb76cd2dda87e8e7389ee7129936ae0253bc0)), closes
  [#292725](https://github.com/helsenorge/designsystem/issues/292725)
- panel status badge wrapper nå med title tekst
  ([d008826](https://github.com/helsenorge/designsystem/commit/d00882610a68cf00d6a3a39d3bb7bf6c5807526a)), closes
  [#292773](https://github.com/helsenorge/designsystem/issues/292773)
- slider har støtte for ariaLabel ([e4960e1](https://github.com/helsenorge/designsystem/commit/e4960e1e7f01fde1be4689ccae3ce8d23a72eea2)),
  closes [#293573](https://github.com/helsenorge/designsystem/issues/293573)

### Bug Fixes

- panel spacing desktop fikset ([074afe7](https://github.com/helsenorge/designsystem/commit/074afe7dc54f71eb068b51eaed20277b8c51f6ec)),
  closes [#292769](https://github.com/helsenorge/designsystem/issues/292769)

## [2.12.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.11.3&targetVersion=GTv2.12.0) (2023-01-23)

### Features

- gir vertikaler mulighet til å hente reset styling for radio button fra designsystemet
  ([868df37](https://github.com/helsenorge/designsystem/commit/868df372ab03638f25d2747d829e99248436528e)), closes
  [#292456](https://github.com/helsenorge/designsystem/issues/292456)
- panel med buttonAriaLabel bruker det som aria-label selv om title er satt
  ([23caab9](https://github.com/helsenorge/designsystem/commit/23caab91b8b4ac50df54dc34930618b2fd3583be)), closes
  [#293470](https://github.com/helsenorge/designsystem/issues/293470) [#293729](https://github.com/helsenorge/designsystem/issues/293729)

### Bug Fixes

- duolist null child kaster ikke feilmelding
  ([7668bd2](https://github.com/helsenorge/designsystem/commit/7668bd26ffc077727fae2e1f1eaf2b371b81af80)), closes
  [#292617](https://github.com/helsenorge/designsystem/issues/292617)
- logo kan bare være hvit og svart ([c46dcc1](https://github.com/helsenorge/designsystem/commit/c46dcc17e13189973fef4691ab1b75c3442f6ab4)),
  closes [#293148](https://github.com/helsenorge/designsystem/issues/293148)
- panel detail button pil plassert riktig
  ([21782d8](https://github.com/helsenorge/designsystem/commit/21782d80502afdd9415c1e3ba9eca092f063157e)), closes
  [#287921](https://github.com/helsenorge/designsystem/issues/287921)
- taglist har nå role=list med listitems
  ([62be09d](https://github.com/helsenorge/designsystem/commit/62be09de17a946e1339f27792878c19c9e72be7f)), closes
  [#290367](https://github.com/helsenorge/designsystem/issues/290367)
- useOutsideEvent fungerer i web components
  ([ffe9b7f](https://github.com/helsenorge/designsystem/commit/ffe9b7ffc67e04f6b8d7232b0a6829a380d112d6)), closes
  [#293729](https://github.com/helsenorge/designsystem/issues/293729)
- vis slider på utskrift ([aa60206](https://github.com/helsenorge/designsystem/commit/aa60206364af351c33045f22d5a9379276e814bf)), closes
  [#281560](https://github.com/helsenorge/designsystem/issues/281560)

## [2.11.3](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.11.2&targetVersion=GTv2.11.3) (2023-01-17)

### Features

- legger til header sematikk på expanderlist
  ([2918461](https://github.com/helsenorge/designsystem/commit/29184614d218b50461c79e41d609d0c4917fd873)), closes
  [#291046](https://github.com/helsenorge/designsystem/issues/291046)

## [2.11.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.11.1&targetVersion=GTv2.11.2) (2023-01-12)

### Bug Fixes

- endrer kontrastfarge ([7aae4c3](https://github.com/helsenorge/designsystem/commit/7aae4c3239afe9187d7515ca2d8bd9e5f9808425)), closes
  [#290655](https://github.com/helsenorge/designsystem/issues/290655)
- listheader mapping tar hensyn til undefined recursive children
  ([429e51b](https://github.com/helsenorge/designsystem/commit/429e51bf7eebbafeef19ca5d76c72957ab9ab402)), closes
  [#293178](https://github.com/helsenorge/designsystem/issues/293178)

## [2.11.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.10.1&targetVersion=GTv2.11.1) (2023-01-06)

### Features

- legger til props til Input ([7951a84](https://github.com/helsenorge/designsystem/commit/7951a84f5af1dc7c432456e3ebf26d4227774cf8)), closes
  [#222638](https://github.com/helsenorge/designsystem/issues/222638)
- **designsystem:** aria-required for select
  ([4415849](https://github.com/helsenorge/designsystem/commit/4415849b74a53565a7af459091a915e0f6d01d90)), closes
  [#291043](https://github.com/helsenorge/designsystem/issues/291043)

### Bug Fixes

- endrer farge på tekst. Gir bedre kontrast
  ([e29be2b](https://github.com/helsenorge/designsystem/commit/e29be2b7dc784ea57daabb20d7ce08c8a017708e)), closes
  [#290655](https://github.com/helsenorge/designsystem/issues/290655)

## [2.10.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.10.0&targetVersion=GTv2.10.1) (2023-01-03)

### Bug Fixes

- listheader mapping fikset ved null child
  ([e62f9f8](https://github.com/helsenorge/designsystem/commit/e62f9f8cdb9af731434f79a56efadb6207e06588))

## [2.10.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.9.3&targetVersion=GTv2.10.0) (2023-01-03)

### Features

- nytt komponent linkheader og linkheadertext som brukes i expanderlist og linklist
  ([5842ffe](https://github.com/helsenorge/designsystem/commit/5842ffe5d547d9f34b61c2409c9aeb957fcb947f)), closes
  [#289118](https://github.com/helsenorge/designsystem/issues/289118)

### Bug Fixes

- oneliner får ikke unødvendig spacing
  ([4f1ac33](https://github.com/helsenorge/designsystem/commit/4f1ac33b8405c89f625939454e2600cf9eb2e0a3))

## [2.9.3](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.9.2&targetVersion=GTv2.9.3) (2022-12-13)

### Features

- eksporterer NotificationPanel props
  ([f052b76](https://github.com/helsenorge/designsystem/commit/f052b765807809a98a88e2d536b87cf388d15e56)), closes
  [#288630](https://github.com/helsenorge/designsystem/issues/288630)

## [2.9.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.9.1&targetVersion=GTv2.9.2) (2022-12-09)

### Bug Fixes

- personcancel og travelroute ikon farge fiks
  ([6423c92](https://github.com/helsenorge/designsystem/commit/6423c921af461a556502adcb74a91ec0acf98bcf))

## [2.9.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.9.0&targetVersion=GTv2.9.1) (2022-12-07)

### Bug Fixes

- personcancel ikon fiks ([0bb783c](https://github.com/helsenorge/designsystem/commit/0bb783cfb466212a2e9fb362909533b62a45d81d)), closes
  [#290817](https://github.com/helsenorge/designsystem/issues/290817)

## [2.9.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.8.0&targetVersion=GTv2.9.0) (2022-12-06)

### Features

- nye ikoner helsekontakter og pasientreiser
  ([a74689b](https://github.com/helsenorge/designsystem/commit/a74689b3a838bd9ca19e7345006f54d38a048d1e)), closes
  [#290817](https://github.com/helsenorge/designsystem/issues/290817)

## [2.8.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.7.0&targetVersion=GTv2.8.0) (2022-12-01)

### Features

- notificationpanel kan ha role="alert"
  ([3912130](https://github.com/helsenorge/designsystem/commit/39121300e3d70414433c4b64911a830bbc01cb52)), closes
  [#290688](https://github.com/helsenorge/designsystem/issues/290688)

## [2.7.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.6.2&targetVersion=GTv2.7.0) (2022-11-30)

### Features

- oppdatert med støtte for datetime i input felt
  ([d01eab1](https://github.com/helsenorge/designsystem/commit/d01eab1e976887bb7b22d27108bbc47e06e04316)), closes
  [#288759](https://github.com/helsenorge/designsystem/issues/288759)

## [2.6.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.6.1&targetVersion=GTv2.6.2) (2022-11-17)

### Bug Fixes

- modal setter fokus til seg selv kun én gang når den først vises
  ([a293206](https://github.com/helsenorge/designsystem/commit/a293206cbd23a4524054198239eb00f2ee454a39)), closes
  [#289818](https://github.com/helsenorge/designsystem/issues/289818)

## [2.6.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.6.0&targetVersion=GTv2.6.1) (2022-11-17)

### Bug Fixes

- resizeobserver logger ikke feil om loop limit exceeded
  ([afece3a](https://github.com/helsenorge/designsystem/commit/afece3a3f40763f6520e09c2398b5928eaf9fa82)), closes
  [#288871](https://github.com/helsenorge/designsystem/issues/288871)

## [2.6.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.5.0&targetVersion=GTv2.6.0) (2022-11-15)

### Features

- helpbubble kan ta imot ref ([ae2dfcb](https://github.com/helsenorge/designsystem/commit/ae2dfcb5325dd31da97c032c502a8c433a8a13b4)), closes
  [#285111](https://github.com/helsenorge/designsystem/issues/285111)
- react-hook-form 7 støtte ([bd50e9d](https://github.com/helsenorge/designsystem/commit/bd50e9d616faec405a441661169db559bcf00783)), closes
  [#287912](https://github.com/helsenorge/designsystem/issues/287912)

### Bug Fixes

- useSize trigges ved endring i ref igjen
  ([c374772](https://github.com/helsenorge/designsystem/commit/c374772117d019d77ad725add65f20f869a876b9)), closes
  [#285111](https://github.com/helsenorge/designsystem/issues/285111)

## [2.5.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.4.0&targetVersion=GTv2.5.0) (2022-11-13)

### Features

- duolist custom breddeforhold, bold per gruppe og mulighet for reactnode som dt og dd
  ([8c1db38](https://github.com/helsenorge/designsystem/commit/8c1db382e7006faf478bd2d93eb72a28fadf4e43)), closes
  [#285932](https://github.com/helsenorge/designsystem/issues/285932)
- nytt komponent Select ([70b540f](https://github.com/helsenorge/designsystem/commit/70b540fc0791cf8e94f974cbf4b4d63990d435ae)), closes
  [#260924](https://github.com/helsenorge/designsystem/issues/260924)

### Bug Fixes

- oppdater posisjon i helpbubble med én gang den vises
  ([ad297fe](https://github.com/helsenorge/designsystem/commit/ad297feeac1e0aa457121c4b6b369c1d57b53087)), closes
  [#285111](https://github.com/helsenorge/designsystem/issues/285111)
- uu-forbedringer i tooltip og helpbubble
  ([be42f12](https://github.com/helsenorge/designsystem/commit/be42f12169779530f92d75dc7d64a06c41b38866)), closes
  [#285111](https://github.com/helsenorge/designsystem/issues/285111)

## [2.4.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.3.0&targetVersion=GTv2.4.0) (2022-11-05)

### Features

- linklist.link har prop for linkRef
  ([b86370c](https://github.com/helsenorge/designsystem/commit/b86370ccb3576c44c7ade357022b801d1407a9af)), closes
  [#287467](https://github.com/helsenorge/designsystem/issues/287467)

### Bug Fixes

- hjelpeboble plasseres riktig i scrollbar tabell
  ([6b96b04](https://github.com/helsenorge/designsystem/commit/6b96b046782494e2b2586cb158874e46602c5249)), closes
  [#288142](https://github.com/helsenorge/designsystem/issues/288142)
- modal setter fokus automatisk til første fokuserbare element
  ([88bb15c](https://github.com/helsenorge/designsystem/commit/88bb15cd9de0fb0f2a78db7a4621da1e16f31374)), closes
  [#286778](https://github.com/helsenorge/designsystem/issues/286778)

## [2.3.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.2.1&targetVersion=GTv2.3.0) (2022-10-31)

### Features

- ny hook useFocusableElement ([3294609](https://github.com/helsenorge/designsystem/commit/32946099ab996597d1a1696a8f8d3d983da9c97e)),
  closes [#286778](https://github.com/helsenorge/designsystem/issues/286778)

## [2.2.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.2.0&targetVersion=GTv2.2.1) (2022-10-25)

### Features

- nytt ikon og fiks på confluence script
  ([0d6d9ea](https://github.com/helsenorge/designsystem/commit/0d6d9ea492b22ee70c2edbb32440f39739a6ce6d)), closes
  [#287052](https://github.com/helsenorge/designsystem/issues/287052)

## [2.2.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.1.0&targetVersion=GTv2.2.0) (2022-10-25)

### Features

- input og textarea kan vise valideringsfeil uten bruk av formgroup
  ([dc44f8e](https://github.com/helsenorge/designsystem/commit/dc44f8ebd187bd20a62d544256f9902f2c39925f)), closes
  [#283315](https://github.com/helsenorge/designsystem/issues/283315)

### Bug Fixes

- bold font i tabell-header ([ba90898](https://github.com/helsenorge/designsystem/commit/ba908981f6bb2c9b5bce2f1ac6da0201263d2ecd)), closes
  [#287872](https://github.com/helsenorge/designsystem/issues/287872)
- nummerert visning har minimum 40px bredde
  ([5422e28](https://github.com/helsenorge/designsystem/commit/5422e28ef4aac66b3a32fd02c3ea14fcf899937b))
- progressbar uten alle prikker har to prikker (venstre og høyre)
  ([cf6d20f](https://github.com/helsenorge/designsystem/commit/cf6d20fec7916831dea260eab98d578665fe6a85))

## [2.1.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv2.0.0&targetVersion=GTv2.1.0) (2022-10-20)

### Features

- progressbar ([961f4ce](https://github.com/helsenorge/designsystem/commit/961f4ce75ff34cf8e237b3bf584ff7ba613b3461)), closes
  [#286349](https://github.com/helsenorge/designsystem/issues/286349)

### Bug Fixes

- expanderlist focus jsx fiks ([474dc5c](https://github.com/helsenorge/designsystem/commit/474dc5c72639fd5d41101916fe7fd05bfdafe677)),
  closes [#285115](https://github.com/helsenorge/designsystem/issues/285115)
- setter background-clip på th i table
  ([7f65224](https://github.com/helsenorge/designsystem/commit/7f65224a296c99dac71da2b8843d2e244beac259))
- setter background-clip på th i table
  ([3279386](https://github.com/helsenorge/designsystem/commit/32793866162d3e95ea61a6156907b2edea798de6))
- tabell har bare overflow:hidden når den er for liten
  ([b8b3c8a](https://github.com/helsenorge/designsystem/commit/b8b3c8a8532e8bfd4f0415213480895de72398df)), closes
  [#286994](https://github.com/helsenorge/designsystem/issues/286994)

## [2.0.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.8.0&targetVersion=GTv2.0.0) (2022-10-11)

## 2.0.0-beta.8 (2022-10-06)

### ⚠ BREAKING CHANGES

- Tidligere måtte man fjerne onSuccess-prop for at escape/klikk utenfor skulle lukke. Om du ønsker å hindre at modalen kan lukkes på denne
  måten, bruk disableCloseEvents

### Bug Fixes

- modal kan lukkes med escape/klikk utenfor
  ([3cd81a2](https://github.com/helsenorge/designsystem/commit/3cd81a2e51cf738658ef96615896c7eba0c52a32)), closes
  [#284930](https://github.com/helsenorge/designsystem/issues/284930)

## 2.0.0-beta.7 (2022-10-03)

### Bug Fixes

- process.env.NODE_ENV er med i publisert kode
  ([93d4e5f](https://github.com/helsenorge/designsystem/commit/93d4e5fd8415d9814bf9552852a479da6bb566a2))

## 2.0.0-beta.6 (2022-10-03)

### ⚠ BREAKING CHANGES

- autocomplete renamet til autoComplete i Input og Textarea
- readonly renamet til readOnly i Textarea
- form, formNoValidate, formTarget, spellcheck, aria-invalid, id fjernet fra Textarea (bruk textAreaId i stedet for id)
- TableHeadCell har ikke lenger prop for tabIndex

### Features

- input-komponenter støtter required-atributt
  ([cea2274](https://github.com/helsenorge/designsystem/commit/cea22748be40021bc1e9f17110b4f5cedd993f93)), closes
  [#227745](https://github.com/helsenorge/designsystem/issues/227745)

### Bug Fixes

- button svg margin tar hensyn til button size
  ([60e5bb7](https://github.com/helsenorge/designsystem/commit/60e5bb74c3650c95fb7abac892b0bb69f40881ec)), closes
  [#285925](https://github.com/helsenorge/designsystem/issues/285925)
- tabell som kan sorteres fungerer med skjermleser
  ([2a0a496](https://github.com/helsenorge/designsystem/commit/2a0a496a3565c99f52b96a66f6f6cde0bac010a0)), closes
  [#232731](https://github.com/helsenorge/designsystem/issues/232731)

## 2.0.0-beta.5 (2022-09-21)

### Bug Fixes

- sjekk av test env flyttes utenfor useEffect
  ([ce0b693](https://github.com/helsenorge/designsystem/commit/ce0b693ad7a5a020222fce753dba728e2be6d54f))

## 2.0.0-beta.4 (2022-09-21)

### Bug Fixes

- button ariaLabel execption kastes ikke under tester
  ([ffd059a](https://github.com/helsenorge/designsystem/commit/ffd059a07f245fa4426a53e328cfc37b8b6c976a))

## 2.0.0-beta.3 (2022-09-21)

### Features

- destructive concept støtter og outline, borderless og on-dark varianter
  ([59f5a22](https://github.com/helsenorge/designsystem/commit/59f5a220c7d70369616ac3c9bebcacddf1354700)), closes
  [#285025](https://github.com/helsenorge/designsystem/issues/285025)

### Bug Fixes

- button a tag decoration og width fix
  ([ff05b12](https://github.com/helsenorge/designsystem/commit/ff05b12a194e68b3aa575caa39770c06c40a8c54)), closes
  [#284656](https://github.com/helsenorge/designsystem/issues/284656)
- button storybooks har unike refs ([56b0715](https://github.com/helsenorge/designsystem/commit/56b07150d3861c54b1702a25f4d9c1e27465d489))

## 2.0.0-beta.2 (2022-09-19)

### Bug Fixes

- button lagt til negativ margin på mobil for å fikse spacing feil
  ([3dd306b](https://github.com/helsenorge/designsystem/commit/3dd306b207c0d3bae3b8e3332c4c6b5b29a7ec73)), closes
  [#284656](https://github.com/helsenorge/designsystem/issues/284656)
- button mobilview på md istedet for sm
  ([e9a4910](https://github.com/helsenorge/designsystem/commit/e9a4910a30d6941b235f8003204c76e9f379b158))

## 2.0.0-beta.1 (2022-09-15)

## 2.0.0-beta.0 (2022-09-15)

### Features

- button nytt design ([d0f2034](https://github.com/helsenorge/designsystem/commit/d0f20343f4ce5a55beeef87428c147f8e7654753)), closes
  [#260900](https://github.com/helsenorge/designsystem/issues/260900)
- endret styling på komponenter som bruker Button
  ([81e29fb](https://github.com/helsenorge/designsystem/commit/81e29fbd14e436a1151c1adb64e36461f2bfb815)), closes
  [#260900](https://github.com/helsenorge/designsystem/issues/260900)

### Bug Fixes

- button Table bruker ariaLabel ([e547919](https://github.com/helsenorge/designsystem/commit/e547919b63306fc926571e4b23c41d482389771c)),
  closes [#260900](https://github.com/helsenorge/designsystem/issues/260900)
- tilbakemeldinger på button ([7c61596](https://github.com/helsenorge/designsystem/commit/7c6159630a77ed6c0ebdc8c3cf78aa3f2345e44b)), closes
  [#260900](https://github.com/helsenorge/designsystem/issues/260900)

## [1.8.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.7.0&targetVersion=GTv1.8.0) (2022-10-11)

### Features

- figma tokens fetches og genereres ([d6a37dc](https://github.com/helsenorge/designsystem/commit/d6a37dcacbe708be9bc6456d3c417601c858ab26)),
  closes [#282801](https://github.com/helsenorge/designsystem/issues/282801)

### Bug Fixes

- figmatokens pull bruker https istedet for ssh
  ([35248ef](https://github.com/helsenorge/designsystem/commit/35248ef3b4f9b11ee46f7bf2c2e322c2c4c66b05)), closes
  [#286502](https://github.com/helsenorge/designsystem/issues/286502)

## [1.7.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.6.0&targetVersion=GTv1.7.0) (2022-09-29)

### Features

- notificationpanel støtter custom labelId
  ([d5f28ee](https://github.com/helsenorge/designsystem/commit/d5f28ee2b68637f10546cd35991b623e8266c0c3))

### Bug Fixes

- fluid notificationpanel tar hensyn til fluid/variant/shadow-props igjen
  ([a19afba](https://github.com/helsenorge/designsystem/commit/a19afba44068d3c8be15812d90711ace51a9a778))
- form feilmeldinger leses opp av skjermleser
  ([d57305f](https://github.com/helsenorge/designsystem/commit/d57305fd740c0553a395923c20dbd1f1235136f5)), closes
  [#227757](https://github.com/helsenorge/designsystem/issues/227757)

## [1.6.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.5.1&targetVersion=GTv1.6.0) (2022-09-22)

### Features

- expanderlist kan være sticky ([0c78cf5](https://github.com/helsenorge/designsystem/commit/0c78cf53e302bdeac62c35c2ba2bf188e848975b)),
  closes [#284516](https://github.com/helsenorge/designsystem/issues/284516)

## [1.5.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.5.0&targetVersion=GTv1.5.1) (2022-09-21)

### Bug Fixes

- unobserve eller disconnect når komponent som bruker ResizeObserve/IntersectionObserver unmountes
  ([87196e0](https://github.com/helsenorge/designsystem/commit/87196e0c333d87deb3006b5e5813b12749652b03)), closes
  [#284648](https://github.com/helsenorge/designsystem/issues/284648)

## [1.5.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.4.0&targetVersion=GTv1.5.0) (2022-09-16)

### Features

- nytt komponent duolist ([7b7254e](https://github.com/helsenorge/designsystem/commit/7b7254e429340ada1f0605d16b302675de0bd835)), closes
  [#275213](https://github.com/helsenorge/designsystem/issues/275213)

## [1.4.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.3.2&targetVersion=GTv1.4.0) (2022-09-14)

### Features

- panel har props for buttonAriaLabelledById og buttonAriaLabel
  ([deacdfe](https://github.com/helsenorge/designsystem/commit/deacdfe06eb6904ff6657ecaa56daf64e9012b64))

### Bug Fixes

- button i panel har unik label ([a37ef06](https://github.com/helsenorge/designsystem/commit/a37ef06b7ff967d4bb372d5c9e0e181e25c912c8))
- skjul detaljer-knapp fjernet fra ekspandert Panel
  ([011b0ac](https://github.com/helsenorge/designsystem/commit/011b0ac12c50e19e8e88812f73e9285d3371940d))

## [1.3.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.3.1&targetVersion=GTv1.3.2) (2022-09-08)

### Bug Fixes

- slider beholder riktig posisjon/verdi hvis den endrer størrelse
  ([afa1d0a](https://github.com/helsenorge/designsystem/commit/afa1d0af335c4e2450962904f042768badbc18fd)), closes
  [#279639](https://github.com/helsenorge/designsystem/issues/279639)

## [1.3.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.3.0&targetVersion=GTv1.3.1) (2022-09-02)

### Bug Fixes

- forbedret sr-only og sr-only-focusable mixins
  ([c5c81d4](https://github.com/helsenorge/designsystem/commit/c5c81d41298e03854c742410566c57405f5c36b5))
- loader har role="progressbar" på riktig element
  ([a04ced2](https://github.com/helsenorge/designsystem/commit/a04ced210957560132db684f56f873a08e4dddf6))

## [1.3.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.2.2&targetVersion=GTv1.3.0) (2022-09-01)

### ⚠ BREAKING CHANGES

- CMSet eller andre steder som vil vise children ved utskrift må ta i bruk propen renderChildrenWhenClosed ved bruk av komponentene
  Expander, Panel og ExpanderList

### Features

- vis children ved printing hvis renderChildrenWhenClosed er true
  ([1833ddf](https://github.com/helsenorge/designsystem/commit/1833ddf6fa324f104f31fc41ec635945ac88cec2)), closes
  [#282870](https://github.com/helsenorge/designsystem/issues/282870)

### Bug Fixes

- panel har avstand fra tittel til badge
  ([09034c4](https://github.com/helsenorge/designsystem/commit/09034c4844408c7cfe8f65d7a1a0d82a7828c2ef)), closes
  [#282359](https://github.com/helsenorge/designsystem/issues/282359)
- økt kontrast på understreking av lenker
  ([50b7fa4](https://github.com/helsenorge/designsystem/commit/50b7fa47fb44cb7d75fb877bd53e2309b35e1e21)), closes
  [#229049](https://github.com/helsenorge/designsystem/issues/229049)

## [1.2.2](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.2.1&targetVersion=GTv1.2.2) (2022-08-31)

### Features

- highlightbox oppdatert styling ([98c44aa](https://github.com/helsenorge/designsystem/commit/98c44aa68e6bbea5c9853a5807e66c0ed6be67d0)),
  closes [#280715](https://github.com/helsenorge/designsystem/issues/280715)

## [1.2.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.2.0&targetVersion=GTv1.2.1) (2022-08-29)

## [1.2.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.1.0&targetVersion=GTv1.2.0) (2022-08-29)

### Features

- endret button farger for å støtte uu krav
  ([183447e](https://github.com/helsenorge/designsystem/commit/183447e99ec43e01f963c78c7144d55f14827fb1))
- notificationpanel har ariaLabel-prop
  ([f1a7db7](https://github.com/helsenorge/designsystem/commit/f1a7db7b33446b9df2a109f50c401ec80d70b317)), closes
  [#279887](https://github.com/helsenorge/designsystem/issues/279887)

## [1.1.0](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.1&targetVersion=GTv1.1.0) (2022-08-22)

### Features

- highlightbox støtter custom className
  ([333fede](https://github.com/helsenorge/designsystem/commit/333fede5be849d6bbd45ba59a2a60c49d3f012cf)), closes
  [#281862](https://github.com/helsenorge/designsystem/issues/281862)

### Bug Fixes

- hover-effekter på ikke klikkbare panel og ny plassering for detalj-knapp i panel
  ([22bf59d](https://github.com/helsenorge/designsystem/commit/22bf59d8bdca3b8dd67d6589f252a314eb2ea333)), closes
  [#281061](https://github.com/helsenorge/designsystem/issues/281061)
- ikke vis scrolleindikator mens innholdet lastes
  ([ad6f7d2](https://github.com/helsenorge/designsystem/commit/ad6f7d21cafcdfaf39c6d0afb04be057e290678c))
- tabell med horisontal scroll viser hele borderen
  ([6c5cb02](https://github.com/helsenorge/designsystem/commit/6c5cb0208967986902a5c62a3e3171d4b1f50e36))

## [1.0.1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-betahelpbubble3&targetVersion=GTv1.0.1) (2022-08-12)

### ⚠ BREAKING CHANGES

- id fjernet som prop fra Icon. Fant ingen vertikaler som bruker dette utenom ROX sine.
- Icon som mottar ariaLabel vil nå ikke lenger være aria-hidden og fungere som et bilde med alternativ tekst

### Features

- anchorlink, linklist, panel og tile har onClick-handler og kan vises som button
  ([59d5561](https://github.com/helsenorge/designsystem/commit/59d556123f8667beb3518de7db28ce7dee88e360)), closes
  [#280408](https://github.com/helsenorge/designsystem/issues/280408)
- flyttet tooltip til designsystemet og lagt til tester og bedre onclick...
  ([6f571ba](https://github.com/helsenorge/designsystem/commit/6f571ba041046bde2dfe0f73a7af2c7d559b0e11)), closes
  [#278062](https://github.com/helsenorge/designsystem/issues/278062)
- hvit bakgrunn ([521e8d3](https://github.com/helsenorge/designsystem/commit/521e8d34e7de00b9cebc4b5085f5bcfd8d9e3a26)), closes
  [#279875](https://github.com/helsenorge/designsystem/issues/279875)
- input og textarea kan ha begrenset bredde
  ([d4ece0a](https://github.com/helsenorge/designsystem/commit/d4ece0ab8d7ea5ba52782cc1c9aaca79c229cf9f)), closes
  [#279138](https://github.com/helsenorge/designsystem/issues/279138)
- opprettet Table komponent [#260922](https://github.com/helsenorge/designsystem/issues/260922)
  ([b17024e](https://github.com/helsenorge/designsystem/commit/b17024e7ba8c60705bf77c4d61e0cc39d1bce1fe))
- panel har props for expanded og onExpand-callback
  ([83477b3](https://github.com/helsenorge/designsystem/commit/83477b3584f14083d3231a5e20d7896124d55a2a)), closes
  [#280971](https://github.com/helsenorge/designsystem/issues/280971)
- panel kan styre overskriftsnivå på tittelen med titleHtmlMarkup-prop
  ([5b149d8](https://github.com/helsenorge/designsystem/commit/5b149d8771637d12ad45097a29deabc299d3d27e)), closes
  [#279854](https://github.com/helsenorge/designsystem/issues/279854)
- tabell støtter horisontal scroll ([d00b9ad](https://github.com/helsenorge/designsystem/commit/d00b9ad2b414e1fde836fa91e66368b891c0cc25)),
  closes [#280449](https://github.com/helsenorge/designsystem/issues/280449)
- usesize-hook fungerer uten ResizeObserver igjen
  ([15ce9d2](https://github.com/helsenorge/designsystem/commit/15ce9d2f9afbc85ee340d370cedc680bbecd9edb)), closes
  [#272523](https://github.com/helsenorge/designsystem/issues/272523)

### Bug Fixes

- expanderlist med JSX som title kan ha full bredde
  ([9723dfd](https://github.com/helsenorge/designsystem/commit/9723dfdd039ea8f9cc3088b8967ea86cc6ffb8c1)), closes
  [#279863](https://github.com/helsenorge/designsystem/issues/279863)
- expanderlist skal ikke lukke seg automatisk når innholdet endrer seg
  ([29f448b](https://github.com/helsenorge/designsystem/commit/29f448bcf3d69bada9513ad7842f8ebbfe41e9df)), closes
  [#279367](https://github.com/helsenorge/designsystem/issues/279367)
- grid.scss inneholder bare grid-mixins for å redusere størrelsen ved import
  ([e8c8cfb](https://github.com/helsenorge/designsystem/commit/e8c8cfb640dd29a4a7694fa9f4f458da41efdd61)), closes
  [#281219](https://github.com/helsenorge/designsystem/issues/281219)
- highlightbox medium og large skal ha riktig bredde som følger gridet
  ([4a5f194](https://github.com/helsenorge/designsystem/commit/4a5f194fbcca1100a1df92337c7ddda186b111c7)), closes
  [#276398](https://github.com/helsenorge/designsystem/issues/276398)
- Icon-komponent har bedre støtte for skjermlesere
  ([14a616d](https://github.com/helsenorge/designsystem/commit/14a616d5ed0257f7a8ec797ff1d216e1755ec0a9)), closes
  [#273686](https://github.com/helsenorge/designsystem/issues/273686)
- lukkeknappen i NotificationPanel skal ligge først i DOMen
  ([55943ac](https://github.com/helsenorge/designsystem/commit/55943acc9189eb3acd53bb79225b99379d450161)), closes
  [#229047](https://github.com/helsenorge/designsystem/issues/229047)
- riktig avstand mellom tittel i formgroup og andre elementer når det er en valideringsfeil
  ([226450c](https://github.com/helsenorge/designsystem/commit/226450ca11fa234e77a6c87e85c4170cc2066aeb)), closes
  [#279407](https://github.com/helsenorge/designsystem/issues/279407)
- tile skal arve bredde fra elementet over
  ([3cb7306](https://github.com/helsenorge/designsystem/commit/3cb73061053c11a6ee336291c4d6cc16b5d56cbb)), closes
  [#280022](https://github.com/helsenorge/designsystem/issues/280022)
- tydeligere markering av fokus i Slider
  ([275171b](https://github.com/helsenorge/designsystem/commit/275171bd8e14fb997c6cf2a04958ffdc13569bf8)), closes
  [#277564](https://github.com/helsenorge/designsystem/issues/277564)
- **table:** endrer navn på prop ([2502262](https://github.com/helsenorge/designsystem/commit/2502262ba057575fae5e56e070d30ebd45a88549))

## [1.0.0-betahelpbubble3](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-beta133&targetVersion=GTv1.0.0-betahelpbubble3) (2022-05-31)

### Features

- expanderlist støtter å ekspandere expandere med expanded-prop
  ([ab5581f](https://github.com/helsenorge/designsystem/commit/ab5581ff3624df478f8979793a347d3954d2e3fe)), closes
  [#278686](https://github.com/helsenorge/designsystem/issues/278686)
- formgroup kan vises med div- eller fieldset-tag
  ([170a60f](https://github.com/helsenorge/designsystem/commit/170a60f1246c91cb2acc2fa05efe3e310021d8a5)), closes
  [#278133](https://github.com/helsenorge/designsystem/issues/278133)

### Bug Fixes

- endrer initialRender til å bli satt via showBubble prop istedet for på oppstart at komponentet
  ([09faaf9](https://github.com/helsenorge/designsystem/commit/09faaf98136ea8ac09cedfd5a57347d23236b727))
- fiks for helpbubble i modal ([0a38ec2](https://github.com/helsenorge/designsystem/commit/0a38ec2651c3cfa53003785ef701754243d35813))
- tekst over flere linjer i expander skal være venstrestilt
  ([71d0d8f](https://github.com/helsenorge/designsystem/commit/71d0d8f190adc764e5d4e9df793f8524c130caad)), closes
  [#276346](https://github.com/helsenorge/designsystem/issues/276346)

## [1.0.0-beta133](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-betahelpbubble1&targetVersion=GTv1.0.0-beta133) (2022-05-27)

## [1.0.0-betahelpbubble1](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-betahelpbubble&targetVersion=GTv1.0.0-betahelpbubble1) (2022-05-27)

### Bug Fixes

- Icon støtte for controller prop og ([87dce6b](https://github.com/helsenorge/designsystem/commit/87dce6b763cba1ff13910f8f4ac6afe896b079fa))

## [1.0.0-betahelpbubble](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-beta132&targetVersion=GTv1.0.0-betahelpbubble) (2022-05-25)

### Features

- HelpBubble ferdigstilling ([6c8195b](https://github.com/helsenorge/designsystem/commit/6c8195bb12e15ec9870328ec80f139d2f0e911a5))
- helpbubble komponent logikk for plassering
  ([560860e](https://github.com/helsenorge/designsystem/commit/560860ee4921b51346a2c18a57b608c3c6acfd71))
- ny hook useEventListenerState og opprydning i HelpBubble
  ([2a7d9dd](https://github.com/helsenorge/designsystem/commit/2a7d9dda6f3a896d5f7fc1e29af5d7dca0d17653))
- nytt komponent helpbubble ([c1f5cae](https://github.com/helsenorge/designsystem/commit/c1f5caed051591ab7036fd18774e825e9b82fe9d))
- nytt komponent HelpBubble ([b1f3b6c](https://github.com/helsenorge/designsystem/commit/b1f3b6c1015cc613461e95b371f138710ee88efc))

## [1.0.0-beta132](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GTv1.0.0-beta106&targetVersion=GTv1.0.0-beta132) (2022-05-20)

### ⚠ BREAKING CHANGES

- debounce-util returnerer array med debounced funksjon og teardown-funksjon
- Slett ubrukt useWindowSize-hook

### Features

- button onclick signatur ekspanderes og loader props export
  ([3e2bbf8](https://github.com/helsenorge/designsystem/commit/3e2bbf843ddaa7548585e9759d0b526f2763ddd0)), closes
  [#264156](https://github.com/helsenorge/designsystem/issues/264156)
- dropdown-komponent ([58bc64c](https://github.com/helsenorge/designsystem/commit/58bc64c28ce1080ff39c51acf46477ad7440e821)), closes
  [#260923](https://github.com/helsenorge/designsystem/issues/260923)
- eksporter uuid-util fra designsystem-react
  ([16da649](https://github.com/helsenorge/designsystem/commit/16da649b6add4653bf0c3998fb1e24563147947d)), closes
  [#231720](https://github.com/helsenorge/designsystem/issues/231720)
- expander støtter onExpand-callback
  ([39e6260](https://github.com/helsenorge/designsystem/commit/39e626085886e4c7ab55a913aef38394d2e92d2a)), closes
  [#271323](https://github.com/helsenorge/designsystem/issues/271323)
- highlightbox støtter ikon ([5e51057](https://github.com/helsenorge/designsystem/commit/5e51057cc01224944471895f95ce8a52cd03ff52)), closes
  [#270177](https://github.com/helsenorge/designsystem/issues/270177)
- NoAccess ikon og StatusDot variant
  ([0291c2c](https://github.com/helsenorge/designsystem/commit/0291c2c0fbc304f3b94026c3c76d2c38ab4a3c12)), closes
  [#277207](https://github.com/helsenorge/designsystem/issues/277207)
- nytt komponent FormLayout ([d02f5e9](https://github.com/helsenorge/designsystem/commit/d02f5e90979554dbd0b59a1a80167ccbd3d58ce2)), closes
  [#273348](https://github.com/helsenorge/designsystem/issues/273348) [#274864](https://github.com/helsenorge/designsystem/issues/274864)
- PanelList-komponent ([4ea5342](https://github.com/helsenorge/designsystem/commit/4ea5342cd81c73b92ac6c63d6a8bd044c73f3cfc)), closes
  [#260910](https://github.com/helsenorge/designsystem/issues/260910)
- tag og taglist-komponenter ([56fc96b](https://github.com/helsenorge/designsystem/commit/56fc96b5148340d9c24f6cc33d3b1ca9460dc3fd)), closes
  [#268234](https://github.com/helsenorge/designsystem/issues/268234)
- withBreakpoint Higher Order Component
  ([8e3f8e0](https://github.com/helsenorge/designsystem/commit/8e3f8e03996022ea9a2a23956cd1adb8fd253e7f)), closes
  [#269740](https://github.com/helsenorge/designsystem/issues/269740)

### Bug Fixes

- button har type=button som default
  ([f9ac84a](https://github.com/helsenorge/designsystem/commit/f9ac84a58c2d0da8bc5e8bbbbeb6269dadf498bc)), closes
  [#273800](https://github.com/helsenorge/designsystem/issues/273800)
- close, expander og expanderlist skal ha type button på button-element
  ([3256c2c](https://github.com/helsenorge/designsystem/commit/3256c2c6ea53fb79b31e0c38ce708e41b9c30eed)), closes
  [#277772](https://github.com/helsenorge/designsystem/issues/277772)
- disabled button med intent har grå bakgrunn
  ([082ad11](https://github.com/helsenorge/designsystem/commit/082ad117cdff31c895e9acbcf15d6507655630e5)), closes
  [#276164](https://github.com/helsenorge/designsystem/issues/276164)
- disabled button skal ha grå tekst ([9de7c53](https://github.com/helsenorge/designsystem/commit/9de7c5398b14152376f100516cc15d09b49fae7a))
- Eksport av mocks gjøres igjen ([4d11252](https://github.com/helsenorge/designsystem/commit/4d1125240a6eb9907913878ceee09f3045b2ccd5)),
  closes [#271917](https://github.com/helsenorge/designsystem/issues/271917)
- erstatt ResizeObserver med event listener
  ([df21fb1](https://github.com/helsenorge/designsystem/commit/df21fb1c32f0b6681bad82fe8fe8a5b9cafd81cf)), closes
  [#272521](https://github.com/helsenorge/designsystem/issues/272521) [#272560](https://github.com/helsenorge/designsystem/issues/272560)
- fallback til gammel addListener for mediaqueries dersom addEventListener ikke er støttet
  ([d86ae85](https://github.com/helsenorge/designsystem/commit/d86ae854a4b4f892d49d3989cf8c0117e78e5690)), closes
  [#272502](https://github.com/helsenorge/designsystem/issues/272502)
- fjernet dobbel className ([5504a58](https://github.com/helsenorge/designsystem/commit/5504a5838ae09e5e032802380ccb38d6bbe05952)), closes
  [#276205](https://github.com/helsenorge/designsystem/issues/276205)
- forbedring av props og design av Dropdown
  ([7483a5a](https://github.com/helsenorge/designsystem/commit/7483a5a842ad8cf6f6f5c42b7aa0cebd536e7813)), closes
  [#276177](https://github.com/helsenorge/designsystem/issues/276177)
- import fiks i styling ([79d8841](https://github.com/helsenorge/designsystem/commit/79d88417fa7c64e5449a972d5b47bfb3d5224e66)), closes
  [#275317](https://github.com/helsenorge/designsystem/issues/275317)
- knapper i expanderlist har unik id per expanderlist
  ([de912e6](https://github.com/helsenorge/designsystem/commit/de912e6525f70631267f1689c681c2f049ba3e06)), closes
  [#276239](https://github.com/helsenorge/designsystem/issues/276239)
- large button som vises som lenke har innhold sentrert vertikalt
  ([ff35db2](https://github.com/helsenorge/designsystem/commit/ff35db2063e6e5bc812cf5b90e09001d6e92fd13))
- modal uten knapper skal ikke ha tomt felt nederst
  ([55773ed](https://github.com/helsenorge/designsystem/commit/55773ed95663ff61e15c1ef8b1640d6a9f88a46d)), closes
  [#275139](https://github.com/helsenorge/designsystem/issues/275139)
- padding i panel ([d9e5d7d](https://github.com/helsenorge/designsystem/commit/d9e5d7d458c2cfd4d0d32b941bf1be4efd08ca66)), closes
  [#272363](https://github.com/helsenorge/designsystem/issues/272363) [#272405](https://github.com/helsenorge/designsystem/issues/272405)
- returner riktig ikon ved custom ikonstørrelse
  ([b699d4f](https://github.com/helsenorge/designsystem/commit/b699d4f567b2c0df53a4014d36d4f2889d015686)), closes
  [#272203](https://github.com/helsenorge/designsystem/issues/272203)
- riktig font når tag er button ([07d3f9f](https://github.com/helsenorge/designsystem/commit/07d3f9f218c83e8d02705c914b523bb50547a3f8)),
  closes [#276826](https://github.com/helsenorge/designsystem/issues/276826)
- sonarcube fiks ([006d392](https://github.com/helsenorge/designsystem/commit/006d392c1c2f22b97ccc982201ff4a21a976b433))
- storybook fiks logo ([10f3913](https://github.com/helsenorge/designsystem/commit/10f39131f44796f686eaadba26965cc59c620bb1)), closes
  [#275098](https://github.com/helsenorge/designsystem/issues/275098)
- tilbakemeldinger fikset ([876146c](https://github.com/helsenorge/designsystem/commit/876146ced2ada280121e71ed9c44069eec3a3876))
- useLayoutEvent kansellerer callback ved unmount
  ([d522341](https://github.com/helsenorge/designsystem/commit/d522341045302111f0ad9ddc541de234882936db))
- **modal:** sjekker om den er skrollbar
  ([23abf84](https://github.com/helsenorge/designsystem/commit/23abf841c3d8b4cc745acd0dff3abc0e3f11cb40))
- **scss:** Fjernet font størrelse ([3dfe927](https://github.com/helsenorge/designsystem/commit/3dfe9278a8c76686dae1d7bb5e8ce461fb3477a7))

### Code Refactoring

- bruk useBreakpoint i dokumentasjon ([5fec888](https://github.com/helsenorge/designsystem/commit/5fec888ead64c1ce900c6976ea371c6ac49a8414))

## [1.0.0-beta106](https://github.com/helsenorge/designsystem/branchCompare?baseVersion=GT4bd33fb35fc7ff5e0e81a01e34981fa4199d949d&targetVersion=GTv1.0.0-beta106) (2022-02-14)

### Features

- alle komponenter har testId-prop ([3990042](https://github.com/helsenorge/designsystem/commit/39900420f2df7e0451b311b3bbba9425eb7d8c4d)),
  closes [#266560](https://github.com/helsenorge/designsystem/issues/266560)
- checkbox component lagt til ([2506151](https://github.com/helsenorge/designsystem/commit/2506151b2e09953372de187c1707e415e853f153))
- checkbox stories lagt til ([0d519f5](https://github.com/helsenorge/designsystem/commit/0d519f51fd05da5b28c8f58208cc5c3e5388789a))
- expander i expanderlist skal ha egen analyticsid
  ([abae3fe](https://github.com/helsenorge/designsystem/commit/abae3fe20b33e202c716cb21ecd412ebb0aad62f))
- expander-komponent ([cfe7498](https://github.com/helsenorge/designsystem/commit/cfe74989614ac6a8e4ba9e9a442c498b9d2f3208)), closes
  [#260909](https://github.com/helsenorge/designsystem/issues/260909) [#267629](https://github.com/helsenorge/designsystem/issues/267629)
- highlightbox-komponent ([2f3ff49](https://github.com/helsenorge/designsystem/commit/2f3ff491f6411e323a18e65a6062e5f70e56476f)), closes
  [#260906](https://github.com/helsenorge/designsystem/issues/260906)
- ikon har mulighet for title-tag ([796c52a](https://github.com/helsenorge/designsystem/commit/796c52a3043588db27a8cc8f6d97a409e58ae9c8)),
  closes [#225762](https://github.com/helsenorge/designsystem/issues/225762)
  [#227165](https://github.com/helsenorge/designsystem/issues/227165)
- lagt til id til button ([f9d5ef5](https://github.com/helsenorge/designsystem/commit/f9d5ef5fc1fd9d9a9abecd618d6b377c3f87892a))
- mobilvariant og small-variant av LinkList og ExpanderList
  ([c538cb8](https://github.com/helsenorge/designsystem/commit/c538cb84e3570368b38f26ef0fbbb7a599ce50b2)), closes
  [#264714](https://github.com/helsenorge/designsystem/issues/264714)
- Modal har støtte for custom icon så lenge man ikke bruker en variant som har hardkodet ikon (error, warning)
  ([b487594](https://github.com/helsenorge/designsystem/commit/b4875941347e2562b2a80baf5d289ecaffc536fc)), closes
  [#261864](https://github.com/helsenorge/designsystem/issues/261864)
- modal har støtte for komponent etter title + success-variant
  ([f77ccf5](https://github.com/helsenorge/designsystem/commit/f77ccf5ec9b2fb755dbae697d0d6112b070a6fe2)), closes
  [#267692](https://github.com/helsenorge/designsystem/issues/267692) [#267722](https://github.com/helsenorge/designsystem/issues/267722)
- modal-komponent har zIndex prop ([a7bb551](https://github.com/helsenorge/designsystem/commit/a7bb551c943eb4b4d08998a54470d559b6e6b2aa)),
  closes [#268729](https://github.com/helsenorge/designsystem/issues/268729)
- ny prop disableCloseEvents ([b87de20](https://github.com/helsenorge/designsystem/commit/b87de20b03c09e7d37a4911c5de31f6624f2886c)), closes
  [#269581](https://github.com/helsenorge/designsystem/issues/269581)
- nye ikoner ([c07294c](https://github.com/helsenorge/designsystem/commit/c07294c06ca125a7abbc33b8b1a87d38c222fa6e)), closes
  [#261843](https://github.com/helsenorge/designsystem/issues/261843)
- Nye ikoner til designsystem ([acf661a](https://github.com/helsenorge/designsystem/commit/acf661a5623c5e248c4aa5b081c121d265976401)),
  closes [#266695](https://github.com/helsenorge/designsystem/issues/266695)
- **modal:** lukkeknapp kan skjules ([e6ee14f](https://github.com/helsenorge/designsystem/commit/e6ee14f2317c99d910edb9ea93db56d69e20996a)),
  closes [#262186](https://github.com/helsenorge/designsystem/issues/262186)
- **web:** lagt til eksempelsider og tester
  ([9161006](https://github.com/helsenorge/designsystem/commit/91610066ab04a6b8541f85c89f76a4eb66f19fc5))

### Bug Fixes

- align border med ikon i Expander ([82b22a6](https://github.com/helsenorge/designsystem/commit/82b22a6ca0ae181650e8db90a20f27bde6d7d9fc)),
  closes [#269714](https://github.com/helsenorge/designsystem/issues/269714)
- bruk require for import av uuid for å unngå ekstra dependencies
  ([1989270](https://github.com/helsenorge/designsystem/commit/198927054a2d3a9f754d1de46fecd8e7aa4bb894)), closes
  [#266566](https://github.com/helsenorge/designsystem/issues/266566)
- button aria props ([94834e0](https://github.com/helsenorge/designsystem/commit/94834e01d2ae736fd7a44f907ed97f9e18d50dcf)), closes
  [#262859](https://github.com/helsenorge/designsystem/issues/262859)
- button uten annet innhold enn ikon har ingen tom span med ekstra margin
  ([5d9f52b](https://github.com/helsenorge/designsystem/commit/5d9f52b14229dc1735dd2a1db18e04e363ecf8f8)), closes
  [#266803](https://github.com/helsenorge/designsystem/issues/266803)
- checkbox tar i bruk vår egen uuid hjelpefunksjon
  ([240ae09](https://github.com/helsenorge/designsystem/commit/240ae09c92578edc0f6dbe7a0a9f9b39d948eebc))
- checkbox tilbakemeldinger ([773a7df](https://github.com/helsenorge/designsystem/commit/773a7df43d858312f78d3cb549437065f484d2ff))
- checkbox tilbakemeldinger ([88f2ee7](https://github.com/helsenorge/designsystem/commit/88f2ee775f5eef9198b868f07a6c5a6083068337))
- driftsmelding har aria-label på lukkeknapp
  ([424215a](https://github.com/helsenorge/designsystem/commit/424215acae4084b3f8381aacbb2a36ab8023ad43))
- expander med isOpen skal bare åpne den første, og skal kunne lukkes
  ([cba97c1](https://github.com/helsenorge/designsystem/commit/cba97c14d89d61dbadda563c34ed31b74e4756c8)), closes
  [#266037](https://github.com/helsenorge/designsystem/issues/266037) [#266037](https://github.com/helsenorge/designsystem/issues/266037)
- expanderlist bruker css for å toggle innhold
  ([98adf1b](https://github.com/helsenorge/designsystem/commit/98adf1bf1e28ce0dcddc7fdc53892598b0f5ba87)), closes
  [#270679](https://github.com/helsenorge/designsystem/issues/270679)
- expanderlist/linklist skal kun ha understreking av tekst v/fokus
  ([c27b11b](https://github.com/helsenorge/designsystem/commit/c27b11b1d24e86e11cc76f03f7c9e6062fb76dec)), closes
  [#266096](https://github.com/helsenorge/designsystem/issues/266096)
- flytt import av helsenorge-styles for at gatsby develop og gatsby build...
  ([8fa62ec](https://github.com/helsenorge/designsystem/commit/8fa62eccd22591926c7b776ce49d338f11bf37a6)), closes
  [#270181](https://github.com/helsenorge/designsystem/issues/270181)
- ikke Arial på button i expanderlist
  ([5354754](https://github.com/helsenorge/designsystem/commit/53547549d26a90884cab2f189181821db123c0ba))
- justert padding i notificationpanel
  ([3b8cce7](https://github.com/helsenorge/designsystem/commit/3b8cce777ffaa5735bd887e748cace9770e6cc50)), closes
  [#270330](https://github.com/helsenorge/designsystem/issues/270330)
- komponenter som bruker uuid() kan overstyres med prop
  ([2a7ad4c](https://github.com/helsenorge/designsystem/commit/2a7ad4c43b3159dbd144f91d2a77bd22667a1985)), closes
  [#269814](https://github.com/helsenorge/designsystem/issues/269814)
- linklist har minimumshøyde på 4rem uansett
  ([59b1589](https://github.com/helsenorge/designsystem/commit/59b1589ab00ce57d0a17ed01e02be8726b26c68d)), closes
  [#266617](https://github.com/helsenorge/designsystem/issues/266617)
- lukkeknapp i notificationpanel har samme stil på fokus som hover
  ([7909804](https://github.com/helsenorge/designsystem/commit/79098040d17f2641ab35c5bb4053e013c941ff9b))
- modal uten knapper har samme padding i bunnen som ellers
  ([d4c46b7](https://github.com/helsenorge/designsystem/commit/d4c46b7b1c61ca082bb7ee93bde123e8f8e196c8)), closes
  [#270297](https://github.com/helsenorge/designsystem/issues/270297)
- oppdatert farge/font på avatar-komponent
  ([e44e457](https://github.com/helsenorge/designsystem/commit/e44e4574bc270c1e89057adcce6bc206094b8aad)), closes
  [#250831](https://github.com/helsenorge/designsystem/issues/250831) [#250831](https://github.com/helsenorge/designsystem/issues/250831)
- returner breakpoint på samme måte både initially og ved oppdateringer
  ([82c4c3b](https://github.com/helsenorge/designsystem/commit/82c4c3bb7fa62ee6ab25babb357292326a5557f9)), closes
  [#269532](https://github.com/helsenorge/designsystem/issues/269532)
- riktig font i input/textarea ([8f25b4f](https://github.com/helsenorge/designsystem/commit/8f25b4fd0094523ec0cabade4dba9390f803c328)),
  closes [#270181](https://github.com/helsenorge/designsystem/issues/270181)
- rollup config for å kunne ta i bruk react hook form eksempler og endring på eksempel siden
  ([bb98612](https://github.com/helsenorge/designsystem/commit/bb98612e6cbcea30b12fdd03986ee9c1b989def6))
- spacer calc fjernet ([c25db43](https://github.com/helsenorge/designsystem/commit/c25db4327968f4c5fb9316c6ebf34391611e0426))
- teksten i NotificationPanelet tar hele plassen når den ikke kan lukkes
  ([5c1129d](https://github.com/helsenorge/designsystem/commit/5c1129d7eb9a49c69fc1485b80f893cbd4d406c7)), closes
  [#256356](https://github.com/helsenorge/designsystem/issues/256356)
- Tile har riktig fontstørrelse/responsiv oppførsel
  ([fa2a620](https://github.com/helsenorge/designsystem/commit/fa2a620234c0cc148cc7112e4fbc4bf18fb2541b)), closes
  [#263621](https://github.com/helsenorge/designsystem/issues/263621)
- **button:** fjernet tabindex ([fe547c9](https://github.com/helsenorge/designsystem/commit/fe547c9330fc1e5992e0bd95e7f33886ad05f2ff)),
  closes [#262802](https://github.com/helsenorge/designsystem/issues/262802)
- **designsystem:** button a link href og target
  ([eac9ffd](https://github.com/helsenorge/designsystem/commit/eac9ffd3ef592a7b6b1e517c008715138ffd741d)), closes
  [#261849](https://github.com/helsenorge/designsystem/issues/261849)
- **designsystem:** button styling og hover
  ([062f0fe](https://github.com/helsenorge/designsystem/commit/062f0feb0c3a21d68fae619b793e76985e8d10e9)), closes
  [#263384](https://github.com/helsenorge/designsystem/issues/263384)
- **designsystem:** linklist list classname tatt i bruk, notificationpanel closebutton fiks
  ([4bd33fb](https://github.com/helsenorge/designsystem/commit/4bd33fb35fc7ff5e0e81a01e34981fa4199d949d))
- **designsystem:** notificationpanel aria leser opp tekstinnhold i tillegg
  ([a4795ef](https://github.com/helsenorge/designsystem/commit/a4795ef6c09a021d8c39dd71900f529cc07caf7a)), closes
  [#249789](https://github.com/helsenorge/designsystem/issues/249789) [#261019](https://github.com/helsenorge/designsystem/issues/261019)
- **expanderlist:** scroll til overskriften man klikker på i accordion-modus
  ([60a4f61](https://github.com/helsenorge/designsystem/commit/60a4f618f804c0127fb56d98f28c6af734f54fe4)), closes
  [#251341](https://github.com/helsenorge/designsystem/issues/251341)
- **valdiation:** Validation feedback endringer
  ([6efd616](https://github.com/helsenorge/designsystem/commit/6efd61647624aed721abc11467a667368d9860ec))
- **web:** Styling av komponenter med SCSS modules funker igjen
  ([b40924a](https://github.com/helsenorge/designsystem/commit/b40924ac9ac3657fbd6f21bd66ad84dd876ce79d))
