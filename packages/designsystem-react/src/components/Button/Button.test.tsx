import React from 'react';
import {render} from '@testing-library/react';
import {Button} from './Button';

test('renders default variant correctly', (): void => {
  const {container} = render(<Button>Button</Button>);
  expect(container).toMatchSnapshot();
});
