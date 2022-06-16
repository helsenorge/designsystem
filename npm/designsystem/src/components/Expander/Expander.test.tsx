import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Expander from './Expander';
import Calendar from '../Icons/Calendar';
import { isExportDeclaration } from 'typescript';

describe('Gitt at Expander skal vises vanlig', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så kan man klikke for å ekspandere innholdet', (): void => {
      render(
        <Expander title={'Knapp'}>
          <h1>Innhold i expander</h1>
        </Expander>
      );
      const expander = screen.getByRole('button', { name: 'Knapp' });
      expect(expander).toHaveAttribute('aria-expanded', 'false');

      userEvent.click(expander);
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
    test('Så vises innholdet ekspandert fra starten av', (): void => {
      render(
        <Expander title={'Knapp'} expanded>
          <h1>Innhold i expander</h1>
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
        <Expander title={'Knapp'} size="large" color="blueberry" svgIcon={Calendar}>
          <h1>Innhold i expander</h1>
        </Expander>
      );

      expect(container).toMatchSnapshot();
    });
  });
});
describe('Gitt at Expander har onExpand-callback', (): void => {
  describe('Når man klikker på expanderen to ganger', (): void => {
    test('Så kalles callback først med true og så med false', (): void => {
      const handleExpand = jest.fn();
      render(<Expander title={'Knapp'} testId={'knapp'} onExpand={handleExpand}></Expander>);

      const expander = screen.getByTestId('knapp');

      userEvent.click(expander);
      userEvent.click(expander);

      expect(handleExpand).toHaveBeenCalledTimes(2);
      expect(handleExpand).toHaveBeenNthCalledWith(1, true);
      expect(handleExpand).toHaveBeenNthCalledWith(2, false);
    });
  });
});
describe('Gitt at Expander har onExpand-callback og expanded satt til true', (): void => {
  describe('Når man klikker på expanderen én gang', (): void => {
    test('Så kalles callback først med true og så med false', (): void => {
      const handleExpand = jest.fn();
      render(<Expander title={'Knapp'} testId={'knapp'} onExpand={handleExpand} expanded></Expander>);

      const expander = screen.getByTestId('knapp');

      userEvent.click(expander);

      expect(handleExpand).toHaveBeenCalledTimes(2);
      expect(handleExpand).toHaveBeenNthCalledWith(1, true);
      expect(handleExpand).toHaveBeenNthCalledWith(2, false);
    });
  });
});
describe('Gitt at Expander vises med et fokuserbart element', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så kan man tabbe til elementet etter at ekspanderen er åpnet', (): void => {
      render(
        <Expander title={'Knapp'}>
          <button>En knapp til</button>
        </Expander>
      );

      const expander = screen.getByRole('button', { name: 'Knapp' });

      userEvent.click(expander);
      userEvent.tab();
      const focusableButton = screen.getByRole('button', { name: 'En knapp til' });
      expect(focusableButton).toHaveFocus();
    });
  });
});
describe('Gitt at Expander vises react-element som title', (): void => {
  describe('Når Expanderen vises', (): void => {
    test('Så fungerer Expanderen slik den skal', (): void => {
      render(
        <Expander title={<span data-testid="tittel">Tittel</span>}>
          <button>En knapp til</button>
        </Expander>
      );

      const title = screen.getByTestId('tittel');
      expect(title).toBeVisible();

      userEvent.click(title);
      const expander = screen.getByRole('button', { name: 'Tittel' });
      expect(expander).toHaveAttribute('aria-expanded', 'true');
    });
  });
});
