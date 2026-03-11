import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpanderSize } from './constants';
import Expander from './Expander';
import Calendar from '../Icons/Calendar';

describe('Gitt at Expander skal vises vanlig', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så kan man klikke for å ekspandere innholdet', async (): Promise<void> => {
      render(
        <Expander title={'Knapp'}>
          <h1>{'Innhold i expander'}</h1>
        </Expander>
      );
      const expander = screen.getByRole('button', { name: 'Knapp' });
      expect(expander).toHaveAttribute('aria-expanded', 'false');

      await userEvent.click(expander);
      expect(expander).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('heading', { name: 'Innhold i expander' })).toBeInTheDocument();
    });
    test('Så har den riktig analyticsid', (): void => {
      render(<Expander title={'Knapp'} testId={'knapp'}></Expander>);

      const expander = screen.getByTestId('knapp');

      expect(expander).toHaveAttribute('data-analyticsid', 'expander');
    });
  });
});
describe('Gitt at Expander skal vises som ekspandert', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så vises innholdet ekspandert fra starten av', async (): Promise<void> => {
      render(
        <Expander title={'Knapp'} expanded>
          <h1>{'Innhold i expander'}</h1>
        </Expander>
      );

      const expander = screen.getByRole('button', { name: 'Knapp' });
      expect(expander).toHaveAttribute('aria-expanded', 'true');

      const content = screen.getByRole('heading', { name: 'Innhold i expander' });
      expect(content).toBeInTheDocument();
    });
  });
});
describe('Gitt at Expander skal vises som large, med farge og ikon', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så rendres expanderen som den skal', (): void => {
      const { container } = render(
        <Expander title={'Knapp'} size={ExpanderSize.large} color="blueberry" svgIcon={Calendar}>
          <h1>{'Innhold i expander'}</h1>
        </Expander>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
describe('Gitt at Expander har onExpand-callback', (): void => {
  describe('Når man klikker på expanderen to ganger', (): void => {
    test('Så kalles callback først med true og så med false', async (): Promise<void> => {
      const handleExpand = vi.fn();
      render(<Expander title={'Knapp'} testId={'knapp'} onExpand={handleExpand}></Expander>);

      const expander = screen.getByTestId('knapp');

      await userEvent.click(expander);
      await userEvent.click(expander);

      expect(handleExpand).toHaveBeenCalledTimes(2);
      expect(handleExpand).toHaveBeenNthCalledWith(1, true);
      expect(handleExpand).toHaveBeenNthCalledWith(2, false);
    });
  });
});
describe('Gitt at Expander har onExpand-callback og expanded satt til true', (): void => {
  describe('Når man klikker på expanderen én gang', (): void => {
    test('Så kalles callback først med true og så med false', async (): Promise<void> => {
      const handleExpand = vi.fn();
      render(<Expander title={'Knapp'} testId={'knapp'} onExpand={handleExpand} expanded></Expander>);

      const expander = screen.getByTestId('knapp');

      await userEvent.click(expander);

      expect(handleExpand).toHaveBeenCalledTimes(2);
      expect(handleExpand).toHaveBeenNthCalledWith(1, true);
      expect(handleExpand).toHaveBeenNthCalledWith(2, false);
    });
  });
});
describe('Gitt at Expander vises med et fokuserbart element', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så kan man tabbe til elementet etter at ekspanderen er åpnet', async (): Promise<void> => {
      render(
        <Expander title={'Knapp'}>
          <button>{'En knapp til'}</button>
        </Expander>
      );

      const expander = screen.getByRole('button', { name: 'Knapp' });

      await userEvent.click(expander);
      await userEvent.tab();
      const focusableButton = screen.getByRole('button', { name: 'En knapp til' });
      expect(focusableButton).toHaveFocus();
    });
  });
});
describe('Gitt at Expander skal vises', (): void => {
  describe('Når renderChildrenWhenClosed ikke er satt', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <Expander title={'Knapp'}>
          <span data-testid="test">{'Test'}</span>
        </Expander>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er true', (): void => {
    test('Så er children rendret', (): void => {
      render(
        <Expander title={'Knapp'} renderChildrenWhenClosed={true}>
          <span data-testid="test">{'Test'}</span>
        </Expander>
      );

      const child = screen.getByTestId('test');
      expect(child).toBeInTheDocument();
    });
  });
  describe('Når renderChildrenWhenClosed er false', (): void => {
    test('Så er children ikke rendret', (): void => {
      render(
        <Expander title={'Knapp'} renderChildrenWhenClosed={false}>
          <span data-testid="test">{'Test'}</span>
        </Expander>
      );

      const child = screen.queryByTestId('test');
      expect(child).not.toBeInTheDocument();
    });
  });
});
