import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterLinkList from './FilterLinkList';

describe('Gitt at FilterLinkList skal vises', (): void => {
  describe('Når FilterLinkList rendres med lenker', (): void => {
    test('Så vises lenkene', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Dato/periode'} onClick={vi.fn()} />
          <FilterLinkList.Link title={'Dokumenttype'} onClick={vi.fn()} />
        </FilterLinkList>
      );

      const link1 = screen.getByText('Dato/periode');
      const link2 = screen.getByText('Dokumenttype');

      expect(link1).toBeVisible();
      expect(link2).toBeVisible();
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <FilterLinkList testId="bare-tester">
          <FilterLinkList.Link title={'Dato/periode'} onClick={vi.fn()} />
        </FilterLinkList>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når testId-prop er satt på Link', (): void => {
    test('Så kan Link-elementet finnes ved hjelp av testId', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Dato/periode'} testId="link-tester" onClick={vi.fn()} />
        </FilterLinkList>
      );

      const component = screen.getByTestId('link-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når children ikke er FilterLinkList.Link', (): void => {
    test('Så filtreres ugyldige children bort', (): void => {
      render(
        <FilterLinkList testId="filter-list">
          <FilterLinkList.Link title={'Gyldig lenke'} onClick={vi.fn()} />
          <li>{'Ugyldig element'}</li>
          <div>{'Også ugyldig'}</div>
        </FilterLinkList>
      );

      expect(screen.getByText('Gyldig lenke')).toBeVisible();
      expect(screen.queryByText('Ugyldig element')).not.toBeInTheDocument();
      expect(screen.queryByText('Også ugyldig')).not.toBeInTheDocument();
    });
  });

  describe('Når komponenten rendres', (): void => {
    test('Så er den semantisk en liste med listeelementer', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Lenke 1'} onClick={vi.fn()} />
          <FilterLinkList.Link title={'Lenke 2'} onClick={vi.fn()} />
        </FilterLinkList>
      );

      const list = screen.getByRole('list');
      expect(list).toBeVisible();

      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
    });
  });
});

describe('Gitt at FilterLinkList.Link har chips', (): void => {
  describe('Når chips-prop er satt', (): void => {
    test('Så vises chipsene', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Dato/periode'} chips={['13.09.2023-13.09.2024']} onClick={vi.fn()} />
        </FilterLinkList>
      );

      const chip = screen.getByText('13.09.2023-13.09.2024');
      expect(chip).toBeVisible();
    });
  });

  describe('Når flere chips er satt', (): void => {
    test('Så vises alle chipsene', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Filter'} chips={['Chip 1', 'Chip 2', 'Chip 3']} onClick={vi.fn()} />
        </FilterLinkList>
      );

      expect(screen.getByText('Chip 1')).toBeVisible();
      expect(screen.getByText('Chip 2')).toBeVisible();
      expect(screen.getByText('Chip 3')).toBeVisible();
    });
  });
});

describe('Gitt at FilterLinkList.Link har onClick-handler', (): void => {
  describe('Når man klikker på lenken', (): void => {
    test('Så kalles onClick-handleren', async (): Promise<void> => {
      const mockClick = vi.fn();

      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Dato'} onClick={mockClick} />
        </FilterLinkList>
      );

      const button = screen.getByRole('button', { name: /Dato/i });
      await userEvent.click(button);

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når man bruker tastatur for å aktivere lenken', (): void => {
    test('Så kalles onClick-handleren ved Enter', async (): Promise<void> => {
      const mockClick = vi.fn();

      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Dato'} onClick={mockClick} />
        </FilterLinkList>
      );

      const button = screen.getByRole('button', { name: /Dato/i });
      button.focus();
      await userEvent.keyboard('{Enter}');

      expect(mockClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når man tabulerer gjennom listen', (): void => {
    test('Så kan alle lenkene nås med tastatur', async (): Promise<void> => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Første'} onClick={vi.fn()} />
          <FilterLinkList.Link title={'Andre'} onClick={vi.fn()} />
          <FilterLinkList.Link title={'Tredje'} onClick={vi.fn()} />
        </FilterLinkList>
      );

      await userEvent.tab();
      expect(screen.getByRole('button', { name: /Første/i })).toHaveFocus();

      await userEvent.tab();
      expect(screen.getByRole('button', { name: /Andre/i })).toHaveFocus();

      await userEvent.tab();
      expect(screen.getByRole('button', { name: /Tredje/i })).toHaveFocus();
    });
  });
});

describe('Gitt at FilterLinkList.Link har children i stedet for title', (): void => {
  describe('Når children brukes', (): void => {
    test('Så rendres innholdet riktig', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link onClick={vi.fn()}>
            <span>{'Egendefinert innhold'}</span>
          </FilterLinkList.Link>
        </FilterLinkList>
      );

      const content = screen.getByText('Egendefinert innhold');
      expect(content).toBeVisible();
    });
  });

  describe('Når title er satt', (): void => {
    test('Så brukes title i stedet for children', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Title-tekst'} onClick={vi.fn()}>
            <span>{'Children-tekst'}</span>
          </FilterLinkList.Link>
        </FilterLinkList>
      );

      expect(screen.getByText('Title-tekst')).toBeVisible();
      expect(screen.queryByText('Children-tekst')).not.toBeInTheDocument();
    });
  });
});

describe('Gitt at FilterLinkList.Link rendres som button', (): void => {
  describe('Når lenken rendres', (): void => {
    test('Så har button type="button"', (): void => {
      render(
        <FilterLinkList>
          <FilterLinkList.Link title={'Klikk meg'} onClick={vi.fn()} />
        </FilterLinkList>
      );

      const button = screen.getByRole('button', { name: /Klikk meg/i });
      expect(button).toHaveAttribute('type', 'button');
    });
  });
});
