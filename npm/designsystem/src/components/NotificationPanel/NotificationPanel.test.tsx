import React from 'react';
import { render } from '@testing-library/react';
import NotificationPanel from './NotificationPanel';

test('displays a notification panel', (): void => {
  const { container } = render(<NotificationPanel>Some text here for testing.</NotificationPanel>);
  expect(container).toMatchSnapshot();
});
