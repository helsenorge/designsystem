import React from 'react';
import { render, screen } from '@testing-library/react';
import Tile from './Tile';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';

test('displays tile', (): void => {
  const { container, getByText } = render(
    <Tile icon={<Icon size={64} svgIcon={AlarmClock} />} title={<Tile.Title>Title</Tile.Title>} description="Description" />
  );
  expect(container).toMatchSnapshot();
});

describe('Gitt at Tile skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <Tile
          icon={<Icon size={64} svgIcon={AlarmClock} />}
          title={<Tile.Title>Title</Tile.Title>}
          description="Description"
          testId="bare-tester"
        />
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
