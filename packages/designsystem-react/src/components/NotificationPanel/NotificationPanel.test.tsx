import React from 'react';
import {render} from '@testing-library/react';
import NotificationPanel from './NotificationPanel';

test('displays a notification panel', (): void => {
  const {container, getByText} = render(<NotificationPanel></NotificationPanel>);
  expect(container).toMatchSnapshot();
});
