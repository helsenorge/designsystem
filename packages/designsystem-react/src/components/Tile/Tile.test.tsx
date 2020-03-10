import React from 'react';
import {render} from '@testing-library/react';
import Tile from './Tile';
import Icon from '../Icons';

test('displays tile', (): void => {
  const {container, getByText} = render(
    <Tile
      icon={<Icon size={64} type="alarmClock" />}
      title={<Tile.Title>Title</Tile.Title>}
      description="Description"
    />,
  );
  expect(container).toMatchSnapshot();
});
