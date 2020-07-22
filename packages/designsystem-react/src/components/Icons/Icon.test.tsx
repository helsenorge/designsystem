import React from 'react';
import {render} from '@testing-library/react';
import {Icon} from './Icon';
import AlarmClock from '../Icons/AlarmClock';

/* Should test all icons */
test('displays correct icon', (): void => {
  const {container} = render(<Icon svgIcon={AlarmClock} />);
  expect(container).toMatchSnapshot();
});
