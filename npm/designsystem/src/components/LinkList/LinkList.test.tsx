import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import LinkList from './LinkList';

test('displays a list of links', (): void => {
  const { container } = render(
    <LinkList color="cherry">
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Link 1</LinkList.Link>
      <LinkList.Link>Link 2</LinkList.Link>
      <LinkList.Link>Link 3</LinkList.Link>
    </LinkList>
  );
  expect(container).toMatchSnapshot();
});

describe('Gitt at LinkList skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <LinkList testId="bare-tester">
          <LinkList.Link>Link 1</LinkList.Link>
          <LinkList.Link>Link 2</LinkList.Link>
          <LinkList.Link>Link 3</LinkList.Link>
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
            Ekstern lenke
          </LinkList.Link>
          <LinkList.Link>Link 2</LinkList.Link>
          <LinkList.Link>Link 3</LinkList.Link>
        </LinkList>
      );

      const component = screen.getByTestId('tester-rel');
      const anchor = component.firstChild;
      expect(component).toBeVisible();
      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
