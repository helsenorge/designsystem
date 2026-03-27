import { useState, type ReactNode } from 'react';

import { action } from 'storybook/actions';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Chip from '../Chip';
import EmptyState from '../EmptyState';
import FormGroup from '../FormGroup';
import Icon from '../Icon';
import Panel, { PanelVariant } from '../Panel';
import PanelList from '../PanelList';
import Tag from '../Tag';
import TagList from '../TagList';
import DrawerNavigation, { useDrawerNavigation } from './DrawerNavigation';
import FilterButton from './FilterButton/FilterButton';
import FilterLinkList from './FilterLinkList/FilterLinkList';
import FilterResultTopBar from './FilterResultTopBar/FilterResultTopBar';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSort from './FilterSort/FilterSort';
import { useFilter } from './FiltreringsPOC/useFilter';
import { createFilterConfig, filterItems, matchFilter, toggleArrayFilter, type FilterMatchers } from './FiltreringsPOC/utils';
import { getResources } from './resourcesMock';
import File from '../Icons/File';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterMerge',
  parameters: {
    docs: {
      description: {
        component: 'Filter POC - demonstrerer bruk av useFilter hook og UI komponenter',
      },
      story: { inline: false, iframeHeight: '40rem' },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    enum FagomradeType {
      PSYKISK_HELSE = 1,
      SYKDOM_OG_SKADER = 2,
      LIVSSTIL_OG_TRENING = 3,
      TANKER_OG_FOLELSER = 4,
      GRAVIDITET_OG_FODSEL = 5,
      RAAD_OG_TIPS_I_HVERDAGEN = 6,
    }

    enum MalgruppeType {
      Barn = 1,
      Ungdom = 2,
      Voksne = 3,
      Eldre = 4,
    }

    enum VerktoyType {
      App = 1,
      Weblosning = 2,
    }

    type VerktoyFilterType = {
      omrade: FagomradeType[];
      passerFor: MalgruppeType[];
      type: VerktoyType[];
      fritekst: string;
    };
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    interface Verktoy {
      navn: string;
      omrade: FagomradeType[];
      ingress?: string;
      passerFor: MalgruppeType[];
      type: VerktoyType;
      lenke?: string;
      lenkeTekst?: string;
      logoSrc?: string;
    }

    const verktoyMockData: Verktoy[] = [
      {
        navn: resources.verktoydata_aa_name,
        ingress: resources.verktoydata_aa_ingress,
        omrade: [FagomradeType.SYKDOM_OG_SKADER],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom, MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_grubl_name,
        ingress: resources.verktoydata_grubl_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING, FagomradeType.TANKER_OG_FOLELSER, FagomradeType.PSYKISK_HELSE],
        passerFor: [MalgruppeType.Ungdom, MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_mm_name,
        ingress: resources.verktoydata_mm_ingress,
        omrade: [FagomradeType.PSYKISK_HELSE, FagomradeType.GRAVIDITET_OG_FODSEL],
        passerFor: [MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_hverdagshjelpen_name,
        ingress: resources.verktoydata_hverdagshjelpen_ingress,
        omrade: [FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN, FagomradeType.LIVSSTIL_OG_TRENING],
        passerFor: [MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_ungmestring_name,
        ingress: resources.verktoydata_ungmestring_ingress,
        omrade: [FagomradeType.PSYKISK_HELSE, FagomradeType.TANKER_OG_FOLELSER],
        passerFor: [MalgruppeType.Ungdom],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_bevegelsesglede_name,
        ingress: resources.verktoydata_bevegelsesglede_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_tryggfodsel_name,
        ingress: resources.verktoydata_tryggfodsel_ingress,
        omrade: [FagomradeType.GRAVIDITET_OG_FODSEL, FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN],
        passerFor: [MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_skadekompasset_name,
        ingress: resources.verktoydata_skadekompasset_ingress,
        omrade: [FagomradeType.SYKDOM_OG_SKADER, FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom, MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_seniorbalanse_name,
        ingress: resources.verktoydata_seniorbalanse_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING, FagomradeType.SYKDOM_OG_SKADER],
        passerFor: [MalgruppeType.Eldre],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_tankevenn_name,
        ingress: resources.verktoydata_tankevenn_ingress,
        omrade: [FagomradeType.TANKER_OG_FOLELSER, FagomradeType.PSYKISK_HELSE],
        passerFor: [MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
    ];

    const omradeOptions = [
      { value: FagomradeType.PSYKISK_HELSE, label: resources.omradeOptions_psykiskhelse },
      { value: FagomradeType.GRAVIDITET_OG_FODSEL, label: resources.omradeOptions_graviditet },
      { value: FagomradeType.LIVSSTIL_OG_TRENING, label: resources.omradeOptions_livsstil },
      { value: FagomradeType.SYKDOM_OG_SKADER, label: resources.omradeOptions_sykdom },
      { value: FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN, label: resources.omradeOptions_rad },
      { value: FagomradeType.TANKER_OG_FOLELSER, label: resources.omradeOptions_tanker },
    ];

    const passerForOptions = [
      { value: MalgruppeType.Barn, text: resources.passerForOptions_barn },
      { value: MalgruppeType.Ungdom, text: resources.passerForOptions_ungdom },
      { value: MalgruppeType.Voksne, text: resources.passerForOptions_voksne },
      { value: MalgruppeType.Eldre, text: resources.passerForOptions_eldre },
    ];

    const typeOptions = [
      { value: VerktoyType.App, label: resources.typeOptions_app },
      { value: VerktoyType.Weblosning, label: resources.typeOptions_web },
    ];

    const { filterOptions, getLabel } = createFilterConfig<VerktoyFilterType>({
      omrade: { options: omradeOptions, defaultValue: [FagomradeType.PSYKISK_HELSE], getLabel: o => o.label },
      passerFor: { options: passerForOptions, getLabel: o => o.text },
      type: { options: typeOptions, getLabel: o => o.label },
    });

    const filter = useFilter<VerktoyFilterType>(filterOptions);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerInitialView, setDrawerInitialView] = useState<FilterViews | undefined>(undefined);

    const openDrawer = (view?: FilterViews): void => {
      setDrawerInitialView(view);
      setDrawerOpen(true);
    };

    const filterMatchers: FilterMatchers<Verktoy, VerktoyFilterType> = {
      omrade: matchFilter.arrayIncludes<Verktoy>(m => m.omrade),
      passerFor: matchFilter.arrayIncludes<Verktoy>(m => m.passerFor),
      type: matchFilter.exactMatch<Verktoy>(m => m.type),
      fritekst: matchFilter.textSearch<Verktoy>(
        v => v.navn,
        v => v.ingress
      ),
    };

    const filtered = filterItems(verktoyMockData, filter.filters, filterMatchers);

    const verktoyFilterLabels: Record<keyof VerktoyFilterType, string> = {
      omrade: resources.filterOptionTitles_omrade,
      passerFor: resources.filterOptionTitles_passerfor,
      type: resources.filterOptionTitles_type,
      fritekst: 'Fritekstsøk',
    };

    type FilterViews = 'overview' | 'omrade' | 'passerFor' | 'type';

    const FilterLinkListComp = (): ReactNode => {
      const { goToView } = useDrawerNavigation<FilterViews>();
      const omradeChips = (filter.filters.omrade ?? []).map(v => getLabel('omrade', v));
      const passerforChips = (filter.filters.passerFor ?? []).map(v => getLabel('passerFor', v));
      const typeChips = (filter.filters.type ?? []).map(v => getLabel('type', v));
      return (
        <FilterLinkList>
          <FilterLinkList.Link title={verktoyFilterLabels.omrade} chips={omradeChips} onClick={() => goToView('omrade')} />
          <FilterLinkList.Link title={verktoyFilterLabels.passerFor} chips={passerforChips} onClick={() => goToView('passerFor')} />
          <FilterLinkList.Link title={verktoyFilterLabels.type} chips={typeChips} onClick={() => goToView('type')} />
        </FilterLinkList>
      );
    };

    const footerButtons = (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => filter.resetFiltersToEmpty()} variant="borderless">
          {'Nullstill filter'}
        </Button>
        <Button onClick={() => setDrawerOpen(false)}>{`Vis ${filtered.length} treff`}</Button>
      </div>
    );

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>{'Bokmål'}</Button>
          <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>{'English'}</Button>
        </div>
        <div style={{ display: 'flex', flexFlow: 'row wrap', columnGap: '8px', alignItems: 'center' }}>
          <FilterButton onClick={() => openDrawer()} />

          {Object.entries(filter.filters).flatMap(([key, raw]) => {
            const values = [raw ?? []].flat();
            return values.map(v => (
              <Chip
                onChipClick={() => {
                  openDrawer(key as FilterViews);
                  console.log('key: ', key);
                }}
                key={`${key}-${v}`}
                onCloseClick={() => filter.removeFilter(key, v)}
              >
                {getLabel(key as keyof VerktoyFilterType, v)}
              </Chip>
            ));
          })}
        </div>
        <FilterResultTopBar
          countText={`${filtered.length} verktøy`}
          sortComponent={
            <FilterSort>
              <option value={'Option 1'}>{'Nyeste'}</option>
              <option value={'Option 2'}>{'Eldste'}</option>
              <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
            </FilterSort>
          }
        />

        <DrawerNavigation
          isOpen={drawerOpen}
          initialView={drawerInitialView}
          onCloseButton={() => setDrawerOpen(false)}
          footer={footerButtons}
        >
          <DrawerNavigation.View<FilterViews> id="overview" title={'Finn ...'} home>
            <div>
              <FilterLinkListComp />
              {/* <div style={{ padding: '1rem' }}>
                <FilterSearch
                  value={(filter.filters.fritekst as string) ?? ''}
                  onChange={e => filter.setFilter('fritekst', e.target.value || undefined)}
                />
              </div> */}
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterViews> id="omrade" title={verktoyFilterLabels.omrade}>
            <div>
              <FormGroup legend={resources.filterOption_omrade_legend}>
                {omradeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.label}
                    checked={(filter.filters.omrade ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterViews> id="passerFor" title={verktoyFilterLabels.passerFor}>
            <div>
              <FormGroup legend={resources.filterOption_passerFor_legend}>
                {passerForOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.text}
                    checked={(filter.filters.passerFor ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'passerFor', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterViews> id="type" title={verktoyFilterLabels.type}>
            <div>
              <FormGroup legend={resources.filterOption_type_legend}>
                {typeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.label}
                    checked={(filter.filters.type ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'type', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </DrawerNavigation.View>
        </DrawerNavigation>
        {filtered.length > 0 ? (
          <PanelList>
            {filtered.map(verktoy => (
              <Panel>
                <Panel.Title title={verktoy.navn} icon={<img src={verktoy.logoSrc} alt="logo" />} />
                <Panel.A>
                  <TagList>
                    {verktoy.omrade.map(o => (
                      <Tag key={o}>{getLabel('omrade', o)}</Tag>
                    ))}
                  </TagList>
                </Panel.A>
                <Panel.B>
                  <span>{verktoy.ingress}</span>
                </Panel.B>
              </Panel>
            ))}
          </PanelList>
        ) : (
          <EmptyState title={'Ingen verktøy som matcher filtrering funnet'} />
        )}
      </LanguageProvider>
    );
  },
};

export const FilterSortComponent: Story = {
  render: () => (
    <FilterSort>
      <option value={'Option 1'}>{'Nyeste'}</option>
      <option value={'Option 2'}>{'Eldste'}</option>
      <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
    </FilterSort>
  ),
};

export const FilterSearchComponent: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
      <FilterSearch
        value={searchValue}
        onChange={e => setSearchValue((e.target as HTMLInputElement).value)}
        inputProps={{
          name: 'search',
        }}
        buttonProps={{
          onClick: () => alert(`Søker etter: ${searchValue}`),
        }}
        clearButtonProps={{
          onClick: () => setSearchValue(''),
        }}
      />
    );
  },
};

export const FilterButtonComponent: Story = {
  render: () => {
    return <FilterButton onClick={() => action('Clicked')} />;
  },
};

export const DokumenterExample: Story = {
  render: () => {
    enum InnholdType {
      notat = 1,
      epikriseSammenfatning = 2,
      journalsammendrag = 3,
      brevOgKorrespondanse = 4,
      provesvar = 5,
      egenkartlegging = 6,
      ikkeIBruk2 = 7,
      innsynsrapport = 8,
      vaksinebevis = 9,
      enkeltvedtak = 10,
    }
    enum KontekstType {
      pasientjournal = 1,
      helseregistre = 2,
      skjemautfyller = 3,
      provesvar = 4,
      koronasertifikat = 5,
      fastlegetjenester = 6,
      ekstern = 7,
      henvendelse = 8,
      pasientreiser = 9,
      behandlingsplan = 10,
      gravid = 11,
    }

    type DokumenterFilterType = {
      innhold: InnholdType[];
      kommerFra: KontekstType[];
    };

    interface Dokument {
      navn: string;
      innholdstype: InnholdType[];
      beskrivelse?: string;
      kommerFra: KontekstType[];
    }

    const dokumentMockData: Dokument[] = [
      {
        navn: 'Allergi (Egenkartlegging)',
        beskrivelse: 'Skjemautfyller, arkivert 26.03.2026',
        innholdstype: [InnholdType.egenkartlegging],
        kommerFra: [KontekstType.skjemautfyller],
      },
    ];

    const innholdTypeOptions = [
      { value: InnholdType.notat, displaytext: 'Notat' },
      { value: InnholdType.epikriseSammenfatning, displaytext: 'Epikrise, sammenfatning' },
      { value: InnholdType.journalsammendrag, displaytext: 'Journalsammendrag' },
      { value: InnholdType.brevOgKorrespondanse, displaytext: 'Brev og korrespondanse' },
      { value: InnholdType.provesvar, displaytext: 'Prøvesvar' },
      { value: InnholdType.egenkartlegging, displaytext: 'Egenkartlegging' },
      { value: InnholdType.innsynsrapport, displaytext: 'Innsynsrapport' },
      { value: InnholdType.vaksinebevis, displaytext: 'Vaksinebevis' },
      { value: InnholdType.enkeltvedtak, displaytext: 'Enkeltvedtak' },
    ];

    const kommerFraOptions = [
      { value: KontekstType.pasientjournal, displaytext: 'Pasientjournal' },
      { value: KontekstType.helseregistre, displaytext: 'Helseregistre' },
      { value: KontekstType.skjemautfyller, displaytext: 'Skjemautfyller' },
      { value: KontekstType.provesvar, displaytext: 'Prøvesvar' },
      { value: KontekstType.koronasertifikat, displaytext: 'Koronasertifikat' },
      { value: KontekstType.fastlegetjenester, displaytext: 'Fastlegetjenester' },
      { value: KontekstType.ekstern, displaytext: 'Ekstern' },
      { value: KontekstType.henvendelse, displaytext: 'Henvendelse' },
      { value: KontekstType.pasientreiser, displaytext: 'Pasientreiser' },
      { value: KontekstType.behandlingsplan, displaytext: 'Behandlingsplan' },
      { value: KontekstType.gravid, displaytext: 'Gravid' },
    ];

    const { filterOptions, getLabel } = createFilterConfig<DokumenterFilterType>({
      innhold: { options: innholdTypeOptions, getLabel: o => o.displaytext },
      kommerFra: { options: kommerFraOptions, getLabel: o => o.displaytext },
    });

    const filter = useFilter<DokumenterFilterType>(filterOptions);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [drawerInitialView, setDrawerInitialView] = useState<DokumentFilterViews | undefined>(undefined);

    const openDrawer = (view?: DokumentFilterViews): void => {
      setDrawerInitialView(view);
      setDrawerOpen(true);
    };

    const filterMatchers: FilterMatchers<Dokument, DokumenterFilterType> = {
      innhold: matchFilter.arrayIncludes<Dokument>(m => m.innholdstype),
      kommerFra: matchFilter.arrayIncludes<Dokument>(m => m.kommerFra),
    };

    const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);

    const dokumentFilterLabels: Record<keyof DokumenterFilterType, string> = {
      innhold: 'Innholdstype',
      kommerFra: 'Kommer fra',
    };

    type DokumentFilterViews = 'overview' | 'innhold' | 'kommerFra';

    const FilterLinkListComp = (): ReactNode => {
      const { goToView } = useDrawerNavigation<DokumentFilterViews>();
      const innholdChips = (filter.filters.innhold ?? []).map(v => getLabel('innhold', v));
      const kommerFraChips = (filter.filters.kommerFra ?? []).map(v => getLabel('kommerFra', v));
      return (
        <FilterLinkList>
          <FilterLinkList.Link title={dokumentFilterLabels.innhold} chips={innholdChips} onClick={() => goToView('innhold')} />
          <FilterLinkList.Link title={dokumentFilterLabels.kommerFra} chips={kommerFraChips} onClick={() => goToView('kommerFra')} />
        </FilterLinkList>
      );
    };

    const footerButtons = (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={() => filter.resetFiltersToEmpty()} variant="borderless">
          {'Nullstill filter'}
        </Button>
        <Button onClick={() => setDrawerOpen(false)}>{`Vis ${filtered.length} treff`}</Button>
      </div>
    );

    return (
      <>
        <div style={{ display: 'flex', flexFlow: 'row wrap', columnGap: '8px', alignItems: 'center' }}>
          <FilterButton onClick={() => openDrawer()} />

          {Object.entries(filter.filters).flatMap(([key, raw]) => {
            const values = [raw ?? []].flat();
            return values.map(v => (
              <Chip
                onChipClick={() => {
                  openDrawer(key as DokumentFilterViews);
                  console.log('key: ', key);
                }}
                key={`${key}-${v}`}
                onCloseClick={() => filter.removeFilter(key, v)}
              >
                {getLabel(key as keyof DokumenterFilterType, v)}
              </Chip>
            ));
          })}
        </div>
        <FilterResultTopBar
          countText={`${filtered.length} verktøy`}
          sortComponent={
            <FilterSort>
              <option value={'Option 1'}>{'Eldste-Nyeste'}</option>
              <option value={'Option 2'}>{'Nyeste-Eldste'}</option>
              <option value={'Option 3'}>{'A-Å'}</option>
              <option value={'Option 4'}>{'Å-A'}</option>
            </FilterSort>
          }
        />

        <DrawerNavigation
          isOpen={drawerOpen}
          initialView={drawerInitialView}
          onCloseButton={() => setDrawerOpen(false)}
          footer={footerButtons}
        >
          <DrawerNavigation.View<DokumentFilterViews> id="overview" title={'Finn ...'} home>
            <div>
              <FilterLinkListComp />
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<DokumentFilterViews> id="innhold" title={dokumentFilterLabels.innhold}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {innholdTypeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.displaytext}
                    checked={(filter.filters.innhold ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'innhold', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<DokumentFilterViews> id="kommerFra" title={dokumentFilterLabels.kommerFra}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {kommerFraOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.displaytext}
                    checked={(filter.filters.kommerFra ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'kommerFra', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </DrawerNavigation.View>
        </DrawerNavigation>
        {filtered.length > 0 ? (
          <PanelList variant={PanelVariant.outline}>
            {filtered.map(dokument => (
              <Panel>
                <Panel.Title title={dokument.navn} icon={<Icon svgIcon={File} />} />
                <Panel.A>
                  <span>{dokument.beskrivelse}</span>
                </Panel.A>
                <Panel.B>
                  <TagList>
                    {dokument.innholdstype.map(o => (
                      <Tag key={o}>{getLabel('innhold', o)}</Tag>
                    ))}
                  </TagList>
                </Panel.B>
              </Panel>
            ))}
          </PanelList>
        ) : (
          <EmptyState title={'Ingen dokumenter ble funnet med valgt filter. Prøv å endre filteret for å se flere dokumenter.'} />
        )}
      </>
    );
  },
};
