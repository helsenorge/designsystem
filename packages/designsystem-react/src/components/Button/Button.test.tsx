import React from 'react';
import {render} from '@testing-library/react';
import Button from './Button';
import Icon from '../Icons';
import Check from '../Icons/Check';

test('displays the button', (): void => {
  const {container} = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});

test('displays the button with icons', (): void => {
  const {container} = render(
    <Button>
      <Icon svgIcon={Check} />
      Button
      <Icon svgIcon={Check} />
    </Button>,
  );
  expect(container).toMatchSnapshot();
});
