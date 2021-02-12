import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import LinkList from './LinkList';

test('displays a list of links', (): void => {
  const { container } = render(
    <LinkList color="cherry">
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Link 1</LinkList.Link>
      <LinkList.Link>Link 2</LinkList.Link>
      <LinkList.Link>Link 3</LinkList.Link>
    </LinkList>
  );
  expect(container).toMatchSnapshot();
});
