import React from 'react';
import {render} from '@testing-library/react';
import {Icon} from './Icon';

test('displays correct icon', (): void => {
  const {container} = render(<Icon>alarmclock</Icon>);
  expect(container).toMatchSnapshot();
});
