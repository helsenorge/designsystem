import React from 'react';
import {render} from '@testing-library/react';
import Tile from './Tile';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';

test('displays tile', (): void => {
  const {container, getByText} = render(
    <Tile
      icon={<Icon size={64} svgIcon={AlarmClock} />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Description"
    />,
  );
  expect(container).toMatchSnapshot();
});
