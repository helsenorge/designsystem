import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { BreakpointConfig } from './UNSAFE_Table';

import FilterSort from '../Filter/FilterSort';
import LinkList from '../LinkList';
import PopMenu from '../PopMenu';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow, useSort } from './';

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
      <FilterSort value="" onChange={(e): void => requestSort(e.target.value)}>
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
              <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    </>
  );
};

describe('Gitt at UNSAFE_Table skal vises', (): void => {
  describe('Når tabellen rendres', (): void => {
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

    test('Så settes bredden på innholdskolonnen i stack-visning når descriptionWidth er angitt', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" descriptionWidth={50} testId="tabell">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell dataLabel="Navn">{'Åse Berg'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByTestId('tabell').style.getPropertyValue('--table-stack-description-width')).toBe('50');
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

      expect(screen.getByRole('rowgroup')).toHaveClass('table-body--zebra');
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
    const renderWithHiddenColumns = (expandable: boolean | 'stack'): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" breakpointConfig={{ breakpoint: 'xl', variant: 'stack' }}>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow expandable={expandable} showDetailsText="Vis detaljer" hideDetailsText="Skjul detaljer">
              <UNSAFE_TableCell dataLabel="Navn">{'Hans Nilsen'}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Alder" hideBehindExpander testId="alder-celle">
                {38}
              </UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );
    };

    test('Så markeres cellen med hideBehindExpander slik at den kun vises når raden er utvidet', (): void => {
      renderWithHiddenColumns('stack');

      expect(screen.getByTestId('alder-celle')).toHaveClass('table__cell--behind-expander');
    });

    test('Så vises innholdet i en vanlig utvidbar rad', (): void => {
      renderWithHiddenColumns('stack');

      const expandedRow = document.querySelector('.table__expanded-row');
      expect(expandedRow).toHaveClass('table__expanded-row--stack-only');
      expect(expandedRow).toHaveTextContent('Alder');
      expect(expandedRow).toHaveTextContent('38');
      expect(expandedRow).toHaveTextContent('Skjul detaljer');
    });

    test('Så rendres kun stack-expanderen når expandable er "stack"', (): void => {
      renderWithHiddenColumns('stack');

      const buttons = screen.getAllByRole('button', { name: 'Vis detaljer' });
      // Kun mobil/stack-expander, ingen egen expander-kolonne for store skjermer
      expect(buttons).toHaveLength(1);
      expect(buttons[0].closest('td')).toHaveClass('table__expander-cell-mobile');
    });

    test('Så rendres begge expandere når expandable er true', (): void => {
      renderWithHiddenColumns(true);

      expect(screen.getAllByRole('button', { name: 'Vis detaljer' })).toHaveLength(2);
    });
  });
});
