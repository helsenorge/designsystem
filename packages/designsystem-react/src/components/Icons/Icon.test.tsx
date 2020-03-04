import React from 'react';
import {render} from '@testing-library/react';
import {Icon} from './Icon';

test('displays correct icon', (): void => {
  const {container} = render(<Icon>alarmClock</Icon>);
  expect(container).toMatchSnapshot();
});
