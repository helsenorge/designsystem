import React from 'react';
import {render} from '@testing-library/react';
import ConfirmationButton from './ConfirmationButton';

test('renders default variant correctly', (): void => {
  const {container} = render(<ConfirmationButton>ConfirmationButton</ConfirmationButton>);
  expect(container).toMatchSnapshot();
});
