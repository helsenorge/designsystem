import React from 'react';
import {render} from '@testing-library/react';
import Button from './Button';
import {Icon} from '../..';

test('displays the button', (): void => {
  const {container} = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('displays the button with icons', (): void => {
  const {container} = render(
    <Button>
      <Icon type="alarmClock" />
      Button
      <Icon type="alarmClock" />
    </Button>,
  );
  expect(container).toMatchSnapshot();
});
