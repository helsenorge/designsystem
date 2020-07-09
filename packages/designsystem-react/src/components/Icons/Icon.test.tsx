import React from 'react';
import {render} from '@testing-library/react';
import {Icon} from './Icon';

/* Should test all icons */
test('displays correct icon', (): void => {
  const {container} = render(<Icon type="alarmClock" />);
  expect(container).toMatchSnapshot();
});
