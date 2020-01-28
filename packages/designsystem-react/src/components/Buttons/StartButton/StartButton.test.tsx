import React from 'react';
import {render} from '@testing-library/react';
import StartButton from './StartButton';
import {Icon} from '../../Icons';

test('renders default variant correctly', (): void => {
  const {container} = render(<StartButton leftIcon={<Icon>pencil</Icon>}>StartButton</StartButton>);
  expect(container).toMatchSnapshot();
});
