import React, { useEffect, useRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LinkList from './LinkList';
import Badge from '../Badge';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import ListHeader from '../ListHeader/ListHeader';
import ListHeaderText from '../ListHeader/ListHeaderText/ListHeaderText';

test('displays a list of links', (): void => {
  const { container } = render(
    <LinkList color="cherry">
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>{'Link 1'}</LinkList.Link>
      <LinkList.Link>{'Link 2'}</LinkList.Link>
      <LinkList.Link>{'Link 3'}</LinkList.Link>
    </LinkList>
  );
  expect(container).toMatchSnapshot();
});

describe('Gitt at LinkList skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <LinkList testId="bare-tester">
          <LinkList.Link>{'Link 1'}</LinkList.Link>
          <LinkList.Link>{'Link 2'}</LinkList.Link>
          <LinkList.Link>{'Link 3'}</LinkList.Link>
        </LinkList>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
  describe('Når target=_blank', (): void => {
    test('Så skal lenker ha riktig rel-attributt', (): void => {
      render(
        <LinkList>
          <LinkList.Link testId="tester-rel" target="_blank">
            {'Ekstern lenke'}
          </LinkList.Link>
          <LinkList.Link>{'Link 2'}</LinkList.Link>
          <LinkList.Link>{'Link 3'}</LinkList.Link>
        </LinkList>
      );

      const component = screen.getByTestId('tester-rel');
      // eslint-disable-next-line testing-library/no-node-access
      const anchor = component.firstChild;
      expect(component).toBeVisible();
      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
  describe('Når linkRef er satt på LinkList.Link', (): void => {
    test('Så er elementet tilgjengelig gjennom ref.current', async (): Promise<void> => {
      const mockListener = vi.fn();

      const LinkListWithRef: React.FC = () => {
        const ref = useRef<HTMLButtonElement>(null);

        useEffect(() => {
          ref.current?.addEventListener('click', () => {
            mockListener();
          });
        }, [ref]);

        return (
          <LinkList color={'neutral'}>
            <LinkList.Link linkRef={ref} htmlMarkup={'button'}>
              {'Innhold A-Å'}
            </LinkList.Link>
          </LinkList>
        );
      };

      render(<LinkListWithRef />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(mockListener).toHaveBeenCalledTimes(1);
    });
  });
});
describe('Gitt at linkene skal være buttons med onClick-handler', () => {
  describe('Når man klikker på linkene', () => {
    test('Så kalles onClick-handlerne', async () => {
      const mockClick1 = vi.fn();
      const mockClick2 = vi.fn();

      render(
        <LinkList color="neutral">
          <LinkList.Link htmlMarkup="button" onClick={mockClick1}>
            {'Link 1'}
          </LinkList.Link>
          <LinkList.Link htmlMarkup="button" onClick={mockClick2}>
            {'Link 2'}
          </LinkList.Link>
        </LinkList>
      );

      const link1 = screen.getByRole('button', { name: 'Link 1' });
      await userEvent.click(link1);
      expect(mockClick1).toHaveBeenCalledTimes(1);
      const link2 = screen.getByRole('button', { name: 'Link 2' });
      await userEvent.click(link2);
      expect(mockClick2).toHaveBeenCalledTimes(1);
    });
  });
});
describe('Gitt at linkene skal være vanlige lenker med onClick-handler', () => {
  describe('Når man klikker på linkene', () => {
    test('Så kalles onClick-handlerne', async () => {
      const mockClick1 = vi.fn();
      const mockClick2 = vi.fn();

      render(
        <LinkList color="neutral">
          <LinkList.Link htmlMarkup="a" onClick={mockClick1} href="#">
            {'Link 1'}
          </LinkList.Link>
          <LinkList.Link htmlMarkup="a" onClick={mockClick2} href="#">
            {'Link 2'}
          </LinkList.Link>
        </LinkList>
      );

      const link1 = screen.getByRole('link', { name: 'Link 1' });
      await userEvent.click(link1);
      expect(mockClick1).toHaveBeenCalledTimes(1);
      const link2 = screen.getByRole('link', { name: 'Link 2' });
      await userEvent.click(link2);
      expect(mockClick2).toHaveBeenCalledTimes(1);
    });
  });
});

describe('Gitt at linkene skal ha badges', () => {
  describe('Når badge har tekst', () => {
    test('Så vises badge', async () => {
      render(
        <LinkList testId="bare-tester">
          <LinkList.Link>
            <ListHeader>
              <ListHeaderText firstText="Link 1" />
              <Badge type="string" testId="badge">
                {'Badge'}
              </Badge>
            </ListHeader>
          </LinkList.Link>
        </LinkList>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
      const badge = screen.getByTestId('badge');
      expect(badge).toBeVisible();
    });
  });
  describe('Når Link har 2 badges', () => {
    test('Så vises begge', async () => {
      render(
        <LinkList testId="bare-tester">
          <LinkList.Link>
            <ListHeader>
              <ListHeaderText firstText="Link 1" />
              <Badge type="string" testId="first">
                {'Badge 1'}
              </Badge>
              <Badge type="string" testId="second">
                {'Badge 2'}
              </Badge>
            </ListHeader>
          </LinkList.Link>
        </LinkList>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
      const firstBadge = screen.getByTestId('first');
      expect(firstBadge).toBeVisible();
      const secondBadge = screen.getByTestId('second');
      expect(secondBadge).toBeVisible();
    });
  });
});
