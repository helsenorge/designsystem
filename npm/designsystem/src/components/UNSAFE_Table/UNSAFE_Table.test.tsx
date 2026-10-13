import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { BreakpointConfig } from './UNSAFE_Table';

import { getCurrentConfig } from './utils';
import { Breakpoint } from '../../hooks/useBreakpoint';
import * as DeviceUtils from '../../utils/device';
import FilterSort from '../Filter/FilterSort';
import LinkList from '../LinkList';
import PopMenu from '../PopMenu';

import UNSAFE_Table, {
  SortDirection,
  TableColors,
  TableSizes,
  TextAlign,
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableHead,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
  useSort,
  useTableExpandedRows,
  type SortKey,
} from './';

interface Fastlege {
  navn: string;
  alder: number;
}

const data: Fastlege[] = [
  { navn: 'Line Danser', alder: 42 },
  { navn: 'Hans Nilsen', alder: 38 },
];

const SortableExample: React.FC = () => {
  const { sortedData, getSortProps, requestSort } = useSort({ data });

  return (
    <>
      <FilterSort value="" onChange={(e): void => requestSort(e.target.value as SortKey<Fastlege>)}>
        <option value="navn">{'Navn'}</option>
        <option value="alder">{'Alder'}</option>
      </FilterSort>
      <UNSAFE_Table caption="Fastleger i nærheten">
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell {...getSortProps('alder')}>{'Alder'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {sortedData.map(fastlege => (
            <UNSAFE_TableRow key={fastlege.navn}>
              <UNSAFE_TableCell>{fastlege.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{fastlege.alder}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    </>
  );
};

describe('Gitt at UNSAFE_Table skal vises', (): void => {
  test('Så brukes det nærmeste breakpointet uten å endre konfigurasjonslisten', (): void => {
    const config: BreakpointConfig[] = [
      { breakpoint: 'xl', variant: 'centeredoverflow' },
      { breakpoint: 'md', variant: 'horizontalscroll' },
      { breakpoint: 'sm', variant: 'stack' },
    ];
    const originalConfig = [...config];

    expect(getCurrentConfig(config, Breakpoint.md, 401, 400)?.variant).toBe('horizontalscroll');
    expect(getCurrentConfig(config, Breakpoint.sm, 401, 400)?.variant).toBe('stack');
    expect(getCurrentConfig(config, Breakpoint.lg, 401, 500)?.variant).toBe('centeredoverflow');
    expect(config).toEqual(originalConfig);
  });

  test('Så brukes fallback når tabellen er én piksel bredere enn vinduet', (): void => {
    const config: BreakpointConfig = { breakpoint: 'xl', variant: 'centeredoverflow', fallbackVariant: 'horizontalscroll' };

    expect(getCurrentConfig(config, Breakpoint.md, 400, 400)?.variant).toBe('centeredoverflow');
    expect(getCurrentConfig(config, Breakpoint.md, 401, 400)?.variant).toBe('horizontalscroll');
  });

  test('Så brukes fallback for normal variant når tabellen ikke får plass', (): void => {
    const config: BreakpointConfig = { breakpoint: 'xl', variant: 'normal', fallbackVariant: 'stack' };

    expect(getCurrentConfig(config, Breakpoint.xl, 400, 400)?.variant).toBe('normal');
    expect(getCurrentConfig(config, Breakpoint.xl, 401, 400)?.variant).toBe('stack');
  });

  describe('Når tabellen rendres', (): void => {
    test('Så sentreres tabellen i innholdsbredden og oppdateres ved én piksel breddeendring', (): void => {
      const resizeCallbacks: ResizeObserverCallback[] = [];
      vi.stubGlobal(
        'ResizeObserver',
        class {
          constructor(callback: ResizeObserverCallback) {
            resizeCallbacks.push(callback);
          }
          observe(): void {}
          disconnect(): void {}
        }
      );
      let measuredTableWidth = 401;
      const rectSpy = vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
        return { width: this.tagName === 'TABLE' ? measuredTableWidth : 400 } as DOMRect;
      });

      try {
        render(
          <div style={{ padding: '0 16px', border: '1px solid' }}>
            <UNSAFE_Table caption="Bred tabell" breakpointConfig={{ breakpoint: 'xl', variant: 'centeredoverflow' }}>
              <UNSAFE_TableBody>
                <UNSAFE_TableRow>
                  <UNSAFE_TableCell>{'Innhold'}</UNSAFE_TableCell>
                </UNSAFE_TableRow>
              </UNSAFE_TableBody>
            </UNSAFE_Table>
          </div>
        );
        const table = screen.getByRole('table', { name: 'Bred tabell' });
        expect(table).toHaveStyle({ left: '-17.5px' });

        measuredTableWidth = 402;
        act(() => resizeCallbacks.forEach(callback => callback([], {} as ResizeObserver)));
        expect(table).toHaveStyle({ left: '-18px' });
      } finally {
        rectSpy.mockRestore();
        vi.unstubAllGlobals();
      }
    });

    test('Så vises en tabell med caption', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" testId="tabell">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      const table = screen.getByRole('table', { name: 'Fastleger i nærheten' });
      expect(table).toBeVisible();
    });

    test('Så settes kolonnebredden når width er angitt på UNSAFE_TableHeadCell', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten">
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell width="10rem">{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell width={120}>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{38}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{'Legekontoret'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByRole('columnheader', { name: 'Navn' })).toHaveStyle({ width: '10rem' });
      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveStyle({ width: '120px' });
      expect(screen.getByRole('columnheader', { name: 'Fastlegekontor' })).not.toHaveAttribute('style');
    });

    test('Så settes bredden på ledetekstkolonnen i stack-visning når stackHeadWidth er angitt', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" stackHeadWidth={50} testId="tabell">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Åse Berg'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByTestId('tabell').style.getPropertyValue('--table-stack-columns')).toBe('50% minmax(0, 1fr)');
    });

    test('Så vises zebra-striper på annenhver rad når det er aktivert', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" zebraStripes>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Rad 1'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Rad 2'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      const rows = screen.getAllByRole('row');
      expect(screen.getByRole('rowgroup')).toHaveClass('table-body--zebra');
      expect(rows[0]).toHaveClass('table__row');
      expect(rows[1]).toHaveClass('table__row');
    });
  });

  describe('Når tabellen brukes sammen med useSort', (): void => {
    test('Så reagerer ikke kolonneoverskriften på klikk', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.click(screen.getByRole('columnheader', { name: 'Navn' }));

      const rows = screen.getAllByRole('row');
      // Rekkefølgen er uendret siden klikk på header ikke lenger sorterer
      expect(rows[1]).toHaveTextContent('Line Danser');
      expect(rows[2]).toHaveTextContent('Hans Nilsen');
    });

    test('Så sorteres radene og vises sorteringsretning når man velger i FilterSort', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.selectOptions(screen.getByRole('combobox'), 'alder');

      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Hans Nilsen');
      expect(rows[2]).toHaveTextContent('Line Danser');
      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveAttribute('aria-sort', 'ascending');
    });
  });

  describe('Når en rad har en PopMenu med labelText', (): void => {
    const renderWithPopMenu = (breakpointConfig: BreakpointConfig): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" breakpointConfig={breakpointConfig}>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow
              popMenu={
                <PopMenu labelText="Flere valg">
                  <LinkList>
                    <LinkList.Link href="#">{'Endre'}</LinkList.Link>
                  </LinkList>
                </PopMenu>
              }
            >
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
    };

    test('Så vises ledeteksten når tabellen bruker stack-varianten', (): void => {
      renderWithPopMenu({ breakpoint: 'xl', variant: 'stack' });

      const button = screen.getByRole('button', { name: 'Flere valg' });
      expect(button.querySelector('.button--only-icon')).toBeNull();
    });

    test('Så skjules ledeteksten visuelt, men beholdes som tilgjengelig navn når tabellen ikke bruker stack-varianten', (): void => {
      renderWithPopMenu({ breakpoint: 'xl', variant: 'centeredoverflow' });

      const button = screen.getByRole('button', { name: 'Flere valg' });
      // .button--only-icon skjuler teksten visuelt med sr-only
      expect(button.querySelector('.button--only-icon')).not.toBeNull();
    });
  });

  describe('Når kolonner skal skjules bak expander i stack-visning', (): void => {
    const renderWithHiddenColumns = (expandedContent?: React.ReactNode): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" breakpointConfig={{ breakpoint: 'xl', variant: 'stack' }}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell hideBehindExpander>{'Alder'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow expandedContent={expandedContent}>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell testId="alder-celle">{38}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
    };

    test('Så markeres cellene i kolonnen med hideBehindExpander slik at den kun vises når raden er utvidet', (): void => {
      renderWithHiddenColumns();

      expect(screen.getByTestId('alder-celle')).toHaveClass('table__cell--behind-expander');
    });

    test('Så vises innholdet i en vanlig utvidbar rad', (): void => {
      renderWithHiddenColumns();

      const expandedRow = document.querySelector('.table__expanded-row');
      expect(expandedRow).toHaveClass('table__expanded-row--stack-only');
      expect(expandedRow).toHaveTextContent('Alder');
      expect(expandedRow).toHaveTextContent('38');
      expect(expandedRow).toHaveTextContent('Skjul detaljer');
    });

    test('Så vises skjulte kolonner og expandedContent i samme automatiske rad, i alle varianter', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger" breakpointConfig={{ breakpoint: 'xl', variant: 'normal' }}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell />
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell hideBehindExpander>{'Alder'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow expandedContent={<p>{'Ekstra innhold'}</p>}>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{38}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      const expandedRow = document.querySelector('.table__expanded-row');
      expect(expandedRow).not.toHaveClass('table__expanded-row--stack-only');
      expect(expandedRow).toHaveTextContent('Alder');
      expect(expandedRow).toHaveTextContent('38');
      expect(expandedRow).toHaveTextContent('Ekstra innhold');
      expect(screen.getAllByRole('button', { name: 'Vis detaljer' })).toHaveLength(2);
    });

    test('Så rendres kun stack-expanderen som standard når en kolonne har hideBehindExpander', (): void => {
      renderWithHiddenColumns();

      const buttons = screen.getAllByRole('button', { name: 'Vis detaljer' });
      // Kun mobil/stack-expander, ingen egen expander-kolonne for store skjermer
      expect(buttons).toHaveLength(1);
      expect(buttons[0].closest('td')).toHaveClass('table__expander-cell-mobile');
    });

    test('Så ser ikke raden utvidet ut utenfor stack-varianten når den kun har skjulte kolonner', (): void => {
      const renderRow = (variant: 'stack' | 'normal'): HTMLElement => {
        const { container } = render(
          <UNSAFE_Table caption="Fastleger" breakpointConfig={{ breakpoint: 'xl', variant }}>
            <UNSAFE_TableHead>
              <UNSAFE_TableRow>
                <UNSAFE_TableHeadCell hideBehindExpander>{'Navn'}</UNSAFE_TableHeadCell>
              </UNSAFE_TableRow>
            </UNSAFE_TableHead>
            <UNSAFE_TableBody>
              <UNSAFE_TableRow expanded>
                <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            </UNSAFE_TableBody>
          </UNSAFE_Table>
        );
        return container.querySelector('tbody .table__row') as HTMLElement;
      };

      expect(renderRow('stack')).toHaveClass('table__row--expanded');
      expect(renderRow('normal')).not.toHaveClass('table__row--expanded');
    });

    test('Så rendres begge expandere når raden har expandedContent', (): void => {
      renderWithHiddenColumns('Innhold');

      expect(screen.getAllByRole('button', { name: 'Vis detaljer' })).toHaveLength(2);
    });
  });

  describe('Når responsiv variant velges', (): void => {
    const renderTable = (
      breakpointConfig: BreakpointConfig | BreakpointConfig[],
      wrapper?: (table: React.ReactElement) => React.ReactElement
    ): void => {
      const table = (
        <UNSAFE_Table caption="Fastleger" breakpointConfig={breakpointConfig} testId="tabell">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
      render(wrapper ? wrapper(table) : table);
    };

    afterEach(() => {
      vi.restoreAllMocks();
    });

    test('Så får tabellen stack-klasse for stack-varianten', (): void => {
      renderTable({ breakpoint: 'xl', variant: 'stack' });

      expect(screen.getByTestId('tabell')).toHaveClass('table--stack-xl');
    });

    test('Så får tabellen centeredoverflow-klasse for centeredoverflow-varianten', (): void => {
      renderTable({ breakpoint: 'xl', variant: 'centeredoverflow' });

      expect(screen.getByTestId('tabell')).toHaveClass('table--centeredoverflow-xl');
    });

    test('Så har normal variant ingen responsiv klasse', (): void => {
      renderTable({ breakpoint: 'xl', variant: 'normal' });

      expect(screen.getByTestId('tabell').className).toBe('table');
    });

    test('Så vises tabellen i en navngitt scroll-region på berøringsskjermer', (): void => {
      vi.spyOn(DeviceUtils, 'isTouchDevice').mockReturnValue(true);
      renderTable({ breakpoint: 'xl', variant: 'horizontalscroll' });

      expect(screen.getByTestId('horizontal-scroll')).toBeInTheDocument();
      expect(screen.getByRole('region', { name: 'Fastleger' })).toBeVisible();
    });

    test('Så brukes fallback i stedet for horisontal scroll når enheten ikke har berøring', (): void => {
      vi.spyOn(DeviceUtils, 'isTouchDevice').mockReturnValue(false);
      renderTable({ breakpoint: 'xl', variant: 'horizontalscroll', fallbackVariant: 'stack' });

      expect(screen.queryByTestId('horizontal-scroll')).not.toBeInTheDocument();
      expect(screen.getByTestId('tabell')).toHaveClass('table--stack-xl');
    });

    test('Så brukes konfigurasjonen for nærmeste breakpoint i en liste', (): void => {
      renderTable([
        { breakpoint: 'xl', variant: 'normal' },
        { breakpoint: 'xxs', variant: 'stack' },
      ]);

      // jsdom har ikke et smalt vindu, så xl-konfigurasjonen gjelder
      expect(screen.getByTestId('tabell').className).not.toContain('table--stack');
    });

    describe('Når tabellen ligger i en overordnet komponent med data-overflow-boundary', (): void => {
      const mockWidths = (tableWidth: number, boundaryWidth: number): void => {
        vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
          if (this.tagName === 'TABLE') {
            return { width: tableWidth } as DOMRect;
          }
          return { width: this.hasAttribute('data-overflow-boundary') ? boundaryWidth : 1024 } as DOMRect;
        });
      };
      const config: BreakpointConfig = { breakpoint: 'xl', variant: 'centeredoverflow', fallbackVariant: 'stack' };

      test('Så brukes fallback når tabellen er bredere enn den overordnede komponenten', (): void => {
        mockWidths(500, 300);
        renderTable(config, table => <div data-overflow-boundary>{table}</div>);

        expect(screen.getByTestId('tabell')).toHaveClass('table--stack-xl');
      });

      test('Så beholdes varianten når tabellen får plass i den overordnede komponenten', (): void => {
        mockWidths(500, 600);
        renderTable(config, table => <div data-overflow-boundary>{table}</div>);

        expect(screen.getByTestId('tabell')).toHaveClass('table--centeredoverflow-xl');
      });

      test('Så brukes skjermbredden når ingen overordnet komponent er markert', (): void => {
        mockWidths(500, 300);
        renderTable(config);

        expect(screen.getByTestId('tabell')).toHaveClass('table--centeredoverflow-xl');
      });
    });
  });

  describe('Når tabellen har utseendevalg', (): void => {
    const renderStyled = (props: Partial<React.ComponentProps<typeof UNSAFE_Table>>): void => {
      render(
        <UNSAFE_Table caption="Fastleger" {...props}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell testId="celle">{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
    };

    test('Så brukes compact-klasser på hodet og cellene', (): void => {
      renderStyled({ size: TableSizes.compact });

      expect(screen.getByRole('columnheader', { name: 'Navn' })).toHaveClass('table__head-cell--compact');
      expect(screen.getByTestId('celle')).toHaveClass('table__cell--compact');
    });

    test('Så brukes transparent-klasser på hodet, raden og cellene', (): void => {
      renderStyled({ color: TableColors.transparent });

      expect(screen.getByRole('columnheader', { name: 'Navn' })).toHaveClass('table__head-cell--transparent');
      expect(screen.getAllByRole('row')[1]).toHaveClass('table__row--transparent');
      expect(screen.getByTestId('celle')).toHaveClass('table__cell--transparent');
    });

    test('Så settes className, id og øvrige attributter på table-elementet', (): void => {
      renderStyled({ className: 'egen-klasse', id: 'min-tabell', 'aria-describedby': 'beskrivelse' });

      const table = screen.getByRole('table', { name: 'Fastleger' });
      expect(table).toHaveClass('table', 'egen-klasse');
      expect(table).toHaveAttribute('id', 'min-tabell');
      expect(table).toHaveAttribute('aria-describedby', 'beskrivelse');
    });

    test('Så kan zebra-striper overstyres på UNSAFE_TableBody', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger" zebraStripes>
          <UNSAFE_TableBody zebraStripes={false}>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Rad 1'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByRole('rowgroup')).not.toHaveClass('table-body--zebra');
    });
  });

  describe('Når UNSAFE_TableCell har valg', (): void => {
    test('Så hentes overskriften fra kolonnen i hodet og vises i stack-visning', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger">
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{''}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell testId="celle">{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell testId="uten-overskrift">{'Handling'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      const cell = screen.getByTestId('celle');
      expect(cell).toHaveClass('table__cell--stacked');
      expect(cell).toHaveTextContent('Navn');
      expect(cell).toHaveTextContent('Hans Nilsen');
      expect(screen.getByTestId('uten-overskrift')).not.toHaveClass('table__cell--stacked');
    });

    test('Så brukes klasser for tekstjustering og nowrap', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell testId="venstre">{'A'}</UNSAFE_TableCell>
              <UNSAFE_TableCell testId="midt" textAlign={TextAlign.center}>
                {'B'}
              </UNSAFE_TableCell>
              <UNSAFE_TableCell testId="hoyre" textAlign={TextAlign.right} nowrap>
                {'C'}
              </UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByTestId('venstre')).not.toHaveClass('table__cell--center', 'table__cell--right', 'table__cell--nowrap');
      expect(screen.getByTestId('midt')).toHaveClass('table__cell--center');
      expect(screen.getByTestId('hoyre')).toHaveClass('table__cell--right', 'table__cell--nowrap');
    });
  });

  describe('Når UNSAFE_TableHeadCell har valg', (): void => {
    test('Så settes aria-sort ut fra sortDir', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger">
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell sortDir={SortDirection.asc}>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell sortDir={SortDirection.desc}>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Kontor'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{38}</UNSAFE_TableCell>
              <UNSAFE_TableCell>{'Legekontoret'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByRole('columnheader', { name: 'Navn' })).toHaveAttribute('aria-sort', 'ascending');
      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveAttribute('aria-sort', 'descending');
      expect(screen.getByRole('columnheader', { name: 'Kontor' })).not.toHaveAttribute('aria-sort');
    });

    test('Så har hodecellen scope col, og en tom hodecelle rendres som td', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger">
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell />
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
        </UNSAFE_Table>
      );

      expect(screen.getByRole('columnheader', { name: 'Navn' })).toHaveAttribute('scope', 'col');
      expect(screen.getAllByRole('columnheader')).toHaveLength(1);
      expect(screen.getAllByRole('cell')).toHaveLength(1);
    });
  });

  describe('Når rader kan utvides', (): void => {
    const ExpandableExample: React.FC = () => {
      const { isExpanded, toggleExpanded } = useTableExpandedRows();

      return (
        <UNSAFE_Table caption="Fastleger" breakpointConfig={{ breakpoint: 'xl', variant: 'normal' }}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell />
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {data.map(fastlege => (
              <UNSAFE_TableRow
                key={fastlege.navn}
                expanded={isExpanded(fastlege.navn)}
                expandableRowId={`detaljer-${fastlege.navn}`}
                onClick={(): void => toggleExpanded(fastlege.navn)}
                expandedContent={<div data-testid={`detalj-${fastlege.navn}`}>{'Adresse Storgata 1'}</div>}
              >
                <UNSAFE_TableCell>{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell>{fastlege.alder}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
    };

    test('Så er den ekspanderte raden skjult som standard', (): void => {
      render(<ExpandableExample />);

      const expandedRow = document.getElementById('detaljer-Line Danser');
      expect(expandedRow).not.toHaveClass('table__expanded-row--expanded');
      expect(screen.getAllByRole('button', { name: 'Vis detaljer' })[0]).toHaveAttribute('aria-expanded', 'false');
    });

    test('Så ekspanderes og lukkes raden fra expanderen, og aria-expanded oppdateres', async (): Promise<void> => {
      render(<ExpandableExample />);
      const expandedRow = document.getElementById('detaljer-Line Danser');

      await userEvent.click(screen.getAllByRole('button', { name: 'Vis detaljer' })[0]);

      expect(expandedRow).toHaveClass('table__expanded-row--expanded');
      expect(screen.getAllByRole('row')[1]).toHaveClass('table__row--expanded');
      expect(screen.getAllByRole('button', { name: 'Skjul detaljer' })[0]).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getAllByRole('button', { name: 'Skjul detaljer' })[0]).toHaveAttribute('aria-controls', 'detaljer-Line Danser');
      expect(screen.getByTestId('detalj-Line Danser')).toHaveTextContent('Adresse');
      expect(screen.getByTestId('detalj-Line Danser')).toHaveTextContent('Storgata 1');

      await userEvent.click(within(expandedRow as HTMLElement).getByRole('button', { name: 'Skjul detaljer' }));

      expect(expandedRow).not.toHaveClass('table__expanded-row--expanded');
    });

    test('Så utvides kun raden det klikkes på', async (): Promise<void> => {
      render(<ExpandableExample />);

      await userEvent.click(screen.getAllByRole('button', { name: 'Vis detaljer' })[0]);

      expect(document.getElementById('detaljer-Hans Nilsen')).not.toHaveClass('table__expanded-row--expanded');
    });

    test('Så spenner den ekspanderte cellen automatisk over alle kolonnene i raden over', (): void => {
      render(<ExpandableExample />);

      const cell = document.getElementById('detaljer-Line Danser')?.querySelector('td');
      // Expander-celle, to datakolonner og expander-celle for mobil
      expect(cell).toHaveAttribute('colspan', '4');
    });

    test('Så kalles onClick når knappen i den ekspanderte raden klikkes', async (): Promise<void> => {
      const onClick = vi.fn();
      render(
        <UNSAFE_Table caption="Fastleger">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow expanded onClick={onClick} expandedContent={'Innhold'}>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
      const expandedRow = document.querySelector('.table__expanded-row') as HTMLElement;

      await userEvent.click(within(expandedRow).getByRole('button', { name: 'Skjul detaljer' }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når expanderen i stack-visning brukes med hideBehindExpander', (): void => {
    test('Så åpnes og lukkes den automatiske ekspanderte raden med innhold fra de skjulte cellene', async (): Promise<void> => {
      const Example: React.FC = () => {
        const { isExpanded, toggleExpanded } = useTableExpandedRows();
        return (
          <UNSAFE_Table caption="Fastleger" breakpointConfig={{ breakpoint: 'xl', variant: 'stack' }}>
            <UNSAFE_TableHead>
              <UNSAFE_TableRow>
                <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
                <UNSAFE_TableHeadCell hideBehindExpander>{'Alder'}</UNSAFE_TableHeadCell>
              </UNSAFE_TableRow>
            </UNSAFE_TableHead>
            <UNSAFE_TableBody>
              <UNSAFE_TableRow expanded={isExpanded('rad')} onClick={(): void => toggleExpanded('rad')}>
                <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
                <UNSAFE_TableCell>{38}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            </UNSAFE_TableBody>
          </UNSAFE_Table>
        );
      };
      render(<Example />);
      const expandedRow = document.querySelector('.table__expanded-row');
      expect(expandedRow).not.toHaveClass('table__expanded-row--expanded');

      await userEvent.click(screen.getByRole('button', { name: 'Vis detaljer' }));

      expect(expandedRow).toHaveClass('table__expanded-row--expanded');
      expect(screen.getAllByRole('row')[1]).toHaveClass('table__row--expanded');

      await userEvent.click(screen.getAllByRole('button', { name: 'Skjul detaljer' })[0]);

      expect(expandedRow).not.toHaveClass('table__expanded-row--expanded');
    });
  });
});
