import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tile from './Tile';
import { IconSize } from '../../constants';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';

test('displays tile', (): void => {
  const { container } = render(
    <Tile
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>{'Title'}</Tile.Title>}
      description="Description"
    />
  );
  expect(container).toMatchSnapshot();
});

describe('Gitt at Tile skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <Tile
          icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
          title={<Tile.Title>{'Title'}</Tile.Title>}
          description="Description"
          testId="bare-tester"
        />
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });

  describe('Når target=_blank', (): void => {
    test('Skal Tile ha riktig rel-attributt', (): void => {
      render(
        <Tile
          icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
          title={<Tile.Title>{'Title'}</Tile.Title>}
          description="Description"
          target="_blank"
          testId="tester-rel"
        />
      );

      const component = screen.getByTestId('tester-rel');
      expect(component).toBeVisible();
      expect(component).toHaveAttribute('target', '_blank');
      expect(component).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
  describe('Når onClick er satt', () => {
    test('Skal kalles onClick-handler når man klikker på knappen', async () => {
      const onClickMock = jest.fn();
      render(
        <Tile
          icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
          title={<Tile.Title>{'Lenketekst'}</Tile.Title>}
          onClick={onClickMock}
          href="#"
        />
      );

      const tile = screen.getByRole('link', { name: 'Lenketekst' });
      await userEvent.click(tile);
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
