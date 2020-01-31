import React from 'react';
import {render} from '@testing-library/react';
import Button from './Button';
import {Icon} from '../../..';

test('displays the button', (): void => {
  const {container} = render(
    <Button size="small" variant="fill" color="strangulation">
      Button
    </Button>,
  );
  expect(container).toMatchSnapshot();
});

test('displays the button with icons', (): void => {
  const {container} = render(
    <Button size="small" variant="fill" color="strangulation">
      <Icon>alarmclock</Icon>
      Button
      <Icon>alarmclock</Icon>
    </Button>,
  );
  expect(container).toMatchSnapshot();
});
