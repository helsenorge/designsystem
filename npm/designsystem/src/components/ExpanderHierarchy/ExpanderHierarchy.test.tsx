import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ExpanderHierarchy from '../ExpanderHierarchy';

describe('ExpanderHierarchy', () => {
  describe('gitt at ExpanderHierarchy har en Expander', () => {
    describe('når komponenten rendres', () => {
      it('så ser den riktig ut', async () => {
        const { container } = render(
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title="Nivå 1">{'hei'}</ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('når komponenten rendres med print=true', () => {
      it('så ser den riktig ut', async () => {
        const { container } = render(
          <ExpanderHierarchy print>
            <ExpanderHierarchy.Expander title="Nivå 1">{'hei'}</ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        expect(container).toMatchSnapshot();
      });
    });

    describe('når man åpner en Expander', () => {
      it('så vises innholdet i den', async () => {
        render(
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title="Nivå 1">{'hei'}</ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const heading = screen.getByRole('heading', { name: 'Nivå 1', level: 2 });
        expect(heading).toBeVisible();
        const button = screen.getByRole('button', { name: 'Nivå 1' });
        expect(button).toBeVisible();

        expect(button).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');

        const content = screen.getByText('hei');
        expect(content).toBeVisible();
      });
    });

    describe('når Expander har onExpand-callback', () => {
      it('så vises innholdet i den', async () => {
        const handleExpand = vi.fn();

        render(
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title="Nivå 1" onExpand={handleExpand}>
              {'hei'}
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const button = screen.getByRole('button', { name: 'Nivå 1' });
        await userEvent.click(button);
        await userEvent.click(button);

        expect(handleExpand).toHaveBeenCalledTimes(2);
        expect(handleExpand).toHaveBeenNthCalledWith(1, true);
        expect(handleExpand).toHaveBeenNthCalledWith(2, false);
      });
    });

    describe('når ExpanderHierarchy har htmlMarkup=h3', () => {
      it('så har overskriften riktig nivå', () => {
        render(
          <ExpanderHierarchy htmlMarkup="h3">
            <ExpanderHierarchy.Expander title="Nivå 1">{'hei'}</ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const heading = screen.getByRole('heading', { name: 'Nivå 1', level: 3 });
        expect(heading).toBeVisible();
      });
    });

    describe('når Expander har expanded=true', () => {
      it('så vises innholdet i den fra starten av', async () => {
        render(
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title="Nivå 1" expanded>
              {'hei'}
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const heading = screen.getByRole('heading', { name: 'Nivå 1', level: 2 });
        expect(heading).toBeVisible();
        const button = screen.getByRole('button', { name: 'Nivå 1' });
        expect(button).toBeVisible();

        expect(button).toHaveAttribute('aria-expanded', 'true');

        const content = screen.getByText('hei');
        expect(content).toBeVisible();
      });
    });

    describe('når testId-props er satt', () => {
      it('så kan komponentene finnes med testId', async () => {
        render(
          <ExpanderHierarchy testId="list">
            <ExpanderHierarchy.Expander title="Nivå 1" testId="button">
              {'hei'}
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const list = screen.getByTestId('list');
        expect(list).toBeVisible();
        const button = screen.getByTestId('button');
        expect(button).toBeVisible();
      });
    });
  });

  describe('gitt at ExpanderHierarchy har to nivåer', () => {
    describe('når man åpner alle nivåene', () => {
      it('så vises innholdet i dem', async () => {
        render(
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title="Nivå 1">
              {'hei'}
              <ExpanderHierarchy>
                <ExpanderHierarchy.Expander title="Nivå 2">{'hei igjen'}</ExpanderHierarchy.Expander>
              </ExpanderHierarchy>
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        );

        const heading = screen.getByRole('heading', { name: 'Nivå 1', level: 2 });
        expect(heading).toBeVisible();
        const button1 = screen.getByRole('button', { name: 'Nivå 1' });
        expect(button1).toBeVisible();

        expect(button1).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(button1);
        expect(button1).toHaveAttribute('aria-expanded', 'true');

        const content1 = screen.getByText('hei');
        expect(content1).toBeVisible();

        const button2 = screen.getByRole('button', { name: 'Nivå 2' });
        expect(button2).toBeVisible();

        expect(button2).toHaveAttribute('aria-expanded', 'false');

        await userEvent.click(button2);
        expect(button2).toHaveAttribute('aria-expanded', 'true');

        const content2 = screen.getByText('hei igjen');
        expect(content2).toBeVisible();
      });
    });
  });
});
