## [1.2.0](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/branchCompare?baseVersion=GTv1.1.0&targetVersion=GTv1.2.0) (2022-08-29)


### Features

*  endret button farger for å støtte uu krav ([183447e](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/183447e99ec43e01f963c78c7144d55f14827fb1))
*  notificationpanel har ariaLabel-prop ([f1a7db7](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/f1a7db7b33446b9df2a109f50c401ec80d70b317)), closes [#279887](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279887)

## [1.1.0](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/branchCompare?baseVersion=GTv1.0.1&targetVersion=GTv1.1.0) (2022-08-22)


### Features

*  highlightbox støtter custom className ([333fede](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/333fede5be849d6bbd45ba59a2a60c49d3f012cf)), closes [#281862](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/281862)


### Bug Fixes

*  hover-effekter på ikke klikkbare panel og ny plassering for detalj-knapp i panel ([22bf59d](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/22bf59d8bdca3b8dd67d6589f252a314eb2ea333)), closes [#281061](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/281061)
*  ikke vis scrolleindikator mens innholdet lastes ([ad6f7d2](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/ad6f7d21cafcdfaf39c6d0afb04be057e290678c))
*  tabell med horisontal scroll viser hele borderen ([6c5cb02](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/6c5cb0208967986902a5c62a3e3171d4b1f50e36))

### [1.0.1](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/branchCompare?baseVersion=GTv1.0.0-beta106&targetVersion=GTv1.0.1) (2022-08-12)


### ⚠ BREAKING CHANGES

* id fjernet som prop fra Icon. Fant ingen vertikaler som bruker dette utenom ROX sine.
* Icon som mottar ariaLabel vil nå ikke lenger være aria-hidden og fungere som et bilde med alternativ tekst
* debounce-util returnerer array med debounced funksjon og teardown-funksjon
* Slett ubrukt useWindowSize-hook

### Features

*  anchorlink, linklist, panel og tile har onClick-handler og kan vises som button ([59d5561](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/59d556123f8667beb3518de7db28ce7dee88e360)), closes [#280408](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/280408)
*  button onclick signatur ekspanderes og loader props export ([3e2bbf8](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/3e2bbf843ddaa7548585e9759d0b526f2763ddd0)), closes [#264156](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/264156)
*  dropdown-komponent ([58bc64c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/58bc64c28ce1080ff39c51acf46477ad7440e821)), closes [#260923](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/260923)
*  eksporter uuid-util fra designsystem-react ([16da649](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/16da649b6add4653bf0c3998fb1e24563147947d)), closes [#231720](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/231720)
*  expander støtter onExpand-callback ([39e6260](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/39e626085886e4c7ab55a913aef38394d2e92d2a)), closes [#271323](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/271323)
*  expanderlist støtter å ekspandere expandere med expanded-prop ([ab5581f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/ab5581ff3624df478f8979793a347d3954d2e3fe)), closes [#278686](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/278686)
*  flyttet tooltip til designsystemet og lagt til tester og bedre onclick... ([6f571ba](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/6f571ba041046bde2dfe0f73a7af2c7d559b0e11)), closes [#278062](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/278062)
*  formgroup kan vises med div- eller fieldset-tag ([170a60f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/170a60f1246c91cb2acc2fa05efe3e310021d8a5)), closes [#278133](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/278133)
*  HelpBubble ferdigstilling ([6c8195b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/6c8195bb12e15ec9870328ec80f139d2f0e911a5))
*  helpbubble komponent logikk for plassering ([560860e](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/560860ee4921b51346a2c18a57b608c3c6acfd71))
*  highlightbox støtter ikon ([5e51057](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5e51057cc01224944471895f95ce8a52cd03ff52)), closes [#270177](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270177)
*  hvit bakgrunn ([521e8d3](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/521e8d34e7de00b9cebc4b5085f5bcfd8d9e3a26)), closes [#279875](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279875)
*  input og textarea kan ha begrenset bredde ([d4ece0a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d4ece0ab8d7ea5ba52782cc1c9aaca79c229cf9f)), closes [#279138](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279138)
*  NoAccess ikon og StatusDot variant ([0291c2c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/0291c2c0fbc304f3b94026c3c76d2c38ab4a3c12)), closes [#277207](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/277207)
*  ny hook useEventListenerState og opprydning i HelpBubble ([2a7d9dd](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/2a7d9dda6f3a896d5f7fc1e29af5d7dca0d17653))
*  nytt komponent FormLayout ([d02f5e9](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d02f5e90979554dbd0b59a1a80167ccbd3d58ce2)), closes [#273348](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/273348) [#274864](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/274864)
*  nytt komponent helpbubble ([c1f5cae](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/c1f5caed051591ab7036fd18774e825e9b82fe9d))
*  nytt komponent HelpBubble ([b1f3b6c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b1f3b6c1015cc613461e95b371f138710ee88efc))
*  opprettet Table komponent [#260922](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/260922) ([b17024e](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b17024e7ba8c60705bf77c4d61e0cc39d1bce1fe))
*  panel har props for expanded og onExpand-callback ([83477b3](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/83477b3584f14083d3231a5e20d7896124d55a2a)), closes [#280971](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/280971)
*  panel kan styre overskriftsnivå på tittelen med titleHtmlMarkup-prop ([5b149d8](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5b149d8771637d12ad45097a29deabc299d3d27e)), closes [#279854](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279854)
*  PanelList-komponent ([4ea5342](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/4ea5342cd81c73b92ac6c63d6a8bd044c73f3cfc)), closes [#260910](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/260910)
*  tabell støtter horisontal scroll ([d00b9ad](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d00b9ad2b414e1fde836fa91e66368b891c0cc25)), closes [#280449](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/280449)
*  tag og taglist-komponenter ([56fc96b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/56fc96b5148340d9c24f6cc33d3b1ca9460dc3fd)), closes [#268234](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/268234)
*  usesize-hook fungerer uten ResizeObserver igjen ([15ce9d2](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/15ce9d2f9afbc85ee340d370cedc680bbecd9edb)), closes [#272523](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272523)
*  withBreakpoint Higher Order Component ([8e3f8e0](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/8e3f8e03996022ea9a2a23956cd1adb8fd253e7f)), closes [#269740](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/269740)


### Bug Fixes

*  button har type=button som default ([f9ac84a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/f9ac84a58c2d0da8bc5e8bbbbeb6269dadf498bc)), closes [#273800](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/273800)
*  close, expander og expanderlist skal ha type button på button-element ([3256c2c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/3256c2c6ea53fb79b31e0c38ce708e41b9c30eed)), closes [#277772](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/277772)
*  disabled button med intent har grå bakgrunn ([082ad11](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/082ad117cdff31c895e9acbcf15d6507655630e5)), closes [#276164](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276164)
*  disabled button skal ha grå tekst ([9de7c53](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/9de7c5398b14152376f100516cc15d09b49fae7a))
*  Eksport av mocks gjøres igjen ([4d11252](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/4d1125240a6eb9907913878ceee09f3045b2ccd5)), closes [#271917](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/271917)
*  endrer initialRender til å bli satt via showBubble prop istedet for på oppstart at komponentet ([09faaf9](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/09faaf98136ea8ac09cedfd5a57347d23236b727))
*  erstatt ResizeObserver med event listener ([df21fb1](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/df21fb1c32f0b6681bad82fe8fe8a5b9cafd81cf)), closes [#272521](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272521) [#272560](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272560)
*  expanderlist med JSX som title kan ha full bredde ([9723dfd](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/9723dfdd039ea8f9cc3088b8967ea86cc6ffb8c1)), closes [#279863](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279863)
*  expanderlist skal ikke lukke seg automatisk når innholdet endrer seg ([29f448b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/29f448bcf3d69bada9513ad7842f8ebbfe41e9df)), closes [#279367](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279367)
*  fallback til gammel addListener for mediaqueries dersom addEventListener ikke er støttet ([d86ae85](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d86ae854a4b4f892d49d3989cf8c0117e78e5690)), closes [#272502](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272502)
*  fiks for helpbubble i modal ([0a38ec2](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/0a38ec2651c3cfa53003785ef701754243d35813))
*  fjernet dobbel className ([5504a58](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5504a5838ae09e5e032802380ccb38d6bbe05952)), closes [#276205](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276205)
*  forbedring av props og design av Dropdown ([7483a5a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/7483a5a842ad8cf6f6f5c42b7aa0cebd536e7813)), closes [#276177](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276177)
*  grid.scss inneholder bare grid-mixins for å redusere størrelsen ved import ([e8c8cfb](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/e8c8cfb640dd29a4a7694fa9f4f458da41efdd61)), closes [#281219](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/281219)
*  highlightbox medium og large skal ha riktig bredde som følger gridet ([4a5f194](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/4a5f194fbcca1100a1df92337c7ddda186b111c7)), closes [#276398](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276398)
*  Icon støtte for controller prop og ([87dce6b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/87dce6b763cba1ff13910f8f4ac6afe896b079fa))
*  Icon-komponent har bedre støtte for skjermlesere ([14a616d](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/14a616d5ed0257f7a8ec797ff1d216e1755ec0a9)), closes [#273686](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/273686)
*  import fiks i styling ([79d8841](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/79d88417fa7c64e5449a972d5b47bfb3d5224e66)), closes [#275317](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/275317)
*  knapper i expanderlist har unik id per expanderlist ([de912e6](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/de912e6525f70631267f1689c681c2f049ba3e06)), closes [#276239](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276239)
*  large button som vises som lenke har innhold sentrert vertikalt ([ff35db2](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/ff35db2063e6e5bc812cf5b90e09001d6e92fd13))
*  lukkeknappen i NotificationPanel skal ligge først i DOMen ([55943ac](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/55943acc9189eb3acd53bb79225b99379d450161)), closes [#229047](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/229047)
*  modal uten knapper skal ikke ha tomt felt nederst ([55773ed](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/55773ed95663ff61e15c1ef8b1640d6a9f88a46d)), closes [#275139](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/275139)
*  padding i panel ([d9e5d7d](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d9e5d7d458c2cfd4d0d32b941bf1be4efd08ca66)), closes [#272363](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272363) [#272405](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272405)
*  returner riktig ikon ved custom ikonstørrelse ([b699d4f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b699d4f567b2c0df53a4014d36d4f2889d015686)), closes [#272203](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/272203)
*  riktig avstand mellom tittel i formgroup og andre elementer når det er en valideringsfeil ([226450c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/226450ca11fa234e77a6c87e85c4170cc2066aeb)), closes [#279407](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/279407)
*  riktig font når tag er button ([07d3f9f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/07d3f9f218c83e8d02705c914b523bb50547a3f8)), closes [#276826](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276826)
*  sonarcube fiks ([006d392](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/006d392c1c2f22b97ccc982201ff4a21a976b433))
*  storybook fiks logo ([10f3913](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/10f39131f44796f686eaadba26965cc59c620bb1)), closes [#275098](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/275098)
*  tekst over flere linjer i expander skal være venstrestilt ([71d0d8f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/71d0d8f190adc764e5d4e9df793f8524c130caad)), closes [#276346](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/276346)
*  tilbakemeldinger fikset ([876146c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/876146ced2ada280121e71ed9c44069eec3a3876))
*  tile skal arve bredde fra elementet over ([3cb7306](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/3cb73061053c11a6ee336291c4d6cc16b5d56cbb)), closes [#280022](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/280022)
*  tydeligere markering av fokus i Slider ([275171b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/275171bd8e14fb997c6cf2a04958ffdc13569bf8)), closes [#277564](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/277564)
*  useLayoutEvent kansellerer callback ved unmount ([d522341](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d522341045302111f0ad9ddc541de234882936db))
* **modal:**  sjekker om den er skrollbar ([23abf84](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/23abf841c3d8b4cc745acd0dff3abc0e3f11cb40))
* **scss:** Fjernet font størrelse ([3dfe927](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/3dfe9278a8c76686dae1d7bb5e8ce461fb3477a7))
* **table:**  endrer navn på prop ([2502262](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/2502262ba057575fae5e56e070d30ebd45a88549))


### Code Refactoring

*  bruk useBreakpoint i dokumentasjon ([5fec888](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5fec888ead64c1ce900c6976ea371c6ac49a8414))

## [1.0.0-beta106](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/branchCompare?baseVersion=GT4bd33fb35fc7ff5e0e81a01e34981fa4199d949d&targetVersion=GTv1.0.0-beta106) (2022-02-14)


### Features

*  alle komponenter har testId-prop ([3990042](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/39900420f2df7e0451b311b3bbba9425eb7d8c4d)), closes [#266560](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266560)
*  checkbox component lagt til ([2506151](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/2506151b2e09953372de187c1707e415e853f153))
*  checkbox stories lagt til ([0d519f5](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/0d519f51fd05da5b28c8f58208cc5c3e5388789a))
*  expander i expanderlist skal ha egen analyticsid ([abae3fe](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/abae3fe20b33e202c716cb21ecd412ebb0aad62f))
*  expander-komponent ([cfe7498](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/cfe74989614ac6a8e4ba9e9a442c498b9d2f3208)), closes [#260909](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/260909) [#267629](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/267629)
*  highlightbox-komponent ([2f3ff49](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/2f3ff491f6411e323a18e65a6062e5f70e56476f)), closes [#260906](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/260906)
*  ikon har mulighet for title-tag ([796c52a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/796c52a3043588db27a8cc8f6d97a409e58ae9c8)), closes [#225762](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/225762) [#227165](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/227165)
*  lagt til id til button ([f9d5ef5](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/f9d5ef5fc1fd9d9a9abecd618d6b377c3f87892a))
*  mobilvariant og small-variant av LinkList og ExpanderList ([c538cb8](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/c538cb84e3570368b38f26ef0fbbb7a599ce50b2)), closes [#264714](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/264714)
*  Modal har støtte for custom icon så lenge man ikke bruker en variant som har hardkodet ikon (error, warning) ([b487594](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b4875941347e2562b2a80baf5d289ecaffc536fc)), closes [#261864](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/261864)
*  modal har støtte for komponent etter title + success-variant ([f77ccf5](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/f77ccf5ec9b2fb755dbae697d0d6112b070a6fe2)), closes [#267692](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/267692) [#267722](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/267722)
*  modal-komponent har zIndex prop ([a7bb551](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/a7bb551c943eb4b4d08998a54470d559b6e6b2aa)), closes [#268729](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/268729)
*  ny prop disableCloseEvents ([b87de20](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b87de20b03c09e7d37a4911c5de31f6624f2886c)), closes [#269581](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/269581)
*  nye ikoner ([c07294c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/c07294c06ca125a7abbc33b8b1a87d38c222fa6e)), closes [#261843](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/261843)
*  Nye ikoner til designsystem ([acf661a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/acf661a5623c5e248c4aa5b081c121d265976401)), closes [#266695](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266695)
* **modal:**  lukkeknapp kan skjules ([e6ee14f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/e6ee14f2317c99d910edb9ea93db56d69e20996a)), closes [#262186](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/262186)
* **web:**  lagt til eksempelsider og tester ([9161006](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/91610066ab04a6b8541f85c89f76a4eb66f19fc5))


### Bug Fixes

*  align border med ikon i Expander ([82b22a6](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/82b22a6ca0ae181650e8db90a20f27bde6d7d9fc)), closes [#269714](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/269714)
*  bruk require for import av uuid for å unngå ekstra dependencies ([1989270](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/198927054a2d3a9f754d1de46fecd8e7aa4bb894)), closes [#266566](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266566)
*  button aria props ([94834e0](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/94834e01d2ae736fd7a44f907ed97f9e18d50dcf)), closes [#262859](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/262859)
*  button uten annet innhold enn ikon har ingen tom span med ekstra margin ([5d9f52b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5d9f52b14229dc1735dd2a1db18e04e363ecf8f8)), closes [#266803](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266803)
*  checkbox tar i bruk vår egen uuid hjelpefunksjon ([240ae09](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/240ae09c92578edc0f6dbe7a0a9f9b39d948eebc))
*  checkbox tilbakemeldinger ([773a7df](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/773a7df43d858312f78d3cb549437065f484d2ff))
*  checkbox tilbakemeldinger ([88f2ee7](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/88f2ee775f5eef9198b868f07a6c5a6083068337))
*  driftsmelding har aria-label på lukkeknapp ([424215a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/424215acae4084b3f8381aacbb2a36ab8023ad43))
*  expander med isOpen skal bare åpne den første, og skal kunne lukkes ([cba97c1](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/cba97c14d89d61dbadda563c34ed31b74e4756c8)), closes [#266037](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266037) [#266037](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266037)
*  expanderlist bruker css for å toggle innhold ([98adf1b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/98adf1bf1e28ce0dcddc7fdc53892598b0f5ba87)), closes [#270679](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270679)
*  expanderlist/linklist skal kun ha understreking av tekst v/fokus ([c27b11b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/c27b11b1d24e86e11cc76f03f7c9e6062fb76dec)), closes [#266096](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266096)
*  flytt import av helsenorge-styles for at gatsby develop og gatsby build... ([8fa62ec](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/8fa62eccd22591926c7b776ce49d338f11bf37a6)), closes [#270181](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270181)
*  ikke Arial på button i expanderlist ([5354754](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/53547549d26a90884cab2f189181821db123c0ba))
*  justert padding i notificationpanel ([3b8cce7](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/3b8cce777ffaa5735bd887e748cace9770e6cc50)), closes [#270330](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270330)
*  komponenter som bruker uuid() kan overstyres med prop ([2a7ad4c](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/2a7ad4c43b3159dbd144f91d2a77bd22667a1985)), closes [#269814](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/269814)
*  linklist har minimumshøyde på 4rem uansett ([59b1589](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/59b1589ab00ce57d0a17ed01e02be8726b26c68d)), closes [#266617](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/266617)
*  lukkeknapp i notificationpanel har samme stil på fokus som hover ([7909804](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/79098040d17f2641ab35c5bb4053e013c941ff9b))
*  modal uten knapper har samme padding i bunnen som ellers ([d4c46b7](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/d4c46b7b1c61ca082bb7ee93bde123e8f8e196c8)), closes [#270297](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270297)
*  oppdatert farge/font på avatar-komponent ([e44e457](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/e44e4574bc270c1e89057adcce6bc206094b8aad)), closes [#250831](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/250831) [#250831](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/250831)
*  returner breakpoint på samme måte både initially og ved oppdateringer ([82c4c3b](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/82c4c3bb7fa62ee6ab25babb357292326a5557f9)), closes [#269532](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/269532)
*  riktig font i input/textarea ([8f25b4f](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/8f25b4fd0094523ec0cabade4dba9390f803c328)), closes [#270181](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/270181)
*  rollup config for å kunne ta i bruk react hook form eksempler og endring på eksempel siden ([bb98612](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/bb98612e6cbcea30b12fdd03986ee9c1b989def6))
*  spacer calc fjernet ([c25db43](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/c25db4327968f4c5fb9316c6ebf34391611e0426))
*  teksten i NotificationPanelet tar hele plassen når den ikke kan lukkes ([5c1129d](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/5c1129d7eb9a49c69fc1485b80f893cbd4d406c7)), closes [#256356](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/256356)
*  Tile har riktig fontstørrelse/responsiv oppførsel ([fa2a620](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/fa2a620234c0cc148cc7112e4fbc4bf18fb2541b)), closes [#263621](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/263621)
* **button:**  fjernet tabindex ([fe547c9](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/fe547c9330fc1e5992e0bd95e7f33886ad05f2ff)), closes [#262802](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/262802)
* **designsystem:**  button a link href og target ([eac9ffd](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/eac9ffd3ef592a7b6b1e517c008715138ffd741d)), closes [#261849](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/261849)
* **designsystem:**  button styling og hover ([062f0fe](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/062f0feb0c3a21d68fae619b793e76985e8d10e9)), closes [#263384](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/263384)
* **designsystem:**  linklist list classname tatt i bruk, notificationpanel closebutton fiks ([4bd33fb](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/4bd33fb35fc7ff5e0e81a01e34981fa4199d949d))
* **designsystem:**  notificationpanel aria leser opp tekstinnhold i tillegg ([a4795ef](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/a4795ef6c09a021d8c39dd71900f529cc07caf7a)), closes [#249789](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/249789) [#261019](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/261019)
* **expanderlist:**  scroll til overskriften man klikker på i accordion-modus ([60a4f61](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/60a4f618f804c0127fb56d98f28c6af734f54fe4)), closes [#251341](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/issues/251341)
* **valdiation:**  Validation feedback endringer ([6efd616](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/6efd61647624aed721abc11467a667368d9860ec))
* **web:**  Styling av komponenter med SCSS modules funker igjen ([b40924a](https://dev.azure.com/nhnfelles/Helsenorge/_git/HN-Designsystem/commit/b40924ac9ac3657fbd6f21bd66ad84dd876ce79d))

